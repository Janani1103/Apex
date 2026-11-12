import React from "react";
import Image from "next/image";
import { JobSeekerHexagonGrid } from "@/components/services/JobSeekerHexagonGrid";
import { EmployerVerticalPillars } from "@/components/services/EmployerVerticalPillars";
import { IndustriesInfiniteScroll } from "@/components/services/IndustriesInfiniteScroll";

export const metadata = {
  title: "Our Services | Apex World Foreign Employment Agencies (Pvt) Ltd.",
  description:
    "Comprehensive international recruitment solutions for Sri Lankan job seekers and foreign employers.",
};

export default function ServicesPage() {
  return (
    <div className="w-full">
      {/* SECTION 1: HERO (WITH CUSTOM CLEAR LIGHT BACKGROUND IMAGE 3.JPEG) */}
      <section className="relative min-h-[54vh] sm:min-h-[60vh] flex items-center justify-center pt-32 sm:pt-36 pb-20 sm:pb-24 overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0 select-none">
          <Image
            src="/images/3.jpeg"
            alt="Apex World Professional Manpower Solutions"
            fill
            priority
            className="object-cover object-center brightness-[0.98] contrast-[1.05]"
            sizes="100vw"
            quality={95}
          />
          {/* Subtle natural daylight gradient: keeps photo crystal clear while smoothing bottom transition into page */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-transparent to-white" />
          {/* Soft focused center halo behind text for crisp legibility */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_50%_48%,rgba(255,255,255,0.78),transparent_80%)] pointer-events-none" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-bold text-sky-900 tracking-wider uppercase bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full border border-sky-200/80 shadow-md inline-flex items-center gap-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
            Our Comprehensive Solutions
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading text-slate-900 tracking-tight mb-5 leading-[1.15] drop-shadow-xs">
            Professional Recruitment Solutions for a{" "}
            <span className="bg-gradient-to-r from-sky-600 via-sky-700 to-blue-800 bg-clip-text text-transparent">
              Global Workforce.
            </span>
          </h1>

          <div className="max-w-3xl mx-auto px-6 py-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white shadow-lg">
            <p className="text-sm sm:text-base md:text-lg text-slate-800 font-medium leading-relaxed">
              Bridging Sri Lankan talent with accredited international careers through verified legal documentation, vocational testing, and end-to-end recruitment management.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: SERVICES FOR JOB SEEKERS (AEROSPACE HONEYCOMB INTERLOCKING GRID) */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <JobSeekerHexagonGrid />
      </section>

      {/* SECTION 3: SERVICES FOR FOREIGN EMPLOYERS (4 CORPORATE STRATEGIC VERTICAL PILLARS) */}
      <section id="employer-services" className="py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden">
        {/* Subtle grid background aura */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.15),rgba(255,255,255,0))] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <EmployerVerticalPillars />
        </div>
      </section>

      {/* SECTION 4: INDUSTRIES WE SERVE (INFINITE HORIZONTAL SCROLL TICKER) */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-white via-sky-50/20 to-white overflow-hidden border-t border-slate-100">
        <IndustriesInfiniteScroll />
      </section>
    </div>
  );
}

