"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Compass,
  FileText,
  ShieldCheck,
  Building2,
  FileCheck2,
  Plane,
  ArrowRight,
  Clock,
  RotateCw,
} from "lucide-react";

interface TransitStation {
  id: string;
  stationCode: string;
  stepNum: string;
  name: string;
  shortTitle: string;
  shortDesc: string;
  zone: string;
  zoneColor: string;
  tagline: string;
  estTransit: string;
  icon: React.ComponentType<{ className?: string }>;
  ctaText: string;
  ctaLink: string;
  angleDeg: number;
  xPercent: number;
  yPercent: number;
  popupClass: string;
}

const TRANSIT_STATIONS: TransitStation[] = [
  {
    id: "stn-01",
    stationCode: "STAGE 01 // DISCOVERY",
    stepNum: "01",
    name: "Application Junction",
    shortTitle: "Application",
    shortDesc:
      "Browse verified SLBFE-approved job orders directly connected to licensed overseas corporate employers with clear, written salary terms and zero broker fees.",
    zone: "TALENT DISCOVERY",
    zoneColor: "bg-sky-100 text-sky-700 border-sky-200",
    tagline: "Explore Verified Bilateral Vacancies",
    estTransit: "1 - 2 Business Days",
    icon: Compass,
    ctaText: "Explore Vacancies",
    ctaLink: "/jobs",
    angleDeg: -90,
    xPercent: 50,
    yPercent: 12,
    popupClass: "top-full mt-3 left-1/2 -translate-x-1/2",
  },
  {
    id: "stn-02",
    stationCode: "STAGE 02 // DOSSIER",
    stepNum: "02",
    name: "Digital Dossier Interchange",
    shortTitle: "Digital Dossier",
    shortDesc:
      "Submit your vocational trade history and digital passport copies for assisted international-standard CV formatting and credential authentication.",
    zone: "TALENT DISCOVERY",
    zoneColor: "bg-sky-100 text-sky-700 border-sky-200",
    tagline: "Profile Submission & CV Standardization",
    estTransit: "24 - 48 Hours",
    icon: FileText,
    ctaText: "Submit Profile",
    ctaLink: "/apply",
    angleDeg: -30,
    xPercent: 82.5,
    yPercent: 30.5,
    popupClass: "top-full mt-2.5 right-0",
  },
  {
    id: "stn-03",
    stationCode: "STAGE 03 // VETTING",
    stepNum: "03",
    name: "Technical Assessment Terminal",
    shortTitle: "Trade Vetting",
    shortDesc:
      "Participate in hands-on trade testing in authorized vocational workshops, credential checks, and structured client interview coaching.",
    zone: "SELECTION & VETTING",
    zoneColor: "bg-blue-100 text-blue-700 border-blue-200",
    tagline: "Professional Vetting & Trade Testing",
    estTransit: "2 - 3 Business Days",
    icon: ShieldCheck,
    ctaText: "Testing Standards",
    ctaLink: "/about",
    angleDeg: 30,
    xPercent: 82.5,
    yPercent: 69.5,
    popupClass: "bottom-full mb-2.5 right-0",
  },
  {
    id: "stn-04",
    stationCode: "STAGE 04 // CONTRACT",
    stepNum: "04",
    name: "Corporate Agreement Interchange",
    shortTitle: "Offer Contract",
    shortDesc:
      "Attend client video interviews and receive legally binding employer offer letters with guaranteed salaries, food, and accommodation in writing.",
    zone: "OFFER LETTER",
    zoneColor: "bg-blue-100 text-blue-700 border-blue-200",
    tagline: "Employer Interview & Signed Offer Letter",
    estTransit: "5 - 10 Business Days",
    icon: Building2,
    ctaText: "Corporate Partners",
    ctaLink: "/employers",
    angleDeg: 90,
    xPercent: 50,
    yPercent: 88,
    popupClass: "bottom-full mb-3 left-1/2 -translate-x-1/2",
  },
  {
    id: "stn-05",
    stationCode: "STAGE 05 // CLEARANCE",
    stepNum: "05",
    name: "Consular & Visa Hub",
    shortTitle: "Visa Clearance",
    shortDesc:
      "Hands-on scheduling for GAMCA medical testing, biometric enrollment (QVC / VFS), foreign ministry stamps, and official SLBFE clearance.",
    zone: "REGULATORY CLEARANCE",
    zoneColor: "bg-indigo-100 text-indigo-700 border-indigo-200",
    tagline: "GAMCA Medical & Embassy Attestations",
    estTransit: "12 - 20 Business Days",
    icon: FileCheck2,
    ctaText: "Visa Guidelines",
    ctaLink: "/faqs",
    angleDeg: 150,
    xPercent: 17.5,
    yPercent: 69.5,
    popupClass: "bottom-full mb-2.5 left-0",
  },
  {
    id: "stn-06",
    stationCode: "STAGE 06 // TAKEOFF",
    stepNum: "06",
    name: "International Departure Port",
    shortTitle: "Flight Departure",
    shortDesc:
      "Attend pre-departure culture workshops, receive free confirmed air tickets, and depart with airport escort and 24/7 overseas WhatsApp welfare.",
    zone: "OVERSEAS TAKEOFF",
    zoneColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
    tagline: "Orientation, Air Ticket & 24/7 Welfare",
    estTransit: "Flight Departure Ready",
    icon: Plane,
    ctaText: "Overseas Welfare",
    ctaLink: "/services",
    angleDeg: 210,
    xPercent: 17.5,
    yPercent: 30.5,
    popupClass: "top-full mt-2.5 left-0",
  },
];

