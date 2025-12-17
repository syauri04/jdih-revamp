export default function VisiMisi() {
  return (
    <section id="visi-misi" className="py-10 md:pt-0 md:pb-20">
      <div className="bg-[#097969]/5 rounded-[40px]  mx-4 lg:mx-8">
        <div className="max-w-7xl mx-auto py-16 px-6 xl:px-0 ">
          <h2 className="text-[32px] leading-10 tracking-[-0.02em] text-[#097969] font-bold mb-12">
            Visi Misi
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-inter font-bold text-xl leading-6 text-black opacity-[0.8]">
                Visi
              </h2>

              <p className="mt-4 font-inter text-base leading-6 text-black opacity-[0.6]">
                &quot;Menjadi sarana penyediaan layanan dokumentasi dan
                informasi hukum di bidang pertanian yang mudah, cepat, lengkap
                dan akurat, guna mendukung terwujudnya sistem hukum pertanian
                yang kuat, harmonis dan berkerakyatan.&quot;
              </p>
            </div>

            <div>
              <h2 className="font-inter font-bold text-xl leading-6 text-black opacity-[0.8]">
                Misi
              </h2>

              <div className="mt-4 space-y-3">
                {[
                  "Mengoptimalkan sistem dokumentasi dan informasi hukum berbasis teknologi informasi secara dinamis;",
                  "Meningkatkan sinergisitas dalam pengelolaan dan penyebarluasan informasi dokumen hukum di bidang pertanian dan dokumen hukum lainnya secara terpadu dan terintegrasi; dan",
                  "Membangun sinergi pengelolaan dokumentasi dan jaringan informasi hukum dengan Pusat JDIH Nasional dan antar anggota JDIH Nasional dalam menyediakan sarana dokumentasi dan informasi hukum.",
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
        </div>
      </div>
    </section>
  );
}
