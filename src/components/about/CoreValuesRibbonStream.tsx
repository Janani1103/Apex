"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  Award,
  Briefcase,
  Eye,
  HeartHandshake,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Plane,
} from "lucide-react";

interface RibbonValue {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  code: string;
  gradient: string;
  foldDark: string;
  glowColor: string;
  lightBg: string;
  textColor: string;
  icon: React.ElementType;
  deliverables: string[];
}

const RIBBON_VALUES: RibbonValue[] = [
  {
    id: "val-01",
    number: "01",
    title: "Trust & Dependability",
    subtitle: "Building enduring bilateral partnerships",
    description:
      "We foster dependable, long-term relationships with both aspiring workers and sovereign corporate clients through verified job openings, transparent legal backing, and certified fulfillment.",
    code: "SLBFE ACCORD // 01",
    gradient: "from-sky-500 via-sky-600 to-blue-700",
    foldDark: "bg-blue-900",
    glowColor: "rgba(14,165,233,0.35)",
    lightBg: "bg-sky-50/70 border-sky-100",
    textColor: "text-sky-700",
    icon: ShieldCheck,
    deliverables: ["Direct Bilateral Accords", "Verified Employer Quotas", "Zero Sub-Agent Mediation"],
  },
  {
    id: "val-02",
    number: "02",
    title: "Integrity & Ethics",
    subtitle: "Uncompromising truth in every communication",
    description:
      "Every job specification, wage rate, overtime formula, and accommodation standard is documented with total honesty. What is promised in Colombo is delivered in full at destination.",
    code: "ETHICAL CODE // 02",
    gradient: "from-emerald-500 via-teal-600 to-emerald-700",
    foldDark: "bg-emerald-950",
    glowColor: "rgba(16,185,129,0.35)",
    lightBg: "bg-emerald-50/70 border-emerald-100",
    textColor: "text-emerald-700",
    icon: Award,
    deliverables: ["Truthful Legally Binding Wages", "No Misleading Promises", "Ministry Certified Contracts"],
  },
  {
    id: "val-03",
    number: "03",
    title: "Professionalism & Precision",
    subtitle: "Delivering international recruitment standards",
    description:
      "Our operations adhere strictly to international talent protocols, certified trade tests, GAMCA medical clearances, and consular attestations that premier foreign employers demand.",
    code: "CONSULAR PROTOCOL // 03",
    gradient: "from-indigo-600 via-violet-600 to-purple-700",
    foldDark: "bg-indigo-950",
    glowColor: "rgba(99,102,241,0.35)",
    lightBg: "bg-indigo-50/70 border-indigo-100",
    textColor: "text-indigo-700",
    icon: Briefcase,
    deliverables: ["Accredited Technical Trade Testing", "GAMCA Medical Fast-Track", "Consular Visa Endorsement"],
  },
  {
    id: "val-04",
    number: "04",
    title: "Financial & Operational Transparency",
    subtitle: "Providing complete clarity from day one",
    description:
      "Clear itemized documentation, contracts in your native tongue, and zero hidden deductions. Candidates and employers always know exactly where their application stands at every stage.",
    code: "ZERO HIDDEN CHARGES // 04",
    gradient: "from-amber-500 via-orange-500 to-amber-700",
    foldDark: "bg-amber-950",
    glowColor: "rgba(245,158,11,0.35)",
    lightBg: "bg-amber-50/70 border-amber-100",
    textColor: "text-amber-800",
    icon: Eye,
    deliverables: ["Itemized Regulatory Receipts", "Clear Written Base Salary", "Real-Time Portal Tracking"],
  },
  {
    id: "val-05",
    number: "05",
    title: "Lifelong Worker Care & Commitment",
    subtitle: "Supporting you throughout the overseas journey",
    description:
      "Our responsibility never ends at the boarding gate. We maintain dedicated 24/7 overseas welfare desks, routine employer welfare checks, and family assistance throughout the contract period.",
    code: "CONTINUOUS WELFARE // 05",
    gradient: "from-cyan-500 via-sky-600 to-blue-800",
    foldDark: "bg-cyan-950",
    glowColor: "rgba(6,182,212,0.35)",
    lightBg: "bg-cyan-50/70 border-cyan-100",
    textColor: "text-cyan-800",
    icon: HeartHandshake,
    deliverables: ["Airport Lounge Escort at CMB", "24/7 In-Country Welfare Support", "Emergency Family Helpline Desk"],
  },
];

