"use client";

import { useMemo, useState, useRef } from "react";
import BreadcumbPage from "@/components/BreadcumbPage";
import FilterArtikel from "@/components/artikel/FilterArtikel";
import ArtikelList from "@/components/artikel/ArtikelList";

export interface PeraturanItem {
  tipe: string;
  judul: string;
  tahun: number;
  slug: string;
}
export interface PeraturanFilters {
  tipe: string[];
  judul: string;
  tahun: string;
}

const dummyData: PeraturanItem[] = [
  {
    tipe: "Buletin",
    judul: "Kolaborasi Wujudkan Kedaulatan Pangan",
    tahun: 2023,
    slug: "kolaborasi-wujudkan-kedaulatan-pangan",
  },
  {
    tipe: "Jurnal",
    judul:
      "Model Pengawasan Pangan Dengan Pendekatan Rantai Pangan (Food Chain Approach)",
    tahun: 2025,
    slug: "model-pengawasan-pangan",
  },
  {
    tipe: "Jurnal",
    judul:
      "Penyelesaian Sengketa di World Trade Organization (Tinjauan Kasus Importasi Produk Hortikultura, Hewan dan Produk Hewan – DS 477/478)",
    tahun: 2025,
    slug: "penyelesaian-sengketa-di-world-trade-organization",
  },
  {
    tipe: "Jurnal",
    judul:
      "Kedudukan Hukum Peraturan Presiden Nomor 66 Tahun 2021 tentang Badan Pangan Nasional Terhadap Pasal 151 Undang-Undang Nomor 18 Tahun 2012 tentang Pangan",
    tahun: 2021,
    slug: "kedudukan-hukum-peraturan-presiden-nomor-66-tahun-2021",
  },
];

export default function ArtikelPage() {
  const [filters, setFilters] = useState({
    tipe: [] as string[],
    judul: "",
    tahun: "",
  });

  const [draftFilters, setDraftFilters] = useState(filters);

  const filteredData = useMemo(() => {
    return dummyData.filter((item) => {
      return (
        (!filters.tipe.length || filters.tipe.includes(item.tipe)) &&
        (!filters.judul ||
          item.judul.toLowerCase().includes(filters.judul.toLowerCase())) &&
        (!filters.tahun || item.tahun === Number(filters.tahun))
      );
    });
  }, [filters]);

  const listRef = useRef<HTMLDivElement>(null);

  return (
    <div className="">
      <BreadcumbPage title="Artikel" />

      <div className="bg-[linear-gradient(180deg,rgba(102,90,0,0.05)_0%,rgba(102,90,0,0)_100%)]">
        <div className="max-w-7xl mx-auto py-20">
          <div className="grid grid-cols-1 md:grid-cols-[30%_64%] xl:grid-cols-[30%_66%] gap-14 xl:gap-13">
            <FilterArtikel
              filters={filters}
              setFilters={setFilters}
              draftFilters={draftFilters}
              setDraftFilters={setDraftFilters}
            />
            <ArtikelList
              data={filteredData}
              filters={filters}
              setFilters={setFilters}
              ref={listRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
