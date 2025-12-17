"use client";

import Link from "next/link";
import { FiX } from "react-icons/fi";
import { forwardRef } from "react";
import type { PeraturanItem, PeraturanFilters } from "@/types/peraturan";

interface Props {
  data: PeraturanItem[];
  filters: PeraturanFilters;
  setFilters: React.Dispatch<React.SetStateAction<PeraturanFilters>>;
}

const PeraturanList = forwardRef<HTMLDivElement, Props>(
  ({ data, filters, setFilters }, ref) => {
    const JENIS_LABEL: Record<string, string> = {
      uu: "Undang - Undang",
      pp: "Peraturan Pemerintah",
      perpres: "Peraturan Presiden",
      permentan: "Peraturan Menteri Pertanian",
      kepmen: "Keputusan Menteri",
      inpres: "Instruksi Presiden",
    };

    /* ======================
       BUILD BADGES
    ====================== */
    const badges = [
      ...filters.jenis.map((j) => ({
        key: "jenis" as const,
        label: `Jenis : ${JENIS_LABEL[j] ?? j}`,
        value: j,
      })),
      ...filters.tematik.map((j) => ({
        key: "tematik" as const,
        label: `Tematik : ${j}`,
        value: j,
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
    const removeFilter = (key: keyof PeraturanFilters, value?: string) => {
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
          hasil ({elapsedTime} detik)
        </div>

        {/* ======================
            LIST DATA
        ====================== */}
        {data.map((item) => (
          <Link
            key={item.slug}
            href={`/peraturan/${item.slug}`}
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
                <span className="inline-block px-3 py-1 text-sm font-inter text-[#9F5B2D] bg-[#9F5B2D]/10 border border-[#9F5B2D] rounded-lg w-fit">
                  {JENIS_LABEL[item.jenis]}
                </span>

                <span className="font-inter text-base text-[#097969]">
                  {item.nomor}
                </span>
              </div>

              {/* TITLE */}
              <h3 className="font-bold text-[20px] leading-6 tracking-[-0.01em] text-black/80 mb-4 pr-0 lg:pr-20 xl:pr-36">
                {item.judul}
              </h3>

              {/* META */}
              <div className="flex flex-wrap items-center gap-x-8 gap-y-2 mb-3">
                <span className="font-inter text-base text-black/40">
                  Ditetapkan: {item.ditetapkan}
                </span>
                <span className="font-inter text-base text-black/40">
                  Diundangkan: {item.diundangkan}
                </span>
              </div>

              {/* STATUS */}
              <div className="font-inter text-base mb-3">
                Status:{" "}
                <span
                  className={
                    item.status === "Berlaku"
                      ? "text-[#097969]"
                      : "text-[#DE1310]"
                  }
                >
                  {item.status}
                </span>
              </div>

              <div className="font-inter text-base">
                Tematik:{" "}
                <span className="font-bold text-[#043927]">{item.tematik}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }
);

PeraturanList.displayName = "PeraturanList";
export default PeraturanList;
