import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FileText,
  ShieldCheck,
  CheckCircle2,
  Compass,
  AlertCircle,
  MessageCircle,
  HelpCircle,
  PlaneTakeoff,
  Award,
  ArrowRight,
  HeartPulse,
  Fingerprint,
  FileSignature,
  MapPin,
} from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { FAQS_DATA } from "@/data/faqsData";
import { StickyDocumentsSection } from "@/components/help/StickyDocumentsSection";

export const metadata = {
  title: "Job Seeker Information & Help Center | Apex World",
  description:
    "Comprehensive guidance for Sri Lankan workers: how to apply, document requirements, visa stages, status explanations, and FAQs.",
};

export default function HelpCenterPage() {
  const seekerFaqs = FAQS_DATA.filter((f) => f.category === "Job Seekers");

  const visaStages = [
    {
      step: "01",
      title: "Medical Examination (GAMCA / QVC)",
      category: "Health Clearance",
      desc: "Undergo fitness and diagnostic tests at authorized GCC/GAMCA or QVC medical centers in Colombo to secure certified medical fitness.",
      timing: "Stage 01",
      icon: HeartPulse,
      accentBorder: "hover:border-sky-300",
      iconBg: "bg-sky-50 text-sky-600 border border-sky-200",
      badge: "bg-sky-100/80 text-sky-800 border-sky-200",
      nodeBg: "bg-gradient-to-br from-sky-500 to-sky-600 text-white shadow-sky-500/30",
      details: ["GAMCA / GCC Approved Centers", "Blood tests, chest X-rays & fitness check", "Direct portal upload to embassy"],
    },
    {
      step: "02",
      title: "Biometrics & Embassy Endorsement",
      category: "Consular Verification",
      desc: "Attend your scheduled biometric capture, finger-scan authentication, and consular visa stamping with our documentation officer.",
      timing: "Stage 02",
      icon: Fingerprint,
      accentBorder: "hover:border-indigo-300",
      iconBg: "bg-indigo-50 text-indigo-600 border border-indigo-200",
      badge: "bg-indigo-100/80 text-indigo-800 border-indigo-200",
      nodeBg: "bg-gradient-to-br from-indigo-500 to-indigo-600 text-white shadow-indigo-500/30",
      details: ["Official embassy appointments", "Biometrics & digital facial scans", "Consular entry visa endorsement"],
    },
    {
      step: "03",
      title: "Contract Signing & Attestation",
      category: "Legal & Welfare",
      desc: "Review and sign your legally binding foreign employment contract with full wage transparency, overtime terms, and embassy attestation.",
      timing: "Stage 03",
      icon: FileSignature,
      accentBorder: "hover:border-purple-300",
      iconBg: "bg-purple-50 text-purple-600 border border-purple-200",
      badge: "bg-purple-100/80 text-purple-800 border-purple-200",
      nodeBg: "bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-purple-500/30",
      details: ["Strict wage & benefit transparency", "Sinhala / Tamil / English contract copies", "Sri Lankan Embassy attestation"],
    },
    {
      step: "04",
      title: "SLBFE Registration & Clearance",
      category: "Bureau Clearance",
      desc: "Mandatory government insurance coverage, foreign employment welfare fund registration, and official SLBFE clearance endorsement.",
      timing: "Stage 04",
      icon: ShieldCheck,
      accentBorder: "hover:border-teal-300",
      iconBg: "bg-teal-50 text-teal-600 border border-teal-200",
      badge: "bg-teal-100/80 text-teal-800 border-teal-200",
      nodeBg: "bg-gradient-to-br from-teal-500 to-teal-600 text-white shadow-teal-500/30",
      details: ["Government foreign employment insurance", "SLBFE database registration", "Departure clearance card issued"],
    },
    {
      step: "05",
      title: "Flight Ticket & Departure Briefing",
      category: "Embarkation & Flight",
      desc: "Receive your confirmed airline ticket, destination airport contact kit, and attend our comprehensive pre-departure cultural orientation.",
      timing: "Stage 05",
      icon: PlaneTakeoff,
      accentBorder: "hover:border-emerald-300",
      iconBg: "bg-emerald-50 text-emerald-600 border border-emerald-200",
      badge: "bg-emerald-100/80 text-emerald-800 border-emerald-200",
      nodeBg: "bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-emerald-500/30",
      details: ["Confirmed air ticket & baggage allowance", "Pre-departure orientation & culture briefing", "24/7 overseas welfare helpline"],
    },
  ];

  return (
    <div className="w-full">
      {/* SECTION 1: HERO WITH 4.JPEG BACKGROUND */}
      <section className="relative pt-36 sm:pt-40 pb-24 sm:pb-28 text-white overflow-hidden border-b border-slate-800">
        {/* Background Image Container with vivid clarity */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/4.jpeg"
            alt="Candidate Guidance - Sri Lanka to Global Opportunities"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Natural contrast scrims: passport, pen & airport terminal remain clearly visible */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-slate-950/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-slate-950/60" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold text-sky-300 tracking-wider uppercase bg-sky-500/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-sky-400/30 shadow-sm inline-block mb-4">
            Candidate Guidance
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight mb-4 drop-shadow-md">
            Everything You Need to Know Before Applying.
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed font-normal mb-8 drop-shadow-sm">
            A transparent overview of application steps, documentation checklists, visa procedures, and status inquiries to prepare you for overseas success.
          </p>

          {/* Quick Metrics Strip */}
          <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 bg-slate-900/70 backdrop-blur-md border border-white/15 px-5 py-2.5 rounded-2xl text-xs text-slate-300 shadow-xl">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white">6-Step Transparent Process</span>
            </div>
            <span className="hidden sm:inline text-slate-600">•</span>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span>SLBFE Registered Protocols</span>
            </div>
            <span className="hidden sm:inline text-slate-600">•</span>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Zero Placement Fee Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: HOW TO APPLY — FLOATING STAGGERED & SLIGHTLY OVERLAPPING LAYOUT */}
      <section className="py-24 sm:py-28 relative overflow-hidden bg-gradient-to-b from-slate-50 via-sky-50/30 to-white">
        {/* Ambient Floating Halos & Background Depth Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px] opacity-35 pointer-events-none" />
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-sky-200/35 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-100/25 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-xs font-bold text-sky-700 tracking-wider uppercase bg-sky-100/80 px-4 py-1.5 rounded-full border border-sky-200 shadow-2xs inline-block mb-3">
              Step-by-Step Candidate Journey
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-slate-900 tracking-tight mt-2 mb-4">
              How to Apply for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600">
                Overseas Placement
              </span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Follow these six straightforward steps to register your candidate profile with Apex World and secure verified overseas employment.
            </p>
          </div>

          {/* DYNAMIC FLOATING ASYMMETRIC STAGGERED GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
            
            {/* COLUMN 1: STEP 1 & STEP 4 (Offset Group A) */}
            <div className="space-y-6 lg:space-y-10">
              
              {/* STEP 1 — Floating Upward Offset */}
              <div className="group relative rounded-3xl p-7 sm:p-8 bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-xl shadow-slate-200/60 hover:shadow-2xl hover:shadow-sky-500/15 transition-all duration-500 hover:-translate-y-2 lg:-translate-y-4 min-h-[250px] flex flex-col justify-between overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100/40 rounded-full blur-2xl pointer-events-none group-hover:bg-sky-200/50 transition-all" />
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-600 to-sky-400 text-white font-bold text-sm flex items-center justify-center shadow-md shadow-sky-600/30">
                      01
                    </span>
                    <span className="text-[10px] font-bold text-sky-700 uppercase tracking-wider bg-sky-50 px-2.5 py-1 rounded-full border border-sky-100">
                      Explore Vacancies
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 mb-2 group-hover:text-sky-700 transition-colors">
                    Browse Available Jobs
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-normal">
                    Explore live verified openings by destination country, salary package (USD/AED/SAR), and minimum trade qualification criteria.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-sky-600">
                  <span>8+ Accredited Nations</span>
                </div>
              </div>

              {/* STEP 4 — Staggered Card (Slightly taller with checklist) */}
              <div className="group relative rounded-3xl p-7 sm:p-8 bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-xl shadow-slate-200/60 hover:shadow-2xl hover:shadow-sky-500/15 transition-all duration-500 hover:-translate-y-2 lg:translate-y-2 min-h-[290px] flex flex-col justify-between overflow-hidden">
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-indigo-100/40 rounded-full blur-2xl pointer-events-none group-hover:bg-indigo-200/50 transition-all" />
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 to-indigo-400 text-white font-bold text-sm flex items-center justify-center shadow-md shadow-indigo-600/30">
                      04
                    </span>
                    <span className="text-[10px] font-bold text-indigo-700 uppercase tracking-wider bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-100">
                      Document Ready
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 mb-2 group-hover:text-indigo-700 transition-colors">
                    Prepare Your Documents
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-normal mb-3">
                    Scan clear color copies of your valid Sri Lankan passport, updated professional CV, technical vocational licenses, and service records.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-semibold">Passport</span>
                    <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-semibold">CV/Resume</span>
                    <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-semibold">NVQ Certs</span>
                  </div>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-indigo-600">
                  <span>Fast-Track Processing</span>
                </div>
              </div>

            </div>

            {/* COLUMN 2: STEP 2 & STEP 5 (Offset Group B — Shifted Downwards for Overlap Effect) */}
            <div className="space-y-6 lg:space-y-10 lg:pt-8">
              
              {/* STEP 2 — Shifted Downwards with Taller Height */}
              <div className="group relative rounded-3xl p-7 sm:p-8 bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-xl shadow-slate-200/60 hover:shadow-2xl hover:shadow-sky-500/15 transition-all duration-500 hover:-translate-y-2 lg:translate-y-4 min-h-[300px] flex flex-col justify-between overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100/50 rounded-full blur-2xl pointer-events-none group-hover:bg-sky-200/60 transition-all" />
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-600 to-cyan-500 text-white font-bold text-sm flex items-center justify-center shadow-md shadow-sky-600/30">
                      02
                    </span>
                    <span className="text-[10px] font-bold text-cyan-700 uppercase tracking-wider bg-cyan-50 px-2.5 py-1 rounded-full border border-cyan-100">
                      Role Selection
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 mb-2 group-hover:text-sky-700 transition-colors">
                    Select a Suitable Vacancy
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-normal mb-3">
                    Check that your hands-on trade experience, vocational certifications, and personal availability align with the advertised duties, working hours, and benefits.
                  </p>
                  <div className="p-2.5 rounded-xl bg-sky-50/70 border border-sky-100 text-slate-700 text-xs">
                    💡 Free food, accommodation &amp; transport included on most contracts.
                  </div>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-sky-600">
                  <span>Transparent Contract Terms</span>
                </div>
              </div>

              {/* STEP 5 — Focal Submission Card with Elevated Glow */}
              <div className="group relative rounded-3xl p-7 sm:p-8 bg-white/95 backdrop-blur-xl border border-sky-300 ring-2 ring-sky-100 shadow-2xl shadow-sky-900/10 hover:shadow-2xl hover:shadow-sky-500/25 transition-all duration-500 hover:-translate-y-2 lg:-translate-y-2 min-h-[290px] flex flex-col justify-between overflow-hidden">
                <div className="absolute -top-10 -right-10 w-36 h-36 bg-gradient-to-br from-sky-300/30 to-indigo-300/30 rounded-full blur-2xl pointer-events-none" />
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-600 via-indigo-600 to-indigo-700 text-white font-bold text-sm flex items-center justify-center shadow-lg shadow-indigo-600/30">
                      05
                    </span>
                    <span className="text-[10px] font-bold text-indigo-700 uppercase tracking-wider bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-200 shadow-2xs">
                      Digital Portal
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 mb-2 group-hover:text-indigo-700 transition-colors">
                    Submit Online Application
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-normal mb-3">
                    Fill in our guided 6-step online form, upload your credentials, and instantly receive your official Apex World Application Reference ID.
                  </p>
                  <div className="inline-flex items-center px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                    <span>Instant Reference ID Issued</span>
                  </div>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-indigo-600">
                  <span>100% Free Online Submission</span>
                </div>
              </div>

            </div>

            {/* COLUMN 3: STEP 3 & STEP 6 (Offset Group C) */}
            <div className="space-y-6 lg:space-y-10">
              
              {/* STEP 3 — Standard Staggered Card */}
              <div className="group relative rounded-3xl p-7 sm:p-8 bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-xl shadow-slate-200/60 hover:shadow-2xl hover:shadow-sky-500/15 transition-all duration-500 hover:-translate-y-2 lg:-translate-y-3 min-h-[260px] flex flex-col justify-between overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100/40 rounded-full blur-2xl pointer-events-none group-hover:bg-amber-200/50 transition-all" />
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-400 text-white font-bold text-sm flex items-center justify-center shadow-md shadow-amber-500/30">
                      03
                    </span>
                    <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wider bg-amber-50 px-2.5 py-1 rounded-full border border-amber-100">
                      Prerequisites
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 mb-2 group-hover:text-amber-700 transition-colors">
                    Read the Requirements
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-normal">
                    Review mandatory vocational licenses, educational certifications, language criteria, and age limits set by the host country government.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-amber-700">
                  <span>Zero Misleading Terms</span>
                </div>
              </div>

              {/* STEP 6 — Final Success & Deployment Card (Emerald Theme, Shifted Downwards) */}
              <div className="group relative rounded-3xl p-7 sm:p-8 bg-gradient-to-b from-white to-emerald-50/40 backdrop-blur-xl border border-emerald-300 ring-2 ring-emerald-100 shadow-xl shadow-emerald-900/10 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 hover:-translate-y-2 lg:translate-y-6 min-h-[300px] flex flex-col justify-between overflow-hidden">
                <div className="absolute -bottom-8 -right-8 w-36 h-36 bg-emerald-200/40 rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-300/50 transition-all" />
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white font-bold text-sm flex items-center justify-center shadow-lg shadow-emerald-600/30">
                      06
                    </span>
                    <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider bg-emerald-100 px-2.5 py-1 rounded-full border border-emerald-200">
                      Final Deployment
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    Recruitment Follow-Up &amp; Stamping
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal mb-3">
                    Our Colombo recruitment officers contact shortlisted applicants via WhatsApp for trade tests, GAMCA medical clearance, and SLBFE registered flight scheduling.
                  </p>
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-800">
                    <span>SLBFE Insurance &amp; Flight Ticket Handover</span>
                  </div>
                </div>
                <div className="mt-5 pt-3 border-t border-emerald-100/80 flex items-center justify-between text-xs font-bold text-emerald-700">
                  <span>Ready to Fly Overseas</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: REQUIRED DOCUMENTS EXPLAINED — STICKY SCROLL DOSSIER */}
      <StickyDocumentsSection />

      {/* SECTION 4: GENERAL VISA PROCESS STAGES — VERTICAL ZIGZAG FLOW */}
      <section id="visa" className="py-24 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden border-t border-slate-200/80">
        {/* Soft background ambient glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 translate-y-1/2 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <span className="text-xs font-bold text-sky-600 tracking-wider uppercase bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100 shadow-sm inline-flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-sky-500" />
              Official Visa Roadmap
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 mt-4 mb-4 tracking-tight">
              General Visa Process Stages
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              While exact consular rules vary by host nation, candidates progress through these five regulated, sequential milestones under Apex World officer supervision.
            </p>
          </div>

          {/* Zigzag Timeline Container */}
          <div className="relative max-w-5xl mx-auto">
            {/* Desktop Center Curving Sinuous SVG Line */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-48 h-full pointer-events-none z-10">
              <svg
                className="w-full h-full overflow-visible"
                viewBox="0 0 100 1000"
                preserveAspectRatio="none"
                fill="none"
              >
                <defs>
                  <linearGradient id="visaCurveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="25%" stopColor="#6366f1" />
                    <stop offset="50%" stopColor="#a855f7" />
                    <stop offset="75%" stopColor="#14b8a6" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>

                {/* Soft ambient blur glow path */}
                <path
                  d="M 50,20 C 50,50 50,70 50,100 C 92,170 92,230 50,300 C 8,370 8,430 50,500 C 92,570 92,630 50,700 C 8,770 8,830 50,900 C 50,930 50,960 50,990"
                  stroke="url(#visaCurveGradient)"
                  strokeWidth="8"
                  vectorEffect="non-scaling-stroke"
                  strokeLinecap="round"
                  className="blur-[5px] opacity-40"
                />

                {/* Main curvy gradient path */}
                <path
                  d="M 50,20 C 50,50 50,70 50,100 C 92,170 92,230 50,300 C 8,370 8,430 50,500 C 92,570 92,630 50,700 C 8,770 8,830 50,900 C 50,930 50,960 50,990"
                  stroke="url(#visaCurveGradient)"
                  strokeWidth="3.5"
                  vectorEffect="non-scaling-stroke"
                  strokeLinecap="round"
                />

                {/* Dashed animated flow corridor */}
                <path
                  d="M 50,20 C 50,50 50,70 50,100 C 92,170 92,230 50,300 C 8,370 8,430 50,500 C 92,570 92,630 50,700 C 8,770 8,830 50,900 C 50,930 50,960 50,990"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6 10"
                  vectorEffect="non-scaling-stroke"
                  strokeLinecap="round"
                  className="opacity-70"
                />

                {/* Waypoint decorative orbital beacons on the curves */}
                <circle cx="92" cy="200" r="3" fill="#6366f1" className="animate-pulse" />
                <circle cx="8" cy="400" r="3" fill="#a855f7" className="animate-pulse" />
                <circle cx="92" cy="600" r="3" fill="#14b8a6" className="animate-pulse" />
                <circle cx="8" cy="800" r="3" fill="#10b981" className="animate-pulse" />
              </svg>
            </div>

            {/* Mobile Left Curving Sinuous SVG Line */}
            <div className="md:hidden absolute left-6 -translate-x-1/2 top-4 bottom-4 w-12 h-full pointer-events-none z-10">
              <svg
                className="w-full h-full overflow-visible"
                viewBox="0 0 40 1000"
                preserveAspectRatio="none"
                fill="none"
              >
                <path
                  d="M 20,20 C 20,50 20,70 20,100 C 32,170 32,230 20,300 C 8,370 8,430 20,500 C 32,570 32,630 20,700 C 8,770 8,830 20,900 C 20,930 20,960 20,990"
                  stroke="url(#visaCurveGradientMobile)"
                  strokeWidth="3"
                  vectorEffect="non-scaling-stroke"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="visaCurveGradientMobile" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="50%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Stage Items */}
            <div className="space-y-12 sm:space-y-16 relative z-20">
              {visaStages.map((stage, idx) => {
                const isEven = idx % 2 === 1; // 0, 2, 4 are Left (odd steps); 1, 3 are Right (even steps)
                const Icon = stage.icon;

                return (
                  <div key={stage.step} className="relative flex items-center">
                    {/* Node Circle (Center on Desktop, Left-6 on Mobile) */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                      <div
                        className={`w-12 h-12 rounded-2xl ${stage.nodeBg} shadow-xl ring-4 ring-white flex items-center justify-center font-heading font-black text-sm tracking-wider transition-all duration-300 hover:scale-110`}
                      >
                        {stage.step}
                      </div>
                    </div>

                    {/* Card Wrapper: Desktop Left/Right Zigzag, Mobile right of line */}
                    <div
                      className={`w-full flex ${
                        isEven ? "md:justify-end" : "md:justify-start"
                      }`}
                    >
                      <div
                        className={`w-full pl-16 md:pl-0 ${
                          isEven
                            ? "md:w-[calc(50%-3rem)] md:text-left"
                            : "md:w-[calc(50%-3rem)] md:text-left"
                        }`}
                      >
                        <div
                          className={`group relative p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${stage.accentBorder}`}
                        >
                          {/* Connector Arrow & bridge towards center curve node */}
                          {isEven ? (
                            <>
                              <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -left-3 w-3 h-3 bg-white border-l border-b border-slate-200 rotate-45 transform z-10" />
                              <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -left-8 w-6 h-[2px] bg-gradient-to-r from-indigo-200 to-indigo-400" />
                            </>
                          ) : (
                            <>
                              <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-3 w-3 h-3 bg-white border-r border-t border-slate-200 rotate-45 transform z-10" />
                              <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-8 w-6 h-[2px] bg-gradient-to-r from-sky-400 to-sky-200" />
                            </>
                          )}

                          {/* Card Header */}
                          <div className="flex items-center justify-between gap-3 mb-3.5">
                            <div className="flex items-center gap-2">
                              <span
                                className={`text-[11px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full border ${stage.badge}`}
                              >
                                {stage.category}
                              </span>
                              <span className="text-xs font-semibold text-slate-400">
                                {stage.timing}
                              </span>
                            </div>
                            <div
                              className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${stage.iconBg}`}
                            >
                              <Icon className="w-5 h-5" />
                            </div>
                          </div>

                          {/* Title */}
                          <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900 group-hover:text-sky-600 transition-colors mb-2">
                            {stage.title}
                          </h3>

                          {/* Description */}
                          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                            {stage.desc}
                          </p>

                          {/* Checkpoint list */}
                          <div className="pt-3.5 border-t border-slate-100 space-y-1.5">
                            {stage.details.map((detail, dIdx) => (
                              <div
                                key={dIdx}
                                className="flex items-center gap-2 text-xs text-slate-500"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                                <span>{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: FAQS */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-sky-600 tracking-wider uppercase bg-white px-3 py-1 rounded-full border border-slate-200">
              Candidate Questions
            </span>
            <h2 className="text-3xl font-extrabold font-heading text-slate-900 mt-3 mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              Common questions Sri Lankan job seekers ask our recruitment team.
            </p>
          </div>

          <Accordion
            items={seekerFaqs.map((faq) => ({
              id: faq.id,
              title: faq.question,
              content: faq.answer,
            }))}
          />
        </div>
      </section>

      {/* SECTION 7: CONTACT CTA */}
      <section className="py-16 bg-gradient-to-r from-sky-600 to-sky-700 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading mb-3">
            Need Help With Your Application?
          </h2>
          <p className="text-sky-100 text-xs sm:text-sm mb-6">
            Our Colombo recruitment officers are ready to answer your questions and assist with document preparation.
          </p>
          <a
            href="https://wa.me/94771234567?text=Hello%20Apex%20World,%20I%20need%20help%20with%20my%20job%20application."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-sky-900 font-bold text-sm shadow-xl transition-all hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            Contact Us on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}

