"use client";

export default function MobileIntro() {
  return (
    <section className="w-full flex justify-center bg-[var(--background-darker)] py-[64px] relative overflow-hidden">
      {/* GRADE CENTRALIZADA - menor altura */}
      <div
        className="absolute w-[343px] h-[320px] top-1/2 -translate-y-1/2 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(62,109,253,0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(62,109,253,0.12) 1px, transparent 1px)
          `,
          backgroundSize: "16px 16px",
        }}
      />

      {/* SOMBRA NAS BORDAS */}
      <div className="absolute w-[343px] h-full z-10 pointer-events-none">
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

      {/* TEXTO */}
      <div className="w-[343px] text-[var(--text-white)] text-base font-semibold space-y-6 relative z-20">
        <p>
          O Curso Preparatório PMP da NEXT PM é ideal para quem deseja
          conquistar uma{" "}
          <span className="text-[var(--accent-blue)] font-semibold">
            certificação global
          </span>{" "}
          e transformar sua atuação como gestor de projetos. Com ele, você
          estará preparado para enfrentar o exame com confiança e se posicionar
          como um profissional de referência no mercado.
        </p>

        <p>
          A certificação PMP é reconhecida mundialmente e comprovadamente
          aumenta suas chances de{" "}
          <span className="text-[var(--accent-blue)] font-semibold">
            alcançar cargos de liderança
          </span>
          , ganhar salários acima da média e atuar em empresas nacionais e
          internacionais.
        </p>

        <p>
          Mais do que um título, ela valida sua capacidade de gerenciar projetos
          complexos, tomar decisões estratégicas e gerar resultados consistentes
          em qualquer cenário.
        </p>
      </div>
    </section>
  );
}
