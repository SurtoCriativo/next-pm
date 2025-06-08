"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const testimonials = [
  {
    text: "Texto curto.",
    name: "Nome Sobrenome",
    role: "Coordenadora de Projetos | Tecnologia | Membro do PMI",
    image: "/avatar-1.png",
  },
  {
    text: "Texto médio. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    name: "Nome Sobrenome",
    role: "Coordenadora de Projetos | Tecnologia | Membro do PMI",
    image: "/avatar-2.png",
  },
  {
    text: "Texto longo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum libero eu dui tincidunt varius. Pellentesque sollicitudin mi vitae blandit dictum.",
    name: "Nome Sobrenome",
    role: "Coordenadora de Projetos | Tecnologia | Membro do PMI",
    image: "/avatar-3.png",
  },
  {
    text: "Texto curto.",
    name: "Nome Sobrenome",
    role: "Coordenadora de Projetos | Tecnologia | Membro do PMI",
    image: "/avatar-4.png",
  },
  {
    text: "Texto mais longo ainda. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a risus ac erat tincidunt fringilla ut a risus. Fusce efficitur velit nec erat pretium, nec fermentum nisi tempor.",
    name: "Nome Sobrenome",
    role: "Coordenadora de Projetos | Tecnologia | Membro do PMI",
    image: "/avatar-4.png",
  },
];

export default function TestimonialSection() {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    slides: { perView: 4, spacing: 16 },
    breakpoints: {
      "(max-width: 1280px)": {
        slides: { perView: 3, spacing: 16 },
      },
      "(max-width: 1024px)": {
        slides: { perView: 2, spacing: 16 },
      },
      "(max-width: 768px)": {
        slides: { perView: 1.2, spacing: 16 },
      },
    },
  });

  const timeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const autoplay = () => {
      if (timeout.current) clearTimeout(timeout.current);
      timeout.current = setTimeout(() => {
        slider.current?.next();
      }, 4000);
    };

    if (!slider.current) return;

    slider.current.on("created", autoplay);
    slider.current.on("slideChanged", autoplay);
    slider.current.on("updated", autoplay);

    return () => {
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, [slider]);

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

        {/* Carrossel */}
        <div ref={sliderRef} className="mt-14 keen-slider flex items-start">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="keen-slider__slide bg-[var(--surface-dark)] rounded-2xl px-6 pt-6 pb-6 flex flex-col justify-between w-[342px] h-auto"
              style={{ alignSelf: "flex-start" }}
            >
              <p className="text-white text-sm leading-relaxed mb-0 text-left">
                {item.text}
              </p>
              <div className="flex items-center gap-3 pt-4 mt-auto">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="text-left">
                  <p className="text-white text-sm font-medium leading-tight mb-0">
                    {item.name}
                  </p>
                  <p className="text-xs text-white/60 leading-tight mt-0.5 mb-0">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
