"use client";

import React, { useState } from "react";
import {
  FileText,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  MessageCircle,
  Sparkles,
  FileCheck2,
  ChevronRight,
} from "lucide-react";

interface DocItem {
  number: string;
  title: string;
  category: string;
  what: string;
  why: string;
  format: string;
  condition: string;
  isMandatory: boolean;
  acceptedTypes: string[];
}

const DOCUMENTS: DocItem[] = [
  {
    number: "01",
    title: "Valid Sri Lankan Passport",
    category: "Identity & International Travel",
    what: "Primary international travel and sovereign identity document issued by the Department of Immigration and Emigration (Sri Lanka).",
    why: "Mandatory for registering government-regulated job orders, obtaining destination country work visas, biometric bookings, and international airline ticketing.",
    format: "Clear, uncompressed high-resolution color scan of the photo and bio-data page (PDF or JPG format under 5MB).",
    condition: "Must have at least 12–18 months of remaining validity from expected departure date, and a minimum of 4 un-stamped blank visa pages.",
    isMandatory: true,
    acceptedTypes: ["Original Passport", "Color Scan (Bio Page)", "PDF / JPG"],
  },
  {
    number: "02",
    title: "Comprehensive CV / Resume",
    category: "Profile & Work History",
    what: "Structured professional curriculum vitae summarizing your trade background, specialized technical skills, and employment record.",
    why: "Foreign employers and human resource directors evaluate your direct hands-on competencies, past machinery experience, and job duties directly from this document.",
    format: "PDF or clean Microsoft Word document formatted in professional English, including a recent passport-sized professional photograph.",
    condition: "Must include exact employment start and end dates, machinery or equipment operated, foreign countries worked in (if any), and working contact numbers.",
    isMandatory: true,
    acceptedTypes: ["English CV (PDF/Word)", "Passport Photo", "Digital Copy"],
  },
  {
    number: "03",
    title: "Educational Certificates",
    category: "Academic Records",
    what: "Official academic attainment records including G.C.E. Ordinary Level (O/L), Advanced Level (A/L), or Higher National Diplomas (HND).",
    why: "Required to satisfy destination country labor ministry minimum educational eligibility tiers for specific technical, hospitality, and administrative positions.",
    format: "High-resolution color scanned copies of original certificates issued by the Department of Examinations or accredited educational institutes.",
    condition: "Ministry of Foreign Affairs (Sri Lanka) attestation and embassy consular authentication will be coordinated upon client selection.",
    isMandatory: false,
    acceptedTypes: ["O/L / A/L Certificates", "Diplomas", "MFA Attestation"],
  },
  {
    number: "04",
    title: "Professional & Vocational NVQ Certificates",
    category: "Technical Credentials",
    what: "Vocational qualification certificates such as NVQ Level 3/4, NAITA, CGTTI (German Tech), City & Guilds, or registered trade apprenticeship credentials.",
    why: "Officially proves certified technical competency to foreign employers, securing higher salary grades and skilled category work visas.",
    format: "Clear color scans showing the institutional seal, qualification framework code, and official candidate registration number.",
    condition: "Original hard copies must be presented in Colombo during in-person client interviews and practical trade skill assessments.",
    isMandatory: true,
    acceptedTypes: ["NVQ Level 3/4", "German Tech / NAITA", "Trade Licenses"],
  },
  {
    number: "05",
    title: "Work Experience Letters & Service Records",
    category: "Employment Verification",
    what: "Official service testimonial letters, appointment letters, or service certificates on previous employer company letterheads.",
    why: "Verifies the exact number of years of continuous trade practice you have completed in Sri Lanka or in previous overseas employment (GCC / Asia).",
    format: "Signed and stamped employer certificates or certified GCC service contracts with company seal.",
    condition: "Must state your official job title, duration of service, equipment handled, and be verifiable by foreign employer background checkers.",
    isMandatory: true,
    acceptedTypes: ["Employer Letterhead", "Service Testimonials", "Past GCC Visas"],
  },
  {
    number: "06",
    title: "Police Clearance Report",
    category: "Legal & Character Clearance",
    what: "Official criminal record and character clearance certificate issued by the Sri Lanka Police Headquarters (Colombo).",
    why: "Mandatory statutory prerequisite required by foreign embassies, sovereign ministries of foreign affairs, and the SLBFE prior to visa endorsement.",
    format: "Original certificate issued directly through the Sri Lanka Police Headquarters Online Clearance Portal.",
    condition: "Must have been issued within the last 6 months from the date of final visa submission to remain valid.",
    isMandatory: true,
    acceptedTypes: ["Police HQ Certificate", "Online Portal Clearance", "MFA Endorsed"],
  },
];

