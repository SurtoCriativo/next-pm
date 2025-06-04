"use client";

import Image from "next/image";

export default function DesktopCourseHighlight() {
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

      <div className="w-full max-w-[1128px] relative z-10 flex flex-col gap-[120px]">
        {/* Bloco 1 */}
        <div className="flex items-start justify-between gap-[120px] pb-[60px]">
          <div className="w-[360px]">
            <h3 className="font-gochi text-[32px] text-emerald-400 mb-2">
              Pra quem é este curso?
            </h3>
            <h2 className="text-white text-[40px] font-black leading-tight mb-4">
              Cresça com uma certificação reconhecida
            </h2>
            <p className="text-white/80 text-base leading-relaxed">
              Você que trabalha com projetos e busca clareza e direção vai
              encontrar aqui um caminho direto pra sua certificação. Se lidera
              entregas, organiza equipes ou resolve problemas no dia a dia, o
              PMP pode ser seu próximo grande passo.
            </p>
          </div>
          <div className="w-[648px] h-[364px] bg-gray-600 rounded-lg overflow-hidden flex items-center justify-center text-white text-xl">
            <Image
              src="/img-01.png"
              alt="Imagem 1"
              fill
              className="object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
              }}
            />
            <span className="z-10">📷 Imagem</span>
          </div>
        </div>

        {/* Bloco 2 */}
        <div className="flex items-start justify-between gap-[120px] pt-[60px]">
          <div className="w-[648px] h-[365px] bg-gray-600 rounded-lg overflow-hidden flex items-center justify-center text-white text-xl">
            <Image
              src="/img-02.png"
              alt="Imagem 2"
              fill
              className="object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
              }}
            />
            <span className="z-10">📷 Imagem</span>
          </div>
          <div className="w-[360px]">
            <h3 className="font-gochi text-[32px] text-pink-400 mb-2">
              Guiado por quem entende
            </h3>
            <h2 className="text-white text-[40px] font-black leading-[44px] mb-4">
              Especialistas que já passaram
              <br /> por onde você está
            </h2>
            <p className="text-white/80 text-base leading-[24px]">
              Eles não só ensinam. Vivem o que falam. Com mais de 10 anos de
              experiência em gestão e agilidade, criaram um método direto,
              focado no que realmente cai na prova e no que acontece nos
              projetos do mundo real.
              <br /> Você vai ser guiado por quem conhece o caminho.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
