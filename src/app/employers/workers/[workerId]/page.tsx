import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Briefcase,
  Award,
  Globe2,
  ArrowRight,
  ChevronLeft,
  Building2,
  MessageCircle,
  FileText,
  UserCheck,
  Zap,
  Flame,
  HardHat,
  Truck,
  Utensils,
  HeartPulse,
  Cog,
  Wrench,
  Clock,
  Sparkles,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { WORKERS_DATA } from "@/data/workersData";
import { WorkerCard } from "@/components/employers/WorkerCard";

const COUNTRY_FLAGS: Record<string, string> = {
  UAE: "https://flagcdn.com/w40/ae.png",
  "United Arab Emirates": "https://flagcdn.com/w40/ae.png",
  "Saudi Arabia": "https://flagcdn.com/w40/sa.png",
  Qatar: "https://flagcdn.com/w40/qa.png",
  Kuwait: "https://flagcdn.com/w40/kw.png",
  Oman: "https://flagcdn.com/w40/om.png",
  Japan: "https://flagcdn.com/w40/jp.png",
  Singapore: "https://flagcdn.com/w40/sg.png",
  Romania: "https://flagcdn.com/w40/ro.png",
  Malaysia: "https://flagcdn.com/w40/my.png",
  Bahrain: "https://flagcdn.com/w40/bh.png",
};

function getCategoryIcon(category: string) {
  const cat = (category || "").toLowerCase();
  if (cat.includes("electric")) return Zap;
  if (cat.includes("weld") || cat.includes("mechanic")) return Flame;
  if (cat.includes("construct") || cat.includes("civil")) return HardHat;
  if (cat.includes("transport") || cat.includes("driver")) return Truck;
  if (cat.includes("hospit") || cat.includes("chef") || cat.includes("tourism")) return Utensils;
  if (cat.includes("health") || cat.includes("care")) return HeartPulse;
  if (cat.includes("manufactur") || cat.includes("machin")) return Cog;
  if (cat.includes("maint") || cat.includes("tech")) return Wrench;
  return UserCheck;
}

interface WorkerProfilePageProps {
  params: {
    workerId: string;
  };
}

export async function generateStaticParams() {
  return WORKERS_DATA.map((w) => ({
    workerId: w.workerId,
  }));
}

export function generateMetadata({ params }: WorkerProfilePageProps) {
  const worker = WORKERS_DATA.find(
    (w) => w.workerId.toLowerCase() === params.workerId.toLowerCase()
  );
  if (!worker) return { title: "Worker Profile Not Found | Apex World" };
  return {
    title: `Candidate ${worker.workerId} – ${worker.occupation} | Apex World Worker Catalog`,
    description: worker.summary,
  };
}

