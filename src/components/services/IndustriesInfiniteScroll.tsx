"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  HardHat,
  Cpu,
  Factory,
  Utensils,
  HeartPulse,
  Truck,
  Wrench,
  Boxes,
  ArrowRight,
  MapPin,
  Pause,
  Play,
} from "lucide-react";

interface IndustryItem {
  id: string;
  name: string;
  tag: string;
  subtitle: string;
  icon: React.ElementType;
  image: string;
  desc: string;
  roles: string[];
  metric: string;
  destinations: string;
}

const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: "construction",
    name: "Construction & Civil",
    tag: "SECTOR // 01",
    subtitle: "Heavy Civil & High-Rise Infrastructure",
    icon: HardHat,
    image: "/images/industries/construction.jpg",
    desc: "Certified civil tradesmen, structural fabricators, and site supervisory cadres for regional infrastructure.",
    roles: ["Carpenters", "Masons", "Steel Fixers", "Civil Foremen", "Scaffolders"],
    metric: "600+ Deployed / Year",
    destinations: "UAE • Saudi Arabia • Qatar",
  },
  {
    id: "engineering",
    name: "Engineering & MEP",
    tag: "SECTOR // 02",
    subtitle: "Industrial Electrical & HVAC Automation",
    icon: Cpu,
    image: "/images/industries/engineering.jpg",
    desc: "Skilled electromechanical specialists for substations, building automation, and central plant chillers.",
    roles: ["HVAC Mechanics", "Industrial Electricians", "Plumbers", "Pipefitters"],
    metric: "400+ Certified Techs",
    destinations: "Qatar • UAE • Oman • Kuwait",
  },
  {
    id: "manufacturing",
    name: "Precision Manufacturing",
    tag: "SECTOR // 03",
    subtitle: "Automated Assembly & CNC Production",
    icon: Factory,
    image: "/images/industries/manufacturing.jpg",
    desc: "High-precision factory workers, CNC machine programmers, and electronic assembly technicians.",
    roles: ["CNC Machinists", "Assembly Specialists", "Tool & Die Makers", "QC Auditors"],
    metric: "100% Trade Audited",
    destinations: "Japan SSW • Singapore • Europe",
  },
  {
    id: "hospitality",
    name: "Hospitality & Tourism",
    tag: "SECTOR // 04",
    subtitle: "5-Star Resorts & Airline Catering",
    icon: Utensils,
    image: "/images/industries/hospitality.jpg",
    desc: "English-proficient culinary chefs, luxury front office, and executive housekeeping personnel.",
    roles: ["Executive Chefs", "Front Office", "Waitstaff", "Housekeeping", "Baristas"],
    metric: "350+ Hotel Placements",
    destinations: "Maldives • Dubai • Saudi • Qatar",
  },
  {
    id: "healthcare",
    name: "Healthcare Support",
    tag: "SECTOR // 05",
    subtitle: "Caregiving & Medical Assisting",
    icon: HeartPulse,
    image: "/images/industries/healthcare.jpg",
    desc: "Government-accredited caregivers and patient attendants trained under Japan SSW and European protocols.",
    roles: ["Certified Caregivers", "Nurse Assistants", "Geriatric Care", "Clinic Aides"],
    metric: "JLPT N4 Certified",
    destinations: "Japan • UK • Singapore",
  },
  {
    id: "transportation",
    name: "Transportation & Fleet",
    tag: "SECTOR // 06",
    subtitle: "Heavy Logistics & Commercial Driving",
    icon: Truck,
    image: "/images/industries/transportation.jpg",
    desc: "Licensed heavy articulated trailer drivers, municipal bus drivers, and certified forklift operators.",
    roles: ["Heavy Trailer Drivers", "Bus Drivers", "Forklift Operators", "Fleet Leads"],
    metric: "GCC Valid Clean Licenses",
    destinations: "UAE • Saudi Arabia • Kuwait",
  },
  {
    id: "maintenance",
    name: "Facility Management",
    tag: "SECTOR // 07",
    subtitle: "Commercial Property & Operations",
    icon: Wrench,
    image: "/images/industries/maintenance.jpg",
    desc: "Multi-skilled maintenance crews ensuring continuous uptime for commercial airports, malls, and campuses.",
    roles: ["Chiller Techs", "BMS Operators", "Multi-Handymen", "Elevator Techs"],
    metric: "24/7 Facility Response",
    destinations: "Dubai • Doha • Riyadh",
  },
  {
    id: "general-labour",
    name: "Logistics & Warehousing",
    tag: "SECTOR // 08",
    subtitle: "Distribution Centers & Site Cargo",
    icon: Boxes,
    image: "/images/industries/general-labour.jpg",
    desc: "Disciplined warehouse squads, inventory sorters, cargo loaders, and construction support teams.",
    roles: ["Warehouse Helpers", "Cargo Loaders", "Pick & Pack Crews", "Site Helpers"],
    metric: "Rapid Squad Mobilization",
    destinations: "GCC • Southeast Asia",
  },
];

