import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Globe2,
  MapPin,
  ArrowRight,
  Plane,
  Briefcase,
  ShieldCheck,
  CheckCircle2,
  ChevronUp,
} from "lucide-react";
import { DESTINATIONS_DATA } from "@/data/destinationsData";

export const metadata = {
  title: "International Destinations | Apex World Foreign Employment Agencies",
  description:
    "Explore international employment destinations where Apex World operates accredited recruitment channels across the Middle East and Asia.",
};

export default function DestinationsIndexPage() {
  return (
    <div className="w-full">
      {/* SECTION 1: HERO WITH COVER BACKGROUND */}
      <section className="relative pt-36 pb-20 sm:pb-24 text-white overflow-hidden border-b border-slate-800">
        {/* Background Image Container */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/20.jpeg"
            alt="Apex World Global Employment Corridors Strategic Operations"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Multi-layered cinematic gradient scrim for crystal clear readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950/85" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-950/30 to-slate-950/75" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold text-sky-300 tracking-wider uppercase bg-sky-500/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-sky-400/30 shadow-sm inline-block mb-4">
            Global Employment Corridors
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight mb-5 drop-shadow-sm">
            Connecting Sri Lankan Talent Across the World.
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed font-normal mb-8 drop-shadow-2xs">
            Discover destinations where Apex World maintains formal partnerships with accredited overseas corporations under sovereign bilateral labor protocols.
          </p>

          {/* Quick Metrics Strip */}
          <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 bg-slate-900/60 backdrop-blur-md border border-white/10 px-5 py-2.5 rounded-2xl text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold text-white">8+ Active Nations</span>
            </div>
            <span className="hidden sm:inline text-slate-600">•</span>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span>Sovereign Bilateral Protocols</span>
            </div>
            <span className="hidden sm:inline text-slate-600">•</span>
            <div className="flex items-center gap-2">
              <Plane className="w-4 h-4 text-sky-400" />
              <span>SLBFE Registered Deployments</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: COUNTRY CARDS — LIGHT LUXURY AERO THEME */}
      <section className="py-24 relative overflow-hidden border-t border-slate-200">
        {/* Clean Light Background: Bright Aero Canvas */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50/60 to-slate-100 pointer-events-none" />

        {/* Subtle Dot Grid on Light Background */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-50 pointer-events-none" />

        {/* Soft Ambient Color Blobs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-sky-200/40 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[350px] bg-indigo-100/50 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-100/40 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-sky-600 tracking-wider uppercase bg-sky-100 px-4 py-1.5 rounded-full border border-sky-200 shadow-sm inline-block">
              Verified Host Nations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 mt-4 mb-3 tracking-tight">
              Explore Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600">
                Destination Profiles
              </span>
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              In-depth country guides, active recruitment quotas, labor laws, and verified foreign employment opportunities.
            </p>
          </div>

          {/* Country Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DESTINATIONS_DATA.map((dest) => (
              <div
                key={dest.slug}
                className="group relative rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200/80 min-h-[520px] sm:min-h-[560px] flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-200/60 border border-slate-200/80 hover:border-sky-300/60"
              >
                {/* 1. Full Background Country Image */}
                <div className="absolute inset-0 -z-10 overflow-hidden rounded-[2rem]">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Light-toned cinematic vignette — image is vivid at top, fades softly at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-800/20 to-white/10 group-hover:from-slate-900/90 transition-all duration-500" />
                </div>

                {/* 2. Top Bar: Flag Badge & Live Vacancy Counter */}
                <div className="p-4 sm:p-5 flex items-center justify-between gap-2 z-10">
                  <div className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-slate-800 flex items-center gap-2 border border-white/80 shadow-md shadow-black/10">
                    <img
                      src={`https://flagcdn.com/w40/${dest.countryCode}.png`}
                      alt={dest.name}
                      className="w-5 h-3.5 rounded-xs object-cover shadow-sm"
                    />
                    <span className="font-heading font-black tracking-wide text-slate-800">{dest.name}</span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-500 text-white backdrop-blur-md border border-sky-400/60 shadow-lg shadow-sky-500/30">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                    </span>
                    <span>{dest.availableJobsCount} Vacancies</span>
                  </span>
                </div>

                {/* 3. Frosted White Ice Glass Sheet */}
                <div className="m-3 sm:m-4 p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white/85 backdrop-blur-xl border border-white/90 shadow-[0_8px_32px_0_rgba(14,165,233,0.12)] transition-all duration-500 ease-out z-10 overflow-hidden group-hover:bg-white/92 group-hover:border-sky-200/80 group-hover:shadow-[0_12px_40px_0_rgba(14,165,233,0.20)]">
                  {/* Soft internal ambient glow */}
                  <div className="absolute -top-10 -right-10 w-28 h-28 bg-sky-200/50 rounded-full blur-2xl pointer-events-none group-hover:bg-sky-300/60 transition-all" />

                  {/* Header Row (Always Visible) */}
                  <div className="flex items-center justify-between gap-2 relative z-10">
                    <div>
                      <h3 className="text-lg sm:text-xl font-black font-heading text-slate-900 tracking-tight group-hover:text-sky-700 transition-colors">
                        {dest.name}
                      </h3>
                      <span className="text-[10px] font-bold tracking-wider text-sky-600 uppercase">
                        Sovereign Labor Corridor
                      </span>
                    </div>

                    {/* Interactive Hover Prompt Pill */}
                    <div className="flex items-center gap-1 text-[11px] font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200 group-hover:opacity-0 transition-opacity duration-300 shrink-0 shadow-sm">
                      <span>Explore</span>
                      <ChevronUp className="w-3.5 h-3.5 text-sky-500 animate-bounce" />
                    </div>
                  </div>

                  {/* Expandable Body (Slide-Up on Hover) */}
                  <div className="space-y-3 max-h-0 opacity-0 group-hover:max-h-[380px] group-hover:opacity-100 group-hover:pt-3 transition-all duration-500 ease-in-out overflow-hidden relative z-10">
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3 font-normal">
                      {dest.shortIntro}
                    </p>

                    <div>
                      <span className="text-[10px] font-bold text-sky-700 uppercase tracking-wider block mb-1.5 flex items-center gap-1">
                        <Briefcase className="w-3 h-3 text-sky-500" />
                        Key Employment Sectors:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {dest.activeSectors.slice(0, 3).map((sector, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 transition-colors"
                          >
                            {sector}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-1.5">
                      <Link
                        href={`/destinations/${dest.slug}`}
                        className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all tracking-wide border border-sky-400/30"
                      >
                        <span>View Country Profile & Jobs</span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

