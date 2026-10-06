"use client";

import Link from "next/link";
import { ArrowUp, MapPin, Clock, Phone, ArrowUpRight, MessageSquare } from "lucide-react";
import { InstagramIcon } from "./Icons";
import Logo from "./Logo";
import { BERU_INFO } from "@/data/cafeData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#17110D] text-[#FAF6F0] pt-16 sm:pt-20 pb-24 md:pb-14 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Brand Statement Banner */}
        <div className="border-b border-white/10 pb-12 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#B98A55] block mb-2">
              BERU CAFÉ • COLOMBO 05
            </span>
            <p className="font-serif italic text-3xl sm:text-5xl text-[#FAF6F0] font-normal tracking-tight">
              “Eat Drink Be Happy ~”
            </p>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="touch-target self-start md:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 hover:border-white/50 text-xs font-medium uppercase tracking-wider text-[#D8C2A4] hover:text-white transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <Logo variant="header" size="md" />
            <p className="text-xs sm:text-sm text-[#D8C2A4]/80 font-light leading-relaxed max-w-sm pt-2">
              An artisan café along Thimbirigasyaya Place offering ceremonial Japanese matcha, specialty coffee, and thoughtfully prepared food in an architectural haven.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#B98A55] tracking-wider pt-1">
              <span>●</span>
              <span>{BERU_INFO.openingDays}</span>
              <span>•</span>
              <span>{BERU_INFO.hours}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-[11px] uppercase tracking-[0.22em] text-[#B98A55] font-semibold">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-[#D8C2A4]/80">
              <li>
                <Link href="/" className="hover:text-white transition-colors py-1 block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-white transition-colors py-1 block">
                  Artisan Menu
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors py-1 block">
                  Our Story & Space
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors py-1 block">
                  Visual Diary
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors py-1 block">
                  Visit & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Location & Contact */}
          <div className="lg:col-span-4 space-y-3.5">
            <h4 className="text-[11px] uppercase tracking-[0.22em] text-[#B98A55] font-semibold">
              Visit & Connect
            </h4>
            <div className="space-y-3 text-xs text-[#D8C2A4]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B98A55] shrink-0 mt-0.5" />
                <span>{BERU_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#B98A55] shrink-0" />
                <span>{BERU_INFO.hours} • Daily</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B98A55] shrink-0" />
                <a href={`tel:${BERU_INFO.phoneTel}`} className="hover:text-white transition-colors">
                  {BERU_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={BERU_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="touch-target inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF6F0] text-xs transition-colors"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-[#B98A55]" />
                  <span>{BERU_INFO.instagram}</span>
                </a>
                <a
                  href={BERU_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="touch-target inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF6F0] text-xs transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#B98A55]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#D8C2A4]/60 font-light">
          <p>© {new Date().getFullYear()} {BERU_INFO.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>29, Thimbirigasyaya Place, Colombo 05</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
