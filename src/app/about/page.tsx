import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Leaf, Coffee, Heart } from "lucide-react";
import { BERU_INFO } from "@/data/cafeData";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story & Space",
  description:
    "Learn about the philosophy, tropical modernist architecture, and culinary passion behind Beru Café in Thimbirigasyaya, Colombo 05.",
  alternates: {
    canonical: "https://berucafe.lk/about",
  },
  openGraph: {
    title: "Our Story & Space | Beru Café Colombo",
    description: "An unhurried sanctuary in the heart of Colombo 05 celebrating thoughtful food and mindful hospitality.",
    url: "https://berucafe.lk/about",
    images: [
      {
        url: "/images/exterior-facade.jpg",
        width: 1200,
        height: 630,
        alt: "Beru Café Colombo architectural facade",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Story | Beru Café Colombo",
    description: "The philosophy and architecture behind Beru Café.",
    images: ["/images/exterior-facade.jpg"],
  },
};

export default function AboutPage() {
  return (
    <div className="pt-24 sm:pt-28 pb-20 sm:pb-28 bg-[#FAF7F2] min-h-screen">
      {/* Editorial Header */}
      <section className="relative px-4 sm:px-6 md:px-10 max-w-4xl mx-auto mb-14 sm:mb-20 text-center">
        <div className="inline-flex items-center gap-2 mb-2.5">
          <span className="w-6 h-[1.5px] bg-[#B98A55]" />
          <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-[#B98A55]">
            OUR PHILOSOPHY
          </span>
          <span className="w-6 h-[1.5px] bg-[#B98A55]" />
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#17110D] font-normal tracking-tight mb-6">
          A Sanctuary for <br />
          <span className="italic text-[#B98A55]">Taste & Stillness</span>
        </h1>

        <p className="max-w-2xl mx-auto text-xs sm:text-sm text-[#6A5546] font-light leading-relaxed">
          “Beru Café is an unhurried retreat in Colombo created for people who appreciate thoughtfully prepared cuisine, ceremonial pours, and natural architectural light.”
        </p>
      </section>

      {/* Main Narrative with Photography */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 mb-20 sm:mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Asymmetric Image Collage */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-[#2A1B12]/8 shadow-[0_8px_32px_rgba(42,27,18,0.06)] bg-[#F4EBDD]">
              <Image
                src="/images/exterior-facade.jpg"
                alt="Beru Cafe Colombo - Front facade with illuminated shell emblem"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover img-reveal"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-[#2A1B12]/8 shadow-sm">
                <Image
                  src="/images/dish-pan-seared-fish.jpg"
                  alt="Culinary creation at Beru"
                  fill
                  sizes="25vw"
                  className="object-cover img-reveal"
                />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-[#2A1B12]/8 shadow-sm">
                <Image
                  src="/images/dish-smoothie-green-juice.jpg"
                  alt="Specialty matcha latte drink"
                  fill
                  sizes="25vw"
                  className="object-cover img-reveal"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Story Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-5 text-[#6A5546] font-light text-xs sm:text-sm leading-relaxed">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#17110D] font-medium leading-snug">
              The Art of Slowing Down in Colombo
            </h2>

            <p>
              In a city that moves with relentless speed, Beru Café was envisioned as an antidote: an intimate sanctuary grounded in natural materials, gentle tropical light, and warm hospitality.
            </p>

            <p>
              The scallop shell emblem symbolizes a quiet shelter of discovery. Drawing inspiration from tropical modernist architecture, our space features textured cream stucco, airy arched screens, and warm timber surfaces that welcome you to stay awhile.
            </p>

            <h3 className="font-serif text-xl sm:text-2xl text-[#17110D] pt-3 font-medium">
              Mindful Kitchen & Coffee Bar
            </h3>

            <p>
              We believe great food requires no pretension—only uncompromised ingredients, patience, and genuine care. From vibrant grain bowls and flaky morning bakes to meticulously extracted espresso and ceremonial Japanese matcha, everything we prepare is an homage to mindful craft.
            </p>

            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#2A1B12]/8 shadow-[0_4px_24px_rgba(42,27,18,0.04)] space-y-2.5 mt-4">
              <p className="font-serif text-base text-[#17110D] font-medium">
                Beru Café Colombo
              </p>
              <p className="text-xs text-[#6A5546]">
                {BERU_INFO.address} • Open daily from {BERU_INFO.hours}.
              </p>
              <div className="pt-2">
                <Link
                  href="/#book-table"
                  className="touch-target inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] font-semibold text-[#B98A55] hover:text-[#17110D] transition-colors"
                >
                  <span>Book Your Visit</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Core Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-14 sm:py-16 border-t border-[#2A1B12]/8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#2A1B12]/8 shadow-[0_4px_20px_rgba(42,27,18,0.03)] text-center">
            <Leaf className="w-6 h-6 text-[#B98A55] mx-auto mb-3" />
            <h3 className="font-serif text-xl text-[#17110D] font-medium mb-1.5">Honest Ingredients</h3>
            <p className="text-xs text-[#6A5546] font-light leading-relaxed">
              We partner with local growers and trusted producers to bring natural freshness to every plate.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#2A1B12]/8 shadow-[0_4px_20px_rgba(42,27,18,0.03)] text-center">
            <Coffee className="w-6 h-6 text-[#B98A55] mx-auto mb-3" />
            <h3 className="font-serif text-xl text-[#17110D] font-medium mb-1.5">Specialty Beverage Craft</h3>
            <p className="text-xs text-[#6A5546] font-light leading-relaxed">
              Single-origin espresso extraction, sparkling cold elixirs, and authentic ceremonial Japanese Uji matcha.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#2A1B12]/8 shadow-[0_4px_20px_rgba(42,27,18,0.03)] text-center">
            <Heart className="w-6 h-6 text-[#B98A55] mx-auto mb-3" />
            <h3 className="font-serif text-xl text-[#17110D] font-medium mb-1.5">Genuine Hospitality</h3>
            <p className="text-xs text-[#6A5546] font-light leading-relaxed">
              A calm, welcoming sanctuary where conversations unfold naturally and every guest is valued.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
