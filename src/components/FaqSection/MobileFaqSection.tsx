"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

const faqData = [
  {
    question: "Quanto tempo de acesso ao curso?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    question: "As aulas são ao vivo ou gravadas?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    question: "Tem certificado?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    question: "O curso tem comunidade?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    question: "Tem alguma garantia?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
];

export default function MobileFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full flex flex-col items-center bg-[var(--background-darker)] px-4 py-10">
      <div className="max-w-[343px] w-full">
        <h3 className="text-yellow-400 font-gochi text-[32px] mb-4">
          Ainda com dúvida?
        </h3>
        <h2 className="text-white font-black text-[32px] leading-tight mb-4">
          Entre em contato
          <br /> que eu te ajudo!
        </h2>
        <p className="text-white/90 text-[18px] leading-relaxed mb-6">
          Você pode entrar em contato comigo por <strong>E-mail</strong> ou{" "}
          <strong>WhatsApp</strong>, e eu responderei o mais rápido possível! Ao
          lado, você encontrará respostas para algumas das perguntas mais
          frequentes que recebo.
        </p>

        <div className="flex gap-4 mb-6">
          <a
            href="mailto:seuemail@example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/icon-email.svg" alt="Email" width={48} height={48} />
          </a>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icon-whatsapp.svg"
              alt="WhatsApp"
              width={48}
              height={48}
            />
          </a>
        </div>

        <div className="flex flex-col gap-3">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#11141C] border border-white/10 rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  className="w-full flex items-center justify-between text-left px-6 py-6"
                  onClick={() => toggleIndex(index)}
                >
                  <span className="text-white text-[16px] font-semibold">
                    {item.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp size={20} className="text-white" />
                  ) : (
                    <ChevronDown size={20} className="text-white" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-white/70 text-sm leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
