"use client";

import React from "react";
import Image from "next/image";
import {
  Star,
  Quote,
  CheckCircle2,
  Building2,
  Award,
  ShieldCheck,
  TrendingUp,
  MapPin,
  Clock,
  Briefcase,
  FileCheck2,
} from "lucide-react";

interface TestimonialItem {
  id: string;
  variant: "tall-story" | "compact-minimal" | "corporate-dark" | "story-steps" | "accent-gradient" | "standard-card" | "benefits-grid";
  name: string;
  role: string;
  organization?: string;
  country: string;
  countryCode: string;
  rating: number;
  quote: string;
  highlightTag?: string;
  verifiedLabel: string;
  avatarUrl: string;
  steps?: string[];
  keyPoints?: string[];
  benefitsGrid?: { label: string; val: string }[];
  metric?: { value: string; label: string };
  tags?: string[];
}

const TESTIMONIALS: TestimonialItem[] = [
  // 1. TALL STORY PIN (Dubai) ~ Tall (~420px) - Rich checklist & details, NO cover images!
  {
    id: "pin-01",
    variant: "tall-story",
    name: "Nuwan Jayasinghe",
    role: "Industrial High-Voltage Electrician",
    organization: "Al Naboodah Engineering LLC",
    country: "Dubai, United Arab Emirates",
    countryCode: "ae",
    rating: 5,
    quote:
      "Apex World handled my electrical certification and UAE employment visa with absolute honesty. The salary of AED 4,200 and company accommodation in Dubai matched 100% with what was written in my contract. Zero sub-agents or hidden deductions!",
    highlightTag: "AED 4,200 / Mo Base Wage",
    verifiedLabel: "SLBFE Attested Contract",
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    keyPoints: [
      "Fixed monthly base wage in legally binding contract",
      "Free employer-provided air-conditioned bachelor accommodation",
      "Direct CMB departure escort with zero sub-agent mediation",
    ],
    tags: ["High-Voltage Panels", "Free Accommodation", "3-Year Visa"],
  },

  // 2. COMPACT MINIMAL PIN (Qatar Driver) ~ Very Short (~170px)
  {
    id: "pin-02",
    variant: "compact-minimal",
    name: "Kavinda Perera",
    role: "Heavy Trailer Logistics Driver",
    country: "Doha, Qatar",
    countryCode: "qa",
    rating: 5,
    quote:
      "GCC heavy license & QVC biometric clearance completed in under 18 days. Airport departure escort handed us free travel kits and meal vouchers. Truly ethical!",
    verifiedLabel: "QVC Biometric Verified",
    avatarUrl:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80",
  },

  // 3. CORPORATE LUXURY DARK PIN (Saudi PetroChem) ~ Medium-Tall (~340px)
  {
    id: "pin-03",
    variant: "corporate-dark",
    name: "Eng. Fahad Al-Otaibi",
    role: "VP Human Resources & Talent Planning",
    organization: "PetroChem Consortium, Jubail KSA",
    country: "Saudi Arabia",
    countryCode: "sa",
    rating: 5,
    quote:
      "We requisitioned 25 certified 6G pipe welders for our Jubail refinery expansion. Apex World organized trade testing in Colombo within 4 days. Every worker arrived fully attested with exceptional technical discipline and zero compliance issues.",
    highlightTag: "25 Welders Mobilized",
    verifiedLabel: "Enterprise Hiring Partner",
    avatarUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    metric: {
      value: "100%",
      label: "Trade Test Pass Rate",
    },
    tags: ["6G Pipe Welders", "Consular Fast-Track"],
  },

  // 4. CANDIDATE JOURNEY STEPS PIN (Japan SSW) ~ Extra Tall (~410px)
  {
    id: "pin-04",
    variant: "story-steps",
    name: "Sanduni Wickramasinghe",
    role: "Certified Elderly Care Associate (SSW)",
    organization: "Sakura Senior Care Facility, Tokyo",
    country: "Tokyo, Japan",
    countryCode: "jp",
    rating: 5,
    quote:
      "Applying for Japan’s Specified Skilled Worker (SSW) program felt overwhelming until Apex World guided me through Prometric exams, JLPT language tests, and embassy visa stamping. Today I work happily in Tokyo with full social security!",
    highlightTag: "JPY 260,000 / Mo",
    verifiedLabel: "Japan SSW Approved",
    avatarUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    steps: [
      "JLPT N4 Japanese Language Certified",
      "Prometric Nursing Caregiver Exam Passed",
      "Direct Tokyo Nursing Facility Contract Handover",
    ],
    tags: ["Tokyo Healthcare", "Full Social Security"],
  },

  // 5. ACCENT GRADIENT IMPACT PIN (Maldives Resort) ~ Short-Medium (~230px)
  {
    id: "pin-05",
    variant: "accent-gradient",
    name: "Dinesh Kumara",
    role: "Front of House Guest Associate",
    organization: "Centara Grand Island Resort & Spa",
    country: "Maldives",
    countryCode: "mv",
    rating: 5,
    quote:
      "Direct resort contract with free airfare, luxury beachfront staff housing, and monthly service charge bonuses. From registration to takeoff took less than 21 days!",
    highlightTag: "USD 1,450 + Service Bonus",
    verifiedLabel: "Direct Resort Contract",
    avatarUrl:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
  },

  // 6. STANDARD CLEAN CARD (Romania EU) ~ Medium (~280px)
  {
    id: "pin-06",
    variant: "standard-card",
    name: "Priyantha Senanayake",
    role: "Structural Steel Fabricator",
    organization: "Transilvania Constr SRL",
    country: "Cluj-Napoca, Romania",
    countryCode: "ro",
    rating: 5,
    quote:
      "Working in Europe was my lifelong dream. Apex World arranged my Romanian work permit, translated certified documents, and accompanied us right up to the boarding gate at CMB airport. 100% legal agency!",
    highlightTag: "EUR 1,600 / Mo + Food",
    verifiedLabel: "EU Work Permit Holder",
    avatarUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80",
    tags: ["European Union", "Structural Steel", "Free Lodging"],
  },

  // 7. BENEFITS GRID PIN (South Korea Precision Tech) ~ Tall (~390px)
  {
    id: "pin-07",
    variant: "benefits-grid",
    name: "Kusal Bandara",
    role: "CNC Lathe & Precision Machinery Operator",
    organization: "Hyundai Precision Tech Partner, Busan",
    country: "Busan, South Korea",
    countryCode: "kr",
    rating: 5,
    quote:
      "Passed the Korean EPS-TOPIK exam with Apex World's special coaching. Direct bilateral contract with high overtime pay and modern factory dormitory. An unbelievable life upgrade for my family in Matara.",
    highlightTag: "KRW 2,650,000 / Mo",
    verifiedLabel: "South Korea EPS Contract",
    avatarUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    benefitsGrid: [
      { label: "Base Salary", val: "KRW 2.65M" },
      { label: "Overtime Rate", val: "1.5x Hourly" },
      { label: "Housing", val: "Company Dorm" },
      { label: "Insurance", val: "Four Major (4대보험)" },
    ],
    tags: ["EPS-TOPIK Passed", "Factory Dormitory"],
  },

  // 8. CORPORATE PARTNER METRIC CARD (Singapore Marine) ~ Medium (~320px)
  {
    id: "pin-08",
    variant: "corporate-dark",
    name: "Marcus Thorne",
    role: "Director of Marine Operations",
    organization: "Apex Precision Marine Engineering Pte Ltd",
    country: "Singapore",
    countryCode: "sg",
    rating: 5,
    quote:
      "Finding dependable CNC machinists and marine fitters is tough. Apex World's pre-screened Sri Lankan workforce has been our operational backbone for 3 straight years with zero attrition.",
    highlightTag: "3-Year Bilateral Partner",
    verifiedLabel: "Corporate MoU Partner",
    avatarUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
    metric: {
      value: "0%",
      label: "Attrition in 3 Years",
    },
    tags: ["CNC Machinists", "Singapore S-Pass"],
  },
];

