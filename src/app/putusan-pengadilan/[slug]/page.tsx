import BreadcumbPage from "@/components/BreadcumbPage";
import Link from "next/link";
import { AiOutlineDownload } from "react-icons/ai";
import { IoEyeOutline } from "react-icons/io5";

export default function PutusanDetail() {
  return (
    <div className="">
      <BreadcumbPage
        title="Putusan Pengadilan"
        subtitle="Uji Materiil Undang-Undang Nomor 41 Tahun 2014 tentang Per..."
      />

      <div className="bg-[linear-gradient(180deg,rgba(102,90,0,0.05)_0%,rgba(102,90,0,0)_100%)]">
        <div className="max-w-7xl mx-auto px-6 xl:px-0 py-20 ">
          <div className="grid  grid-cols-1 md:grid-cols-[60%_35%] xl:grid-cols-[70%_30%] gap-12">
            {/* ================= LEFT (70%) ================= */}
            <div className="flex flex-col gap-4">
              <Link
                href="/putusan-pengadilan"
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
                Uji Materiil Undang-Undang Nomor 39 Tahun 2014 tentang
                Perkebunan
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
                       text-[#2D9F5B] bg-[#2D9F5B]/10 border border-[#2D9F5B]
                        rounded-lg
                        w-fit
                    "
                      >
                        Putusan Pengadilan
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
                        Uji Materiil Undang-Undang Nomor 39 Tahun 2014 tentang
                        Perkebunan
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
                        -
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
                        Nomor Putusan
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
                        138/PUU-XIII/2015
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
                        Jenis Peradilan
                      </p>

                      {/* Content */}
                      <p
                        className="
                    font-inter
                     inline-block
                        px-3 py-1
                        text-sm 
                        text-[#9F5B2D]
                        bg-[#9F5B2D]/10
                        border border-[#9F5B2D]
                        rounded-lg
                        w-fit
                    "
                      >
                        Undang-Undang
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
                        Singkatan Jenis Peradilan
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
                        MK
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
                        Tempat Peradilan
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
                        Tanggal Dibacakan
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
                        -
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
                        Mahkamah Konstitusi
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
                        Direktorat Jenderal Perkebunan
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
                        Status Putusan
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
                        Tetap
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
                        Bidang Hukum / Jenis Perkara
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
                        Hukum Peradilan Konstitusi
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
                        Jakarata
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
