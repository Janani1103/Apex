import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Award,
  Globe2,
  Users,
  Compass,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
  Briefcase,
  Target,
  Eye,
  Building2,
} from "lucide-react";
import { MissionVisionSplitPortal } from "@/components/about/MissionVisionSplitPortal";
import { CoreValuesRibbonStream } from "@/components/about/CoreValuesRibbonStream";

export const metadata = {
  title: "About Us | Apex World Foreign Employment Agencies (Pvt) Ltd.",
  description:
    "Learn about Apex World's mission, values, and global recruitment operations connecting Sri Lankan talent with reputable employers worldwide.",
};

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* SECTION 1: ABOUT HERO (WITH CUSTOM BACKGROUND IMAGE 15.JPEG) */}
      <section className="relative min-h-[52vh] sm:min-h-[58vh] flex items-center justify-center pt-32 sm:pt-36 pb-20 sm:pb-24 overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/15.jpeg"
            alt="About Apex World Foreign Employment Agencies (Pvt) Ltd."
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            quality={90}
          />
          {/* Multi-layered Cinematic Dark Blue Tint for Supreme Typography Contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-900/75 to-slate-950/90" />
          <div className="absolute inset-0 bg-sky-950/30 mix-blend-multiply pointer-events-none" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-bold text-sky-300 tracking-wider uppercase bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 shadow-sm inline-flex items-center gap-2 mb-5">
            About Apex World
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading text-white tracking-tight mb-6">
            Building Connections.{" "}
            <span className="bg-gradient-to-r from-sky-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent">
              Creating Global Careers.
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-200 font-normal leading-relaxed">
            We are an international manpower recruitment agency dedicated to connecting Sri Lankan talent with accredited employment opportunities across the world. We work to create meaningful connections between skilled workers and premier international employers.
          </p>
        </div>
      </section>

      {/* SECTION 2: WHO WE ARE (WITH CIRCULAR IMAGE 2.JPEG) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-xs font-bold text-sky-600 tracking-wider uppercase bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
              Agency Overview
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 mt-3 mb-6">
              Empowering Sri Lankan Professionals on the Global Stage
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                Founded in Colombo, Sri Lanka, Apex World operates as a government-licensed international manpower recruitment organization recognized by the Sri Lanka Bureau of Foreign Employment (SLBFE).
              </p>
              <p>
                Over years of dedicated service, we have built trusted talent bridges spanning the United Arab Emirates, Kingdom of Saudi Arabia, Qatar, Kuwait, Oman, Japan, and Singapore. We recruit across core economic pillars including civil construction, mechanical engineering, electrical systems, hospitality, healthcare, logistics, and precision manufacturing.
              </p>
              <p>
                For candidates, we provide structured, compassionate guidance covering vocational aptitude testing, GAMCA medical preparation, consular attestations, and cultural orientation. For international corporations, we provide complete turnkey recruitment solutions—from trade test staging to visa processing and mobilization logistics.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-sky-50 border border-sky-100">
                <span className="text-2xl font-bold font-heading text-sky-700 block">
                  100% Compliant
                </span>
                <span className="text-xs text-slate-600">SLBFE & Bilateral Labor Accord Governed</span>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-2xl font-bold font-heading text-slate-800 block">
                  7+ Nations
                </span>
                <span className="text-xs text-slate-600">Active Direct Recruitment Corridors</span>
              </div>
            </div>
          </div>

          {/* Right Column: Circular Image Showcase (Enlarged for Crystal Clear Visibility) */}
          <div className="flex items-center justify-center relative min-h-[380px] sm:min-h-[460px] lg:min-h-[520px]">
            {/* Ambient Background Aura */}
            <div className="absolute w-88 h-88 sm:w-[420px] sm:h-[420px] lg:w-[480px] lg:h-[480px] bg-sky-400/20 rounded-full blur-3xl pointer-events-none" />

            {/* Decorative Outer Orbit Ring */}
            <div className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] lg:w-[500px] lg:h-[500px] xl:w-[530px] xl:h-[530px] flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-sky-300/70 animate-spin [animation-duration:35s]">
                <div className="w-3.5 h-3.5 rounded-full bg-sky-500 absolute -top-1.5 left-1/2 -translate-x-1/2 shadow-[0_0_10px_#0ea5e9]" />
                <div className="w-3 h-3 rounded-full bg-cyan-400 absolute -bottom-1.5 left-1/2 -translate-x-1/2" />
              </div>

              {/* Main Circular Image - Substantially Enlarged */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[460px] lg:h-[460px] xl:w-[490px] xl:h-[490px] rounded-full overflow-hidden border-4 sm:border-[6px] border-white shadow-2xl shadow-sky-950/20 group bg-slate-100">
                <Image
                  src="/images/2.jpeg"
                  alt="Apex World Global Agency Operations"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 400px, 500px"
                  quality={95}
                />
              </div>

              {/* Floating Quality Seal Badge */}
              <div className="absolute -bottom-2 sm:bottom-4 right-2 sm:right-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-sky-100 shadow-xl flex items-center gap-2.5 z-10 animate-pulse-subtle">
                <div className="w-9 h-9 rounded-xl bg-sky-500 text-white flex items-center justify-center shadow-sm shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-sky-600 uppercase tracking-wider block">
                    Govt. Accredited
                  </span>
                  <span className="text-xs font-bold text-slate-800 block">
                    SLBFE License #2450
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 & 4: MISSION & VISION (INTERACTIVE SPLIT-SCREEN DUAL PORTAL ACCORDION) */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-slate-50 via-sky-50/30 to-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MissionVisionSplitPortal />
        </div>
      </section>

      {/* SECTION 5: CORE VALUES (CONNECTED 3D FOLDED FLIGHT RIBBON STREAM) */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CoreValuesRibbonStream />
      </section>
    </div>
  );
}

