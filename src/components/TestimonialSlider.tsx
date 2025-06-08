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

export default function TestimonialSlider() {
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
    if (window.innerWidth <= 768) return;

    const autoplay = () => {
      if (timeout.current) clearTimeout(timeout.current);
      timeout.current = setTimeout(() => {
        slider.current?.next();
      }, 4000);
    };

    if (!slider.current) return;

    // Set up event listeners
    slider.current.on("created", autoplay);
    slider.current.on("slideChanged", autoplay);
    slider.current.on("updated", autoplay);

    // Start autoplay immediately
    autoplay();

    return () => {
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, [slider]);

  return (
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
  );
}
