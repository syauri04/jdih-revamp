"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-3 md:px-6 pb-6 text-white">
      <div className="relative rounded-[20px] overflow-hidden">
        <div
          className="
      absolute inset-0
      bg-linear-to-t
      from-[#2D5F9F]
      to-[#757474]
      opacity-[0.05]
    "
        />
        <div className="max-w-4xl xl:max-w-7xl mx-auto py-14 px-6 lg:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* KIRI */}
            <div>
              <Image
                src="/assets/logo-green.svg"
                alt="IBioFund"
                width={179}
                height={67}
                priority
              />
              <p className="text-base font-bold text-[#097969] mt-4 leading-6">
                BIRO HUKUM KEMENTERIAN PERTANIAN
              </p>
              <p className="text-base font-inter text-black opacity-60 mt-6 leading-6">
                Gedung A lantai 5 <br />
                Jl. Harsono RM No.3, Ragunan - Pasar Minggu
                <br />
                Jakarta 12550
              </p>
              <p className="text-base font-inter text-black opacity-60 mt-6 leading-6">
                Telp: (+62 21) 7816485 <br /> Fax.: (+62 21) 7804036
              </p>
            </div>

            {/* KANAN */}
            <div className="w-full h-75 md:h-87.5 rounded-[20px] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7522482801446!2d106.8227716!3d-6.296253699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f2012682b1d5%3A0x1ba390c0a59a5e8a!2sDepartemen%20Pertanian%20Gedung%20A!5e0!3m2!1sid!2sid!4v1765889414551!5m2!1sid!2sid"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 xl:px-0 py-10">
          <ul className="flex flex-wrap items-center gap-4">
            {/* ITEM 1 */}
            <li>
              <Link
                href="#"
                className="inline-flex items-center gap-2 cursor-pointer"
              >
                <Image
                  src="/assets/facebook.png"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </Link>
            </li>

            {/* ITEM 2 */}
            <li>
              <Link
                href="#"
                className="inline-flex items-center gap-2 cursor-pointer"
              >
                <Image
                  src="/assets/instagram.png"
                  alt="Twitter"
                  width={24}
                  height={24}
                />
              </Link>
            </li>

            {/* ITEM 3 */}
            <li>
              <Link
                href="#"
                className="inline-flex items-center gap-2 cursor-pointer"
              >
                <Image
                  src="/assets/tiktok.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="inline-flex items-center gap-2 cursor-pointer"
              >
                <Image
                  src="/assets/new-twitter.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="inline-flex items-center gap-2 cursor-pointer"
              >
                <Image
                  src="/assets/youtube.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </Link>
            </li>
          </ul>
          <p className="text-sm text-black/40 leading-4 mt-8">
            © 2025 Biro Hukum Kementan. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
