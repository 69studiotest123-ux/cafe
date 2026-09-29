"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowUpRight, Coffee, Leaf, Filter, Utensils, Info } from "lucide-react";
import { FULL_MENU_ITEMS, MENU_CATEGORIES, MenuItem } from "@/data/menuData";
import { BERU_INFO } from "@/data/cafeData";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredItems = activeCategory === "All"
    ? FULL_MENU_ITEMS
    : FULL_MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="pt-32 pb-28 bg-[#17110D] min-h-screen">
      {/* Header Banner */}
      <section className="relative px-6 md:px-12 max-w-7xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-8 h-[1px] bg-[#B98A55]" />
          <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#B98A55]">
            CURATED SELECTIONS
          </span>
          <span className="w-8 h-[1px] bg-[#B98A55]" />
        </div>

        <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-[#F4EBDD] font-normal tracking-tight mb-6">
          The Artisan Menu
        </h1>

        <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#D8C2A4]/80 font-light leading-relaxed mb-8">
          Every plate and pour is created from scratch with locally sourced ingredients, organic produce, and pure dedication to taste and balance.
        </p>

        {/* Note banner explaining authentic prices */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#2A1B12]/80 border border-[#D8C2A4]/20 text-xs text-[#D8C2A4]/90">
          <Info className="w-4 h-4 text-[#B98A55] shrink-0" />
          <span>Seasonal market ingredients • Daily specials & prices available at the counter</span>
        </div>
      </section>

      {/* Category Navigation Pills */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-14">
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none justify-start lg:justify-center">
          {MENU_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-[#B98A55] text-[#17110D] shadow-lg shadow-[#B98A55]/20 font-semibold"
                    : "bg-[#2A1B12]/60 text-[#D8C2A4]/80 hover:text-[#F4EBDD] hover:bg-[#2A1B12] border border-[#D8C2A4]/15"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Menu Cards Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((dish) => (
              <motion.article
                layout
                key={dish.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col bg-[#221812]/40 rounded-2xl overflow-hidden border border-[#D8C2A4]/15 hover:border-[#B98A55]/50 transition-all duration-500 shadow-xl"
              >
                {/* Dish Photo */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#2A1B12]">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17110D] via-transparent to-transparent opacity-80" />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-medium bg-[#17110D]/85 backdrop-blur-md text-[#D8C2A4] border border-[#D8C2A4]/20">
                      {dish.category}
                    </span>
                  </div>

                  {dish.isSpecialty && (
                    <div className="absolute top-4 right-4">
                      <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[9px] uppercase tracking-[0.18em] font-medium bg-[#B98A55] text-[#17110D]">
                        <Sparkles className="w-2.5 h-2.5" />
                        Signature
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between bg-[#17110D]/90">
                  <div>
                    {dish.tags && dish.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-2">
                        {dish.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[9px] uppercase tracking-[0.15em] text-[#B98A55]"
                          >
                            • {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <h2 className="font-serif text-2xl text-[#F4EBDD] font-normal group-hover:text-[#B98A55] transition-colors mb-2.5">
                      {dish.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#D8C2A4]/75 font-light leading-relaxed mb-6">
                      {dish.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#D8C2A4]/10 flex items-center justify-between text-xs">
                    <span className="text-[#D8C2A4]/70 font-light">
                      Freshly prepared
                    </span>
                    <a
                      href={BERU_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[#B98A55] hover:text-[#F4EBDD] uppercase tracking-[0.18em] font-medium text-[11px]"
                    >
                      <span>Inquire / Order</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Custom Orders / Dietary Requirements CTA */}
      <section className="max-w-4xl mx-auto px-6 mt-24 text-center">
        <div className="p-10 rounded-3xl bg-[#2A1B12]/50 border border-[#D8C2A4]/20 backdrop-blur-md">
          <Utensils className="w-8 h-8 text-[#B98A55] mx-auto mb-4" />
          <h3 className="font-serif text-3xl text-[#F4EBDD] font-normal mb-3">
            Have Dietary Preferences?
          </h3>
          <p className="text-xs sm:text-sm text-[#D8C2A4]/80 font-light max-w-lg mx-auto leading-relaxed mb-6">
            We happily accommodate dairy alternatives (oat milk, almond milk), vegan selections, and gluten-conscious preparations. Please inform our barista or service team upon arrival.
          </p>
          <Link
            href="/#book-table"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#B98A55] text-[#17110D] font-medium text-xs uppercase tracking-[0.2em] hover:bg-[#F4EBDD] transition-colors"
          >
            <span>Reserve a Table</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
