"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, ChevronDown } from "lucide-react";
import { SIGNATURE_ITEMS, MenuItem } from "@/data/menuData";

export default function MenuPreview() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories = ["All", "Breakfast", "Main Dishes", "Bowls", "Matcha", "Desserts"];

  const filteredItems =
    activeCategory === "All"
      ? SIGNATURE_ITEMS
      : SIGNATURE_ITEMS.filter((item) => item.category === activeCategory);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-[#F4EBDD]/35 border-b border-[#2A1B12]/8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-5">
          <div>
            <div className="inline-flex items-center gap-2 mb-2.5">
              <span className="w-6 h-[1.5px] bg-[#B98A55]" />
              <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-[#B98A55]">
                SIGNATURE CREATIONS
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#17110D] font-normal tracking-tight">
              Crafted from scratch, <br className="hidden sm:block" />
              <span className="italic text-[#B98A55]">served with care.</span>
            </h2>
          </div>

          <Link
            href="/menu"
            className="touch-target group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#17110D] hover:text-[#B98A55] transition-colors py-2 self-start md:self-auto border-b border-[#17110D]/30 hover:border-[#B98A55]"
          >
            <span>View Full Menu</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Horizontally Scrollable Category Filter Pills */}
        <div className="mb-8 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none flex items-center gap-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`touch-target px-4 sm:px-5 py-2 rounded-full text-xs uppercase tracking-[0.16em] transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                  isActive
                    ? "bg-[#2A1B12] text-[#FAF6F0] shadow-sm font-semibold"
                    : "bg-white/80 hover:bg-white text-[#6A5546] hover:text-[#17110D] border border-[#2A1B12]/8 font-medium"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Menu Items Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((dish) => {
              const isExpanded = expandedId === dish.id;
              return (
                <motion.article
                  layout
                  key={dish.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                  onClick={() => toggleExpand(dish.id)}
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#2A1B12]/8 shadow-[0_4px_24px_rgba(42,27,18,0.04)] hover:shadow-md transition-all cursor-pointer"
                >
                  {/* Dish Image */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF6F0]">
                    <Image
                      src={dish.image}
                      alt={dish.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center img-reveal"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                    {/* Category & Tags Pill */}
                    <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-1.5">
                      <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-semibold bg-[#FAF6F0]/95 backdrop-blur-md text-[#2A1B12] border border-[#2A1B12]/10 shadow-sm">
                        {dish.category}
                      </span>
                      {dish.tags?.[0] && (
                        <span className="px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-medium bg-[#2A1B12]/85 text-[#FAF6F0] backdrop-blur-sm">
                          {dish.tags[0]}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Dish Content */}
                  <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between bg-white">
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className="font-serif text-xl sm:text-2xl text-[#17110D] font-medium group-hover:text-[#B98A55] transition-colors leading-snug">
                          {dish.name}
                        </h3>
                        <span className="p-1 rounded-full text-[#6A5546] group-hover:text-[#2A1B12] transition-colors shrink-0">
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-[#6A5546] font-light leading-relaxed">
                        {dish.description}
                      </p>

                      {/* Expandable Details on Tap / Click */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="mt-3 pt-3 border-t border-[#2A1B12]/8 text-[11px] text-[#B98A55] space-y-1"
                          >
                            <p className="font-medium tracking-wide">
                              ✦ Prepared fresh on order • Ask staff for dietary adjustments
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#2A1B12]/6 flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-[#6A5546]">
                      <span className="text-[#B98A55] font-semibold">Artisan Recipe</span>
                      <span className="font-sans text-[10px] text-[#2A1B12]/60">Tap for details</span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Full Menu Banner */}
        <div className="mt-12 text-center">
          <Link
            href="/menu"
            className="touch-target inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#2A1B12] hover:bg-[#17110D] text-[#FAF6F0] text-xs font-semibold uppercase tracking-[0.2em] transition-all shadow-md active:scale-[0.98]"
          >
            <span>Browse Complete Menu</span>
            <ArrowUpRight className="w-4 h-4 text-[#B98A55]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
