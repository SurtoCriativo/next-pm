"use client";

import { useState } from "react";
import Image from "next/image";
import { CirclePlay, BadgeCheck } from "lucide-react";

const modules = [
  {
    id: 1,
    title: "Introdução ao exame e plano de estudos",
    colorText: "text-[var(--accent-b-blue)]",
    colorBg: "bg-[var(--accent-b-blue-dark)]",
    description:
      "Entenda tudo sobre a certificação PMP®: como funciona, quais os requisitos, e como se organizar com estratégia para garantir sua aprovação.",
    preview: [
      "O que é o PMP e o PMI",
      "Estrutura da prova e tipos de questões",
      "Como se inscrever no exame",
      "Como montar seu plano de estudos",
    ],
    extra: "10 Aulas, Avaliação",
  },
  {
    id: 2,
    title: "Ambiente de Negócio",
    colorText: "text-[var(--accent-purple)]",
    colorBg: "bg-[var(--accent-purple-dark)]",
    description:
      "Explore o contexto empresarial e entenda como projetos se alinham com objetivos organizacionais.",
    preview: [
      "Ambiente interno e externo",
      "Fatores empresariais",
      "Governança",
    ],
    extra: "8 Aulas, Avaliação",
  },
  {
    id: 3,
    title: "Início do Projeto",
    colorText: "text-[var(--accent-pink)]",
    colorBg: "bg-[var(--accent-pink-dark)]",
    description:
      "Compreenda os processos iniciais para dar início a um projeto sólido e bem definido.",
    preview: [
      "Desenvolver o termo de abertura",
      "Identificar stakeholders",
      "Alinhar expectativas",
    ],
    extra: "6 Aulas, Checklist",
  },
  {
    id: 4,
    title: "Planejamento do Projeto",
    colorText: "text-[var(--accent-orange)]",
    colorBg: "bg-[var(--accent-orange-dark)]",
    description:
      "Aprenda como planejar com eficácia escopo, cronograma, custos e riscos do projeto.",
    preview: [
      "Plano de gerenciamento",
      "EDT",
      "Estimativas e cronogramas",
      "Matriz de riscos",
    ],
    extra: "12 Aulas, Exercícios",
  },
  {
    id: 5,
    title: "Liderança na Equipe do Projeto",
    colorText: "text-[var(--accent-yellow)]",
    colorBg: "bg-[var(--accent-yellow-dark)]",
    description:
      "Desenvolva habilidades de liderança, comunicação e gestão de conflitos na equipe do projeto.",
    preview: [
      "Estilos de liderança",
      "Comunicação eficaz",
      "Resolução de conflitos",
    ],
    extra: "9 Aulas, Estudo de Caso",
  },
  {
    id: 6,
    title: "Execução e Monitoramento do Projeto",
    colorText: "text-[var(--accent-green)]",
    colorBg: "bg-[var(--accent-green-dark)]",
    description:
      "Execute o projeto conforme planejado, monitorando entregas, qualidade e desempenho continuamente.",
    preview: ["Gestão da qualidade", "KPIs", "Controle de mudanças"],
    extra: "11 Aulas, Planilhas",
  },
  {
    id: 7,
    title: "Encerramento do Projeto",
    colorText: "text-[var(--accent-blue)]",
    colorBg: "bg-[var(--accent-blue-dark)]",
    description:
      "Finalize o projeto corretamente, documentando lições aprendidas e entregando valor.",
    preview: [
      "Encerrar contratos",
      "Avaliar desempenho",
      "Arquivar documentos",
    ],
    extra: "5 Aulas, Avaliação Final",
  },
  {
    id: 8,
    title: "Simulados e Preparação Final",
    colorText: "text-[var(--accent-purple)]",
    colorBg: "bg-[var(--accent-purple-dark)]",
    description:
      "Teste seus conhecimentos com simulados realistas e revise conteúdos estratégicos.",
    preview: ["Simulados PMP®", "Dicas da prova", "Análise de desempenho"],
    extra: "4 Simulados, Revisões",
  },
];

export default function ModulesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full flex justify-center bg-[var(--background-darker)] py-[40px] px-[16px] overflow-hidden">
      {/* Grade de fundo com sombra */}
      <div
        className="absolute left-0 right-0 top-[180px] h-[620px] z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(62,109,253,0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(62,109,253,0.12) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          maskImage: `
            linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)
          `,
          WebkitMaskImage: `
            linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)
          `,
        }}
      />

      <div className="w-[343px] flex flex-col space-y-4 relative z-10">
        <h2 className="font-gochi text-white text-[32px] mb-2">
          Módulos principais
        </h2>

        {modules.map((module, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={module.id}
              className="w-[343px] bg-[var(--surface-dark)] border border-[var(--surface-border)] rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full h-[88px] flex items-center justify-between px-6 py-6"
                onClick={() => toggle(index)}
              >
                <div className="flex items-center gap-4 text-left">
                  <div
                    className={`w-[40px] h-[40px] flex items-center justify-center rounded-full text-[24px] font-bold ${module.colorText} ${module.colorBg}`}
                  >
                    {module.id}
                  </div>
                  <span className="w-[199px] text-white text-[16px] font-semibold leading-snug whitespace-normal">
                    {module.title}
                  </span>
                </div>
                <Image
                  src={isOpen ? "/circle-minus.svg" : "/circle-plus.svg"}
                  alt="Toggle"
                  width={24}
                  height={24}
                />
              </button>

              {isOpen && (
                <div className="px-4 pb-4 text-white/70 text-sm">
                  <p className="mb-4 leading-relaxed">{module.description}</p>

                  <div className="h-px w-full border-t border-dashed border-white/20 my-4" />

                  <p className="text-xs text-white/40 mb-2">Prévia</p>
                  <ul className="text-sm text-white/80 list-disc list-inside space-y-1">
                    {module.preview?.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                  <div className="flex gap-2 mt-4 flex-wrap">
                    {module.extra?.split(",").map((label, i) => {
                      const trimmed = label.trim();
                      const isVideo =
                        trimmed.toLowerCase().includes("aula") ||
                        trimmed.toLowerCase().includes("simulado");
                      const Icon = isVideo ? CirclePlay : BadgeCheck;

                      return (
                        <span
                          key={i}
                          className="flex items-center gap-1 text-xs bg-[#0E0F12] text-white/90 border border-white/10 rounded-full px-3 py-1"
                        >
                          <Icon className="w-3.5 h-3.5" />
                          {trimmed}
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
