"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  HardHat,
  Truck,
  Zap,
  Flame,
  Utensils,
  ShieldCheck,
  HeartPulse,
  Factory,
  Wrench,
  Users,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

interface CategoryItem {
  name: string;
  slug: string;
  sector: "technical" | "healthcare" | "hospitality" | "logistics";
  iconName: string;
  description: string;
  image: string;
  vacancies: number;
  topCorridor: string;
}

const CATEGORIES: CategoryItem[] = [
  {
    name: "Construction Workers",
    slug: "construction",
    sector: "technical",
    iconName: "HardHat",
    description: "Carpenters, masons, steel fixers, and scaffolding specialists.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
    vacancies: 85,
    topCorridor: "🇦🇪 UAE Mega Projects",
  },
  {
    name: "Industrial Electricians",
    slug: "electricians",
    sector: "technical",
    iconName: "Zap",
    description: "Industrial wiring, high-voltage panels, and building electrical systems.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
    vacancies: 32,
    topCorridor: "🇸🇦 Saudi Vision 2030",
  },
  {
    name: "6G Certified Welders",
    slug: "welders",
    sector: "technical",
    iconName: "Flame",
    description: "6G, TIG, MIG, and structural arc pipe welding specialists.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop",
    vacancies: 26,
    topCorridor: "🇶🇦 Qatar Gas Facilities",
  },
  {
    name: "Heavy Vehicle Drivers",
    slug: "drivers",
    sector: "logistics",
    iconName: "Truck",
    description: "Heavy vehicle, trailer, bus, and port container drivers.",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800&auto=format&fit=crop",
    vacancies: 48,
    topCorridor: "🇦🇪 GCC Clean License",
  },
  {
    name: "Japan SSW Healthcare",
    slug: "healthcare",
    sector: "healthcare",
    iconName: "HeartPulse",
    description: "Certified caregivers, nursing assistants, and elderly care specialists.",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=800&auto=format&fit=crop",
    vacancies: 22,
    topCorridor: "🇯🇵 Japan SSW Program",
  },
  {
    name: "Hotel & Hospitality Staff",
    slug: "hospitality",
    sector: "hospitality",
    iconName: "Utensils",
    description: "Front office, culinary chefs, baristas, waitstaff, and banquet associates.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
    vacancies: 40,
    topCorridor: "🇲🇻 Maldives Luxury Resorts",
  },
  {
    name: "Housekeeping & Facility Crews",
    slug: "housekeeping",
    sector: "hospitality",
    iconName: "ShieldCheck",
    description: "Room attendants, hospital sanitization crews, and executive supervisors.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop",
    vacancies: 28,
    topCorridor: "🇦🇪 Dubai Hotels",
  },
  {
    name: "Factory & CNC Technicians",
    slug: "factory",
    sector: "technical",
    iconName: "Factory",
    description: "CNC operators, assembly line workers, and precision mechanics.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    vacancies: 35,
    topCorridor: "🇸🇬 Singapore Precision",
  },
  {
    name: "HVAC & Plant Mechanics",
    slug: "technicians",
    sector: "technical",
    iconName: "Wrench",
    description: "HVAC mechanics, plumbing specialists, and industrial millwrights.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop",
    vacancies: 29,
    topCorridor: "🇰🇼 Kuwait Commercial",
  },
  {
    name: "Civil & Skilled Labourers",
    slug: "skilled-labourers",
    sector: "technical",
    iconName: "Users",
    description: "Experienced general site helpers, painters, and warehouse loaders.",
    image: "/images/civil-workers.jpg",
    vacancies: 60,
    topCorridor: "🇦🇪 Abu Dhabi Infrastructure",
  },
];

function getCategoryIcon(iconName: string) {
  switch (iconName) {
    case "HardHat":
      return <HardHat className="w-5 h-5" />;
    case "Zap":
      return <Zap className="w-5 h-5" />;
    case "Flame":
      return <Flame className="w-5 h-5" />;
    case "Truck":
      return <Truck className="w-5 h-5" />;
    case "HeartPulse":
      return <HeartPulse className="w-5 h-5" />;
    case "Utensils":
      return <Utensils className="w-5 h-5" />;
    case "ShieldCheck":
      return <ShieldCheck className="w-5 h-5" />;
    case "Factory":
      return <Factory className="w-5 h-5" />;
    case "Wrench":
      return <Wrench className="w-5 h-5" />;
    default:
      return <Users className="w-5 h-5" />;
  }
}

