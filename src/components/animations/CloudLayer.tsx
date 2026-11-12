"use client";

import React from "react";

export function CloudLayer() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Top Left Soft Cloud Bank */}
      <div className="absolute -top-16 -left-24 w-[650px] h-[340px] bg-white/75 rounded-full blur-3xl animate-cloud-drift opacity-85" />
      <div className="absolute top-8 left-28 w-[480px] h-[240px] bg-white/60 rounded-full blur-2xl animate-cloud-drift [animation-delay:3s] opacity-70" />

      {/* Top Right Cloud Bank */}
      <div className="absolute -top-20 -right-28 w-[700px] h-[360px] bg-white/80 rounded-full blur-3xl animate-cloud-drift [animation-delay:5s] opacity-85" />
      <div className="absolute top-12 right-24 w-[450px] h-[220px] bg-white/50 rounded-full blur-2xl animate-cloud-drift [animation-delay:7s] opacity-60" />

      {/* Mid Left Atmospheric Clouds */}
      <div className="absolute top-[40%] -left-36 w-[600px] h-[260px] bg-white/50 rounded-full blur-3xl animate-cloud-drift [animation-delay:9s] opacity-65" />

      {/* Mid Right Atmospheric Clouds */}
      <div className="absolute top-[44%] -right-32 w-[620px] h-[280px] bg-white/55 rounded-full blur-3xl animate-cloud-drift [animation-delay:11s] opacity-70" />

      {/* Bottom Cloud Layer transitioning smoothly into page */}
      <div className="absolute -bottom-4 left-0 right-0 h-36 bg-gradient-to-t from-[#f8fafc] via-white/80 to-transparent pointer-events-none" />
    </div>
  );
}
