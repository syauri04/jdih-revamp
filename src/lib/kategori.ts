export function kategoriLabel(slug: string) {
  const MAP: Record<string, string> = {
    "program-penyusunan-puu": "Program Penyusunan PUU",
    "rancangan-puu": "Rancangan PUU",
    "naskah-akademik": "Naskah Akademik",
    "kajian-penelitian-hukum": "Kajian / Penelitian Hukum",
    "risalah-pembahasan": "Risalah Pembahasan",
    "analisis-evaluasi": "Analisis dan Evaluasi",
  };

  // jika ada di mapping → pakai
  if (MAP[slug]) return MAP[slug];

  // fallback otomatis
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
