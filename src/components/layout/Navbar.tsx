"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Plane,
  Menu,
  X,
  Search,
  Briefcase,
  Users,
  ChevronDown,
  Globe,
  ArrowRight,
  HardHat,
  Zap,
  Flame,
  Utensils,
  HeartPulse,
  Truck,
  Building2,
  FileText,
  CheckCircle2,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { GlobalSearchModal } from "./GlobalSearchModal";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on page change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveMegaMenu(null);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        {/* MAIN LUXURY AERO NAVIGATION BAR */}
        <div
          className={`transition-all duration-300 relative ${
            isScrolled
              ? "bg-white/95 backdrop-blur-xl py-2 shadow-md border-b border-slate-200/80"
              : isHome
              ? "bg-white/85 backdrop-blur-md py-2.5 border-b border-white/30 shadow-xs"
              : "bg-white/95 backdrop-blur-xl py-2 shadow-sm border-b border-slate-200"
          }`}
        >
          {/* 1px Aviation Contrail Glow Line at Bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-sky-500/50 to-transparent opacity-80 pointer-events-none" />

          <div className="max-w-[1700px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="flex items-center justify-between gap-4 xl:gap-8">
              {/* BRAND IDENTITY (Apex World Logo + Typography) */}
              <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
                <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden bg-white p-0.5 shadow-md shadow-sky-600/15 border border-slate-200/90 group-hover:scale-105 transition-transform shrink-0">
                  <Image
                    src="/images/logo.jpg"
                    alt="Apex World Foreign Employment Agencies (Pvt) Ltd."
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-black text-lg sm:text-xl tracking-[0.08em] text-slate-900 leading-none">
                    APEX WORLD
                  </span>
                  <span className="text-[8px] sm:text-[9px] tracking-wider uppercase font-bold text-sky-600 mt-0.5">
                    Foreign Employment Agencies (Pvt) Ltd.
                  </span>
                </div>
              </Link>

              {/* CENTER NAVIGATION WITH INTERACTIVE MEGA-MENUS */}
              <nav className="hidden xl:flex items-center gap-1 xl:gap-1.5 2xl:gap-2">
                <Link
                  href="/"
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all relative ${
                    pathname === "/"
                      ? "text-sky-600 font-bold bg-sky-50/80"
                      : "text-slate-700 hover:text-sky-600 hover:bg-slate-50/80"
                  }`}
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    pathname === "/about"
                      ? "text-sky-600 font-bold bg-sky-50/80"
                      : "text-slate-700 hover:text-sky-600 hover:bg-slate-50/80"
                  }`}
                >
                  About Us
                </Link>

                <Link
                  href="/services"
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    pathname === "/services"
                      ? "text-sky-600 font-bold bg-sky-50/80"
                      : "text-slate-700 hover:text-sky-600 hover:bg-slate-50/80"
                  }`}
                >
                  Services
                </Link>

                {/* MEGA-MENU 1: JOB SEEKERS */}
                <div
                  className="relative"
                  onMouseEnter={() => setActiveMegaMenu("job-seekers")}
                  onMouseLeave={() => setActiveMegaMenu(null)}
                >
                  <Link
                    href="/jobs"
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all inline-flex items-center gap-1.5 ${
                      pathname.startsWith("/jobs") || pathname.startsWith("/apply") || pathname === "/help"
                        ? "text-sky-600 font-bold bg-sky-50/80"
                        : "text-slate-700 hover:text-sky-600 hover:bg-slate-50/80"
                    }`}
                  >
                    <span>Job Seekers</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                        activeMegaMenu === "job-seekers" ? "rotate-180 text-sky-600" : ""
                      }`}
                    />
                  </Link>

                  {/* Mega-Menu Flyout Card */}
                  {activeMegaMenu === "job-seekers" && (
                    <div className="absolute top-full -left-20 w-[780px] pt-3 z-50 animate-fadeIn">
                      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200/90 p-6 grid grid-cols-12 gap-6 overflow-hidden">
                        {/* Left Column: Popular Trade Categories */}
                        <div className="col-span-5 border-r border-slate-100 pr-4">
                          <span className="text-[10px] font-bold text-sky-600 uppercase tracking-wider block mb-3 flex items-center gap-1">
                            <Briefcase className="w-3 h-3" />
                            Popular Trade Categories
                          </span>
                          <div className="space-y-1">
                            <Link
                              href="/jobs?category=Construction+Workers"
                              className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-sky-50/70 transition-colors group"
                            >
                              <div className="w-7 h-7 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                                <HardHat className="w-3.5 h-3.5" />
                              </div>
                              <div>
                                <div className="text-xs font-semibold text-slate-800 group-hover:text-sky-700">
                                  Civil & Formwork
                                </div>
                                <div className="text-[10px] text-slate-400">Carpentry, Masonry, Steel</div>
                              </div>
                            </Link>

                            <Link
                              href="/jobs?category=Electricians"
                              className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-sky-50/70 transition-colors group"
                            >
                              <div className="w-7 h-7 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                                <Zap className="w-3.5 h-3.5" />
                              </div>
                              <div>
                                <div className="text-xs font-semibold text-slate-800 group-hover:text-sky-700">
                                  Industrial Electricians
                                </div>
                                <div className="text-[10px] text-slate-400">Panels, Wiring, Switchgears</div>
                              </div>
                            </Link>

                            <Link
                              href="/jobs?category=Welders"
                              className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-sky-50/70 transition-colors group"
                            >
                              <div className="w-7 h-7 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                                <Flame className="w-3.5 h-3.5" />
                              </div>
                              <div>
                                <div className="text-xs font-semibold text-slate-800 group-hover:text-sky-700">
                                  6G Certified Welders
                                </div>
                                <div className="text-[10px] text-slate-400">TIG / SMAW / ASME Piping</div>
                              </div>
                            </Link>

                            <Link
                              href="/jobs?category=Healthcare+Support"
                              className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-sky-50/70 transition-colors group"
                            >
                              <div className="w-7 h-7 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                                <HeartPulse className="w-3.5 h-3.5" />
                              </div>
                              <div>
                                <div className="text-xs font-semibold text-slate-800 group-hover:text-sky-700">
                                  Healthcare & SSW
                                </div>
                                <div className="text-[10px] text-slate-400">Japan Caregiver & Nursing</div>
                              </div>
                            </Link>

                            <Link
                              href="/jobs?category=Drivers"
                              className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-sky-50/70 transition-colors group"
                            >
                              <div className="w-7 h-7 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                                <Truck className="w-3.5 h-3.5" />
                              </div>
                              <div>
                                <div className="text-xs font-semibold text-slate-800 group-hover:text-sky-700">
                                  Heavy Transport & Trailers
                                </div>
                                <div className="text-[10px] text-slate-400">Port & Highway Logistics</div>
                              </div>
                            </Link>
                          </div>
                        </div>

                        {/* Middle Column: Top Destination Quick Links */}
                        <div className="col-span-4 border-r border-slate-100 pr-4">
                          <span className="text-[10px] font-bold text-sky-600 uppercase tracking-wider block mb-3 flex items-center gap-1">
                            <Globe className="w-3 h-3" />
                            Top Destinations
                          </span>
                          <div className="space-y-1.5">
                            <Link
                              href="/destinations/united-arab-emirates"
                              className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 text-xs font-semibold text-slate-800 hover:text-sky-700 transition-colors group"
                            >
                              <span className="flex items-center gap-2.5">
                                <img
                                  src="https://flagcdn.com/w80/ae.png"
                                  alt="United Arab Emirates"
                                  className="w-5 h-3.5 object-cover rounded-xs shadow-2xs border border-slate-200/90 shrink-0 group-hover:scale-105 transition-transform"
                                />
                                <span>United Arab Emirates</span>
                              </span>
                              <span className="text-[10px] text-sky-600 font-bold bg-sky-50 px-2 py-0.5 rounded-md">
                                42 Vacancies
                              </span>
                            </Link>

                            <Link
                              href="/destinations/saudi-arabia"
                              className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 text-xs font-semibold text-slate-800 hover:text-sky-700 transition-colors group"
                            >
                              <span className="flex items-center gap-2.5">
                                <img
                                  src="https://flagcdn.com/w80/sa.png"
                                  alt="Saudi Arabia"
                                  className="w-5 h-3.5 object-cover rounded-xs shadow-2xs border border-slate-200/90 shrink-0 group-hover:scale-105 transition-transform"
                                />
                                <span>Saudi Vision 2030</span>
                              </span>
                              <span className="text-[10px] text-sky-600 font-bold bg-sky-50 px-2 py-0.5 rounded-md">
                                58 Vacancies
                              </span>
                            </Link>

                            <Link
                              href="/destinations/qatar"
                              className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 text-xs font-semibold text-slate-800 hover:text-sky-700 transition-colors group"
                            >
                              <span className="flex items-center gap-2.5">
                                <img
                                  src="https://flagcdn.com/w80/qa.png"
                                  alt="Qatar"
                                  className="w-5 h-3.5 object-cover rounded-xs shadow-2xs border border-slate-200/90 shrink-0 group-hover:scale-105 transition-transform"
                                />
                                <span>Qatar Projects</span>
                              </span>
                              <span className="text-[10px] text-sky-600 font-bold bg-sky-50 px-2 py-0.5 rounded-md">
                                35 Vacancies
                              </span>
                            </Link>

                            <Link
                              href="/destinations/japan"
                              className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 text-xs font-semibold text-slate-800 hover:text-sky-700 transition-colors group"
                            >
                              <span className="flex items-center gap-2.5">
                                <img
                                  src="https://flagcdn.com/w80/jp.png"
                                  alt="Japan"
                                  className="w-5 h-3.5 object-cover rounded-xs shadow-2xs border border-slate-200/90 shrink-0 group-hover:scale-105 transition-transform"
                                />
                                <span>Japan SSW Program</span>
                              </span>
                              <span className="text-[10px] text-purple-600 font-bold bg-purple-50 px-2 py-0.5 rounded-md">
                                18 Vacancies
                              </span>
                            </Link>

                            <Link
                              href="/destinations/singapore"
                              className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 text-xs font-semibold text-slate-800 hover:text-sky-700 transition-colors group"
                            >
                              <span className="flex items-center gap-2.5">
                                <img
                                  src="https://flagcdn.com/w80/sg.png"
                                  alt="Singapore"
                                  className="w-5 h-3.5 object-cover rounded-xs shadow-2xs border border-slate-200/90 shrink-0 group-hover:scale-105 transition-transform"
                                />
                                <span>Singapore Precision</span>
                              </span>
                              <span className="text-[10px] text-sky-600 font-bold bg-sky-50 px-2 py-0.5 rounded-md">
                                14 Vacancies
                              </span>
                            </Link>
                          </div>

                          <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                            <Link href="/help" className="text-slate-500 hover:text-sky-600 font-medium">
                              Help & Document Requirements
                            </Link>
                            <Link href="/jobs" className="text-sky-600 font-bold hover:underline">
                              All Jobs →
                            </Link>
                          </div>
                        </div>

                        {/* Right Column: Visual Feature Card */}
                        <div className="col-span-3 bg-gradient-to-br from-sky-900 to-slate-900 rounded-2xl p-4 text-white flex flex-col justify-between relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/20 rounded-full blur-xl -mr-6 -mt-6 pointer-events-none" />

                          <div>
                            <span className="inline-block px-2 py-0.5 rounded bg-sky-500/30 text-sky-300 text-[9px] font-bold uppercase tracking-wider mb-2">
                              2026/2027 Quotas
                            </span>
                            <h4 className="font-heading font-bold text-sm text-white leading-tight mb-2">
                              Direct Employer Sponsorship
                            </h4>
                            <p className="text-slate-300 text-[11px] leading-relaxed">
                              Verified vacancies with flight tickets, accommodation, and medical insurance provided.
                            </p>
                          </div>

                          <Link
                            href="/apply"
                            className="mt-4 w-full py-2 px-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-[11px] text-center transition-colors block"
                          >
                            Online Application
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* MEGA-MENU 2: FOREIGN EMPLOYERS */}
                <div
                  className="relative"
                  onMouseEnter={() => setActiveMegaMenu("employers")}
                  onMouseLeave={() => setActiveMegaMenu(null)}
                >
                  <Link
                    href="/employers"
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all inline-flex items-center gap-1.5 ${
                      pathname.startsWith("/employers")
                        ? "text-sky-600 font-bold bg-sky-50/80"
                        : "text-slate-700 hover:text-sky-600 hover:bg-slate-50/80"
                    }`}
                  >
                    <span>Employers</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                        activeMegaMenu === "employers" ? "rotate-180 text-sky-600" : ""
                      }`}
                    />
                  </Link>

                  {/* Mega-Menu Flyout Card */}
                  {activeMegaMenu === "employers" && (
                    <div className="absolute top-full -left-40 w-[780px] pt-3 z-50 animate-fadeIn">
                      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200/90 p-6 grid grid-cols-12 gap-6 overflow-hidden">
                        {/* Left Column: Workforce Capabilities */}
                        <div className="col-span-5 border-r border-slate-100 pr-4">
                          <span className="text-[10px] font-bold text-sky-600 uppercase tracking-wider block mb-3 flex items-center gap-1">
                            <Building2 className="w-3 h-3" />
                            Workforce Capabilities
                          </span>
                          <div className="space-y-1">
                            <Link
                              href="/employers/workers"
                              className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-sky-50/70 transition-colors group"
                            >
                              <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                                <Users className="w-3.5 h-3.5" />
                              </div>
                              <div>
                                <div className="text-xs font-semibold text-slate-800 group-hover:text-emerald-700">
                                  Browse Worker Catalog
                                </div>
                                <div className="text-[10px] text-slate-400">Search 5,000+ Pre-Screened Profiles</div>
                              </div>
                            </Link>

                            <Link
                              href="/employers/request"
                              className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-sky-50/70 transition-colors group"
                            >
                              <div className="w-7 h-7 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                                <FileText className="w-3.5 h-3.5" />
                              </div>
                              <div>
                                <div className="text-xs font-semibold text-slate-800 group-hover:text-sky-700">
                                  Submit Manpower Request
                                </div>
                                <div className="text-[10px] text-slate-400">Bulk Requisition & Squad Orders</div>
                              </div>
                            </Link>

                            <Link
                              href="/services#employer-services"
                              className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-sky-50/70 transition-colors group"
                            >
                              <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                              </div>
                              <div>
                                <div className="text-xs font-semibold text-slate-800 group-hover:text-sky-700">
                                  Trade Test Staging
                                </div>
                                <div className="text-[10px] text-slate-400">Colombo Video & Live Test Suite</div>
                              </div>
                            </Link>
                          </div>
                        </div>

                        {/* Middle Column: Available Worker Tiers */}
                        <div className="col-span-4 border-r border-slate-100 pr-4">
                          <span className="text-[10px] font-bold text-sky-600 uppercase tracking-wider block mb-3">
                            High-Demand Candidate Tiers
                          </span>
                          <div className="space-y-2 text-xs">
                            <Link
                              href="/employers/workers?category=Mechanical"
                              className="block p-2 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-sky-700"
                            >
                              <strong className="block text-slate-900">ASME 6G Pipe Welders</strong>
                              <span className="text-[10px] text-slate-400">SMAW / GTAW Certified</span>
                            </Link>
                            <Link
                              href="/employers/workers?category=Electrical"
                              className="block p-2 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-sky-700"
                            >
                              <strong className="block text-slate-900">Industrial Electricians</strong>
                              <span className="text-[10px] text-slate-400">Substations & Distribution</span>
                            </Link>
                            <Link
                              href="/employers/workers?category=Driving"
                              className="block p-2 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-sky-700"
                            >
                              <strong className="block text-slate-900">Heavy Articulated Drivers</strong>
                              <span className="text-[10px] text-slate-400">GCC & Trailer Clean Licenses</span>
                            </Link>
                          </div>
                        </div>

                        {/* Right Column: B2B Enterprise Card */}
                        <div className="col-span-3 bg-gradient-to-br from-slate-900 to-sky-950 rounded-2xl p-4 text-white flex flex-col justify-between relative overflow-hidden">
                          <div>
                            <span className="inline-block px-2 py-0.5 rounded bg-emerald-500/30 text-emerald-300 text-[9px] font-bold uppercase tracking-wider mb-2">
                              B2B Priority
                            </span>
                            <h4 className="font-heading font-bold text-sm text-white leading-tight mb-2">
                              Hire Sri Lankan Talent
                            </h4>
                            <p className="text-slate-300 text-[11px] leading-relaxed">
                              Rapid recruitment response and legal deployment within 30-45 days.
                            </p>
                          </div>

                          <Link
                            href="/employers/request"
                            className="mt-4 w-full py-2 px-3 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-[11px] text-center transition-colors block"
                          >
                            Hire Talent Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <Link
                  href="/destinations"
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    pathname.startsWith("/destinations")
                      ? "text-sky-600 font-bold bg-sky-50/80"
                      : "text-slate-700 hover:text-sky-600 hover:bg-slate-50/80"
                  }`}
                >
                  Destinations
                </Link>

                <Link
                  href="/contact"
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    pathname === "/contact"
                      ? "text-sky-600 font-bold bg-sky-50/80"
                      : "text-slate-700 hover:text-sky-600 hover:bg-slate-50/80"
                  }`}
                >
                  Contact
                </Link>
              </nav>

              {/* RIGHT ACTIONS: SPOTLIGHT SEARCH & DISTINCT JOURNEY CTAS */}
              <div className="hidden lg:flex items-center gap-2.5 xl:gap-3">
                {/* 3. Quick Global Search */}
                <button
                  onClick={() => setSearchOpen(true)}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100/90 hover:bg-slate-200/90 text-slate-600 hover:text-slate-900 border border-slate-200/80 text-xs font-medium transition-all shadow-inner group"
                  title="Search jobs, countries, worker IDs"
                  aria-label="Global Search"
                >
                  <Search className="w-3.5 h-3.5 text-sky-600 group-hover:scale-110 transition-transform" />
                  <span className="text-slate-500 font-normal">Search jobs, workers...</span>
                </button>

                {/* 4. Distinct Journey CTAs */}
                {/* Candidate Ghost Pill */}
                <Link
                  href="/jobs"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-sky-700 hover:text-sky-800 bg-sky-50 hover:bg-sky-100/80 border border-sky-200 transition-colors"
                >
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Find Vacancies</span>
                  <ArrowRight className="w-3 h-3 text-sky-500" />
                </Link>

                {/* Employer High-Contrast Aviation Gradient Button with Subtle Glow */}
                <Link
                  href="/employers/request"
                  className="relative group inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-sky-600 via-sky-500 to-sky-700 hover:from-sky-500 hover:to-sky-600 shadow-md shadow-sky-600/30 transition-all hover:scale-[1.03] active:scale-95 border border-sky-400/30"
                >
                  <Users className="w-3.5 h-3.5" />
                  <span>Hire Talent</span>
                </Link>

                {/* WhatsApp Real Brand Trigger with Live Beacon */}
                <a
                  href="https://wa.me/94771234567?text=Hello%20Apex%20World,%20I%20would%20like%20to%20connect%20with%20your%20recruitment%20desk."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative p-2 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-xl transition-colors border border-emerald-200/80 bg-emerald-50/40"
                  title="Official WhatsApp Desk (Online)"
                  aria-label="Contact on WhatsApp"
                >
                  <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]"></span>
                  </span>
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                </a>
              </div>

              {/* Mobile Search & Menu Toggle Buttons */}
              <div className="flex lg:hidden items-center gap-2">
                <button
                  onClick={() => setSearchOpen(true)}
                  className="p-2 text-slate-700 hover:text-sky-600 rounded-lg"
                  aria-label="Search"
                >
                  <Search className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 text-slate-800 hover:text-sky-600 rounded-lg"
                  aria-label="Toggle navigation menu"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE DRAWER */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/98 backdrop-blur-2xl border-b border-slate-200 shadow-2xl px-5 pt-4 pb-8 animate-fadeIn max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col gap-1 text-sm font-semibold">
              <Link href="/" className="px-3 py-2 rounded-xl text-slate-800 hover:bg-slate-50">
                Home
              </Link>
              <Link href="/about" className="px-3 py-2 rounded-xl text-slate-800 hover:bg-slate-50">
                About Us
              </Link>
              <Link href="/services" className="px-3 py-2 rounded-xl text-slate-800 hover:bg-slate-50">
                Our Services
              </Link>
              <Link href="/jobs" className="px-3 py-2 rounded-xl text-sky-700 bg-sky-50 font-bold">
                Available Jobs (Candidate Portal)
              </Link>
              <Link href="/apply" className="px-3 py-2 rounded-xl text-slate-700 hover:bg-slate-50 pl-6 text-xs">
                ↳ Online Application
              </Link>
              <Link href="/help" className="px-3 py-2 rounded-xl text-slate-700 hover:bg-slate-50 pl-6 text-xs">
                ↳ Document Requirements & Visa Help
              </Link>
              <Link href="/employers" className="px-3 py-2 rounded-xl text-emerald-800 bg-emerald-50 font-bold mt-2">
                Foreign Employers (B2B Talent)
              </Link>
              <Link href="/employers/workers" className="px-3 py-2 rounded-xl text-slate-700 hover:bg-slate-50 pl-6 text-xs">
                ↳ Browse 5,000+ Worker Profiles
              </Link>
              <Link href="/employers/request" className="px-3 py-2 rounded-xl text-slate-700 hover:bg-slate-50 pl-6 text-xs">
                ↳ Submit Manpower Requisition
              </Link>
              <Link href="/destinations" className="px-3 py-2 rounded-xl text-slate-800 hover:bg-slate-50 mt-1">
                Destinations (UAE, Saudi, Qatar, Japan, Singapore)
              </Link>
              <Link href="/contact" className="px-3 py-2 rounded-xl text-slate-800 hover:bg-slate-50">
                Contact Office
              </Link>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-200 flex flex-col gap-3">
              <Link
                href="/jobs"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold text-sky-700 bg-sky-100/90"
              >
                <Briefcase className="w-4 h-4" />
                Find Overseas Jobs
              </Link>
              <Link
                href="/employers/request"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold text-white bg-sky-600 shadow-md shadow-sky-600/25"
              >
                <Users className="w-4 h-4" />
                Hire Sri Lankan Workers
              </Link>
              <a
                href="https://wa.me/94771234567"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                Chat with Colombo Hotline on WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Dialog Modal */}
      <GlobalSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
