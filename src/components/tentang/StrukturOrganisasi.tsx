import Image from "next/image";

export default function StrukturOrganisasi() {
  return (
    <section id="landasan-hukum" className="py-10 md:pt-0 md:pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 xl:px-0 ">
        <h2 className="text-[32px] leading-10 tracking-[-0.02em] text-[#097969] font-bold mb-10">
          Struktur Organisasi
        </h2>
        <div className="w-full md:max-w-4xl mx-auto px-4 md:px-12 mb-14">
          <h2 className="font-inter font-bold text-xl leading-6 text-black opacity-[0.8] mb-10">
            Tata Kerja Jaringan Dokumentasi dan Informasi Hukum Kementerian
            Pertanian
          </h2>

          <p
            className="mt-3
              font-inter
              text-base
              leading-6
              text-black
              opacity-[0.6]
              break-all "
          >
            Berdasarkan Pasal 20 Peraturan Menteri Pertanian Nomor 2 Tahun 2025
            tentang Organisasi dan Tata
            Kerja Kementerian Pertanian sebagaimana telah diubah dengan Peraturan 
            Menteri Pertanian Nomor 30 Tahun 2025
            tentang Perubahan atas Peraturan Menteri Pertanian Nomor 2 Tahun
            2025 tentang  Organisasi dan Tata Kerja Kementerian Pertanian, Biro
            Hukum mempunyai tugas salah satunya  melaksanakan pengelolaan
            jaringan dokumentasi dan informasi hukum lingkup Kementerian 
            Pertanian. Pusat Jaringan Dokumentasi dan Informasi Hukum (JDIH)
            Kementerian Pertanian 
            merupakan anggota Jaringan Dokumentasi dan Informasi Hukum Nasional
            (JDIHN) yang dikoordinasikan oleh Badan Pembinaan Hukum Nasional
            (BPHN) Kementerian Hukum dan HAM selaku Pusat JDIHN. JDIH
            Kementerian Pertanian dikelola oleh Biro Hukum di bawah koordinasi 
            Kelompok Substansi Program, Analisis, Evaluasi, Dokumentasi,
            dan Instrumen Hukum, khusunya oleh Tim
            Kerja Jaringan Dokumentasi dan Informasi Hukum Pertanian.  <br />
            <br />
            Sebagai tindak lanjut dari ketentuan Pasal 5 ayat (1)
            Peraturan Presiden Nomor 33 Tahun 2012
            tentang Jaringan Dokumentasi dan Informasi Hukum Nasional,
            Kementerian Pertanian telah 
            menetapkan Peraturan Menteri Pertanian Nomor 20 Tahun 2022
            tentang Penyelenggaraan 
            Jaringan Dokumentasi dan Informasi Hukum Lingkup Kementerian Pertanian.
            Berdasarkan  ketentuan Pasal 2 Peraturan Menteri Pertanian dimaksud,
            JDIH Kementerian Pertanian terdiri atas  Pusat JDIH
            Kementerian Pertanian yang berkedudukan di Biro Hukum dan Anggota
            JDIH Kementerian Pertanian yang
            berkedudukan pada sekretariat direktorat jenderal,
            sekretariat badan,
            dan sekretariat inspektorat jenderal lingkup Kementerian.
            Adapun susunan keanggotaan dan  tata kerja Pusat dan Anggota JDIH
            Kementerian Pertanian telah ditetapkan dalam Keputusan 
            Menteri Pertanian Nomor
            928/KPTS/OT.050/A/12/2022 dan tercantum dalam bagan di bawah ini:
          </p>
        </div>

        <div className="relative w-full mt-10">
          <Image
            src="/assets/struktur-organisasi.png"
            alt="Banner Statistik"
            width={1920}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
