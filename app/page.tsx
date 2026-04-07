import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MemberGallerySection from "@/components/MemberGallerySection";
import OrgStructureSection from "@/components/OrgStructureSection";
import ProgramSection from "@/components/ProgramSection";
import VisionMissionSection from "@/components/VisionMissionSection";

export default function Home() {
  return (
    <>
      <Header />
      <div className="relative overflow-x-clip">
        <main className="relative overflow-x-clip">
          <HeroSection />
          <AboutSection />
          <VisionMissionSection />
          <ProgramSection />
          <OrgStructureSection />
          <MemberGallerySection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
}
