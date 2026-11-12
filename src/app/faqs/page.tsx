"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Briefcase,
  Building2,
  Globe2,
  ChevronDown,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  Sparkles,
  PhoneCall,
  Clock,
  FileCheck2,
  Layers,
  X,
} from "lucide-react";
import { FAQS_DATA } from "@/data/faqsData";

type CategoryFilter = "All" | "Job Seekers" | "Foreign Employers" | "General";

export default function FAQsPage() {
  const [activeTab, setActiveTab] = useState<CategoryFilter>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaqId, setOpenFaqId] = useState<string | null>("faq-js-1");

  // Filtered FAQs based on category tab & search query
  const filteredFaqs = useMemo(() => {
    return FAQS_DATA.filter((faq) => {
      const matchesTab = activeTab === "All" || faq.category === activeTab;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q);
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  // Quick tag filter buttons
  const quickTags = [
    { label: "Visa Process", query: "Visa" },
    { label: "GAMCA Medical", query: "Medical" },
    { label: "Application Fees", query: "Fees" },
    { label: "Required Documents", query: "Documents" },
    { label: "SLBFE License", query: "SLBFE" },
    { label: "Trade Tests", query: "Trade" },
  ];

  // Category counts
  const categoryCounts = useMemo(() => {
    return {
      All: FAQS_DATA.length,
      "Job Seekers": FAQS_DATA.filter((f) => f.category === "Job Seekers").length,
      "Foreign Employers": FAQS_DATA.filter((f) => f.category === "Foreign Employers").length,
      General: FAQS_DATA.filter((f) => f.category === "General").length,
    };
  }, []);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Job Seekers":
        return {
          name: "Job Seekers",
          pillBg: "bg-sky-50 text-sky-700 border-sky-200",
          badgeBg: "bg-sky-100 text-sky-800",
          leftBorder: "border-l-4 border-l-sky-500",
          leftBorderClosed: "border-l-4 border-l-sky-400/60",
          cardOpen: "bg-white border-sky-300 ring-2 ring-sky-100 shadow-lg shadow-sky-500/10",
          cardClosed: "bg-white hover:bg-sky-50/20 border-slate-200/90 hover:border-sky-300/60 shadow-xs",
          titleOpen: "text-sky-800",
          titleHover: "group-hover:text-sky-600",
          chevronBg: "bg-sky-500 text-white shadow-md shadow-sky-500/25",
          innerBg: "bg-sky-50/40 border-sky-100",
          linkText: "text-sky-600 hover:text-sky-800",
          dotColor: "bg-sky-500",
          icon: <Briefcase className="w-3 h-3 text-sky-600 shrink-0" />,
        };
      case "Foreign Employers":
        return {
          name: "Foreign Employers",
          pillBg: "bg-indigo-50 text-indigo-700 border-indigo-200",
          badgeBg: "bg-indigo-100 text-indigo-800",
          leftBorder: "border-l-4 border-l-indigo-500",
          leftBorderClosed: "border-l-4 border-l-indigo-400/60",
          cardOpen: "bg-white border-indigo-300 ring-2 ring-indigo-100 shadow-lg shadow-indigo-500/10",
          cardClosed: "bg-white hover:bg-indigo-50/20 border-slate-200/90 hover:border-indigo-300/60 shadow-xs",
          titleOpen: "text-indigo-800",
          titleHover: "group-hover:text-indigo-600",
          chevronBg: "bg-indigo-600 text-white shadow-md shadow-indigo-500/25",
          innerBg: "bg-indigo-50/40 border-indigo-100",
          linkText: "text-indigo-600 hover:text-indigo-800",
          dotColor: "bg-indigo-500",
          icon: <Building2 className="w-3 h-3 text-indigo-600 shrink-0" />,
        };
      case "General":
        return {
          name: "General Agency",
          pillBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
          badgeBg: "bg-emerald-100 text-emerald-800",
          leftBorder: "border-l-4 border-l-emerald-500",
          leftBorderClosed: "border-l-4 border-l-emerald-400/60",
          cardOpen: "bg-white border-emerald-300 ring-2 ring-emerald-100 shadow-lg shadow-emerald-500/10",
          cardClosed: "bg-white hover:bg-emerald-50/20 border-slate-200/90 hover:border-emerald-300/60 shadow-xs",
          titleOpen: "text-emerald-800",
          titleHover: "group-hover:text-emerald-600",
          chevronBg: "bg-emerald-600 text-white shadow-md shadow-emerald-500/25",
          innerBg: "bg-emerald-50/40 border-emerald-100",
          linkText: "text-emerald-600 hover:text-emerald-800",
          dotColor: "bg-emerald-500",
          icon: <Globe2 className="w-3 h-3 text-emerald-600 shrink-0" />,
        };
      default:
        return {
          name: "All",
          pillBg: "bg-slate-50 text-slate-700 border-slate-200",
          badgeBg: "bg-slate-100 text-slate-700",
          leftBorder: "border-l-4 border-l-slate-400",
          leftBorderClosed: "border-l-4 border-l-slate-300",
          cardOpen: "bg-white border-slate-300 ring-2 ring-slate-100 shadow-slate-500/10",
          cardClosed: "bg-white hover:bg-slate-50 border-slate-200 shadow-xs",
          titleOpen: "text-slate-800",
          titleHover: "group-hover:text-slate-700",
          chevronBg: "bg-slate-800 text-white",
          innerBg: "bg-slate-50 border-slate-100",
          linkText: "text-sky-600 hover:text-sky-800",
          dotColor: "bg-slate-500",
          icon: <HelpCircle className="w-3 h-3 text-slate-600 shrink-0" />,
        };
    }
  };

  return (
    <div className="w-full bg-white">
      {/* ============================================================== */}
      {/* SECTION 1: AERO SPLIT HERO WITH FAQ.JPG IMAGE SHOWCASE          */}
      {/* ============================================================== */}
      <section className="relative pt-32 sm:pt-36 pb-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-sky-50/80 via-white to-slate-50 border-b border-slate-200/70">
        {/* Subtle Ambient Background Dot Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-45 pointer-events-none" />
        
        {/* Soft Radial Ambient Lights */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* LEFT COLUMN: HERO INFORMATION & SEARCH CONSOLE (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-sky-200 text-sky-800 text-xs font-bold tracking-wide uppercase shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Apex World Knowledge Base &amp; FAQ</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-slate-900 tracking-tight leading-[1.15]">
                Have Questions? We Have{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-600 to-emerald-600">
                  Verified Answers.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="max-w-2xl mx-auto lg:mx-0 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Transparent answers regarding candidate applications, overseas work permits, trade test coordination, employer requisitions, and SLBFE sovereign clearance procedures.
              </p>

              {/* Search Bar Capsule */}
              <div className="relative max-w-2xl mx-auto lg:mx-0">
                <div className="relative rounded-2xl bg-white p-2 shadow-xl shadow-sky-900/5 border border-slate-200/90 flex items-center gap-2 focus-within:border-sky-500 focus-within:ring-4 focus-within:ring-sky-100 transition-all">
                  <Search className="w-5 h-5 text-sky-600 ml-3 shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search questions (e.g. Visa, GAMCA, Fees, Processing Time)..."
                    className="w-full text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 bg-transparent focus:outline-none py-2 px-1 font-medium"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors mr-2 cursor-pointer"
                      title="Clear search"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => {}}
                    className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white font-bold text-xs shadow-md shadow-sky-600/20 shrink-0 transition-transform active:scale-95 cursor-pointer"
                  >
                    <span>Search</span>
                  </button>
                </div>
              </div>

              {/* Quick Tags Filter Pills */}
              <div className="pt-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 block mb-2">
                  Popular Topics:
                </span>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2">
                  {quickTags.map((tag) => (
                    <button
                      key={tag.label}
                      type="button"
                      onClick={() => {
                        setSearchQuery(tag.query);
                        setActiveTab("All");
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                        searchQuery.toLowerCase() === tag.query.toLowerCase()
                          ? "bg-sky-600 text-white border-sky-600 shadow-sm"
                          : "bg-white text-slate-600 border-slate-200 hover:border-sky-300 hover:bg-sky-50/50 hover:text-sky-700"
                      }`}
                    >
                      {tag.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Trust Verification Strip */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-slate-600 font-semibold border-t border-slate-200/80">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>SLBFE License: 2450</span>
                </div>
                <span className="text-slate-400">•</span>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-600" />
                  <span>100% Legal Protocols</span>
                </div>
                <span className="text-slate-400">•</span>
                <div className="flex items-center gap-1.5">
                  <Globe2 className="w-4 h-4 text-indigo-600" />
                  <span>8+ Accredited Nations</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: 3D FLOATING FAQ.JPG IMAGE SHOWCASE (5 cols) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-none">
                
                {/* Ambient Multi-Tone Halo Glows behind the image */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-400/25 via-sky-400/20 to-indigo-500/25 rounded-[3rem] blur-2xl opacity-75 pointer-events-none" />

                {/* Floating Architectural Card Container */}
                <div className="relative rounded-[2.5rem] p-3 sm:p-4 bg-white/85 backdrop-blur-xl border border-white/90 shadow-2xl shadow-sky-950/10 overflow-hidden">
                  
                  {/* The FAQ Image - Clean & Unobstructed */}
                  <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[16/10] bg-slate-900 shadow-inner">
                    <Image
                      src="/images/faq.jpg"
                      alt="Apex World Frequently Asked Questions & Knowledge Base"
                      width={1200}
                      height={675}
                      priority
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 2: INTERACTIVE CATEGORY HUB (BENTO STYLE)              */}
      {/* ============================================================== */}
      <section className="py-12 bg-slate-50/60 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-xs font-bold text-sky-700 uppercase tracking-wider mb-1">
              Select Your Area of Inquiry
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              Click a category below to filter questions tailored specifically to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Card 1: All Categories */}
            <button
              type="button"
              onClick={() => setActiveTab("All")}
              className={`p-5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                activeTab === "All"
                  ? "bg-white border-sky-400 ring-2 ring-sky-400/20 shadow-lg shadow-sky-900/5 -translate-y-1"
                  : "bg-white hover:bg-slate-50 border-slate-200 hover:border-slate-300 shadow-xs"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center font-bold">
                    <Layers className="w-5 h-5 text-slate-700" />
                  </div>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                    {categoryCounts.All} Qs
                  </span>
                </div>
                <h3 className="font-heading font-bold text-base text-slate-900 mb-1">
                  All Questions
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Full agency knowledge base across candidate, employer, and legal questions.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-sky-600">
                <span>View all</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>

            {/* Card 2: Job Seekers */}
            <button
              type="button"
              onClick={() => setActiveTab("Job Seekers")}
              className={`p-5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                activeTab === "Job Seekers"
                  ? "bg-white border-sky-500 ring-2 ring-sky-500/20 shadow-lg shadow-sky-900/5 -translate-y-1"
                  : "bg-white hover:bg-slate-50 border-slate-200 hover:border-slate-300 shadow-xs"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                    <Briefcase className="w-5 h-5 text-sky-600" />
                  </div>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800">
                    {categoryCounts["Job Seekers"]} Qs
                  </span>
                </div>
                <h3 className="font-heading font-bold text-base text-slate-900 mb-1">
                  Job Seekers
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Application steps, required documents, GAMCA medicals, and visa approvals.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-sky-600">
                <span>Candidate Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>

            {/* Card 3: Foreign Employers */}
            <button
              type="button"
              onClick={() => setActiveTab("Foreign Employers")}
              className={`p-5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                activeTab === "Foreign Employers"
                  ? "bg-white border-indigo-500 ring-2 ring-indigo-500/20 shadow-lg shadow-indigo-900/5 -translate-y-1"
                  : "bg-white hover:bg-slate-50 border-slate-200 hover:border-slate-300 shadow-xs"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                    <Building2 className="w-5 h-5 text-indigo-600" />
                  </div>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800">
                    {categoryCounts["Foreign Employers"]} Qs
                  </span>
                </div>
                <h3 className="font-heading font-bold text-base text-slate-900 mb-1">
                  Foreign Employers
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Manpower requisition, embassy attestation, trade tests, and deployment SLAs.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-indigo-600">
                <span>Employer Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>

            {/* Card 4: General Agency */}
            <button
              type="button"
              onClick={() => setActiveTab("General")}
              className={`p-5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                activeTab === "General"
                  ? "bg-white border-emerald-500 ring-2 ring-emerald-500/20 shadow-lg shadow-emerald-900/5 -translate-y-1"
                  : "bg-white hover:bg-slate-50 border-slate-200 hover:border-slate-300 shadow-xs"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                    <Globe2 className="w-5 h-5 text-emerald-600" />
                  </div>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                    {categoryCounts.General} Qs
                  </span>
                </div>
                <h3 className="font-heading font-bold text-base text-slate-900 mb-1">
                  General &amp; Legal
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  SLBFE government registration, licensing, safety guarantees, and offices.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-600">
                <span>Legal &amp; Policy</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>

          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 3: ACCORDION LIST WITH MODERN CARD ARCHITECTURE       */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Results Counter & Active Filter Strip */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-8 pb-4 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Displaying:
            </span>
            <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900">
              {activeTab === "All" ? "All Verified Questions" : `${activeTab} Questions`}
              <span className="ml-2 text-sm font-semibold text-sky-600">
                ({filteredFaqs.length} {filteredFaqs.length === 1 ? "result" : "results"})
              </span>
            </h3>
          </div>

          {(searchQuery || activeTab !== "All") && (
            <button
              type="button"
              onClick={() => {
                setActiveTab("All");
                setSearchQuery("");
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>

        {/* Empty Search Results */}
        {filteredFaqs.length === 0 ? (
          <div className="p-12 text-center bg-slate-50 rounded-3xl border border-dashed border-slate-300">
            <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center mx-auto mb-4">
              <Search className="w-6 h-6" />
            </div>
            <h4 className="font-heading font-bold text-lg text-slate-900 mb-2">
              No matching answers found for &quot;{searchQuery}&quot;
            </h4>
            <p className="text-slate-500 text-xs sm:text-sm max-w-md mx-auto mb-6">
              Try searching with alternative keywords like &quot;Visa&quot;, &quot;Apply&quot;, &quot;Passport&quot;, or reach out directly to our recruitment officers.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="px-4 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Clear Search
              </button>
              <a
                href="https://wa.me/94771234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Ask on WhatsApp</span>
              </a>
            </div>
          </div>
        ) : (
          /* The Enhanced Modern Accordion List */
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openFaqId === faq.id;
              const colorTheme = getCategoryColor(faq.category);

              return (
                <div
                  key={faq.id}
                  className={`group rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? `${colorTheme.cardOpen} ${colorTheme.leftBorder}`
                      : `${colorTheme.cardClosed} ${colorTheme.leftBorderClosed}`
                  }`}
                >
                  {/* Accordion Question Header */}
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-start sm:items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-start sm:items-center gap-3">
                      {/* Numeric Index Badge with category theme */}
                      <span className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 sm:mt-0 font-mono ${colorTheme.badgeBg}`}>
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div>
                        {/* Category Tag with Icon & Color */}
                        <span
                          className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md border mb-1.5 shadow-2xs ${colorTheme.pillBg}`}
                        >
                          {colorTheme.icon}
                          <span>{faq.category}</span>
                        </span>

                        {/* Question Title */}
                        <h4
                          className={`text-sm sm:text-base font-bold font-heading leading-snug transition-colors ${
                            isOpen
                              ? colorTheme.titleOpen
                              : `text-slate-800 ${colorTheme.titleHover}`
                          }`}
                        >
                          {faq.question}
                        </h4>
                      </div>
                    </div>

                    {/* Chevron Indicator with Category-Specific Background on Open */}
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? `${colorTheme.chevronBg} rotate-180`
                          : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Accordion Answer Body */}
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-2 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-slate-50/40 animate-fadeIn">
                      <div className={`p-4 sm:p-5 rounded-xl border text-slate-700 space-y-3 shadow-xs ${colorTheme.innerBg}`}>
                        <p className="leading-relaxed">{faq.answer}</p>

                        {/* Smart Action Shortcuts based on question type */}
                        {faq.category === "Job Seekers" && (
                          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
                            <Link
                              href="/jobs"
                              className="inline-flex items-center gap-1.5 text-sky-600 hover:text-sky-700 font-bold hover:underline"
                            >
                              <span>Explore Available Jobs</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                            <span className="text-slate-300">|</span>
                            <Link
                              href="/apply"
                              className="text-slate-600 hover:text-slate-900 font-medium hover:underline"
                            >
                              Submit General Application
                            </Link>
                          </div>
                        )}

                        {faq.category === "Foreign Employers" && (
                          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
                            <Link
                              href="/employers/request"
                              className="inline-flex items-center gap-1.5 text-indigo-600 hover:text-indigo-700 font-bold hover:underline"
                            >
                              <span>Submit Manpower Demand</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                            <span className="text-slate-300">|</span>
                            <Link
                              href="/employers"
                              className="text-slate-600 hover:text-slate-900 font-medium hover:underline"
                            >
                              View Employer Corporate Services
                            </Link>
                          </div>
                        )}

                        {faq.category === "General" && (
                          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
                            <Link
                              href="/about"
                              className="inline-flex items-center gap-1.5 text-emerald-600 hover:text-emerald-700 font-bold hover:underline"
                            >
                              <span>Learn About Apex World Credentials</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                            <span className="text-slate-300">|</span>
                            <Link
                              href="/contact"
                              className="text-slate-600 hover:text-slate-900 font-medium hover:underline"
                            >
                              Visit Colombo Headquarters
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* ============================================================== */}
        {/* BOTTOM SUPPORT CALLOUT WITH DIRECT WHATSAPP & HOTLINE DESK     */}
        {/* ============================================================== */}
        <div className="mt-16 relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white shadow-2xl p-8 sm:p-10 border border-slate-800">
          {/* Subtle Ambient Halos inside Card */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Info */}
            <div className="md:col-span-7 space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold border border-sky-400/30">
                <Clock className="w-3.5 h-3.5" />
                <span>Immediate Colombo Support</span>
              </span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                Still Have Unanswered Questions?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-lg">
                Our certified recruitment coordinators in Colombo are on standby to answer your questions regarding job orders, trade tests, document attestation, and flight schedules.
              </p>
            </div>

            {/* Right Action Buttons */}
            <div className="md:col-span-5 flex flex-col sm:flex-row md:flex-col gap-3 justify-center md:items-end">
              <a
                href="https://wa.me/94771234567?text=Hello%20Apex%20World,%20I%20have%20a%20question%20regarding%20overseas%20recruitment."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all tracking-wide"
              >
                <MessageCircle className="w-4 h-4 text-slate-950" />
                <span>Chat Directly on WhatsApp</span>
              </a>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs border border-white/15 hover:border-white/25 transition-all text-center"
              >
                <PhoneCall className="w-3.5 h-3.5 text-sky-400" />
                <span>Contact Colombo Head Office</span>
              </Link>
            </div>

          </div>
        </div>

      </section>
    </div>
  );
}
