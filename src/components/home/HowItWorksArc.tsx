"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Compass,
  FileText,
  ShieldCheck,
  Award,
  FileCheck2,
  Plane,
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Clock,
  Navigation,
  Check,
} from "lucide-react";

interface StepMilestone {
  number: string;
  stepIdx: number;
  phase: string;
  title: string;
  tagline: string;
  estDuration: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  deliverables: string[];
  ctaText: string;
  ctaLink: string;
  archX: number;
  archY: number;
  angleDeg: number;
}

const STEPS: StepMilestone[] = [
  {
    number: "01",
    stepIdx: 0,
    phase: "PHASE 01: INITIAL DISCOVERY",
    title: "Explore Verified Vacancies",
    tagline: "Transparent Job Orders & Destination Options",
    estDuration: "1 - 2 Business Days",
    description:
      "Browse through verified government-approved overseas job vacancies matching your trade skills, educational background, and preferred destination country without any hidden agent markups.",
    icon: Compass,
    deliverables: [
      "100% SLBFE Accredited Job Orders",
      "Clear, verified salary brackets and allowances in writing",
      "Direct bilateral employer recruitment quotas",
    ],
    ctaText: "Browse All Current Vacancies",
    ctaLink: "/jobs",
    archX: 80,
    archY: 195,
    angleDeg: 195,
  },
  {
    number: "02",
    stepIdx: 1,
    phase: "PHASE 02: CANDIDATE REGISTRATION",
    title: "Submit Profile & Credentials",
    tagline: "Guided Digital Application & CV Formatting",
    estDuration: "24 - 48 Hours",
    description:
      "Submit your vocational trade skills, employment history, and digital copies of your passport and qualifications through our secure candidate registration portal with guided support.",
    icon: FileText,
    deliverables: [
      "Assisted international CV standard formatting",
      "National passport and qualification validity check",
      "Instant profile entry into global candidate database",
    ],
    ctaText: "Submit Online Application",
    ctaLink: "/apply",
    archX: 205,
    archY: 110,
    angleDeg: 225,
  },
  {
    number: "03",
    stepIdx: 2,
    phase: "PHASE 03: PROFESSIONAL VETTING",
    title: "Technical Review & Screening",
    tagline: "Rigorous Candidate Evaluation & Matching",
    estDuration: "2 - 3 Business Days",
    description:
      "Our certified manpower officers inspect your credentials, assess technical competencies, and conduct personal pre-screening interviews to match your profile directly with overseas quotas.",
    icon: ShieldCheck,
    deliverables: [
      "Credential authenticity and trade background check",
      "Pre-interview preparation and communication coaching",
      "Shortlisting for direct employer video/in-person interviews",
    ],
    ctaText: "Learn About Screening Standards",
    ctaLink: "/about",
    archX: 350,
    archY: 65,
    angleDeg: 255,
  },
  {
    number: "04",
    stepIdx: 3,
    phase: "PHASE 04: EMPLOYER SELECTION",
    title: "Interviews & Practical Trade Tests",
    tagline: "Client Offer Letter Issuance",
    estDuration: "5 - 10 Business Days",
    description:
      "Participate in client interviews or practical trade tests in certified technical testing facilities. Successful candidates receive authentic, legally binding employer offer letters.",
    icon: Award,
    deliverables: [
      "Live video conference or direct foreign delegation interview",
      "Vocational skill testing in approved technical workshops",
      "Issuance of signed foreign employer offer letter with fixed wage",
    ],
    ctaText: "View Trade Categories",
    ctaLink: "/jobs",
    archX: 490,
    archY: 65,
    angleDeg: 285,
  },
  {
    number: "05",
    stepIdx: 4,
    phase: "PHASE 05: REGULATORY CLEARANCE",
    title: "Visa, Medical & SLBFE Registration",
    tagline: "Authorized Embassy & Government Approvals",
    estDuration: "12 - 20 Business Days",
    description:
      "Complete mandatory medical tests at GAMCA centers, attend biometric appointments (QVC/VFS), receive consular embassy attestations, and obtain official SLBFE departure endorsement.",
    icon: FileCheck2,
    deliverables: [
      "Authorized GAMCA medical checkup & biometric registration",
      "Ministry of Foreign Affairs & foreign embassy visa endorsement",
      "Official SLBFE departure registration card & insurance coverage",
    ],
    ctaText: "Inspect Visa Procedures",
    ctaLink: "/faqs",
    archX: 635,
    archY: 110,
    angleDeg: 315,
  },
  {
    number: "06",
    stepIdx: 5,
    phase: "PHASE 06: DEPLOYMENT & TAKEOFF",
    title: "Orientation, Flight Ticket & Departure",
    tagline: "Confident Departure & Overseas In-Country Care",
    estDuration: "3 - 5 Days Before Flight",
    description:
      "Attend pre-departure cultural orientation, receive confirmed airline tickets and departure travel kits, and enjoy continuous 24/7 welfare support even after arriving at your destination.",
    icon: Plane,
    deliverables: [
      "Pre-departure workplace readiness & cultural briefing",
      "Free confirmed one-way air ticket & travel document packet",
      "Airport departure assistance + 24/7 in-country WhatsApp support",
    ],
    ctaText: "Check Pre-Departure Services",
    ctaLink: "/services",
    archX: 760,
    archY: 195,
    angleDeg: 345,
  },
];

