"use client";

import Image from "next/image";

export default function DesktopCertificateSection() {
  return (
    <section className="w-full flex justify-center bg-[var(--background-darker)] py-[80px] relative overflow-hidden">
      {/* Grade de fundo centralizada */}
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
