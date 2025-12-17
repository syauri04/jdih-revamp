import { Suspense } from "react";
import PeraturanClient from "./PeraturanClient";

export default function PeraturanPage() {
  return (
    <Suspense fallback={<div>Loading peraturan...</div>}>
      <PeraturanClient />
    </Suspense>
  );
}
