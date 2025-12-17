import Image from "next/image";
import Link from "next/link";

interface BreadcumbProps {
  title?: string;
  subtitle?: string;
}

export default function BreadcumbPage({ title, subtitle }: BreadcumbProps) {
  return (
    <div className="relative px-4 md:px-8 bg-[#665A00]/5">
      <div className="relative h-62 w-full">
        <Image
          src="/assets/hero-bradcumb.png"
          alt="Hero Breadcrumb"
          fill
          className="object-cover rounded-[40px]"
          priority
        />

        <div className="absolute inset-0 px-6 xl:px-0  flex items-center rounded-[40px]">
          <div className="max-w-7xl mx-auto w-full">
            {/* TITLE */}
            <h1 className="text-white text-5xl tracking-[-0.02em] font-bold">
              {title}
            </h1>

            {/* BREADCRUMB */}
            <div className="flex items-center gap-2 text-base font-inter mt-4">
              <Link
                href="/"
                className="text-white/80 hover:text-white transition"
              >
                Beranda
              </Link>

              <span className="text-white/60">{">"}</span>

              <span className="text-white/80">{title}</span>

              {subtitle && (
                <>
                  <span className="text-white/60">{">"}</span>
                  <span className="text-white font-medium">{subtitle}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
