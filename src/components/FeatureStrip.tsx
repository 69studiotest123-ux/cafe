"use client";

import { motion } from "framer-motion";
import { Sparkles, Coffee, Heart, Users } from "lucide-react";

export default function FeatureStrip() {
  const features = [
    {
      icon: Sparkles,
      title: "Fresh Ingredients",
      desc: "Fresh and carefully selected ingredients.",
    },
    {
      icon: Coffee,
      title: "Crafted With Care",
      desc: "Thoughtfully prepared dishes and drinks.",
    },
    {
      icon: Heart,
      title: "Cozy Atmosphere",
      desc: "A warm place to relax and enjoy.",
    },
    {
      icon: Users,
      title: "Friendly Service",
      desc: "Good food accompanied by good hospitality.",
    },
  ];

  return (
    <section className="relative z-20 border-y border-[#D8C2A4]/15 bg-[#17110D] py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 divide-y sm:divide-y-0 sm:divide-x divide-[#D8C2A4]/10">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className={`flex flex-col items-center text-center ${idx > 0 ? "pt-6 sm:pt-0 sm:pl-6 lg:pl-8" : ""}`}
              >
                <div className="w-12 h-12 rounded-full bg-[#2A1B12] border border-[#B98A55]/30 flex items-center justify-center text-[#B98A55] mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-lg tracking-wide text-[#F4EBDD] uppercase font-normal mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-[#D8C2A4]/75 max-w-[220px] leading-relaxed font-light">
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
