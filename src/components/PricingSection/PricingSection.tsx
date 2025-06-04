"use client";

import DesktopPricingSection from "./DesktopPricingSection";
import MobilePricingSection from "./MobilePricingSection";

export default function PricingSection() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopPricingSection />
      </div>
      <div className="block lg:hidden">
        <MobilePricingSection />
      </div>
    </>
  );
}