export function TestimonialsMasonry() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-white via-sky-50/40 to-slate-50/80">
      {/* Background Soft Ambience */}
      <div className="absolute top-10 right-1/4 w-[750px] h-[350px] bg-sky-200/20 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[600px] h-[350px] bg-blue-200/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white text-sky-700 border border-sky-200 text-xs font-bold tracking-wide uppercase shadow-xs mb-3.5">
            <span>Real Overseas Voices</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 tracking-tight">
            Candidate & Employer <span className="text-sky-600">Testimonials</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
            Authentic stories from deployed Sri Lankan professionals thriving abroad and premier international corporate hiring partners.
          </p>
        </div>

        {/* PINTEREST-INSPIRED MASONRY WATERFALL GRID */}
        {/* Natural varied heights create authentic Pinterest cascading waterfall without any cover images */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          
          {TESTIMONIALS.map((item) => {
            
            // -------------------------------------------------------------
            // VARIANT 1: TALL STORY PIN (Comprehensive Breakdown ~ Tall)
            // -------------------------------------------------------------
            if (item.variant === "tall-story") {
              return (
                <div
                  key={item.id}
                  className="break-inside-avoid relative rounded-3xl bg-white border-2 border-slate-200/90 shadow-md hover:shadow-2xl hover:border-sky-400 transition-all duration-300 hover:-translate-y-1.5 p-6 sm:p-7 overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    {/* Top Bar */}
                    <div className="flex items-center justify-between mb-3.5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-sky-50 text-sky-700 border border-sky-200">
                        <FileCheck2 className="w-3.5 h-3.5 text-sky-600" />
                        <span>{item.verifiedLabel}</span>
                      </span>

                      <div className="flex items-center gap-0.5 text-amber-400">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                      </div>
                    </div>

                    {/* Salary Highlight Badge */}
                    {item.highlightTag && (
                      <div className="mb-3.5">
                        <span className="inline-block px-3 py-1 rounded-xl text-xs font-extrabold font-mono bg-sky-500 text-white shadow-xs">
                          {item.highlightTag}
                        </span>
                      </div>
                    )}

                    <Quote className="w-6 h-6 text-sky-400/40 mb-2" />
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-4">
                      "{item.quote}"
                    </p>

                    {/* 3 Key Guaranteed Points (Gives natural tall height) */}
                    {item.keyPoints && (
                      <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2 mb-4">
                        <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider block">
                          Contract Highlights
                        </span>
                        {item.keyPoints.map((pt, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                            <span className="font-medium text-[11px] leading-snug">{pt}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {item.tags && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {item.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-600"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Profile */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0">
                        <Image
                          src={item.avatarUrl}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="40px"
                          unoptimized
                        />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold font-heading text-slate-900 leading-tight">
                          {item.name}
                        </h4>
                        <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    <div className="relative w-7 h-5 rounded overflow-hidden shadow-xs border border-slate-300/80 shrink-0">
                      <Image
                        src={`https://flagcdn.com/w80/${item.countryCode}.png`}
                        alt={item.country}
                        fill
                        className="object-cover"
                        sizes="28px"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
              );
            }

            // -------------------------------------------------------------
            // VARIANT 2: COMPACT MINIMAL PIN (Quick Review ~ Very Short)
            // -------------------------------------------------------------
            if (item.variant === "compact-minimal") {
              return (
                <div
                  key={item.id}
                  className="break-inside-avoid relative rounded-3xl bg-white border-2 border-slate-200/90 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 hover:-translate-y-1.5 p-5 sm:p-6 overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      {item.verifiedLabel}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed italic mb-4">
                    "{item.quote}"
                  </p>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden border border-slate-200 shrink-0">
                        <Image
                          src={item.avatarUrl}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="32px"
                          unoptimized
                        />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 leading-tight">
                          {item.name}
                        </h4>
                        <span className="text-[10px] text-slate-500">{item.role}</span>
                      </div>
                    </div>

                    <div className="relative w-6 h-4 rounded overflow-hidden border border-slate-300 shrink-0">
                      <Image
                        src={`https://flagcdn.com/w80/${item.countryCode}.png`}
                        alt={item.country}
                        fill
                        className="object-cover"
                        sizes="24px"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
              );
            }

            // -------------------------------------------------------------
            // VARIANT 3: CORPORATE LUXURY DARK PIN (Executive Dark ~ Medium)
            // -------------------------------------------------------------
            if (item.variant === "corporate-dark") {
              return (
                <div
                  key={item.id}
                  className="break-inside-avoid relative rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-white border-2 border-slate-700/80 shadow-xl hover:shadow-2xl hover:border-sky-400 transition-all duration-300 hover:-translate-y-1.5 p-6 sm:p-7 overflow-hidden select-none"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 blur-2xl rounded-full pointer-events-none" />

                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-sky-500/20 text-sky-300 border border-sky-400/30">
                      <Building2 className="w-3.5 h-3.5 text-sky-400" />
                      <span>{item.verifiedLabel}</span>
                    </span>

                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  {/* Metric Box if available */}
                  {item.metric && (
                    <div className="mb-4 p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between font-mono">
                      <div>
                        <div className="text-2xl font-extrabold text-white">{item.metric.value}</div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-wider">{item.metric.label}</div>
                      </div>
                      {item.highlightTag && (
                        <span className="text-xs font-bold text-sky-300 bg-sky-950/70 border border-sky-500/40 px-3 py-1 rounded-xl">
                          {item.highlightTag}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Quote */}
                  <Quote className="w-6 h-6 text-sky-400/40 mb-2" />
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic mb-5 font-light">
                    "{item.quote}"
                  </p>

                  {/* Profile */}
                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-sky-400/40 shadow-sm shrink-0">
                        <Image
                          src={item.avatarUrl}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="40px"
                          unoptimized
                        />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold font-heading text-white leading-tight">
                          {item.name}
                        </h4>
                        <p className="text-[11px] text-sky-300 leading-tight mt-0.5">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    <div className="relative w-7 h-5 rounded overflow-hidden shadow-xs border border-white/20 shrink-0">
                      <Image
                        src={`https://flagcdn.com/w80/${item.countryCode}.png`}
                        alt={item.country}
                        fill
                        className="object-cover"
                        sizes="28px"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
              );
            }

            // -------------------------------------------------------------
            // VARIANT 4: STORY STEPS PIN (Candidate Journey Roadmap ~ Extra Tall)
            // -------------------------------------------------------------
            if (item.variant === "story-steps") {
              return (
                <div
                  key={item.id}
                  className="break-inside-avoid relative rounded-3xl bg-white border-2 border-slate-200/90 shadow-md hover:shadow-2xl hover:border-sky-400 transition-all duration-300 hover:-translate-y-1.5 p-6 sm:p-7 overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    {/* Header Bar */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-emerald-50 text-emerald-700 border border-emerald-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{item.verifiedLabel}</span>
                      </span>

                      <div className="flex items-center gap-0.5 text-amber-400">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                      </div>
                    </div>

                    {/* Salary Tag */}
                    {item.highlightTag && (
                      <div className="mb-3.5">
                        <span className="inline-block px-3 py-1 rounded-xl text-xs font-extrabold font-mono bg-sky-100 text-sky-800 border border-sky-200">
                          {item.highlightTag}
                        </span>
                      </div>
                    )}

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-4">
                      "{item.quote}"
                    </p>

                    {/* 3 Step Milestone Checklist (Gives distinctive height!) */}
                    {item.steps && (
                      <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2 mb-5">
                        <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider block">
                          Milestones Cleared
                        </span>
                        {item.steps.map((st, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="font-medium text-[11px] leading-snug">{st}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Profile */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0">
                        <Image
                          src={item.avatarUrl}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="40px"
                          unoptimized
                        />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold font-heading text-slate-900 leading-tight">
                          {item.name}
                        </h4>
                        <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    <div className="relative w-7 h-5 rounded overflow-hidden shadow-xs border border-slate-300/80 shrink-0">
                      <Image
                        src={`https://flagcdn.com/w80/${item.countryCode}.png`}
                        alt={item.country}
                        fill
                        className="object-cover"
                        sizes="28px"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
              );
            }

            // -------------------------------------------------------------
            // VARIANT 5: ACCENT GRADIENT PIN (Vibrant Sky Blue ~ Short-Medium)
            // -------------------------------------------------------------
            if (item.variant === "accent-gradient") {
              return (
                <div
                  key={item.id}
                  className="break-inside-avoid relative rounded-3xl bg-gradient-to-br from-sky-600 via-sky-500 to-cyan-600 text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 p-6 sm:p-7 overflow-hidden select-none"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-white/20 backdrop-blur-md text-white border border-white/30">
                      {item.verifiedLabel}
                    </span>
                    <div className="flex items-center gap-0.5 text-amber-300">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-300" />
                      ))}
                    </div>
                  </div>

                  {item.highlightTag && (
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 rounded-xl text-xs font-extrabold font-mono bg-white text-sky-800 shadow-sm">
                        {item.highlightTag}
                      </span>
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-sky-50 font-medium leading-relaxed italic mb-5">
                    "{item.quote}"
                  </p>

                  <div className="pt-4 border-t border-white/20 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0">
                        <Image
                          src={item.avatarUrl}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="36px"
                          unoptimized
                        />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold font-heading text-white leading-tight">
                          {item.name}
                        </h4>
                        <p className="text-[11px] text-sky-100 leading-tight mt-0.5">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    <div className="relative w-7 h-5 rounded overflow-hidden shadow-xs border border-white/40 shrink-0">
                      <Image
                        src={`https://flagcdn.com/w80/${item.countryCode}.png`}
                        alt={item.country}
                        fill
                        className="object-cover"
                        sizes="28px"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
              );
            }

            // -------------------------------------------------------------
            // VARIANT 6: BENEFITS GRID PIN (South Korea Precision Tech ~ Tall)
            // -------------------------------------------------------------
            if (item.variant === "benefits-grid") {
              return (
                <div
                  key={item.id}
                  className="break-inside-avoid relative rounded-3xl bg-white border-2 border-slate-200/90 shadow-md hover:shadow-2xl hover:border-sky-400 transition-all duration-300 hover:-translate-y-1.5 p-6 sm:p-7 overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-sky-50 text-sky-700 border border-sky-200">
                        <Award className="w-3.5 h-3.5 text-sky-600" />
                        <span>{item.verifiedLabel}</span>
                      </span>

                      <div className="flex items-center gap-0.5 text-amber-400">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                      </div>
                    </div>

                    {item.highlightTag && (
                      <div className="mb-3.5">
                        <span className="inline-block px-3 py-1 rounded-xl text-xs font-extrabold font-mono bg-sky-500 text-white shadow-xs">
                          {item.highlightTag}
                        </span>
                      </div>
                    )}

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-4">
                      "{item.quote}"
                    </p>

                    {/* 4 Benefits Mini Grid (Produces distinct tall structure without images!) */}
                    {item.benefitsGrid && (
                      <div className="grid grid-cols-2 gap-2 p-3 bg-slate-50 rounded-2xl border border-slate-100 mb-4 font-mono">
                        {item.benefitsGrid.map((b, i) => (
                          <div key={i} className="bg-white p-2 rounded-xl border border-slate-200/60 shadow-xs">
                            <span className="text-[9px] uppercase tracking-wider text-slate-400 block">
                              {b.label}
                            </span>
                            <span className="text-xs font-bold text-slate-800 block mt-0.5">
                              {b.val}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {item.tags && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {item.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-600"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0">
                        <Image
                          src={item.avatarUrl}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="40px"
                          unoptimized
                        />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold font-heading text-slate-900 leading-tight">
                          {item.name}
                        </h4>
                        <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    <div className="relative w-7 h-5 rounded overflow-hidden shadow-xs border border-slate-300/80 shrink-0">
                      <Image
                        src={`https://flagcdn.com/w80/${item.countryCode}.png`}
                        alt={item.country}
                        fill
                        className="object-cover"
                        sizes="28px"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
              );
            }

            // -------------------------------------------------------------
            // VARIANT 7: STANDARD CLEAN CARD (Romania EU ~ Medium)
            // -------------------------------------------------------------
            return (
              <div
                key={item.id}
                className="break-inside-avoid relative rounded-3xl bg-white border-2 border-slate-200/90 shadow-md hover:shadow-xl hover:border-sky-300 transition-all duration-300 hover:-translate-y-1.5 p-6 sm:p-7 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{item.verifiedLabel}</span>
                    </span>

                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  {item.highlightTag && (
                    <div className="mb-3.5">
                      <span className="inline-block px-3 py-1 rounded-xl text-xs font-extrabold font-mono bg-sky-100 text-sky-800 border border-sky-200">
                        {item.highlightTag}
                      </span>
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-4">
                    "{item.quote}"
                  </p>

                  {item.tags && (
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {item.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-600"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0">
                      <Image
                        src={item.avatarUrl}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="40px"
                        unoptimized
                      />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold font-heading text-slate-900 leading-tight">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  <div className="relative w-7 h-5 rounded overflow-hidden shadow-xs border border-slate-300/80 shrink-0">
                    <Image
                      src={`https://flagcdn.com/w80/${item.countryCode}.png`}
                      alt={item.country}
                      fill
                      className="object-cover"
                      sizes="28px"
                      unoptimized
                    />
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
