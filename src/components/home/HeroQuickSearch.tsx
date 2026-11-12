"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, ArrowRight } from "lucide-react";

export function HeroQuickSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/jobs?search=${encodeURIComponent(query.trim())}`);
    } else {
      router.push("/jobs");
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto z-30 relative group">
      {/* Ambient Pulsing Aura Glow Behind Capsule */}
      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-sky-400/25 via-cyan-400/35 to-blue-500/25 blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Rotating Border-Beam Container */}
      <div className="relative rounded-full p-[1.5px] overflow-hidden shadow-2xl shadow-sky-950/10">
        {/* Continuous Border Beam Light Ray */}
        <div className="absolute inset-[-100%] rounded-full bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_60deg,#38bdf8_120deg,#0284c7_180deg,transparent_240deg)] animate-spin [animation-duration:6s] pointer-events-none" />

        {/* Floating Capsule Bar (CloudPilot Aesthetic) */}
        <form
          onSubmit={handleSubmit}
          className="relative bg-white/95 backdrop-blur-xl rounded-full p-2 pl-6 sm:pl-7 flex items-center gap-3 transition-all focus-within:bg-white"
        >
          <Search className="w-5 h-5 text-sky-600 shrink-0 group-hover:scale-110 transition-transform duration-300" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search job trade, skill, or destination (e.g. Dubai, Welder, SSW Caregiver)..."
            className="w-full bg-transparent text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
          />
          <button
            type="submit"
            className="px-5 sm:px-7 py-3 rounded-full bg-slate-900 hover:bg-sky-600 text-white font-semibold text-xs tracking-wide transition-all shadow-md shrink-0 flex items-center gap-1.5 active:scale-95 group/btn"
          >
            <span>Find Vacancies</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
        </form>
      </div>
    </div>
  );
}
