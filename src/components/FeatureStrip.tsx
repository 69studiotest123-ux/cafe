"use client";

import { motion } from "framer-motion";
import { Sparkles, Coffee, Heart, Users } from "lucide-react";

export default function FeatureStrip() {
  const features = [
    {
      icon: Sparkles,
      title: "Fresh Ingredients",
      desc: "Fresh and carefully selected ingredients, every single day.",
    },
    {
      icon: Coffee,
      title: "Crafted With Care",
      desc: "Thoughtfully prepared dishes and drinks, made with precision.",
    },
    {
      icon: Heart,
      title: "Cozy Atmosphere",
      desc: "A warm, unhurried space to relax and truly enjoy.",
    },
    {
      icon: Users,
      title: "Friendly Service",
      desc: "Good food always accompanied by warm, genuine hospitality.",
    },
  ];

  return (
    <section className="relative z-20 border-y border-[#E4C8BA]/60 bg-[#FAF6F0] bg-grain py-12 md:py-16 overflow-hidden">
      {/* Ambient background glow */}
      <div className="ambient-orb w-[500px] h-[300px] bg-[#E4C8BA]/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orb" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#E4C8BA]/60">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.12, duration: 0.65 }}
                whileHover={{ y: -4 }}
                className={`flex flex-col items-center text-center group ${idx > 0 ? "pt-8 sm:pt-0 sm:pl-8 lg:pl-10" : ""}`}
              >
                {/* Glowing icon ring */}
                <div className="relative mb-5">
                  <div className="w-14 h-14 rounded-full bg-white border border-[#E4C8BA] shadow-sm group-hover:border-[#B98A55] flex items-center justify-center text-[#B98A55] transition-all duration-500 group-hover:shadow-md">
                    <Icon className="w-5 h-5 stroke-[1.5] transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  {/* Outer glow ring on hover */}
                  <div className="absolute inset-0 rounded-full border border-[#B98A55]/0 group-hover:border-[#B98A55]/25 scale-125 transition-all duration-500" />
                </div>

                <h3 className="font-serif text-lg tracking-wide text-[#2A1B12] font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#6A5546] max-w-[200px] leading-relaxed font-normal">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
