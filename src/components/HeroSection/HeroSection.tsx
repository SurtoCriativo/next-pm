"use client";

import MobileHero from "./MobileHero";
import DesktopHero from "./DesktopHero";

export default function HeroSection() {
  return (
    <section className="w-full bg-[var(--background-darker)] overflow-hidden">
      {/* Mobile */}
      <div className="block lg:hidden">
        <MobileHero />
      </div>

      {/* Desktop */}
      <div className="hidden lg:block">
        <DesktopHero />
      </div>
    </section>
  );
}
