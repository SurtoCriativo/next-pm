"use client";

import Image from "next/image";

export default function PricingSection() {
  return (
    <section className="w-full flex flex-col items-center bg-[var(--background-darker)] py-10 relative overflow-hidden">
      {/* Grade de fundo + iluminação sobreposta */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Grade */}
        <div
          className="absolute top-1/2 left-0 w-full h-[505px] -translate-y-1/2 z-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "28px 25px",
            backgroundPosition: "0 22px",
          }}
        />
        {/* Iluminação */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to top, #9D8AFE 0%, transparent 80%)",
            opacity: 0.3,
          }}
        />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-[343px]">
        <h3 className="text-[32px] font-gochi text-purple-400 mb-6">
          Garanta sua vaga!
        </h3>

        <h2 className="text-white text-[32px] font-black leading-tight mb-4">
          Seu caminho direto até a certificação PMP
        </h2>

        <p className="w-[343px] h-[192px] text-white/80 text-[18px] leading-relaxed mb-8">
          Com acesso vitalício, suporte estratégico e<br />
          simulados atualizados, essa é a<br />
          oportunidade de se preparar com clareza,
          <br />
          foco e método.
          <br />
          Ideal pra quem quer passar de primeira e<br />
          crescer rápido na carreira de projetos.
        </p>

        {/* CARD DE PREÇO */}
        <div
          className="relative rounded-2xl px-4 py-4 w-[343px] h-[670px] mx-auto text-white shadow-lg border backdrop-blur-md"
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
            <Image src="/icon-card.svg" alt="Selo" width={48} height={32} />
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
          <h4 className="text-[20px] font-bold text-[#A78BFA] mt-12 mb-3">
            Vagas abertas até o dia 05/05
          </h4>

          {/* Preço */}
          <h3 className="text-[56px] font-extrabold">R$997,00</h3>
          <p className="text-[18px] text-white/80">
            à vista ou 12x de R$97,45*
          </p>

          {/* Separador */}
          <Image
            src="/line.svg"
            alt="Separador decorativo"
            width={311}
            height={1}
            className="my-8"
          />

          {/* Benefícios */}
          <ul className="w-[311px] space-y-2 text-[16px] text-white/80">
            <li className="h-[32px] flex items-center gap-2">
              <span>✦</span> Acesso vitalício
            </li>
            <li className="h-[32px] flex items-center gap-2">
              <span>✦</span> Estude quando e onde quiser
            </li>
            <li className="h-[32px] flex items-center gap-2">
              <span>✦</span> Simulados atualizados
            </li>
            <li className="h-[32px] flex items-center gap-2">
              <span>✦</span> Suporte até o dia da prova
            </li>
            <li className="h-[32px] flex items-center gap-2">
              <span>✦</span> Certificado de 35h
            </li>
            <li className="h-[32px] flex items-center gap-2">
              <span>✦</span> Garantia de 7 dias
            </li>
          </ul>

          {/* Botão */}
          <button className="w-[311px] h-[48px] mt-12 bg-[#A78BFA] text-[18px] text-[#1B1F24] font-semibold rounded-full transition-colors hover:bg-[#c1a6ff]">
            Garantir minha vaga
          </button>
        </div>
      </div>
    </section>
  );
}
