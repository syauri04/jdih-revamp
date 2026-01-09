"use client";

import { LiaBalanceScaleSolid } from "react-icons/lia";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";

export default function SectionLastPeraturan() {
  const regulations = [
    {
      head: "Peraturan Menteri Pertanian No.30 Tahun 2025",
      body: "Perubahan atas Peraturan Menteri Pertanian Nomor 02 Tahun 2025 tentang Organisasi dan Tata Kerja Kementerian Pertanian",
      footer: "Ditetapkan: 28 Oktober 2025",
      slug: "/peraturan/permentan-no-30-tahun-2025",
    },
    {
      head: "Peraturan Menteri Pertanian No.25 Tahun 2025",
      body: "Pedoman Umum Bantuan Pemerintah Lingkup Kementerian Pertanian",
      footer: "Ditetapkan: 15 September 2025",
      slug: "/peraturan/permentan-no-25-tahun-2025",
    },
    {
      head: "Peraturan Menteri Pertanian No.18 Tahun 2024",
      body: "Pedoman Pengelolaan dan Distribusi Bantuan Sarana Produksi Pertanian",
      footer: "Ditetapkan: 02 Juni 2024",
      slug: "/peraturan/permentan-no-18-tahun-2024",
    },
    {
      head: "Peraturan Menteri Pertanian No.30 Tahun 2025",
      body: "Perubahan atas Peraturan Menteri Pertanian Nomor 02 Tahun 2025 tentang Organisasi dan Tata Kerja Kementerian Pertanian",
      footer: "Ditetapkan: 02 Juni 2024",
      slug: "/peraturan/permentan-no-02-tahun-2025",
    },
  ];

  /** Container animasi (atur stagger di sini) */
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  /** Animasi tiap card */
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        delay: i * 0.2, // ⬅️ delay per card bergantian
      },
    }),
  };

  return (
    <section className="py-10 md:py-20 bg-[linear-gradient(180deg,rgba(102,90,0,0.05)_0%,rgba(102,90,0,0)_100%)]">
      <div className="max-w-7xl mx-auto px-6 xl:px-0">
        <h2 className="text-[32px] leading-10 tracking-[-0.02em] text-[#097969] font-bold mb-4 md:mb-8">
          Peraturan Terbaru
        </h2>

        {/* GRID + SCROLL ANIMATION */}
        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6 lg:gap-y-10">
          {regulations.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              custom={index} // ⬅️ penting
              className="
                bg-white
                border border-black/10
                shadow-[0px_4px_16px_rgba(0,0,0,0.05)]
                rounded-[20px]
                p-10
                flex
                gap-6
              "
            >
              {/* LEFT ICON */}
              <div className="shrink-0">
                <LiaBalanceScaleSolid className="w-15 md:w-31.75 h-auto text-[#043927]" />
              </div>

              {/* RIGHT CONTENT */}
              <div className="flex flex-col w-full">
                <span className="text-[#097969] text-sm md:text-base font-inter">
                  {item.head}
                </span>

                <h3 className="text-black opacity-[0.8] text-base md:text-[20px] font-bold leading-4.5 md:leading-6 tracking-[-0.01em] mt-2">
                  {item.body}
                </h3>

                <div className="flex items-center justify-between mt-6">
                  <span className="text-black opacity-[0.4] text-sm md:text-base font-inter">
                    {item.footer}
                  </span>

                  <Link href={item.slug}>
                    <button className="bg-[#9DC209] rounded-[20px] flex items-center justify-center px-4 py-3 transition hover:opacity-90">
                      <BsArrowRight className="w-6 h-6 text-black" />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center mt-12">
          <Link
            href="/peraturan"
            className="border-2 border-[#097969] rounded-[30px] px-12 py-4 text-[20px] text-[#097969] font-bold transition hover:bg-[#097969] hover:text-white"
          >
            Lihat Peraturan Lainnya
          </Link>
        </div>
      </div>
    </section>
  );
}
