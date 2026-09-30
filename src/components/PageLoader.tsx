"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function PageLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Elegant duration: gives a serene, warm welcome before dissolving
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="beru-signature-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            pointerEvents: "none" as const,
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center select-none overflow-hidden"
          style={{
            background:
              "radial-gradient(circle at 50% 45%, #EED7CA 0%, #E4C8BA 50%, #D4B4A2 100%)",
          }}
        >
          {/* Subtle Warm Porcelain Radial Backlight */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{
              scale: [0.9, 1.12, 1],
              opacity: [0.4, 0.7, 0.5],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-[440px] sm:w-[520px] h-[440px] sm:h-[520px] rounded-full bg-white/35 blur-3xl pointer-events-none"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center"
          >
            {/* Top Minimal Pill Tag */}
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF6F0]/80 border border-[#382418]/15 shadow-sm mb-5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#B98A55]" />
              <span className="text-[9px] uppercase tracking-[0.3em] font-semibold text-[#2A1B12]">
                COLOMBO 05
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#B98A55]" />
            </motion.div>

            {/* Header Logo */}
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-52 sm:w-60 aspect-[1036/420] mb-5 flex items-center justify-center"
            >
              <Image
                src="/images/beru-header-logo.png"
                alt="Beru Café Colombo"
                fill
                priority
                sizes="(max-width: 640px) 210px, 240px"
                className="object-contain drop-shadow-[0_6px_16px_rgba(42,27,18,0.12)]"
              />
            </motion.div>

            {/* Elegant Hairline Progress Indicator */}
            <div className="relative w-36 sm:w-44 h-[1.5px] bg-[#382418]/20 rounded-full overflow-hidden mb-4">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full bg-[#2A1B12]"
              />
            </div>

            {/* Editorial Motto */}
            <motion.p
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="font-serif italic text-base sm:text-lg text-[#2A1B12] font-normal tracking-wide"
            >
              “Eat Drink Be Happy ~”
            </motion.p>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.75 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-[10px] tracking-[0.26em] text-[#382418]/80 uppercase font-sans mt-1.5"
            >
              29, Thimbirigasyaya Place
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
