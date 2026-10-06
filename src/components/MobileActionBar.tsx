"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Utensils, Navigation, Calendar } from "lucide-react";
import { BERU_INFO } from "@/data/cafeData";

export default function MobileActionBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Reveal sticky action bar once user scrolls past initial hero
      setVisible(window.scrollY > 280);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside
      aria-label="Quick mobile actions"
      className="fixed bottom-4 left-0 right-0 z-30 flex justify-center px-4 pointer-events-none md:hidden transition-all duration-300 animate-in fade-in slide-in-from-bottom-3"
    >
      <nav className="pointer-events-auto inline-flex items-center gap-1 p-1 rounded-full bg-[#17110D]/95 backdrop-blur-md border border-[#E4C8BA]/25 shadow-[0_8px_30px_rgba(23,17,13,0.35)]">
        <Link
          href="/menu"
          className="touch-target flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[11px] font-medium tracking-[0.14em] uppercase text-[#FAF6F0] hover:text-[#B98A55] active:bg-white/10 transition-colors"
        >
          <Utensils className="w-3.5 h-3.5 text-[#B98A55]" />
          <span>Menu</span>
        </Link>

        <span className="w-px h-4 bg-white/15" />

        <a
          href={BERU_INFO.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="touch-target flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[11px] font-medium tracking-[0.14em] uppercase text-[#FAF6F0] hover:text-[#B98A55] active:bg-white/10 transition-colors"
        >
          <Navigation className="w-3.5 h-3.5 text-[#B98A55]" />
          <span>Directions</span>
        </a>

        <span className="w-px h-4 bg-white/15" />

        <Link
          href="/#book-table"
          className="touch-target flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#B98A55] text-[#17110D] font-semibold text-[11px] tracking-[0.14em] uppercase shadow-sm active:scale-[0.97] transition-all"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Reserve</span>
        </Link>
      </nav>
    </aside>
  );
}
