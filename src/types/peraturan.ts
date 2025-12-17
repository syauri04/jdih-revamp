export interface PeraturanItem {
  jenis: string;
  nomor: string;
  judul: string;
  tematik: string;
  ditetapkan: string;
  diundangkan: string;
  status: "Berlaku" | "Tidak Berlaku";
  tahun: number;
  slug: string;
}

export interface PeraturanFilters {
  jenis: string[];
  status: string[];
  tematik: string[];
  nomor: string;
  judul: string;
  tahun: string;
}
