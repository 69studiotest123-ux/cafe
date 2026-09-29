"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "./Icons";
import { BERU_INFO } from "@/data/cafeData";

export default function Gallery() {
  const galleryItems = [
    {
      id: "gal-1",
      src: "/images/exterior-facade.jpg",
      video: "/videos/beru-cafe-tour.mp4",
      title: "Prettiest Café in Colombo",
      subtitle: "Official Walkthrough Reel • 29 Thimbirigasyaya",
      aspect: "aspect-[3/4] md:aspect-[3/4]",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-4",
    },
    {
      id: "gal-2",
      src: "/images/dish-pan-seared-fish.jpg",
      title: "Pan-Seared Fillet",
      subtitle: "Spiced carrot puree & wild mushrooms",
      aspect: "aspect-square",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-4",
    },
    {
      id: "gal-3",
      src: "/images/dish-smoothie-green-juice.jpg",
      title: "Ceremonial Matcha & Bowls",
      subtitle: "Morning ritual at the terrazzo counter",
      aspect: "aspect-[3/4]",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-4",
    },
    {
      id: "gal-4",
      src: "/images/dish-bagel-sandwich.jpg",
      title: "Artisan Bagel Plate",
      subtitle: "Golden yolk, crisp kale & turmeric swirl",
      aspect: "aspect-square",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-4",
    },
    {
      id: "gal-5",
      src: "/images/dish-chocolate-bliss-hd.jpg",
      title: "Chocolate Bliss",
      subtitle: "Dark ganache pave with 24k gold leaf",
      aspect: "aspect-[4/3] md:aspect-square",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-4",
    },
    {
      id: "gal-6",
      src: "/images/dish-savory-croissant.jpg",
      title: "Laminated Croissant",
      subtitle: "Slow braised filling with ruby pomegranate",
      aspect: "aspect-[3/4]",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-4",
    },
  ];

  return (
    <section className="relative py-28 md:py-40 bg-[#17110D] border-t border-[#D8C2A4]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <InstagramIcon className="w-3.5 h-3.5 text-[#B98A55]" />
            <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#B98A55]">
              FROM BERU
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl text-[#F4EBDD] font-normal tracking-tight mb-3">
            {BERU_INFO.instagram}
          </h2>

          <p className="text-xs sm:text-sm text-[#D8C2A4]/70 uppercase tracking-[0.2em]">
            Moments, Flavors & Colombo Café Culture
          </p>
        </div>

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-6">
          {galleryItems.map((item, idx) => (
            <motion.a
              key={item.id}
              href={BERU_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.08, duration: 0.7 }}
              className={`group relative rounded-2xl overflow-hidden bg-[#2A1B12] border border-[#D8C2A4]/15 ${item.colSpan}`}
            >
              <div className={`relative w-full ${item.aspect} overflow-hidden`}>
                {"video" in item && item.video ? (
                  <video
                    src={item.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                ) : (
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                )}

                {/* Dark Hover Overlay */}
                <div className="absolute inset-0 bg-[#17110D]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-between p-6 backdrop-blur-[2px]">
                  <div className="self-end p-2.5 rounded-full bg-[#B98A55] text-[#17110D]">
                    <InstagramIcon className="w-4 h-4" />
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#B98A55] font-semibold block mb-1">
                      {item.subtitle}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#F4EBDD] font-normal">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#D8C2A4]/80 flex items-center gap-1.5 mt-2">
                      <span>View on Instagram</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </p>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Follow CTA */}
        <div className="mt-16 text-center">
          <a
            href={BERU_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[#B98A55] bg-[#2A1B12]/50 hover:bg-[#B98A55] text-[#F4EBDD] hover:text-[#17110D] font-medium text-xs uppercase tracking-[0.22em] transition-all duration-300 shadow-xl"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>FOLLOW US ON INSTAGRAM</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
