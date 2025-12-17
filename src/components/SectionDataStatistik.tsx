import DataStatistikChart from "./DataStatistikChart";

export default function SectionDataStatistik() {
  return (
    <section className="py-10 md:pt-0 md:pb-10">
      <div className="bg-[#097969]/5  rounded-[40px] mx-4 lg:mx-8">
        <div className="max-w-7xl mx-auto py-16 px-6 xl:px-0">
          <h2 className="text-[32px] leading-10 tracking-[-0.02em] text-[#097969] font-bold mb-8">
            Data Statistik
          </h2>
          <div>
            <h3 className="text-2xl text-black opacity-[0.8] leading-8.5 tracking-[-0.02em] md:text-center font-bold mb-3">
              Statistik peraturan pada Kementerian Pertanian
            </h3>
            <p className="text-base text-black opacity-[0.6] leading-6 tracking-[-0.02em] md:text-center max-w-4xl mx-auto mb-16">
              Beberapa grafik statistik berikut menjelaskan beragam data dari
              dokumentasi dan informasi hukum, baik data status peraturan,
              jumlah peraturan dan jumlah dokumen hukum yang ada pada website
              JDIH Kementan.
            </p>
          </div>
          <DataStatistikChart />
        </div>
      </div>
    </section>
  );
}
