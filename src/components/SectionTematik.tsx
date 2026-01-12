"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export default function SectionTemtaik() {
  const titleVariant: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const containerVariant: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariant: Variants = {
    hidden: {
      opacity: 0,
      y: 32,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const items = [
    {
      id: 1,
      title: "Manajemen dan Kesekretariatan",
      tematik: "Manajemen-dan-Kesekretariatan",
      icon: "/assets/tematik-1.png",
    },
    {
      id: 2,
      title: "Prasarana dan Sarana",
      tematik: "Prasarana-dan-Sarana",
      icon: "/assets/tematik-2.png",
    },
    {
      id: 3,
      title: "Tanaman Pangan",
      tematik: "Tanaman-Pangan",
      icon: "/assets/tematik-3.png",
    },
    {
      id: 4,
      title: "Hortikultura",
      tematik: "Hortikultura",
      icon: "/assets/tematik-4.png",
    },
    {
      id: 5,
      title: "Peternakan dan Kesehatan Hewan",
      tematik: "Peternakan-dan-Kesehatan-Hewan",
      icon: "/assets/tematik-5.png",
    },
    {
      id: 6,
      title: "Perkebunan",
      tematik: "Perkebunan",
      icon: "/assets/tematik-6.png",
    },
    {
      id: 7,
      title: "Perakitan dan Modernisasi Pertanian",
      tematik: "Perakitan-dan-Modernisasi-Pertanian",
      icon: "/assets/tematik-7.png",
    },
    {
      id: 8,
      title: "Penyuluhan dan SDM Pertanian",
      tematik: "Penyuluhan-dan-SDM-Pertanian",
      icon: "/assets/tematik-8.png",
    },
    {
      id: 9,
      title: "Ketahanan Pangan",
      tematik: "Ketahanan-Pangan",
      icon: "/assets/tematik-9.png",
    },
    {
      id: 10,
      title: "Karantina Pertanian",
      tematik: "Karantina-Pertanian",
      icon: "/assets/tematik-10.png",
    },
  ];

  return (
    <section className="py-10 md:pt-0 md:pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 xl:px-0">
        {/* H2 ANIMATION */}
        <motion.h2
          variants={titleVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-[32px] leading-10 tracking-[-0.02em] text-[#097969] font-bold mb-10 md:mb-16"
        >
          Tematik Peraturan
        </motion.h2>

        <div className="max-w-6xl mx-auto">
          {/* LIST CONTAINER */}
          <motion.div
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="
          flex gap-6 overflow-x-auto pb-4
          md:grid md:grid-cols-5 md:gap-x-6 md:gap-y-12
          md:overflow-visible
          scrollbar-hide
        "
          >
            {items.map((item) => (
              <motion.div key={item.id} variants={itemVariant}>
                <Link
                  href={`/peraturan?tematik=${item.tematik}`}
                  className="
                flex flex-col items-center shrink-0
                min-w-[100px]
                md:min-w-0
              "
                >
                  {/* ICON */}
                  <div className="relative w-12 md:w-18 aspect-square">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* TITLE */}
                  <h3 className="mt-3 text-sm md:text-base leading-5 text-center text-[#097969]">
                    {item.title}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
