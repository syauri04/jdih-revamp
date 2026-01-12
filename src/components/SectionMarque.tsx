"use client";

import Link from "next/link";
import Image from "next/image";

const donors = [
  { src: "/assets/Itjen.png", alt: "Itjen", slug: "Itjen" },
  {
    src: "/assets/direktorat_jenderal_lahan_irigasi.png",
    alt: "Direktorat Jenderal Lahan Irigasi",
    slug: "direktorat-jenderal-lahan-irigasi",
  },
  { src: "/assets/PKH.png", alt: "PKH", slug: "pkh" },
  {
    src: "/assets/Kementerian_Pertanian.png",
    alt: "Kementerian Pertanian",
    slug: "kementerian_pertanian",
  },
  { src: "/assets/BPPSDMP.png", alt: "BPPSDMP", slug: "bppsdmp" },
  {
    src: "/assets/agro_modern.png",
    alt: "Agro Modern",
    slug: "agro-modern",
  },
  { src: "/assets/Perkebunan.png", alt: "Perkebunan", slug: "perkebunan" },
  { src: "/assets/BRMP_pementerian_pertanian.png", alt: "BRMP", slug: "brmp" },
  { src: "/assets/PSP_Satu_Data.png", alt: "PSP", slug: "psp-satu-data" },
];

export default function SectionMarque() {
  return (
    <section className="py-10 md:pt-0 md:pb-20 bg-white overflow-hidden">
      <div className=" max-w-4xl xl:max-w-7xl mx-auto mb-10 md:mb-16 px-3 md:px-6 lg:px-0">
        <h2 className="text-[32px] leading-10 tracking-[-0.02em] text-[#097969] font-bold mb-8">
          Link Terkait
        </h2>
      </div>
      <div className="container mx-auto">
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap gap-4 md:gap-x-12">
            {donors.map((donor, i) => (
              <Link key={i} href={`/link/${donor.slug}`}>
                <div className="relative w-auto h-30 aspect-2/1 cursor-pointer grayscale hover:grayscale-0 transition duration-300">
                  <Image
                    src={donor.src}
                    alt={donor.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 150px, 200px"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
