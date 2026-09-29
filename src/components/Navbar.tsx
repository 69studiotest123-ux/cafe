"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Clock, MapPin } from "lucide-react";
import { InstagramIcon } from "./Icons";
import Logo from "./Logo";
import { BERU_INFO } from "@/data/cafeData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Our Story", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Visit Us", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-[#17110D]/85 backdrop-blur-md border-b border-[#D8C2A4]/15 shadow-2xl"
            : "py-5 bg-gradient-to-b from-[#17110D]/80 to-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <Logo size="md" withGlow={scrolled} />

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 py-1 ${
                    isActive ? "text-[#F4EBDD]" : "text-[#D8C2A4]/75 hover:text-[#F4EBDD]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#B98A55]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <Link
              href="/#book-table"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#B98A55]/60 bg-[#2A1B12]/60 hover:bg-[#B98A55] text-[#F4EBDD] hover:text-[#17110D] transition-all duration-300 text-xs uppercase tracking-[0.18em] font-medium shadow-sm hover:shadow-[0_0_20px_rgba(185,138,85,0.4)]"
            >
              <span>Book a Table</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Hamburger for mobile & quick menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2.5 rounded-full border border-[#D8C2A4]/20 hover:border-[#B98A55] text-[#F4EBDD] bg-[#2A1B12]/40 transition-colors focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Luxury Mobile & Overlay Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 95% 5%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 95% 5%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 95% 5%)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-[#17110D] flex flex-col justify-between p-8 sm:p-14 overflow-y-auto"
          >
            {/* Header bar */}
            <div className="flex items-center justify-between">
              <Logo size="md" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation menu"
                className="p-3 rounded-full border border-[#D8C2A4]/20 hover:border-[#B98A55] text-[#F4EBDD] transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Links */}
            <div className="relative my-auto py-10 max-w-lg mx-auto w-full text-center">
              <div className="space-y-6 relative z-10">
                {navLinks.map((link, idx) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + idx * 0.07 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`font-serif text-3xl sm:text-4xl italic transition-colors block ${
                          isActive ? "text-[#B98A55]" : "text-[#F4EBDD] hover:text-[#D8C2A4]"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-10 pt-8 border-t border-[#D8C2A4]/15"
              >
                <Link
                  href="/#book-table"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#B98A55] text-[#17110D] font-medium tracking-[0.18em] text-xs uppercase hover:bg-[#F4EBDD] transition-colors shadow-lg shadow-black/40"
                >
                  <span>Request a Table</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>

            {/* Footer details in mobile menu */}
            <div className="pt-6 border-t border-[#D8C2A4]/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#D8C2A4]/70 max-w-3xl mx-auto w-full text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <MapPin className="w-4 h-4 text-[#B98A55]" />
                <span>{BERU_INFO.address}</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <Clock className="w-4 h-4 text-[#B98A55]" />
                <span>{BERU_INFO.hours} • Open 7 Days</span>
              </div>
              <div className="flex items-center justify-center sm:justify-end gap-2">
                <InstagramIcon className="w-4 h-4 text-[#B98A55]" />
                <a
                  href={BERU_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F4EBDD] underline underline-offset-4"
                >
                  {BERU_INFO.instagram}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
