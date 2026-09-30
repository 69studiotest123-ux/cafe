"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { SIGNATURE_ITEMS } from "@/data/menuData";

export default function MenuPreview() {
  return (
    <section className="relative py-28 md:py-40 bg-[#F4EBDD]/40 border-t border-[#E4C8BA]/60 overflow-hidden">
      {/* Ambient glows */}
      <div className="ambient-orb w-[500px] h-[500px] bg-[#E4C8BA]/30 top-0 right-[-150px] animate-orb" />
      <div className="ambient-orb w-[400px] h-[400px] bg-[#B98A55]/10 bottom-0 left-[-100px] animate-orb-reverse" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-18 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-[1px] bg-[#B98A55]" />
              <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#B98A55]">
                SIGNATURE MENU
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#2A1B12] font-normal tracking-tight">
              Our{" "}
              <span className="italic text-[#B98A55]">Specialties</span>
            </h2>
          </motion.div>

          <Link
            href="/menu"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#2A1B12] hover:text-[#B98A55] transition-colors py-2 self-start md:self-auto border-b border-[#2A1B12]/30 hover:border-[#B98A55]"
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.7 }}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#E4C8BA]/80 hover:border-[#B98A55] transition-all duration-500 shadow-[0_8px_30px_rgba(56,36,24,0.06)] hover:shadow-xl"
            >
              {/* Dish Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF6F0]">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-semibold bg-white/95 backdrop-blur-md text-[#2A1B12] border border-[#E4C8BA] shadow-sm">
                    {dish.category}
                  </span>
                </div>

                {/* Specialty Pill */}
                {dish.isSpecialty && (
                  <div className="absolute top-4 right-4">
                    <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[9px] uppercase tracking-[0.18em] font-semibold bg-[#B98A55] text-white shadow-md">
                      <Sparkles className="w-2.5 h-2.5" />
                      Specialty
                    </span>
                  </div>
                )}
              </div>

              {/* Dish Content */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-serif text-2xl text-[#2A1B12] font-medium group-hover:text-[#B98A55] transition-colors duration-300 mb-2.5">
                    {dish.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6A5546] font-normal leading-relaxed mb-6 line-clamp-3">
                    {dish.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E4C8BA]/40 flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#B98A55] font-semibold">
                    Artisan Prepared
                  </span>
                  <Link
                    href={`/menu#${dish.category.toLowerCase().replace(/\s+/g, "-")}`}
                    className="inline-flex items-center gap-1.5 text-xs text-[#2A1B12] group-hover:text-[#B98A55] transition-colors uppercase tracking-[0.15em] font-semibold"
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <Link
            href="/menu"
            className="group inline-flex items-center gap-3 px-12 py-4 rounded-full bg-[#382418] hover:bg-[#B98A55] text-[#FAF6F0] font-semibold text-xs uppercase tracking-[0.24em] transition-all duration-300 shadow-xl shadow-black/20"
          >
            <span>VIEW FULL MENU</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
