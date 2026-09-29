"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { SIGNATURE_ITEMS } from "@/data/menuData";

export default function MenuPreview() {
  return (
    <section className="relative py-24 md:py-36 bg-[#221812]/50 border-t border-[#D8C2A4]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#B98A55]" />
              <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#B98A55]">
                SIGNATURE MENU
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F4EBDD] font-normal tracking-tight">
              Our Specialties
            </h2>
          </div>

          <Link
            href="/menu"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-medium text-[#D8C2A4] hover:text-[#F4EBDD] transition-colors py-2 self-start md:self-auto border-b border-[#D8C2A4]/30 hover:border-[#B98A55]"
          >
            <span>View Full Menu</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        {/* Grid of Signature Dishes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {SIGNATURE_ITEMS.map((dish, idx) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.7 }}
              className="group flex flex-col bg-[#17110D] rounded-2xl overflow-hidden border border-[#D8C2A4]/15 hover:border-[#B98A55]/50 transition-all duration-500 shadow-xl hover:shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
            >
              {/* Dish Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#2A1B12]">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17110D] via-transparent to-transparent opacity-80" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-medium bg-[#17110D]/85 backdrop-blur-md text-[#D8C2A4] border border-[#D8C2A4]/20">
                    {dish.category}
                  </span>
                </div>

                {/* Specialty Pill */}
                {dish.isSpecialty && (
                  <div className="absolute top-4 right-4">
                    <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[9px] uppercase tracking-[0.18em] font-medium bg-[#B98A55]/90 text-[#17110D]">
                      <Sparkles className="w-2.5 h-2.5" />
                      Specialty
                    </span>
                  </div>
                )}
              </div>

              {/* Dish Content */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-serif text-2xl text-[#F4EBDD] font-normal group-hover:text-[#B98A55] transition-colors mb-2.5">
                    {dish.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D8C2A4]/75 font-light leading-relaxed mb-6 line-clamp-3">
                    {dish.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#D8C2A4]/10 flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#B98A55] font-medium">
                    Artisan Prepared
                  </span>

                  <Link
                    href={`/menu#${dish.category.toLowerCase().replace(/\s+/g, "-")}`}
                    className="inline-flex items-center gap-1.5 text-xs text-[#F4EBDD] group-hover:text-[#B98A55] transition-colors uppercase tracking-[0.15em] font-medium"
                  >
                    <span>View item</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 text-center">
          <Link
            href="/menu"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-[#B98A55] hover:bg-[#F4EBDD] text-[#17110D] font-medium text-xs uppercase tracking-[0.22em] transition-all duration-300 shadow-xl shadow-black/60 hover:shadow-[0_0_25px_rgba(244,235,221,0.3)]"
          >
            <span>VIEW FULL MENU</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
