import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Plane,
  ArrowRight,
  Briefcase,
  Users,
  Building2,
  CheckCircle2,
  ShieldCheck,
  Globe2,
  Award,
  Clock,
  Compass,
  FileCheck,
  PlaneTakeoff,
  Star,
  Quote,
} from "lucide-react";
import { StatCounter } from "@/components/animations/StatCounter";
import { CloudLayer } from "@/components/animations/CloudLayer";
import { SkyFlightCorridors } from "@/components/animations/SkyFlightCorridors";
import { DynamicHeadlineWord } from "@/components/animations/DynamicHeadlineWord";
import { HeroQuickSearch } from "@/components/home/HeroQuickSearch";
import { HeroBackgroundVideo } from "@/components/home/HeroBackgroundVideo";
import { HeroAirlinerStage } from "@/components/home/HeroAirlinerStage";
import { DestinationsMarquee } from "@/components/home/DestinationsMarquee";
import { PopularCategoriesSection } from "@/components/home/PopularCategoriesSection";
import { FlightRouteMap } from "@/components/animations/FlightRouteMap";
import { WhyChooseUsBento } from "@/components/home/WhyChooseUsBento";
import { JourneyFlightMap } from "@/components/home/JourneyFlightMap";
import { TestimonialsMasonry } from "@/components/home/TestimonialsMasonry";
import { JobCard } from "@/components/jobs/JobCard";
import { JOBS_DATA, JOB_CATEGORIES } from "@/data/jobsData";