export function StickyDocumentsSection() {
  const [activeDocIndex, setActiveDocIndex] = useState(0);

  const currentDoc = DOCUMENTS[activeDocIndex];

  const handleNext = () => {
    setActiveDocIndex((prev) => (prev + 1) % DOCUMENTS.length);
  };

  const handlePrev = () => {
    setActiveDocIndex((prev) => (prev - 1 + DOCUMENTS.length) % DOCUMENTS.length);
  };

  return (
    <section className="py-24 sm:py-28 bg-gradient-to-b from-slate-100/70 via-white to-slate-50 border-y border-slate-200/80 relative overflow-hidden">
      {/* Background Decorative Grid & Ambient Halos */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-indigo-200/25 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-bold text-sky-700 tracking-wider uppercase bg-sky-100/80 px-4 py-1.5 rounded-full border border-sky-200 shadow-2xs inline-block mb-3">
            Interactive Documentation Dossier
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-slate-900 tracking-tight mt-2 mb-4">
            Required Documents{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-600 to-sky-700">
              Explained
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Click on any document in the left navigator to inspect its specific purpose, accepted submission formats, and mandatory government conditions.
          </p>
        </div>

        {/* MASTER-DETAIL INTERACTIVE VIEWER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* ============================================================== */}
          {/* LEFT SIDE: CLICKABLE DOCUMENT NAVIGATOR (5 cols)               */}
          {/* ============================================================== */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-3xl p-6 sm:p-7 bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-xl shadow-sky-950/5 space-y-5">
              
              {/* Header inside Navigator Card */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <span className="text-[10px] font-bold text-sky-600 uppercase tracking-widest block">
                    Document Checklist
                  </span>
                  <h3 className="font-heading font-extrabold text-lg text-slate-900">
                    Select Document to Inspect
                  </h3>
                </div>

                <span className="px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold border border-sky-200">
                  {activeDocIndex + 1} of {DOCUMENTS.length}
                </span>
              </div>

              {/* Clickable Step List (01 to 06) */}
              <div className="space-y-2">
                {DOCUMENTS.map((doc, idx) => {
                  const isSelected = idx === activeDocIndex;

                  return (
                    <button
                      key={doc.number}
                      type="button"
                      onClick={() => setActiveDocIndex(idx)}
                      className={`w-full text-left p-3.5 sm:p-4 rounded-2xl flex items-center justify-between transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? "bg-gradient-to-r from-sky-600 to-indigo-600 text-white shadow-lg shadow-sky-600/30 scale-[1.02]"
                          : "bg-slate-50 hover:bg-sky-50/60 text-slate-700 hover:text-sky-900 border border-slate-100 hover:border-sky-200"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        {/* Number Badge */}
                        <span
                          className={`w-8 h-8 rounded-xl font-mono text-xs font-bold flex items-center justify-center shrink-0 transition-colors ${
                            isSelected
                              ? "bg-white/20 text-white"
                              : "bg-white text-slate-600 shadow-2xs border border-slate-200"
                          }`}
                        >
                          {doc.number}
                        </span>

                        <div className="min-w-0 pr-2">
                          <span
                            className={`text-[10px] font-bold uppercase tracking-wider block truncate ${
                              isSelected ? "text-sky-200" : "text-sky-600"
                            }`}
                          >
                            {doc.category}
                          </span>
                          <h4 className="font-heading font-bold text-xs sm:text-sm truncate">
                            {doc.title}
                          </h4>
                        </div>
                      </div>

                      {/* Right Indicator Arrow */}
                      <div className="shrink-0 pl-1">
                        {isSelected ? (
                          <div className="w-6 h-6 rounded-full bg-white/25 flex items-center justify-center">
                            <ChevronRight className="w-4 h-4 text-white" />
                          </div>
                        ) : (
                          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Colombo Attestation Support Callout */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div className="text-slate-500">
                  <strong className="text-slate-800 block text-xs">Need Attestation Help?</strong>
                  <span className="text-[11px]">We assist with DFA &amp; Embassy stamps</span>
                </div>
                <a
                  href="https://wa.me/94771234567?text=Hello%20Apex%20World,%20I%20need%20help%20with%20document%20attestation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-bold border border-emerald-200 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>

            </div>

          </div>

          {/* ============================================================== */}
          {/* RIGHT SIDE: SINGLE ACTIVE DETAIL CARD (7 cols)                 */}
          {/* ============================================================== */}
          <div className="lg:col-span-7">
            <div
              key={currentDoc.number}
              className="relative rounded-3xl p-7 sm:p-10 bg-white border border-sky-300 ring-4 ring-sky-100/70 shadow-2xl shadow-sky-950/10 transition-all duration-300 animate-fadeIn overflow-hidden"
            >
              {/* Massive Dynamic Watermark Number in background */}
              <div className="absolute -top-8 -right-4 text-9xl sm:text-[12rem] font-black font-heading text-slate-100 select-none pointer-events-none tracking-tighter opacity-80 leading-none">
                {currentDoc.number}
              </div>

              {/* Ambient Radial Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                
                {/* Detail Card Top Row */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3.5">
                    {/* Big Gradient Numeric Badge */}
                    <span className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-sky-600 via-sky-500 to-indigo-600 text-white font-black font-heading text-xl sm:text-2xl flex items-center justify-center shadow-lg shadow-sky-600/30 shrink-0">
                      {currentDoc.number}
                    </span>

                    <div>
                      <span className="text-[11px] font-bold text-sky-600 uppercase tracking-wider block">
                        {currentDoc.category}
                      </span>
                      <h3 className="font-heading font-extrabold text-xl sm:text-2xl md:text-3xl text-slate-900 tracking-tight leading-tight">
                        {currentDoc.title}
                      </h3>
                    </div>
                  </div>

                  {/* Mandatory / Optional Status Tag */}
                  <span
                    className={`px-3.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase border shadow-2xs ${
                      currentDoc.isMandatory
                        ? "bg-rose-50 text-rose-700 border-rose-200"
                        : "bg-slate-100 text-slate-700 border-slate-200"
                    }`}
                  >
                    {currentDoc.isMandatory ? "Mandatory Document" : "Recommended Document"}
                  </span>
                </div>

                {/* Structured Specification Blocks */}
                <div className="space-y-4">
                  
                  {/* Block 1: What it is */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/90 border border-slate-200/80">
                    <strong className="text-slate-900 block font-bold text-xs uppercase tracking-wider mb-1.5 flex items-center gap-1.5 text-sky-700">
                      <FileText className="w-3.5 h-3.5" />
                      What it is:
                    </strong>
                    <p className="leading-relaxed text-slate-700 text-xs sm:text-sm">
                      {currentDoc.what}
                    </p>
                  </div>

                  {/* Block 2: Why it is needed */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/90 border border-slate-200/80">
                    <strong className="text-slate-900 block font-bold text-xs uppercase tracking-wider mb-1.5 flex items-center gap-1.5 text-indigo-700">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Why it is needed:
                    </strong>
                    <p className="leading-relaxed text-slate-700 text-xs sm:text-sm">
                      {currentDoc.why}
                    </p>
                  </div>

                  {/* Block 3: Accepted Submission Format & Types */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/90 border border-slate-200/80 space-y-2.5">
                    <strong className="text-slate-900 block font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 text-slate-800">
                      <FileCheck2 className="w-3.5 h-3.5 text-sky-600" />
                      Accepted Submission Format:
                    </strong>
                    <p className="leading-relaxed text-slate-700 text-xs sm:text-sm">
                      {currentDoc.format}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {currentDoc.acceptedTypes.map((type, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-2xs"
                        >
                          ✓ {type}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Block 4: Crucial Government & Embassy Condition */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-sky-50 via-sky-50/60 to-indigo-50/70 border border-sky-300 text-slate-800 space-y-1.5 shadow-xs">
                    <div className="flex items-center gap-2 text-sky-900 font-bold text-xs sm:text-sm uppercase tracking-wide">
                      <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
                      <span>Crucial Government &amp; Embassy Requirement:</span>
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-800 font-medium pl-6">
                      {currentDoc.condition}
                    </p>
                  </div>

                </div>

                {/* Bottom Navigation & Pagination Bar */}
                <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  
                  {/* Previous Button */}
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Previous Document</span>
                  </button>

                  {/* Indicator Dots */}
                  <div className="flex items-center gap-2">
                    {DOCUMENTS.map((doc, idx) => (
                      <button
                        key={doc.number}
                        type="button"
                        onClick={() => setActiveDocIndex(idx)}
                        title={`View ${doc.title}`}
                        className={`transition-all duration-300 rounded-full cursor-pointer ${
                          idx === activeDocIndex
                            ? "w-7 h-2.5 bg-sky-600"
                            : "w-2.5 h-2.5 bg-slate-200 hover:bg-slate-300"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Next Button */}
                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs shadow-md shadow-sky-600/20 transition-all cursor-pointer"
                  >
                    <span>Next Document</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
