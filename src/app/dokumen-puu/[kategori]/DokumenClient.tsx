"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useMemo, useRef, useState } from "react";
import BreadcumbPage from "@/components/BreadcumbPage";

/* ================= TYPES ================= */
export interface DokumenItem {
  jenis: string;
  nomor: string;
  judul: string;
  tematik: string;
  penerbit: string;
  instansi: string;
  tahun: number;
  slug: string;
  kategori: string;
}

export interface DokumenFilters {
  jenis: string[];
  nomor: string;
  judul: string;
  tahun: string;
}

/* ================= DUMMY DATA ================= */
import { dummyData } from "@/lib/dokumen-data";
import DokumenList from "@/components/dokumen-puu/DokumenList";
import { kategoriLabel } from "@/lib/kategori";
import FilterSidebarPuu from "@/components/dokumen-puu/FilterSidebarPuu";
// 👉 kamu bisa pindahkan data peraturan ke sini juga

export default function DokumenClient() {
  const { kategori } = useParams<{ kategori: string }>();

  const initialFilters: DokumenFilters = {
    jenis: [],
    nomor: "",
    judul: "",
    tahun: "",
  };

  const [filters, setFilters] = useState(initialFilters);
  const [draftFilters, setDraftFilters] = useState(initialFilters);

  /* ================= FILTER DATA ================= */
  const filteredData = useMemo(() => {
    return dummyData
      .filter((item) => item.kategori === kategori)
      .filter((item) => {
        return (
          (!filters.jenis.length || filters.jenis.includes(item.jenis)) &&
          (!filters.nomor ||
            item.nomor.toLowerCase().includes(filters.nomor.toLowerCase())) &&
          (!filters.judul ||
            item.judul.toLowerCase().includes(filters.judul.toLowerCase())) &&
          (!filters.tahun || item.tahun === Number(filters.tahun))
        );
      });
  }, [filters, kategori]);

  const listRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      {/* 🔹 BREADCUMB */}
      <BreadcumbPage title={`Dokumen ${kategoriLabel(kategori)}`} />

      {/* 🔹 BACKGROUND */}
      <div className="bg-[linear-gradient(180deg,rgba(102,90,0,0.05)_0%,rgba(102,90,0,0)_100%)]">
        <div className="max-w-7xl mx-auto px-6 xl:px-0 py-20">
          <div className="grid grid-cols-1 md:grid-cols-[30%_64%] xl:grid-cols-[30%_66%] gap-14 xl:gap-13">
            {/* 🔹 FILTER */}
            <FilterSidebarPuu
              filters={filters}
              setFilters={setFilters}
              draftFilters={draftFilters}
              setDraftFilters={setDraftFilters}
            />

            {/* 🔹 LIST */}
            <DokumenList
              data={filteredData}
              filters={filters}
              setFilters={setFilters}
              ref={listRef}
              basePath={`/dokumen-puu/${kategori}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
