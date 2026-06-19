import { HeroSection } from "@/components/sections/HeroSection";
import { TechStripSection } from "@/components/sections/TechStripSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { HowWeWorkSection } from "@/components/sections/HowWeWorkSection";
import { ProofSection } from "@/components/sections/ProofSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { CtaSection } from "@/components/sections/CtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TechStripSection />
      <ServicesSection />
      <HowWeWorkSection />
      <ProofSection />
      <TeamSection />
      <CtaSection />
    </>
  );
}