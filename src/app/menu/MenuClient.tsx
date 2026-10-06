"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowUpRight, Utensils, Info } from "lucide-react";
import { FULL_MENU_ITEMS, MENU_CATEGORIES } from "@/data/menuData";
import { BERU_INFO } from "@/data/cafeData";

export default function MenuClient() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredItems =
    activeCategory === "All"
      ? FULL_MENU_ITEMS
      : FULL_MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="pt-24 sm:pt-28 pb-20 sm:pb-28 bg-[#FAF7F2] min-h-screen">
      {/* Header Banner */}
      <section className="relative px-4 sm:px-6 md:px-10 max-w-7xl mx-auto mb-10 sm:mb-14 text-center">
        <div className="inline-flex items-center gap-2 mb-2.5">
          <span className="w-6 h-[1.5px] bg-[#B98A55]" />
          <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-[#B98A55]">
            CURATED SELECTIONS
          </span>
          <span className="w-6 h-[1.5px] bg-[#B98A55]" />
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#17110D] font-normal tracking-tight mb-4">
          The Artisan Menu
        </h1>

        <p className="max-w-xl mx-auto text-xs sm:text-sm text-[#6A5546] font-light leading-relaxed mb-6">
          Every plate and pour is crafted from scratch with carefully selected local produce, ceremonial Uji matcha, and single-origin coffee.
        </p>

        {/* Note banner */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-[#2A1B12]/8 shadow-sm text-xs text-[#2A1B12]">
          <Info className="w-3.5 h-3.5 text-[#B98A55] shrink-0" />
          <span>Seasonal market ingredients • Daily specials available at counter</span>
        </div>
      </section>

      {/* Sticky Category Navigation Pills */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 mb-10 sticky top-16 z-20 py-2 bg-[#FAF7F2]/95 backdrop-blur-md">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start lg:justify-center -mx-4 px-4 sm:mx-0 sm:px-0">
          {MENU_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`touch-target px-4 sm:px-5 py-2 rounded-full text-xs uppercase tracking-[0.16em] transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                  isActive
                    ? "bg-[#2A1B12] text-[#FAF6F0] shadow-sm font-semibold"
                    : "bg-white text-[#6A5546] hover:text-[#17110D] border border-[#2A1B12]/8 font-medium"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Menu Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((dish) => (
              <motion.article
                layout
                key={dish.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#2A1B12]/8 shadow-[0_4px_24px_rgba(42,27,18,0.04)] hover:shadow-md transition-all"
              >
                {/* Dish Photo */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF6F0]">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center img-reveal"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />

                  {/* Badges */}
                  <div className="absolute top-3.5 left-3.5 flex gap-1.5">
                    <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.18em] font-semibold bg-white/95 backdrop-blur-md text-[#2A1B12] border border-[#2A1B12]/10 shadow-sm">
                      {dish.category}
                    </span>
                  </div>

                  {dish.isSpecialty && (
                    <div className="absolute top-3.5 right-3.5">
                      <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[9px] uppercase tracking-[0.18em] font-semibold bg-[#B98A55] text-white shadow-sm">
                        <Sparkles className="w-2.5 h-2.5" />
                        Signature
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between bg-white">
                  <div>
                    {dish.tags && dish.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {dish.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] uppercase tracking-wider text-[#B98A55] font-mono"
                          >
                            • {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <h2 className="font-serif text-xl sm:text-2xl text-[#17110D] font-medium group-hover:text-[#B98A55] transition-colors mb-2">
                      {dish.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#6A5546] font-light leading-relaxed mb-6">
                      {dish.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#2A1B12]/6 flex items-center justify-between text-xs">
                    <span className="text-[#6A5546] font-light text-[11px]">
                      Made to order
                    </span>
                    <a
                      href={BERU_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="touch-target inline-flex items-center gap-1.5 text-[#17110D] hover:text-[#B98A55] uppercase tracking-[0.16em] font-semibold text-[11px]"
                    >
                      <span>Inquire / Order</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#B98A55]" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Dietary Requirements Banner */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 mt-16 sm:mt-20 text-center">
        <div className="p-6 sm:p-10 rounded-3xl bg-white border border-[#2A1B12]/8 shadow-[0_8px_30px_rgba(42,27,18,0.04)]">
          <Utensils className="w-6 h-6 text-[#B98A55] mx-auto mb-3" />
          <h3 className="font-serif text-2xl sm:text-3xl text-[#17110D] font-normal mb-2">
            Have Dietary Preferences?
          </h3>
          <p className="text-xs sm:text-sm text-[#6A5546] font-light max-w-md mx-auto leading-relaxed mb-6">
            We happily accommodate oat milk, almond milk, vegan preferences, and gluten-conscious preparations. Please let our team know when ordering.
          </p>
          <Link
            href="/#book-table"
            className="touch-target inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#2A1B12] text-[#FAF6F0] font-medium text-xs uppercase tracking-[0.18em] hover:bg-[#17110D] transition-colors shadow-sm active:scale-[0.98]"
          >
            <span>Reserve a Table</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#B98A55]" />
          </Link>
        </div>
      </section>
    </div>
  );
}
