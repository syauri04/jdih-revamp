export interface DokumenItem {
  kategori: string;
  jenis: string;
  nomor: string;
  judul: string;
  tematik: string;
  penerbit: string;
  status: "Berlaku" | "Tidak Berlaku";
  tahun: number;
  slug: string;
}

export interface DokumenFilters {
  jenis: string[];
  status: string[];
  tematik: string[];
  nomor: string;
  judul: string;
  tahun: string;
}