export function HowItWorksArc() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Auto-advance stepper every 6 seconds if not hovered
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const currentStep = STEPS[activeStep];
  const StepIcon = currentStep.icon;

  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % STEPS.length);
  };

  const handlePrev = () => {
    setActiveStep((prev) => (prev - 1 + STEPS.length) % STEPS.length);
  };

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-sky-50/40 border-y border-slate-200/80">
      {/* Background Soft Aviation Ambience */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[380px] bg-sky-200/20 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c708_1px,transparent_1px),linear-gradient(to_bottom,#0284c708_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-sky-700 border border-sky-200 text-xs font-bold tracking-wide uppercase shadow-xs mb-3.5">
            <Navigation className="w-3.5 h-3.5 text-sky-600 -rotate-45" />
            <span>Standardized Journey Pipeline</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 tracking-tight">
            How It <span className="text-sky-600">Works</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
            The standardized, government-supervised recruitment journey connecting Sri Lankan talent to international career appointments in 6 structured milestones.
          </p>
        </div>

        {/* THE AVIATION NAVIGATION ARC CONTAINER */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          
          {/* Semicircular Altitude Arc SVG */}
          <div className="relative w-full h-[210px] sm:h-[250px] overflow-visible select-none">
            <svg
              viewBox="0 0 840 240"
              className="w-full h-full overflow-visible"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Active Arch Glowing Filter */}
                <filter id="arc-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* Progress Arc Gradient */}
                <linearGradient id="arc-gradient" x1="0%" y1="100%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="50%" stopColor="#0284c7" />
                  <stop offset="100%" stopColor="#0369a1" />
                </linearGradient>
              </defs>

              {/* 1. Background Arc Track (Full Sweep) */}
              <path
                d="M 80 195 C 150 90, 310 50, 420 50 C 530 50, 690 90, 760 195"
                fill="none"
                stroke="#e2e8f0"
                strokeWidth="4"
                strokeLinecap="round"
              />

              {/* Decorative Dash Arc */}
              <path
                d="M 60 205 C 130 80, 310 35, 420 35 C 530 35, 710 80, 780 205"
                fill="none"
                stroke="#94a3b8"
                strokeWidth="1"
                strokeDasharray="4 8"
                opacity="0.35"
              />

              {/* 2. Active Progress Arc (Draws up to current step) */}
              <path
                d="M 80 195 C 150 90, 310 50, 420 50 C 530 50, 690 90, 760 195"
                fill="none"
                stroke="url(#arc-gradient)"
                strokeWidth="4.5"
                strokeLinecap="round"
                filter="url(#arc-glow)"
                strokeDasharray="800"
                strokeDashoffset={800 - (activeStep / (STEPS.length - 1)) * 800}
                className="transition-all duration-700 ease-out"
              />

              {/* 3. The 6 Milestone Nodes on the Arc */}
              {STEPS.map((step, idx) => {
                const isActive = activeStep === idx;
                const isPassed = activeStep > idx;

                return (
                  <g
                    key={step.number}
                    className="cursor-pointer group"
                    onClick={() => setActiveStep(idx)}
                  >
                    {/* Pulsing Aura for Active Step */}
                    {isActive && (
                      <circle
                        cx={step.archX}
                        cy={step.archY}
                        r="24"
                        fill="#38bdf8"
                        fillOpacity="0.25"
                        className="animate-ping"
                      />
                    )}

                    {/* Milestone Outer Circle Button */}
                    <circle
                      cx={step.archX}
                      cy={step.archY}
                      r={isActive ? "20" : "15"}
                      fill={isActive ? "#0284c7" : isPassed ? "#0284c7" : "#ffffff"}
                      stroke={isActive ? "#38bdf8" : isPassed ? "#0284c7" : "#cbd5e1"}
                      strokeWidth={isActive ? "3.5" : "2"}
                      filter={isActive ? "drop-shadow(0 4px 10px rgba(14,165,233,0.4))" : undefined}
                      className="transition-all duration-300"
                    />

                    {/* Step Number or Checkmark Text */}
                    {isPassed ? (
                      <text
                        x={step.archX}
                        y={step.archY + 4}
                        textAnchor="middle"
                        fill="#ffffff"
                        fontSize="12"
                        fontWeight="bold"
                        fontFamily="sans-serif"
                      >
                        ✓
                      </text>
                    ) : (
                      <text
                        x={step.archX}
                        y={step.archY + 4}
                        textAnchor="middle"
                        fill={isActive ? "#ffffff" : "#475569"}
                        fontSize={isActive ? "12" : "10"}
                        fontWeight="800"
                        fontFamily="monospace"
                      >
                        {step.number}
                      </text>
                    )}

                    {/* Milestone Step Pill Under Arc */}
                    <text
                      x={step.archX}
                      y={step.archY + 34}
                      textAnchor="middle"
                      fill={isActive ? "#0284c7" : "#64748b"}
                      fontSize={isActive ? "11" : "10"}
                      fontWeight={isActive ? "800" : "600"}
                      fontFamily="system-ui, sans-serif"
                      className="transition-colors duration-200 select-none"
                    >
                      {step.title.split(" ")[0]}
                    </text>
                  </g>
                );
              })}

              {/* 4. Animated Gliding Jet Beacon along Active Position */}
              <g
                transform={`translate(${currentStep.archX}, ${currentStep.archY - 32})`}
                className="transition-all duration-500 ease-out pointer-events-none"
              >
                <circle cx="0" cy="0" r="14" fill="#0284c7" filter="drop-shadow(0 2px 8px rgba(14,165,233,0.5))" />
                <path
                  d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
                  fill="#ffffff"
                  transform="translate(-6.5, -6.5) scale(0.6)"
                />
              </g>
            </svg>
          </div>

          {/* COCKPIT FLIGHT HUD DISPLAY CARD (Interactive Details Showcase) */}
          <div className="relative mt-2 sm:mt-4 bg-white/95 rounded-3xl border-2 border-sky-200/90 p-6 sm:p-8 lg:p-10 shadow-[0_15px_45px_-10px_rgba(14,165,233,0.18)] backdrop-blur-xl">
            
            {/* Top Cyan Flight Strip */}
            <div className="absolute top-0 left-8 right-8 h-1.5 bg-gradient-to-r from-sky-400 via-sky-500 to-cyan-400 rounded-b-full shadow-xs" />

            {/* Header: Phase Pill + Estimated Timeline */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pt-1">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-xl bg-sky-100 text-sky-700 text-xs font-bold border border-sky-200 font-mono">
                  {currentStep.phase}
                </span>
                <span className="text-xs font-bold text-slate-400">
                  STEP {currentStep.number} OF 06
                </span>
              </div>

              {/* Estimated Timeline Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200 self-start sm:self-auto">
                <Clock className="w-3.5 h-3.5 text-sky-600" />
                <span>Est. Timeline: <strong className="text-slate-900">{currentStep.estDuration}</strong></span>
              </div>
            </div>

            {/* Milestone Title & Icon */}
            <div className="flex items-start gap-4 mb-4">
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-sky-500 to-cyan-400 text-white flex items-center justify-center shadow-lg shadow-sky-500/25 shrink-0">
                <StepIcon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 leading-tight">
                  {currentStep.title}
                </h3>
                <p className="text-sky-600 text-xs sm:text-sm font-semibold mt-1">
                  {currentStep.tagline}
                </p>
              </div>
            </div>

            {/* Description Paragraph */}
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 bg-slate-50/70 p-4 rounded-2xl border border-slate-100">
              {currentStep.description}
            </p>

            {/* Milestone Deliverables Checklist */}
            <div className="space-y-3 mb-8">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Phase Deliverables & Verification:
              </div>
              {currentStep.deliverables.map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="font-medium leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {/* Cockpit HUD Controls Footer */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              
              {/* Stepper Navigation Buttons */}
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={handlePrev}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous Phase</span>
                </button>

                <button
                  onClick={handleNext}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-semibold shadow-md shadow-sky-500/25 transition-colors"
                >
                  <span>Next Phase</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Direct Milestone Action CTA */}
              <Link
                href={currentStep.ctaLink}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-sky-600 hover:text-sky-700 transition-colors group"
              >
                <span>{currentStep.ctaText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Stepper Dots Indicator under HUD */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {STEPS.map((step, idx) => (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeStep === idx
                    ? "w-8 bg-sky-500"
                    : "w-2 bg-slate-300 hover:bg-sky-300"
                }`}
                title={`Phase ${step.number}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

