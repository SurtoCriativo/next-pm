"use client";

import Image from "next/image";

export default function CinematicQualitySection() {
  return (
    <section className="w-full flex justify-center bg-[var(--background-darker)] py-12">
      <div className="w-full bg-[#1F242C] rounded-2xl px-4 py-5 flex justify-center">
        <div className="w-[343px] flex flex-col items-start space-y-6">
          {/* IMAGEM */}
          <div className="w-[343px] h-[193px] rounded-lg overflow-hidden bg-zinc-700">
            {/* Substituir src com imagem real */}
            <Image
              src="/video-placeholder.png"
              alt="Aula exemplo em alta definição"
              width={343}
              height={193}
              className="w-full h-full object-cover"
            />
          </div>

          {/* TEXTO */}
          <div>
            <h2 className="text-white text-[20px] font-black leading-tight">
              Qualidade
            </h2>
            <p className="text-[20px] font-gochi text-[#F6A723] leading-tight mt-1">
              Cinematográfica!
            </p>
          </div>

          {/* ÍCONES INFORMATIVOS */}
          <div className="flex w-full items-start justify-between gap-6 text-white text-sm">
            <div className="flex flex-col items-start gap-1">
              <div className="bg-white text-black text-xs font-bold rounded px-2 py-0.5">
                HD
              </div>
              <span className="text-xs leading-tight mt-1">
                Aulas gravadas em alta definição
              </span>
            </div>

            <div className="h-full w-px bg-white/20" />

            <div className="flex flex-col items-start gap-1">
              <div className="bg-white text-black text-xs font-bold rounded px-2 py-0.5">
                CC
              </div>
              <span className="text-xs leading-tight mt-1">
                100% legendado em Português
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
