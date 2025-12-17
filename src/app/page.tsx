import HeroSlider from "@/components/HeroSlider";
import SectionSurvey from "@/components/SecitonSurvey";
import SectionBerita from "@/components/SectionBerita";
import SectionDataStatistik from "@/components/SectionDataStatistik";
import SectionInfografis from "@/components/SectionInfografis";
import SectionKunjungan from "@/components/SectionKunjungan";
import SectionLastPeraturan from "@/components/SectionLastPeraturan";
import SectionMarque from "@/components/SectionMarque";
import SectionTemtaik from "@/components/SectionTematik";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <SectionLastPeraturan />
      <SectionBerita />
      <SectionTemtaik />
      <SectionDataStatistik />
      <SectionInfografis />
      <SectionSurvey />
      <SectionMarque />
      <SectionKunjungan />
    </main>
  );
}
