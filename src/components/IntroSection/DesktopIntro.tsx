"use client";

export default function DesktopIntro() {
  return (
    <section className="w-full bg-[var(--background-darker)] py-[120px] flex flex-col items-center relative overflow-hidden">
      {/* Grade central sutil e menor */}
      <div
        className="absolute top-1/2 left-1/2 w-[880px] h-[1000px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
        style={{
          backgroundImage: `
  linear-gradient(to right, rgba(62,109,253,0.12) 1px, transparent 1px),
  linear-gradient(to bottom, rgba(62,109,253,0.12) 1px, transparent 1px)
`,
          backgroundSize: "30px 30px",
          backgroundPosition: "0 22px",
          maskImage: `radial-gradient(circle at center, black 20%, transparent 70%)`,
          WebkitMaskImage: `radial-gradient(circle at center, black 20%, transparent 70%)`,
        }}
      />

      {/* SOMBREAMENTO NAS LATERAIS DA GRADE */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
          linear-gradient(to left, #080B12, transparent 35%),
          linear-gradient(to right, #080B12, transparent 35%)
        `,
          }}
        />
      </div>

      {/* CONTAINER */}
      <div className="max-w-[1128px] h-[352px] gap-x-[120px] flex justify-between relative z-10">
        {/* Coluna esquerda */}
        <div className="w-[360px] shrink-0">
          <h3 className="text-[48px] font-gochi text-[var(--accent-blue)] leading-tight mb-2">
            Quer saber...
          </h3>
          <h2 className="text-white text-[40px] font-black leading-tight">
            Por que a certificação PMP muda tudo?
          </h2>
        </div>

        {/* Coluna direita */}
        <div className="w-[648px] h-[352px] text-[var(--text-white)] text-[18px] flex flex-col gap-8 leading-[32px]">
          <p>
            O Curso Preparatório PMP da NEXT PM é ideal para quem deseja
            conquistar uma{" "}
            <span className="text-[var(--accent-blue)] font-bold">
              certificação global
            </span>{" "}
            e transformar sua atuação como gestor de projetos. Com ele, você
            estará preparado para enfrentar o exame com confiança e se
            posicionar como um profissional de referência no mercado.
          </p>

          <p>
            A certificação PMP é reconhecida mundialmente e comprovadamente
            aumenta suas chances de{" "}
            <span className="text-[var(--accent-blue)] font-bold">
              alcançar cargos de liderança
            </span>
            , ganhar salários acima da média e atuar em empresas nacionais e
            internacionais.
          </p>

          <p className="w-[680px]">
            Mais do que um título, ela valida sua capacidade de gerenciar
            projetos complexos, tomar decisões estratégicas e gerar resultados
            consistentes em qualquer cenário.
          </p>
        </div>
      </div>
    </section>
  );
}
