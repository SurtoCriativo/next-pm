"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const modules = [
  {
    id: 1,
    title: "Introdução ao exame e plano de estudos",
    color: "bg-blue-600",
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
    color: "bg-purple-600",
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
    color: "bg-pink-600",
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
    color: "bg-orange-600",
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
    color: "bg-yellow-500",
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
    color: "bg-emerald-500",
    description:
      "Execute o projeto conforme planejado, monitorando entregas, qualidade e desempenho continuamente.",
    preview: ["Gestão da qualidade", "KPIs", "Controle de mudanças"],
    extra: "11 Aulas, Planilhas",
  },
  {
    id: 7,
    title: "Encerramento do Projeto",
    color: "bg-blue-500",
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
    color: "bg-purple-500",
    description:
      "Teste seus conhecimentos com simulados realistas e revise conteúdos estratégicos.",
    preview: ["Simulados PMP®", "Dicas da prova", "Análise de desempenho"],
    extra: "4 Simulados, Revisões",
  },
];

export default function DesktopModulesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full flex justify-center bg-[var(--background-darker)] py-[80px] relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(62,109,253,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(62,109,253,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
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
          <div className="flex flex-col space-y-3">
            {modules.map((module, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={module.id}
                  onClick={() => toggle(index)}
                  className={`cursor-pointer border border-white/10 rounded-2xl w-[648px] transition-all duration-300 overflow-hidden group bg-[var(--surface-dark)] hover:${module.color}`}
                >
                  <div className="flex items-center justify-between p-[24px] h-[88px]">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 flex items-center justify-center rounded-full text-white text-[24px] font-bold ${module.color}`}
                      >
                        {module.id}
                      </div>
                      <span className="text-white text-[18px] font-medium leading-tight">
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
                        className="px-6 pb-6 text-white text-sm"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.5,
                          type: "spring",
                          bounce: 0.3,
                        }}
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
                          {module.extra?.split(",").map((label, i) => (
                            <span
                              key={i}
                              className="text-xs bg-[#0E0F12] text-white/90 border border-white/10 rounded-full px-3 py-1"
                            >
                              {label.trim()}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
