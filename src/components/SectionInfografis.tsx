"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

import "swiper/css";
import "swiper/css/navigation";

export default function SectionInfografis() {
  const images = [
    "/assets/infografis-1.jpg",
    "/assets/infografis-2.jpg",
    "/assets/infografis-3.jpg",
    "/assets/infografis-4.jpg",
    "/assets/infografis-1.jpg",
    "/assets/infografis-2.jpg",
  ];
  return (
    <section className="py-10 md:pt-0 md:pb-10">
      <div className="bg-[#9DC209] rounded-[40px] mx-4 lg:mx-8">
        <div className="max-w-7xl mx-auto py-16 px-6 xl:px-0">
          {/* HEADER */}
          <div className="flex items-center justify-between mb-14">
            <h2 className="text-[32px] leading-10 tracking-[-0.02em] text-[#097969] font-bold">
              Infografis
            </h2>

            {/* NAVIGATION */}
            <div className="flex gap-3">
              <button className="infografis-prev w-10 h-10 flex items-center justify-center  bg-[#043927] rounded-full text-white hover:bg-[#097969] hover:text-white transition">
                <BsArrowLeft className="w-6 h-6 text-white" />
              </button>
              <button className="infografis-next w-10 h-10 flex items-center justify-center  bg-[#043927] rounded-full text-white hover:bg-[#097969] hover:text-white transition">
                <BsArrowRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>

          {/* SLIDER */}
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".infografis-prev",
              nextEl: ".infografis-next",
            }}
            spaceBetween={30}
            slidesPerView={4}
            breakpoints={{
              0: {
                slidesPerView: 1.2,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="relative aspect-270/382 bg-transparent w-full overflow-hidden rounded-[10px]">
                  <Image
                    src={src}
                    alt={`Infografis ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
