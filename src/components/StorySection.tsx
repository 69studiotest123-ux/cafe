"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function StorySection() {
  return (
    <section className="relative py-24 md:py-36 bg-[#17110D] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Architectural & Cafe Photography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            {/* Primary Large Vertical Image */}
            <div className="relative aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-[#D8C2A4]/20 group">
              <Image
                src="/images/exterior-facade.jpg"
                alt="Beru Café Colombo - Iconic illuminated shell sign, sage green shutters, and tropical greenery"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17110D]/70 via-transparent to-transparent" />

              {/* Floating Architectural Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#17110D]/85 backdrop-blur-md border border-[#D8C2A4]/20 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#B98A55] font-medium">
                    Architecture & Soul
                  </p>
                  <p className="font-serif italic text-sm text-[#F4EBDD]">
                    Colombo Tropical Modernism
                  </p>
                </div>
                <div className="text-[#B98A55]">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Overlapping Detail Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="hidden sm:block absolute -bottom-8 -right-8 w-56 aspect-square rounded-xl overflow-hidden border-2 border-[#17110D] shadow-2xl"
            >
              <Image
                src="/images/dish-fish-ambience.jpg"
                alt="Thoughtful culinary presentation at Beru Cafe"
                fill
                sizes="224px"
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Right Column: Editorial Copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-[#B98A55]" />
              <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#B98A55]">
                OUR STORY
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F4EBDD] font-normal leading-[1.08] mb-6">
              More Than <br />
              <span className="italic text-[#D8C2A4]">Just a Café</span>
            </h2>

            <div className="space-y-5 text-sm sm:text-base text-[#D8C2A4]/80 font-light leading-relaxed mb-8">
              <p>
                Beru Café is a space created for people who appreciate thoughtfully prepared food, beautifully crafted drinks, and a calm, unhurried atmosphere.
              </p>
              <p>
                Tucked quietly into Thimbirigasyaya Place, our sanctuary unites Scandinavian minimalism with Colombo’s warm tropical hospitality. From our warm terracotta tones and sunlit breeze-block courtyard to our slow-poured single-origin brews, every detail is crafted to make your visit feel a little more special.
              </p>
              <p>
                Whether you drop in for your ritual morning iced matcha, gather over an artisanal brunch, or find a peaceful nook to slow down, you are warmly invited to stay as long as you like.
              </p>
            </div>

            {/* Script Accent */}
            <div className="font-serif italic text-2xl text-[#B98A55]/90 mb-8 select-none">
              Good Food • Good Mood ~
            </div>

            <div>
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-medium text-[#F4EBDD] hover:text-[#B98A55] transition-colors py-2 border-b border-[#D8C2A4]/30 hover:border-[#B98A55]"
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