export function JourneyFlightMap() {
  const [activeStationIdx, setActiveStationIdx] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Auto-advance station every 6 seconds if not actively hovered
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveStationIdx((prev) => (prev + 1) % TRANSIT_STATIONS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const currentStation = TRANSIT_STATIONS[activeStationIdx];

  // SVG circular orbit parameters (radius 225 in 640x640 viewBox)
  const orbitRadius = 225;
  const circumference = 2 * Math.PI * orbitRadius; // ~1413.7
  const progressRatio = (activeStationIdx + 1) / TRANSIT_STATIONS.length;
  const strokeOffset = circumference * (1 - progressRatio);

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-sky-50/40 border-y border-slate-200/80 select-none">
      {/* Background Soft Transit Grid & Ambient Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[360px] bg-sky-200/20 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c708_1px,transparent_1px),linear-gradient(to_bottom,#0284c708_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-sky-700 border border-sky-200 text-xs font-bold tracking-wide uppercase shadow-xs mb-3.5">
            <RotateCw className="w-3.5 h-3.5 text-sky-600 animate-spin [animation-duration:18s]" />
            <span>Circular Process Flow</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 tracking-tight">
            How It <span className="text-sky-600">Works</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
            Follow our <strong>6-Stage Circular Pathway</strong>: hover or click any step to view verified requirements from initial registration in Colombo to overseas takeoff.
          </p>
        </div>

        {/* CIRCULAR PROCESS DIAGRAM CONTAINER */}
        <div
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* THE CIRCULAR STAGE WHEEL */}
          <div className="relative w-full max-w-[580px] sm:max-w-[620px] aspect-square mx-auto flex items-center justify-center">
            
            {/* SVG Background Track & Radial Accents */}
            <svg
              viewBox="0 0 640 640"
              className="absolute inset-0 w-full h-full pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Glow Filter */}
                <filter id="circular-orbit-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* Sky Blue Orbit Gradient */}
                <linearGradient id="orbit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0284c7" />
                  <stop offset="50%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#0ea5e9" />
                </linearGradient>
              </defs>

              {/* Outer Decorative Subtle Ring */}
              <circle
                cx="320"
                cy="320"
                r={orbitRadius + 45}
                fill="none"
                stroke="#e2e8f0"
                strokeWidth="1"
                strokeDasharray="4 8"
                opacity="0.6"
              />

              {/* Main Circular Orbital Path (Base dashed line) */}
              <circle
                cx="320"
                cy="320"
                r={orbitRadius}
                fill="none"
                stroke="#cbd5e1"
                strokeWidth="4"
                strokeDasharray="6 8"
                opacity="0.8"
              />

              {/* Active Progress Arc (Clockwise from top: transform rotate -90) */}
              <circle
                cx="320"
                cy="320"
                r={orbitRadius}
                fill="none"
                stroke="url(#orbit-gradient)"
                strokeWidth="5"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeOffset}
                filter="url(#circular-orbit-glow)"
                transform="rotate(-90 320 320)"
                className="transition-all duration-700 ease-out"
              />

              {/* Directional Chevron Markers along circular path */}
              {[30, 90, 150, 210, 270, 330].map((deg) => {
                const rad = ((deg - 90) * Math.PI) / 180;
                const x = 320 + orbitRadius * Math.cos(rad);
                const y = 320 + orbitRadius * Math.sin(rad);
                return (
                  <circle
                    key={deg}
                    cx={x}
                    cy={y}
                    r="3"
                    fill="#94a3b8"
                    opacity="0.75"
                  />
                );
              })}

              {/* Inner Decorative Concentric Ring */}
              <circle
                cx="320"
                cy="320"
                r="130"
                fill="none"
                stroke="#e2e8f0"
                strokeWidth="1.5"
                strokeDasharray="3 6"
                opacity="0.7"
              />
            </svg>

            {/* CENTER HUB: Main Title & Core Status */}
            <div className="relative z-10 w-44 h-44 sm:w-56 sm:h-56 rounded-full bg-white/95 border-2 border-sky-200/90 shadow-2xl shadow-sky-950/10 backdrop-blur-xl flex flex-col items-center justify-center text-center p-3 sm:p-5 select-none transition-all duration-300 hover:scale-[1.02]">
              {/* Luminous Center Ping Ring */}
              <div className="absolute inset-2 rounded-full border border-dashed border-sky-300/60 animate-spin [animation-duration:35s]" />

              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1 shadow-2xs">
                Apex World Hub
              </span>

              <h3 className="text-base sm:text-xl font-extrabold font-heading text-slate-900 tracking-tight leading-tight mt-0.5">
                How It Works
              </h3>

              <p className="text-[10px] sm:text-xs font-semibold text-slate-500 mt-1 max-w-[130px] sm:max-w-[160px] leading-tight">
                Government Certified Recruitment Cycle
              </p>

              {/* Active Step Indicator Pill */}
              <div className="mt-2.5 inline-flex items-center px-3 py-1 rounded-full bg-slate-900 text-sky-300 font-mono text-[10px] sm:text-xs font-bold shadow-xs">
                <span>Stage {currentStation.stepNum} of 06</span>
              </div>
            </div>

            {/* 6 ORBITAL STAGE NODES WITH IN-PLACE SHORT POPUP */}
            {TRANSIT_STATIONS.map((stn, idx) => {
              const isActive = activeStationIdx === idx;
              const isPassed = activeStationIdx > idx;
              const Icon = stn.icon;

              return (
                <div
                  key={stn.id}
                  className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
                  style={{
                    left: `${stn.xPercent}%`,
                    top: `${stn.yPercent}%`,
                    zIndex: isActive ? 40 : 20,
                  }}
                >
                  {/* Interactive Button */}
                  <button
                    onClick={() => setActiveStationIdx(idx)}
                    onMouseEnter={() => {
                      setActiveStationIdx(idx);
                      setIsHovered(true);
                    }}
                    className="group cursor-pointer transition-all duration-300 flex flex-col items-center focus:outline-none"
                    title={stn.name}
                  >
                    {/* Outer Radar Ping when active */}
                    {isActive && (
                      <span className="absolute -inset-2.5 rounded-3xl bg-sky-400/25 animate-ping pointer-events-none" />
                    )}

                    {/* Stage Icon Circle */}
                    <div
                      className={`relative w-13 h-13 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl flex items-center justify-center transition-all duration-300 border-2 ${
                        isActive
                          ? "bg-sky-600 text-white shadow-xl shadow-sky-600/35 scale-110 border-white ring-4 ring-sky-200"
                          : isPassed
                          ? "bg-sky-50 text-sky-700 border-sky-300 hover:border-sky-500 shadow-sm"
                          : "bg-white text-slate-700 border-slate-200/90 hover:border-sky-300 hover:shadow-md shadow-xs"
                      }`}
                    >
                      <Icon className="w-5 h-5 sm:w-7 sm:h-7 transition-transform group-hover:scale-105" />

                      {/* Step Number Badge */}
                      <span
                        className={`absolute -top-1.5 -right-1.5 w-5 h-5 sm:w-6 sm:h-6 rounded-full text-[10px] sm:text-xs font-mono font-bold flex items-center justify-center border shadow-xs ${
                          isActive
                            ? "bg-white text-sky-700 border-sky-200"
                            : isPassed
                            ? "bg-sky-600 text-white border-sky-600"
                            : "bg-slate-900 text-white border-slate-700"
                        }`}
                      >
                        {stn.stepNum}
                      </span>
                    </div>

                    {/* Stage Short Name Pill */}
                    <span
                      className={`mt-1.5 sm:mt-2 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                        isActive
                          ? "bg-sky-600 text-white shadow-sm font-extrabold scale-105"
                          : "bg-white/95 text-slate-700 border border-slate-200/90 shadow-2xs group-hover:text-sky-600 group-hover:border-sky-300"
                      }`}
                    >
                      {stn.shortTitle}
                    </span>
                  </button>

                  {/* IN-PLACE FLOATING SHORT POPUP CARD */}
                  {isActive && (
                    <div
                      className={`absolute z-50 w-56 sm:w-64 p-3.5 rounded-2xl bg-white/98 border border-sky-200/90 shadow-2xl shadow-sky-950/20 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200 text-left pointer-events-auto select-text ${stn.popupClass}`}
                    >
                      {/* Top Meta Line */}
                      <div className="flex items-center justify-between gap-2 mb-1.5 pb-1 border-b border-slate-100">
                        <span className="text-[10px] font-mono font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-200/80">
                          Stage {stn.stepNum}
                        </span>
                        <span className="text-[10px] font-semibold text-slate-500 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-sky-600" />
                          {stn.estTransit}
                        </span>
                      </div>

                      {/* Stage Name */}
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                        {stn.name}
                      </h4>

                      {/* Short Description */}
                      <p className="text-[11px] text-slate-600 leading-snug mt-1">
                        {stn.shortDesc}
                      </p>

                      {/* Quick Action Link */}
                      <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between">
                        <Link
                          href={stn.ctaLink}
                          className="text-[11px] font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1 group transition-colors"
                        >
                          <span>{stn.ctaText}</span>
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* SLEEK MINIMAL GUIDANCE STRIP (Replaces the big card) */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 max-w-3xl mx-auto px-4 py-3 bg-white/90 rounded-2xl border border-slate-200/90 shadow-xs backdrop-blur-md">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-700">100% SLBFE Government Verified Process</span>
              <span className="text-slate-300 hidden sm:inline">|</span>
              <span className="hidden sm:inline text-slate-500">Hover or click any stage around the circle</span>
            </div>

            <Link
              href="/jobs"
              className="inline-flex items-center gap-1.5 text-sky-600 hover:text-sky-700 font-bold group transition-colors shrink-0"
            >
              <span>Explore Verified Jobs</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
