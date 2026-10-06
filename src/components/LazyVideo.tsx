"use client";

import { useEffect, useRef, useState } from "react";

interface LazyVideoProps {
  src: string;
  poster?: string;
  className?: string;
}

export default function LazyVideo({ src, poster, className = "" }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Load video slightly before it scrolls into the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          if (videoRef.current) {
            videoRef.current.play().catch(() => {});
          }
        } else {
          // Pause when completely off screen to save memory and CPU
          if (videoRef.current) {
            videoRef.current.pause();
          }
        }
      },
      { rootMargin: "250px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full">
      <video
        ref={videoRef}
        src={isInView ? src : undefined}
        poster={poster}
        preload="none"
        loop
        muted
        playsInline
        className={className}
      />
    </div>
  );
}
