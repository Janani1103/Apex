import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  Users,
  Search,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Briefcase,
  Award,
  Globe2,
  Compass,
  FileText,
  Clock,
  Layers,
  HardHat,
  Flame,
  Zap,
  Truck,
  Utensils,
  HeartPulse,
  Cog,
  Wrench,
  Plane,
} from "lucide-react";
import { WorkerCard } from "@/components/employers/WorkerCard";
import { WORKERS_DATA } from "@/data/workersData";

export const metadata = {
  title: "Foreign Employers Gateway | Apex World Foreign Employment Agencies",
  description:
    "Discover pre-screened Sri Lankan talent for your international workforce. Browse certified workers and submit custom manpower requests.",
};

export default function EmployersLandingPage() {
  const featuredWorkers = WORKERS_DATA.filter((w) => w.visibleOnWebsite && w.availabilityStatus === "Available").slice(0, 4);

  const categories = [
    {
      name: "Construction & Civil",
      desc: "Carpenters, masons, steel fixers, civil foremen",
      count: 85,
      icon: HardHat,
      iconStyle: "bg-sky-50 text-sky-600 border-sky-200/90 group-hover:bg-sky-600 group-hover:text-white group-hover:border-sky-600",
      barGradient: "bg-gradient-to-r from-sky-400 to-sky-600",
      textAccent: "text-sky-600",
      hoverText: "group-hover:text-sky-600",
      hoverBorder: "hover:border-sky-300",
      dotBg: "bg-sky-500",
      arrowStyle: "group-hover:bg-sky-600 group-hover:text-white group-hover:border-sky-600",
    },
    {
      name: "Mechanical & Welding",
      desc: "6G ASME certified pipe welders, TIG/MIG fabricators",
      count: 26,
      icon: Flame,
      iconStyle: "bg-amber-50 text-amber-600 border-amber-200/90 group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600",
      barGradient: "bg-gradient-to-r from-amber-400 to-amber-600",
      textAccent: "text-amber-600",
      hoverText: "group-hover:text-amber-600",
      hoverBorder: "hover:border-amber-300",
      dotBg: "bg-amber-500",
      arrowStyle: "group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600",
    },
    {
      name: "Electrical & Power",
      desc: "Industrial electricians, switchgear & panel wiremen",
      count: 32,
      icon: Zap,
      iconStyle: "bg-violet-50 text-violet-600 border-violet-200/90 group-hover:bg-violet-600 group-hover:text-white group-hover:border-violet-600",
      barGradient: "bg-gradient-to-r from-violet-400 to-violet-600",
      textAccent: "text-violet-600",
      hoverText: "group-hover:text-violet-600",
      hoverBorder: "hover:border-violet-300",
      dotBg: "bg-violet-500",
      arrowStyle: "group-hover:bg-violet-600 group-hover:text-white group-hover:border-violet-600",
    },
    {
      name: "Heavy Transportation",
      desc: "Trailer drivers, heavy equipment & crane operators",
      count: 48,
      icon: Truck,
      iconStyle: "bg-emerald-50 text-emerald-600 border-emerald-200/90 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600",
      barGradient: "bg-gradient-to-r from-emerald-400 to-emerald-600",
      textAccent: "text-emerald-600",
      hoverText: "group-hover:text-emerald-600",
      hoverBorder: "hover:border-emerald-300",
      dotBg: "bg-emerald-500",
      arrowStyle: "group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600",
    },
    {
      name: "Hospitality & Tourism",
      desc: "Guest relations, culinary chefs, baristas, waitstaff",
      count: 40,
      icon: Utensils,
      iconStyle: "bg-rose-50 text-rose-600 border-rose-200/90 group-hover:bg-rose-600 group-hover:text-white group-hover:border-rose-600",
      barGradient: "bg-gradient-to-r from-rose-400 to-rose-600",
      textAccent: "text-rose-600",
      hoverText: "group-hover:text-rose-600",
      hoverBorder: "hover:border-rose-300",
      dotBg: "bg-rose-500",
      arrowStyle: "group-hover:bg-rose-600 group-hover:text-white group-hover:border-rose-600",
    },
    {
      name: "Healthcare Support",
      desc: "Japan SSW caregivers, geriatric aides, hospital orderlies",
      count: 22,
      icon: HeartPulse,
      iconStyle: "bg-teal-50 text-teal-600 border-teal-200/90 group-hover:bg-teal-600 group-hover:text-white group-hover:border-teal-600",
      barGradient: "bg-gradient-to-r from-teal-400 to-teal-600",
      textAccent: "text-teal-600",
      hoverText: "group-hover:text-teal-600",
      hoverBorder: "hover:border-teal-300",
      dotBg: "bg-teal-500",
      arrowStyle: "group-hover:bg-teal-600 group-hover:text-white group-hover:border-teal-600",
    },
    {
      name: "Precision Manufacturing",
      desc: "CNC machinists, tool & die makers, machine mechanics",
      count: 35,
      icon: Cog,
      iconStyle: "bg-indigo-50 text-indigo-600 border-indigo-200/90 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600",
      barGradient: "bg-gradient-to-r from-indigo-400 to-indigo-600",
      textAccent: "text-indigo-600",
      hoverText: "group-hover:text-indigo-600",
      hoverBorder: "hover:border-indigo-300",
      dotBg: "bg-indigo-500",
      arrowStyle: "group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600",
    },
    {
      name: "Technical Maintenance",
      desc: "HVAC chiller technicians, building automation mechanics",
      count: 29,
      icon: Wrench,
      iconStyle: "bg-cyan-50 text-cyan-600 border-cyan-200/90 group-hover:bg-cyan-600 group-hover:text-white group-hover:border-cyan-600",
      barGradient: "bg-gradient-to-r from-cyan-400 to-cyan-600",
      textAccent: "text-cyan-600",
      hoverText: "group-hover:text-cyan-600",
      hoverBorder: "hover:border-cyan-300",
      dotBg: "bg-cyan-500",
      arrowStyle: "group-hover:bg-cyan-600 group-hover:text-white group-hover:border-cyan-600",
    },
    {
      name: "General Site Labour",
      desc: "Warehouse pickers, cargo handlers, civil assistants",
      count: 60,
      icon: Users,
      iconStyle: "bg-orange-50 text-orange-600 border-orange-200/90 group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600",
      barGradient: "bg-gradient-to-r from-orange-400 to-orange-600",
      textAccent: "text-orange-600",
      hoverText: "group-hover:text-orange-600",
      hoverBorder: "hover:border-orange-300",
      dotBg: "bg-orange-500",
      arrowStyle: "group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600",
    },
  ];

  const recruitmentStages = [
    {
      step: 1,
      title: "Browse Workers",
      desc: "Explore pre-screened candidate profiles by specialized skills and global experience.",
      icon: Search,
      fromColor: "#0ea5e9", // sky-500
      toColor: "#0284c7",   // sky-600
      strokeColor: "#38bdf8", // sky-400
      cardBorder: "border-sky-200/90 hover:border-sky-500 shadow-sky-500/10",
      badgeColor: "bg-sky-50 text-sky-700 border-sky-200",
      zigzagClass: "md:translate-y-0",
    },
    {
      step: 2,
      title: "Review Profiles",
      desc: "Check verified trade credentials, NVQ certificates, and technical trade histories.",
      icon: CheckCircle2,
      fromColor: "#6366f1", // indigo-500
      toColor: "#4f46e5",   // indigo-600
      strokeColor: "#818cf8", // indigo-400
      cardBorder: "border-indigo-200/90 hover:border-indigo-500 shadow-indigo-500/10",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
      zigzagClass: "md:translate-y-8",
    },
    {
      step: 3,
      title: "Submit Request",
      desc: "Specify shortlisted candidate IDs or submit required project manpower quotas.",
      icon: FileText,
      fromColor: "#f59e0b", // amber-500
      toColor: "#d97706",   // amber-600
      strokeColor: "#fbbf24", // amber-400
      cardBorder: "border-amber-200/90 hover:border-amber-500 shadow-amber-500/10",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
      zigzagClass: "md:translate-y-0",
    },
    {
      step: 4,
      title: "Team Follow-Up",
      desc: "Direct recruitment director connects with you via WhatsApp or video call within 24h.",
      icon: Users,
      fromColor: "#a855f7", // purple-500
      toColor: "#9333ea",   // purple-600
      strokeColor: "#c084fc", // purple-400
      cardBorder: "border-purple-200/90 hover:border-purple-500 shadow-purple-500/10",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
      zigzagClass: "md:translate-y-8",
    },
    {
      step: 5,
      title: "Coordination & Flight",
      desc: "Trade testing, medical processing, visa attestation, and flight departure guaranteed.",
      icon: Plane,
      fromColor: "#10b981", // emerald-500
      toColor: "#059669",   // emerald-600
      strokeColor: "#34d399", // emerald-400
      cardBorder: "border-emerald-300 hover:border-emerald-500 shadow-emerald-500/10",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      zigzagClass: "md:translate-y-0",
    },
  ];

  return (
    <div className="w-full">
      {/* SECTION 1: EMPLOYER HERO (LIGHT THEME WITH WORKER SHOWCASE IMAGE) */}
      <section className="relative pt-32 sm:pt-36 pb-20 bg-gradient-to-b from-sky-50/70 via-white to-slate-50 border-b border-slate-200/80 overflow-hidden">
        {/* Soft background ambient glow and grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-100/70 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c70a_1px,transparent_1px),linear-gradient(to_bottom,#0284c70a_1px,transparent_1px)] bg-[size:32px_32px] opacity-70 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* LEFT COLUMN: HERO CONTENT & ACTIONS (5 COLS) */}
            <div className="lg:col-span-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/80 border border-sky-200/90 text-sky-800 text-xs font-semibold mb-6 shadow-2xs">
                <Building2 className="w-4 h-4 text-sky-600" />
                <span>Corporate Manpower Solutions • Sri Lanka Gateway</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-slate-900 tracking-tight leading-[1.14] mb-5">
                Find the Right Talent.{" "}
                <span className="bg-gradient-to-r from-sky-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
                  Build a Stronger Workforce.
                </span>
              </h1>

              <p className="max-w-xl mx-auto lg:mx-0 text-base text-slate-600 font-normal leading-relaxed mb-8">
                Access a diverse pool of skilled and experienced Sri Lankan workers. Discover suitable candidates and connect with our recruitment team to fulfil your international workforce requirements.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 mb-9">
                <Link
                  href="/employers/workers"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-lg shadow-sky-600/25 hover:shadow-xl hover:shadow-sky-600/35 hover:-translate-y-0.5 active:translate-y-0 transition-all"
                >
                  <Search className="w-4 h-4" />
                  <span>Browse Workers</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/employers/request"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border-2 border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all"
                >
                  <FileText className="w-4 h-4 text-sky-600" />
                  <span>Request Workers</span>
                </Link>
              </div>

              {/* Key Trust Highlights */}
              <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-5 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>NVQ & NAITA Verified</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>GCC Ready Shortlists</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>24h Rapid Processing</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: EXPANDED PURE WORKER SHOWCASE (7 COLS) */}
            <div className="lg:col-span-7">
              <div className="relative mx-auto w-full">
                {/* Ambient Soft Glow Aura */}
                <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-tr from-sky-400/25 via-indigo-300/20 to-emerald-300/25 rounded-[3rem] blur-2xl -z-10 pointer-events-none" />

                {/* Modern Offset Architectural Layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-100/70 via-slate-100/60 to-emerald-50/70 rounded-[2.5rem] transform translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 border border-sky-200/60 -z-10" />

                {/* Main Large Pristine Image Canvas (No Overlays / Badges) */}
                <div className="relative rounded-[2.5rem] bg-white p-3 sm:p-4 shadow-2xl shadow-sky-950/12 border border-slate-200/90 overflow-hidden group">
                  <div className="relative w-full h-[360px] sm:h-[440px] md:h-[480px] lg:h-[520px] rounded-[2rem] overflow-hidden bg-slate-100">
                    <Image
                      src="/images/employer-hero-talent.jpg"
                      alt="Diverse Sri Lankan skilled professionals across Corporate Hospitality, Engineering, and Technical trades"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY RECRUIT SRI LANKAN WORKERS? */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-sky-600 tracking-wider uppercase bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
            The Sri Lankan Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 mt-3 mb-4">
            Why Recruit Sri Lankan Workers?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Sri Lankan talent combines recognized vocational competencies with high cultural adaptability, discipline, and English communication skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 max-w-6xl mx-auto justify-items-center">
          {/* Card 1: Light Sky Blue */}
          <div className="group relative w-full max-w-[320px] rounded-3xl p-8 sm:p-9 min-h-[380px] sm:min-h-[410px] flex flex-col items-center justify-center text-center bg-gradient-to-b from-sky-100 via-sky-50/90 to-sky-50/50 border-2 border-sky-300/90 hover:border-sky-500 shadow-sm hover:shadow-xl hover:shadow-sky-500/15 transition-all duration-300 hover:-translate-y-3">
            <div className="w-20 h-20 rounded-3xl bg-white text-sky-600 border border-sky-200/80 flex items-center justify-center mb-6 shadow-md group-hover:scale-110 group-hover:rotate-2 transition-all duration-300 shrink-0">
              <Award className="w-10 h-10" />
            </div>
            <h3 className="font-heading font-black text-lg sm:text-xl text-slate-900 mb-3 leading-snug group-hover:text-sky-700 transition-colors">
              Recognized Vocational Standards
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-[240px]">
              Trained through NAITA, CGTTI (German Tech), and national NVQ frameworks with rigorous apprenticeship traditions.
            </p>
          </div>

          {/* Card 2: Light Emerald Green */}
          <div className="group relative w-full max-w-[320px] rounded-3xl p-8 sm:p-9 min-h-[380px] sm:min-h-[410px] flex flex-col items-center justify-center text-center bg-gradient-to-b from-emerald-100 via-emerald-50/90 to-emerald-50/50 border-2 border-emerald-300/90 hover:border-emerald-500 shadow-sm hover:shadow-xl hover:shadow-emerald-500/15 transition-all duration-300 hover:-translate-y-3">
            <div className="w-20 h-20 rounded-3xl bg-white text-emerald-600 border border-emerald-200/80 flex items-center justify-center mb-6 shadow-md group-hover:scale-110 group-hover:rotate-2 transition-all duration-300 shrink-0">
              <Globe2 className="w-10 h-10" />
            </div>
            <h3 className="font-heading font-black text-lg sm:text-xl text-slate-900 mb-3 leading-snug group-hover:text-emerald-700 transition-colors">
              Proven GCC & Global Experience
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-[240px]">
              Many candidates possess prior verifiable track records across major UAE, Saudi Arabian, and Qatari mega-projects.
            </p>
          </div>

          {/* Card 3: Light Sky Blue */}
          <div className="group relative w-full max-w-[320px] rounded-3xl p-8 sm:p-9 min-h-[380px] sm:min-h-[410px] flex flex-col items-center justify-center text-center bg-gradient-to-b from-sky-100 via-sky-50/90 to-sky-50/50 border-2 border-sky-300/90 hover:border-sky-500 shadow-sm hover:shadow-xl hover:shadow-sky-500/15 transition-all duration-300 hover:-translate-y-3">
            <div className="w-20 h-20 rounded-3xl bg-white text-sky-600 border border-sky-200/80 flex items-center justify-center mb-6 shadow-md group-hover:scale-110 group-hover:rotate-2 transition-all duration-300 shrink-0">
              <ShieldCheck className="w-10 h-10" />
            </div>
            <h3 className="font-heading font-black text-lg sm:text-xl text-slate-900 mb-3 leading-snug group-hover:text-sky-700 transition-colors">
              Government SLBFE Compliance
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-[240px]">
              Every deployed worker passes official character checks, medical clearance, and bilateral labor endorsement.
            </p>
          </div>

          {/* Card 4: Light Emerald Green */}
          <div className="group relative w-full max-w-[320px] rounded-3xl p-8 sm:p-9 min-h-[380px] sm:min-h-[410px] flex flex-col items-center justify-center text-center bg-gradient-to-b from-emerald-100 via-emerald-50/90 to-emerald-50/50 border-2 border-emerald-300/90 hover:border-emerald-500 shadow-sm hover:shadow-xl hover:shadow-emerald-500/15 transition-all duration-300 hover:-translate-y-3">
            <div className="w-20 h-20 rounded-3xl bg-white text-emerald-600 border border-emerald-200/80 flex items-center justify-center mb-6 shadow-md group-hover:scale-110 group-hover:rotate-2 transition-all duration-300 shrink-0">
              <Users className="w-10 h-10" />
            </div>
            <h3 className="font-heading font-black text-lg sm:text-xl text-slate-900 mb-3 leading-snug group-hover:text-emerald-700 transition-colors">
              Disciplined & Dedicated Demeanor
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-[240px]">
              Renowned across international operations for strong work ethic, high retention rates, and cooperative teamwork.
            </p>
          </div>

          {/* Card 5: Light Sky Blue */}
          <div className="group relative w-full max-w-[320px] rounded-3xl p-8 sm:p-9 min-h-[380px] sm:min-h-[410px] flex flex-col items-center justify-center text-center bg-gradient-to-b from-sky-100 via-sky-50/90 to-sky-50/50 border-2 border-sky-300/90 hover:border-sky-500 shadow-sm hover:shadow-xl hover:shadow-sky-500/15 transition-all duration-300 hover:-translate-y-3">
            <div className="w-20 h-20 rounded-3xl bg-white text-sky-600 border border-sky-200/80 flex items-center justify-center mb-6 shadow-md group-hover:scale-110 group-hover:rotate-2 transition-all duration-300 shrink-0">
              <Compass className="w-10 h-10" />
            </div>
            <h3 className="font-heading font-black text-lg sm:text-xl text-slate-900 mb-3 leading-snug group-hover:text-sky-700 transition-colors">
              Pre-Departure Briefings
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-[240px]">
              We conduct thorough cultural and workplace safety inductions in Colombo, ensuring rapid onboarding upon job site arrival.
            </p>
          </div>

          {/* Card 6: Light Emerald Green */}
          <div className="group relative w-full max-w-[320px] rounded-3xl p-8 sm:p-9 min-h-[380px] sm:min-h-[410px] flex flex-col items-center justify-center text-center bg-gradient-to-b from-emerald-100 via-emerald-50/90 to-emerald-50/50 border-2 border-emerald-300/90 hover:border-emerald-500 shadow-sm hover:shadow-xl hover:shadow-emerald-500/15 transition-all duration-300 hover:-translate-y-3">
            <div className="w-20 h-20 rounded-3xl bg-white text-emerald-600 border border-emerald-200/80 flex items-center justify-center mb-6 shadow-md group-hover:scale-110 group-hover:rotate-2 transition-all duration-300 shrink-0">
              <Clock className="w-10 h-10" />
            </div>
            <h3 className="font-heading font-black text-lg sm:text-xl text-slate-900 mb-3 leading-snug group-hover:text-emerald-700 transition-colors">
              Rapid Mobilization Timelines
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-[240px]">
              Streamlined documentation and embassy attestations enable efficient mobilization to meet critical project deadlines.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: WORKER CATEGORIES (ISOMETRIC 3D EXTRUDED SLABS) */}
      <section className="relative py-24 bg-gradient-to-b from-slate-100 via-slate-50 to-slate-100 border-y border-slate-200/80 overflow-hidden">
        {/* Isometric Blueprint Dot Grid Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-50 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <span className="text-xs font-bold text-sky-600 tracking-wider uppercase bg-white px-3 py-1 rounded-full border border-slate-200 shadow-2xs">
                Talent Marketplace
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 mt-3">
                Worker Categories
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Filter and browse Sri Lankan professionals by specialized sector.
              </p>
            </div>
            <Link
              href="/employers/workers"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-700 bg-white px-4 py-2 rounded-xl border border-slate-200 hover:border-sky-300 shadow-2xs transition-all hover:scale-105"
            >
              <span>Explore All Worker Profiles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* VERTICAL LIST OF CATEGORIES WITH PROGRESS BARS */}
          <div className="max-w-5xl mx-auto space-y-3 sm:space-y-3.5">
            {categories.map((cat) => {
              const IconComponent = cat.icon;
              const maxCapacity = 100;
              const percentage = Math.min(100, Math.round((cat.count / maxCapacity) * 100));

              return (
                <Link
                  key={cat.name}
                  href={`/employers/workers?category=${encodeURIComponent(cat.name.split(" ")[0])}`}
                  className={`group relative bg-white hover:bg-slate-50/90 rounded-2xl sm:rounded-3xl p-4 sm:p-5 sm:px-6 border border-slate-200/90 ${cat.hoverBorder} shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8 block`}
                >
                  {/* Left: Icon + Category Info */}
                  <div className="flex items-center gap-4 sm:gap-5 min-w-0 flex-1">
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0 border transition-all duration-300 group-hover:scale-105 shadow-sm ${cat.iconStyle}`}
                    >
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>

                    <div className="min-w-0">
                      <h3 className={`font-heading font-extrabold text-base sm:text-lg text-slate-900 ${cat.hoverText} transition-colors truncate`}>
                        {cat.name}
                      </h3>
                      <p className="text-slate-500 text-xs sm:text-sm mt-0.5 line-clamp-1">
                        {cat.desc}
                      </p>
                    </div>
                  </div>

                  {/* Right: Vacancies Capacity & Progress Bar */}
                  <div className="w-full md:w-80 lg:w-96 shrink-0 flex items-center gap-4 sm:gap-5">
                    <div className="flex-1">
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <span className="font-semibold text-slate-500 flex items-center gap-1.5">
                          <span
                            className={`w-1.5 h-1.5 rounded-full animate-pulse ${cat.dotBg}`}
                          />
                          Available Vacancies
                        </span>
                        <span className="font-black font-heading text-slate-900">
                          <span className={`${cat.textAccent} font-extrabold`}>
                            {cat.count}
                          </span>
                          <span className="text-slate-400 font-normal"> / 100 Quota</span>
                        </span>
                      </div>

                      {/* Progress Bar Container */}
                      <div className="w-full h-2.5 sm:h-3 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200/70">
                        <div
                          className={`h-full rounded-full transition-all duration-700 ease-out ${cat.barGradient}`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>

                    {/* Arrow Action Indicator */}
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 border transition-all bg-slate-50 border-slate-200 text-slate-400 ${cat.arrowStyle}`}
                    >
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: RECRUITMENT PROCESS (5-STEP HEXAGON HONEYCOMB JOURNEY) */}
      <section className="relative py-24 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-xs font-bold text-sky-600 tracking-wider uppercase bg-sky-50 px-3 py-1 rounded-full border border-sky-100 shadow-2xs">
            B2B Client Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 mt-3 mb-4">
            Our 5-Step Employer Recruitment Process
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            How foreign employers partner with Apex World to select, verify, and deploy qualified workers.
          </p>
        </div>

        {/* Relative Hexagon Container with Background Zigzag Connector Path */}
        <div className="relative">
          {/* Subtle SVG Honeycomb Connecting Wave Line (Desktop only) */}
          <div className="absolute top-12 left-0 right-0 w-full h-32 pointer-events-none hidden md:block">
            <svg
              className="w-full h-full"
              preserveAspectRatio="none"
              viewBox="0 0 1000 120"
              fill="none"
            >
              <path
                d="M 100 20 Q 200 85, 300 85 T 500 20 T 700 85 T 900 20"
                stroke="#cbd5e1"
                strokeWidth="2.5"
                strokeDasharray="6 6"
              />
            </svg>
          </div>

          {/* 5-Step Honeycomb Zigzag Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 sm:gap-4 lg:gap-6 pt-6 pb-8 md:pb-14">
            {recruitmentStages.map((stage, idx) => {
              const IconComponent = stage.icon;
              return (
                <div
                  key={stage.step}
                  className={`group relative rounded-3xl p-6 sm:p-5 lg:p-6 flex flex-col items-center text-center transition-all duration-300 ease-out bg-white border-2 ${stage.cardBorder} shadow-sm hover:shadow-2xl hover:-translate-y-2 ${stage.zigzagClass}`}
                >
                  {/* Hexagon Header Node */}
                  <div className="relative -mt-12 mb-4 flex items-center justify-center shrink-0">
                    <svg
                      viewBox="0 0 100 115"
                      className="w-20 h-24 drop-shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
                    >
                      <defs>
                        <linearGradient
                          id={`hex-grad-${idx}`}
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor={stage.fromColor} />
                          <stop offset="100%" stopColor={stage.toColor} />
                        </linearGradient>
                      </defs>
                      <polygon
                        points="50 4, 96 29, 96 86, 50 111, 4 86, 4 29"
                        fill={`url(#hex-grad-${idx})`}
                        stroke={stage.strokeColor}
                        strokeWidth="3.5"
                        strokeLinejoin="round"
                      />
                    </svg>

                    {/* Content inside Hexagon */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white pointer-events-none">
                      <IconComponent className="w-6 h-6 drop-shadow-xs" />
                      <span className="text-[10px] font-black font-mono tracking-wider opacity-90 mt-0.5">
                        0{stage.step}
                      </span>
                    </div>
                  </div>

                  {/* Stage Pill */}
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border mb-3 ${stage.badgeColor}`}
                  >
                    Step {stage.step}
                  </span>

                  {/* Stage Bold Title */}
                  <h4 className="font-heading font-extrabold text-sm sm:text-base text-slate-900 mb-2 leading-snug group-hover:text-slate-800 transition-colors">
                    {stage.title}
                  </h4>

                  {/* Stage Description */}
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: FEATURED WORKERS */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold text-sky-600 tracking-wider uppercase bg-white px-3 py-1 rounded-full border border-slate-200">
                Available Candidates
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 mt-3">
                Featured Worker Profiles
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                A sample of approved Sri Lankan professionals ready for immediate employer evaluation.
              </p>
            </div>
            <Link
              href="/employers/workers"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold transition-colors"
            >
              <span>View Full Talent Catalog</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredWorkers.map((worker) => (
              <WorkerCard key={worker.workerId} worker={worker} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: CTA */}
      <section className="py-16 bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading mb-4">
            Looking for Skilled Sri Lankan Workers?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Connect directly with Apex World's international recruitment desk to evaluate candidates and schedule trade tests.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/employers/workers"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm shadow-xl transition-all hover:scale-105"
            >
              <Search className="w-4 h-4" />
              Browse Our Workforce
            </Link>
            <Link
              href="/employers/request"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 transition-all hover:scale-105"
            >
              <FileText className="w-4 h-4" />
              Submit Worker Request
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

