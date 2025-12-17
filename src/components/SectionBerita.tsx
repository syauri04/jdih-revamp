import Image from "next/image";
import Link from "next/link";

export default function SectionBerita() {
  const beritaList = [
    {
      id: 1,
      title:
        "Peraturan Menteri Pertanian Nomor 28 Tahun 2025 tentang Pengelolaan Dana Dekonsentrasi dan Dana Tugas Pembantuan Lingkup Kementerian Pertanian Tahun Anggaran 2026",
      date: "16 Nov 2025",
      image: "/assets/berita-1.jpg",
      slug: "peraturan-menteri-pertanian-nomor-28-tahun-2025",
    },
    {
      id: 2,
      title:
        "Peraturan Menteri Pertanian Nomor 21 Tahun 2025 tentang Pedoman Penyaluran Bantuan Pemerintah Bidang Pertanian",
      date: "02 Okt 2025",
      image: "/assets/berita-2.jpg",
      slug: "peraturan-menteri-pertanian-nomor-21-tahun-2025",
    },
    {
      id: 3,
      title:
        "Peraturan Menteri Pertanian Nomor 15 Tahun 2025 tentang Tata Cara Pengawasan Distribusi Pupuk Bersubsidi",
      date: "18 Sep 2025",
      image: "/assets/berita-3.jpg",
      slug: "peraturan-menteri-pertanian-nomor-15-tahun-2025",
    },
    {
      id: 4,
      title:
        "Peraturan Menteri Pertanian Nomor 09 Tahun 2025 tentang Standar Teknis Sarana dan Prasarana Pertanian",
      date: "07 Agu 2025",
      image: "/assets/berita-4.jpg",
      slug: "peraturan-menteri-pertanian-nomor-09-tahun-2025",
    },
  ];
  return (
    <section className="py-10 md:pt-0 md:pb-20">
      <div className="bg-[#9DC209] rounded-[40px] mx-4 lg:mx-8">
        <div className="max-w-7xl mx-auto py-16 px-6 xl:px-0">
          <h2 className="text-[32px] leading-10 tracking-[-0.02em] text-white font-bold mb-4 md:mb-8">
            Berita
          </h2>
          <p className="text-2xl text-white leading-8.5 tracking-[-0.02em] text-center font-bold mb-14">
            Berita Terbaru JDIH Kementan
          </p>
          <div
            className="
              flex gap-4 overflow-x-auto pb-4
              snap-x snap-mandatory
              md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8
              md:overflow-visible
              scrollbar-hide
            "
          >
            {/* CARD */}
            {beritaList.map((item) => (
              <Link
                key={item.id}
                href={`/berita/${item.slug}`}
                className="
                snap-start
                  p-3 rounded-[20px] bg-white
                  min-w-[280px] sm:min-w-[320px]
                  md:min-w-0
                "
              >
                {/* IMAGE */}
                <div className="relative w-full aspect-250/160 overflow-hidden rounded-[10px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* TITLE */}
                <h3 className="mt-4 text-base leading-5 text-black font-bold line-clamp-3">
                  {item.title}
                </h3>

                {/* DATE */}
                <span className="mt-2 block font-inter text-[14px] text-black opacity-[0.4]">
                  {item.date}
                </span>
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Link
              href="/berita"
              className="
            border-2 border-white
            bg-transparent
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
              Lihat Berita Lainnya
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
