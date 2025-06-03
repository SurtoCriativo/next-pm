"use client";

import MobileIntro from "./MobileIntro";
import DesktopIntro from "./DesktopIntro";

export default function IntroSection() {
  return (
    <section className="w-full bg-[var(--background-darker)] overflow-hidden">
      {/* Mobile */}
      <div className="block lg:hidden">
        <MobileIntro />
      </div>

      {/* Desktop */}
      <div className="hidden lg:block">
        <DesktopIntro />
      </div>
    </section>
  );
}
