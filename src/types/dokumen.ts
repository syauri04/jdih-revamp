export interface DokumenItem {
  kategori: string;
  jenis: string;
  nomor: string;
  judul: string;
  tematik: string;
  penerbit: string;
  instansi: string;
  tahun: number;
  slug: string;
}

export interface DokumenFilters {
  jenis: string[];
  nomor: string;
  judul: string;
  tahun: string;
}
