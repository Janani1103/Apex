"use client";

import React from "react";

export function SkyFlightCorridors() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      <svg
        className="w-full h-full"
        viewBox="0 0 1440 800"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Cyan / Sky Blue Arc Gradient */}
          <linearGradient id="skyArcGrad1" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0" />
            <stop offset="40%" stopColor="#38bdf8" stopOpacity="0.35" />
            <stop offset="80%" stopColor="#0ea5e9" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#bae6fd" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="skyArcGrad2" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          {/* Jet Engine Contrail Gradient */}
          <linearGradient id="jetVaporGrad" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#7dd3fc" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
          </linearGradient>

          <filter id="beaconGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ------------------------------------------------------------- */}
        {/* CORRIDOR 1: COLOMBO (CMB) ➔ MIDDLE EAST / GULF (DXB/DOH) */}
        {/* ------------------------------------------------------------- */}
        <path
          id="flightPathGulf"
          d="M 720 720 C 580 520, 360 380, 180 220"
          stroke="url(#skyArcGrad1)"
          strokeWidth="1.5"
          strokeDasharray="6, 8"
          className="flight-path opacity-65"
        />

        {/* ------------------------------------------------------------- */}
        {/* CORRIDOR 2: COLOMBO (CMB) ➔ EAST ASIA / TOKYO (NRT) */}
        {/* ------------------------------------------------------------- */}
        <path
          id="flightPathTokyo"
          d="M 720 720 C 880 540, 1100 390, 1320 210"
          stroke="url(#skyArcGrad1)"
          strokeWidth="1.5"
          strokeDasharray="6, 8"
          className="flight-path opacity-65"
          style={{ animationDuration: "3.5s" }}
        />

        {/* ------------------------------------------------------------- */}
        {/* CORRIDOR 3: TRANS-OCEANIC SOUTHEAST ASIA (SIN) */}
        {/* ------------------------------------------------------------- */}
        <path
          d="M 720 720 C 940 680, 1180 580, 1380 460"
          stroke="url(#skyArcGrad2)"
          strokeWidth="1.2"
          strokeDasharray="4, 6"
          className="flight-path opacity-40"
        />

        {/* ------------------------------------------------------------- */}
        {/* FLYING JET 1: COLOMBO ➔ MIDDLE EAST (DXB) */}
        {/* Uses rotate="auto" so the jet automatically banks with the trajectory! */}
        {/* ------------------------------------------------------------- */}
        <g>
          <animateMotion
            dur="13s"
            repeatCount="indefinite"
            rotate="auto"
            path="M 720 720 C 580 520, 360 380, 180 220"
          />

          {/* Jet Aircraft Vector Model */}
          <g transform="scale(0.85)" className="filter drop-shadow-[0_4px_10px_rgba(3,105,161,0.35)]">
            {/* Jet Engine Contrail Streams */}
            <path
              d="M -8 -5 L -40 -5"
              stroke="url(#jetVaporGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="animate-pulse"
            />
            <path
              d="M -8 5 L -40 5"
              stroke="url(#jetVaporGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="animate-pulse"
            />

            {/* Aerodynamic Fuselage */}
            <path
              d="M 20 0 C 15 -2.5, 5 -3, -12 -3 L -16 -2 L -20 -7 L -24 -7 L -22 -1 L -22 1 L -24 7 L -20 7 L -16 2 L -12 3 C 5 3, 15 2.5, 20 0 Z"
              fill="#ffffff"
              stroke="#0284c7"
              strokeWidth="0.8"
            />

            {/* Swept Wings */}
            <path
              d="M 2 0 L -8 -19 L -14 -19 L -9 -2 L -9 2 L -14 19 L -8 19 Z"
              fill="#0ea5e9"
            />

            {/* Cockpit Canopy */}
            <path
              d="M 12 -1 C 15 -0.5, 15 0.5, 12 1 Z"
              fill="#082f49"
            />

            {/* Wingtip Navigation Lights (Aviation Red/Green) */}
            <circle cx="-8" cy="-19" r="1.8" fill="#f43f5e" className="animate-ping" style={{ animationDuration: "1s" }} />
            <circle cx="-8" cy="19" r="1.8" fill="#10b981" className="animate-ping" style={{ animationDuration: "1s" }} />

            {/* Active Flight Radar Tag */}
            <g transform="translate(-16, -34)">
              <rect
                x="0"
                y="0"
                width="68"
                height="16"
                rx="5"
                fill="#082f49"
                fillOpacity="0.88"
                stroke="#38bdf8"
                strokeWidth="0.8"
              />
              <circle cx="9" cy="8" r="2.5" fill="#38bdf8" className="animate-pulse" />
              <text
                x="16"
                y="11.5"
                fill="#ffffff"
                fontSize="8.5"
                fontFamily="monospace"
                fontWeight="bold"
                letterSpacing="0.5"
              >
                GLV-102 DXB
              </text>
            </g>
          </g>
        </g>

        {/* ------------------------------------------------------------- */}
        {/* FLYING JET 2: COLOMBO ➔ EAST ASIA (TOKYO) */}
        {/* Staggered departure (begin="6.5s") */}
        {/* ------------------------------------------------------------- */}
        <g>
          <animateMotion
            dur="15s"
            begin="6.5s"
            repeatCount="indefinite"
            rotate="auto"
            path="M 720 720 C 880 540, 1100 390, 1320 210"
          />

          {/* Jet Aircraft Vector Model */}
          <g transform="scale(0.85)" className="filter drop-shadow-[0_4px_10px_rgba(3,105,161,0.35)]">
            {/* Jet Engine Contrail Streams */}
            <path
              d="M -8 -5 L -42 -5"
              stroke="url(#jetVaporGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="animate-pulse"
            />
            <path
              d="M -8 5 L -42 5"
              stroke="url(#jetVaporGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="animate-pulse"
            />

            {/* Aerodynamic Fuselage */}
            <path
              d="M 20 0 C 15 -2.5, 5 -3, -12 -3 L -16 -2 L -20 -7 L -24 -7 L -22 -1 L -22 1 L -24 7 L -20 7 L -16 2 L -12 3 C 5 3, 15 2.5, 20 0 Z"
              fill="#ffffff"
              stroke="#0369a1"
              strokeWidth="0.8"
            />

            {/* Swept Wings */}
            <path
              d="M 2 0 L -8 -19 L -14 -19 L -9 -2 L -9 2 L -14 19 L -8 19 Z"
              fill="#38bdf8"
            />

            {/* Cockpit Canopy */}
            <path
              d="M 12 -1 C 15 -0.5, 15 0.5, 12 1 Z"
              fill="#082f49"
            />

            {/* Wingtip Navigation Lights */}
            <circle cx="-8" cy="-19" r="1.8" fill="#f43f5e" className="animate-ping" style={{ animationDuration: "1.2s" }} />
            <circle cx="-8" cy="19" r="1.8" fill="#10b981" className="animate-ping" style={{ animationDuration: "1.2s" }} />

            {/* Active Flight Radar Tag */}
            <g transform="translate(-16, -34)">
              <rect
                x="0"
                y="0"
                width="68"
                height="16"
                rx="5"
                fill="#082f49"
                fillOpacity="0.88"
                stroke="#38bdf8"
                strokeWidth="0.8"
              />
              <circle cx="9" cy="8" r="2.5" fill="#38bdf8" className="animate-pulse" />
              <text
                x="16"
                y="11.5"
                fill="#ffffff"
                fontSize="8.5"
                fontFamily="monospace"
                fontWeight="bold"
                letterSpacing="0.5"
              >
                GLV-308 TYO
              </text>
            </g>
          </g>
        </g>

        {/* ------------------------------------------------------------- */}
        {/* WAYPOINT RADAR RINGS IN AIRSPACE */}
        {/* ------------------------------------------------------------- */}
        {/* Waypoint West (Gulf Entrance) */}
        <g transform="translate(180, 220)" className="opacity-70">
          <circle r="3" fill="#0284c7" />
          <circle r="9" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3, 3" className="animate-spin [animation-duration:12s]" />
          <circle r="16" stroke="#38bdf8" strokeWidth="0.7" opacity="0.4" className="animate-ping" style={{ animationDuration: "3s" }} />
          <text x="14" y="4" fill="#0369a1" fontSize="9" fontFamily="monospace" fontWeight="bold" letterSpacing="1">
            WPT // DXB-CORRIDOR
          </text>
        </g>

        {/* Waypoint East (Tokyo Entry) */}
        <g transform="translate(1320, 210)" className="opacity-70">
          <circle r="3" fill="#0284c7" />
          <circle r="9" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3, 3" className="animate-spin [animation-duration:12s]" />
          <circle r="16" stroke="#38bdf8" strokeWidth="0.7" opacity="0.4" className="animate-ping" style={{ animationDuration: "3.5s" }} />
          <text x="-120" y="4" fill="#0369a1" fontSize="9" fontFamily="monospace" fontWeight="bold" letterSpacing="1">
            WPT // TYO-SECTOR
          </text>
        </g>
      </svg>
    </div>
  );
}
