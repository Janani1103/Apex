"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Briefcase,
  FileText,
  Compass,
  FileCheck2,
  CheckCircle2,
  PlaneTakeoff,
  ArrowRight,
} from "lucide-react";

interface HexService {
  id: string;
  number: string;
  title: string;
  desc: string;
  code: string;
  icon: React.ElementType;
  deliverable: string;
  accentGradient: string;
}

const HEX_SERVICES: HexService[] = [
  {
    id: "hex-01",
    number: "01",
    title: "Overseas Job Opportunities",
    desc: "Direct access to authenticated vacancies across UAE, Saudi Arabia, Qatar, Kuwait, Oman, Japan, and Singapore across all certified trade tiers.",
    code: "Stage 01",
    icon: Briefcase,
    deliverable: "Verified Direct Quotas",
    accentGradient: "from-sky-500 via-cyan-400 to-blue-600",
  },
  {
    id: "hex-02",
    number: "02",
    title: "Online Application Portal",
    desc: "User-friendly multi-step online application portal enabling candidates to submit verified biodata, trade certificates, and destination preferences.",
    code: "Stage 02",
    icon: FileText,
    deliverable: "Instant Digital CV Intake",
    accentGradient: "from-blue-600 via-sky-500 to-indigo-600",
  },
  {
    id: "hex-03",
    number: "03",
    title: "Trade & Aptitude Guidance",
    desc: "Hands-on vocational appraisal, trade test simulation workshops, and language training tips from seasoned international recruitment coordinators.",
    code: "Stage 03",
    icon: Compass,
    deliverable: "Certified Trade Testing",
    accentGradient: "from-cyan-500 via-teal-500 to-emerald-600",
  },
  {
    id: "hex-04",
    number: "04",
    title: "Document Legalization Support",
    desc: "Assisted guidance regarding passport validity, professional certification verification, consular apostille stamps, and police clearance certificates.",
    code: "Stage 04",
    icon: FileCheck2,
    deliverable: "100% Embassy Attested",
    accentGradient: "from-indigo-500 via-sky-500 to-cyan-500",
  },
  {
    id: "hex-05",
    number: "05",
    title: "Visa & Medical Fast-Track",
    desc: "Streamlined navigation through host nation immigration protocols, accredited GAMCA medical appointments, and biometric center enrollments.",
    code: "Stage 05",
    icon: CheckCircle2,
    deliverable: "GAMCA & QVC Fast-Track",
    accentGradient: "from-emerald-500 via-teal-500 to-sky-600",
  },
  {
    id: "hex-06",
    number: "06",
    title: "Flight & Travel Coordination",
    desc: "Pre-departure cultural briefing, guaranteed airline ticket handover, CMB airport lounge escort, and 24/7 welfare checkups at destination.",
    code: "Stage 06",
    icon: PlaneTakeoff,
    deliverable: "CMB Airport Escort Staff",
    accentGradient: "from-sky-600 via-blue-600 to-indigo-700",
  },
];

export function JobSeekerHexagonGrid() {
  const [activeHex, setActiveHex] = useState<string | null>(null);

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 lg:mb-16 gap-6">
        <div>
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white text-sky-700 border border-sky-200 text-xs font-bold tracking-wide uppercase shadow-xs mb-3.5">
            <span>Candidate Pathway</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 tracking-tight">
            Services for <span className="text-sky-600">Job Seekers</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            A comprehensive, interconnected six-stage recruitment ecosystem designed to safely guide Sri Lankan talent from registration to global takeoff.
          </p>
        </div>

        <Link
          href="/jobs"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 hover:bg-sky-600 text-white text-xs font-bold shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0 self-start md:self-auto group"
        >
          <span>Explore All Vacancies</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* SPACIOUS AEROSPACE HEXAGON GRID (WITH CLEAR BREATHING ROOM) */}
      <div className="relative max-w-6xl mx-auto py-4">
        
        {/* Background Ambient Honeycomb Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-sky-200/20 blur-[130px] rounded-full pointer-events-none" />

        {/* 6 Independent Hexagon Cards with Ample Gap and Separation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 justify-items-center relative z-10">
          {HEX_SERVICES.map((srv) => (
            <HexagonCard
              key={srv.id}
              service={srv}
              isHovered={activeHex === srv.id}
              onHover={() => setActiveHex(srv.id)}
              onLeave={() => setActiveHex(null)}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

// =====================================================================
// INDIVIDUAL PRECISION HEXAGON CARD COMPONENT
// Uses geometric polygon clipping with dual-layer glowing neon borders
// =====================================================================
function HexagonCard({
  service,
  isHovered,
  onHover,
  onLeave,
}: {
  service: HexService;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const Icon = service.icon;

  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`relative w-[300px] sm:w-[320px] lg:w-[335px] h-[345px] sm:h-[365px] lg:h-[380px] transition-all duration-300 ease-out cursor-pointer select-none ${
        isHovered ? "scale-105 -translate-y-2 z-30" : "scale-100 z-10"
      }`}
    >
      {/* Outer Hexagon Shell (Forms the 2px Neon Gradient Border) */}
      <div
        className={`w-full h-full p-[2px] transition-all duration-300 shadow-xl ${
          isHovered
            ? `bg-gradient-to-tr ${service.accentGradient} shadow-[0_15px_35px_rgba(14,165,233,0.35)]`
            : "bg-slate-200/90 hover:bg-sky-300"
        }`}
        style={{
          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        }}
      >
        {/* Inner Hexagon Body (White Glassmorphic Content Stage) */}
        <div
          className="w-full h-full bg-white relative flex flex-col items-center justify-between px-6 py-9 sm:py-11 text-center transition-colors duration-300 overflow-hidden"
          style={{
            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}
        >
          {/* Subtle Honeycomb Ambient Inner Gradient */}
          <div
            className={`absolute inset-0 bg-gradient-to-b ${
              isHovered ? "from-sky-50 via-white to-sky-50/50" : "from-slate-50/60 via-white to-transparent"
            } transition-all duration-300 pointer-events-none`}
          />

          {/* Top Hex Telemetry Header */}
          <div className="relative z-10 flex flex-col items-center">
            <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase">
              {service.code}
            </span>

            {/* Circular Aviation Icon Badge */}
            <div
              className={`w-12 h-12 sm:w-13 sm:h-13 rounded-2xl flex items-center justify-center mt-1.5 mb-2 shadow-md transition-all duration-300 ${
                isHovered
                  ? `bg-gradient-to-tr ${service.accentGradient} text-white scale-110 shadow-sky-500/30 rotate-3`
                  : "bg-sky-50 text-sky-600 border border-sky-100"
              }`}
            >
              <Icon className="w-6 h-6" />
            </div>
          </div>

          {/* Center Content: Title & Description */}
          <div className="relative z-10 max-w-[225px]">
            <h3 className="font-heading font-extrabold text-base sm:text-lg text-slate-900 tracking-tight leading-snug">
              {service.title}
            </h3>

            <p className="text-slate-500 text-xs leading-relaxed mt-1.5 line-clamp-3">
              {service.desc}
            </p>
          </div>

          {/* Bottom Deliverable Verification Pill */}
          <div className="relative z-10">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wide transition-all duration-300 ${
                isHovered
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-sky-50 text-sky-700 border border-sky-100"
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>{service.deliverable}</span>
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
