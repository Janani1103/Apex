"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Users,
  Cpu,
  FileCheck2,
  PlaneTakeoff,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building2,
} from "lucide-react";

interface PillarData {
  id: string;
  pillarNumber: string;
  code: string;
  metricBadge: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
  glowColor: string;
  deliverables: string[];
  protocolAccord: string;
}

const PILLARS: PillarData[] = [
  {
    id: "pillar-01",
    pillarNumber: "01",
    code: "PILLAR // SOURCING",
    metricBadge: "5,000+ Active Pool",
    title: "Talent Sourcing & Database",
    subtitle: "Skilled Human Capital Procurement",
    description:
      "Direct access to over 5,000+ pre-evaluated Sri Lankan technicians, certified operators, and tradespeople tailored to GCC and East Asian mega-projects.",
    icon: Users,
    gradient: "from-sky-500 via-sky-600 to-blue-700",
    glowColor: "rgba(14,165,233,0.3)",
    deliverables: [
      "48-hour candidate CV shortlist delivery",
      "Experience filtering by GCC project years & tools",
      "Multi-tier general labour & specialized trade squads",
    ],
    protocolAccord: "SLBFE ACCREDITED SOURCING",
  },
  {
    id: "pillar-02",
    pillarNumber: "02",
    code: "PILLAR // AUDIT",
    metricBadge: "100% Practical Tests",
    title: "Trade Testing & Skill Audits",
    subtitle: "Vocational Verification Bays",
    description:
      "Rigorous multi-stage assessments in state-of-the-art Colombo testing bays, auditing practical welding, electrical wiring, and technical precision.",
    icon: Cpu,
    gradient: "from-emerald-500 via-teal-600 to-emerald-700",
    glowColor: "rgba(16,185,129,0.3)",
    deliverables: [
      "6G pipe welding & ASME/AWS standard test rigs",
      "In-person and live HD video interview facilities",
      "Certified background & past project audits",
    ],
    protocolAccord: "AWS & ASME CERTIFIED TESTING",
  },
  {
    id: "pillar-03",
    pillarNumber: "03",
    code: "PILLAR // LEGAL",
    metricBadge: "100% Embassy Attested",
    title: "Consular & Legal Clearances",
    subtitle: "Diplomatic Protocol Endorsements",
    description:
      "Comprehensive administration of job order approvals, bilateral SLBFE endorsements, GAMCA medical center fast-tracking, and embassy visa attestations.",
    icon: FileCheck2,
    gradient: "from-indigo-500 via-violet-600 to-purple-700",
    glowColor: "rgba(99,102,241,0.3)",
    deliverables: [
      "Ministry of Foreign Affairs & Consular stamps",
      "Fast-track GAMCA, QVC & biometric enrollment",
      "Mandatory bilateral labor insurance documentation",
    ],
    protocolAccord: "ZERO-DELAY CONSULAR PROTOCOL",
  },
  {
    id: "pillar-04",
    pillarNumber: "04",
    code: "PILLAR // DEPLOYMENT",
    metricBadge: "99.4% Mobilization",
    title: "Turnkey Flight Mobilization",
    subtitle: "Departure & In-Country Care",
    description:
      "End-to-end mobilization handling confirmed airline group ticketing, CMB airport lounge departure escorts, and 24/7 continuous in-country welfare monitoring.",
    icon: PlaneTakeoff,
    gradient: "from-cyan-500 via-sky-600 to-blue-800",
    glowColor: "rgba(6,182,212,0.3)",
    deliverables: [
      "Pre-departure host culture readiness briefing",
      "Group airline booking & CMB departure staff",
      "Dedicated 24/7 employer HR liaison officer",
    ],
    protocolAccord: "CONTINUOUS WELFARE DESK",
  },
];

