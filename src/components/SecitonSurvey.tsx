import Image from "next/image";
import Link from "next/link";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsFillCircleFill } from "react-icons/bs";

export default function SectionSurvey() {
  const ratingValue = 100; // contoh nilai
  const maxStars = 5;
  const filledStars = Math.round((ratingValue / 100) * maxStars);

  return (
    <section className="py-10 md:pt-0 md:pb-20">
      <div className="bg-[#9DC209]/10 rounded-[40px] mx-4 lg:mx-8">
        <div className="max-w-7xl mx-auto py-16 px-6 xl:px-0">
          <h2 className="text-[32px] leading-10 tracking-[-0.02em] text-[#097969] font-bold mb-8">
            Survey IKM
          </h2>
          <div>
            <div className="flex justify-center mb-4">
              <Image
                src="/assets/logo-lkm.png"
                alt="Logo Statistik"
                width={64}
                height={64}
                className="object-contain"
                priority
              />
            </div>
            <h3 className="text-2xl text-black opacity-[0.8] leading-8.5 tracking-[-0.02em] text-center font-bold mb-4">
              Statistik peraturan pada Kementerian Pertanian
            </h3>
            <p className="text-base text-black opacity-[0.6] leading-6 tracking-[-0.02em] text-center max-w-4xl mx-auto mb-10">
              Beberapa grafik statistik berikut menjelaskan beragam data dari
              dokumentasi dan informasi hukum, baik data status peraturan,
              jumlah peraturan dan jumlah dokumen hukum yang ada pada website
              JDIH Kementan.
            </p>
            <div className="flex justify-center">
              <Link
                href="/survey-ikm"
                className="
                    bg-[#9DC209]
                    rounded-[30px]
                    px-12
                    py-4
                    text-[20px]
                    leading-5
                    text-white
                    font-inter
                    font-bold
                    transition
                    hover:bg-white
                    hover:text-[#9DC209]
                    "
              >
                Ikuti Survey
              </Link>
            </div>
            <div className="flex justify-center items-center gap-1 mt-4">
              {Array.from({ length: maxStars }).map((_, index) =>
                index < filledStars ? (
                  <AiFillStar key={index} className="text-[#FFBB00] text-2xl" />
                ) : (
                  <AiOutlineStar
                    key={index}
                    className="text-gray-300 text-2xl"
                  />
                )
              )}
            </div>
            <div className="flex justify-center items-center gap-2 mt-3">
              {/* 1170 Peraturan */}
              <span className="text-[#097969] font-bold text-xs">1170</span>
              <span className="text-xs text-black opacity-[0.6]">
                Peraturan
              </span>

              <BsFillCircleFill className="text-black opacity-60 text-[6px]" />

              {/* 4 Artikel */}
              <span className="text-[#097969] font-bold text-xs">4</span>
              <span className="text-xs text-black opacity-[0.6]">Artikel</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
