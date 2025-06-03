import HeroSection from "../components/HeroSection/HeroSection";
import IntroSection from "../components/IntroSection/IntroSection";
import BenefitsSection from "../components/BenefitCard/BenefitCard";
import ModulesSection from "../components/ModulesSection";
import CinematicQualitySection from "../components/CinematicQualitySection";
import TestimonialSection from "../components/TestimonialSection";
import CourseHighlightSection from "../components/CourseHighlightSection";
import CertificateSection from "../components/CertificateSection";
import PricingSection from "../components/PricingSection";
import FaqSection from "../components/FaqSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <IntroSection />
      <BenefitsSection />
      <ModulesSection />
      <CinematicQualitySection />
      <TestimonialSection />
      <CourseHighlightSection />
      <CertificateSection />
      <PricingSection />
      <FaqSection />
    </main>
  );
}
