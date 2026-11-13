"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Building2,
  FileText,
  Users,
  FileCheck2,
  Headphones,
  CheckCircle2,
  Ticket,
  QrCode,
  Lock,
} from "lucide-react";

interface BoardingPassCredential {
  code: string;
  serialNumber: string;
  gate: string;
  seat: string;
  title: string;
  pillarName: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  hologramColor: string;
  deliverables: string[];
  securityClass: string;
}

const BOARDING_PASSES: BoardingPassCredential[] = [
  {
    code: "GOV-LICENSE-01",
    serialNumber: "GLV-SLBFE-3421-LK",
    gate: "GATE 01",
    seat: "SEAT 1A",
    title: "Professional Recruitment Support",
    pillarName: "SLBFE LEGAL ACCREDITATION",
    subtitle: "Standardized Technical Evaluation & Vetting",
    description:
      "Every applicant receives structured vocational testing, credential authentication, and personal interview coaching under strict Sri Lanka Bureau of Foreign Employment (SLBFE) compliance.",
    icon: ShieldCheck,
    accentColor: "from-sky-500 to-blue-600",
    hologramColor: "from-cyan-400 via-sky-300 to-blue-500",
    deliverables: [
      "100% SLBFE Accredited Government License",
      "Rigorous technical skill testing in authorized centers",
      "Authentic legal work permits with zero fraud guarantee",
    ],
    securityClass: "CLASS A // LEGAL GUARANTEE",
  },
  {
    code: "DIRECT-MOU-02",
    serialNumber: "GLV-CORP-MOU-889",
    gate: "GATE 02",
    seat: "SEAT 1B",
    title: "Direct Employer Connections",
    pillarName: "ZERO SUB-AGENTS POLICY",
    subtitle: "Authenticated Corporate MoUs Without Middlemen",
    description:
      "We strictly eliminate informal brokers and unauthorized middlemen. Every job quota originates directly from vetted international corporate employers with verified embassy-attested demand orders.",
    icon: Building2,
    accentColor: "from-blue-600 to-indigo-600",
    hologramColor: "from-blue-400 via-indigo-300 to-sky-400",
    deliverables: [
      "Direct bilateral corporate MoUs worldwide",
      "Embassy-authenticated job orders with fixed quotas",
      "Direct foreign delegation video & in-person interviews",
    ],
    securityClass: "CLASS A // CORPORATE BILATERAL",
  },
  {
    code: "CONTRACT-03",
    serialNumber: "GLV-LEGAL-WAGE-074",
    gate: "GATE 03",
    seat: "SEAT 1C",
    title: "Transparent Recruitment Process",
    pillarName: "ZERO HIDDEN CHARGES",
    subtitle: "Legally Binding Written Contracts",
    description:
      "No hidden fees or misleading verbal promises. Candidates receive clear, written contracts specifying exact base wages, overtime formulas, accommodation, and food provisions before flight departure.",
    icon: FileText,
    accentColor: "from-emerald-500 to-teal-600",
    hologramColor: "from-emerald-300 via-teal-300 to-cyan-400",
    deliverables: [
      "Fixed monthly base salary stated in writing",
      "Guaranteed employer-sponsored food & accommodation",
      "Itemized official receipts for all regulatory steps",
    ],
    securityClass: "CLASS A // FINANCIAL TRANSPARENCY",
  },
  {
    code: "VISA-DESK-04",
    serialNumber: "GLV-EMB-VISA-512",
    gate: "GATE 04",
    seat: "SEAT 1D",
    title: "Document & Visa Guidance",
    pillarName: "GAMCA & QVC CLEARANCE",
    subtitle: "Authorized Medical & Consular Fast-Track",
    description:
      "Hands-on procedural coordination with GAMCA medical centers, Qatar Visa Centers (QVC), Saudi biometric portals, consular foreign ministry stamps, and official SLBFE final registration endorsement.",
    icon: FileCheck2,
    accentColor: "from-sky-600 to-cyan-600",
    hologramColor: "from-sky-300 via-cyan-300 to-teal-400",
    deliverables: [
      "Fast-track GAMCA accredited medical scheduling",
      "Biometric enrollment (QVC / VFS / Tasheel) assistance",
      "Ministry of Foreign Affairs & Embassy visa stamp attestation",
    ],
    securityClass: "CLASS A // EMBASSY PROTOCOL",
  },
  {
    code: "FLIGHT-KIT-05",
    serialNumber: "GLV-DEP-ORIENT-239",
    gate: "GATE 05",
    seat: "SEAT 1E",
    title: "Dedicated Candidate Assistance",
    pillarName: "PRE-DEPARTURE ESCORT",
    subtitle: "Guidance from Registration to Takeoff",
    description:
      "Comprehensive milestone guidance covering assisted digital profile creation, workplace cultural readiness workshops, travel document packages, and airport departure lounge escort.",
    icon: Users,
    accentColor: "from-amber-500 to-orange-600",
    hologramColor: "from-amber-300 via-yellow-200 to-sky-400",
    deliverables: [
      "Assisted digital CV formatting & profile optimization",
      "Cultural adaptation & foreign workplace orientation",
      "Confirmed airline ticket handover + Airport escort staff",
    ],
    securityClass: "CLASS A // AIRPORT ESCORT",
  },
  {
    code: "24-7-CARE-06",
    serialNumber: "GLV-CARE-HELP-991",
    gate: "GATE 06",
    seat: "SEAT 1F",
    title: "Reliable Communication & Overseas Care",
    pillarName: "24/7 WHATSAPP HELPLINE",
    subtitle: "Real-Time Updates & In-Country Welfare",
    description:
      "Dedicated WhatsApp and telephone support desks providing transparent application milestone tracking, plus continuous in-country welfare protection even after settling in the host nation.",
    icon: Headphones,
    accentColor: "from-cyan-600 to-blue-700",
    hologramColor: "from-cyan-300 via-sky-300 to-indigo-400",
    deliverables: [
      "Dedicated personal WhatsApp case officer for every worker",
      "Real-time SMS & online portal application tracking",
      "24/7 in-country welfare support desk for workers & families",
    ],
    securityClass: "CLASS A // CONTINUOUS WELFARE",
  },
];

