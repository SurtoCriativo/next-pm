"use client";

import MobileBenefitCard from "./MobileBenefitCard";
import DesktopBenefitCard from "./DesktopBenefitCard";

export default function BenefitCard() {
  return (
    <>
      {/* Mobile */}
      <div className="block lg:hidden">
        <MobileBenefitCard />
      </div>

      {/* Desktop */}
      <div className="hidden lg:block">
        <DesktopBenefitCard />
      </div>
    </>
  );
}
