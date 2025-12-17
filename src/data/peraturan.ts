export interface PeraturanItem {
  id: number;
  jenis: string;
  nomor: string;
  judul: string;
  tema: string;
  tahun: number;
  ditetapkan: string;
  diundangkan: string;
  status: "Berlaku" | "Tidak Berlaku";
  slug: string;
}

export const dummyPeraturan: PeraturanItem[] = [
  {
    id: 1,
    jenis: "Peraturan Pemerintah",
    nomor: "PP No.30",
    judul:
      "Perubahan atas Peraturan Menteri Pertanian tentang Organisasi dan Tata Kerja Kementerian Pertanian",
    tema: "Organisasi dan Tata Kerja",
    tahun: 2025,
    ditetapkan: "28 Oktober 2025",
    diundangkan: "28 Oktober 2025",
    status: "Berlaku",
    slug: "pp-no-30-tahun-2025",
  },
  {
    id: 2,
    jenis: "Peraturan Presiden",
    nomor: "Perpres No.29",
    judul: "Pedoman Umum Bantuan Pemerintah Lingkup Kementerian Pertanian",
    tema: "Bantuan Pemerintah",
    tahun: 2025,
    ditetapkan: "15 September 2025",
    diundangkan: "16 September 2025",
    status: "Tidak Berlaku",
    slug: "perpres-no-29-tahun-2025",
  },
  {
    id: 3,
    jenis: "Undang-Undang",
    nomor: "UU No.12",
    judul: "Sistem Budidaya Pertanian Berkelanjutan",
    tema: "Pertanian Berkelanjutan",
    tahun: 2021,
    ditetapkan: "10 Juni 2021",
    diundangkan: "11 Juni 2021",
    status: "Berlaku",
    slug: "uu-no-12-tahun-2021",
  },
  {
    id: 4,
    jenis: "Peraturan Menteri Pertanian",
    nomor: "Permentan No.05",
    judul: "Pedoman Teknis Pengelolaan Pupuk Bersubsidi",
    tema: "Pupuk dan Subsidi",
    tahun: 2023,
    ditetapkan: "3 Februari 2023",
    diundangkan: "4 Februari 2023",
    status: "Berlaku",
    slug: "permentan-no-05-tahun-2023",
  },
  {
    id: 5,
    jenis: "Keputusan Menteri",
    nomor: "Kepmentan No.88",
    judul: "Penetapan Harga Acuan Pembelian Gabah",
    tema: "Harga Pangan",
    tahun: 2022,
    ditetapkan: "20 Maret 2022",
    diundangkan: "21 Maret 2022",
    status: "Tidak Berlaku",
    slug: "kepmentan-no-88-tahun-2022",
  },
  {
    id: 6,
    jenis: "Instruksi Presiden",
    nomor: "Inpres No.3",
    judul: "Percepatan Ketahanan Pangan Nasional",
    tema: "Ketahanan Pangan",
    tahun: 2024,
    ditetapkan: "5 Januari 2024",
    diundangkan: "5 Januari 2024",
    status: "Berlaku",
    slug: "inpres-no-3-tahun-2024",
  },
];
