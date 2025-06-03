"use client";

import DesktopModulesSection from "./DesktopModulesSection";
import MobileModulesSection from "./MobileModulesSection";

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
