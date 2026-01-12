"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { ChartType } from "./SectionDataStatistik";

export default function ChartSelect({
  value,
  onChange,
}: {
  value: ChartType;
  onChange: (val: ChartType) => void;
}) {
  return (
    <Select value={value} onValueChange={onChange}>
      {/* ===== TRIGGER ===== */}
      <SelectTrigger
        className="
          w-full md:w-[360px]
          bg-white
          rounded-[10px]
          shadow-[0px_4px_16px_rgba(0,0,0,0.05)]
          px-4 py-2
          text-[#097969] font-bold
          leading-6 tracking-[-0.02em]
          focus:ring-2 focus:ring-[#097969]
        "
      >
        <SelectValue placeholder="Pilih Statistik" />
      </SelectTrigger>

      {/* ===== DROPDOWN ===== */}
      <SelectContent
        className="
          bg-white
          rounded-[10px]
          shadow-[0px_4px_16px_rgba(0,0,0,0.05)]
        "
      >
        <SelectItem
          value="jumlah-dokumen"
          className="text-base leading-4 text-black opacity-[0.6]"
        >
          Statistik Jumlah Seluruh Dokumen Hukum
        </SelectItem>

        <SelectItem
          value="jumlah-koleksi-puu"
          className="text-base leading-4 text-black opacity-[0.6]"
        >
          statistik jumlah koleksi PUU
        </SelectItem>
        <SelectItem
          value="status-puu"
          className="text-base leading-4 text-black opacity-[0.6]"
        >
          Statistik Berdasarkan Status Keberlakuan PUU
        </SelectItem>

        <SelectItem
          value="jumlah-puu-jenis"
          className="text-base eading-4 text-black opacity-[0.6]"
        >
          Statistik Jumlah PUU Berdasarkan Jenis
        </SelectItem>
        <SelectItem
          value="jumlah-pengunjung"
          className="text-base leading-4 text-black opacity-[0.6]"
        >
          Statistik Jumlah Pengunjung Dokumen Hukum
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
