import HeroSection from "@/components/sections/hero/HeroSection";
import ImpactSection from "@/components/sections/impact/ImpactSection";
import ServicesSection from "@/components/sections/services/ServicesSection";
import IndustriesSection from "@/components/sections/industries/IndustriesSection";
import HowItWorksSection from "@/components/sections/how-it-works/HowItWorksSection";
import TestimonialsSection from "@/components/sections/testimonials/TestimonialsSection";
import CTASection from "@/components/sections/cta/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ImpactSection />
      <ServicesSection />
      <IndustriesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}