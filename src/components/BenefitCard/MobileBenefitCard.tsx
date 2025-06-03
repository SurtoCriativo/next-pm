"use client";

import {
  BookOpen,
  FileText,
  Clock,
  Calendar,
  Smartphone,
  Award,
} from "lucide-react";
import { useRef, useEffect, useState } from "react";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconColorClass?: string;
}

const BenefitCard = ({
  icon,
  iconColorClass = "",
  title,
  description,
}: BenefitCardProps) => (
  <div className="flex flex-col items-start gap-3 p-4 rounded-2xl bg-[var(--surface-dark)]">
    <div className={`text-2xl ${iconColorClass}`}>{icon}</div>
    <div>
      <h3 className="font-semibold text-[var(--text-white)]">{title}</h3>
      <p className="text-sm text-[var(--text-white)]/80 mt-1">{description}</p>
    </div>
  </div>
);

export default function BenefitsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const secondCardRef = useRef<HTMLDivElement>(null);
  const penultimateCardRef = useRef<HTMLDivElement>(null);
  const [gridTop, setGridTop] = useState(0);
  const [gridHeight, setGridHeight] = useState(0);

  useEffect(() => {
    const updateGridPosition = () => {
      if (
        secondCardRef.current &&
        penultimateCardRef.current &&
        sectionRef.current
      ) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        const secondCardTop =
          secondCardRef.current.getBoundingClientRect().top - sectionTop;
        const penultimateCardTop =
          penultimateCardRef.current.getBoundingClientRect().top - sectionTop;

        setGridTop(secondCardTop + 60);
        setGridHeight(penultimateCardTop - (secondCardTop + 60) + 60);
      }
    };

    updateGridPosition();
    window.addEventListener("resize", updateGridPosition);
    return () => window.removeEventListener("resize", updateGridPosition);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full flex justify-center bg-[var(--background-darker)] pt-[64px] pb-0 overflow-hidden"
    >
      {/* GRADE DE FUNDO DINÂMICA */}
      <div
        className="absolute inset-x-0 mx-auto z-0 pointer-events-none"
        style={{
          top: `${gridTop}px`,
          height: `${gridHeight}px`,
          position: "absolute",
          backgroundImage: `
            linear-gradient(to right, rgba(62,109,253,0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(62,109,253,0.12) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
          maskImage: `
            linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)
          `,
          WebkitMaskImage: `
            linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)
          `,
        }}
      />

      {/* CONTEÚDO DOS CARDS */}
      <div className="w-[343px] flex flex-col space-y-4 relative z-10">
        <div ref={null}>
          <BenefitCard
            icon={<BookOpen className="w-6 h-6 mb-2" />}
            iconColorClass="text-orange-500"
            title="Aulas dinâmicas e objetivas"
            description="Conteúdo direto, com exemplos visuais que facilitam o aprendizado."
          />
        </div>
        <div ref={secondCardRef}>
          <BenefitCard
            icon={<FileText className="w-6 h-6 mb-2" />}
            iconColorClass="text-blue-500"
            title="Módulo completo sobre o novo exame do PMI"
            description="Entenda o formato atualizado da prova, tipos de questões e estratégias específicas para se destacar no novo modelo."
          />
        </div>
        <BenefitCard
          icon={<Clock className="w-6 h-6 mb-2" />}
          iconColorClass="text-cyan-400"
          title="Simulados cronometrados com explicações"
          description="Simulados reais com limite de tempo, correção detalhada e feedback para você entender onde melhorar."
        />
        <BenefitCard
          icon={<Calendar className="w-6 h-6 mb-2" />}
          iconColorClass="text-purple-400"
          title="Plano de estudos prático"
          description="Roteiro simples para estudar com clareza, mesmo com pouco tempo."
        />
        <div ref={penultimateCardRef}>
          <BenefitCard
            icon={<Smartphone className="w-6 h-6 mb-2" />}
            iconColorClass="text-emerald-400"
            title="Aplicativo para estudar de onde quiser"
            description="Acesse todo o conteúdo pelo celular ou tablet. Estude no seu ritmo, onde estiver."
          />
        </div>
        <BenefitCard
          icon={<Award className="w-6 h-6 mb-2" />}
          iconColorClass="text-yellow-400"
          title="Certificado de 35h para aplicação no PMI"
          description="Ao concluir, você recebe um certificado aceito pelo PMI para comprovar a carga horária exigida."
        />
      </div>
    </section>
  );
}
