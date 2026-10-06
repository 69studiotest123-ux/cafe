"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight, Droplet, Coffee, Leaf } from "lucide-react";
import LazyVideo from "./LazyVideo";

export default function SpecialtyDrinks() {
  const drinks = [
    {
      name: "Artisan Rose Matcha",
      category: "Ceremonial Matcha",
      desc: "Highest quality ceremonial grade Japanese Uji matcha paired with our delicate house-made rose syrup and silky chilled milk.",
      tag: "Signature Reel",
      video: "/videos/rose-matcha.mp4",
      image: "/images/dish-smoothie-green-juice.jpg",
      icon: Leaf,
    },
    {
      name: "Botanical Cucumber Cooler",
      category: "Cold-Pressed & Herbals",
      desc: "Crisp cold-pressed local cucumber, garden-picked sweet mint, citrus spritz, and sparkling mineral water.",
      tag: "Refreshingly Different",
      image: "/images/dish-smoothie-counter.jpg",
      icon: Droplet,
    },
    {
      name: "Single-Origin Espresso Tonic",
      category: "Specialty Coffee",
      desc: "Crisp Mediterranean tonic water crowned with a vibrant double shot of seasonal light roast espresso and charred citrus.",
      tag: "Barista Special",
      image: "/images/hero-ambience.jpg",
      icon: Coffee,
    },
  ];

  return (
    <section className="relative py-28 md:py-40 bg-[#FAF7F2] overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-[#E4C8BA]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 rounded-full bg-[#B98A55]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Editorial Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#B98A55]" />
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#B98A55]">
              SPECIALTY DRINKS
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#B98A55]" />
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl text-[#2A1B12] font-normal tracking-tight mb-4">
            “Beautifully crafted. <br />
            <span className="italic text-[#B98A55]">Refreshingly different.”</span>
          </h2>

          <p className="text-sm sm:text-base text-[#6A5546] font-normal leading-relaxed">
            From ceremonial Japanese matcha to delicate cold-pressed elixirs and artisan pour-overs, every beverage at Beru is prepared with mindfulness and artistic precision.
          </p>
        </div>

        {/* 3 Large Cinematic Beverage Showcases */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {drinks.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.15, duration: 0.8 }}
                className="group relative rounded-3xl overflow-hidden bg-white border border-[#E4C8BA]/80 hover:border-[#B98A55] shadow-[0_8px_30px_rgba(56,36,24,0.06)] hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
              >
                {/* Image or Video */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#FAF6F0]">
                  {"video" in item && item.video ? (
                    <LazyVideo
                      src={item.video}
                      poster={item.image}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  ) : (
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  {/* Top Tag */}
                  <div className="absolute top-5 left-5">
                    <span className="px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-semibold bg-white/95 backdrop-blur-md text-[#2A1B12] border border-[#E4C8BA] shadow-sm flex items-center gap-1.5">
                      <Icon className="w-3 h-3 text-[#B98A55]" />
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-grow justify-between bg-white">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#B98A55] font-semibold block mb-1.5">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-2xl text-[#2A1B12] font-medium group-hover:text-[#B98A55] transition-colors mb-3">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6A5546] font-normal leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>

                  <Link
                    href="/menu#matcha"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#2A1B12] group-hover:text-[#B98A55] transition-colors pt-4 border-t border-[#E4C8BA]/40"
                  >
                    <span>Discover Drink</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
