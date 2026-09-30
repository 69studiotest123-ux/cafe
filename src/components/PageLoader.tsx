"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function PageLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 950);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="beru-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, pointerEvents: "none" as const, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#E4C8BA] select-none"
        >
          {/* Subtle warm ambient backlighting */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 0.5 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute w-80 h-80 rounded-full bg-white/40 blur-3xl pointer-events-none"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center relative z-10"
          >
            {/* Official Full Logo Lockup */}
            <div className="relative w-40 h-40 mb-1 flex items-center justify-center">
              <Image
                src="/images/beru-logo-official.png"
                alt="Beru Café"
                width={160}
                height={160}
                className="object-contain w-full h-full drop-shadow-[0_8px_20px_rgba(42,27,18,0.12)]"
                priority
              />
            </div>

            {/* Subtle espresso brown expanding line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 140, opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.7, ease: "easeInOut" }}
              className="h-[1px] bg-gradient-to-r from-transparent via-[#4A3222]/50 to-transparent mt-3"
            />

            <motion.span
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="text-[10px] tracking-[0.3em] text-[#4A3222]/75 uppercase font-medium mt-3"
            >
              Colombo 05
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
