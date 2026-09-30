import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Heart, Coffee, Leaf, Compass } from "lucide-react";
import { BERU_INFO } from "@/data/cafeData";

export const metadata = {
  title: "Our Story | Beru Café Colombo",
  description:
    "Learn about the philosophy, architecture, and passion behind Beru Café — an artisan sanctuary in Thimbirigasyaya, Colombo 05.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-28 bg-[#FAF7F2] min-h-screen">
      {/* Editorial Header */}
      <section className="relative px-6 md:px-12 max-w-5xl mx-auto mb-20 text-center">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-8 h-[1px] bg-[#B98A55]" />
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#B98A55]">
            OUR PHILOSOPHY
          </span>
          <span className="w-8 h-[1px] bg-[#B98A55]" />
        </div>

        <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-[#2A1B12] font-normal tracking-tight mb-8">
          A Sanctuary for <br />
          <span className="italic text-[#B98A55]">Taste & Stillness</span>
        </h1>

        <p className="max-w-3xl mx-auto text-base sm:text-lg text-[#6A5546] font-normal leading-relaxed">
          “Beru Café is a space created for people who appreciate thoughtfully prepared food, beautifully crafted drinks, and a calm atmosphere. Every detail is designed to make your visit feel a little more special.”
        </p>
      </section>

      {/* Main Narrative with Photography */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Collage */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-[#E4C8BA]/80">
              <Image
                src="/images/exterior-facade.jpg"
                alt="Beru Cafe Colombo - Front facade with illuminated shell emblem"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-[#E4C8BA]/80 shadow-md">
                <Image
                  src="/images/dish-pan-seared-fish.jpg"
                  alt="Culinary creation at Beru"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-[#E4C8BA]/80 shadow-md">
                <Image
                  src="/images/dish-smoothie-green-juice.jpg"
                  alt="Specialty matcha latte drink"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Story Details */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 text-[#6A5546] font-normal text-sm sm:text-base leading-relaxed">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2A1B12] font-semibold leading-tight">
              The Art of Slowing Down in Colombo
            </h2>

            <p>
              In a vibrant city that moves with relentless speed, Beru Café was envisioned as an antidote: an intimate sanctuary grounded in natural materials, gentle light, and warm hospitality.
            </p>

            <p>
              The name and the scallop shell emblem symbolize a quiet shelter of discovery. Drawing inspiration from tropical modernist architecture and understated Scandinavian balance, our space features textured stucco walls, breezy arched lattice screens, and handcrafted wooden counters that welcome you to linger.
            </p>

            <h3 className="font-serif text-2xl text-[#2A1B12] pt-4 font-semibold">
              Mindful Kitchen & Coffee Bar
            </h3>

            <p>
              We believe great food requires no pretension—only uncompromised ingredients, patience, and genuine care. From our vibrant grain bowls and fresh pastries to our meticulously pulled espresso and ceremonial Uji matcha, everything we prepare is an homage to mindful craft.
            </p>

            <div className="p-6 rounded-2xl bg-white border border-[#E4C8BA] shadow-[0_8px_30px_rgba(56,36,24,0.06)] space-y-3 mt-6">
              <div className="flex items-center gap-3 text-[#2A1B12] font-serif text-lg font-semibold">
                <div className="w-7 h-7 rounded-full overflow-hidden bg-[#FAF6F0] p-0.5 border border-[#B98A55] shadow-sm flex items-center justify-center shrink-0">
                  <Image
                    src="/images/beru-shell-symbol.png"
                    alt="Beru Café Shell Symbol"
                    width={28}
                    height={28}
                    className="object-contain w-full h-full"
                  />
                </div>
                <span>Visit Us at Thimbirigasyaya</span>
              </div>
              <p className="text-xs text-[#6A5546]">
                29, Thimbirigasyaya Place, Colombo 05 • Open every day from 8:00 AM to 5:30 PM.
              </p>
              <div className="pt-2">
                <Link
                  href="/#book-table"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#B98A55] hover:text-[#2A1B12] transition-colors"
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
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-[#E4C8BA]/60">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-white border border-[#E4C8BA]/80 shadow-[0_8px_30px_rgba(56,36,24,0.06)] text-center">
            <Leaf className="w-8 h-8 text-[#B98A55] mx-auto mb-4" />
            <h3 className="font-serif text-2xl text-[#2A1B12] font-semibold mb-2">Honest Ingredients</h3>
            <p className="text-xs text-[#6A5546] font-normal leading-relaxed">
              We partner with local growers and artisan suppliers to bring natural purity and vibrancy to every plate.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-[#E4C8BA]/80 shadow-[0_8px_30px_rgba(56,36,24,0.06)] text-center">
            <Coffee className="w-8 h-8 text-[#B98A55] mx-auto mb-4" />
            <h3 className="font-serif text-2xl text-[#2A1B12] font-semibold mb-2">Specialty Beverage Craft</h3>
            <p className="text-xs text-[#6A5546] font-normal leading-relaxed">
              Precision espresso extraction, cold-drip brews, and authentic stone-ground ceremonial matcha.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-[#E4C8BA]/80 shadow-[0_8px_30px_rgba(56,36,24,0.06)] text-center">
            <Heart className="w-8 h-8 text-[#B98A55] mx-auto mb-4" />
            <h3 className="font-serif text-2xl text-[#2A1B12] font-semibold mb-2">Genuine Hospitality</h3>
            <p className="text-xs text-[#6A5546] font-normal leading-relaxed">
              A serene and welcoming environment where you are recognized and treated like family.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
