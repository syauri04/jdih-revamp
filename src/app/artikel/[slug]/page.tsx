import BreadcumbPage from "@/components/BreadcumbPage";

import Link from "next/link";
import { AiOutlineDownload } from "react-icons/ai";
import { IoEyeOutline } from "react-icons/io5";

export default function ArtikelDetail() {
  return (
    <div className="">
      <BreadcumbPage
        title="Monografi"
        subtitle="Analisis dan Evaluasi Hukum Dalam Rangka Peningkatan Daya Saing Tenaga Kerja"
      />

      <div className="bg-[linear-gradient(180deg,rgba(102,90,0,0.05)_0%,rgba(102,90,0,0)_100%)]">
        <div className="max-w-7xl mx-auto px-6 xl:px-0 py-20 ">
          <div className="grid  grid-cols-1 md:grid-cols-[60%_35%] xl:grid-cols-[70%_30%] gap-12">
            {/* ================= LEFT (70%) ================= */}
            <div className="flex flex-col gap-4">
              <Link
                href="/artikel"
                className="text-sm leading-4.5 text-[#097969] underline mb-3"
              >
                Kembali
              </Link>

              {/* Judul utama */}
              <h1
                className="
                font-bold
                text-[40px]
                leading-12
                text-[#097969]
                tracking-[-0.02em]
                
            "
              >
                Kolaborasi Wujudkan Kedaulatan Pangan
              </h1>

              <div className="mt-20">
                <div className="grid grid-cols-2 gap-10 lg:gap-19 ">
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                      <p
                        className="
                    font-inter
                    font-bold
                    text-base
                    text-black/80
                    "
                      >
                        Tipe Dokumen
                      </p>

                      {/* Content */}
                      <p
                        className="
                    font-inter
                     inline-block
                        px-3 py-1
                        text-sm 
                       text-[#9E342D] bg-[#9E342D]/10 border border-[#9E342D]
                        rounded-lg
                        w-fit
                    "
                      >
                        Jurnal
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p
                        className="
                    font-inter
                    font-bold
                    text-base
                    text-black/80
                    "
                      >
                        Judul
                      </p>

                      {/* Content */}
                      <p
                        className="
                    font-inter
                    text-base
                    leading-4.5
                    text-black/60
                    "
                      >
                        Kolaborasi Wujudkan Kedaulatan Pangan
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p
                        className="
                    font-inter
                    font-bold
                    text-base
                    text-black/80
                    "
                      >
                        T.E.U
                      </p>

                      {/* Content */}
                      <p
                        className="
                    font-inter
                    text-base
                    leading-4.5
                    text-black/60
                    "
                      >
                        Kolaborasi Wujudkan Kedaulatan Pangan
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p
                        className="
                    font-inter
                    font-bold
                    text-base
                    text-black/80
                    "
                      >
                        Tempat Terbit
                      </p>

                      {/* Content */}
                      <p
                        className="
                    font-inter
                    text-base
                    leading-4.5
                    text-black/60
                    "
                      >
                        Jakarta
                      </p>
                    </div>

                    <div className="flex flex-col gap-2">
                      <p
                        className="
                    font-inter
                    font-bold
                    text-base
                    text-black/80
                    "
                      >
                        Tanggal Terbit
                      </p>

                      {/* Content */}
                      <p
                        className="
                    font-inter
                    text-base
                    leading-4.5
                    text-black/60
                    "
                      >
                        06/09/2023
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p
                        className="
                    font-inter
                    font-bold
                    text-base
                    text-black/80
                    "
                      >
                        Sumber
                      </p>

                      {/* Content */}
                      <p
                        className="
                    font-inter
                    text-base
                    leading-4.5
                    text-black/60
                    "
                      >
                        Sinar Tani
                      </p>
                    </div>

                    <div className="flex flex-col gap-2">
                      <p
                        className="
                    font-inter
                    font-bold
                    text-base
                    text-black/80
                    "
                      >
                        Subjek
                      </p>

                      {/* Content */}
                      <p
                        className="
                    font-inter
                    text-base
                    leading-4.5
                    text-black/60
                    "
                      >
                        Kolaborasi Wujudkan Kedaulatan Pangan
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                      <p
                        className="
                    font-inter
                    font-bold
                    text-base
                    text-black/80
                    "
                      >
                        Bahasa
                      </p>

                      {/* Content */}
                      <p
                        className="
                    font-inter
                    text-base
                    leading-4.5
                    text-black/60
                    "
                      >
                        Bahasa Indonesia
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p
                        className="
                    font-inter
                    font-bold
                    text-base
                    text-black/80
                    "
                      >
                        Bidang Hukum
                      </p>

                      {/* Content */}
                      <p
                        className="
                    font-inter
                    text-base
                    leading-4.5
                    text-black/60
                    "
                      >
                        Hukum Pertanian
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p
                        className="
                    font-inter
                    font-bold
                    text-base
                    text-black/80
                    "
                      >
                        Lokasi
                      </p>

                      {/* Content */}
                      <p
                        className="
                    font-inter
                    text-base
                    leading-4.5
                    text-black/60
                    "
                      >
                        Jakarta
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= RIGHT (30%) ================= */}
            <div className="flex flex-col gap-6">
              {/* ========== CARD 1 ========= */}
              <div
                className="
                    bg-[rgba(117,116,116,0.05)]
                    rounded-[20px]
                    p-6
                "
              >
                <h3
                  className="
                    font-bold
                    text-[32px]
                    leading-10
                    tracking-[-0.02em]
                    text-[#097969]
                    mb-6
                    "
                >
                  Unduh Dokumen
                </h3>

                <div className="flex flex-col lg:flex-row gap-4">
                  {/* Button PDF */}
                  <a
                    href="/dummy-file.pdf"
                    download
                    className="
                inline-flex
                items-center
                gap-2
                px-6
                py-3
                bg-[#097969]
                rounded-[22px]
                font-inter
                text-base
                text-white
                hover:opacity-90
                transition
              "
                  >
                    <AiOutlineDownload size={24} />
                    PDF
                  </a>

                  {/* Button Abstrak */}
                  <button
                    className="
                inline-flex
                items-center
                gap-2
                px-6
                py-3
                bg-transparent
                border
                border-[#097969]
                rounded-[22px]
                font-inter
                text-base
                text-[#097969]
                hover:bg-[#097969]/10
                transition
              "
                  >
                    <IoEyeOutline size={24} />
                    Abstrak
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
