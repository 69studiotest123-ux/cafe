"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { InstagramIcon } from "@/components/Icons";
import { BERU_INFO } from "@/data/cafeData";
import LazyVideo from "@/components/LazyVideo";

export default function GalleryClient() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; desc: string } | null>(null);

  const images = [
    {
      src: "/images/exterior-facade.jpg",
      video: "/videos/beru-cafe-tour.mp4",
      title: "The Courtyard & Space",
      desc: "Authentic opening walkthrough of Beru Café at 29, Thimbirigasyaya Place.",
      category: "Reel",
      aspect: "aspect-[9/16]",
    },
    {
      src: "/images/dish-smoothie-green-juice.jpg",
      video: "/videos/rose-matcha.mp4",
      title: "Ceremonial Rose Matcha",
      desc: "Highest quality ceremonial Uji matcha whisked with our house-made rose syrup.",
      category: "Reel",
      aspect: "aspect-[9/16]",
    },
    {
      src: "/images/dish-pan-seared-fish.jpg",
      title: "Pan-Seared Fillet",
      desc: "Fresh ocean fish on spiced carrot puree with terracotta floral tile setting.",
      category: "Food",
      aspect: "aspect-square",
    },
    {
      src: "/images/dish-bagel-sandwich.jpg",
      title: "Artisan Breakfast Bagel",
      desc: "Golden fried egg, kale, caramelized relish, and turmeric drizzle.",
      category: "Food",
      aspect: "aspect-square",
    },
    {
      src: "/images/dish-smoothie-green-juice.jpg",
      title: "Matcha & Smoothie Bowl",
      desc: "Signature green juice alongside nutrient-packed grain and fruit bowl.",
      category: "Drinks",
      aspect: "aspect-[3/4]",
    },
    {
      src: "/images/dish-smoothie-bowl-top.jpg",
      title: "Breakfast Grain Bowl",
      desc: "Granola, ripe banana slices, and edible flower blossoms.",
      category: "Food",
      aspect: "aspect-square",
    },
    {
      src: "/images/dish-chocolate-bliss-hd.jpg",
      title: "Chocolate Bliss Pave",
      desc: "Rich dark ganache bar with 24k gold leaf and vanilla bean cream.",
      category: "Food",
      aspect: "aspect-[4/3]",
    },
    {
      src: "/images/dish-fish-ambience.jpg",
      title: "Warm Interior Tables",
      desc: "Handcrafted wooden tabletop with fresh chrysanthemum bloom.",
      category: "Space",
      aspect: "aspect-[3/4]",
    },
    {
      src: "/images/dish-savory-croissant.jpg",
      title: "Slow-Braised Croissant",
      desc: "Buttery pastry with pickled red onions and pomegranate seeds.",
      category: "Food",
      aspect: "aspect-[3/4]",
    },
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-20 sm:pb-28 bg-[#FAF7F2] min-h-screen">
      {/* Header */}
      <section className="px-4 sm:px-6 md:px-10 max-w-4xl mx-auto mb-12 sm:mb-16 text-center">
        <div className="inline-flex items-center gap-2 mb-2.5">
          <InstagramIcon className="w-3.5 h-3.5 text-[#B98A55]" />
          <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-[#B98A55]">
            VISUAL JOURNAL
          </span>
          <InstagramIcon className="w-3.5 h-3.5 text-[#B98A55]" />
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#17110D] font-normal tracking-tight mb-4">
          Life at Beru
        </h1>

        <p className="max-w-xl mx-auto text-xs sm:text-sm text-[#6A5546] font-light leading-relaxed">
          Glimpses of daily rituals, quiet corners, and culinary creations. Follow our journey on Instagram at{" "}
          <a
            href={BERU_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#B98A55] hover:text-[#17110D] underline underline-offset-4 font-medium"
          >
            {BERU_INFO.instagram}
          </a>
          .
        </p>
      </section>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {images.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-2xl overflow-hidden bg-white border border-[#2A1B12]/8 shadow-[0_4px_24px_rgba(42,27,18,0.04)] hover:shadow-md transition-all cursor-pointer"
            >
              <div className={`relative w-full ${item.aspect} overflow-hidden bg-[#FAF6F0]`}>
                {"video" in item && item.video ? (
                  <LazyVideo
                    src={item.video}
                    poster={item.src}
                    className="w-full h-full object-cover img-reveal"
                  />
                ) : (
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center img-reveal"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity pointer-events-none" />

                {/* Badge */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.18em] font-semibold bg-white/95 backdrop-blur-md text-[#2A1B12] shadow-sm">
                    {item.category}
                  </span>
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between pointer-events-none">
                  <div>
                    <h3 className="font-serif text-lg text-white font-normal leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-[#E4C8BA] font-light line-clamp-1 mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                  <div className="p-2 rounded-full bg-white/20 text-white backdrop-blur-md shrink-0 ml-2">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-[#17110D]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-[#FAF7F2] rounded-3xl overflow-hidden border border-[#2A1B12]/10 shadow-2xl flex flex-col"
            >
              <button
                onClick={() => setSelectedImage(null)}
                aria-label="Close image"
                className="touch-target absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full bg-[#17110D]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="p-5 sm:p-6 bg-white border-t border-[#2A1B12]/8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#17110D] font-medium">
                    {selectedImage.title}
                  </h3>
                  <p className="text-xs text-[#6A5546] font-light mt-0.5">
                    {selectedImage.desc}
                  </p>
                </div>
                <a
                  href={BERU_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="touch-target inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-[#2A1B12] text-xs uppercase tracking-wider text-[#FAF6F0] hover:bg-[#17110D] transition-colors shrink-0"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#B98A55]" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
