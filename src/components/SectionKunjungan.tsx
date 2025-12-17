import Image from "next/image";

export default function SectionKunjungan() {
  const statistikData = [
    {
      title: "Total Pengunjung",
      value: "12.345",
    },
    {
      title: "Pengunjung Bulan Ini",
      value: "3.210",
    },
    {
      title: "Pengunjung Hari Ini",
      value: "145",
    },
  ];

  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        <div className="max-w-4xl mx-auto bg-[#9DC209] rounded-[20px] p-10">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            {/* Icon */}
            <Image
              src="/assets/chart-01.png"
              alt="Icon Statistik"
              width={32}
              height={32}
              className="object-contain"
            />

            {/* Title */}
            <h3 className="text-[#043927] text-3xl leading-10 tracking-[-0.02em] font-bold">
              Statistik Kunjungan
            </h3>
          </div>

          {/* Body */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {statistikData.map((item, index) => (
              <div key={index}>
                {/* Text Title */}
                <p className="text-[#043927] opacity-[0.8] text-xl leading-6 font-inter mb-2">
                  {item.title}
                </p>

                {/* Angka */}
                <p className="font-inter text-[32px] leading-10 text-[#043927] font-bold">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full mt-10 px-1 xl:px-0">
          <Image
            src="/assets/banner-app.png"
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
