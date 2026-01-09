// src/lib/dokumen-helper.ts

export const JENIS_LABEL: Record<string, string> = {
  peraturan: "Peraturan",
  putusan: "Putusan",
  monografi: "Monografi",
  artikel: "Artikel",
};

export const KATEGORI_LABEL: Record<string, string> = {
  "program-penyusunan-puu": "Program Penyusunan PUU",
  "rancangan-puu": "Rancangan PUU",
  "naskah-akademik": "Naskah Akademik",
  "kajian-penelitian-hukum": "Kajian / Penelitian Hukum",
  "risalah-pembahasan": "Risalah Pembahasan",
};

export const labelize = (slug: string) =>
  slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
