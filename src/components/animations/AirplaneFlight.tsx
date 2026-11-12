"use client";

import React from "react";

export function AirplaneFlight() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {/* High altitude cruising aircraft */}
      <div className="absolute top-[28%] left-0 animate-float-plane w-32 md:w-48 filter drop-shadow-lg opacity-90">
        <svg
          viewBox="0 0 200 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto transform -rotate-2"
        >
          {/* Vapor Contrail */}
          <path
            d="M 5 42 Q 40 40 85 41"
            stroke="rgba(255, 255, 255, 0.7)"
            strokeWidth="3.5"
            strokeLinecap="round"
            className="filter blur-[1px]"
          />
          <path
            d="M 0 42 Q 35 41 80 41"
            stroke="rgba(224, 242, 254, 0.4)"
            strokeWidth="6"
            strokeLinecap="round"
            className="filter blur-[2px]"
          />

          {/* Jetliner Fuselage */}
          <ellipse cx="140" cy="40" rx="45" ry="11" fill="#ffffff" />
          <path
            d="M 95 40 C 95 32, 180 32, 188 40 C 180 48, 95 48, 95 40 Z"
            fill="#f8fafc"
          />
          {/* Nose cone */}
          <path d="M 180 36 Q 192 40 180 44 Z" fill="#0284c7" />

          {/* Main Swept Wings */}
          <path
            d="M 132 40 L 105 10 L 122 10 L 152 40 Z"
            fill="#e2e8f0"
            stroke="#cbd5e1"
            strokeWidth="0.8"
          />
          <path
            d="M 132 40 L 105 70 L 122 70 L 152 40 Z"
            fill="#ffffff"
            stroke="#e2e8f0"
            strokeWidth="0.8"
          />

          {/* Vertical Tail Fin */}
          <path
            d="M 98 39 L 82 18 L 94 18 L 110 39 Z"
            fill="#0284c7"
          />
          {/* Horizontal Tail Stabilizers */}
          <path
            d="M 96 39 L 86 52 L 95 52 L 104 39 Z"
            fill="#0369a1"
          />

          {/* Jet Engines */}
          <rect x="120" y="24" width="16" height="5" rx="2.5" fill="#64748b" />
          <rect x="120" y="51" width="16" height="5" rx="2.5" fill="#475569" />

          {/* Cabin Passenger Windows */}
          <g fill="#0284c7" opacity="0.8">
            <circle cx="122" cy="38.5" r="1.3" />
            <circle cx="128" cy="38.5" r="1.3" />
            <circle cx="134" cy="38.5" r="1.3" />
            <circle cx="140" cy="38.5" r="1.3" />
            <circle cx="146" cy="38.5" r="1.3" />
            <circle cx="152" cy="38.5" r="1.3" />
            <circle cx="158" cy="38.5" r="1.3" />
            <circle cx="164" cy="38.5" r="1.3" />
          </g>

          {/* Wingtip Navigation Lights */}
          <circle cx="106" cy="11" r="2" fill="#ef4444" className="animate-ping" />
          <circle cx="106" cy="69" r="2" fill="#22c55e" className="animate-ping" />
        </svg>
      </div>

      {/* Subtle Second Distant Aircraft */}
      <div className="hidden lg:block absolute top-[62%] -left-20 animate-float-plane [animation-duration:35s] [animation-delay:8s] w-20 filter drop-shadow opacity-40">
        <svg viewBox="0 0 200 80" fill="none" className="w-full h-auto">
          <ellipse cx="140" cy="40" rx="45" ry="11" fill="#ffffff" />
          <path d="M 132 40 L 105 10 L 122 10 L 152 40 Z" fill="#ffffff" />
          <path d="M 98 39 L 82 18 L 94 18 L 110 39 Z" fill="#38bdf8" />
        </svg>
      </div>
    </div>
  );
}

