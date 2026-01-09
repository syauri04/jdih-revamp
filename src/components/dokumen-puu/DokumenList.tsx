"use client";

import Link from "next/link";
import { FiX } from "react-icons/fi";
import { forwardRef } from "react";
import { DokumenFilters, DokumenItem } from "@/types/dokumen";

interface Props {
  data: DokumenItem[];
  filters: DokumenFilters;
  setFilters: React.Dispatch<React.SetStateAction<DokumenFilters>>;
  basePath: string;
}

const DokumenList = forwardRef<HTMLDivElement, Props>(
  ({ data, filters, setFilters, basePath }, ref) => {
    const JENIS_LABEL: Record<string, string> = {
      peraturan: "Peraturan Undang-Undang",
      putusan: "Putusan Pengadilan",
      mongrafi: "Monografi Hukum",
      artikel: "Artikel Hukum",
    };
    const KATEGORI_LABEL: Record<string, string> = {
      "program-penyusunan-puu": "Program Penyusunan PUU",
      "rancangan-puu": "Rancangan PUU",
      "naskah-akademik": "Naskah Akademik",
      "kajian-penelitian-hukum": "Kajian/Penelitian Hukum",
      "risalah-pembahasan": "Risalah Pembahasan",
    };

    /* ======================
       BUILD FILTER BADGES
    ====================== */
    const badges = [
      ...filters.jenis.map((j) => ({
        key: "jenis" as const,
        label: `Tipe : ${JENIS_LABEL[j] ?? j}`,
        value: j,
      })),
      ...filters.tematik.map((t) => ({
        key: "tematik" as const,
        label: `Tematik : ${t}`,
        value: t,
      })),
      ...filters.status.map((s) => ({
        key: "status" as const,
        label: `Status : ${s}`,
        value: s,
      })),
      ...(filters.nomor
        ? [
            {
              key: "nomor" as const,
              label: `Nomor : ${filters.nomor}`,
              value: filters.nomor,
            },
          ]
        : []),
      ...(filters.judul
        ? [
            {
              key: "judul" as const,
              label: `Judul : ${filters.judul}`,
              value: filters.judul,
            },
          ]
        : []),
      ...(filters.tahun
        ? [
            {
              key: "tahun" as const,
              label: `Tahun : ${filters.tahun}`,
              value: filters.tahun,
            },
          ]
        : []),
    ];

    /* ======================
       REMOVE FILTER
    ====================== */
    const removeFilter = (key: keyof DokumenFilters, value?: string) => {
      setFilters((prev) => {
        if (Array.isArray(prev[key])) {
          return {
            ...prev,
            [key]: prev[key].filter((v) => v !== value),
          };
        }

        return {
          ...prev,
          [key]: "",
        };
      });
    };

    const resultCount = data.length;
    const elapsedTime = "0.001"; // UX only

    return (
      <div ref={ref} className="space-y-5">
        {/* ======================
            FILTER BADGES
        ====================== */}
        {badges.length > 0 && (
          <div className="flex flex-wrap items-center gap-2">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="
                  inline-flex items-center gap-2
                  px-4 py-2
                  bg-[#043927]
                  rounded-[22px]
                  font-inter
                  text-white
                  text-sm
                "
              >
                <span>{badge.label}</span>
                <FiX
                  size={14}
                  className="cursor-pointer text-white/80 hover:text-white"
                  onClick={() => removeFilter(badge.key, badge.value)}
                />
              </div>
            ))}
          </div>
        )}

        {/* ======================
            RESULT INFO
        ====================== */}
        <div className="text-base leading-6 tracking-[-0.02em] text-black/60">
          Ditemukan{" "}
          <span className="font-medium text-black/80">
            {resultCount.toLocaleString("id-ID")}
          </span>{" "}
          dokumen ({elapsedTime} detik)
        </div>

        {/* ======================
            LIST DATA
        ====================== */}
        {data.map((item) => (
          <Link
            key={item.slug}
            href={`${basePath}/${item.slug}`}
            className="block"
          >
            <div
              className="
                w-full
                bg-white
                border border-black/10
                rounded-[20px]
                p-8
                hover:border-[#097969]
                hover:shadow-sm
                transition
              "
            >
              {/* HEADER */}
              <div className="flex flex-col gap-2 mb-2">
                <span className="inline-block px-3 py-1 text-sm font-inter text-[#FF8000] bg-[#9F5B2D]/10 border border-[#FF8000] rounded-lg w-fit">
                  {KATEGORI_LABEL[item.kategori] ?? item.kategori}
                </span>
              </div>

              {/* TITLE */}
              <h3 className="font-bold text-[20px] leading-6 tracking-[-0.01em] text-black/80 mb-4 pr-0 lg:pr-20 xl:pr-36">
                {item.judul}
              </h3>

              <div className="font-inter text-base">
                Tahun Terbit:{" "}
                <span className="font-bold text-[#043927]">{item.tahun}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }
);

DokumenList.displayName = "DokumenList";
export default DokumenList;
