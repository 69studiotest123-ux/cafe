"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "./Icons";
import { BERU_INFO } from "@/data/cafeData";
import LazyVideo from "./LazyVideo";

export default function Gallery() {
  const moments = [
    {
      id: "gal-tour",
      type: "video",
      video: "/videos/beru-cafe-tour.mp4",
      poster: "/images/exterior-facade.jpg",
      title: "The Courtyard & Space",
      caption: "Walkthrough of our sunlit café at 29, Thimbirigasyaya Place",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-7",
      aspect: "aspect-[16/10] sm:aspect-[16/10]",
    },
    {
      id: "gal-fish",
      type: "image",
      src: "/images/dish-pan-seared-fish.jpg",
      title: "Pan-Seared Ocean Fish",
      caption: "Spiced carrot puree & wild mushroom ragout",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-5",
      aspect: "aspect-[4/3] sm:aspect-[4/3]",
    },
    {
      id: "gal-matcha",
      type: "image",
      src: "/images/dish-smoothie-green-juice.jpg",
      title: "Ceremonial Matcha Ritual",
      caption: "Stone-ground Uji matcha whisked fresh at the counter",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-4",
      aspect: "aspect-square",
    },
    {
      id: "gal-bagel",
      type: "image",
      src: "/images/dish-bagel-sandwich.jpg",
      title: "Artisan Egg & Relish Bagel",
      caption: "Farm sunny egg, organic kale & turmeric drizzle",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-4",
      aspect: "aspect-square",
    },
    {
      id: "gal-choc",
      type: "image",
      src: "/images/dish-chocolate-bliss-hd.jpg",
      title: "Chocolate Bliss Pave",
      caption: "Dark ganache with delicate 24k gold leaf flakes",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-4",
      aspect: "aspect-square",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-[#F4EBDD]/40 border-b border-[#2A1B12]/8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-2.5">
              <span className="w-6 h-[1.5px] bg-[#B98A55]" />
              <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-[#B98A55]">
                VISUAL DIARY
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#17110D] font-normal tracking-tight">
              Life at Beru Café
            </h2>
          </div>

          <a
            href={BERU_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="touch-target group inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-medium text-[#17110D] hover:text-[#B98A55] transition-colors py-2"
          >
            <InstagramIcon className="w-4 h-4 text-[#B98A55]" />
            <span>Follow {BERU_INFO.instagram}</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-5 sm:gap-6">
          {moments.map((item, idx) => (
            <motion.a
              key={item.id}
              href={BERU_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className={`group relative rounded-2xl overflow-hidden bg-white border border-[#2A1B12]/8 shadow-[0_4px_24px_rgba(42,27,18,0.04)] ${item.colSpan}`}
            >
              <div className={`relative w-full ${item.aspect} overflow-hidden bg-[#FAF6F0]`}>
                {item.type === "video" && item.video ? (
                  <LazyVideo
                    src={item.video}
                    poster={item.poster}
                    className="w-full h-full object-cover img-reveal"
                  />
                ) : (
                  <Image
                    src={item.src!}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover img-reveal"
                  />
                )}

                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Bottom Editorial Caption */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 flex items-end justify-between">
                  <div className="text-white">
                    <h3 className="font-serif text-lg sm:text-xl font-normal leading-snug drop-shadow-sm">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#E4C8BA] font-light mt-0.5 line-clamp-1">
                      {item.caption}
                    </p>
                  </div>
                  <div className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white group-hover:bg-[#B98A55] group-hover:text-[#17110D] transition-colors shrink-0 ml-3">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
