"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Compass } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full flex flex-col justify-center items-center overflow-x-hidden bg-[#17110D]">
      {/* Background Image with Cinematic Scale Reveal */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/hero-ambience.jpg"
          alt="Beru Café Colombo - Artisan food and signature matcha on warm wooden counter"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Balanced cinematic grading: maintains natural sunlight while providing crisp text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/35" />
      </motion.div>

      {/* Ambient Sunlit Orbs */}
      <div
        className="ambient-orb animate-orb w-[600px] h-[600px] bg-[#B98A55]/15 top-[-100px] left-[-150px] z-[1]"
      />
      <div
        className="ambient-orb animate-orb-reverse w-[500px] h-[500px] bg-[#4E5E48]/15 bottom-[-80px] right-[-120px] z-[1]"
      />
      <div
        className="ambient-orb w-[350px] h-[350px] bg-[#E4C8BA]/15 top-[30%] right-[10%] z-[1]"
        style={{ animation: "orb-drift 20s ease-in-out infinite 5s" }}
      />

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 pt-14 sm:pt-20 pb-6 sm:pb-10 text-center flex flex-col justify-center items-center">
        {/* Top Tagline Badge - Warm, bright & glowing */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="inline-flex items-center gap-2 sm:gap-3 px-3.5 sm:px-5 py-1 sm:py-2 rounded-full border border-[#E4C8BA]/80 bg-[#FAF6F0]/95 backdrop-blur-md mb-1 sm:mb-2 shadow-md"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#B98A55]" style={{ animation: "pulse-glow 2s ease-in-out infinite" }} />
          <span className="text-[9px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.3em] font-semibold text-[#382418]">
            GOOD FOOD • GREAT VIBES
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#B98A55]" style={{ animation: "pulse-glow 2s ease-in-out infinite 1s" }} />
        </motion.div>

        {/* Welcome Intro */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="font-serif italic text-sm sm:text-xl md:text-2xl text-[#FAF6F0] font-light mb-0.5 sm:mb-1 drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]"
        >
          Welcome to
        </motion.p>

        {/* Official Gold Beru Emblem & Wordmark (Custom Typography & Shell) */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-center justify-center my-0.5 sm:my-1 select-none"
        >
          <span className="sr-only">Beru Café Colombo</span>

          {/* Ambient warm champagne backlight */}
          <div className="absolute -inset-6 sm:-inset-8 bg-gradient-to-r from-[#E4C8BA]/25 via-[#FAF6F0]/30 to-[#E4C8BA]/25 blur-2xl rounded-full pointer-events-none" />

          <div className="relative w-32 sm:w-52 md:w-64 aspect-[1000/1017] transition-transform duration-500 hover:scale-[1.03]">
            <Image
              src="/images/beru-logo-rich-espresso.png"
              alt="Beru Café Colombo"
              fill
              priority
              sizes="(max-width: 640px) 130px, (max-width: 768px) 210px, 260px"
              className="object-contain drop-shadow-[0_3px_12px_rgba(0,0,0,0.4)] drop-shadow-[0_0_20px_rgba(228,200,186,0.4)]"
            />
          </div>
        </motion.h1>

        {/* Delicate Ornament Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.5 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.65, duration: 0.8 }}
          className="ornament-divider w-full max-w-[180px] sm:max-w-xs mx-auto my-1 sm:my-2"
        >
          <span className="text-[#FAF6F0] text-xs drop-shadow-md">✦</span>
        </motion.div>

        {/* Authentic Quote & Subtitle Card — Protected with frosted contrast backdrop for 100% visibility */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="w-full max-w-lg mx-auto px-4 py-2.5 sm:py-3.5 rounded-2xl bg-black/50 backdrop-blur-md border border-white/20 shadow-xl my-2.5 sm:my-4"
        >
          <p className="text-xs sm:text-base md:text-lg text-white font-serif italic font-light leading-relaxed drop-shadow-md">
            "A cozy space where great food, refreshing drinks and good vibes come together."
          </p>
          <span className="block mt-1 sm:mt-1.5 text-[10px] sm:text-xs text-[#E4C8BA] font-sans font-medium tracking-wide drop-shadow-sm">
            29, Thimbirigasyaya Place, Colombo 05 • Open 7 Days
          </span>
        </motion.div>

        {/* Call to Actions — side by side on mobile for compact vertical layout */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.8 }}
          className="flex flex-row items-center justify-center gap-2.5 sm:gap-4 w-full sm:w-auto mt-1 sm:mt-2"
        >
          <Link
            href="/menu"
            className="group flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-full bg-[#B98A55] hover:bg-[#FAF6F0] text-[#17110D] text-[10px] sm:text-xs font-semibold uppercase tracking-[0.16em] sm:tracking-[0.2em] transition-all duration-300 shadow-xl shadow-black/40 hover:shadow-[0_0_25px_rgba(244,235,221,0.4)] whitespace-nowrap"
          >
            <span>Explore Menu</span>
            <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            href="/contact"
            className="group flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-full border border-[#E4C8BA]/90 hover:border-[#B98A55] bg-[#FAF6F0]/95 hover:bg-[#FAF6F0] text-[#382418] text-[10px] sm:text-xs font-semibold uppercase tracking-[0.16em] sm:tracking-[0.2em] shadow-lg backdrop-blur-md transition-all duration-300 whitespace-nowrap"
          >
            <span>Visit Beru</span>
            <Compass className="w-3 h-3 sm:w-4 sm:h-4 text-[#B98A55] transition-transform duration-500 group-hover:rotate-45" />
          </Link>
        </motion.div>

        {/* Decorative Floating Script */}
        <motion.div
          initial={{ opacity: 0, rotate: -6 }}
          animate={{ opacity: 0.65, rotate: -6 }}
          transition={{ delay: 1.2, duration: 1.2 }}
          className="animate-float-slow hidden lg:block absolute right-10 bottom-24 text-[#D8C2A4]/60 font-serif italic text-2xl tracking-wide select-none pointer-events-none"
        >
          Eat Drink Be Happy ~
        </motion.div>
      </div>

      {/* Scroll Down Indicator (visible on desktop) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-[0.28em] text-[#D8C2A4]/45">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-9 rounded-full border border-[#B98A55]/40 flex items-start justify-center p-1.5 shadow-[0_0_12px_rgba(185,138,85,0.2)]"
        >
          <div className="w-1 h-2 bg-[#B98A55] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
