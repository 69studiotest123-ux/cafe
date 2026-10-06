"use client";

import { motion } from "framer-motion";
import { Sparkles, Coffee, Building2, HeartHandshake } from "lucide-react";

export default function FeatureStrip() {
  const pillars = [
    {
      num: "01",
      icon: Sparkles,
      title: "Sourced with Care",
      desc: "Fresh morning deliveries and carefully selected local ingredients, prepared from scratch daily.",
    },
    {
      num: "02",
      icon: Coffee,
      title: "Artisan Brews",
      desc: "Ceremonial grade Japanese Uji matcha and expertly pulled single-origin specialty espresso.",
    },
    {
      num: "03",
      icon: Building2,
      title: "Tropical Sanctuary",
      desc: "A warm, sunlit space along Thimbirigasyaya Place designed for unhurried conversations.",
    },
    {
      num: "04",
      icon: HeartHandshake,
      title: "Thoughtful Hospitality",
      desc: "Genuine warmth, attentive service, and an open welcome every single day of the week.",
    },
  ];

  return (
    <section className="relative border-b border-[#2A1B12]/8 bg-[#F4EBDD]/40 py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Mobile: Clean 2x2 grid; Desktop: 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#2A1B12]/8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className={`flex flex-col ${idx > 0 ? "pt-6 sm:pt-0 sm:pl-6 lg:pl-8" : ""}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono tracking-widest text-[#B98A55] font-semibold">
                    {item.num}
                  </span>
                  <div className="p-2 rounded-full bg-[#FAF7F2] border border-[#2A1B12]/8 text-[#2A1B12]">
                    <Icon className="w-4 h-4 text-[#B98A55]" />
                  </div>
                </div>

                <h3 className="font-serif text-lg text-[#17110D] font-medium mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6A5546] font-light leading-relaxed">
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
