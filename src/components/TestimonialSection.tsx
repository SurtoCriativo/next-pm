"use client";

import Image from "next/image";
import dynamic from "next/dynamic";

const DynamicTestimonialSlider = dynamic(() => import("./TestimonialSlider"), {
  ssr: false,
  loading: () => (
    <div className="mt-14 flex gap-4 overflow-hidden">
      {/* Loading skeleton that matches the slider structure */}
      {Array.from({ length: 4 }).map((_, idx) => (
        <div
          key={idx}
          className="bg-[var(--surface-dark)] rounded-2xl px-6 pt-6 pb-6 flex flex-col justify-between w-[262px] h-[200px] animate-pulse shrink-0"
        >
          <div className="h-4 bg-white/20 rounded mb-4" />
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full" />
            <div className="flex-1">
              <div className="h-3 bg-white/20 rounded mb-1" />
              <div className="h-2 bg-white/20 rounded w-3/4" />
            </div>
          </div>
        </div>
      ))}
    </div>
  ),
});

export default function TestimonialSection() {
  return (
    <section className="w-full bg-[var(--background-darker)] py-[40px] md:py-[120px] flex flex-col items-center relative overflow-hidden">
      {/* Grade de fundo */}
      <div
        className="absolute top-1/2 left-1/2 w-[1128px] h-[800px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
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

      <div className="relative z-10 w-full max-w-[1128px] px-4 text-center">
        {/* Avaliação */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-4 text-white text-[96px] font-bold">
            <Image
              src="/ramo-left.svg"
              alt="laurel"
              width={60}
              height={18}
              className="md:w-[60px] md:h-[108px]"
            />
            <span>4.8</span>
            <Image
              src="/ramo-right.svg"
              alt="laurel"
              width={60}
              height={18}
              className="md:w-[60px] md:h-[108px]"
            />
          </div>
          <p className="text-white/70 text-xs md:text-sm">
            Na avaliação de +300 Alunos
          </p>
        </div>

        {/* Depoimento destaque */}
        <blockquote className="text-white font-gochi text-[32px] md:text-[48px] leading-[1.3] mt-10 mx-auto max-w-[343px] md:max-w-[984px] text-center">
          <p className="mb-0">
            "Curso incrível, didática ótima, me sinto confiante para aplicar
            tudo que aprendi com o curso no mercado de trabalho."
          </p>
        </blockquote>
        <p className="text-white/40 text-xs md:text-sm mt-4 text-center">
          — Eduardo, aluno da primeira turma
        </p>

        {/* Carrossel Dinâmico */}
        <DynamicTestimonialSlider />
      </div>
    </section>
  );
}
