"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Compass, Clock, MapPin } from "lucide-react";
import { InstagramIcon } from "./Icons";
import Logo from "./Logo";
import { BERU_INFO } from "@/data/cafeData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page change & lock body scroll when open
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { num: "01", name: "Home", href: "/" },
    { num: "02", name: "Menu", href: "/menu" },
    { num: "03", name: "Our Story", href: "/about" },
    { num: "04", name: "Gallery", href: "/gallery" },
    { num: "05", name: "Visit & Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#FAF7F2]/92 backdrop-blur-md border-b border-[#2A1B12]/8 py-3 shadow-[0_4px_20px_rgba(42,27,18,0.03)]"
            : "bg-[#FAF7F2]/75 backdrop-blur-sm border-b border-[#2A1B12]/5 py-3.5 sm:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex items-center justify-between">
          {/* Brand Wordmark / Emblem */}
          <div className="flex items-center">
            <Logo variant="header" size="md" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs uppercase tracking-[0.22em] transition-colors duration-200 py-1 relative ${
                    isActive
                      ? "text-[#17110D] font-semibold"
                      : "text-[#6A5546] hover:text-[#17110D] font-medium"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="navUnderline"
                      className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#B98A55]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action / Mobile Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            <Link
              href="/menu"
              className="hidden lg:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#2A1B12] hover:bg-[#17110D] text-[#FAF6F0] text-[11px] font-medium uppercase tracking-[0.18em] transition-all duration-200 shadow-sm hover:scale-[1.02]"
            >
              <span>Explore Menu</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#B98A55]" />
            </Link>

            {/* Premium Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
              className="touch-target inline-flex md:hidden items-center justify-center p-2 rounded-full border border-[#2A1B12]/15 bg-white/70 text-[#2A1B12] hover:bg-white transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 stroke-[1.75]" />
              ) : (
                <Menu className="w-5 h-5 stroke-[1.75]" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Editorial Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-[#FAF7F2] flex flex-col justify-between overflow-y-auto px-5 sm:px-8 py-5 pb-safe"
          >
            {/* Top Bar inside Menu */}
            <div className="flex items-center justify-between border-b border-[#2A1B12]/10 pb-4">
              <Logo variant="header" size="md" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                className="touch-target p-2.5 rounded-full border border-[#2A1B12]/15 bg-white text-[#2A1B12] hover:bg-[#FAF6F0] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Links Stack */}
            <div className="my-auto py-8">
              <div className="space-y-4 sm:space-y-6">
                {navLinks.map((link, idx) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + idx * 0.05, duration: 0.4 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="group flex items-baseline justify-between py-2 border-b border-[#2A1B12]/6 transition-colors"
                      >
                        <span className="flex items-baseline gap-3">
                          <span className="text-[11px] font-mono tracking-widest text-[#B98A55]">
                            {link.num}
                          </span>
                          <span
                            className={`font-serif text-3xl sm:text-4xl tracking-tight transition-colors ${
                              isActive
                                ? "text-[#17110D] font-medium"
                                : "text-[#6A5546] group-hover:text-[#17110D]"
                            }`}
                          >
                            {link.name}
                          </span>
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-[#B98A55] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 space-y-3">
                <Link
                  href="/menu"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full h-12 rounded-full bg-[#2A1B12] text-[#FAF6F0] text-xs uppercase tracking-[0.2em] font-medium shadow-sm transition-all active:scale-[0.98]"
                >
                  <span>Explore Menu</span>
                  <ArrowUpRight className="w-4 h-4 text-[#B98A55]" />
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full h-12 rounded-full border border-[#2A1B12]/20 bg-white/70 text-[#2A1B12] text-xs uppercase tracking-[0.2em] font-medium transition-all active:scale-[0.98]"
                >
                  <Compass className="w-4 h-4 text-[#B98A55]" />
                  <span>Visit & Directions</span>
                </Link>
              </div>
            </div>

            {/* Bottom Info Bar */}
            <div className="pt-5 border-t border-[#2A1B12]/10 space-y-2 text-xs text-[#6A5546]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B98A55] shrink-0" />
                <span className="truncate">{BERU_INFO.address}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#B98A55] shrink-0" />
                  <span>{BERU_INFO.hours} • Open 7 Days</span>
                </div>
                <a
                  href={BERU_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#2A1B12] font-medium hover:text-[#B98A55]"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                  <span>{BERU_INFO.instagram}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
