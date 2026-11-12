"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

export function HeroAirlinerStage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, rotateZ: 0, transX: 0, transY: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Mouse Move Parallax Handler
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Normalized coordinates (-1 to 1)
    const normX = Math.max(-1, Math.min(1, (e.clientX - centerX) / (rect.width / 2)));
    const normY = Math.max(-1, Math.min(1, (e.clientY - centerY) / (rect.height / 2)));

    // Calculate gyro angles (subtle & realistic aviation aerodynamics)
    setTilt({
      rotateX: -normY * 4.5, // Pitch up/down
      rotateY: normX * 6.5,  // Yaw turn
      rotateZ: normX * 2.5,  // Bank roll
      transX: normX * 18,    // Horizontal drift
      transY: normY * 12,    // Vertical drift
    });
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onEnter = () => setIsHovering(true);
    const onLeave = () => {
      setIsHovering(false);
      setTilt({ rotateX: 0, rotateY: 0, rotateZ: 0, transX: 0, transY: 0 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [handleMouseMove]);

  return (
    <div
      ref={containerRef}
      className="relative z-10 w-full max-w-3xl sm:max-w-4xl lg:max-w-5xl mx-auto px-4 -mt-28 sm:-mt-44 md:-mt-56 lg:-mt-72 xl:-mt-84 flex flex-col items-center justify-center select-none left-2 sm:left-4 lg:left-6 [perspective:1400px]"
    >
      {/* 3D PARALLAX WRAPPER */}
      <div
        className="relative w-full flex items-center justify-center transition-transform duration-300 ease-out will-change-transform"
        style={{
          transform: isHovering
            ? `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) rotateZ(${tilt.rotateZ}deg) translate3d(${tilt.transX}px, ${tilt.transY}px, 20px)`
            : "rotateX(0deg) rotateY(0deg) rotateZ(0deg) translate3d(0, 0, 0)",
        }}
      >
        {/* Continuous Natural Flight Float when not aggressively tilting */}
        <div className={`relative w-full flex items-center justify-center ${isHovering ? "" : "animate-aircraft-float"}`}>
          
          {/* ============================================================ */}
          {/* ANIMATION 2: JET ENGINE CONTRAILS & AIRFLOW VAPOR TRAILS */}
          {/* ============================================================ */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none overflow-visible -z-10"
            viewBox="0 0 1000 600"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* Contrail Soft Blue/White Vapor Gradients */}
              <linearGradient id="contrailLeft" x1="100%" y1="50%" x2="0%" y2="80%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.75" />
                <stop offset="30%" stopColor="#bae6fd" stopOpacity="0.45" />
                <stop offset="70%" stopColor="#ffffff" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>

              <linearGradient id="contrailRight" x1="100%" y1="40%" x2="0%" y2="70%">
                <stop offset="0%" stopColor="#0284c7" stopOpacity="0.8" />
                <stop offset="40%" stopColor="#7dd3fc" stopOpacity="0.5" />
                <stop offset="80%" stopColor="#ffffff" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>

              <linearGradient id="wingtipVortex" x1="100%" y1="0%" x2="0%" y2="50%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>

              <filter id="vaporGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Left Wingtip Vortex Streamline */}
            <path
              d="M 215 285 C 150 310, 80 340, -40 375"
              stroke="url(#wingtipVortex)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="12, 10"
              className="animate-pulse"
              style={{ animationDuration: "2.4s" }}
            />

            {/* Left Jet Engine Primary Contrail Vapor Stream */}
            <path
              d="M 370 380 C 270 415, 170 450, 20 490"
              stroke="url(#contrailLeft)"
              strokeWidth="5"
              strokeLinecap="round"
              filter="url(#vaporGlow)"
              className="animate-pulse"
              style={{ animationDuration: "2.8s" }}
            />
            {/* Engine Core Inner Trail */}
            <path
              d="M 370 380 C 260 418, 160 455, 30 492"
              stroke="#ffffff"
              strokeWidth="1.8"
              strokeOpacity="0.7"
              strokeLinecap="round"
              strokeDasharray="8, 6"
            />

            {/* Right Jet Engine Primary Contrail Stream */}
            <path
              d="M 685 415 C 570 455, 430 495, 260 540"
              stroke="url(#contrailRight)"
              strokeWidth="6"
              strokeLinecap="round"
              filter="url(#vaporGlow)"
              className="animate-pulse"
              style={{ animationDuration: "3.2s" }}
            />
            <path
              d="M 685 415 C 560 458, 420 498, 270 542"
              stroke="#ffffff"
              strokeWidth="2.2"
              strokeOpacity="0.8"
              strokeLinecap="round"
              strokeDasharray="10, 8"
            />

            {/* Engine Exhaust Jet Glow Orbs */}
            <circle cx="370" cy="380" r="7" fill="#38bdf8" opacity="0.6" filter="url(#vaporGlow)" className="animate-ping" style={{ animationDuration: "2.5s" }} />
            <circle cx="685" cy="415" r="9" fill="#0284c7" opacity="0.65" filter="url(#vaporGlow)" className="animate-ping" style={{ animationDuration: "2.8s" }} />
          </svg>

          {/* ============================================================ */}
          {/* MAIN AIRLINER IMAGE */}
          {/* ============================================================ */}
          <div className="relative w-full flex items-center justify-center">
            <Image
              src="/images/airliner.png"
              alt="Apex World Global Airliner - Connecting Sri Lanka to the World"
              width={1376}
              height={768}
              priority
              className="w-full h-auto object-contain filter drop-shadow-[0_25px_35px_rgba(3,105,161,0.22)] mx-auto pointer-events-none"
            />

            {/* ============================================================ */}
            {/* ANIMATION 5: HIGH-ALTITUDE SUNLIGHT SHIMMER SWEEP ON FUSELAGE */}
            {/* Using aircraft silhouette masking so sunlight only glides on fuselage! */}
            {/* ============================================================ */}
            <div
              className="absolute inset-0 pointer-events-none overflow-hidden"
              style={{
                WebkitMaskImage: "url('/images/airliner.png')",
                WebkitMaskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskImage: "url('/images/airliner.png')",
                maskSize: "contain",
                maskRepeat: "no-repeat",
                maskPosition: "center",
              }}
            >
              {/* Sweeping Sunlight Glint Beam */}
              <div
                className="absolute inset-y-0 w-44 bg-gradient-to-r from-transparent via-white/70 via-50% to-transparent -skew-x-25 animate-sunlight-sweep opacity-90 mix-blend-overlay"
              />

              {/* Secondary Warm Amber Rim Light on cockpit roof */}
              <div
                className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-amber-200/50 to-transparent -skew-x-25 animate-sunlight-sweep [animation-delay:0.3s] opacity-75 mix-blend-screen"
              />
            </div>

            {/* Specular Cockpit Sun Glint Star (Flashes at Cockpit Windshield) */}
            <div className="absolute top-[31%] right-[22%] sm:right-[23%] pointer-events-none">
              <span className="relative flex h-5 w-5 items-center justify-center animate-cockpit-glint">
                <span className="absolute inline-flex h-full w-full rounded-full bg-sky-200 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white shadow-[0_0_12px_#ffffff]" />
              </span>
            </div>

            {/* Wingtip Navigation Strobe Beacon Light (Green Stbd / Red Port Aviation Protocol) */}
            <div className="absolute top-[35%] right-[14%] sm:right-[15%] pointer-events-none">
              <span className="relative flex h-3 w-3 items-center justify-center">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" style={{ animationDuration: "1.2s" }} />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_8px_#34d399]" />
              </span>
            </div>

            <div className="absolute top-[48%] left-[21%] pointer-events-none">
              <span className="relative flex h-3 w-3 items-center justify-center">
                <span className="absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75 animate-ping" style={{ animationDuration: "1.5s" }} />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-rose-400 shadow-[0_0_8px_#f43f5e]" />
              </span>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

