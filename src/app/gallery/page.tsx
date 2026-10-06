"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, Eye, X } from "lucide-react";
import { InstagramIcon } from "@/components/Icons";
import { BERU_INFO } from "@/data/cafeData";
import LazyVideo from "@/components/LazyVideo";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; desc: string } | null>(null);

  const images = [
    {
      src: "/images/exterior-facade.jpg",
      video: "/videos/beru-cafe-tour.mp4",
      title: "Prettiest Café in Colombo",
      desc: "Authentic opening walkthrough of Beru Café at 29, Thimbirigasyaya Place.",
      category: "Reel",
      aspect: "aspect-[3/4]",
    },
    {
      src: "/images/dish-smoothie-green-juice.jpg",
      video: "/videos/rose-matcha.mp4",
      title: "Ceremonial Rose Matcha",
      desc: "Highest quality ceremonial Uji matcha whisked with our house-made rose syrup.",
      category: "Reel",
      aspect: "aspect-[3/4]",
    },
    {
      src: "/images/dish-pan-seared-fish.jpg",
      title: "Pan-Seared Fillet",
      desc: "Fresh ocean fish on spiced puree with terracotta floral tile setting.",
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
      title: "Bowl Detail",
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
      category: "Vibe",
      aspect: "aspect-[3/4]",
    },
    {
      src: "/images/dish-savory-croissant.jpg",
      title: "Slow-Braised Croissant",
      desc: "Buttery pastry with pickled red onions and pomegranate seeds.",
      category: "Food",
      aspect: "aspect-[3/4]",
    },
    {
      src: "/images/dish-smoothie-counter.jpg",
      title: "Terrazzo Counter Ambience",
      desc: "Curved architectural stone bar and soft ambient wall wash lighting.",
      category: "Vibe",
      aspect: "aspect-[3/4]",
    },
  ];

  return (
    <div className="pt-32 pb-28 bg-[#FAF7F2] min-h-screen">
      {/* Header */}
      <section className="px-6 md:px-12 max-w-5xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center gap-2 mb-3">
          <InstagramIcon className="w-3.5 h-3.5 text-[#B98A55]" />
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#B98A55]">
            VISUAL JOURNAL
          </span>
          <InstagramIcon className="w-3.5 h-3.5 text-[#B98A55]" />
        </div>

        <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-[#2A1B12] font-normal tracking-tight mb-6">
          Life at Beru
        </h1>

        <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#6A5546] font-normal leading-relaxed">
          Glimpses of daily rituals, quiet corners, and culinary creations. Follow our journey on Instagram at{" "}
          <a
            href={BERU_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#B98A55] hover:text-[#2A1B12] underline underline-offset-4 font-semibold"
          >
            {BERU_INFO.instagram}
          </a>
          .
        </p>
      </section>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06, duration: 0.6 }}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-2xl overflow-hidden bg-white border border-[#E4C8BA]/80 hover:border-[#B98A55] transition-all duration-500 cursor-pointer shadow-[0_8px_30px_rgba(56,36,24,0.06)] hover:shadow-xl"
            >
              <div className={`relative w-full ${item.aspect} overflow-hidden`}>
                {"video" in item && item.video ? (
                  <LazyVideo
                    src={item.video}
                    poster={item.src}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                ) : (
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                )}

                {/* Hover Reveal */}
                <div className="absolute inset-0 bg-[#2A1B12]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between backdrop-blur-[2px]">
                  <div className="self-end p-2.5 rounded-full bg-[#B98A55] text-white">
                    <Eye className="w-4 h-4" />
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#E4C8BA] font-semibold block mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-2xl text-[#FAF6F0] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#FAF6F0]/80 font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-20 text-center">
          <a
            href={BERU_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#382418] hover:bg-[#B98A55] text-[#FAF6F0] font-semibold text-xs uppercase tracking-[0.22em] transition-all shadow-xl"
          >
            <InstagramIcon className="w-4 h-4 text-[#B98A55]" />
            <span>SEE MORE ON INSTAGRAM</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Full Screen Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-[#17110D]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#2A1B12] rounded-3xl overflow-hidden border border-[#D8C2A4]/30 shadow-2xl flex flex-col"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-3 rounded-full bg-[#17110D]/80 border border-[#D8C2A4]/30 text-[#F4EBDD] hover:text-[#B98A55] transition-colors"
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

              <div className="p-6 bg-[#17110D] border-t border-[#D8C2A4]/15 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-2xl text-[#F4EBDD]">
                    {selectedImage.title}
                  </h3>
                  <p className="text-xs text-[#D8C2A4]/80 font-light mt-1">
                    {selectedImage.desc}
                  </p>
                </div>
                <a
                  href={BERU_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full border border-[#B98A55] text-xs uppercase tracking-wider text-[#B98A55] hover:bg-[#B98A55] hover:text-[#17110D] transition-colors shrink-0"
                >
                  View on Instagram
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
