"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useRef, useState } from "react";
import BreadcumbPage from "@/components/BreadcumbPage";
import FilterSidebar from "@/components/peraturan/FilterSidebar";
import PeraturanList from "@/components/peraturan/PeraturanList";

export interface PeraturanItem {
  jenis: string;
  nomor: string;
  judul: string;
  tematik: string;
  ditetapkan: string;
  diundangkan: string;
  status: "Berlaku" | "Tidak Berlaku";
  tahun: number;
  slug: string;
}
export interface PeraturanFilters {
  jenis: string[];
  status: string[];
  tematik: string[];
  nomor: string;
  judul: string;
  tahun: string;
}

const dummyData: PeraturanItem[] = [
  {
    jenis: "permentan",
    nomor: "35",
    judul:
      "Peraturan Menteri Pertanian Nomor 35 Tahun 2025 tentang Penyelenggaraan Pelatihan dan Sertifikasi Kompetensi Sumber Daya Manusia Pertanian",
    ditetapkan: "01 Desember 2025",
    diundangkan: "04 Desemeber 2025",
    status: "Berlaku",
    tahun: 2025,
    tematik: "Penyuluhan-dan-SDM-Pertanian",
    slug: "peraturan-menteri-pertanian-nomor-35-tahun-2025",
  },
  {
    jenis: "permentan",
    nomor: "36",
    judul:
      "Peraturan Menteri Pertanian Nomor 36 Tahun 2025 tentang Perubahan atas Peraturan Menteri Pertanian Nomor 30 Tahun 2023 tentang Fasilitasi Asuransi Pertanian",
    ditetapkan: "01 Desember 2025",
    diundangkan: "08 Desember 2025",
    status: "Berlaku",
    tahun: 2025,
    tematik: "Prasarana-dan-Sarana",
    slug: "peraturan-menteri-pertanian-nomor-36-tahun-2025",
  },
  {
    jenis: "permentan",
    nomor: "32",
    judul:
      "Peraturan Menteri Pertanian Nomor 32 Tahun 2025 tentang Penyelenggaraan Kesejahteraan Hewan",
    ditetapkan: "01 Desember 2025",
    diundangkan: "04 Desemeber 2025",
    status: "Berlaku",
    tahun: 2025,
    tematik: "Peternakan-dan-Kesehatan-Hewan",
    slug: "peraturan-menteri-pertanian-nomor-32-tahun-2025",
  },
  {
    jenis: "permentan",
    nomor: "33",
    judul:
      "Peraturan Menteri Pertanian Nomor 33 Tahun 2025 tentang Sertifikasi Kelapa Sawit Berkelanjutan Indonesia terhadap Usaha Perkebunan Kelapa Sawit",
    tahun: 2025,
    ditetapkan: "21 November 2025",
    diundangkan: "26 November 2025",
    status: "Berlaku",
    tematik: "Perkebunan",
    slug: "peraturan-menteri-pertanian-nomor-33-tahun-2025",
  },
  {
    jenis: "permentan",
    nomor: "59/Permentan/OT.140/11/2006",
    judul:
      "Peraturan Bersama Menteri Pertanian dan Kepala Badan Kepegawaian Negara Nomor: 59/Permentan/OT.140/11/2006 dan Nomor: 62 Tahun 2006 tentang Petunjuk Pelaksanaan Jabatan Fungsional Pengawas Mutu Hasil Pertanian dan Angka Kreditnya",

    tahun: 2006,
    ditetapkan: "06 November 2006",
    diundangkan: "-",
    status: "Berlaku",
    tematik: "Manajemen-dan-Kesekretariatan",
    slug: "peraturan-bersama-menteri-pertanian-dan-kepala-badan-kepegawaian-negara-nomor-59-permentan-ot-140-11-2006-dan-nomor-62-tahun-2006",
  },
  {
    jenis: "permentan",
    nomor: "39/Permentan/OT.140/8/2006",
    judul:
      "Peraturan Menteri Pertanian Nomor 39/Permentan/OT.140/8/2006 tentang Produksi, Sertifikasi, dan Peredaran Benih Bina",

    tahun: 2006,
    ditetapkan: "31 Agustus 2006",
    diundangkan: "-",
    status: "Tidak Berlaku",
    tematik: "Tanaman-Pangan",
    slug: "peraturan-menteri-pertanian-nomor-39-permentan-ot-140-8-2006",
  },
  {
    jenis: "permentan",
    nomor: "61/Permentan/OT.160/11/2006",
    judul:
      "Peraturan Menteri Pertanian Nomor 61/Permentan/OT.160/11/2006 tentang Pedoman Budidaya Buah yang Baik (Good Agriculture Practices)",

    tahun: 2006,
    ditetapkan: "28 November 2006",
    diundangkan: "-",
    status: "Tidak Berlaku",
    tematik: "Hortikultura",
    slug: "peraturan-menteri-pertanian-nomor-61-permentan-ot-160-11-2006",
  },
  {
    jenis: "permentan",
    nomor: "40/Permentan/OT.140/8/2006",
    judul:
      "Peraturan Menteri Pertanian Nomor 40/Permentan/OT.140/8/2006 tentang Produksi, Sertifikasi, dan Peredaran Benih Bina",

    tahun: 2006,
    ditetapkan: "31 Agustus 2006",
    diundangkan: "-",
    status: "Tidak Berlaku",
    tematik: "Tanaman-Pangan",
    slug: "peraturan-menteri-pertanian-nomor-40-permentan-ot-140-8-2006",
  },
  {
    jenis: "permentan",
    nomor: "39/Permentan/OT.140/8/2006",
    judul:
      "Peraturan Menteri Pertanian Nomor 33/Permentan/OT.140/7/2006 tentang Pengembangan Pekebunan Melalui Program Revitalisasi Perkebunan",

    tahun: 2006,
    ditetapkan: "27 Juli 2006",
    diundangkan: "-",
    status: "Tidak Berlaku",
    tematik: "Perkebunan",
    slug: "peraturan-menteri-pertanian-nomor-33-permentan-ot-140-7-2006",
  },
  {
    jenis: "uu",
    nomor: "UU Nomor 21 tahun 2019",
    judul:
      "Undang-Undang Nomor 21 tahun 2019 tentang Karantina Hewan Ikan dan Tumbuhan",

    tahun: 2019,
    ditetapkan: "18 Oktober 2019",
    diundangkan: "18 Oktober 2019",
    status: "Berlaku",
    tematik: "Karantina-Pertanian",
    slug: "undang-undang-nomor-21-tahun-2019",
  },
  {
    jenis: "pp",
    nomor: "PP Nomor 11 Tahun 2022",
    judul:
      "Peraturan Pemerintah Nomor 11 Tahun 2022 tentang Perubahan PP Nomor 4 Tahun 2016 Tentang Pemasukan Ternak Dan/Atau Produk Hewan Dalam Hal Tertentu Yang Berasal Dari Negara Atau Zona Dalam Suatu Negara",

    tahun: 2022,
    ditetapkan: "24 Februari 2022",
    diundangkan: "24 Februari 2022",
    status: "Berlaku",
    tematik: "Penelitian-dan-Pengembangan",
    slug: "peraturan-pemerintah-nomor-11-tahun-2022",
  },
  {
    jenis: "perpres",
    nomor: "Perpres Nomor 6 Tahun 2025",
    judul:
      "Peraturan Presiden No 6 Tahun 2025 tentang Tata Kelola Pupuk Bersubsidi",

    tahun: 2025,
    ditetapkan: "30 Januari 2025",
    diundangkan: "30 Januari 2025",
    status: "Berlaku",
    tematik: "Ketahanan-Pangan",
    slug: "peraturan-presiden-no-6-tahun-2025",
  },
];

