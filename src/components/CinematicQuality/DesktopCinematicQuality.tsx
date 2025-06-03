"use client";

import Image from "next/image";

export default function DesktopCinematicQuality() {
  return (
    <section className="w-full flex justify-center bg-[var(--background-darker)] py-[80px] relative overflow-hidden">
      {/* Fundo com grade */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(62,109,253,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(62,109,253,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
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
