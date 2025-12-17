import BreadcumbPage from "@/components/BreadcumbPage";
import Link from "next/link";
import { AiOutlineDownload } from "react-icons/ai";
import { IoEyeOutline } from "react-icons/io5";

export default function PeraturanDetail() {
  return (
    <div className="">
      <BreadcumbPage title="Peraturan" subtitle="Undang-Undang" />

      <div className="bg-[linear-gradient(180deg,rgba(102,90,0,0.05)_0%,rgba(102,90,0,0)_100%)]">
        <div className="max-w-7xl mx-auto px-6 xl:px-0 py-20 ">
          <div className="grid  grid-cols-1 md:grid-cols-[60%_35%] xl:grid-cols-[70%_30%] gap-12">
            {/* ================= LEFT (70%) ================= */}
            <div className="flex flex-col gap-4">
              <Link
                href="/peraturan"
                className="text-sm leading-4.5 text-[#097969] underline mb-3"
              >
                Kembali
              </Link>
              <p
                className="
                text-2xl
                leading-8
                text-black
                opacity-[0.8]
                tracking-[-0.01em]
            "
              >
                Peraturan Menteri Pertanian Nomor 03 Tahun 2025
              </p>

              {/* Judul utama */}
              <h1
                className="
                font-bold
                text-[40px]
                leading-12
                text-black
                opacity-[0.8]
                tracking-[-0.02em]
                
            "
              >
                Petunjuk Teknis Penggunaan Dana Alokasi Khusus Nonfisik Dana
                Ketahanan Pangan dan Pertanian Tahun Anggaran 2025
              </h1>

              <div className="mt-20">
                <h2
                  className="font-bold
              text-[32px]
              leading-10
              tracking-[-0.02em]
              text-[#097969]"
                >
                  Detil Peraturan
                </h2>

                <div className="grid grid-cols-2 gap-10 lg:gap-19 mt-10">
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
                    text-base
                    leading-4.5
                    text-black/60
                    "
                      >
                        Peraturan Perundang-Undangan
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
                        Peraturan Menteri Pertanian Nomor 03 Tahun 2025 tentang
                        Petunjuk Teknis Penggunaan Dana Alokasi Khusus Nonfisik
                        Dana Ketahanan Pangan dan Pertanian Tahun Anggaran 2025
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
                        Nomor Peraturan
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
                        Permentan No.03 Tahun 2025
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
                        Jenis/Bentuk Peraturan
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
                        Peraturan menteri pertanian
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
                        Singkatan Jenis/Bentuk Peraturan
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
                        Permentan
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
                        Tempat Penetapan
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
                        Tanggal Penetapan
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
                        24/01/2025
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
                        Tanggal Pengundangan
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
                        31/01/2025
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
                        Biro Hukum, Kementerian Pertanian
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
                        Petunjuk Teknis Penggunaan Dana Alokasi Khusus Nonfisik
                        Dana Ketahanan Pangan dan Pertanian Tahun Anggaran 2025
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
                        Status
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
                        Berlaku
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
                        Biro Hukum, Kementerian Pertanian
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
                        Hukum Administrasi Negara
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
                        Tematik
                      </p>

                      {/* Content */}
                      <p
                        className="
                      bg-[#097969]
                      rounded-lg
                    font-inter
                    text-sm
                    leading-4.5
                    text-white
                     px-3 py-1
                    w-fit
                    "
                      >
                        Manajemen dan Kesekretariatan
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

              {/* ========== CARD 2 (contoh) ========= */}
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
                  Lampiran Peraturan
                </h3>
                <p className="text-sm text-black/80 font-inter  mb-2">N/A</p>
              </div>

              {/* ========== CARD 3 (contoh) ========= */}
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
                  Status Peraturan
                </h3>
                <p className="text-sm text-black/80 font-inter font-bold mb-2">
                  Mencabut
                </p>
                <p className="text-sm text-[#097969] underline font-inter ">
                  Peraturan Menteri Pertanian Nomor 03 Tahun 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
