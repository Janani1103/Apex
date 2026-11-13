"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Plane, ArrowUpRight, Compass, ShieldCheck, Clock, Banknote, Globe2, ChevronRight } from "lucide-react";
import { worldLandmassPath } from "./worldLandPaths";

interface RouteNode {
  id: string;
  name: string;
  country: string;
  airport: string;
  x: number;
  y: number;
  jobs: number;
  salary: string;
  flightTime: string;
  compassHeading: string;
  direction: "NW" | "W" | "SW" | "S" | "SE" | "E" | "NE" | "N";
  region: "gcc" | "europe" | "south" | "oceania" | "sea" | "east-asia" | "north";
  slug: string;
  code: string;
  flightDurationSec: number;
}

export function FlightRouteMap() {
  const [activeNode, setActiveNode] = useState<RouteNode | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string>("all");

  // Colombo Hub (CMB) exact central map coordinates
  const origin = {
    x: 554.8,
    y: 288.1,
    name: "Colombo, Sri Lanka",
    airport: "CMB",
    country: "Sri Lanka",
    code: "lk",
  };

  // Full 360-degree multi-directional flight corridors radiating across all compass bearings
  const destinations: RouteNode[] = [
    // 1. NORTH-WEST (NW) - Europe & UK
    {
      id: "uk",
      name: "London / Manchester",
      country: "United Kingdom",
      airport: "LHR",
      x: 110.4,
      y: 77.8,
      jobs: 18,
      salary: "GBP 2,200 - 3,500",
      flightTime: "11h 20m direct",
      compassHeading: "305° NW",
      direction: "NW",
      region: "europe",
      slug: "united-kingdom",
      code: "gb",
      flightDurationSec: 9.5,
    },
    {
      id: "it",
      name: "Rome / Milan",
      country: "Italy",
      airport: "FCO",
      x: 180.5,
      y: 123.1,
      jobs: 26,
      salary: "EUR 1,800 - 2,800",
      flightTime: "9h 45m direct",
      compassHeading: "304° NW",
      direction: "NW",
      region: "europe",
      slug: "italy",
      code: "it",
      flightDurationSec: 8.2,
    },
    {
      id: "ro",
      name: "Bucharest / Cluj",
      country: "Romania",
      airport: "OTP",
      x: 256.1,
      y: 111.2,
      jobs: 32,
      salary: "EUR 1,200 - 2,100",
      flightTime: "8h 30m direct",
      compassHeading: "311° NW",
      direction: "NW",
      region: "europe",
      slug: "romania",
      code: "ro",
      flightDurationSec: 7.5,
    },

    // 2. WEST (W) - Gulf & Middle East
    {
      id: "uae",
      name: "Dubai / Abu Dhabi",
      country: "United Arab Emirates",
      airport: "DXB",
      x: 418.2,
      y: 201.9,
      jobs: 48,
      salary: "AED 3,800 - 5,500",
      flightTime: "4h 30m direct",
      compassHeading: "302° WNW",
      direction: "W",
      region: "gcc",
      slug: "united-arab-emirates",
      code: "ae",
      flightDurationSec: 5.5,
    },
    {
      id: "sa",
      name: "Riyadh / Jubail",
      country: "Saudi Arabia",
      airport: "RUH",
      x: 370.4,
      y: 204.2,
      jobs: 58,
      salary: "SAR 3,500 - 4,800",
      flightTime: "5h 15m direct",
      compassHeading: "294° WNW",
      direction: "W",
      region: "gcc",
      slug: "saudi-arabia",
      code: "sa",
      flightDurationSec: 6.0,
    },
    {
      id: "qa",
      name: "Doha / Lusail",
      country: "Qatar",
      airport: "DOH",
      x: 397.4,
      y: 201.5,
      jobs: 35,
      salary: "QAR 2,800 - 4,200",
      flightTime: "4h 45m direct",
      compassHeading: "299° WNW",
      direction: "W",
      region: "gcc",
      slug: "qatar",
      code: "qa",
      flightDurationSec: 5.8,
    },
    {
      id: "kw",
      name: "Kuwait City",
      country: "Kuwait",
      airport: "KWI",
      x: 377.6,
      y: 182.2,
      jobs: 24,
      salary: "KWD 250 - 420",
      flightTime: "5h 30m direct",
      compassHeading: "301° WNW",
      direction: "W",
      region: "gcc",
      slug: "kuwait",
      code: "kw",
      flightDurationSec: 6.2,
    },

    // 3. SOUTH-WEST & SOUTH (SW / S) - Indian Ocean, Maldives & Africa
    {
      id: "mv",
      name: "Malé / Resort Atolls",
      country: "Maldives",
      airport: "MLE",
      x: 519.4,
      y: 301.1,
      jobs: 38,
      salary: "USD 1,200 - 2,400",
      flightTime: "1h 25m direct",
      compassHeading: "200° SSW",
      direction: "SW",
      region: "south",
      slug: "maldives",
      code: "mv",
      flightDurationSec: 3.2,
    },
    {
      id: "sc",
      name: "Victoria / Mahé",
      country: "Seychelles",
      airport: "SEZ",
      x: 419.2,
      y: 342.5,
      jobs: 16,
      salary: "SCR 18,000 - 28,000",
      flightTime: "4h 10m direct",
      compassHeading: "228° SW",
      direction: "SW",
      region: "south",
      slug: "seychelles",
      code: "sc",
      flightDurationSec: 5.0,
    },
    {
      id: "mu",
      name: "Port Louis",
      country: "Mauritius",
      airport: "MRU",
      x: 430.6,
      y: 415.8,
      jobs: 20,
      salary: "MUR 35,000 - 55,000",
      flightTime: "5h 45m direct",
      compassHeading: "216° SW",
      direction: "S",
      region: "south",
      slug: "mauritius",
      code: "mu",
      flightDurationSec: 6.5,
    },

    // 4. SOUTH-EAST (SE) - Australia & Oceania
    {
      id: "au-per",
      name: "Perth / Western Hub",
      country: "Australia",
      airport: "PER",
      x: 754.8,
      y: 471.5,
      jobs: 22,
      salary: "AUD 4,500 - 7,200",
      flightTime: "6h 40m direct",
      compassHeading: "137° SE",
      direction: "SE",
      region: "oceania",
      slug: "australia",
      code: "au",
      flightDurationSec: 7.2,
    },
    {
      id: "au-syd",
      name: "Sydney / Melbourne",
      country: "Australia",
      airport: "SYD",
      x: 951.1,
      y: 480.5,
      jobs: 28,
      salary: "AUD 5,200 - 8,500",
      flightTime: "10h 15m direct",
      compassHeading: "116° ESE",
      direction: "SE",
      region: "oceania",
      slug: "australia",
      code: "au",
      flightDurationSec: 9.0,
    },

    // 5. EAST (E) - Southeast Asia / ASEAN
    {
      id: "sg",
      name: "Singapore",
      country: "Singapore",
      airport: "SIN",
      x: 687.8,
      y: 314.4,
      jobs: 19,
      salary: "SGD 2,200 - 3,500",
      flightTime: "3h 55m direct",
      compassHeading: "079° ENE",
      direction: "E",
      region: "sea",
      slug: "singapore",
      code: "sg",
      flightDurationSec: 4.8,
    },
    {
      id: "my",
      name: "Kuala Lumpur / Penang",
      country: "Malaysia",
      airport: "KUL",
      x: 676.0,
      y: 306.0,
      jobs: 16,
      salary: "MYR 2,500 - 3,800",
      flightTime: "3h 40m direct",
      compassHeading: "082° ENE",
      direction: "E",
      region: "sea",
      slug: "malaysia",
      code: "my",
      flightDurationSec: 4.5,
    },

    // 6. NORTH-EAST (NE) - East Asia
    {
      id: "jp",
      name: "Tokyo / Osaka / Nagoya",
      country: "Japan",
      airport: "NRT",
      x: 887.2,
      y: 152.5,
      jobs: 26,
      salary: "JPY 240k - 340k",
      flightTime: "8h 45m direct",
      compassHeading: "068° ENE",
      direction: "NE",
      region: "east-asia",
      slug: "japan",
      code: "jp",
      flightDurationSec: 8.0,
    },
    {
      id: "kr",
      name: "Seoul / Busan",
      country: "South Korea",
      airport: "ICN",
      x: 816.5,
      y: 143.6,
      jobs: 18,
      salary: "KRW 2.2M - 3.2M",
      flightTime: "7h 50m direct",
      compassHeading: "061° ENE",
      direction: "NE",
      region: "east-asia",
      slug: "south-korea",
      code: "kr",
      flightDurationSec: 7.2,
    },

    // 7. NORTH (N) - Central Asia Gateway
    {
      id: "kz",
      name: "Almaty / Central Asia",
      country: "Kazakhstan",
      airport: "ALA",
      x: 538.1,
      y: 116.9,
      jobs: 14,
      salary: "USD 1,400 - 2,200",
      flightTime: "6h 20m direct",
      compassHeading: "354° N",
      direction: "N",
      region: "north",
      slug: "central-asia",
      code: "kz",
      flightDurationSec: 6.8,
    },
  ];

  const filteredDestinations = selectedRegion === "all"
    ? destinations
    : destinations.filter((d) => d.region === selectedRegion);

  const regionTabs = [
    { id: "all", label: "All Corridors", count: destinations.length },
    { id: "gcc", label: "Middle East & GCC", count: 4 },
    { id: "europe", label: "Europe & UK", count: 3 },
    { id: "south", label: "Maldives & Africa", count: 3 },
    { id: "east-asia", label: "East Asia", count: 2 },
    { id: "sea", label: "Southeast Asia", count: 2 },
    { id: "oceania", label: "Australia", count: 2 },
    { id: "north", label: "Central Asia", count: 1 },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-white/95 backdrop-blur-xl rounded-3xl border border-slate-200/90 p-5 md:p-8 shadow-2xl shadow-sky-950/5">
      {/* Background Ambience Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-72 bg-sky-100/50 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-slate-100/60 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-sky-50/70 blur-3xl pointer-events-none rounded-full" />

      {/* Header Bar */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between pb-5 mb-5 border-b border-slate-200/80 gap-5">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-200/80 shadow-2xs">
              <Compass className="w-3.5 h-3.5 text-sky-600 animate-spin [animation-duration:16s]" />
              360° Omni-Directional Aviation Grid
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/80 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              SLBFE Accredited Global Hub
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200/80 shadow-2xs">
              <Globe2 className="w-3.5 h-3.5 text-slate-600" />
              16 Worldwide Destinations
            </span>
          </div>

          <h3 className="text-xl md:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2.5 font-heading">
            Sri Lanka Centered International Flight Pathways
          </h3>
          <p className="text-slate-600 text-xs md:text-sm mt-1 max-w-3xl leading-relaxed">
            High-tech interactive aviation radar network depicting government-accredited employment corridors radiating in <strong className="text-slate-800">all 360 degrees (North, South, East, West)</strong> from Bandaranaike International Hub (CMB).
          </p>
        </div>
      </div>

      {/* Horizontal Region Filter Bar */}
      <div className="relative z-10 flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 mb-4 select-none">
        <div className="flex items-center gap-1.5 shrink-0 px-2 py-1 text-slate-500 text-xs font-semibold">
          <Globe2 className="w-3.5 h-3.5 text-sky-600" />
          <span>Regions:</span>
        </div>
        {regionTabs.map((tab) => {
          const isActive = selectedRegion === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setSelectedRegion(tab.id);
                if (tab.id !== "all" && activeNode && activeNode.region !== tab.id) {
                  setActiveNode(null);
                }
              }}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all shrink-0 flex items-center gap-1.5 border cursor-pointer ${
                isActive
                  ? "bg-sky-600 text-white border-sky-600 shadow-md shadow-sky-600/25 font-bold"
                  : "bg-white hover:bg-slate-100/90 text-slate-700 hover:text-slate-900 border-slate-200/90 shadow-2xs"
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full font-bold ${
                  isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                }`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Full-Width Radar Stage */}
      <div className="relative z-10 w-full">
        {/* SVG Radar Canvas Container */}
        <div className="relative w-full aspect-[16/8.8] min-h-[460px] md:min-h-[520px] max-h-[640px] rounded-2xl overflow-hidden border border-slate-200/90 bg-gradient-to-b from-[#f0f9ff]/70 via-[#f8fafc] to-[#f1f5f9] shadow-inner select-none">
        
        {/* Subtle Latitude & Longitude Graticule Coordinates Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e135_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e135_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

        {/* 360-Degree Compass Direction Overlays */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-0.5 rounded-full bg-white/95 border border-slate-200/90 shadow-xs text-[10px] font-mono text-sky-700 font-bold pointer-events-none">
          ▲ NORTH 000° (EURASIA / CENTRAL ASIA)
        </div>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-0.5 rounded-full bg-white/95 border border-slate-200/90 shadow-xs text-[10px] font-mono text-sky-700 font-bold pointer-events-none">
          ▼ SOUTH 180° (INDIAN OCEAN / SOUTHERN CORRIDORS)
        </div>
        <div className="absolute left-2 top-1/2 -translate-y-1/2 flex flex-col items-center px-1.5 py-2 rounded-xl bg-white/95 border border-slate-200/90 shadow-xs text-[10px] font-mono text-sky-700 font-bold pointer-events-none">
          <span>◀</span>
          <span className="text-[9px] mt-1">WEST</span>
          <span className="text-[9px]">270°</span>
        </div>
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col items-center px-1.5 py-2 rounded-xl bg-white/95 border border-slate-200/90 shadow-xs text-[10px] font-mono text-sky-700 font-bold pointer-events-none">
          <span>▶</span>
          <span className="text-[9px] mt-1">EAST</span>
          <span className="text-[9px]">090°</span>
        </div>

        {/* Compass Rose Mini Widget Top-Right */}
        <div className="absolute top-3 right-3 hidden sm:flex items-center gap-2 bg-white/90 border border-slate-200/90 shadow-xs px-3 py-1.5 rounded-xl text-[11px] font-mono text-slate-700 pointer-events-none backdrop-blur-md">
          <Compass className="w-4 h-4 text-sky-600" />
          <span className="font-semibold">RADAR: 360° ACTIVE</span>
        </div>

        <svg
          viewBox="0 0 1000 500"
          className="w-full h-full filter drop-shadow-sm"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Glow Filter for Active Flight Paths */}
            <filter id="route-glow-360" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* 1. Global Vector Continents Landmass Fill */}
          <path
            d={worldLandmassPath}
            fill="#e2e8f0"
            stroke="#cbd5e1"
            strokeWidth="0.85"
            strokeLinejoin="round"
            className="transition-colors duration-500"
          />

          {/* 2. Concentric Radar Distance Rings around Colombo Hub (554.8, 288.1) */}
          <g opacity="0.6" pointerEvents="none">
            {/* Range Circle 1 - 2,000 KM */}
            <circle
              cx={origin.x}
              cy={origin.y}
              r="115"
              fill="none"
              stroke="#0284c7"
              strokeWidth="0.8"
              strokeDasharray="3 6"
              opacity="0.4"
            />
            <text x={origin.x + 120} y={origin.y - 4} fill="#0284c7" fontSize="8" fontFamily="monospace" fontWeight="bold" opacity="0.8">
              2,000 KM
            </text>

            {/* Range Circle 2 - 4,000 KM */}
            <circle
              cx={origin.x}
              cy={origin.y}
              r="230"
              fill="none"
              stroke="#0284c7"
              strokeWidth="0.8"
              strokeDasharray="4 8"
              opacity="0.35"
            />
            <text x={origin.x + 235} y={origin.y - 4} fill="#0284c7" fontSize="8" fontFamily="monospace" fontWeight="bold" opacity="0.75">
              4,000 KM
            </text>

            {/* Range Circle 3 - 6,000 KM */}
            <circle
              cx={origin.x}
              cy={origin.y}
              r="360"
              fill="none"
              stroke="#0284c7"
              strokeWidth="0.8"
              strokeDasharray="4 10"
              opacity="0.25"
            />
            <text x={origin.x + 365} y={origin.y - 4} fill="#0284c7" fontSize="8" fontFamily="monospace" fontWeight="bold" opacity="0.7">
              6,000 KM
            </text>

            {/* 360-degree Cardinal Crosshairs */}
            <line x1={origin.x} y1="15" x2={origin.x} y2="485" stroke="#94a3b8" strokeWidth="0.6" strokeDasharray="2 6" opacity="0.45" />
            <line x1="20" y1={origin.y} x2="980" y2={origin.y} stroke="#94a3b8" strokeWidth="0.6" strokeDasharray="2 6" opacity="0.45" />
          </g>

          {/* 3. Multi-Directional Flight Corridors radiating from Colombo */}
          {filteredDestinations.map((dest) => {
            const isHovered = activeNode?.id === dest.id;

            const midX = (origin.x + dest.x) / 2;
            const dist = Math.hypot(dest.x - origin.x, dest.y - origin.y);
            const lift = Math.min(65, Math.max(18, dist * 0.15));
            const isSouth = dest.y > origin.y;
            const midY = (origin.y + dest.y) / 2 + (isSouth ? lift * 0.65 : -lift);

            const pathD = `M ${origin.x} ${origin.y} Q ${midX} ${midY} ${dest.x} ${dest.y}`;

            return (
              <g
                key={dest.id}
                className="cursor-pointer group"
                onMouseEnter={() => setActiveNode(dest)}
                onClick={() => setActiveNode(dest)}
              >
                {/* Wide invisible hit area */}
                <path
                  d={pathD}
                  fill="none"
                  stroke="transparent"
                  strokeWidth="22"
                />

                {/* Base Route Arc */}
                <path
                  id={`route-${dest.id}`}
                  d={pathD}
                  fill="none"
                  stroke={isHovered ? "#0284c7" : "#0ea5e9"}
                  strokeWidth={isHovered ? "3.2" : "1.6"}
                  strokeOpacity={isHovered ? 1 : 0.6}
                  strokeDasharray={isHovered ? "none" : "4 5"}
                  filter={isHovered ? "url(#route-glow-360)" : undefined}
                  className="transition-all duration-300"
                />

                {/* Animated Flying Jet Icon along Arc */}
                <g>
                  <animateMotion
                    dur={`${dest.flightDurationSec}s`}
                    repeatCount="indefinite"
                    rotate="auto"
                  >
                    <mpath href={`#route-${dest.id}`} />
                  </animateMotion>

                  {/* Sleek Jet Airplane Icon: Head oriented forward along flight path and centered */}
                  <g transform="scale(0.65) rotate(90) translate(-11.5, -12)">
                    <path
                      d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
                      fill={isHovered ? "#0284c7" : "#0369a1"}
                      filter="drop-shadow(0 1px 3px rgba(2,132,199,0.5))"
                    />
                  </g>
                </g>

                {/* Destination Airport Radar Beacon Pin */}
                <g>
                  {/* Ping Ring */}
                  <circle
                    cx={dest.x}
                    cy={dest.y}
                    r={isHovered ? "17" : "9"}
                    fill="#0ea5e9"
                    fillOpacity={isHovered ? "0.35" : "0.15"}
                    className={isHovered ? "animate-pulse" : ""}
                  />
                  {/* Solid Center Dot */}
                  <circle
                    cx={dest.x}
                    cy={dest.y}
                    r="3.5"
                    fill={isHovered ? "#0284c7" : "#0ea5e9"}
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    className="transition-all duration-200"
                  />
                </g>

                {/* Compass Direction Badge & Label on Map */}
                <g
                  transform={`translate(${dest.x + (dest.x > 850 ? -60 : 7)}, ${dest.y + (dest.y > 450 ? -22 : -10)})`}
                  className="transition-transform duration-200"
                >
                  <rect
                    x="0"
                    y="0"
                    width={dest.name.split(" ")[0].length * 7.2 + 38}
                    height="18"
                    rx="5"
                    fill="#ffffff"
                    fillOpacity="0.95"
                    stroke={isHovered ? "#0284c7" : "#cbd5e1"}
                    strokeWidth={isHovered ? "1.5" : "0.75"}
                    filter="drop-shadow(0 1px 3px rgba(0,0,0,0.08))"
                  />
                  {/* Direction Tag */}
                  <text
                    x="4"
                    y="12.5"
                    fill="#0284c7"
                    fontSize="8.5"
                    fontWeight="800"
                    fontFamily="monospace"
                  >
                    {dest.direction}
                  </text>
                  {/* City Label */}
                  <text
                    x="20"
                    y="12.5"
                    fill={isHovered ? "#0f172a" : "#334155"}
                    fontSize="9.5"
                    fontWeight={isHovered ? "800" : "600"}
                    fontFamily="system-ui, sans-serif"
                  >
                    {dest.name.split(" ")[0]}
                  </text>
                  {/* Vacancy Count */}
                  <text
                    x={dest.name.split(" ")[0].length * 7.2 + 25}
                    y="12"
                    fill="#0284c7"
                    fontSize="8.5"
                    fontWeight="800"
                    fontFamily="monospace"
                  >
                    {dest.jobs}
                  </text>
                </g>
              </g>
            );
          })}

          {/* 4. Central Hub Marker: Colombo, Sri Lanka (CMB) */}
          <g>
            {/* Luminous Pulsing Radar Rings */}
            <circle
              cx={origin.x}
              cy={origin.y}
              r="28"
              fill="#0284c7"
              fillOpacity="0.15"
              className="animate-ping"
            />
            <circle
              cx={origin.x}
              cy={origin.y}
              r="16"
              fill="#0ea5e9"
              fillOpacity="0.3"
            />
            <circle
              cx={origin.x}
              cy={origin.y}
              r="7.5"
              fill="#ffffff"
              stroke="#0284c7"
              strokeWidth="2.5"
            />

            {/* Sri Lanka Hub Badge */}
            <g transform={`translate(${origin.x - 76}, ${origin.y + 14})`}>
              <rect
                x="0"
                y="0"
                width="152"
                height="24"
                rx="8"
                fill="#ffffff"
                fillOpacity="0.98"
                stroke="#0284c7"
                strokeWidth="1.5"
                filter="drop-shadow(0 2px 8px rgba(2,132,199,0.2))"
              />
              <text
                x="76"
                y="16"
                textAnchor="middle"
                fill="#0f172a"
                fontSize="11"
                fontWeight="800"
                fontFamily="system-ui, sans-serif"
                className="select-none tracking-wide"
              >
                COLOMBO (CMB) HUB
              </text>
            </g>
          </g>
        </svg>

        {/* Hover / Selected Flight Card HUD Tooltip */}
        {activeNode && (
          <div
            className="absolute top-4 right-4 z-20 bg-white/95 border border-slate-200/90 rounded-2xl p-5 shadow-2xl shadow-slate-900/15 backdrop-blur-xl max-w-sm animate-in fade-in zoom-in-95 duration-200"
          >
            {/* Country Header */}
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-2.5">
                <div className="relative w-8 h-6 rounded overflow-hidden shadow-xs border border-slate-200 shrink-0">
                  <Image
                    src={`https://flagcdn.com/w80/${activeNode.code}.png`}
                    alt={activeNode.country}
                    fill
                    className="object-cover"
                    sizes="32px"
                    unoptimized
                  />
                </div>
                <div>
                  <h4 className="text-slate-900 font-extrabold text-base leading-tight font-heading">
                    {activeNode.country}
                  </h4>
                  <p className="text-sky-700 text-xs font-semibold">
                    {activeNode.name}
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-end gap-1">
                <span className="px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200 text-xs font-bold whitespace-nowrap shadow-2xs">
                  {activeNode.jobs} Vacancies
                </span>
                <span className="text-[10px] font-mono text-slate-500 font-semibold flex items-center gap-1">
                  <Compass className="w-3 h-3 text-sky-600 inline" />
                  {activeNode.compassHeading}
                </span>
              </div>
            </div>

            {/* Flight Corridor Stats Grid */}
            <div className="grid grid-cols-2 gap-2 bg-slate-50 rounded-xl p-3 border border-slate-200/80 mb-3 text-xs">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                <div>
                  <div className="text-[10px] text-slate-500">Flight Duration</div>
                  <div className="font-bold text-slate-800">{activeNode.flightTime}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Banknote className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <div>
                  <div className="text-[10px] text-slate-500">Salary Package</div>
                  <div className="font-bold text-emerald-700">{activeNode.salary}</div>
                </div>
              </div>
            </div>

            {/* Benefits Chip */}
            <div className="flex items-center gap-1.5 text-[11px] text-slate-700 mb-3.5 bg-sky-50/70 px-2.5 py-1.5 rounded-lg border border-sky-200/80">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-600 shrink-0" />
              <span>Full airfare, verified visa sponsorship & health insurance included.</span>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <Link
                href={`/destinations/${activeNode.slug}`}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs transition-colors shadow-md shadow-sky-600/20"
              >
                <span>Explore {activeNode.name.split(" ")[0]} Opportunities</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={() => setActiveNode(null)}
                className="px-2.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 text-xs border border-slate-200 transition-colors cursor-pointer"
                title="Close"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>

      {/* BOTTOM DOCK: Live Departure Flight Deck (Idea 1) */}
      <div className="mt-3.5 bg-slate-50/90 rounded-2xl p-3 border border-slate-200/90 shadow-2xs">
        <div className="flex items-center justify-between mb-2.5 px-1">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <Plane className="w-3.5 h-3.5 text-sky-600" />
              Live Departure Flight Deck ({filteredDestinations.length} Corridors)
            </span>
          </div>
          <span className="text-[11px] text-slate-400 font-mono hidden sm:inline">
            Hover or click corridor to inspect flight path & packages
          </span>
        </div>

        {/* Horizontal Scrollable Corridors Carousel / Deck */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-1.5 pt-0.5 no-scrollbar scroll-smooth">
          {filteredDestinations.map((d) => {
            const isSelected = activeNode?.id === d.id;
            return (
              <button
                key={d.id}
                onClick={() => setActiveNode(isSelected ? null : d)}
                onMouseEnter={() => setActiveNode(d)}
                className={`shrink-0 group px-3 py-2 rounded-xl transition-all duration-200 flex items-center gap-2.5 border text-left cursor-pointer ${
                  isSelected
                    ? "bg-sky-600 text-white border-sky-600 shadow-md shadow-sky-600/25 scale-[1.02]"
                    : "bg-white hover:bg-slate-100/90 text-slate-700 hover:text-slate-900 border-slate-200/90 shadow-2xs hover:border-sky-300"
                }`}
              >
                {/* Country Flag */}
                <div className="relative w-5 h-3.5 rounded-xs overflow-hidden shrink-0 border border-slate-300/80 shadow-2xs">
                  <Image
                    src={`https://flagcdn.com/w80/${d.code}.png`}
                    alt={d.name}
                    fill
                    className="object-cover"
                    sizes="20px"
                    unoptimized
                  />
                </div>

                {/* Destination Info */}
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className={`text-xs font-bold leading-tight truncate ${isSelected ? "text-white" : "text-slate-900"}`}>
                      {d.name.split(" ")[0]}
                    </span>
                    <span
                      className={`font-mono text-[9px] px-1 py-0.2 rounded font-bold ${
                        isSelected ? "bg-white/20 text-white" : "bg-sky-50 text-sky-700 border border-sky-200/60"
                      }`}
                    >
                      {d.direction}
                    </span>
                  </div>
                  <span className={`text-[10px] block truncate ${isSelected ? "text-sky-100" : "text-slate-500"}`}>
                    {d.country} • {d.airport}
                  </span>
                </div>

                {/* Vacancy Pill */}
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.5 rounded-md font-bold shrink-0 ${
                    isSelected ? "bg-white/25 text-white" : "bg-emerald-50 text-emerald-700 border border-emerald-200/60"
                  }`}
                >
                  {d.jobs} Open
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>

      {/* CLEAN FOOTER STRIP */}
      <div className="mt-4 pt-3.5 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <span className="font-medium text-slate-700">100% SLBFE Government Verified Corridors</span>
          <span className="text-slate-300 hidden md:inline">|</span>
          <span className="hidden md:inline text-slate-500">Hover or click any flight arc or country pin to inspect live visa & salary packages</span>
        </div>

        <Link
          href="/destinations"
          className="inline-flex items-center gap-1.5 text-sky-600 hover:text-sky-700 font-semibold group transition-colors"
        >
          <span>View All 16 Worldwide Destinations</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