export function PopularCategoriesSection() {
  const [activeTab, setActiveTab] = useState<"all" | "technical" | "healthcare" | "hospitality" | "logistics">("all");

  const filteredCategories =
    activeTab === "all"
      ? CATEGORIES
      : CATEGORIES.filter((cat) => cat.sector === activeTab);

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-xs font-bold text-sky-600 tracking-wider uppercase bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100 shadow-2xs">
              Verified Overseas Vacancies
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-slate-900 mt-4 mb-3">
              Popular Job Categories
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl">
              Explore officially verified overseas trade demands across GCC, Japan, Singapore, and Europe. Direct employer sponsorship with flight tickets and accommodation.
            </p>
          </div>
          <Link
            href="/jobs"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-sky-600 text-white font-bold text-xs tracking-wide transition-all shadow-md group shrink-0 self-start md:self-auto"
          >
            <span>View All Vacancies</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Interactive Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
              activeTab === "all"
                ? "bg-sky-600 text-white shadow-md shadow-sky-600/25 scale-[1.02]"
                : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80 hover:bg-slate-50"
            }`}
          >
            All Trades ({CATEGORIES.length})
          </button>
          <button
            onClick={() => setActiveTab("technical")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
              activeTab === "technical"
                ? "bg-sky-600 text-white shadow-md shadow-sky-600/25 scale-[1.02]"
                : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80 hover:bg-slate-50"
            }`}
          >
            Technical & Construction
          </button>
          <button
            onClick={() => setActiveTab("healthcare")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
              activeTab === "healthcare"
                ? "bg-sky-600 text-white shadow-md shadow-sky-600/25 scale-[1.02]"
                : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80 hover:bg-slate-50"
            }`}
          >
            Healthcare & Caregiving
          </button>
          <button
            onClick={() => setActiveTab("logistics")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
              activeTab === "logistics"
                ? "bg-sky-600 text-white shadow-md shadow-sky-600/25 scale-[1.02]"
                : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80 hover:bg-slate-50"
            }`}
          >
            Logistics & Drivers
          </button>
          <button
            onClick={() => setActiveTab("hospitality")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
              activeTab === "hospitality"
                ? "bg-sky-600 text-white shadow-md shadow-sky-600/25 scale-[1.02]"
                : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80 hover:bg-slate-50"
            }`}
          >
            Hospitality & Facilities
          </button>
        </div>

        {/* Categories Dynamic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/jobs?category=${encodeURIComponent(cat.name)}`}
              className="group bg-white rounded-3xl border border-slate-200/80 hover:border-sky-300 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-2"
            >
              {/* Image Container with Gradient Overlays & Fallback */}
              <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
                  onError={(e) => {
                    // Fallback to local image if any remote URL has network block
                    (e.target as HTMLImageElement).src = "/images/civil-workers.jpg";
                  }}
                />
                
                {/* Dark Vignette Overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Glowing Trade Icon Badge */}
                <div className="absolute top-3.5 left-3.5 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md text-sky-600 flex items-center justify-center shadow-md shadow-sky-950/20 group-hover:bg-sky-600 group-hover:text-white transition-all">
                  {getCategoryIcon(cat.iconName)}
                </div>

                {/* Top Destination Corridor Tag */}
                <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold border border-white/20">
                  {cat.topCorridor}
                </div>

                {/* Vacancies Floating Pill at bottom of image */}
                <div className="absolute bottom-3 left-3.5 inline-flex items-center px-3 py-1 rounded-full bg-white/95 backdrop-blur-md shadow-md text-sky-800 text-xs font-extrabold border border-sky-100">
                  <span>{cat.vacancies} Open Vacancies</span>
                </div>
              </div>

              {/* Text Body */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-heading font-extrabold text-base sm:text-lg text-slate-900 group-hover:text-sky-600 transition-colors mb-2 leading-snug">
                    {cat.name}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">
                    {cat.description}
                  </p>
                </div>

                {/* Bottom Action Row */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-sky-600 group-hover:text-sky-700">
                  <span>Explore Jobs</span>
                  <div className="w-7 h-7 rounded-full bg-sky-50 group-hover:bg-sky-600 group-hover:text-white flex items-center justify-center transition-all">
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