export function WhyChooseUsBento() {
  const [activeCode, setActiveCode] = useState<string | null>(null);

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-sky-50/60 via-white to-slate-50/80">
      {/* Background Ambient Glow & Aviation Grid */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[360px] bg-sky-200/25 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[350px] bg-blue-200/20 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c708_1px,transparent_1px),linear-gradient(to_bottom,#0284c708_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-sky-700 border border-sky-200/80 text-xs font-bold tracking-wide uppercase shadow-xs mb-3.5">
            <Ticket className="w-3.5 h-3.5 text-sky-600" />
            <span>Aviation Security Credentials</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 tracking-tight">
            Why Choose <span className="text-sky-600">Apex World</span>?
          </h2>

          <p className="text-slate-600 text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
            Every candidate deploys under certified government governance. Inspect our <strong>6 Official Security Travel Passes</strong> guaranteeing zero sub-agents, 100% written contracts, and lifetime overseas support.
          </p>
        </div>

        {/* 6 AVIATION BOARDING PASSES / SECURITY CREDENTIALS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {BOARDING_PASSES.map((pass) => {
            const IconComponent = pass.icon;
            const isHovered = activeCode === pass.code;

            return (
              <div
                key={pass.code}
                onMouseEnter={() => setActiveCode(pass.code)}
                onMouseLeave={() => setActiveCode(null)}
                className="group relative flex flex-col justify-between bg-white rounded-3xl border border-slate-200/90 shadow-md hover:shadow-2xl hover:border-sky-400 transition-all duration-300 transform hover:-translate-y-2 select-none overflow-hidden p-6 sm:p-7"
              >
                {/* Holographic Security Watermark Seal (Glows & Shimmers on Hover) */}
                <div
                  className={`absolute top-5 right-5 w-14 h-14 rounded-full border border-sky-300/40 flex items-center justify-center transition-all duration-500 pointer-events-none ${
                    isHovered
                      ? "opacity-100 scale-105 shadow-[0_0_20px_rgba(56,189,248,0.35)]"
                      : "opacity-45"
                  }`}
                >
                  {/* Iridescent Hologram Gradient Ring */}
                  <div
                    className={`w-full h-full rounded-full bg-gradient-to-tr ${pass.hologramColor} opacity-20 animate-spin [animation-duration:14s]`}
                  />
                  <div className="absolute inset-1 rounded-full border border-dashed border-sky-400/50" />
                  <div className="absolute flex flex-col items-center justify-center text-center">
                    <Lock className="w-3.5 h-3.5 text-sky-600 mb-0.5" />
                    <span className="text-[7px] font-mono font-extrabold text-slate-800 tracking-tighter uppercase leading-none">
                      VERIFIED
                    </span>
                  </div>
                </div>

                {/* Main Card Content */}
                <div>
                  {/* Title & Icon Header */}
                  <div className="flex items-start gap-3.5 mb-3 pr-14">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-500 to-cyan-400 text-white flex items-center justify-center shadow-md shadow-sky-500/25 shrink-0 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-sky-600 uppercase tracking-wider block">
                        {pass.pillarName}
                      </span>
                      <h3 className="text-lg font-bold font-heading text-slate-900 leading-tight mt-0.5">
                        {pass.title}
                      </h3>
                    </div>
                  </div>

                  {/* Subtitle Tagline */}
                  <p className="text-xs font-semibold text-slate-700 mb-2">
                    {pass.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-slate-500 text-xs leading-relaxed mb-4">
                    {pass.description}
                  </p>

                  {/* 3 Deliverables Checklist */}
                  <div className="space-y-2 pt-1 pb-2">
                    {pass.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="font-medium leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