export function IndustriesInfiniteScroll() {
  const [isPaused, setIsPaused] = useState(false);
  const [activeSpeed, setActiveSpeed] = useState<"normal" | "slow">("normal");

  // Duplicate items twice to achieve a seamless, continuous -50% keyframe marquee loop
  const marqueeItems = [...INDUSTRIES_DATA, ...INDUSTRIES_DATA];

  return (
    <div className="w-full relative overflow-hidden py-4">
      {/* SECTION HEADER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-xs font-bold text-sky-600 tracking-wider uppercase bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100 shadow-xs inline-flex items-center mb-3">
            Sectors Covered
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 tracking-tight">
            Industries <span className="bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent">We Mobilize</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Providing tailored candidate pipelines across 8 core industry verticals. Hover over any card to pause and inspect trade qualifications.
          </p>
        </div>

        {/* Ticker Controls (Play/Pause & Speed) */}
        <div className="flex items-center gap-2.5 bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm self-start md:self-auto shrink-0">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              isPaused
                ? "bg-sky-500 text-white shadow-xs"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
            title={isPaused ? "Resume Marquee" : "Pause Marquee"}
          >
            {isPaused ? <Play className="w-3.5 h-3.5 fill-current" /> : <Pause className="w-3.5 h-3.5" />}
            <span>{isPaused ? "Paused" : "Auto Scroll"}</span>
          </button>

          <button
            onClick={() => setActiveSpeed(activeSpeed === "normal" ? "slow" : "normal")}
            className="px-2.5 py-1.5 rounded-xl text-xs font-mono font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
            title="Toggle Scroll Speed"
          >
            {activeSpeed === "normal" ? "1.0x Speed" : "0.5x Slow"}
          </button>
        </div>
      </div>

      {/* INFINITE MARQUEE TRACK CONTAINER */}
      <div className="relative w-full overflow-hidden select-none group/marquee">
        {/* Left & Right Elegant Vignette Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

        {/* Continuous Horizontal Ticker */}
        <div
          className={`flex items-center gap-6 sm:gap-7 w-max py-4 px-4 ${
            isPaused ? "[animation-play-state:paused]" : "group-hover/marquee:[animation-play-state:paused]"
          }`}
          style={{
            animation: `marquee ${activeSpeed === "normal" ? "42s" : "75s"} linear infinite`,
          }}
        >
          {marqueeItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={`${item.id}-${index}`}
                className="relative w-[320px] sm:w-[360px] h-[450px] sm:h-[470px] rounded-3xl overflow-hidden shrink-0 border-2 border-slate-200/90 hover:border-sky-400 bg-slate-900 shadow-md hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-2"
              >
                {/* Background Industry Photograph */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="360px"
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-700 brightness-[0.92]"
                  />
                  {/* Cinematic Multi-stop Dark Gradient Overlay for Maximum Text Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-900/20" />
                  <div className="absolute inset-0 bg-sky-950/20 mix-blend-overlay pointer-events-none" />
                </div>

                {/* Top Overlay Badges */}
                <div className="relative z-10 p-5 sm:p-6 flex items-start justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/15 text-white shadow-sm">
                    <Icon className="w-4 h-4 text-sky-400" />
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-sky-300">
                      {item.tag}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono font-bold text-emerald-300 bg-emerald-950/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-emerald-500/30 shadow-xs">
                    {item.metric}
                  </span>
                </div>

                {/* Bottom Content Card */}
                <div className="absolute bottom-0 left-0 right-0 z-10 p-5 sm:p-6 flex flex-col justify-end text-white">
                  <span className="text-xs font-semibold text-sky-400 tracking-wide uppercase mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-white tracking-tight mb-2 group-hover:text-sky-300 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-slate-300 text-xs line-clamp-2 mb-3.5 leading-relaxed font-light">
                    {item.desc}
                  </p>

                  {/* Skills/Roles Pill Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.roles.slice(0, 4).map((role) => (
                      <span
                        key={role}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm text-slate-200 border border-white/10 transition-colors"
                      >
                        {role}
                      </span>
                    ))}
                    {item.roles.length > 4 && (
                      <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-lg bg-sky-500/20 text-sky-300 border border-sky-400/20">
                        +{item.roles.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Destinations & Quick Action Strip */}
                  <div className="pt-3 border-t border-white/15 flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-1.5 text-slate-300 font-mono text-[10px]">
                      <MapPin className="w-3 h-3 text-sky-400 shrink-0" />
                      <span className="truncate max-w-[170px]">{item.destinations}</span>
                    </div>

                    <Link
                      href="/jobs"
                      className="inline-flex items-center gap-1 font-bold text-sky-300 hover:text-white transition-colors group/link"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

