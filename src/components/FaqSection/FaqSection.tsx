"use client";

import DesktopFaqSection from "./DesktopFaqSection";
import MobileFaqSection from "./MobileFaqSection";

export default function PricingSection() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopFaqSection />
      </div>
      <div className="block lg:hidden">
        <MobileFaqSection />
      </div>
    </>
  );
}
