"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { LuSettings2 } from "react-icons/lu";
import Link from "next/link";

import Image from "next/image";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const imageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function HeroSlider() {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 1970 + 1 },
    (_, i) => 1970 + i
  );

  const items = [
    {
      label: "Peraturan",
      href: "/peraturan",
      icon: "/assets/icon-peraturan.png",
    },
    {
      label: "Putusan",
      href: "/putusan-pengadilan",
      icon: "/assets/putusan.png",
    },
    {
      label: "Monografi",
      href: "/monografi",
      icon: "/assets/monografi.png",
    },
    {
      label: "Artikel",
      href: "/artikel",
      icon: "/assets/icon-article.png",
    },
  ];

  return (
    <div className="relative h-180 ">
      {/* Background Video */}
      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <video
          src="/assets/video-home.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          onLoadedMetadata={(e) => {
            const vid = e.currentTarget;
            vid.muted = true;
            vid.play().catch(() => {
              console.log("Autoplay blocked, video will wait for interaction");
            });
          }}
        />
      </motion.div>

      {/* Text overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-[14px] md:text-xl font-bold mb-3">
            Selamat Datang di
          </p>
          <h1 className="text-[32px] md:text-5xl font-bold leading-10 md:leading-14 tracking-[-0.02em] mb-3">
            Jaringan Dokumentasi dan <br /> Informasi Hukum
          </h1>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 md:mb-24"
        >
          <p className="text-base md:text-2xl font-inter mb-6">
            Kementerian Pertanian Republik Indonesia
          </p>

          <div className="max-w-142.5 text-center justify-center ">
            <div className="border border-gray-300 bg-white rounded-[20px] transition-all duration-300 ease-in-out">
              {/* INPUT */}
              <div
                className="flex items-center px-4 h-12 cursor-text"
                onClick={() => inputRef.current?.focus()}
              >
                <FiSearch className="text-gray-500 text-lg mr-2" />

                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Cari peraturan..."
                  className="flex-1 outline-none text-black text-sm bg-transparent"
                />

                {/* FILTER BUTTON */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation(); // ❗ jangan fokus ke input
                    setOpen(!open);
                  }}
                  className="ml-2 text-gray-600 hover:text-black transition"
                >
                  <LuSettings2
                    className={`text-xl transition-transform duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {/* DROPDOWN FILTER */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out
      ${open ? "max-h-75 opacity-100" : "max-h-0 opacity-0"}
      `}
              >
                <div className="border-t border-gray-200" />

                <div className="grid grid-cols-3 gap-4 p-4">
                  {/* Jenis Peraturan */}
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700">
                      Jenis Peraturan
                    </label>
                    <select className="border rounded-md text-black px-3 h-10 text-sm">
                      <option value="">Pilih</option>
                      <option value="uu">Undang-Undang</option>
                      <option value="pp">Peraturan Pemerintah</option>
                      <option value="perpres">Perpres</option>
                    </select>
                  </div>

                  {/* Tematik */}
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700">
                      Tematik
                    </label>
                    <select className="border rounded-md text-black px-3 h-10 text-sm">
                      <option value="">Pilih</option>
                      <option value="hukum">Hukum</option>
                      <option value="ekonomi">Ekonomi</option>
                      <option value="pendidikan">Pendidikan</option>
                    </select>
                  </div>

                  {/* Tahun */}
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700">
                      Tahun
                    </label>
                    <select className="border rounded-md text-black px-3 h-10 text-sm">
                      <option value="">Pilih</option>
                      {years.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 lg:gap-10">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex items-center  xl:w-67.5 gap-5 bg-[#097969] text-white px-4 lg:px-6 py-4 rounded-[20px] transition hover:opacity-90"
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={48}
                  height={48}
                  sizes="(max-width: 768px) 32px, 48px"
                  className="shrink-0 w-8 h-8 lg:w-12 lg:h-12"
                />

                <span className="font-medium text-base md:text-lg lg:text-xl">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
