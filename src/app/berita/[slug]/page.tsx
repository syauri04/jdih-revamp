import Image from "next/image";
import Link from "next/link";

const article = {
  id: 1,
  slug: "inclusive-financing-green-economy",
  title:
    "Lindungi Sistem Pangan Digital, Kementan–BSSN Perkuat Kolaborasi Keamanan Siber Pertanian Indonesia",
  date: "02 DES 2025",
  image: "/assets/berita-1.jpg",
  category: "Events",
  contents: [
    `Jakarta (JDIH) -- Kementerian Pertanian (Kementan) memperkuat langkah transformasi digital sektor pertanian melalui kerja sama strategis dengan Badan Siber dan Sandi Negara (BSSN). Kolaborasi ini menandai komitmen kuat kedua lembaga dan menjadi tonggak penting dalam upaya memperkuat keamanan data dan sistem digital pertanian nasional, sejalan dengan visi mewujudkan kedaulatan dan kemandirian pangan Indonesia.
    
    Menteri Pertanian (Mentan) Andi Amran Sulaiman menegaskan, sektor pangan merupakan urat nadi bangsa yang harus dijaga dari ancaman apa pun, termasuk ancaman siber. Oleh karena itu, perlindungan sistem digital pertanian menjadi keharusan agar proses kerja, data, dan komunikasi di Kementan tetap aman dan optimal.
    
    “Kami sangat membutuhkan perlindungan dan dukungan khusus di sektor pertanian. Sistem siber kita harus kuat dan aman agar kinerja Kementan dapat terus optimal. Pangan itu vital kalau pangan bermasalah, negara pun bermasalah,” kata Mentan Amran usai melakukan penandatanganan nota kerjasama antara Kementan dan BSSN di Kantor Pusat Kementerian Pertanian (Kementan), Jakarta, Kamis (9/10/25).
    
    Lebih lanjut, Mentan menyampaikan bahwa kerja sama ini bukan sekadar langkah teknis, melainkan bagian dari visi besar menuju kemandirian pangan, sebagaimana arahan Presiden Prabowo Subianto untuk menjadikan Indonesia mandiri, berdaulat, dan bahkan mampu melompat menjadi lumbung pangan dunia.
    
    “Kolaborasi ini bukan sekadar kerja sama antar instansi, tetapi wujud nyata gagasan besar Bapak Presiden untuk menjadikan Indonesia sebagai rumah besar pangan dunia,” jelas Mentan Amran lebih lanjut.
    
    Dalam kolaborasi ini, Kementan dan BSSN akan meningkatkan kulaitas perlindungan informasi dan transaksi elektonik, pengamanan teknologi dan komunikasi, peningkatan dan pengembangan SDM, peningkatan kapasitas keamanan siber dan sandi, literasi keamanan siber, mengembangkan sistem keamanan digital pertanian yang komprehensif mulai dari perlindungan data petani, keamanan sistem informasi pangan, hingga pembangunan sistem komunikasi yang dapat menghubungkan petani di seluruh Indonesia langsung dengan pusat data Kementan di Jakarta.`,
  ],
};

const otherBerita = [
  {
    id: 1,
    title:
      "Peraturan Menteri Pertanian Nomor 28 Tahun 2025 tentang Pengelolaan Dana Dekonsentrasi dan Dana Tugas Pembantuan Lingkup Kementerian Pertanian Tahun Anggaran 2026",
    date: "16 Nov 2025",
    image: "/assets/berita-2.jpg",
    slug: "peratura-nenteri-nertanian-nomor-28",
  },
  {
    id: 2,
    title:
      "Peraturan Menteri Pertanian Nomor 21 Tahun 2025 tentang Pedoman Penyaluran Bantuan Pemerintah Bidang Pertanian",
    date: "02 Okt 2025",
    image: "/assets/berita-3.jpg",
    slug: "peratura-nenteri-nertanian-nomor-21",
  },
  {
    id: 3,
    title:
      "Peraturan Menteri Pertanian Nomor 15 Tahun 2025 tentang Tata Cara Pengawasan Distribusi Pupuk Bersubsidi",
    date: "18 Sep 2025",
    image: "/assets/berita-4.jpg",
    slug: "peratura-nenteri-nertanian-nomor-15",
  },
];

export default function BeritaDetail() {
  return (
    <div className="relative bg-[linear-gradient(180deg,rgba(102,90,0,0.05)_0%,rgba(102,90,0,0)_100%)]">
      <div className="relative  max-w-7xl mx-auto px-6 xl:px-0 py-20">
        <div className="grid grid-cols-1 md:grid-cols-[65%_30%] xl:grid-cols-[65%_30%] gap-12 xl:gap-14">
          <div className="flex flex-col">
            <div className="overflow-hidden rounded-xl mb-8">
              <Image
                src={article.image}
                alt={article.title}
                width={1200}
                height={500}
                className="w-full object-cover rounded-[40px]"
              />
            </div>
            <p className="text-base font-inter text-[#097969] mb-6">
              {article.date}
            </p>
            <h1 className="text-[40px] font-bold text-black/80 leading-10 tracking-[-0.02em] mb-8">
              {article.title}
            </h1>

            <div className="prose prose-lg max-w-none text-gray-800 prose-p:mb-6">
              {article.contents.map((content, index) =>
                content
                  .trim()
                  .split(/\n\s*\n/) // ⬅️ INI KUNCINYA
                  .map((paragraph, idx) => (
                    <p
                      className="font-inter text-base leading-6 text-black/60"
                      key={`${index}-${idx}`}
                    >
                      {paragraph.trim()}
                    </p>
                  ))
              )}
            </div>
          </div>

          <div className="flex flex-col gap-6">
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
              Berita Lainnya
            </h3>
            {otherBerita.map((item) => (
              <Link key={item.id} href={`/berita/${item.slug}`}>
                <div className="w-full flex flex-col gap-4 mb-4">
                  {/* IMAGE */}
                  <div className="relative w-full aspect-270/180 overflow-hidden rounded-[20px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* TITLE */}
                  <h3
                    className="
                    font-bold
                    text-[20px]
                    leading-6
                    text-black/80
                    tracking-[-0.02em]
                    line-clamp-3
                    "
                  >
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
