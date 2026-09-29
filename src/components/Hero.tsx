"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Compass } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#17110D]">
      {/* Background Image Container with Cinematic Scale Reveal */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
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

        {/* Multi-layered cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#17110D] via-[#17110D]/55 to-[#17110D]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#17110D]/85 via-transparent to-[#17110D]/70" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#17110D]/40 to-[#17110D]/90" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20 text-center flex flex-col items-center">
        {/* Top Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#D8C2A4]/25 bg-[#2A1B12]/60 backdrop-blur-md mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#B98A55] animate-pulse" />
          <span className="text-[11px] uppercase tracking-[0.28em] font-medium text-[#D8C2A4]">
            GOOD FOOD • GREAT VIBES
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#B98A55] animate-pulse" />
        </motion.div>

        {/* Oversized Editorial Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="space-y-1 mb-6"
        >
          <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#D8C2A4]/90 font-light">
            Welcome to
          </p>
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[#F4EBDD] font-normal tracking-tight leading-[0.95]">
            Beru Café
          </h1>
        </motion.div>

        {/* Authentic Quote & Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="max-w-2xl text-base sm:text-lg md:text-xl text-[#D8C2A4]/80 font-light leading-relaxed mb-10"
        >
          “A cozy space where great food, refreshing drinks and good vibes come together.”
          <span className="block mt-2 text-sm text-[#D8C2A4]/60 font-sans tracking-wide">
            29, Thimbirigasyaya Place, Colombo 05 • Open 7 Days
          </span>
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <Link
            href="/menu"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#B98A55] hover:bg-[#F4EBDD] text-[#17110D] text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 shadow-xl shadow-black/50 hover:shadow-[0_0_25px_rgba(244,235,221,0.35)]"
          >
            <span>Explore Our Menu</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            href="/contact"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-[#D8C2A4]/40 hover:border-[#F4EBDD] bg-[#2A1B12]/40 hover:bg-[#2A1B12] text-[#F4EBDD] text-xs font-medium uppercase tracking-[0.2em] backdrop-blur-md transition-all duration-300"
          >
            <span>Visit Beru</span>
            <Compass className="w-4 h-4 text-[#B98A55] transition-transform duration-300 group-hover:rotate-45" />
          </Link>
        </motion.div>

        {/* Decorative Editorial Script Floating Element */}
        <motion.div
          initial={{ opacity: 0, rotate: -6 }}
          animate={{ opacity: 0.75, rotate: -6 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="hidden lg:block absolute right-12 bottom-36 text-[#D8C2A4]/60 font-serif italic text-2xl tracking-wide select-none"
        >
          Eat Drink Be Happy ~
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#D8C2A4]/50">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-[#D8C2A4]/30 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 bg-[#B98A55] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
