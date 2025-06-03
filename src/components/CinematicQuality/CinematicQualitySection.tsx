"use client";

import DesktopModulesSection from "./DesktopCinematicQuality";
import MobileModulesSection from "./MobileCinematicQuality";

export default function ModulesSection() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopModulesSection />
      </div>
      <div className="block lg:hidden">
        <MobileModulesSection />
      </div>
    </>
  );
}
