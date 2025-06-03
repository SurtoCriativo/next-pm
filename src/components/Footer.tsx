import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-darker w-full py-6 flex flex-col items-center space-y-1">
      <p className="text-sm font-semibold text-[#9CA3AF] text-center">
        © 2025 NEXT PM Ltda. Todos os direitos reservados
      </p>
      <p className="text-sm text-[#444D5A] text-center">98.765.432/0001-00</p>
      <div className="mt-2">
        <Image
          src="/icon-footer.svg"
          alt="Ícone de cookie"
          width={20}
          height={20}
        />
      </div>
    </footer>
  );
}
