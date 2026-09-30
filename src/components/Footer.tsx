"use client";

import Link from "next/link";
import { ArrowUp, MapPin, Clock, Phone, Mail, ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "./Icons";
import Logo from "./Logo";
import { BERU_INFO } from "@/data/cafeData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#17110D] border-t border-[#D8C2A4]/12 text-[#D8C2A4] pt-20 pb-12 overflow-hidden">
      {/* Ambient glows */}
      <div className="ambient-orb w-[500px] h-[400px] bg-[#B98A55]/7 top-0 left-[-100px] animate-orb" />
      <div className="ambient-orb w-[400px] h-[300px] bg-[#2A1B12]/60 bottom-0 right-[-80px] animate-orb-reverse" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#D8C2A4]/10">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-5">
            <Logo size="lg" />
            <p className="text-xs sm:text-sm text-[#D8C2A4]/75 font-light leading-relaxed max-w-sm">
              An artisan café in Colombo where great food, refreshing drinks, and good vibes come together in an architectural oasis of calm.
            </p>
            <div className="pt-2 text-xs font-serif italic text-[#B98A55]">
              {BERU_INFO.tagline}
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-[#F4EBDD] font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/" className="hover:text-[#F4EBDD] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-[#F4EBDD] transition-colors">
                  Artisan Menu
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#F4EBDD] transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#F4EBDD] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F4EBDD] transition-colors">
                  Visit Us
                </Link>
              </li>
              <li>
                <Link href="/#book-table" className="text-[#B98A55] hover:text-[#F4EBDD] transition-colors">
                  Book a Table
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours & Location */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-[#F4EBDD] font-semibold">
              Visiting Hours
            </h4>
            <div className="space-y-2 text-xs text-[#D8C2A4]/80 leading-relaxed font-light">
              <p className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#B98A55]" />
                <span>{BERU_INFO.hours}</span>
              </p>
              <p className="text-[11px] text-[#B98A55] font-medium uppercase tracking-wider">
                {BERU_INFO.openingDays}
              </p>
              <p className="pt-3 flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B98A55] shrink-0 mt-0.5" />
                <span>{BERU_INFO.address}</span>
              </p>
            </div>
          </div>

          {/* Connect & Social */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-[#F4EBDD] font-semibold">
              Connect
            </h4>
            <p className="text-xs text-[#D8C2A4]/75 font-light">
              Follow our culinary journey and tag your moments.
            </p>
            <div className="pt-2 flex flex-col gap-2.5 text-xs">
              <a
                href={BERU_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#D8C2A4] hover:text-[#B98A55] transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-[#B98A55]" />
                <span>{BERU_INFO.instagram}</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>

              <a
                href={BERU_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#D8C2A4] hover:text-[#B98A55] transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#B98A55]" />
                <span>View Google Maps</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-[11px] text-[#D8C2A4]/60">
          <p>© 2026 Beru Café. All rights reserved.</p>

          <p className="text-shimmer font-serif italic text-sm tracking-wider">
            GOOD FOOD • GREAT VIBES
          </p>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            suppressHydrationWarning
            className="group inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#D8C2A4] hover:text-[#B98A55] transition-colors p-2"
          >
            <span>Back to top</span>
            <div className="p-1.5 rounded-full border border-[#D8C2A4]/20 group-hover:border-[#B98A55] group-hover:-translate-y-1 group-hover:glow-gold-sm transition-all duration-300">
              <ArrowUp className="w-3 h-3" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
