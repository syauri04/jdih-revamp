import BreadcumbPage from "@/components/BreadcumbPage";
import LandasanHukum from "@/components/tentang/LandasanHukum";
import Sop from "@/components/tentang/Sop";
import StrukturOrganisasi from "@/components/tentang/StrukturOrganisasi";
import VisiMisi from "@/components/tentang/VisiMisi";

export default function TentangPage() {
  return (
    <div className="">
      <BreadcumbPage title="Tentang Kami" />
      <LandasanHukum />
      <VisiMisi />
      <StrukturOrganisasi />
      <Sop />
    </div>
  );
}
