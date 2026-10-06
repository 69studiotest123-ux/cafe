"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, MessageSquare, Navigation, ArrowUpRight } from "lucide-react";
import { BERU_INFO } from "@/data/cafeData";

export default function VisitSection() {
  return (
    <section id="visit-us" className="relative py-16 sm:py-24 lg:py-32 bg-[#FAF7F2] border-b border-[#2A1B12]/8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-2.5">
            <span className="w-6 h-[1.5px] bg-[#B98A55]" />
            <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-[#B98A55]">
              COME VISIT US
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#17110D] font-normal tracking-tight mb-3">
            A Place Worth <br />
            <span className="italic text-[#B98A55]">Slowing Down For</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#6A5546] font-light leading-relaxed">
            Quietly situated along Thimbirigasyaya Place, Colombo 05. Whether you are stepping in for an unhurried morning espresso or catching up with friends in the courtyard, our doors are open every day.
          </p>
        </div>

        {/* Location & Map Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">
          {/* Information & Action Cards (Left) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-4 sm:space-y-5"
          >
            {/* Address Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#2A1B12]/8 shadow-[0_4px_24px_rgba(42,27,18,0.04)]">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-full bg-[#FAF7F2] border border-[#2A1B12]/8 text-[#B98A55] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#17110D] font-medium mb-1">
                    Café Location
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6A5546] font-light leading-relaxed">
                    {BERU_INFO.address}
                  </p>
                  <p className="text-[11px] text-[#B98A55] font-mono mt-1">
                    Colombo 05, Western Province
                  </p>
                </div>
              </div>
            </div>

            {/* Operating Hours Card with Status */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#2A1B12]/8 shadow-[0_4px_24px_rgba(42,27,18,0.04)]">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-full bg-[#FAF7F2] border border-[#2A1B12]/8 text-[#B98A55] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="font-serif text-xl text-[#17110D] font-medium">
                      Opening Hours
                    </h3>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] font-medium uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                      Open Today
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#17110D] font-medium">
                    {BERU_INFO.hours}
                  </p>
                  <p className="text-[11px] text-[#6A5546] font-light mt-0.5">
                    {BERU_INFO.openingDays} (Monday – Sunday)
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Contact & Quick CTAs */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#2A1B12]/8 shadow-[0_4px_24px_rgba(42,27,18,0.04)] flex flex-col gap-3">
              <a
                href={BERU_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="touch-target flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-[#2A1B12] hover:bg-[#17110D] text-[#FAF6F0] text-xs font-semibold uppercase tracking-[0.18em] transition-all shadow-sm active:scale-[0.98]"
              >
                <Navigation className="w-4 h-4 text-[#B98A55]" />
                <span>Get Directions (Google Maps)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <a
                  href={BERU_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="touch-target flex items-center justify-center gap-1.5 py-3 rounded-full border border-[#2A1B12]/15 hover:border-[#2A1B12] bg-[#FAF7F2] text-[#2A1B12] text-xs font-medium transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#B98A55]" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={`tel:${BERU_INFO.phoneTel}`}
                  className="touch-target flex items-center justify-center gap-1.5 py-3 rounded-full border border-[#2A1B12]/15 hover:border-[#2A1B12] bg-[#FAF7F2] text-[#2A1B12] text-xs font-medium transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B98A55]" />
                  <span>Call Us</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Interactive Map Frame (Right) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="relative flex-grow min-h-[340px] sm:min-h-[420px] rounded-3xl overflow-hidden border border-[#2A1B12]/8 bg-white shadow-[0_8px_30px_rgba(42,27,18,0.04)]">
              <iframe
                title="Beru Cafe Location Map"
                src="https://maps.google.com/maps?q=29+Thimbirigasyaya+Place,+Colombo+05,+Sri+Lanka&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Map Chip */}
              <div className="absolute top-4 left-4 z-10 p-3 sm:p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#2A1B12]/10 shadow-sm max-w-xs">
                <p className="font-serif text-base text-[#17110D] font-medium leading-none mb-1">
                  Beru Café Colombo
                </p>
                <p className="text-[11px] text-[#6A5546]">
                  29, Thimbirigasyaya Place, Colombo 05
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