export function CoreValuesRibbonStream() {
  const [activeRibbon, setActiveRibbon] = useState<string | null>(null);

  return (
    <div className="w-full">
      {/* Top Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-sky-700 border border-sky-200 text-xs font-bold tracking-wide uppercase shadow-xs mb-3.5">
          <Sparkles className="w-3.5 h-3.5 text-sky-600" />
          <span>Our Unshakeable Bedrock</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 tracking-tight">
          The Five <span className="text-sky-600">Core Values</span>
        </h2>

        <p className="text-slate-600 text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
          Connected like aerodynamic flight streams, these five fundamental principles anchor every placement, candidate interaction, and international employer partnership.
        </p>
      </div>

      {/* CONNECTED RIBBON STREAM STAGE */}
      <div className="relative max-w-5xl mx-auto">
        
        {/* Vertical Connecting Flight Spine Line */}
        <div className="absolute left-6 sm:left-12 top-6 bottom-6 w-1 bg-gradient-to-b from-sky-400 via-teal-400 via-amber-400 to-cyan-500 rounded-full z-0 opacity-40 hidden sm:block" />

        {/* Stack of 5 Layered 3D Ribbons */}
        <div className="space-y-5 sm:space-y-6 relative z-10">
          {RIBBON_VALUES.map((item, index) => {
            const Icon = item.icon;
            const isHovered = activeRibbon === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveRibbon(item.id)}
                onMouseLeave={() => setActiveRibbon(null)}
                className={`group relative transition-all duration-300 ease-out select-none transform ${
                  isHovered ? "sm:translate-x-3 z-30" : "sm:translate-x-0 z-10"
                }`}
              >
                {/* 3D Drop Shadow Aura */}
                <div
                  className="absolute inset-0 rounded-3xl transition-opacity duration-300 opacity-0 group-hover:opacity-100 blur-xl pointer-events-none"
                  style={{ backgroundColor: item.glowColor }}
                />

                {/* MAIN RIBBON CONTAINER */}
                <div className="relative flex flex-col md:flex-row items-stretch bg-white rounded-3xl sm:rounded-[2rem] border-2 border-slate-200/90 shadow-md group-hover:shadow-2xl group-hover:border-transparent transition-all duration-300 overflow-hidden">
                  
                  {/* LEFT RIBBON 3D FOLDED HEAD (Distinct Vibrant Gradient) */}
                  <div
                    className={`relative px-6 py-6 sm:px-8 sm:py-8 bg-gradient-to-br ${item.gradient} text-white flex md:flex-col items-center justify-between md:justify-center gap-3 shrink-0 md:w-36 lg:w-40`}
                  >
                    {/* Folded 3D Corner Notch (Origami Ribbon Effect) */}
                    <div
                      className={`absolute -bottom-2 -left-2 w-4 h-4 ${item.foldDark} rotate-45 hidden md:block`}
                    />

                    {/* Flight Icon Badge */}
                    <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Ribbon Number */}
                    <div className="text-center">
                      <span className="text-2xl sm:text-3xl font-black font-heading text-white tracking-tight block leading-none">
                        {item.number}
                      </span>
                      <span className="text-[10px] font-mono tracking-widest uppercase text-white/80 font-bold block mt-1">
                        PILLAR
                      </span>
                    </div>

                    {/* Chevron Arrow on Desktop */}
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[12px] border-l-white/95 z-20" />
                  </div>

                  {/* CENTER & RIGHT CONTENT STRIP */}
                  <div className="p-6 sm:p-7 md:py-6 md:px-8 flex-grow flex flex-col justify-between">
                    <div>
                      {/* Top Telemetry Strip */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                          {item.code}
                        </span>

                        <span className="text-[11px] font-semibold text-slate-500 italic">
                          {item.subtitle}
                        </span>
                      </div>

                      {/* Main Value Title */}
                      <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 tracking-tight group-hover:text-sky-700 transition-colors">
                        {item.title}
                      </h3>

                      {/* Descriptive Paragraph */}
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2 mb-4 font-normal">
                        {item.description}
                      </p>
                    </div>

                    {/* Key Deliverables Pills Strip */}
                    <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-mono font-bold uppercase text-slate-400 mr-1">
                        Commitment:
                      </span>
                      {item.deliverables.map((del, i) => (
                        <div
                          key={i}
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-semibold border ${item.lightBg} ${item.textColor} transition-all duration-300 shadow-2xs`}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

