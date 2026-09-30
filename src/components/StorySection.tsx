"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function StorySection() {
  return (
    <section className="relative py-28 md:py-40 bg-[#FAF7F2] overflow-hidden">
      {/* Ambient background glows */}
      <div className="ambient-orb w-[600px] h-[600px] bg-[#E4C8BA]/25 -top-20 -left-40 animate-orb" />
      <div className="ambient-orb w-[400px] h-[400px] bg-[#4E5E48]/10 bottom-0 right-[-100px] animate-orb-reverse" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">

          {/* Left Column: Photography */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            {/* Primary Large Vertical Image */}
            <div className="relative aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-[#E4C8BA]/60 group card-hover-glow">
              <Image
                src="/images/exterior-facade.jpg"
                alt="Beru Café Colombo - Iconic illuminated shell sign, sage green shutters, and tropical greenery"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Floating Architectural Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#E4C8BA] shadow-lg flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#B98A55] font-semibold">
                    Architecture & Soul
                  </p>
                  <p className="font-serif italic text-sm text-[#2A1B12] mt-0.5 font-medium">
                    Colombo Tropical Modernism
                  </p>
                </div>
                <div className="text-[#B98A55] animate-float">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Overlapping Detail Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="hidden sm:block absolute -bottom-10 -right-10 w-60 aspect-square rounded-2xl overflow-hidden border-[4px] border-white shadow-2xl"
            >
              <Image
                src="/images/dish-fish-ambience.jpg"
                alt="Thoughtful culinary presentation at Beru Cafe"
                fill
                sizes="240px"
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Right Column: Editorial Copy */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-8 h-[1px] bg-[#B98A55]" />
              <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#B98A55]">
                OUR STORY
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#2A1B12] font-normal leading-[1.05] mb-7">
              More Than{" "}
              <br />
              <span className="italic text-[#B98A55]">Just a Café</span>
            </h2>

            {/* Ornament */}
            <div className="ornament-divider mb-7 max-w-xs">
              <span className="text-[#B98A55] text-xs">✦</span>
            </div>

            <div className="space-y-5 text-sm sm:text-base text-[#6A5546] font-normal leading-relaxed mb-8">
              <p>
                Beru Café is a space created for people who appreciate thoughtfully prepared food, beautifully crafted drinks, and a calm, unhurried atmosphere.
              </p>
              <p>
                Tucked quietly into Thimbirigasyaya Place, our sanctuary unites Scandinavian minimalism with Colombo's warm tropical hospitality. From our warm terracotta tones and sunlit breeze-block courtyard to our slow-poured single-origin brews, every detail is crafted to make your visit feel a little more special.
              </p>
              <p>
                Whether you drop in for your ritual morning iced matcha, gather over an artisanal brunch, or find a peaceful nook to slow down, you are warmly invited to stay as long as you like.
              </p>
            </div>

            {/* Script Accent */}
            <div className="font-serif italic text-xl text-[#B98A55] mb-9 select-none font-medium">
              Good Food • Good Mood ~
            </div>

            <div>
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.28em] font-semibold text-[#2A1B12] hover:text-[#B98A55] transition-colors py-2 border-b border-[#2A1B12]/30 hover:border-[#B98A55]"
              >
                <span>Discover Our Story</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
