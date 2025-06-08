"use client";

import Image from "next/image";

function DesktopHero() {
  return (
    <div className="w-dvw flex justify-center items-center relative h-[696px]">
      {/* Iluminação */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1328px] h-[150px] bg-[radial-gradient(ellipse_at_bottom,_#238CFF_80%,_#1B1F24_100%)] blur-[100px] opacity-100 rounded-full -z-10 pointer-events-none" />

      <div className="relative z-10 max-w-[1128px] gap-x-6 mx-auto flex justify-between items-center">
        <div className="w-[648px] text-left">
          <h1 className="text-[64px] font-black leading-tight text-white">
            Conquiste sua <br />
            Certificação PMP
            <br /> em{" "}
            <span className="bg-gradient-to-r from-[#3E6DFD] to-[#A494F9] bg-clip-text text-transparent">
              Apenas 6
            </span>
            <span className="block bg-gradient-to-r from-[#3E6DFD] to-[#A494F9] bg-clip-text text-transparent">
              Semanas
            </span>
          </h1>

          <p className="mt-4 text-[1rem] w-[552px] text-white leading-relaxed">
            O curso intensivo que vai te levar direto à aprovação no exame PMP,
            com aulas objetivas, simulados estratégicos e suporte completo.
          </p>
        </div>

        {/* GIF Animado */}
        <div className="relative w-[456px] h-[456px]">
          <Image
            src="/animacaonextpm-v2.gif"
            alt="Animação NEXT PM"
            width={456}
            height={456}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default DesktopHero;
