"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Compass } from "lucide-react";
import { BERU_INFO } from "@/data/cafeData";

export default function StorySection() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-[#FAF7F2] border-b border-[#2A1B12]/8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Asymmetric Editorial Photography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative order-2 lg:order-1"
          >
            {/* Main Architectural Photo */}
            <div className="relative aspect-[4/5] sm:aspect-[4/4.5] w-full rounded-2xl overflow-hidden border border-[#2A1B12]/10 shadow-[0_12px_40px_rgba(42,27,18,0.06)] bg-[#F4EBDD]">
              <Image
                src="/images/exterior-facade.jpg"
                alt="Beru Café Colombo - Iconic illuminated shell emblem and tropical architecture"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center img-reveal"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Editorial Image Tag */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 rounded-xl bg-[#FAF7F2]/95 backdrop-blur-md border border-[#2A1B12]/10 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#B98A55] font-semibold">
                    The Sanctuary
                  </p>
                  <p className="font-serif italic text-sm text-[#17110D] font-medium">
                    29, Thimbirigasyaya Place, Colombo 05
                  </p>
                </div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#6A5546] bg-[#F4EBDD] px-2.5 py-1 rounded-full">
                  EST. 2024
                </span>
              </div>
            </div>

            {/* Overlapping Detail Photo Card (Mobile-friendly offset) */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-48 sm:w-56 aspect-square rounded-2xl overflow-hidden border-[4px] border-[#FAF7F2] shadow-xl bg-[#E4C8BA]">
              <Image
                src="/images/story-cafe-doors.jpg"
                alt="Beru Café Sage green doors and natural light"
                fill
                sizes="240px"
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Right Column: Editorial Copy & Manifesto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center order-1 lg:order-2"
          >
            {/* Section Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1.5px] bg-[#B98A55]" />
              <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-[#B98A55]">
                OUR STORY & SPACE
              </span>
            </div>

            {/* Main Editorial Statement */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#17110D] font-normal tracking-tight leading-[1.2] mb-5">
              An unhurried sanctuary in the heart of Colombo.
            </h2>

            {/* Narrative Story */}
            <div className="space-y-4 text-xs sm:text-sm text-[#6A5546] font-light leading-relaxed mb-6">
              <p>
                Tucked quietly along Thimbirigasyaya Place, Beru was conceived as a mindful retreat from the rush of the city. We designed this space to celebrate good food, genuine connection, and Sri Lanka’s lush café culture.
              </p>
              <p>
                Whether you drop in for an early morning cold-pressed elixir, sit with a bowl of stone-ground ceremonial matcha, or share an artisan lunch on the terrace, our doors are open with heartfelt hospitality every single day.
              </p>
            </div>

            {/* Curated Highlights Chips */}
            <div className="grid grid-cols-2 gap-3 mb-8 pt-2 border-t border-[#2A1B12]/8">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-[#B98A55] font-semibold">
                  Location
                </span>
                <span className="font-serif text-base text-[#17110D]">
                  Thimbirigasyaya, Colombo 05
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-[#B98A55] font-semibold">
                  Experience
                </span>
                <span className="font-serif text-base text-[#17110D]">
                  Indoor Lounge & Courtyard
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/about"
                className="touch-target inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2A1B12] hover:bg-[#17110D] text-[#FAF6F0] text-xs font-medium uppercase tracking-[0.16em] transition-all shadow-sm active:scale-[0.98]"
              >
                <span>Read Full Story</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#B98A55]" />
              </Link>

              <Link
                href="/contact"
                className="touch-target inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#2A1B12]/20 hover:border-[#2A1B12] bg-white text-[#2A1B12] text-xs font-medium uppercase tracking-[0.16em] transition-all active:scale-[0.98]"
              >
                <Compass className="w-3.5 h-3.5 text-[#B98A55]" />
                <span>Visit Us</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
