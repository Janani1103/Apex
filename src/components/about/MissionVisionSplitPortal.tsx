"use client";

import React, { useState } from "react";
import {
  Target,
  Compass,
  CheckCircle2,
  PlaneTakeoff,
  Globe2,
  ShieldCheck,
  Award,
  ArrowRight,
  TrendingUp,
  Building2,
} from "lucide-react";

export function MissionVisionSplitPortal() {
  const [activeSide, setActiveSide] = useState<"mission" | "vision" | null>(null);

  return (
    <div className="w-full">
      {/* Top Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
        <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white text-sky-700 border border-sky-200 text-xs font-bold tracking-wide uppercase shadow-xs mb-3.5">
          <span>Strategic Foundation</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 tracking-tight">
          Purpose & Long-Term <span className="text-sky-600">Horizon</span>
        </h2>

        <p className="text-slate-600 text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
          The guiding operational compass behind every overseas placement and our strategic trajectory for Sri Lanka's global workforce.
        </p>
      </div>

      {/* UNIFIED INTERACTIVE SPLIT PORTAL CONSOLE */}
      <div className="relative rounded-3xl sm:rounded-[2.5rem] overflow-hidden border-2 border-slate-200/90 shadow-2xl shadow-sky-950/10 bg-white">
        
        <div className="flex flex-col lg:flex-row min-h-[580px] lg:min-h-[520px] transition-all duration-500 ease-in-out">
          
          {/* ======================================================== */}
          {/* LEFT PORTAL: OUR MISSION (THE DAILY FLIGHT PLAN) */}
          {/* ======================================================== */}
          <div
            onMouseEnter={() => setActiveSide("mission")}
            onMouseLeave={() => setActiveSide(null)}
            className={`relative p-8 sm:p-10 lg:p-12 flex flex-col justify-between transition-all duration-500 ease-out border-b lg:border-b-0 lg:border-r border-slate-200/80 overflow-hidden cursor-pointer ${
              activeSide === "mission"
                ? "lg:flex-[1.35] bg-gradient-to-br from-white via-sky-50 to-sky-100/60 shadow-inner"
                : activeSide === "vision"
                ? "lg:flex-[0.75] bg-white opacity-95"
                : "lg:flex-1 bg-gradient-to-br from-white via-sky-50/40 to-slate-50/50"
            }`}
          >
            {/* Giant Typographic Watermark */}
            <div className="absolute -top-10 -right-6 text-[140px] sm:text-[180px] font-black font-heading text-sky-100/50 select-none pointer-events-none transition-transform duration-700">
              01
            </div>

            <div>
              {/* Telemetry Pill Badge */}
              <div className="flex items-center justify-between gap-3 mb-6 relative z-10">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase bg-sky-100 text-sky-800 border border-sky-200">
                  OUR OPERATIONAL MISSION
                </span>
              </div>

              {/* Icon & Title Header */}
              <div className="flex items-start gap-4 mb-5 relative z-10">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-md ${
                    activeSide === "mission"
                      ? "bg-sky-500 text-white scale-110 shadow-sky-500/30"
                      : "bg-sky-50 text-sky-600 border border-sky-200"
                  }`}
                >
                  <Target className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-sky-600 uppercase tracking-widest block">
                    EVERY SINGLE FLIGHT
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 tracking-tight mt-0.5">
                    Our Mission
                  </h3>
                </div>
              </div>

              {/* Core Statement Quote */}
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed relative z-10 mb-6 font-medium">
                "To connect capable Sri Lankan workers with accredited international employment opportunities through professional, transparent recruitment services, guaranteed contracts, and dedicated welfare protection from Colombo to the host country."
              </p>

              {/* Dynamic Accordion Actionable Commitments */}
              <div
                className={`space-y-3 pt-2 relative z-10 transition-all duration-500 ${
                  activeSide === "mission" ? "opacity-100 max-h-96" : "opacity-85"
                }`}
              >
                <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/80 border border-sky-100 shadow-xs">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900">Zero Hidden Deductions</h5>
                    <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                      Legally binding written contracts with clearly documented base salaries and overtime terms.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/80 border border-sky-100 shadow-xs">
                  <div className="w-6 h-6 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900">100% SLBFE Endorsed</h5>
                    <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                      Full compliance with bilateral government accords, embassy attestations, and mandatory insurance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/80 border border-sky-100 shadow-xs">
                  <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                    <PlaneTakeoff className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900">Departure & Post-Settlement Escort</h5>
                    <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                      Pre-departure orientation, CMB airport lounge escort, and 24/7 overseas welfare helpline.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Status Ribbon */}
            <div className="pt-6 mt-6 border-t border-slate-200/70 flex items-center justify-between text-xs font-mono text-slate-500 relative z-10">
              <span className="flex items-center font-bold text-sky-700">
                Active Deployment Protocols
              </span>
              <span className="text-[11px] font-semibold">SLBFE Lic: 2450</span>
            </div>
          </div>

          {/* ======================================================== */}
          {/* RIGHT PORTAL: OUR VISION (THE 2030 HORIZON DESTINATION) */}
          {/* ======================================================== */}
          <div
            onMouseEnter={() => setActiveSide("vision")}
            onMouseLeave={() => setActiveSide(null)}
            className={`relative p-8 sm:p-10 lg:p-12 flex flex-col justify-between transition-all duration-500 ease-out bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-white overflow-hidden cursor-pointer select-none ${
              activeSide === "vision"
                ? "lg:flex-[1.35] shadow-2xl"
                : activeSide === "mission"
                ? "lg:flex-[0.75] opacity-95"
                : "lg:flex-1"
            }`}
          >
            {/* Giant Typographic Watermark */}
            <div className="absolute -top-10 -right-6 text-[140px] sm:text-[180px] font-black font-heading text-white/5 select-none pointer-events-none transition-transform duration-700">
              02
            </div>

            {/* Ambient Star Glow */}
            <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Telemetry Pill Badge */}
              <div className="flex items-center justify-between gap-3 mb-6 relative z-10">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase bg-sky-500/20 text-sky-300 border border-sky-400/30">
                  OUR STRATEGIC DESTINATION
                </span>
              </div>

              {/* Icon & Title Header */}
              <div className="flex items-start gap-4 mb-5 relative z-10">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-md ${
                    activeSide === "vision"
                      ? "bg-gradient-to-tr from-sky-400 to-cyan-300 text-slate-950 scale-110 shadow-cyan-400/30 font-bold"
                      : "bg-white/10 text-sky-300 border border-white/15"
                  }`}
                >
                  <Compass className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest block">
                    GLOBAL REPUTATION
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight mt-0.5">
                    Our Vision
                  </h3>
                </div>
              </div>

              {/* Core Statement Quote */}
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed relative z-10 mb-6 font-light">
                "To establish Apex World as the foremost benchmark for ethical international recruitment in Sri Lanka—recognized across the Middle East, East Asia, and Europe for exceptional candidate competency, uncompromised integrity, and human dignity."
              </p>

              {/* Dynamic Accordion Future Milestones */}
              <div
                className={`space-y-3 pt-2 relative z-10 transition-all duration-500 ${
                  activeSide === "vision" ? "opacity-100 max-h-96" : "opacity-85"
                }`}
              >
                <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xs">
                  <div className="w-6 h-6 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Globe2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">Direct Bilateral Expansion</h5>
                    <p className="text-[11px] text-slate-300 leading-snug mt-0.5">
                      Scaling official government recruitment agreements across 12+ destination nations by 2028.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xs">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 flex items-center justify-center shrink-0 mt-0.5">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">Vocational Upskilling Hub</h5>
                    <p className="text-[11px] text-slate-300 leading-snug mt-0.5">
                      State-of-the-art trade testing, technical welding certification, and foreign language simulation centers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xs">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">Preferred Enterprise Partner</h5>
                    <p className="text-[11px] text-slate-300 leading-snug mt-0.5">
                      The trusted turnkey workforce partner for premier infrastructure, healthcare, and engineering consortia worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Status Ribbon */}
            <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400 relative z-10">
              <span className="flex items-center font-bold text-sky-300">
                Target: 10,000+ Placements
              </span>
              <span className="text-[11px]">GLOBAL ACCORD</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

