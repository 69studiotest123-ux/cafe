import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  withGlow?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  lightMode?: boolean;
  variant?: "badge" | "symbol" | "transparent" | "official" | "header";
}

export default function Logo({
  className = "",
  withGlow = false,
  size = "md",
  lightMode = false,
  variant = "badge",
}: LogoProps) {
  // Horizontal logo variant for header matching user's requested layout
  if (variant === "header") {
    const headerHeightMap = {
      sm: { h: 24, w: 59 },
      md: { h: 30, w: 74 },
      lg: { h: 36, w: 89 },
      xl: { h: 46, w: 114 },
    };
    const dimensions = headerHeightMap[size] || headerHeightMap.md;

    return (
      <Link
        href="/"
        className={`group inline-flex items-center select-none transition-transform duration-300 hover:scale-[1.03] ${className}`}
      >
        <Image
          src="/images/beru-header-logo.png"
          alt="Beru Café Colombo"
          width={dimensions.w}
          height={dimensions.h}
          className="object-contain w-auto transition-transform duration-300 group-hover:scale-[1.02]"
          style={{ height: `${dimensions.h}px` }}
          priority
        />
      </Link>
    );
  }

  const sizeMap = {
    sm: { img: "w-8 h-8", text: "text-lg", sub: "text-[9px] tracking-[0.25em]" },
    md: { img: "w-10 h-10", text: "text-2xl", sub: "text-[10px] tracking-[0.3em]" },
    lg: { img: "w-14 h-14", text: "text-3xl", sub: "text-xs tracking-[0.35em]" },
    xl: { img: "w-20 h-20", text: "text-5xl", sub: "text-sm tracking-[0.4em]" },
  };

  const selectedSize = sizeMap[size];

  // Official stacked lockup variant
  if (variant === "official") {
    const officialHeightMap = {
      sm: 40,
      md: 52,
      lg: 72,
      xl: 96,
    };
    const h = officialHeightMap[size];
    return (
      <Link
        href="/"
        className={`group inline-flex items-center justify-center select-none transition-transform duration-300 hover:scale-[1.02] ${className}`}
      >
        <Image
          src="/images/beru-logo-official.png"
          alt="Beru Café"
          width={h}
          height={h}
          className="object-contain w-auto"
          style={{ height: `${h}px` }}
          priority
        />
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 select-none transition-transform duration-300 hover:scale-[1.02] ${className}`}
    >
      <div className="relative flex items-center justify-center">
        {/* Illuminated halo glow */}
        {withGlow && (
          <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-600/40 via-orange-500/40 to-amber-700/40 blur-lg rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        )}

        {/* Circular Warm Cream Badge matching Instagram with ONLY the iconic Shell Symbol */}
        <div
          className={`relative ${selectedSize.img} rounded-full overflow-hidden border border-[#D8C2A4]/35 shadow-md group-hover:border-[#B98A55] transition-colors bg-[#EEDCC7] flex items-center justify-center p-1.5`}
        >
          <Image
            src="/images/beru-shell-symbol.png"
            alt="Beru Scallop Shell"
            width={72}
            height={72}
            className="object-contain w-full h-full"
            priority
          />
        </div>
      </div>

      <div className="flex flex-col text-left leading-none">
        <span
          className={`font-serif italic font-normal tracking-wide block ${selectedSize.text} ${
            lightMode ? "text-[#17110D]" : "text-[#F4EBDD]"
          } group-hover:text-[#D8C2A4] transition-colors`}
        >
          beru
        </span>
        <span
          className={`font-sans font-light uppercase block mt-0.5 ${selectedSize.sub} ${
            lightMode ? "text-[#5C4535]" : "text-[#D8C2A4]/80"
          }`}
        >
          CAFÉ
        </span>
      </div>
    </Link>
  );
}
