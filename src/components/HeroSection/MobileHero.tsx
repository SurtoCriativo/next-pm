"use client";

import Image from "next/image";

function MobileHero() {
  return (
    <div className="w-full flex flex-col items-center relative py-[64px] px-[16px]">
      {/* Iluminação mobile */}
      <div className="absolute bottom-0 w-[343px] h-[200px] bg-[radial-gradient(ellipse_at_bottom,_#238CFF_80%,_#1B1F24_100%)] blur-[100px] opacity-100 rounded-full -z-10 pointer-events-none" />

      <div className="w-full max-w-[343px] text-left z-10">
        <h1 className="text-[40px] font-black leading-[44px] text-white">
          Conquiste sua
          <br />
          Certificação
          <br />
          PMP em{" "}
          <span className="bg-gradient-to-r from-[#3E6DFD] to-[#A494F9] bg-clip-text text-transparent">
            Apenas
          </span>
          <br />
          <span className="block bg-gradient-to-r from-[#3E6DFD] to-[#A494F9] bg-clip-text text-transparent">
            6 Semanas
          </span>
        </h1>

        <p className="mt-4 text-sm font-semibold text-white">
          O curso intensivo que vai te levar direto à aprovação no exame PMP,
          com aulas objetivas, simulados estratégicos e suporte completo.
        </p>
      </div>

      {/* GIF Animado */}
      <div className="mt-10 relative w-[343px] h-[343px] z-10">
        <Image
          src="/animacaonextpm-v2.gif"
          alt="Animação NEXT PM"
          width={343}
          height={343}
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}

export default MobileHero;
