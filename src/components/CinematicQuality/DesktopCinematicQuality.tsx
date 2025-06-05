"use client";

import Image from "next/image";

export default function DesktopCinematicQuality() {
  return (
    <section className="w-full bg-[var(--background-darker)] py-[120px] flex flex-col items-center relative overflow-hidden">
      {/* Grade de fundo */}
      <div
        className="absolute top-1/2 left-1/2 w-[1128px] h-[780px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
        style={{
          backgroundImage: `
  linear-gradient(to right, rgba(62,109,253,0.12) 1px, transparent 1px),
  linear-gradient(to bottom, rgba(62,109,253,0.12) 1px, transparent 1px)
`,
          backgroundSize: "28px 28px",
          backgroundPosition: "0 22px",
          maskImage: `radial-gradient(circle at center, black 20%, transparent 75%)`,
          WebkitMaskImage: `radial-gradient(circle at center, black 20%, transparent 75%)`,
        }}
      />

      <div className="w-full max-w-[1079px] relative z-10">
        <div className="bg-[#5E5E5E] h-[607px] border-[24px] border-[var(--surface-dark)] rounded-[32px] p-[48px] w-full h-[360px] flex flex-col justify-between">
          <div>
            <h2 className="text-white text-[40px] font-black leading-tight">
              Qualidade
            </h2>
            <p className="text-[48px] font-gochi text-[#F6A723] leading-tight mt-1">
              Cinematográfica!
            </p>
          </div>

          <div className="flex items-end justify-start gap-[80px] text-white text-sm">
            <div className="flex flex-col items-start gap-1">
              <div className="bg-white text-black text-xs font-bold rounded px-2 py-0.5">
                HD
              </div>
              <span className="w-[135px] text-[16px] leading-tight mt-1">
                Aulas gravadas em alta definição
              </span>
            </div>

            <div className="h-[42px] w-px bg-white/20" />

            <div className="flex flex-col items-start gap-1">
              <div className="bg-white text-black text-xs font-bold rounded px-2 py-0.5">
                CC
              </div>
              <span className="w-[135px] text-[16px] leading-tight mt-1">
                100% legendado em Português
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
