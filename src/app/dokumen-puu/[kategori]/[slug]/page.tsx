import { notFound } from "next/navigation";
import Link from "next/link";
import BreadcumbPage from "@/components/BreadcumbPage";

import { dummyData } from "@/lib/dokumen-data";
import { KATEGORI_LABEL, labelize } from "@/lib/dokumen-helper";

import { AiOutlineDownload } from "react-icons/ai";
import { IoEyeOutline } from "react-icons/io5";

interface PageProps {
  params: Promise<{
    kategori: string;
    slug: string;
  }>;
}

export default async function DokumenDetail({ params }: PageProps) {
  const { kategori, slug } = await params;

  const data = dummyData.find(
    (item) => item.kategori === kategori && item.slug === slug
  );

  if (!data) return notFound();

  return (
    <div>
      <BreadcumbPage
        title={KATEGORI_LABEL[kategori] ?? labelize(kategori)}
        subtitle={data.judul}
      />

      <div className="bg-[linear-gradient(180deg,rgba(102,90,0,0.05)_0%,rgba(102,90,0,0)_100%)]">
        <div className="max-w-7xl mx-auto px-6 xl:px-0 py-20">
          <div className="grid grid-cols-1 md:grid-cols-[60%_35%] xl:grid-cols-[70%_30%] gap-12">
            {/* ================= LEFT ================= */}
            <div className="flex flex-col gap-4">
              <Link
                href={`/dokumen-puu/${kategori}`}
                className="text-sm text-[#097969] underline mb-3"
              >
                Kembali
              </Link>

              <h1 className="font-bold text-[40px] leading-12 tracking-[-0.02em] text-[#097969]">
                {data.judul}
              </h1>

              <div className="mt-20 grid grid-cols-2 gap-10 lg:gap-19">
                <div className="flex flex-col gap-8">
                  <Meta label="Tipe Dokumen">
                    <span className="px-3 py-1 text-sm text-[#FF8000] bg-[#9E342D]/10 border border-[#FF8000] rounded-lg w-fit">
                      {KATEGORI_LABEL[data.kategori] ?? labelize(data.kategori)}
                    </span>
                  </Meta>
                  <Meta label="Judul">{data.judul}</Meta>
                  <Meta label="Instansi yang Membuat">{data.instansi}</Meta>
                </div>

                <div className="flex flex-col gap-8">
                  <Meta label="Tahun Terbit">{data.tahun}</Meta>
                  <Meta label="Bidang Hukum">{labelize(data.tematik)}</Meta>
                </div>
              </div>
            </div>

            {/* ================= RIGHT ================= */}
            <div className="flex flex-col gap-10">
              <div className="bg-[rgba(117,116,116,0.05)] rounded-[20px] p-6">
                <h3 className="font-bold text-[32px] leading-10 tracking-[-0.02em] text-[#097969] mb-6">
                  Lampiran
                </h3>

                <div className="flex flex-col lg:flex-row gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#097969] rounded-[22px] text-white hover:opacity-90 transition"
                  >
                    <AiOutlineDownload size={24} />
                    PDF
                  </a>

                  <button className="inline-flex items-center gap-2 px-6 py-3 border border-[#097969] rounded-[22px] text-[#097969] hover:bg-[#097969]/10 transition">
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

/* ================= META ================= */
function Meta({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-inter font-bold text-base text-black/80">{label}</p>
      <p className="font-inter text-base text-black/60">{children}</p>
    </div>
  );
}
