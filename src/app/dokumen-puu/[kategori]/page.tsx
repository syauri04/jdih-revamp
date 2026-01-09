import { Suspense } from "react";
import DokumenClient from "./DokumenClient";

export default function DokumenKategoriPage() {
  return (
    <Suspense fallback={<div>Loading dokumen...</div>}>
      <DokumenClient />
    </Suspense>
  );
}
