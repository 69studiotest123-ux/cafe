"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail, ArrowUpRight, Navigation, Sparkles } from "lucide-react";
import Image from "next/image";
import { InstagramIcon } from "./Icons";
import { BERU_INFO } from "@/data/cafeData";

export default function VisitSection() {
  return (
    <section id="visit-us" className="relative py-28 md:py-40 bg-[#17110D] border-t border-[#D8C2A4]/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#B98A55]" />
            <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#B98A55]">
              COME VISIT US
            </span>
            <span className="w-6 h-[1px] bg-[#B98A55]" />
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl text-[#F4EBDD] font-normal tracking-tight mb-4">
            A Place Worth <br />
            <span className="italic text-[#D8C2A4]">Slowing Down For</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#D8C2A4]/75 font-light leading-relaxed">
            Quietly situated along Thimbirigasyaya Place, Colombo 05. Whether stepping inside for an unhurried morning espresso or catching up with friends in the courtyard, our doors are open every day.
          </p>
        </div>

        {/* Location & Details Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Information Cards (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            {/* Address Card */}
            <div className="p-7 rounded-2xl bg-[#2A1B12]/70 border border-[#D8C2A4]/15 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[#17110D] border border-[#B98A55]/40 text-[#B98A55]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#F4EBDD] font-normal mb-1">
                    Location
                  </h3>
                  <p className="text-sm text-[#D8C2A4] font-light leading-relaxed">
                    {BERU_INFO.address}
                  </p>
                  <p className="text-xs text-[#D8C2A4]/60 mt-1">
                    Colombo, Western Province, Sri Lanka
                  </p>
                  <a
                    href={BERU_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#B98A55] hover:text-[#F4EBDD] transition-colors mt-3 uppercase tracking-wider font-medium"
                  >
                    <span>Open in Google Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="p-7 rounded-2xl bg-[#2A1B12]/70 border border-[#D8C2A4]/15 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[#17110D] border border-[#B98A55]/40 text-[#B98A55]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#F4EBDD] font-normal mb-1">
                    Opening Hours
                  </h3>
                  <p className="text-sm text-[#D8C2A4] font-light">
                    Every Day: <span className="text-[#F4EBDD] font-medium">{BERU_INFO.hours}</span>
                  </p>
                  <span className="inline-block mt-2 px-3 py-0.5 rounded-full text-[10px] uppercase tracking-widest font-semibold bg-[#4E5E48]/40 text-[#D8C2A4] border border-[#4E5E48]/50">
                    We're Open All 7 Days
                  </span>
                </div>
              </div>
            </div>

            {/* Contact & Social Card */}
            <div className="p-7 rounded-2xl bg-[#2A1B12]/70 border border-[#D8C2A4]/15 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[#17110D] border border-[#B98A55]/40 text-[#B98A55]">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#F4EBDD] font-normal mb-1">
                    Connect With Us
                  </h3>
                  <p className="text-sm text-[#D8C2A4] font-light mb-2">
                    Follow daily specials, kitchen stories, and coffee rituals.
                  </p>
                  <div className="flex flex-wrap gap-4 text-xs font-medium uppercase tracking-wider">
                    <a
                      href={BERU_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#B98A55] hover:text-[#F4EBDD] transition-colors"
                    >
                      {BERU_INFO.instagram}
                    </a>
                    <span className="text-[#D8C2A4]/30">•</span>
                    <a
                      href={BERU_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D8C2A4] hover:text-[#F4EBDD] transition-colors"
                    >
                      WhatsApp Message
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interactive Map & Direct Directions (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="relative flex-grow min-h-[380px] lg:min-h-[460px] rounded-3xl overflow-hidden border border-[#D8C2A4]/20 bg-[#221812] shadow-2xl flex flex-col justify-between p-8 sm:p-10">
              {/* Embed authentic Google Maps frame */}
              <iframe
                title="Beru Cafe Location Map"
                src="https://maps.google.com/maps?q=29+Thimbirigasyaya+Place,+Colombo+05,+Sri+Lanka&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 w-full h-full border-0 filter grayscale contrast-125 opacity-70 hover:opacity-90 transition-opacity duration-500"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Top Map Card Overlay */}
              <div className="relative z-10 self-start p-5 rounded-2xl bg-[#17110D]/90 backdrop-blur-md border border-[#D8C2A4]/25 max-w-sm shadow-xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-[#EEDCC7] p-1 border border-[#B98A55] shadow-sm flex items-center justify-center shrink-0">
                    <Image
                      src="/images/beru-shell-symbol.png"
                      alt="Beru Café"
                      width={32}
                      height={32}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <span className="font-serif text-lg text-[#F4EBDD] font-normal">
                    Beru Café
                  </span>
                </div>
                <p className="text-xs text-[#D8C2A4]/80 leading-relaxed font-light">
                  29, Thimbirigasyaya Place, Colombo 05
                </p>
                <div className="mt-2 text-[10px] text-[#B98A55] tracking-widest uppercase font-semibold">
                  Open Today 8:00 AM – 5:30 PM
                </div>
              </div>

              {/* Bottom Direct CTA */}
              <div className="relative z-10 self-end mt-auto pt-6">
                <a
                  href={BERU_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#B98A55] hover:bg-[#F4EBDD] text-[#17110D] font-semibold text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-2xl hover:shadow-[0_0_25px_rgba(244,235,221,0.4)]"
                >
                  <Navigation className="w-4 h-4 fill-current" />
                  <span>GET DIRECTIONS</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
