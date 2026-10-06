"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Leaf, Droplet, Coffee } from "lucide-react";
import LazyVideo from "./LazyVideo";

export default function SpecialtyDrinks() {
  const spotlightDrink = {
    name: "Artisan Rose Matcha",
    category: "Ceremonial Matcha",
    tag: "Signature Reel",
    desc: "Highest grade ceremonial Uji matcha stone-ground in Japan, paired with our house-simmered botanical rose syrup and velvety chilled milk.",
    video: "/videos/rose-matcha.mp4",
    poster: "/images/dish-smoothie-green-juice.jpg",
    notes: ["Ceremonial Uji Grade", "House Rose Syrup", "Served Chilled"],
  };

  const secondaryDrinks = [
    {
      name: "Botanical Cucumber Cooler",
      category: "Cold-Pressed & Herbals",
      tag: "Island Refreshment",
      desc: "Crisp cold-pressed island cucumber, garden mint, fresh citrus spritz, and sparkling mineral water.",
      image: "/images/dish-smoothie-counter.jpg",
      icon: Droplet,
      notes: ["Cold-Pressed", "Zero Refined Sugar", "Hydrating"],
    },
    {
      name: "Single-Origin Espresso Tonic",
      category: "Specialty Coffee",
      tag: "Barista Special",
      desc: "Chilled Mediterranean botanical tonic water crowned with a double shot of seasonal light roast espresso and charred citrus.",
      image: "/images/hero-ambience.jpg",
      icon: Coffee,
      notes: ["Single Origin", "Sparkling Tonic", "Citrus Twist"],
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-[#FAF7F2] border-b border-[#2A1B12]/8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-[#B98A55]" />
            <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-[#B98A55]">
              SIGNATURE DRINKS
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#17110D] font-normal tracking-tight mb-4">
            “Beautifully crafted. <br />
            <span className="italic text-[#B98A55]">Refreshingly different.”</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#6A5546] font-light leading-relaxed">
            From ceremonial Japanese matcha to delicate cold-pressed elixirs and artisan pour-overs, every beverage at Beru is prepared with mindfulness and artistic precision.
          </p>
        </div>

        {/* Asymmetric Showcase: 1 Hero Spotlight + 2 Paired Beverages */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column: Spotlight Drink (Rose Matcha with Lazy Video) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col rounded-3xl overflow-hidden bg-white border border-[#2A1B12]/8 shadow-[0_8px_30px_rgba(42,27,18,0.04)]"
          >
            <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden bg-[#F4EBDD]">
              <LazyVideo
                src={spotlightDrink.video}
                poster={spotlightDrink.poster}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-semibold bg-[#FAF6F0]/95 backdrop-blur-md text-[#17110D] border border-[#2A1B12]/10 shadow-sm flex items-center gap-1.5">
                  <Leaf className="w-3 h-3 text-[#B98A55]" />
                  {spotlightDrink.tag}
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#B98A55] font-semibold block mb-1">
                  {spotlightDrink.category}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#17110D] font-normal mb-3">
                  {spotlightDrink.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#6A5546] font-light leading-relaxed mb-6">
                  {spotlightDrink.desc}
                </p>

                {/* Flavor Notes */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {spotlightDrink.notes.map((note) => (
                    <span
                      key={note}
                      className="px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#2A1B12]/8 text-[11px] text-[#2A1B12] font-medium"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href="/menu"
                className="touch-target inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#17110D] hover:text-[#B98A55] transition-colors pt-4 border-t border-[#2A1B12]/8"
              >
                <span>Discover Matcha Menu</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: 2 Paired Drinks Stack */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            {secondaryDrinks.map((drink, idx) => {
              const Icon = drink.icon;
              return (
                <motion.div
                  key={drink.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="group flex flex-col sm:flex-row lg:flex-col rounded-3xl overflow-hidden bg-white border border-[#2A1B12]/8 shadow-[0_8px_30px_rgba(42,27,18,0.04)] flex-1"
                >
                  <div className="relative aspect-[16/9] sm:aspect-square lg:aspect-[16/9] sm:w-48 lg:w-full overflow-hidden bg-[#FAF6F0] shrink-0">
                    <Image
                      src={drink.image}
                      alt={drink.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 400px"
                      className="object-cover img-reveal"
                    />
                    <div className="absolute top-3.5 left-3.5">
                      <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.18em] font-semibold bg-[#FAF6F0]/95 backdrop-blur-md text-[#17110D] border border-[#2A1B12]/10 shadow-sm flex items-center gap-1.5">
                        <Icon className="w-3 h-3 text-[#B98A55]" />
                        {drink.tag}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.25em] text-[#B98A55] font-semibold block mb-1">
                        {drink.category}
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl text-[#17110D] font-normal mb-2 group-hover:text-[#B98A55] transition-colors">
                        {drink.name}
                      </h3>
                      <p className="text-xs text-[#6A5546] font-light leading-relaxed mb-4">
                        {drink.desc}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {drink.notes.map((note) => (
                        <span
                          key={note}
                          className="px-2.5 py-0.5 rounded-full bg-[#FAF7F2] border border-[#2A1B12]/8 text-[10px] text-[#2A1B12]"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
