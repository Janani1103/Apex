import React from "react";
import Link from "next/link";
import {
  ChevronLeft,
  Building2,
  ShieldCheck,
  Zap,
  Plane,
  Phone,
  Mail,
  CheckCircle2,
} from "lucide-react";
import { EmployerRequestForm } from "@/components/employers/EmployerRequestForm";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export const metadata = {
  title: "Employer Worker Request | Apex World Foreign Employment Agencies (Pvt) Ltd.",
  description:
    "Submit your enterprise workforce requirements or request specific pre-screened Sri Lankan worker profiles.",
};

interface EmployerRequestPageProps {
  searchParams: {
    workerId?: string;
    category?: string;
  };
}

export default function EmployerRequestPage({ searchParams }: EmployerRequestPageProps) {
  const workerId = searchParams.workerId || "";
  const category = searchParams.category || "";

  return (
    <div className="w-full pt-20 sm:pt-22 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Navigation Breadcrumb */}
        <div className="mb-4 sm:mb-5">
          <Link
            href="/employers/workers"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-sky-600 transition-colors bg-white px-3.5 py-1.5 sm:py-2 rounded-full border border-slate-200 shadow-2xs hover:shadow-xs"
          >
            <ChevronLeft className="w-4 h-4 text-slate-400" />
            <span>Back to Available Worker Catalog</span>
          </Link>
        </div>

        {/* SPLIT SCREEN MASTER LAYOUT (BALANCED 50/50 POWER SPLIT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-start">
          {/* LEFT SIDE: WIDE VISUAL SHOWCASE & EXECUTIVE CREDIBILITY (6 COLS) */}
          <div className="lg:col-span-6 space-y-6 lg:sticky lg:top-22">
            {/* High-Resolution Corporate Hero Card with Generated Image */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl min-h-[600px] lg:min-h-[700px] flex flex-col justify-between p-8 sm:p-10 text-white group">
              {/* Generated Image Background */}
              <img
                src="/images/employer-requisition-banner.jpg"
                alt="Apex World Executive Corporate Recruitment"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Rich Cinematic Navy Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/40 pointer-events-none" />

              {/* Top Badge */}
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/20 backdrop-blur-md border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-wider shadow-sm">
                  <Building2 className="w-4 h-4 text-sky-400" />
                  <span>Enterprise Recruitment Gateway</span>
                </div>
              </div>

              {/* Middle Headline & Value Proposition */}
              <div className="relative z-10 my-auto py-6 space-y-3">
                <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-3xl xl:text-4xl text-white leading-[1.2] drop-shadow-sm">
                  Empowering Global Enterprises With Certified Sri Lankan Manpower.
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-lg">
                  From specialized trade technicians to 500+ deployment squads, Apex World delivers pre-screened, trade-verified, and SLBFE-endorsed talent directly to your project sites.
                </p>
              </div>

              {/* Bottom Credibility Pillars & Client Quote */}
              <div className="relative z-10 space-y-4">
                <div className="space-y-2.5 pt-4 border-t border-white/15 text-xs text-slate-200">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                    <span className="font-medium">100% SLBFE & Embassy Bilateral Compliance</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="font-medium">Verified Candidate Shortlists Within 24–48 Hours</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Plane className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-medium">Complete Visa, Medical & Flight Deployment Oversight</span>
                  </div>
                </div>

                {/* Verified Testimonial Quote */}
                <div className="pt-4 border-t border-white/10 text-[11px] text-slate-300 italic leading-relaxed">
                  &ldquo;Apex World deployed 85 certified ASME pipe welders and electricians to our Dubai infrastructure site on schedule with zero documentation delays.&rdquo;
                  <div className="not-italic font-bold text-white text-xs mt-1">
                    — VP of Human Capital, GCC Infrastructure Consortium
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Recruitment Desk Support Card */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-bold text-sm text-slate-900">
                    Need Immediate Bulk Quotas?
                  </h4>
                  <p className="text-slate-500 text-xs mt-0.5">
                    Direct access to our international business directorate.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <a
                  href="https://wa.me/94771234567?text=Hello%20Apex%20World%20Corporate%20Desk,%20we%20have%20an%20urgent%20manpower%20requisition."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-all shadow-sm shadow-emerald-600/20"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>VIP WhatsApp</span>
                </a>

                <a
                  href="tel:+94112345678"
                  className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4 text-sky-600" />
                  <span>+94 11 234 5678</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: STREAMLINED APPLICATION FORM (6 COLS) */}
          <div className="lg:col-span-6">
            {/* Main Application Form Component */}
            <EmployerRequestForm
              initialWorkerId={workerId}
              initialCategory={category}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