export default function PeraturanPage() {
  const searchParams = useSearchParams();
  const tematikParam = searchParams.get("tematik");

  const initialFilters = {
    jenis: [] as string[],
    tematik: tematikParam ? [tematikParam] : [],
    status: [] as string[],
    nomor: "",
    judul: "",
    tahun: "",
  };

  const [filters, setFilters] = useState(initialFilters);
  const [draftFilters, setDraftFilters] = useState(initialFilters);

  const filteredData = useMemo(() => {
    return dummyData.filter((item) => {
      return (
        (!filters.jenis.length || filters.jenis.includes(item.jenis)) &&
        (!filters.tematik.length || filters.tematik.includes(item.tematik)) &&
        (!filters.status.length || filters.status.includes(item.status)) &&
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
      <BreadcumbPage title="Peraturan" />
      <div className="bg-[linear-gradient(180deg,rgba(102,90,0,0.05)_0%,rgba(102,90,0,0)_100%)]">
        <div className="max-w-7xl mx-auto px-6 xl:px-0 py-20">
          <div className="grid grid-cols-1 md:grid-cols-[30%_64%] xl:grid-cols-[30%_66%] gap-14 xl:gap-13">
            <FilterSidebar
              filters={filters}
              setFilters={setFilters}
              draftFilters={draftFilters}
              setDraftFilters={setDraftFilters}
            />
            <PeraturanList
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
