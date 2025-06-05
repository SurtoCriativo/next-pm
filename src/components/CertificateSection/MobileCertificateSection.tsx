"use client";

import Image from "next/image";

export default function CertificateSection() {
  return (
    <section className="w-full flex flex-col items-center bg-[var(--background-darker)] px-4 py-10 relative overflow-hidden">
      {/* Grade de fundo centralizada */}
      <div className="absolute top-1/2 left-0 w-full h-[180px] -translate-y-1/2 z-0 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(62,109,253,0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(62,109,253,0.12) 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
          }}
        />
        {/* Sombreamento nas bordas da grade */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to top, #080b12, transparent 30%),
              linear-gradient(to bottom, #080b12, transparent 30%),
              linear-gradient(to left, #080b12, transparent 30%),
              linear-gradient(to right, #080b12, transparent 30%)
            `,
          }}
        />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-[343px] w-full text-center">
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-blue-400 font-gochi text-[32px]">
            Certificado NEXT PM
          </h3>

          <div className="flex flex-col items-center gap-8">
            <h2 className="text-white text-[40px] font-black leading-tight text-center">
              Dê um Boost na
              <br />
              sua carreira
            </h2>

            {/* Imagem com placeholder visível */}
            <div className="relative w-[343px] h-[193px] rounded-lg bg-[#4B5563] overflow-hidden">
              <Image
                src="/certificado.png"
                alt="Certificado"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
