"use client";

import { LiaUndoAltSolid } from "react-icons/lia";
import { FiChevronDown } from "react-icons/fi";
import type { PeraturanFilters } from "@/app/putusan-pengadilan/page";
import { useState } from "react";

interface Props {
  filters: PeraturanFilters;
  setFilters: React.Dispatch<React.SetStateAction<PeraturanFilters>>;
  draftFilters: PeraturanFilters;
  setDraftFilters: React.Dispatch<React.SetStateAction<PeraturanFilters>>;
}

export default function FilterPutusan({
  filters,
  setFilters,
  draftFilters,
  setDraftFilters,
}: Props) {
  const [open, setOpen] = useState(false);

  const isDirty = JSON.stringify(filters) !== JSON.stringify(draftFilters);

  /* ===================== HANDLERS ===================== */

  const applyFilters = () => {
    setFilters(draftFilters);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setOpen(false);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      applyFilters();
    }
  };

  const toggle = (key: "jenis", value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter((v) => v !== value)
        : [...prev[key], value],
    }));
  };

  const reset = () => {
    const empty: PeraturanFilters = {
      jenis: [],
      nomor: "",
      judul: "",
      tahun: "",
    };

    setFilters(empty);
    setDraftFilters(empty);
  };

  /* ===================== CONTENT ===================== */

  const SidebarContent = (
    <>
      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-bold text-[32px] leading-10 tracking-[-0.02em] text-[#097969]">
          Filter
        </h2>

        <button onClick={reset}>
          <LiaUndoAltSolid
            size={24}
            className="text-[#043927] cursor-pointer"
          />
        </button>
      </div>

      <div className="space-y-8">
        {/* DOKUMEN HUKUM */}
        <div className="space-y-6">
          <h3 className="font-bold text-2xl text-[#043927]">Jenis Putusan</h3>

          <input
            type="text"
            placeholder="Search by keyword"
            className="w-full h-12 px-4 bg-white border border-black/10 rounded-[10px]"
          />

          <div className="space-y-3">
            {[
              { label: "Mahkamah Konstitusi", value: "mk", count: 112 },
              { label: "Mahkamah Agung", value: "ma", count: 52 },
              {
                label: "Pengadilan Tata Usaha Negara Jakarta",
                value: "ptunj",
                count: 23,
              },
            ].map((item) => (
              <label
                key={item.value}
                className="flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={filters.jenis.includes(item.value)}
                    onChange={() => toggle("jenis", item.value)}
                  />
                  <span className="text-[#043927]">{item.label}</span>
                </div>

                <span className="w-9 h-9 flex items-center justify-center rounded-full bg-[#097969]/10 text-xs text-[#043927]/60">
                  {item.count}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* NOMOR */}
        <div className="space-y-6">
          <h3 className="font-bold text-2xl text-[#043927]">Nomor</h3>
          <input
            type="text"
            placeholder="Masukkan nomor"
            value={draftFilters.nomor}
            onChange={(e) =>
              setDraftFilters((p) => ({ ...p, nomor: e.target.value }))
            }
            onKeyDown={handleEnter}
            className="w-full h-12 px-4 bg-white border border-black/10 rounded-[10px]"
          />
        </div>

        {/* JUDUL */}
        <div className="space-y-6">
          <h3 className="font-bold text-2xl text-[#043927]">Judul / Tema</h3>
          <input
            type="text"
            value={draftFilters.judul}
            onChange={(e) =>
              setDraftFilters((p) => ({ ...p, judul: e.target.value }))
            }
            onKeyDown={handleEnter}
            className="w-full h-12 px-4 bg-white border border-black/10 rounded-[10px]"
          />
        </div>

        {/* TAHUN */}
        <div className="space-y-6">
          <h3 className="font-bold text-2xl text-[#043927]">Tahun</h3>
          <input
            type="text"
            value={draftFilters.tahun}
            onChange={(e) =>
              setDraftFilters((p) => ({ ...p, tahun: e.target.value }))
            }
            onKeyDown={handleEnter}
            className="w-full h-12 px-4 bg-white border border-black/10 rounded-[10px]"
          />
        </div>

        <button
          onClick={applyFilters}
          disabled={!isDirty}
          className="w-full h-12 bg-[#097969] rounded-[22px] font-bold text-white disabled:opacity-40 cursor-pointer"
        >
          Terapkan
        </button>
      </div>
    </>
  );

  /* ===================== RENDER ===================== */

  return (
    <>
      {/* DESKTOP */}
      <aside className="hidden md:block">{SidebarContent}</aside>

      {/* MOBILE */}
      <aside className="md:hidden bg-white border rounded-[20px] p-4">
        <button
          onClick={() => setOpen((p) => !p)}
          className="w-full flex items-center justify-between"
        >
          <h2 className="font-bold text-xl text-[#097969]">Filter</h2>
          <FiChevronDown
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>

        <div
          className={`overflow-hidden transition-all ${
            open ? "max-h-500 mt-6" : "max-h-0"
          }`}
        >
          {SidebarContent}
        </div>
      </aside>
    </>
  );
}
