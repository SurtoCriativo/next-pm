import HeroSection from "../components/HeroSection/HeroSection";
import IntroSection from "../components/IntroSection/IntroSection";
import BenefitsSection from "../components/BenefitCard/BenefitCard";
import ModulesSection from "../components/ModulesSection/ModulesSection";
import CinematicQualitySection from "../components/CinematicQuality/CinematicQualitySection";
import TestimonialSection from "../components/Testimonial/TestimonialSection";
import CourseHighlightSection from "../components/CourseHighlight/CourseHighlightSection";
import CertificateSection from "../components/CertificateSection/CertificateSection";
import PricingSection from "../components/PricingSection/PricingSection";
import FaqSection from "../components/FaqSection/FaqSection";

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
