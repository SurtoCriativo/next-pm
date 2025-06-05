"use client";

import Image from "next/image";

export default function DesktopPricingSection() {
  return (
    <section className="w-full flex justify-center bg-[var(--background-darker)] py-[120px] relative overflow-hidden">
      {/* Grade de fundo + iluminação sobreposta */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Grade */}
        <div
          className="absolute top-1/2 left-1/2 w-[1128px] h-[900px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
          style={{
            backgroundImage: `
      linear-gradient(to right, rgba(62,109,253,0.12) 1px, transparent 2px),
      linear-gradient(to bottom, rgba(62,109,253,0.12) 1px, transparent 2px)
    `,
            backgroundSize: "30px 30px",
            backgroundPosition: "0 22px",
            maskImage: `radial-gradient(circle at center, black 20%, transparent 75%)`,
            WebkitMaskImage: `radial-gradient(circle at center, black 20%, transparent 75%)`,
          }}
        />

        {/* Iluminação */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to top, #281c54 0%, transparent 80%)",
            opacity: 0.4,
          }}
        />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 w-full max-w-[1128px] flex justify-between items-center">
        {/* Texto à esquerda */}
        <div className="flex-1 max-w-[520px]">
          <h3 className="text-[32px] font-gochi text-purple-400 mb-6">
            Garanta sua vaga!
          </h3>
          <h2 className="w-[456px] text-white text-[40px] font-black leading-tight mb-6">
            Seu caminho direto até a certificação PMP
          </h2>
          <p className="w-[456px] text-white/80 text-[18px] leading-relaxed">
            Com acesso vitalício, suporte estratégico e simulados atualizados,
            essa é a oportunidade de se preparar com clareza, foco e método.
            <br />
            Ideal pra quem quer passar de primeira e crescer rápido na carreira
            de projetos.
          </p>
        </div>

        {/* Card à direita */}
        <div
          className="relative rounded-2xl p-[40px] w-[456px] h-[748px] text-white shadow-lg border backdrop-blur-md"
          style={{
            background: `linear-gradient(
              180deg,
              var(--surface-alpha-brand, rgba(51, 129, 255, 0.05)) 0%,
              var(--surface-alpha-black, rgba(8, 11, 18, 0.10)) 100%
            )`,
            borderColor: "var(--surface-border, #374151)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
        >
          {/* Topo com selo */}
          <div className="flex items-center justify-between mb-6">
            <Image src="/icon-card.svg" alt="Selo" width={59} height={40} />
            <span
              className="flex items-center justify-center bg-[#0E0F12] rounded-full text-white text-[16px]"
              style={{
                width: "227px",
                height: "40px",
                border: "1px solid var(--surface-border, #374151)",
              }}
            >
              <span className="mr-1" style={{ color: "#9D8AFE" }}>
                144/200
              </span>
              <span className="font-medium" style={{ color: "#9D8AFE" }}>
                Vagas Limitadas
              </span>
            </span>
          </div>

          {/* Título de urgência */}
          <h4 className="text-[24px] font-bold text-[#A78BFA] mt-12 mb-3">
            Vagas abertas até o dia 05/05
          </h4>

          {/* Preço */}
          <h3 className="text-[64px] font-extrabold">R$997,00</h3>
          <p className="text-[18px] text-white/80">
            à vista ou 12x de R$97,45*
          </p>

          {/* Separador */}
          <Image
            src="/line.svg"
            alt="Separador decorativo"
            width={376}
            height={1}
            className="my-8"
          />

          {/* Benefícios */}
          <ul className="w-[356px] space-y-[16px] text-[18px] text-white/80">
            <li className="flex items-center gap-1">
              <span>✦</span> Acesso vitalício
            </li>
            <li className="flex items-center gap-1">
              <span>✦</span> Estude quando e onde quiser
            </li>
            <li className="flex items-center gap-1">
              <span>✦</span> Simulados atualizados
            </li>
            <li className="flex items-center gap-1">
              <span>✦</span> Suporte até o dia da prova
            </li>
            <li className="flex items-center gap-1">
              <span>✦</span> Certificado de 35h
            </li>
            <li className="flex items-center gap-1">
              <span>✦</span> Garantia de 7 dias
            </li>
          </ul>

          {/* Botão */}
          <button className="w-full h-[48px] mt-12 bg-[#A78BFA] text-[18px] text-[#1B1F24] font-semibold rounded-full transition-colors hover:bg-[#c1a6ff]">
            Garantir minha vaga
          </button>
        </div>
      </div>
    </section>
  );
}
