"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CirclePlay, BadgeCheck } from "lucide-react";

const modules = [
  {
    id: 1,
    title: "Introdução ao exame e plano de estudos",
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
    description:
      "Execute o projeto conforme planejado, monitorando entregas, qualidade e desempenho continuamente.",
    preview: ["Gestão da qualidade", "KPIs", "Controle de mudanças"],
    extra: "11 Aulas, Planilhas",
  },
  {
    id: 7,
    title: "Encerramento do Projeto",
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
    description:
      "Teste seus conhecimentos com simulados realistas e revise conteúdos estratégicos.",
    preview: ["Simulados PMP®", "Dicas da prova", "Análise de desempenho"],
    extra: "4 Simulados, Revisões",
  },
];

const styles = {
  1: {
    text: "text-[var(--accent-b-blue)]",
    bg: "bg-[var(--accent-b-blue-dark)]",
    hover: "hover:bg-[var(--accent-b-blue)] hover:text-[var(--surface-dark)]",
  },
  2: {
    text: "text-[var(--accent-purple)]",
    bg: "bg-[var(--accent-purple-dark)]",
    hover: "hover:bg-[var(--accent-purple)] hover:text-[var(--surface-dark)]",
  },
  3: {
    text: "text-[var(--accent-pink)]",
    bg: "bg-[var(--accent-pink-dark)]",
    hover: "hover:bg-[var(--accent-pink)] hover:text-[var(--surface-dark)]",
  },
  4: {
    text: "text-[var(--accent-orange)]",
    bg: "bg-[var(--accent-orange-dark)]",
    hover: "hover:bg-[var(--accent-orange)] hover:text-[var(--surface-dark)]",
  },
  5: {
    text: "text-[var(--accent-yellow)]",
    bg: "bg-[var(--accent-yellow-dark)]",
    hover: "hover:bg-[var(--accent-yellow)] hover:text-[var(--surface-dark)]",
  },
  6: {
    text: "text-[var(--accent-green)]",
    bg: "bg-[var(--accent-green-dark)]",
    hover: "hover:bg-[var(--accent-green)] hover:text-[var(--surface-dark)]",
  },
  7: {
    text: "text-[var(--accent-blue)]",
    bg: "bg-[var(--accent-blue-dark)]",
    hover: "hover:bg-[var(--accent-blue)] hover:text-[var(--surface-dark)]",
  },
  8: {
    text: "text-[var(--accent-purple)]",
    bg: "bg-[var(--accent-purple-dark)]",
    hover: "hover:bg-[var(--accent-purple)] hover:text-[var(--surface-dark)]",
  },
};

export default function DesktopModulesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[var(--background-darker)] py-[120px] flex flex-col items-center relative overflow-hidden">
      {/* Grade de fundo */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[1128px] h-[800px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
        animate={{
          backgroundSize: openIndex !== null ? "38px 38px" : "30px 30px",
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(62,109,253,0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(62,109,253,0.12) 1px, transparent 1px)
          `,
          backgroundPosition: "0 22px",
          maskImage: `radial-gradient(circle at center, black 20%, transparent 70%)`,
          WebkitMaskImage: `radial-gradient(circle at center, black 20%, transparent 70%)`,
        }}
      />
      <div className="w-full max-w-[1128px] flex gap-[120px] relative z-10">
        <div className="w-[360px] shrink-0">
          <h3 className="text-[48px] font-gochi text-[var(--accent-blue)] mb-2">
            Quer saber...
          </h3>
          <h2 className="text-white text-[40px] font-black leading-tight">
            O que vai aprender no curso?
          </h2>
        </div>

        <div className="flex flex-col w-full max-w-[648px]">
          <h2 className="text-white font-gochi text-[32px] mb-6">
            Módulos principais
          </h2>
          <div className="flex flex-col space-y-3 gap-2">
            {modules.map((module, index) => {
              const isOpen = openIndex === index;
              const { text, bg, hover } =
                styles[module.id as keyof typeof styles];

              return (
                <motion.div
                  key={module.id}
                  layout
                  onClick={() => toggle(index)}
                  className={`cursor-pointer w-[648px] transition-all duration-300 overflow-hidden rounded-2xl border border-[var(--surface-border)] ${
                    isOpen
                      ? "bg-[var(--surface-dark)] text-white"
                      : `bg-[var(--surface-dark)] text-white ${hover}`
                  }`}
                >
                  <div className="flex items-center justify-between p-[24px] h-[88px]">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 flex items-center justify-center rounded-full text-[24px] font-bold ${text} ${bg}`}
                      >
                        {module.id}
                      </div>
                      <span className="text-[18px] font-medium leading-tight">
                        {module.title}
                      </span>
                    </div>
                    <Image
                      src={isOpen ? "/circle-minus.svg" : "/circle-plus.svg"}
                      alt="Toggle"
                      width={24}
                      height={24}
                    />
                  </div>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                          duration: 0.4,
                          ease: "easeInOut",
                        }}
                        className="px-6 pb-6 text-white text-sm"
                      >
                        <p className="text-white/80 leading-relaxed mb-4">
                          {module.description}
                        </p>
                        <div className="h-px w-full border-t border-dashed border-white/20 my-4" />
                        <p className="text-xs text-white/40 mb-2 italic">
                          Prévia
                        </p>
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
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
