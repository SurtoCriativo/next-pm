"use client";

import Image from "next/image";

export default function RecognitionSection() {
  return (
    <section className="w-full flex flex-col items-center bg-[var(--background-darker)] py-10 px-4 space-y-20 relative overflow-hidden">
      {/* Seção 1 */}
      <div className="relative w-full max-w-[343px] z-10">
        {/* Grade de fundo */}
        <div
          className="absolute left-0 right-0 top-[160px] h-[330px] z-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(62,109,253,0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(62,109,253,0.12) 1px, transparent 1px)
            `,
            backgroundSize: "22px 22px",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
          }}
        />

        {/* Imagem + Conteúdo */}
        <div className="flex flex-col gap-[32px] z-10">
          {/* Imagem com fallback */}
          <div className="relative w-[343px] h-[193px] rounded-md overflow-hidden bg-gray-600 flex items-center justify-center text-white text-xl">
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

          <div>
            <div className="flex flex-col gap-[16px]">
              <h3 className="font-gochi text-[32px] font-normal text-emerald-400">
                Pra quem é este curso?
              </h3>
              <h2 className="text-[32px] font-black text-white leading-[38px]">
                Cresça com uma
                <br />
                certificação reconhecida
              </h2>

              <p className="text-white/80 font-archivo text-base font-normal leading-relaxed">
                Você que trabalha com projetos e busca clareza e direção vai
                encontrar aqui um caminho direto pra sua certificação. Se lidera
                entregas, organiza equipes ou resolve problemas no dia a dia, o
                PMP pode ser seu próximo grande passo.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Seção 2 */}
      <div className="relative w-full z-0">
        {/* Grade de fundo */}
        <div
          className="absolute inset-x-0 top-[160px] h-[330px] z-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(62,109,253,0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(62,109,253,0.12) 1px, transparent 1px)
            `,
            backgroundSize: "14px 14px",
          }}
        />
        {/* Sombreamento nas bordas da grade */}
        <div className="absolute w-full h-[330px] top-[160px] z-10 pointer-events-none">
          <div
            className="w-full h-full"
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

        <div className="relative max-w-[343px] mx-auto z-10">
          <div className="flex flex-col gap-[32px]">
            {/* Imagem com fallback */}
            <div className="relative w-[343px] h-[193px] rounded-md overflow-hidden bg-gray-600 flex items-center justify-center text-white text-xl">
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

            <div>
              <div className="flex flex-col gap-[16px]">
                <h3 className="text-[32px] font-gochi text-pink-400">
                  Guiado por quem entende
                </h3>
                <h2 className="text-[32px] font-black text-white leading-[38px]">
                  Especialistas que já
                  <br />
                  passaram por onde você está
                </h2>
                <p className="text-white/80 text-base font-normal leading-relaxed">
                  Eles não só ensinam. Vivem o que falam. Com mais de 10 anos de
                  experiência em gestão e agilidade, criaram um método direto,
                  focado no que realmente cai na prova e no que acontece nos
                  projetos do mundo real.
                  <br />
                  Você vai ser guiado por quem conhece o caminho.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
