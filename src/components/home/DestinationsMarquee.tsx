"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { DESTINATIONS_DATA } from "@/data/destinationsData";

// Extended list with additional unique island and gulf corridors
const CORRIDORS = [
  ...DESTINATIONS_DATA,
  {
    slug: "maldives",
    name: "Maldives",
    countryCode: "mv",
    flag: "🇲🇻",
    shortIntro: "Luxury island hospitality and resort facility management careers.",
    availableJobsCount: 16,
  },
  {
    slug: "bahrain",
    name: "Bahrain",
    countryCode: "bh",
    flag: "🇧🇭",
    shortIntro: "High-standard hospitality, commercial construction and banking support.",
    availableJobsCount: 10,
  },
];

export function DestinationsMarquee({ className }: { className?: string } = {}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Duplicate array for seamless infinite marquee loop
  const marqueeItems = [...CORRIDORS, ...CORRIDORS];

  return (
    <div
      suppressHydrationWarning
      className={`relative w-full z-20 pt-2 pb-1 sm:pb-2 overflow-hidden translate-y-3 sm:translate-y-5 ${className ?? ""}`}
    >
      {/* Container */}
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6">
        <div className="relative rounded-2xl sm:rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/12 shadow-2xl shadow-black/50 p-2 sm:p-2.5 overflow-hidden">
          
          {/* Marquee Track Container with Left and Right Fade Overlays */}
          <div className="relative overflow-hidden group">
            {/* Left Fade Gradient */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-slate-900/95 via-slate-900/60 to-transparent z-10" />

            {/* Right Fade Gradient */}
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-slate-900/95 via-slate-900/60 to-transparent z-10" />

            {/* Marquee Motion Flex Row */}
            <div className="flex gap-3 sm:gap-3.5 w-max animate-marquee hover:[animation-play-state:paused]">
              {marqueeItems.map((item, index) => (
                <Link
                  key={`${item.slug}-${index}`}
                  href={`/destinations/${item.slug}`}
                  className="flex items-center gap-3 px-4 py-2 sm:py-2.5 rounded-2xl bg-white/[0.07] hover:bg-white/[0.14] backdrop-blur-md border border-white/12 hover:border-sky-400/50 text-white shadow-lg shadow-black/20 hover:shadow-sky-500/10 transition-all duration-300 hover:-translate-y-0.5 group/item shrink-0"
                >
                  {/* Real Authentic High-Res National Flag */}
                  <div className="relative w-7 h-5 sm:w-8 sm:h-5.5 rounded-sm overflow-hidden shadow-sm border border-white/20 shrink-0 group-hover/item:scale-105 transition-transform">
                    <img
                      src={`https://flagcdn.com/w80/${item.countryCode}.png`}
                      alt={`${item.name} Flag`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs sm:text-sm font-bold text-white group-hover/item:text-sky-300 transition-colors leading-tight">
                        {item.name}
                      </span>
                      <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover/item:text-sky-400 transition-transform group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5" />
                    </div>
                    <span className="text-[10px] text-slate-300 flex items-center gap-1.5 font-medium mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {item.availableJobsCount ? `${item.availableJobsCount} Vacancies` : "Accredited"}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

