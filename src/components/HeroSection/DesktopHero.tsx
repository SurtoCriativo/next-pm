"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function DesktopHero() {
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-dvw flex justify-center items-center relative h-[696px]">
      {/* Iluminação */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-dvw h-[200px] bg-[radial-gradient(ellipse_at_bottom,_#238CFF_80%,_#1B1F24_100%)] blur-[100px] opacity-100 rounded-full z-0 pointer-events-none" />

      <div className="w-dvw  mx-auto flex justify-between items-center px-[76px]">
        <div className="text-left">
          <h1 className="text-[64px] font-black leading-tight text-white">
            Conquiste sua <br />
            Certificação PMP
            <br /> em{" "}
            <span className="bg-gradient-to-r from-[#3E6DFD] to-[#A494F9] bg-clip-text text-transparent">
              Apenas 6
            </span>
            <span className="block bg-gradient-to-r from-[#3E6DFD] to-[#A494F9] bg-clip-text text-transparent">
              Semanas
            </span>
          </h1>

          <p className="mt-4 w-[552px] text-base font-semibold text-white leading-relaxed">
            O curso intensivo que vai te levar direto à aprovação no exame PMP,
            com aulas objetivas, simulados estratégicos e suporte completo.
          </p>
        </div>

        <div className="relative w-[456px] h-[456px]">
          <motion.div
            animate={{ opacity: showFirst ? 1 : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src="/logo-3d-01.svg"
              alt="Ilustração 1"
              fill
              className="object-contain"
            />
          </motion.div>

          <motion.div
            animate={{ opacity: showFirst ? 0 : 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src="/logo-3d-02.svg"
              alt="Ilustração 2"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default DesktopHero;