export function EmployerVerticalPillars() {
  const [activePillar, setActivePillar] = useState<string | null>(null);

  return (
    <div className="w-full">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 lg:mb-16 gap-6">
        <div>
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-sky-500/10 text-sky-300 border border-sky-400/25 text-xs font-mono font-bold tracking-wider uppercase mb-3.5">
            <span>Institutional B2B Framework</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
            Services for <span className="text-sky-400">Foreign Employers</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed font-light">
            Four solid operational pillars engineered to streamline your international workforce procurement with speed, legal compliance, and zero downtime.
          </p>
        </div>

        <Link
          href="/employers/request"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold shadow-lg shadow-sky-500/20 hover:scale-105 active:scale-95 transition-all shrink-0 self-start md:self-auto group"
        >
          <Building2 className="w-4 h-4" />
          <span>Submit Manpower Request</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* 4 STRATEGIC VERTICAL PILLAR MONOLITHS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 lg:gap-6 relative z-10">
        {PILLARS.map((pillar) => {
          const Icon = pillar.icon;
          const isHovered = activePillar === pillar.id;

          return (
            <div
              key={pillar.id}
              onMouseEnter={() => setActivePillar(pillar.id)}
              onMouseLeave={() => setActivePillar(null)}
              className="relative flex flex-col justify-between rounded-3xl bg-gradient-to-b from-slate-900/95 via-slate-900/85 to-[#0b1322] border-2 border-slate-800/90 hover:border-sky-400/80 p-7 sm:p-8 transition-all duration-300 transform hover:-translate-y-2.5 shadow-xl hover:shadow-2xl select-none group min-h-[530px]"
            >
              {/* Colored Top Crown Strip */}
              <div
                className={`absolute top-0 left-8 right-8 h-1 rounded-b-full bg-gradient-to-r ${pillar.gradient} opacity-60 group-hover:opacity-100 transition-opacity`}
              />

              {/* Ambient Hover Aura Glow */}
              <div
                className="absolute inset-0 rounded-3xl transition-opacity duration-300 opacity-0 group-hover:opacity-100 blur-2xl pointer-events-none -z-10"
                style={{ backgroundColor: pillar.glowColor }}
              />

              {/* TOP HEADER SECTION */}
              <div>
                {/* Telemetry Strip & Metric Badge */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase">
                    {pillar.code}
                  </span>

                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-white/10 text-sky-300 border border-white/10">
                    {pillar.metricBadge}
                  </span>
                </div>

                {/* Large Illuminated Icon */}
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-md ${
                      isHovered
                        ? `bg-gradient-to-tr ${pillar.gradient} text-white scale-110 shadow-sky-500/30 rotate-3`
                        : "bg-white/5 text-sky-400 border border-white/10"
                    }`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-3xl font-black font-heading text-white/40 group-hover:text-white transition-colors block leading-none">
                      {pillar.pillarNumber}
                    </span>
                    <span className="text-[9px] font-mono tracking-widest uppercase text-sky-400 font-bold block mt-1">
                      CORE PILLAR
                    </span>
                  </div>
                </div>

                {/* Pillar Title & Subtitle */}
                <h3 className="text-xl font-extrabold font-heading text-white tracking-tight group-hover:text-sky-300 transition-colors leading-tight mb-1">
                  {pillar.title}
                </h3>
                <span className="text-xs font-semibold text-slate-400 block mb-3.5">
                  {pillar.subtitle}
                </span>

                {/* Description */}
                <p className="text-slate-300 text-xs leading-relaxed mb-6 font-light">
                  {pillar.description}
                </p>

                {/* Key Deliverables Checklist */}
                <div className="space-y-2.5 pt-3 border-t border-slate-800/80">
                  <span className="text-[10px] font-mono font-bold uppercase text-slate-500 block mb-2 tracking-wider">
                    Execution SLA:
                  </span>
                  {pillar.deliverables.map((del, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="font-normal text-[11px] leading-snug">{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* BOTTOM FOOTER PROTOCOL BADGE */}
              <div className="pt-5 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                  {pillar.protocolAccord}
                </span>

                <Link
                  href="/employers/request"
                  className="w-7 h-7 rounded-lg bg-white/5 group-hover:bg-sky-500 text-slate-400 group-hover:text-slate-950 flex items-center justify-center transition-all"
                  title="Request Service"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}

