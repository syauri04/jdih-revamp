"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiSearch, FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // mobile states
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openTentang, setOpenTentang] = useState(false);
  const [openDokumen, setOpenDokumen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const activeClass = "text-[#097969] border-b-[3px] border-[#097969] pb-1";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setOpenTentang(false);
    setOpenDokumen(false);
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out px-6 xl:px-0
          ${
            scrolled
              ? "fixed bg-transparent"
              : isHome
              ? "fixed bg-transparent"
              : "relative bg-[#665A00]/5"
          }
        `}
      >
        <div
          className={`mx-auto flex items-center justify-between py-4 transition-all duration-300 ease-in-out
            ${
              scrolled
                ? "max-w-295 bg-white/90 backdrop-blur-md px-8 mt-2 rounded-[40px]"
                : "max-w-7xl"
            }
          `}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/assets/logo-header-1.png"
              alt="Logo 1"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <Image
              src="/assets/logo-header-svg.svg"
              alt="Logo 2"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* ================= DESKTOP MENU ================= */}
          <nav className="hidden lg:flex items-center gap-8 text-black font-medium relative">
            <Link
              href="/"
              className={`${
                isActive("/") ? activeClass : "text-black"
              } transition-colors`}
            >
              Beranda
            </Link>

            {/* Tentang Kami */}
            <div className="group relative">
              <button
                type="button"
                className={`flex items-center gap-1 transition-colors
                  ${isActive("/tentang") ? activeClass : "text-black"}
                `}
              >
                Tentang Kami <FiChevronDown className="text-sm" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all">
                {[
                  ["Landasan Hukum", "#landasan-hukum"],
                  ["Visi Misi", "#visi-misi"],
                  ["Struktur Organisasi", "#struktur-organisasi"],
                  ["SOP JDIH", "#sop-jdih"],
                ].map(([label, hash]) => (
                  <Link
                    key={label}
                    href={`/tentang${hash}`}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Dokumen Hukum */}
            <div className="group relative">
              <button
                type="button"
                className={`flex items-center gap-1 transition-colors
                  ${
                    isActive("/peraturan") ||
                    isActive("/putusan-pengadilan") ||
                    isActive("/monografi") ||
                    isActive("/artikel")
                      ? activeClass
                      : "text-black"
                  }
                `}
              >
                Dokumen Hukum <FiChevronDown className="text-sm" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all">
                {[
                  ["Peraturan", "/peraturan"],
                  ["Putusan Pengadilan", "/putusan-pengadilan"],
                  ["Monografi", "/monografi"],
                  ["Artikel", "/artikel"],
                ].map(([label, link]) => (
                  <Link
                    key={label}
                    href={link}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/kontak"
              className={`${
                isActive("/kontak") ? activeClass : "text-black"
              } transition-colors`}
            >
              Kontak
            </Link>
          </nav>

          {/* ================= RIGHT ICON ================= */}
          <div className="flex items-center gap-4">
            {/* Search (desktop only) */}
            <div className="relative hidden lg:flex items-center h-10">
              <FiSearch
                className="text-black cursor-pointer text-xl relative z-10"
                onClick={() => setSearchOpen(!searchOpen)}
              />

              <input
                type="text"
                placeholder="Cari..."
                className={`absolute right-0 top-1/2 -translate-y-1/2 h-10 px-3 transition-all
      ${
        searchOpen
          ? "w-48 opacity-100 bg-white border border-gray-300 pointer-events-auto"
          : "w-0 opacity-0 pointer-events-none"
      }
    `}
              />
            </div>

            {/* Hamburger (mobile) */}
            <button
              className="lg:hidden text-2xl"
              onClick={() => setMobileOpen(true)}
            >
              <FiMenu />
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed inset-0 z-999 bg-[#097969] text-white
            transform transition-transform duration-300
            lg:hidden
            ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
          `}
      >
        <div className="flex items-center justify-between px-6 py-5">
          <span className="text-lg font-semibold">Menu</span>
          <button onClick={() => setMobileOpen(false)}>
            <FiX className="text-2xl" />
          </button>
        </div>

        <nav className="flex flex-col px-6 gap-4 text-2xl ">
          <Link href="/" onClick={closeMobileMenu}>
            Beranda
          </Link>

          {/* Tentang Kami */}
          <button
            className="flex items-center justify-between"
            onClick={() => setOpenTentang(!openTentang)}
          >
            Tentang Kami
            <FiChevronDown
              className={`transition ${openTentang ? "rotate-180" : ""}`}
            />
          </button>

          {openTentang && (
            <div className="pl-4 flex flex-col gap-2 text-2xl text-white/80">
              <Link href="/tentang#landasan-hukum" onClick={closeMobileMenu}>
                Landasan Hukum
              </Link>
              <Link href="/tentang#visi-misi" onClick={closeMobileMenu}>
                Visi Misi
              </Link>
              <Link
                href="/tentang#struktur-organisasi"
                onClick={closeMobileMenu}
              >
                Struktur Organisasi
              </Link>
              <Link href="/tentang#sop-jdih" onClick={closeMobileMenu}>
                SOP JDIH
              </Link>
            </div>
          )}

          {/* Dokumen Hukum */}
          <button
            className="flex items-center justify-between"
            onClick={() => setOpenDokumen(!openDokumen)}
          >
            Dokumen Hukum
            <FiChevronDown
              className={`transition ${openDokumen ? "rotate-180" : ""}`}
            />
          </button>

          {openDokumen && (
            <div className="pl-4 flex flex-col gap-2 text-2xl text-white/80">
              <Link href="/peraturan" onClick={closeMobileMenu}>
                Peraturan
              </Link>
              <Link href="/putusan-pengadilan" onClick={closeMobileMenu}>
                Putusan Pengadilan
              </Link>
              <Link href="/monografi" onClick={closeMobileMenu}>
                Monografi
              </Link>
              <Link href="/artikel" onClick={closeMobileMenu}>
                Artikel
              </Link>
            </div>
          )}

          <Link href="/kontak" onClick={closeMobileMenu}>
            Kontak
          </Link>
        </nav>
      </div>
    </>
  );
}
