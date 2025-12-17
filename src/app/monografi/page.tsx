"use client";

import { useMemo, useState, useRef } from "react";
import BreadcumbPage from "@/components/BreadcumbPage";
import FilterMonografi from "@/components/monografi/FilterMonografi";
import MonografiList from "@/components/monografi/MonografiList";

export interface PeraturanItem {
  penerbit: string;
  namaPenerbit: string;
  image: string;
  judul: string;
  tahun: number;
  slug: string;
}
export interface PeraturanFilters {
  penerbit: string[];
  judul: string;
  tahun: string;
}

const dummyData: PeraturanItem[] = [
  {
    penerbit: "biro-hukum",
    namaPenerbit: "Biro Hukum",

    judul: "Himpunan Peraturan Menteri Pertanian Tahun 2020",
    image: "/assets/imageMonografi.png",
    tahun: 2020,
    slug: "himpunan-peraturan-menteri-pertanian-tahun-2020",
  },
  {
    penerbit: "percetakan-negara-ri",
    namaPenerbit: "Percetakan Negara RI",

    judul:
      "Tambahan Lembaran Negara Republik Inonesia : Tahun 1963 No. 2523 - 2605",
    image: "/assets/imageMonografi.png",
    tahun: 1968,
    slug: "tambahan-lembaran-negara-republik-indonesia-tahun-1963-no-2523-2605",
  },
  {
    penerbit: "bphn",
    namaPenerbit: "BPHN",

    judul:
      "Analisis dan Evaluasi Hukum Dalam Rangka Peningkatan Daya Saing Tenaga Kerja",
    image: "/assets/imageMonografi.png",
    tahun: 2018,
    slug: "Analisis-dan-evaluasi-hukum-dalam-rangka-peningkatan-daya-saing-tenaga-kerja",
  },
  {
    penerbit: "lange-co",
    namaPenerbit: "Lange & co.",

    judul: "Staatblad Van Nederlandch Indie",
    image: "/assets/imageMonografi.png",
    tahun: 1869,
    slug: "staatblad-van-nederlandch-indie",
  },
  {
    penerbit: "w-breunig",
    namaPenerbit: "W.Breunig",

    judul: "Staatblad Van Nederlandch Indie",
    image: "/assets/imageMonografi.png",
    tahun: 1869,
    slug: "staatblad-van-nederlandch-indie-2",
  },
  {
    penerbit: "g-kolff-co",
    namaPenerbit: "Batavia, G.Kolff & Co.",

    judul: "Staatblad Van Nederlandch Indie",
    image: "/assets/imageMonografi.png",
    tahun: 1878,
    slug: "staatblad-van-nederlandch-indie-3",
  },
  {
    penerbit: "g-kolff-co",
    namaPenerbit: "Batavia, G.Kolff & Co.",

    judul: "Staatblad Van Nederlandch Indie",
    image: "/assets/imageMonografi.png",
    tahun: 1878,
    slug: "staatblad-van-nederlandch-indie-4",
  },
  {
    penerbit: "dorp-co",
    namaPenerbit: "Dorp & co.",

    judul: "Staatblad Van Nederlandch Indie",
    image: "/assets/imageMonografi.png",
    tahun: 1908,
    slug: "staatblad-van-nederlandch-indie-5",
  },
  {
    penerbit: "landsrukkerij",
    namaPenerbit: "Landsrukkerij",

    judul: "Staatblad Van Nederlandch Indie",
    image: "/assets/imageMonografi.png",
    tahun: 1929,
    slug: "staatblad-van-nederlandch-indie-6",
  },
];

export default function MonografiPage() {
  const [filters, setFilters] = useState({
    penerbit: [] as string[],
    judul: "",
    tahun: "",
  });

  const [draftFilters, setDraftFilters] = useState(filters);

  const filteredData = useMemo(() => {
    return dummyData.filter((item) => {
      return (
        (!filters.penerbit.length ||
          filters.penerbit.includes(item.penerbit)) &&
        (!filters.judul ||
          item.judul.toLowerCase().includes(filters.judul.toLowerCase())) &&
        (!filters.tahun || item.tahun === Number(filters.tahun))
      );
    });
  }, [filters]);

  const listRef = useRef<HTMLDivElement>(null);

  return (
    <div className="">
      <BreadcumbPage title="Monografi" />

      <div className="bg-[linear-gradient(180deg,rgba(102,90,0,0.05)_0%,rgba(102,90,0,0)_100%)]">
        <div className="max-w-7xl mx-auto py-20">
          <div className="grid grid-cols-1 md:grid-cols-[30%_64%] xl:grid-cols-[30%_66%] gap-14 xl:gap-13">
            <FilterMonografi
              filters={filters}
              setFilters={setFilters}
              draftFilters={draftFilters}
              setDraftFilters={setDraftFilters}
            />
            <MonografiList
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