export default function HomePage() {
  const featuredJobs = JOBS_DATA.slice(0, 6);

  return (
    <div className="w-full overflow-hidden">
      {/* SECTION 2: AVIATION LUXURY HERO WITH CINEMATIC MANPOWER VIDEO */}
      <section className="relative min-h-[92vh] lg:min-h-[95vh] flex flex-col items-center justify-between bg-slate-950 text-white pt-28 sm:pt-32 pb-2 sm:pb-3 overflow-hidden">
        {/* Background Cinematic Manpower Video with Audio & Playback Controls */}
        <HeroBackgroundVideo />

        {/* Global Air Traffic Trajectory Arcs & Travelling Radar Beacons */}
        <SkyFlightCorridors />

        {/* Hero Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-2 sm:pt-6 mb-8">
          {/* Top Pill Announcement */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-sky-300 text-xs font-semibold shadow-lg mb-5 animate-fadeIn">
            <span>Your next international destination is just a flight away</span>
            <span className="hidden sm:inline font-mono text-slate-400 font-normal">| SLBFE Lic: 2450</span>
          </div>

          {/* Main Headline with Dynamic Word Morphing */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-heading text-white tracking-tight leading-[1.12] mb-4 drop-shadow-md">
            Fly Beyond Limits — Explore the{" "}
            <DynamicHeadlineWord />
            <span className="text-white">with Us</span>
          </h1>

          {/* Description with Frosted Glassmorphic Capsule */}
          <div className="max-w-2xl mx-auto mb-6 px-6 py-3 rounded-2xl bg-slate-900/70 backdrop-blur-xl border border-white/15 shadow-xl ring-1 ring-white/10">
            <p className="text-xs sm:text-sm md:text-base text-slate-200 font-normal leading-relaxed">
              Connecting qualified Sri Lankan professionals with accredited global careers across the UAE, Japan, Saudi Arabia, Qatar, and Singapore with full visa sponsorship.
            </p>
          </div>

          {/* Floating Pill Search Bar */}
          <HeroQuickSearch />
        </div>

        {/* Global Recruitment Corridors Infinite Marquee Reel */}
        <DestinationsMarquee className="mt-auto" />

        {/* Soft Horizon Blend into Page */}
        <div className="w-full h-10 bg-gradient-to-t from-[#f8fafc] via-[#f8fafc]/40 to-transparent pointer-events-none z-10 -mt-2" />
      </section>

      {/* SECTION 3: COMPANY STATISTICS & ACCREDITATION MATRIX */}
      <section className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Official Government Accreditation Ribbon */}
        <div className="mb-6 flex flex-col md:flex-row items-center justify-between gap-4 p-4 sm:px-6 sm:py-3.5 rounded-2xl bg-white/85 backdrop-blur-xl border border-white/90 shadow-md shadow-sky-950/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 to-sky-400 text-white flex items-center justify-center shadow-md shadow-sky-600/20 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                  Democratic Socialist Republic of Sri Lanka
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded-md bg-sky-50 text-sky-700 text-[10px] font-bold border border-sky-100">
                  SLBFE Lic: 2450
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                Licensed Foreign Employment Agency • Ministry of Labour and Foreign Employment
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 self-start md:self-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold shadow-2xs">
              100% Legal & Govt. Accredited
            </span>
          </div>
        </div>

        {/* 4 Distinct Luxury Interactive Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Card 1: Registered Workers */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-lg shadow-sky-950/5 hover:shadow-xl hover:border-emerald-300 transition-all duration-300 hover:-translate-y-1.5 group">
            <div className="flex items-center justify-between mb-5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-xs">
                <Users className="w-6 h-6" />
              </div>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold">
                Active Pool
              </span>
            </div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-900 tracking-tight mb-2">
              <StatCounter end={5000} suffix="+" />
            </div>
            <h4 className="text-sm font-bold text-slate-800 mb-1">
              Pre-Screened Candidates
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed font-normal">
              Trade-tested Sri Lankan craftsmen and healthcare professionals ready for mobilization.
            </p>
          </div>

          {/* Card 2: Destination Countries */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-lg shadow-sky-950/5 hover:shadow-xl hover:border-sky-300 transition-all duration-300 hover:-translate-y-1.5 group">
            <div className="flex items-center justify-between mb-5">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 border border-sky-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all shadow-xs">
                <Globe2 className="w-6 h-6" />
              </div>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 text-[10px] font-bold">
                Daily Flights
              </span>
            </div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-900 tracking-tight mb-2">
              <StatCounter end={20} suffix="+" />
            </div>
            <h4 className="text-sm font-bold text-slate-800 mb-1">
              Global Corridors
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed font-normal">
              Direct recruitment corridors across GCC, Japan SSW, Singapore, and Europe.
            </p>
          </div>

          {/* Card 3: Visa Approval Rate */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-lg shadow-sky-950/5 hover:shadow-xl hover:border-indigo-300 transition-all duration-300 hover:-translate-y-1.5 group">
            <div className="flex items-center justify-between mb-5">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all shadow-xs">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 text-[10px] font-bold">
                SLBFE Verified
              </span>
            </div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-900 tracking-tight mb-2">
              <StatCounter end={500} suffix="+" />
            </div>
            <h4 className="text-sm font-bold text-slate-800 mb-1">
              Successful Deployments
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed font-normal">
              Candidate departures with 100% legal visa endorsement, medicals, and air tickets.
            </p>
          </div>

          {/* Card 4: International Employers */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-lg shadow-sky-950/5 hover:shadow-xl hover:border-amber-300 transition-all duration-300 hover:-translate-y-1.5 group">
            <div className="flex items-center justify-between mb-5">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all shadow-xs">
                <Building2 className="w-6 h-6" />
              </div>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold">
                Zero Sub-Agents
              </span>
            </div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-900 tracking-tight mb-2">
              <StatCounter end={100} suffix="+" />
            </div>
            <h4 className="text-sm font-bold text-slate-800 mb-1">
              Direct Corporate Partners
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed font-normal">
              Accredited international employers offering direct corporate job sponsorships.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: CHOOSE YOUR JOURNEY (INTERACTIVE 3-STEP WORKFLOW CARDS) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-sky-600 tracking-wider uppercase bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100 shadow-2xs">
            Tailored Experiences
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-slate-900 mt-4 mb-4">
            Choose Your Journey
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Whether you are a qualified Sri Lankan candidate pursuing high-paying overseas careers or an international employer mobilizing skilled workforce squads, Apex World delivers a transparent, end-to-end pathway.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Card 1: For Job Seekers (Visual 3-Step Journey) */}
          <div className="group bg-gradient-to-br from-white via-sky-50/30 to-sky-100/40 rounded-3xl p-7 sm:p-9 border border-sky-200/80 shadow-md shadow-sky-950/5 hover:shadow-2xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between relative overflow-hidden hover:-translate-y-1.5">
            <div className="absolute top-0 right-0 w-44 h-44 bg-sky-400/15 rounded-full blur-3xl -mr-12 -mt-12 pointer-events-none group-hover:scale-125 transition-transform duration-500" />

            <div>
              {/* Header Badge & Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-sky-600 to-sky-500 text-white flex items-center justify-center shadow-lg shadow-sky-600/25 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-7 h-7" />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold border border-sky-100 shadow-2xs">
                  <span>450+ Active Vacancies</span>
                </div>
              </div>

              <span className="text-xs font-bold text-sky-700 uppercase tracking-widest block mb-1">
                Pathway 01
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 mb-3">
                For Job Seekers
              </h3>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-8">
                Your direct, legally protected gateway to verified international jobs across UAE, Japan SSW, Saudi Arabia, Qatar, and Singapore with full visa sponsorship.
              </p>

              {/* 3-Step Visual Stepper with Animated Connectors */}
              <div className="relative pl-7 sm:pl-8 space-y-6 sm:space-y-7 mb-8 before:absolute before:left-3 sm:before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-sky-500 before:via-sky-400 before:to-sky-200">
                {/* Step 1 */}
                <div className="relative group/step">
                  <div className="absolute -left-7 sm:-left-8 top-0.5 w-6 h-6 rounded-full bg-white border-2 border-sky-500 text-sky-600 text-[11px] font-bold flex items-center justify-center shadow-xs group-hover/step:bg-sky-500 group-hover/step:text-white transition-colors">
                    1
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1 group-hover/step:text-sky-700 transition-colors">
                    Explore & Apply Online in Minutes
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Browse hundreds of verified vacancies by trade or destination and submit your CV via our guided multi-step portal.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="relative group/step">
                  <div className="absolute -left-7 sm:-left-8 top-0.5 w-6 h-6 rounded-full bg-white border-2 border-sky-500 text-sky-600 text-[11px] font-bold flex items-center justify-center shadow-xs group-hover/step:bg-sky-500 group-hover/step:text-white transition-colors">
                    2
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1 group-hover/step:text-sky-700 transition-colors">
                    Technical Trade Test & Medicals
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Undergo practical skills assessments at Colombo testing centers with GAMCA medical clearance and SLBFE registration.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="relative group/step">
                  <div className="absolute -left-7 sm:-left-8 top-0.5 w-6 h-6 rounded-full bg-white border-2 border-sky-500 text-sky-600 text-[11px] font-bold flex items-center justify-center shadow-xs group-hover/step:bg-sky-500 group-hover/step:text-white transition-colors">
                    3
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1 group-hover/step:text-sky-700 transition-colors">
                    Visa Stamping & Departure Flight
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Receive your authenticated employment contract, direct employer visa, free air tickets, and full pre-departure briefing.
                  </p>
                </div>
              </div>

              {/* Perk Chips */}
              <div className="flex flex-wrap gap-2 mb-8 text-[11px] font-semibold text-sky-800">
                <span className="px-2.5 py-1 rounded-lg bg-white/80 border border-sky-200/80 shadow-2xs">
                  ✈️ Free Flight Tickets
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white/80 border border-sky-200/80 shadow-2xs">
                  🏠 Accommodation Provided
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white/80 border border-sky-200/80 shadow-2xs">
                  🏥 Medical Insurance
                </span>
              </div>
            </div>

            <Link
              href="/jobs"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm shadow-lg shadow-sky-600/25 hover:shadow-xl transition-all group/btn"
            >
              <span>Explore Overseas Jobs</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
            </Link>
          </div>

          {/* Card 2: For Foreign Employers (Visual 3-Step Journey) */}
          <div className="group bg-gradient-to-br from-white via-slate-50 to-slate-100/70 rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-md shadow-slate-950/5 hover:shadow-2xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between relative overflow-hidden hover:-translate-y-1.5">
            <div className="absolute top-0 right-0 w-44 h-44 bg-slate-400/10 rounded-full blur-3xl -mr-12 -mt-12 pointer-events-none group-hover:scale-125 transition-transform duration-500" />

            <div>
              {/* Header Badge & Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-lg shadow-slate-900/25 group-hover:scale-110 transition-transform">
                  <Building2 className="w-7 h-7" />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200/80 shadow-2xs">
                  <span>B2B Priority Requisition</span>
                </div>
              </div>

              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-1">
                Pathway 02
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 mb-3">
                For Foreign Employers
              </h3>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-8">
                Deploy accredited, disciplined Sri Lankan technical squads and service talent within a guaranteed 30-45 day timeline under complete SLBFE compliance.
              </p>

              {/* 3-Step Visual Stepper with Animated Connectors */}
              <div className="relative pl-7 sm:pl-8 space-y-6 sm:space-y-7 mb-8 before:absolute before:left-3 sm:before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-slate-800 before:via-slate-500 before:to-slate-300">
                {/* Step 1 */}
                <div className="relative group/step">
                  <div className="absolute -left-7 sm:-left-8 top-0.5 w-6 h-6 rounded-full bg-white border-2 border-slate-900 text-slate-900 text-[11px] font-bold flex items-center justify-center shadow-xs group-hover/step:bg-slate-900 group-hover/step:text-white transition-colors">
                    1
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1 group-hover/step:text-sky-700 transition-colors">
                    Submit Manpower Requisition & Criteria
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Specify required trade skills, certifications, headcount, and contract terms via our digital employer intake desk.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="relative group/step">
                  <div className="absolute -left-7 sm:-left-8 top-0.5 w-6 h-6 rounded-full bg-white border-2 border-slate-900 text-slate-900 text-[11px] font-bold flex items-center justify-center shadow-xs group-hover/step:bg-slate-900 group-hover/step:text-white transition-colors">
                    2
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1 group-hover/step:text-sky-700 transition-colors">
                    Live Video Trade Tests & Screening
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Interview pre-vetted candidates and witness live practical testing at our Colombo workshops with high-definition video feeds.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="relative group/step">
                  <div className="absolute -left-7 sm:-left-8 top-0.5 w-6 h-6 rounded-full bg-white border-2 border-slate-900 text-slate-900 text-[11px] font-bold flex items-center justify-center shadow-xs group-hover/step:bg-slate-900 group-hover/step:text-white transition-colors">
                    3
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1 group-hover/step:text-sky-700 transition-colors">
                    Legal Mobilization in 30–45 Days
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    We manage all Sri Lankan ministry approvals, embassy authentication, GAMCA medicals, and airport staging under strict SLA.
                  </p>
                </div>
              </div>

              {/* Enterprise SLA Chips */}
              <div className="flex flex-wrap gap-2 mb-8 text-[11px] font-semibold text-slate-700">
                <span className="px-2.5 py-1 rounded-lg bg-white/80 border border-slate-200/80 shadow-2xs">
                  ⚡ 30–45 Day SLA
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white/80 border border-slate-200/80 shadow-2xs">
                  🛠️ Live Video Trade Testing
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white/80 border border-slate-200/80 shadow-2xs">
                  📋 100% SLBFE Compliant
                </span>
              </div>
            </div>

            <Link
              href="/employers/request"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-lg shadow-slate-900/25 hover:shadow-xl transition-all group/btn"
            >
              <span>Submit Manpower Request</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: POPULAR JOB CATEGORIES (INTERACTIVE FILTER TABS & ANIMATED CARDS) */}
      <PopularCategoriesSection />

      {/* SECTION 6: FEATURED JOB OPPORTUNITIES */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold text-sky-600 tracking-wider uppercase bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
              Active Vacancies
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 mt-3">
              Featured Job Opportunities
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Currently approved job openings with verified employer compensation and benefits.
            </p>
          </div>
          <Link
            href="/jobs"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-bold border border-sky-200 transition-colors"
          >
            <span>Browse Full Job Portal</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </section>

      {/* SECTION 7: INTERNATIONAL DESTINATIONS & AVIATION NETWORK */}
      <section className="py-24 bg-gradient-to-b from-white via-sky-50/30 to-slate-50 text-slate-900 relative overflow-hidden border-t border-slate-200/80">
        {/* Subtle Ambient Blueprint Depth Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-200/25 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-sky-700 tracking-wider uppercase bg-sky-100/80 px-4 py-1.5 rounded-full border border-sky-200 shadow-2xs inline-block mb-3">
              Global Corridors
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-slate-900 tracking-tight mt-1 mb-4">
              International Employment Destinations
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Discover accredited destination nations where Apex World operates bilateral recruitment corridors with direct employer sponsorships.
            </p>
          </div>

          {/* Interactive Aviation Route Map */}
          <div>
            <FlightRouteMap />
          </div>
        </div>
      </section>

      {/* SECTION 8: WHY CHOOSE Apex World (360° ORBITAL TRUST WHEEL) */}
      <WhyChooseUsBento />

      {/* SECTION 9: HOW IT WORKS (GLOBAL EXPRESS TRANSIT MAP) */}
      <JourneyFlightMap />

      {/* SECTION 10: TESTIMONIALS (PINTEREST-INSPIRED MASONRY REVIEW GRID) */}
      <TestimonialsMasonry />
    </div>
  );
}

