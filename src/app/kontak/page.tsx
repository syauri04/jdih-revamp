import BreadcumbPage from "@/components/BreadcumbPage";

export default function KontakPage() {
  return (
    <div className="">
      <BreadcumbPage title="Kontak" />
      <div className="bg-[linear-gradient(180deg,rgba(102,90,0,0.05)_0%,rgba(102,90,0,0)_100%)]">
        <div className="max-w-7xl mx-auto px-6 xl:px-0 pt-10 md:pt-20 pb-20">
          <div className="flex flex-col lg:flex-row justify-between gap-12">
            {/* KOLOM KIRI */}
            <div className="w-full lg:max-w-142.5">
              {/* Head */}
              <h2 className="text-[32px] leading-10 tracking-[-0.02em] text-[#097969] font-bold mb-4 md:mb-8">
                Hubungi Kami
              </h2>

              {/* FORM */}
              <form className="flex flex-col gap-8">
                {/* Nama */}
                <div className="flex flex-col gap-2">
                  <label className="font-inter text-sm text-black/60">
                    Nama
                  </label>
                  <input
                    type="text"
                    className="bg-white border border-black/10 rounded-[10px] px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#097969]"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label className="font-inter text-sm text-black/60">
                    Alamat e-mail
                  </label>
                  <input
                    type="email"
                    className="bg-white border border-black/10 rounded-[10px] px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#097969]"
                  />
                </div>

                {/* Pesan */}
                <div className="flex flex-col gap-2">
                  <label className="font-inter text-sm text-black/60">
                    Pesan
                  </label>
                  <textarea
                    rows={5}
                    className="bg-white border border-black/10 rounded-[10px] px-4 py-3 resize-none focus:outline-none focus:ring-1 focus:ring-[#097969]"
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="w-full bg-[#097969] rounded-[22px] px-8 py-3 font-inter font-bold text-base text-white text-center hover:opacity-90 transition cursor-pointer"
                >
                  Kirim
                </button>
              </form>
            </div>

            {/* KOLOM KANAN */}
            <div className="w-full lg:max-w-92.5 ">
              {/* Head */}
              <h2 className="text-[32px] leading-10 tracking-[-0.02em] text-[#097969] font-bold mb-4 md:mb-8">
                Sekretariat JDIH
              </h2>

              {/* Alamat */}
              <div className="mb-6">
                <h3 className="font-inter text-base leading-6 text-[#043927] font-bold mb-2">
                  Gedung A lantai 5
                </h3>
                <p className="font-inter text-base leading-6 text-black/60">
                  Jl. Harsono RM No.3, Ragunan - Pasar Minggu, Jakarta 12550
                </p>
              </div>

              {/* Jam Operasional */}
              <div>
                <h3 className="font-inter text-base leading-6 text-[#043927] font-bold mb-2">
                  Jam Operasional
                </h3>
                <div className="flex justify-between  lg:gap-8 font-inter text-base leading-6 text-black/60">
                  <span>Senin – Jum’at</span>
                  <span>07.30 – 16.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
