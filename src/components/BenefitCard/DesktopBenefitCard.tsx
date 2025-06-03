"use client";

import {
  BookOpen,
  FileText,
  Clock,
  Calendar,
  Smartphone,
  Award,
} from "lucide-react";

const cardList = [
  {
    icon: <BookOpen className="w-10 h-10" />, // 40px
    iconColor: "group-hover:text-orange-500",
    title: "Aulas dinâmicas e objetivas",
    description:
      "Conteúdo direto, com exemplos visuais que facilitam o aprendizado.",
    width: "w-[264px]",
    height: "h-[248px]",
  },
  {
    icon: <FileText className="w-10 h-10" />,
    iconColor: "group-hover:text-blue-700",
    title: "Módulo completo sobre o novo exame do PMI",
    description:
      "Entenda o formato atualizado da prova, tipos de questões e estratégias específicas para se destacar no novo modelo.",
    width: "w-[360px]",
    height: "h-[248px]",
  },
  {
    icon: <Clock className="w-10 h-10" />,
    iconColor: "group-hover:text-cyan-400",
    title: "Simulados cronometrados com explicações",
    description:
      "Simulados reais com limite de tempo, correção detalhada e feedback para você entender onde melhorar.",
    width: "w-[360px]",
    height: "h-[248px]",
  },
  {
    icon: <Calendar className="w-10 h-10" />,
    iconColor: "group-hover:text-purple-500",
    title: "Plano de estudos prático",
    description:
      "Roteiro simples para estudar com clareza, mesmo com pouco tempo.",
    width: "w-[264px] ml-[96px]",
    height: "h-[248px]",
  },
  {
    icon: <Smartphone className="w-10 h-10" />,
    iconColor: "group-hover:text-emerald-400",
    title: "Aplicativo para estudar de onde quiser",
    description:
      "Acesse todo o conteúdo pelo celular ou tablet. Estude no seu ritmo, onde estiver.",
    width: "w-[264px]",
    height: "h-[248px]",
  },
  {
    icon: <Award className="w-10 h-10" />,
    iconColor: "group-hover:text-yellow-400",
    title: "Certificado de 35h para aplicação no PMI",
    description:
      "Ao concluir, você recebe um certificado aceito pelo PMI para comprovar a carga horária exigida.",
    width: "w-[360px]",
    height: "h-[248px]",
  },
];

function Card({ icon, title, description, iconColor, width, height }: any) {
  return (
    <div
      className={`group flex flex-col p-[24px] rounded-2xl ${width} ${height} bg-[var(--surface-dark)] transition-colors duration-300`}
    >
      <div
        className={`text-[28px] text-white/30 ${iconColor} transition-colors`}
      >
        {icon}
      </div>
      <h3 className="mt-[36px] font-semibold text-[20px] text-white/60 group-hover:text-white transition-colors">
        {title}
      </h3>
      <p className="text-[14px] text-white/40 group-hover:text-white/90 transition-colors">
        {description}
      </p>
    </div>
  );
}

export default function DesktopBenefitCard() {
  return (
    <section className="w-full h-[1132px] bg-[var(--background-darker)] py-[80px] relative overflow-hidden flex justify-center">
      {/* Grid de fundo */}
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

      {/* Sombra lateral */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(ellipse at left, #080B12, transparent 30%),
              radial-gradient(ellipse at right, #080B12, transparent 30%)
            `,
          }}
        />
      </div>

      {/* Conteúdo */}
      <div className="max-w-[1128px] flex gap-x-[120px] relative z-20 mx-auto">
        {/* Coluna esquerda */}
        <div className="w-[360px] shrink-0">
          <h3 className="text-[48px] font-gochi text-[var(--accent-blue)]">
            Quer saber...
          </h3>
          <h2 className="text-white text-[40px] font-black leading-tight">
            O que vai encontrar no curso?
          </h2>
        </div>

        {/* Coluna direita */}
        <div className="flex flex-col w-[648px] h-[892px]">
          <p className="text-white text-[32px] font-gochi mb-[24px]">
            Tudo o que você precisa para passar no exame PMP de primeira
          </p>

          <div className="grid grid-cols-2 gap-x-[24px] gap-y-[24px] mr-[96px]">
            {cardList.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
