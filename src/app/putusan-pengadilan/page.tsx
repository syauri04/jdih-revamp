"use client";

import { useMemo, useState, useRef } from "react";
import BreadcumbPage from "@/components/BreadcumbPage";
import PutusanList from "@/components/putusan/PutusanList";
import FilterPutusan from "@/components/putusan/FilterPutusan";

export interface PeraturanItem {
  jenis: string;
  nomor: string;
  judul: string;
  tahun: number;
  slug: string;
}
export interface PeraturanFilters {
  jenis: string[];
  nomor: string;
  judul: string;
  tahun: string;
}

const dummyData: PeraturanItem[] = [
  {
    jenis: "mk",
    nomor: "138/PUU-XIII/2015",
    judul: "Uji Materiil Undang-Undang Nomor 39 Tahun 2015 tentang Perkebunan",
    tahun: 2015,
    slug: "uji-materiil-uu-no-39-tahun-2015",
  },
  {
    jenis: "mk",
    nomor: "129/PUU-XIII/2015",
    judul:
      "Uji Materiil Undang-Undang Nomor 41 Tahun 2015 tentang Perubahan Atas Undang-Undang Nomor 18 Tahun 2009 tentang Peternakan dan Kesehatan Hewan",
    tahun: 2015,
    slug: "uji-materiil-uu-no-41-tahun-2015",
  },
  {
    jenis: "mk",
    nomor: "122/PUU-XIII/2015",
    judul: "Uji Materiil Undang-Undang Nomor 122 Tahun 2015 tentang Perkebunan",
    tahun: 2015,
    slug: "uji-materiil-uu-no-122-tahun-2015",
  },
  {
    jenis: "ma",
    nomor: "185/B/2024/PT.TUN.JKT",
    judul: "Putusan Nomor 185/B/2024/PT.TUN.JKT",
    tahun: 2024,
    slug: "putusan-ma-185-b-2024-pt-tun-jkt",
  },
  {
    jenis: "ptunj",
    nomor: "93/B/TF/2025/PT.TUN.JKT",
    judul:
      "Putusan Nomor 93/B/TF/2025/PT.TUN.JKT. Tindakan Administrasi Pemerintah/Tindakan Faktual",
    tahun: 2025,
    slug: "putusan-ptunj-93-b-tf-2025-pt-tun-jkt",
  },
];

export default function PutusanPage() {
  const [filters, setFilters] = useState({
    jenis: [] as string[],
    nomor: "",
    judul: "",
    tahun: "",
  });

  const [draftFilters, setDraftFilters] = useState(filters);

  const filteredData = useMemo(() => {
    return dummyData.filter((item) => {
      return (
        (!filters.jenis.length || filters.jenis.includes(item.jenis)) &&
        (!filters.nomor ||
          item.nomor.toLowerCase().includes(filters.nomor.toLowerCase())) &&
        (!filters.judul ||
          item.judul.toLowerCase().includes(filters.judul.toLowerCase())) &&
        (!filters.tahun || item.tahun === Number(filters.tahun))
      );
    });
  }, [filters]);

  const listRef = useRef<HTMLDivElement>(null);

  return (
    <div className="">
      <BreadcumbPage title="Putusan Pengadilan" />

      <div className="bg-[linear-gradient(180deg,rgba(102,90,0,0.05)_0%,rgba(102,90,0,0)_100%)]">
        <div className="max-w-7xl mx-auto py-20">
          <div className="grid grid-cols-1 md:grid-cols-[30%_64%] xl:grid-cols-[30%_66%] gap-14 xl:gap-13">
            <FilterPutusan
              filters={filters}
              setFilters={setFilters}
              draftFilters={draftFilters}
              setDraftFilters={setDraftFilters}
            />
            <PutusanList
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
