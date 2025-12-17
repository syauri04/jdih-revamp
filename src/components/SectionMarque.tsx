"use client";

import Link from "next/link";
import Image from "next/image";

const donors = [
  { src: "/assets/logo-m-1.png", alt: "BPDLH", slug: "bpdlh" },
  {
    src: "/assets/logo-m-2.png",
    alt: "Ministry of Forestry",
    slug: "ministry-of-forestry",
  },
  { src: "/assets/logo-m-3.png", alt: "WCS", slug: "wcs" },
  {
    src: "/assets/logo-m-4.png",
    alt: "Ministry of Forestry",
    slug: "ministry-of-forestry-2",
  },
  { src: "/assets/logo-m-5.png", alt: "WCS", slug: "wcs-2" },
  { src: "/assets/logo-m-6.png", alt: "BPDLH", slug: "bpdlh-3" },
  {
    src: "/assets/logo-m-7.png",
    alt: "Ministry of Forestry",
    slug: "ministry-of-forestry-3",
  },
  { src: "/assets/logo-m-8.png", alt: "WCS", slug: "wcs-3" },
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
          <div className="flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap gap-4 md:gap-8">
            {donors.map((donor, i) => (
              <Link key={i} href={`/donor/${donor.slug}`}>
                <div className="relative w-auto h-16 md:h-25 aspect-3/1 cursor-pointer grayscale hover:grayscale-0 transition duration-300">
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
