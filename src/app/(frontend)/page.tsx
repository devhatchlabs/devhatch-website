import HeroSection from "@/components/sections/hero/HeroSection";
import ServicesSection from "@/components/sections/services/ServicesSection";
import IndustriesSection from "@/components/sections/industries/IndustriesSection";
import HowItWorksSection from "@/components/sections/how-it-works/HowItWorksSection";
import TestimonialsSection from "@/components/sections/testimonials/TestimonialsSection";
import AboutSection from "@/components/sections/about/AboutSection";
import CTASection from "@/components/sections/cta/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <IndustriesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <AboutSection />
      <CTASection />
    </>
  );
}