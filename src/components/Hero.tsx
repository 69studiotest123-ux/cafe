"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Compass, Clock } from "lucide-react";
import { BERU_INFO } from "@/data/cafeData";

export default function Hero() {
  return (
    <section className="relative min-h-[90svh] sm:min-h-[92svh] lg:min-h-[94vh] w-full flex flex-col justify-end lg:justify-center items-center overflow-hidden bg-[#17110D] pt-24 pb-12 sm:pb-16 px-4 sm:px-6">
      {/* Background Image with Cinematic Tonal Treatment */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-ambience.jpg"
          alt="Beru Café Colombo - Artisan coffee and signature brunch"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-[1.02]"
        />
        {/* Soft, rich photographic overlay - preserves warm natural light while guaranteeing crisp readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#17110D] via-[#17110D]/65 to-[#17110D]/35" />
      </div>

      {/* Hero Editorial Composition */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Top Eyebrow Tag */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-black/40 backdrop-blur-md mb-3 sm:mb-5 shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#B98A55]" />
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-medium text-[#FAF6F0]">
            COLOMBO 05 • ARTISAN CAFÉ
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#B98A55]" />
        </motion.div>

        {/* Brand Emblem / Header Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-48 sm:w-64 md:w-80 aspect-[1036/420] mb-3 sm:mb-4"
        >
          <Image
            src="/images/beru-header-logo.png"
            alt="Beru Café Colombo"
            fill
            priority
            sizes="(max-width: 640px) 200px, 320px"
            className="object-contain drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
          />
        </motion.div>

        {/* Large Headline (Authentic brand messaging & semantic H1) */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl px-2 mb-3 sm:mb-4"
        >
          <span className="sr-only">Beru Café Colombo — Artisan Café & Specialty Coffee Bar</span>
          <span className="block font-serif italic text-2xl sm:text-4xl md:text-5xl text-[#FAF6F0] font-normal leading-[1.2] drop-shadow-md">
            “A cozy space where great food, refreshing drinks & good vibes come together.”
          </span>
        </motion.h1>

        {/* Supporting Editorial Text */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xs sm:text-sm md:text-base text-[#D8C2A4] font-light max-w-lg leading-relaxed mb-6 sm:mb-8"
        >
          Ceremonial Japanese matcha, specialty coffee & artisan brunch dishes served daily at 29, Thimbirigasyaya Place.
        </motion.p>

        {/* Mobile-First Interactive CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
        >
          <Link
            href="/menu"
            className="touch-target group flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#B98A55] hover:bg-[#FAF6F0] text-[#17110D] text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-200 shadow-lg hover:shadow-xl active:scale-[0.98]"
          >
            <span>Explore Menu</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            href="/contact"
            className="touch-target group flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full border border-white/25 hover:border-white/60 bg-black/35 hover:bg-black/50 text-[#FAF6F0] text-xs font-medium uppercase tracking-[0.18em] backdrop-blur-sm transition-all duration-200 active:scale-[0.98]"
          >
            <Compass className="w-4 h-4 text-[#B98A55]" />
            <span>Visit Us</span>
          </Link>
        </motion.div>

        {/* Operating status badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-6 sm:mt-8 flex items-center gap-2 text-[11px] sm:text-xs text-[#D8C2A4]/80 tracking-wide font-sans"
        >
          <Clock className="w-3.5 h-3.5 text-[#B98A55]" />
          <span>{BERU_INFO.hours} • {BERU_INFO.openingDays}</span>
        </motion.div>
      </div>

    </section>
  );
}
