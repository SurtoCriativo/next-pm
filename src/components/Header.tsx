"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <>
      {/* HEADER FIXO */}
      <header className="fixed top-0 left-0 w-dvw  bg-[#080B12] font-archivo z-50">
        <div className="w-dvw mx-auto px-4 lg:px-[76px] py-4 flex items-center justify-between">
          {/* LOGO RESPONSIVO */}
          <Link href="/" className="block">
            <Image
              src="/logo-desk-next.svg"
              alt="Logo Next PM"
              width={110}
              height={24}
              className="md:hidden"
              priority
            />
            <Image
              src="/logo-desk-next.svg"
              alt="Logo Next PM"
              width={220}
              height={48}
              className="hidden md:block"
              priority
            />
          </Link>

          {/* BOTÃO */}
          <Link
            href="/vagas"
            className="w-[156px] h-[48px] inline-flex items-center justify-center rounded-full
                       bg-gradient-to-r from-purple-500 to-blue-500 p-[2px]"
          >
            <span
              className="w-full h-full flex items-center justify-center rounded-full
                         bg-[var(--surface-dark)] text-[var(--text-white)] text-sm font-medium font-archivo"
            >
              Vagas abertas
            </span>
          </Link>
        </div>
      </header>

      {/* ESPAÇO RESERVADO DO HEADER COM FUNDO */}
      <div className="h-[72px] bg-[#080B12]" />
    </>
  );
}
