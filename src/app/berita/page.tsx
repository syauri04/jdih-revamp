"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import BreadcumbPage from "@/components/BreadcumbPage";

const newsData = [
  {
    id: 1,
    title:
      "Peraturan Menteri Pertanian Nomor 28 Tahun 2025 tentang Pengelolaan Dana Dekonsentrasi dan Dana Tugas Pembantuan Lingkup Kementerian Pertanian Tahun Anggaran 2026",
    date: "16 Nov 2025",
    image: "/assets/berita-1.jpg",
    slug: "peratura-nenteri-nertanian-nomor-28",
  },
  {
    id: 2,
    title:
      "Peraturan Menteri Pertanian Nomor 21 Tahun 2025 tentang Pedoman Penyaluran Bantuan Pemerintah Bidang Pertanian",
    date: "02 Okt 2025",
    image: "/assets/berita-2.jpg",
    slug: "peratura-nenteri-nertanian-nomor-21",
  },
  {
    id: 3,
    title:
      "Peraturan Menteri Pertanian Nomor 15 Tahun 2025 tentang Tata Cara Pengawasan Distribusi Pupuk Bersubsidi",
    date: "18 Sep 2025",
    image: "/assets/berita-3.jpg",
    slug: "peratura-nenteri-nertanian-nomor-15",
  },
  {
    id: 4,
    title:
      "Peraturan Menteri Pertanian Nomor 09 Tahun 2025 tentang Standar Teknis Sarana dan Prasarana Pertanian",
    date: "07 Agu 2025",
    image: "/assets/berita-4.jpg",
    slug: "peratura-nenteri-nertanian-nomor-09",
  },
];

export default function BeritaPage() {
  return (
    <>
      <BreadcumbPage title="Berita" />
      <div className="bg-[linear-gradient(180deg,rgba(102,90,0,0.05)_0%,rgba(102,90,0,0)_100%)]">
        <div className="max-w-7xl mx-auto px-6 xl:px-0 pt-10 md:pt-20 ">
          <AnimatePresence>
            <motion.div
              layout
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-y-14 md:gap-x-10"
            >
              {newsData.map((item) => (
                <Link key={item.id} href={`/berita/${item.slug}`}>
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="bg-white rounded-[20px] border border-black/10 overflow-hidden p-4 "
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={620}
                      height={412}
                      className="w-full h-40 md:h-103 object-cover rounded-[10px] md:rounded-[30px]"
                    />
                    <div className="py-4">
                      <h3 className="text-base md:text-[20px] font-bold leading-5 md:leading-6 text-black mb-4">
                        {item.title}
                      </h3>
                      <p className="text-sm font-inter text-gray-500">
                        {item.date}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Pagination placeholder */}
          <div className="flex justify-start pt-10 pb-20 gap-2">
            {[1, 2, 3, "...", 10].map((page, idx) => (
              <button
                key={idx}
                className="w-8 h-8 flex items-center justify-center text-base font-bold rounded-full border border-[#3DBF19] text-[#3DBF19] hover:bg-[#3DBF19]/10"
                disabled={page === "..."}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
