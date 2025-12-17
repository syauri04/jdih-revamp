export default function LandasanHukum() {
  return (
    <section
      id="landasan-hukum"
      className="py-10 md:py-20 bg-[linear-gradient(180deg,rgba(102,90,0,0.05)_0%,rgba(102,90,0,0)_100%)]"
    >
      <div className="max-w-7xl mx-auto px-6 xl:px-0 ">
        <h2 className="text-[32px] leading-10 tracking-[-0.02em] text-[#097969] font-bold mb-10">
          Landasan Hukum
        </h2>
        <div className="max-w-4xl mx-auto px-4 md:px-12 mb-14">
          <h2 className="font-inter font-bold text-xl leading-6 text-black opacity-[0.8]">
            JDIH KEMENTERIAN PERTANIAN
          </h2>

          <p className="mt-3 font-inter italic text-base leading-6 text-black opacity-[0.6]">
            Jaringan Dokumentasi dan Informasi Hukum Kementerian Pertanian
          </p>

          <p className="mt-3 font-inter text-base leading-6 text-black opacity-[0.6] break-all">
            Merupakan suatu wadah pendayagunaan bersama atas dokumen hukum di
            bidang pertanian dan dokumen hukum lainnya secara tertib, terpadu,
            dan berkesinambungan, serta merupakan sarana pemberian layanan
            informasi hukum secara lengkap, akurat, mudah, dan cepat.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-4 md:px-12">
          <h2 className="font-inter font-bold text-xl leading-6 text-black opacity-[0.8]">
            Landasan Hukum:
          </h2>

          <p className="mt-3 font-inter text-base leading-6 text-black opacity-[0.6] break-all">
            JDIH
            Kementerian Pertanian dibentuk sebagai tindak lanjut amanat ketentuan Pasal
            5 ayat (1)
          </p>

          <p className="mt-4 font-inter text-base leading-6 text-black opacity-[0.6] break-all">
            Peraturan Presiden Nomor 33 Tahun 2012
            tentang Jaringan Dokumentasi dan Informasi Hukum  Nasional.
            <br />
            <br />
            Pedoman pengelolaan JDIH Kementerian Pertanian meliputi:
          </p>

          <div className="mt-2 space-y-3">
            {[
              "Peraturan Presiden Nomor 33 Tahun 2012 tentang Jaringan Dokumentasi dan Informasi Hukum Nasional",
              "Peraturan Menteri Hukum dan Hak Asasi Manusia Nomor 8 Tahun 2019 tentang Standar Pengelolaan Dokumen dan Informasi Hukum;",
              "Peraturan Menteri Pertanian Nomor 20 Tahun 2022 tentang Penyelenggaraan Jaringan Dokumentasi dan Informasi Hukum Lingkup Kementerian Pertanian; dan",
              "Keputusan Menteri Pertanian Nomor 928/KPTS/OT.050/A/12/2022 tentang susunan keanggotaan dan tata kerja Pusat dan Anggota Jaringan Dokumentasi dan Informasi Hukum Kementerian Pertanian.",
            ].map((text, index) => (
              <div key={index} className="flex gap-3">
                {/* Number */}
                <span className="w-5 shrink-0 font-inter text-base leading-6 text-black opacity-[0.6]">
                  {index + 1}.
                </span>

                {/* Text */}
                <p className="font-inter text-base leading-6 text-black opacity-[0.6]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
