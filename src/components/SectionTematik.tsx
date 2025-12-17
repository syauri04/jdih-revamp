import Image from "next/image";
import Link from "next/link";

export default function SectionTemtaik() {
  const items = [
    {
      id: 1,
      title: "Manajemen dan Kesekretariatan",
      tematik: "Manajemen-dan-Kesekretariatan",
      icon: "/assets/tematik-1.png",
    },
    {
      id: 2,
      title: "Prasarana dan Sarana",
      tematik: "Prasarana-dan-Sarana",
      icon: "/assets/tematik-2.png",
    },
    {
      id: 3,
      title: "Tanaman Pangan",
      tematik: "Tanaman-Pangan",
      icon: "/assets/tematik-3.png",
    },
    {
      id: 4,
      title: "Hortikultura",
      tematik: "Hortikultura",
      icon: "/assets/tematik-4.png",
    },
    {
      id: 5,
      title: "Peternakan dan Kesehatan Hewan",
      tematik: "Peternakan-dan-Kesehatan-Hewan",
      icon: "/assets/tematik-5.png",
    },
    {
      id: 6,
      title: "Perkebunan",
      tematik: "Perkebunan",
      icon: "/assets/tematik-6.png",
    },
    {
      id: 7,
      title: "Penelitian dan Pengembangan",
      tematik: "Penelitian-dan-Pengembangan",
      icon: "/assets/tematik-7.png",
    },
    {
      id: 8,
      title: "Penyuluhan dan SDM Pertanian",
      tematik: "Penyuluhan-dan-SDM-Pertanian",
      icon: "/assets/tematik-8.png",
    },
    {
      id: 9,
      title: "Ketahanan Pangan",
      tematik: "Ketahanan-Pangan",
      icon: "/assets/tematik-9.png",
    },
    {
      id: 10,
      title: "Karantina Pertanian",
      tematik: "Karantina-Pertanian",
      icon: "/assets/tematik-10.png",
    },
  ];

  return (
    <section className="py-10 md:pt-0 md:pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 xl:px-0">
        <h2 className="text-[32px] leading-10 tracking-[-0.02em] text-[#097969] font-bold mb-10 md:mb-16">
          Tematik Peraturan
        </h2>

        <div className="max-w-6xl mx-auto">
          <div
            className="
              flex gap-6 overflow-x-auto pb-4
              md:grid md:grid-cols-5 md:gap-x-6 md:gap-y-12
              md:overflow-visible
              scrollbar-hide
            "
          >
            {items.map((item) => (
              <Link
                key={item.id}
                href={`/peraturan?tematik=${item.tematik}`}
                className="
                  flex flex-col items-center shrink-0
                  min-w-[100px]
                  md:min-w-0
                "
              >
                {/* ICON */}
                <div className="relative w-12 md:w-18 aspect-square">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* TITLE */}
                <h3 className="mt-3 text-sm md:text-base leading-5 text-center text-[#097969]">
                  {item.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