export default function WorkerProfilePage({ params }: WorkerProfilePageProps) {
  const worker = WORKERS_DATA.find(
    (w) =>
      w.workerId.toLowerCase() === params.workerId.toLowerCase() &&
      w.visibleOnWebsite &&
      w.availabilityStatus === "Available"
  );

  if (!worker) {
    notFound();
  }

  // Similar workers
  const similarWorkers = WORKERS_DATA.filter(
    (w) =>
      w.workerId !== worker.workerId &&
      w.visibleOnWebsite &&
      w.availabilityStatus === "Available" &&
      (w.category === worker.category || w.preferredCountry === worker.preferredCountry)
  ).slice(0, 3);

  const whatsappMessage = encodeURIComponent(
    `Hello Apex World, I am an employer inquiring about Candidate Profile ${worker.workerId} (${worker.occupation}).`
  );

  const CategoryIcon = getCategoryIcon(worker.category);
  const targetFlag = COUNTRY_FLAGS[worker.preferredCountry];

  return (
    <div className="w-full">
      {/* Breadcrumbs */}
      <div className="pt-24 sm:pt-28 pb-3 bg-slate-50/80 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/employers/workers"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-sky-600 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Available Worker Catalog
          </Link>
        </div>
      </div>

      {/* SECTION 1: VERIFIED EXECUTIVE TALENT DOSSIER HEADER */}
      <section className="relative py-10 sm:py-12 bg-gradient-to-b from-sky-50/70 via-white to-slate-50 border-b border-slate-200/90 overflow-hidden">
        {/* Subtle Ambient Blueprint Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#0284c70a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-32 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            {/* LEFT SIDE: AVATAR & CREDENTIALS DOSSIER */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-7 flex-1 min-w-0">
              {/* 3D Verified Avatar with Gold/Emerald Seal Ring */}
              <div className="relative shrink-0">
                <div className="p-1 rounded-3xl bg-gradient-to-tr from-sky-600 via-sky-400 to-emerald-400 shadow-xl shadow-sky-900/15">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-[1.4rem] bg-gradient-to-br from-slate-900 to-slate-800 text-white flex flex-col items-center justify-center relative overflow-hidden group">
                    {/* Subtle Radial Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-sky-400/20 to-transparent" />
                    <CategoryIcon className="w-9 h-9 sm:w-10 sm:h-10 text-sky-300 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-[9px] font-bold tracking-wider text-slate-400 uppercase mt-1 relative z-10">
                      PRO TALENT
                    </span>
                  </div>
                </div>

                {/* Floating SLBFE / Verified Seal Badge */}
                <div
                  className="absolute -bottom-1.5 -right-1.5 bg-emerald-500 text-white p-1.5 rounded-full border-2 border-white shadow-md flex items-center justify-center"
                  title="SLBFE Registered & Verified Candidate"
                >
                  <CheckCircle2 className="w-4 h-4 text-white stroke-[2.5]" />
                </div>
              </div>

              {/* Central Information Stack */}
              <div className="space-y-3 min-w-0 flex-1">
                {/* Meta Badges Ribbon */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs font-black px-3 py-1 rounded-lg bg-slate-900 text-sky-300 border border-slate-800 shadow-2xs">
                    ID: {worker.workerId}
                  </span>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/90 shadow-2xs">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span>Verified Active</span>
                  </span>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white text-slate-700 border border-slate-200/90 shadow-2xs">
                    <img
                      src="https://flagcdn.com/w40/lk.png"
                      alt="Sri Lanka Flag"
                      className="w-4 h-3 rounded-xs object-cover shadow-2xs"
                    />
                    <span>Sri Lankan National</span>
                  </span>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-800 border border-sky-200/90 shadow-2xs">
                    {targetFlag ? (
                      <img
                        src={targetFlag}
                        alt={worker.preferredCountry}
                        className="w-4 h-3 rounded-xs object-cover shadow-2xs"
                      />
                    ) : (
                      <Globe2 className="w-3.5 h-3.5 text-sky-600" />
                    )}
                    <span>Target: {worker.preferredCountry}</span>
                  </span>
                </div>

                {/* Occupation Title */}
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-900 tracking-tight leading-tight">
                    {worker.occupation}
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium flex items-center gap-2 mt-1">
                    <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>{worker.category} Division • NAITA / NVQ Pre-Screened Candidate</span>
                  </p>
                </div>

                {/* Quick-Stats Decision Metric Strip */}
                <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-2xl">
                  <div className="bg-white/90 backdrop-blur-xs p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Experience</span>
                    <span className="text-xs sm:text-sm font-black text-slate-900">{worker.totalExperience}</span>
                  </div>
                  <div className="bg-white/90 backdrop-blur-xs p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Accreditation</span>
                    <span className="text-xs sm:text-sm font-black text-slate-900">Trade Certified</span>
                  </div>
                  <div className="bg-white/90 backdrop-blur-xs p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Deployment</span>
                    <span className="text-xs sm:text-sm font-black text-emerald-700">14-21 Days</span>
                  </div>
                  <div className="bg-white/90 backdrop-blur-xs p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Clearance</span>
                    <span className="text-xs sm:text-sm font-black text-sky-700">Medical Cleared</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: HIGH-IMPACT REQUISITION ACTIONS */}
            <div className="flex flex-col sm:flex-row lg:flex-col items-stretch lg:items-end gap-3 shrink-0 lg:w-72">
              <Link
                href={`/employers/request?workerId=${worker.workerId}&category=${encodeURIComponent(worker.category)}`}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-xl shadow-sky-600/25 hover:shadow-sky-600/35 hover:-translate-y-0.5 active:translate-y-0 transition-all text-center"
              >
                <span>Request This Worker</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={`https://wa.me/94771234567?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-600/20 hover:-translate-y-0.5 transition-all text-center"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Inquire on VIP WhatsApp</span>
              </a>

              {/* Direct Desk Hotline indicator */}
              <div className="text-[11px] font-semibold text-slate-400 flex items-center justify-center lg:justify-end gap-1.5 pt-1">
                <Clock className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                <span>Dedicated Director Desk • 24h Response</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN BODY: 2-COLUMN LAYOUT */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Left Column: Profile Details */}
          <div className="lg:col-span-2 space-y-10">
            {/* SECTION 2: PROFESSIONAL OVERVIEW */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-4">
              <h3 className="font-heading font-bold text-xl text-slate-900 pb-2 border-b border-slate-100">
                Professional Overview & Summary
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                {worker.summary}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-slate-400 block text-[10px] uppercase font-semibold">Total Experience</span>
                  <span className="font-bold text-slate-800 text-sm">{worker.totalExperience}</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-slate-400 block text-[10px] uppercase font-semibold">Trade Category</span>
                  <span className="font-bold text-slate-800 text-sm">{worker.category}</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-slate-400 block text-[10px] uppercase font-semibold">Country Target</span>
                  <span className="font-bold text-sky-700 text-sm">{worker.preferredCountry}</span>
                </div>
              </div>
            </div>

            {/* SECTION 3: SKILLS & EXPERTISE */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-4">
              <h3 className="font-heading font-bold text-xl text-slate-900 pb-2 border-b border-slate-100">
                Skills & Technical Expertise
              </h3>
              <p className="text-slate-500 text-xs">
                Verified proficiencies and operational equipment mastery evaluated during candidate intake:
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {worker.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-sky-50 text-sky-800 border border-sky-100 flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* SECTION 4: EXPERIENCE TIMELINE */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-4">
              <h3 className="font-heading font-bold text-xl text-slate-900 pb-2 border-b border-slate-100">
                Work Experience Timeline
              </h3>
              <p className="text-slate-500 text-xs">
                Anonymized career history approved for public employer review:
              </p>

              <div className="space-y-6 pt-4 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-200">
                {worker.experienceTimeline.map((item, idx) => (
                  <div key={idx} className="relative pl-8">
                    <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-sky-600 border-4 border-white shadow-sm" />
                    <span className="font-mono text-xs font-bold text-sky-700 block">
                      {item.period}
                    </span>
                    <h4 className="font-heading font-bold text-base text-slate-900 mt-0.5">
                      {item.role}
                    </h4>
                    <span className="text-xs text-slate-500 block mb-2 font-medium">
                      {item.industry}
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {item.responsibilities.map((r, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-sky-500 font-bold">•</span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 5: QUALIFICATIONS */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-4">
              <h3 className="font-heading font-bold text-xl text-slate-900 pb-2 border-b border-slate-100">
                Verified Qualifications & Trade Licenses
              </h3>
              <div className="space-y-2.5">
                {worker.qualifications.map((q, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-3 text-xs text-slate-800 font-medium"
                  >
                    <Award className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>{q}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Request Card & Privacy Policy */}
          <div className="space-y-6 lg:sticky lg:top-28">
            {/* SECTION 7: REQUEST WORKER CTA BOX */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xl space-y-5">
              <div>
                <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block mb-1">
                  Candidate Match
                </span>
                <h3 className="font-heading font-bold text-xl text-slate-900">
                  Interested in This Candidate?
                </h3>
                <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                  Submit a formal request to our international recruitment team. We will arrange candidate trade video tests or live video interviews with your technical team.
                </p>
              </div>

              <Link
                href={`/employers/request?workerId=${worker.workerId}&category=${encodeURIComponent(worker.category)}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm shadow-md shadow-sky-600/20 transition-all hover:scale-[1.02]"
              >
                Request Candidate {worker.workerId}
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="p-4 bg-sky-50 rounded-2xl border border-sky-100 text-xs text-slate-700 space-y-2">
                <div className="font-bold text-sky-900 text-xs">What We Coordinate:</div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  <span>Technical trade test verification</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  <span>GAMCA medical fitness certificate</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  <span>SLBFE legal clearance & flight mobilization</span>
                </div>
              </div>
            </div>

            {/* Strict Privacy Compliance Notice */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5 text-xs text-slate-500 space-y-2">
              <div className="flex items-center gap-2 text-slate-700 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Strict Data Privacy Protection</span>
              </div>
              <p className="leading-relaxed">
                Candidate passport numbers, private residential contact coordinates, and unredacted documents are never shared on public channels. Complete verified dossiers are released exclusively under official corporate Non-Disclosure Agreements (NDAs).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: SIMILAR WORKERS */}
      {similarWorkers.length > 0 && (
        <section className="py-16 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold font-heading text-slate-900">
                  Similar Available Candidates
                </h3>
                <p className="text-slate-500 text-xs mt-1">
                  Other pre-screened professionals in {worker.category}.
                </p>
              </div>
              <Link
                href="/employers/workers"
                className="text-xs font-bold text-sky-600 hover:text-sky-700 inline-flex items-center gap-1"
              >
                Browse All Candidates <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similarWorkers.map((simWorker) => (
                <WorkerCard key={simWorker.workerId} worker={simWorker} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

