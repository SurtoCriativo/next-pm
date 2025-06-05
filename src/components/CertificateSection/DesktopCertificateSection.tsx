"use client";

import Image from "next/image";

export default function DesktopCertificateSection() {
  return (
    <section className="w-full bg-[var(--background-darker)] py-[120px] flex flex-col items-center relative overflow-hidden">
      {/* Grade central sutil e menor */}
      <div
        className="absolute top-1/2 left-1/2 w-[1128px] h-[700px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
        style={{
          backgroundImage: `
      linear-gradient(to right, rgba(62,109,253,0.12) 1px, transparent 2px),
      linear-gradient(to bottom, rgba(62,109,253,0.12) 1px, transparent 2px)
    `,
          backgroundSize: "28px 28px",
          backgroundPosition: "0 22px",
          maskImage: `radial-gradient(circle at center, black 20%, transparent 75%)`,
          WebkitMaskImage: `radial-gradient(circle at center, black 20%, transparent 75%)`,
        }}
      />

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <h3 className="text-blue-400 font-gochi text-[32px] mb-4">
          Certificado NEXT PM
        </h3>
        <h2 className="text-white text-[56px] font-black leading-tight mb-10">
          Dê um Boost na
          <br />
          sua carreira
        </h2>

        <div className="relative w-[932px] h-[525px] rounded-lg bg-[#4B5563] overflow-hidden">
          <Image
            src="/certificado.png"
            alt="Certificado"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
