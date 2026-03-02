import { HeroSection } from "@/components/hero-section";
import { SolutionSection } from "@/components/solution-section";
import { ROISection } from "@/components/roi-section";
import { MarketSection } from "@/components/market-section";
import { FounderSection } from "@/components/founder-section";
import { FooterSection } from "@/components/footer-section";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { TubelightNavbar } from "@/components/ui/tubelight-navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F232E] w-full">
      <TubelightNavbar />
      <HeroSection />
      <SolutionSection />
      <ROISection />
      <MarketSection />
      <FounderSection />
      <FooterSection />
      <ScrollToTop />
    </main>
  );
}
