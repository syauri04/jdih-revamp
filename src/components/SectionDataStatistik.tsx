"use client";

import { useState } from "react";
import DataStatistikChart from "./DataStatistikChart";
import ChartSelect from "./ChartSelect";

export type ChartType =
  | "status-puu"
  | "jumlah-dokumen"
  | "jumlah-pengunjung"
  | "jumlah-koleksi-puu"
  | "jumlah-puu-jenis";

export default function SectionDataStatistik() {
  const [selectedChart, setSelectedChart] = useState<ChartType>("status-puu");

  return (
    <section className="py-10 md:pt-0 md:pb-10">
      <div className="bg-[#097969]/5 rounded-[40px] mx-4 lg:mx-8">
        <div className="max-w-7xl mx-auto py-16 px-6 xl:px-0">
          {/* ===== HEADER + SELECT ===== */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
            <h2 className="text-[32px] leading-10 tracking-[-0.02em] text-[#097969] font-bold">
              Data Statistik
            </h2>

            <ChartSelect value={selectedChart} onChange={setSelectedChart} />
          </div>

          {/* ===== SUB TITLE ===== */}
          <div>
            <h3 className="text-2xl text-black opacity-[0.8] leading-8.5 tracking-[-0.02em] md:text-center font-bold mb-3">
              Statistik peraturan pada Kementerian Pertanian
            </h3>
            <p className="text-base text-black opacity-[0.6] leading-6 tracking-[-0.02em] md:text-center max-w-4xl mx-auto mb-16">
              Beberapa grafik statistik berikut menjelaskan beragam data dari
              dokumentasi dan informasi hukum, baik data status peraturan,
              jumlah peraturan dan jumlah dokumen hukum yang ada pada website
              JDIH Kementan.
            </p>
          </div>

          {/* ===== CHART ===== */}
          <DataStatistikChart selectedChart={selectedChart} />
        </div>
      </div>
    </section>
  );
}
