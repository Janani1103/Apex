import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  Calendar,
  Briefcase,
  Clock,
  ShieldCheck,
  CheckCircle2,
  FileText,
  ArrowRight,
  Plane,
  Users,
  Award,
  ChevronLeft,
  Coins,
  FileCheck2,
  Share2,
  Home,
  HeartPulse,
  Utensils,
  Bus,
  Check,
  TrendingUp,
} from "lucide-react";
import { JOBS_DATA } from "@/data/jobsData";
import { JobCard } from "@/components/jobs/JobCard";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

const APPROX_RATES_TO_LKR: Record<string, number> = {
  AED: 82,
  SAR: 80,
  QAR: 82,
  KWD: 980,
  OMR: 780,
  JPY: 2.0,
  SGD: 230,
  USD: 300,
  EUR: 330,
};

function formatApproxLKR(salaryStr: string, currency: string): string | null {
  const rate = APPROX_RATES_TO_LKR[currency?.toUpperCase()];
  if (!rate) return null;

  const numbers = salaryStr
    .split("-")
    .map((s) => parseFloat(s.replace(/[^0-9.]/g, "")))
    .filter((n) => !isNaN(n) && n > 0);

  if (numbers.length === 0) return null;

  if (numbers.length === 1) {
    const lkr = Math.round((numbers[0] * rate) / 1000) * 1000;
    return `~ LKR ${lkr.toLocaleString()} / mo`;
  }

  const minLkr = Math.round((numbers[0] * rate) / 1000) * 1000;
  const maxLkr = Math.round((numbers[1] * rate) / 1000) * 1000;
  return `~ LKR ${minLkr.toLocaleString()} – ${maxLkr.toLocaleString()} / mo`;
}

function formatDeadlineDate(dateStr: string): string {
  if (!dateStr) return "";
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

function getDeadlineStatus(deadlineStr: string): { label: string; urgent: boolean } | null {
  if (!deadlineStr) return null;
  try {
    const deadlineDate = new Date(deadlineStr);
    const today = new Date();
    deadlineDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays <= 0) {
      return { label: "Closing today", urgent: true };
    } else if (diffDays === 1) {
      return { label: "1 day left", urgent: true };
    } else if (diffDays <= 7) {
      return { label: `${diffDays} days left`, urgent: true };
    } else if (diffDays <= 30) {
      return { label: `${diffDays}d left`, urgent: false };
    } else {
      const weeks = Math.round(diffDays / 7);
      return { label: `~${weeks}w left`, urgent: false };
    }
  } catch {
    return null;
  }
}

const BENEFIT_THEMES = [
  {
    gradient: "from-emerald-50/80 via-white to-white",
    border: "border-emerald-200/90 hover:border-emerald-400",
    iconBg: "bg-emerald-600 text-white",
    watermark: "text-emerald-900/5",
  },
  {
    gradient: "from-sky-50/80 via-white to-white",
    border: "border-sky-200/90 hover:border-sky-400",
    iconBg: "bg-sky-600 text-white",
    watermark: "text-sky-900/5",
  },
  {
    gradient: "from-purple-50/80 via-white to-white",
    border: "border-purple-200/90 hover:border-purple-400",
    iconBg: "bg-purple-600 text-white",
    watermark: "text-purple-900/5",
  },
  {
    gradient: "from-amber-50/80 via-white to-white",
    border: "border-amber-200/90 hover:border-amber-400",
    iconBg: "bg-amber-600 text-white",
    watermark: "text-amber-900/5",
  },
  {
    gradient: "from-rose-50/80 via-white to-white",
    border: "border-rose-200/90 hover:border-rose-400",
    iconBg: "bg-rose-600 text-white",
    watermark: "text-rose-900/5",
  },
  {
    gradient: "from-indigo-50/80 via-white to-white",
    border: "border-indigo-200/90 hover:border-indigo-400",
    iconBg: "bg-indigo-600 text-white",
    watermark: "text-indigo-900/5",
  },
];

const APPLICATION_STAGES = [
  {
    step: 1,
    title: "Submit Online Application",
    desc: "Register profile and upload CV",
  },
  {
    step: 2,
    title: "Document Verification",
    desc: "Recruitment officer review",
  },
  {
    step: 3,
    title: "Client Trade Interview",
    desc: "Employer evaluation",
  },
  {
    step: 4,
    title: "GAMCA Medical & Visa",
    desc: "Work visa issuance",
  },
  {
    step: 5,
    title: "SLBFE & Flight Departure",
    desc: "Bureau registration and flight",
  },
];

function renderBenefitIcon(benefit: string, customClass?: string) {
  const b = benefit.toLowerCase();
  const iconProps = { className: customClass || "w-4 h-4 text-sky-700 shrink-0" };

  if (b.includes("ticket") || b.includes("air") || b.includes("flight")) return <Plane {...iconProps} />;
  if (b.includes("housing") || b.includes("accommodation") || b.includes("camp")) return <Home {...iconProps} />;
  if (b.includes("medical") || b.includes("insurance") || b.includes("health")) return <HeartPulse {...iconProps} />;
  if (b.includes("food") || b.includes("meal") || b.includes("dining")) return <Utensils {...iconProps} />;
  if (b.includes("transport") || b.includes("bus") || b.includes("travel")) return <Bus {...iconProps} />;
  if (b.includes("overtime") || b.includes("hours")) return <Clock {...iconProps} />;
  if (b.includes("gratuity") || b.includes("bonus") || b.includes("incentive")) return <Coins {...iconProps} />;
  if (b.includes("permit") || b.includes("visa") || b.includes("pass")) return <FileCheck2 {...iconProps} />;
  return <CheckCircle2 {...iconProps} />;
}

interface JobDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return JOBS_DATA.map((job) => ({
    slug: job.slug,
  }));
}

export function generateMetadata({ params }: JobDetailPageProps) {
  const job = JOBS_DATA.find((j) => j.slug === params.slug);
  if (!job) return { title: "Job Not Found | Apex World" };
  return {
    title: `${job.title} in ${job.destinationCountry} | Apex World Overseas Careers`,
    description: job.description,
  };
}

export default function JobDetailPage({ params }: JobDetailPageProps) {
  const job = JOBS_DATA.find((j) => j.slug === params.slug && j.status === "Active");

  if (!job) {
    notFound();
  }

  const approxLKR = formatApproxLKR(job.salary, job.currency);
  const deadlineStatus = getDeadlineStatus(job.deadline);
  const formattedDeadline = formatDeadlineDate(job.deadline);

  // Related jobs in same category or country
  const relatedJobs = JOBS_DATA.filter(
    (j) => j.id !== job.id && (j.category === job.category || j.destinationCountry === job.destinationCountry)
  ).slice(0, 3);

  const whatsappMessage = encodeURIComponent(
    `Hello Apex World, I would like to inquire about the ${job.title} vacancy (Ref: ${job.referenceId}) in ${job.destinationCountry}.`
  );

  const shareText = encodeURIComponent(
    `Check out this overseas job vacancy: ${job.title} in ${job.destinationCountry} via Apex World (Salary: ${job.currency} ${job.salary}).`
  );

  return (
    <div className="w-full bg-slate-50/60 pb-20">
      {/* SECTION 1: MODERN LIGHT AVIATION HEADER HERO (OPTION 2) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-100/70 via-sky-50/30 to-white border-b border-slate-200/90 pt-28 sm:pt-32 pb-10 sm:pb-12">
        {/* Subtle Aviation Flight Grid & Ambient Sky Glow */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c70c_1px,transparent_1px),linear-gradient(to_bottom,#0284c70c_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-b from-sky-400/20 via-sky-200/10 to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Integrated Top Breadcrumb & Navigation (No Wasted Space) */}
          <div className="flex items-center justify-between text-xs pb-6 mb-6 border-b border-slate-200/70">
            <Link
              href="/jobs"
              className="inline-flex items-center gap-1.5 font-bold text-slate-700 hover:text-sky-700 transition-colors py-1.5 px-3 rounded-xl bg-white/90 border border-slate-200 shadow-2xs hover:bg-white hover:shadow-xs"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back to All Vacancies</span>
            </Link>

            <div className="hidden sm:flex items-center gap-2 text-slate-500 font-medium text-[11px]">
              <Link href="/" className="hover:text-slate-800 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/jobs" className="hover:text-slate-800 transition-colors">Job Seekers</Link>
              <span>/</span>
              <span className="text-slate-900 font-bold truncate max-w-xs">{job.title}</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
            {/* Left Column: Comprehensive Job Identity */}
            <div className="flex-1 max-w-3xl space-y-5">
              {/* Top Badges Row */}
              <div className="flex flex-wrap items-center gap-2">
                {/* National Flag + Country */}
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white text-slate-800 border border-slate-200 shadow-2xs text-xs font-bold">
                  <div className="w-5 h-3.5 rounded-xs overflow-hidden shadow-2xs shrink-0 border border-slate-300">
                    <img
                      src={`https://flagcdn.com/w80/${job.countryCode}.png`}
                      alt={`${job.destinationCountry} Flag`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span>{job.destinationCountry}</span>
                  <span className="text-[11px] text-slate-400 font-mono font-normal">• {job.referenceId}</span>
                </div>

                {/* Confirmed Vacancies Live Beacon */}
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-2xs">
                  <span>{job.vacanciesCount} Confirmed Openings</span>
                </span>

                {/* Urgent/Featured if applicable */}
                {job.featured && (
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200 shadow-2xs">
                    <span>Priority Placement</span>
                  </span>
                )}
              </div>

              {/* Job Title */}
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-900 tracking-tight leading-[1.14]">
                  {job.title}
                </h1>
                <p className="text-xs sm:text-sm text-slate-500 mt-2 font-medium flex items-center gap-2">
                  <span>Official Foreign Employment Placement</span>
                  <span className="text-slate-300">•</span>
                  <span>{job.category}</span>
                </p>
              </div>

              {/* 4-PILL QUICK METRIC RIBBON - Fills the visual void cleanly */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                {/* 1. Monthly Salary */}
                <div className="bg-white/95 backdrop-blur-xs p-3.5 rounded-2xl border border-slate-200/90 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                    <Coins className="w-3.5 h-3.5 text-sky-600" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Salary</span>
                  </div>
                  <div className="text-base font-extrabold text-slate-900 font-heading">
                    {job.currency} {job.salary}
                  </div>
                  {approxLKR && (
                    <span className="text-[11px] font-bold text-emerald-700 block truncate mt-0.5">
                      {approxLKR}
                    </span>
                  )}
                </div>

                {/* 2. Experience Level */}
                <div className="bg-white/95 backdrop-blur-xs p-3.5 rounded-2xl border border-slate-200/90 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                    <Briefcase className="w-3.5 h-3.5 text-sky-600" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Experience</span>
                  </div>
                  <div className="text-base font-bold text-slate-900 font-heading truncate">
                    {job.experience}
                  </div>
                  <span className="text-[11px] text-slate-500 block truncate mt-0.5">
                    Trade Verified
                  </span>
                </div>

                {/* 3. Contract Term */}
                <div className="bg-white/95 backdrop-blur-xs p-3.5 rounded-2xl border border-slate-200/90 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                    <FileCheck2 className="w-3.5 h-3.5 text-sky-600" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Contract</span>
                  </div>
                  <div className="text-base font-bold text-slate-900 font-heading">
                    {job.employmentType}
                  </div>
                  <span className="text-[11px] text-slate-500 block truncate mt-0.5">
                    2-Yr Renewable
                  </span>
                </div>

                {/* 4. Application Deadline */}
                <div className="bg-white/95 backdrop-blur-xs p-3.5 rounded-2xl border border-slate-200/90 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                    <Clock className="w-3.5 h-3.5 text-rose-500" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Deadline</span>
                  </div>
                  <div className="text-sm font-bold text-slate-900 font-heading truncate">
                    {formattedDeadline}
                  </div>
                  {deadlineStatus && (
                    <span
                      className={`inline-block text-[10px] font-bold px-1.5 py-0.2 rounded mt-0.5 ${
                        deadlineStatus.urgent
                          ? "bg-rose-50 text-rose-700"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {deadlineStatus.label}
                    </span>
                  )}
                </div>
              </div>

              {/* Aviation Perks Strip */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-semibold text-slate-700">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 border border-slate-200/80 shadow-2xs">
                  <Plane className="w-3.5 h-3.5 text-sky-600" />
                  <span>Free Air Ticket</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 border border-slate-200/80 shadow-2xs">
                  <Home className="w-3.5 h-3.5 text-sky-600" />
                  <span>Accommodation Provided</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 border border-slate-200/80 shadow-2xs">
                  <HeartPulse className="w-3.5 h-3.5 text-sky-600" />
                  <span>Medical Covered</span>
                </span>
              </div>
            </div>

            {/* Right Column: High-Impact Executive Compensation & Action Card */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-xl shadow-slate-200/50 lg:w-96 shrink-0 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-sky-500 to-blue-600" />

              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1">
                  Monthly Basic Compensation
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black font-heading text-sky-700 tracking-tight">
                    {job.currency} {job.salary}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">/ mo</span>
                </div>

                {approxLKR && (
                  <div className="mt-2.5 py-2 px-3 rounded-xl bg-emerald-50 border border-emerald-200/70 flex items-center justify-between text-xs font-bold text-emerald-800">
                    <span>{approxLKR}</span>
                    <span className="text-[10px] font-semibold text-emerald-600 uppercase">
                      Approx. LKR
                    </span>
                  </div>
                )}

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>{job.employmentType} Contract</span>
                  <span className="text-slate-300">•</span>
                  <span>{job.workingHours || "8 Hrs / 6 Days"}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 space-y-2.5">
                <Link
                  href={`/jobs/${job.slug}/apply`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-sky-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Apply for This Role</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`https://wa.me/94771234567?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-all shadow-md shadow-emerald-600/25 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Inquire via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 & MAIN BODY (2-COLUMN ENTERPRISE LAYOUT) */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* LEFT 2-COLUMNS: DETAILS & HIGHLIGHTS */}
          <div className="lg:col-span-2 space-y-8">
            {/* KEY HIGHLIGHTS METRIC GRID */}
            <div>
              <h2 className="text-lg font-bold font-heading text-slate-900 mb-4">
                Position Specifications
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {/* 1. Basic Salary (Emerald Theme) */}
                <div className="bg-gradient-to-br from-emerald-50 via-emerald-50/40 to-white rounded-xl border border-emerald-200/90 p-4 shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center mb-2.5 shadow-2xs">
                    <Coins className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">
                    Basic Salary
                  </span>
                  <div className="text-lg font-bold text-slate-900 font-heading mt-0.5">
                    {job.currency} {job.salary}
                  </div>
                  {approxLKR && (
                    <span className="text-xs font-semibold text-emerald-700 block mt-0.5">
                      {approxLKR}
                    </span>
                  )}
                </div>

                {/* 2. Job Location (Sky Blue Theme) */}
                <div className="bg-gradient-to-br from-sky-50 via-sky-50/40 to-white rounded-xl border border-sky-200/90 p-4 shadow-2xs hover:shadow-md hover:border-sky-300 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center mb-2.5 shadow-2xs">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-sky-800 uppercase tracking-wider block">
                    Country
                  </span>
                  <div className="text-lg font-bold text-slate-900 font-heading mt-0.5">
                    {job.destinationCountry}
                  </div>
                  <span className="text-xs text-sky-700/80 block mt-0.5">
                    Foreign Employer Sponsorship
                  </span>
                </div>

                {/* 3. Confirmed Quota (Purple Theme) */}
                <div className="bg-gradient-to-br from-purple-50 via-purple-50/40 to-white rounded-xl border border-purple-200/90 p-4 shadow-2xs hover:shadow-md hover:border-purple-300 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center mb-2.5 shadow-2xs">
                    <Users className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-purple-800 uppercase tracking-wider block">
                    Confirmed Quota
                  </span>
                  <div className="text-lg font-bold text-slate-900 font-heading mt-0.5">
                    {job.vacanciesCount} Positions
                  </div>
                  <span className="text-xs text-purple-700/80 block mt-0.5">
                    Active Client Order
                  </span>
                </div>

                {/* 4. Experience Level (Amber Theme) */}
                <div className="bg-gradient-to-br from-amber-50 via-amber-50/40 to-white rounded-xl border border-amber-200/90 p-4 shadow-2xs hover:shadow-md hover:border-amber-300 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-amber-600 text-white flex items-center justify-center mb-2.5 shadow-2xs">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider block">
                    Experience Level
                  </span>
                  <div className="text-lg font-bold text-slate-900 font-heading mt-0.5">
                    {job.experience}
                  </div>
                  <span className="text-xs text-amber-700/80 block mt-0.5">
                    Trade Verified
                  </span>
                </div>

                {/* 5. Contract Term (Indigo Theme) */}
                <div className="bg-gradient-to-br from-indigo-50 via-indigo-50/40 to-white rounded-xl border border-indigo-200/90 p-4 shadow-2xs hover:shadow-md hover:border-indigo-300 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center mb-2.5 shadow-2xs">
                    <FileCheck2 className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-indigo-800 uppercase tracking-wider block">
                    Contract Type
                  </span>
                  <div className="text-lg font-bold text-slate-900 font-heading mt-0.5">
                    {job.employmentType}
                  </div>
                  <span className="text-xs text-indigo-700/80 block mt-0.5">
                    Standard 2-Yr Renewable
                  </span>
                </div>

                {/* 6. Working Hours (Rose Theme) */}
                <div className="bg-gradient-to-br from-rose-50 via-rose-50/40 to-white rounded-xl border border-rose-200/90 p-4 shadow-2xs hover:shadow-md hover:border-rose-300 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-rose-600 text-white flex items-center justify-center mb-2.5 shadow-2xs">
                    <Clock className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-rose-800 uppercase tracking-wider block">
                    Duty Hours
                  </span>
                  <div className="text-lg font-bold text-slate-900 font-heading mt-0.5">
                    {job.workingHours || "8 Hours / Day"}
                  </div>
                  <span className="text-xs text-rose-700/80 block mt-0.5">
                    Overtime as per host laws
                  </span>
                </div>
              </div>
            </div>

            {/* SECTION 3: ROLE OVERVIEW & RESPONSIBILITIES */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-5">
              <div>
                <h3 className="font-heading font-bold text-lg text-slate-900 pb-3 border-b border-slate-100">
                  Role Overview
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mt-3">
                  {job.description}
                </p>
              </div>

              <div>
                <h4 className="font-heading font-bold text-sm text-slate-900 mb-3">
                  Key Responsibilities & Duties:
                </h4>
                <ul className="space-y-2.5">
                  {job.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed py-1.5 border-b border-slate-100/70 last:border-0">
                      <Check className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* SECTION 4: CANDIDATE PREREQUISITES & ELIGIBILITY */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-4">
              <h3 className="font-heading font-bold text-lg text-slate-900 pb-3 border-b border-slate-100 flex items-center gap-2">
                <Award className="w-5 h-5 text-sky-600" />
                Candidate Prerequisites & Trade Qualifications
              </h3>
              <p className="text-xs text-slate-500">
                Candidates must satisfy the following minimum vocational and background criteria:
              </p>
              <div className="grid grid-cols-1 gap-2.5 pt-1">
                {job.requirements.map((req, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3.5 bg-gradient-to-r from-emerald-50/70 to-emerald-50/25 hover:from-emerald-50/90 hover:to-emerald-50/40 rounded-xl border border-emerald-100/90 hover:border-emerald-200 text-xs sm:text-sm text-slate-800 shadow-2xs transition-all"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{req}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 5: EMPLOYER-CONFIRMED BENEFITS & ALLOWANCES (3D OVERLAPPING DECK) */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-5">
              <div className="pb-3 border-b border-slate-100 flex items-center justify-between flex-wrap gap-2">
                <div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                    Employer-Confirmed Benefits & Allowances
                  </h3>
                  <p className="text-slate-500 text-xs mt-1">
                    Guaranteed in official employment contract as per destination country labor regulations:
                  </p>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-2xs">
                  {job.benefits.length} Guaranteed Provisions
                </span>
              </div>

              {/* Horizontal Overlapping 3D Card Deck */}
              <div className="relative pt-2 pb-2">
                <div className="flex items-stretch -space-x-3 sm:-space-x-4 overflow-x-auto pb-4 pt-3 px-1 scroll-smooth">
                  {job.benefits.map((benefit, i) => {
                    const theme = BENEFIT_THEMES[i % BENEFIT_THEMES.length];
                    const zIndex = i + 1;
                    return (
                      <div
                        key={i}
                        style={{ zIndex }}
                        className={`group relative w-[190px] sm:w-[210px] shrink-0 rounded-2xl bg-gradient-to-br ${
                          theme.gradient
                        } border ${
                          theme.border
                        } p-4 sm:p-5 shadow-[0_8px_24px_-4px_rgba(15,23,42,0.10)] hover:shadow-[0_20px_40px_-6px_rgba(15,23,42,0.22)] transition-all duration-300 ease-out hover:-translate-y-3 hover:scale-[1.03] hover:!z-30 overflow-hidden cursor-default flex flex-col justify-between min-h-[175px] sm:min-h-[190px]`}
                      >
                        {/* Depth Watermark Number */}
                        <span
                          className={`absolute right-3 -bottom-3 text-6xl sm:text-7xl font-black font-heading select-none pointer-events-none transition-transform duration-300 group-hover:scale-110 ${theme.watermark}`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>

                        {/* Top: 3D Elevated Icon Badge */}
                        <div className="relative">
                          <div
                            className={`w-11 h-11 rounded-xl ${theme.iconBg} flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2`}
                          >
                            {renderBenefitIcon(benefit, "w-5 h-5 text-white shrink-0")}
                          </div>
                        </div>

                        {/* Bottom: Benefit Title Only (Clean, no supportive subtext) */}
                        <div className="relative min-w-0 pt-3">
                          <span className="text-xs sm:text-sm font-bold text-slate-800 leading-snug block group-hover:text-slate-900 transition-colors">
                            {benefit}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* SECTION 6: MANDATORY DOCUMENTS CHECKLIST */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-4">
              <div className="pb-3 border-b border-slate-100">
                <h3 className="font-heading font-bold text-lg text-slate-900">
                  Required Documents Checklist
                </h3>
                <p className="text-slate-500 text-xs mt-1">
                  Ensure clear copies or digital scans are ready before submitting your application:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {job.requiredDocuments.map((doc, i) => (
                  <div
                    key={i}
                    className="p-3.5 bg-slate-50/70 hover:bg-sky-50/40 rounded-xl border border-slate-200/80 hover:border-sky-200 flex items-center gap-3.5 text-xs sm:text-sm text-slate-800 transition-all shadow-2xs group"
                  >
                    <span className="w-8 h-8 rounded-xl bg-sky-50 group-hover:bg-sky-600 text-sky-700 group-hover:text-white border border-sky-200/80 group-hover:border-sky-600 font-heading font-black text-sm flex items-center justify-center shrink-0 shadow-2xs transition-all">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-semibold text-slate-800 leading-snug">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: STICKY APPLICATION SUITE */}
          <div className="space-y-6 lg:sticky lg:top-28">
            {/* Primary Action Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-5">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 block mb-1">
                  Verified Opportunity
                </span>
                <h3 className="font-heading font-bold text-lg text-slate-900">
                  Submit Candidate Application
                </h3>
                <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                  Direct online submission linked to reference <strong className="text-slate-800 font-mono">{job.referenceId}</strong>.
                </p>
              </div>

              <div className="space-y-2.5">
                <Link
                  href={`/jobs/${job.slug}/apply`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-colors"
                >
                  <span>Apply Online Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`https://wa.me/94771234567?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>

              {/* Share to WhatsApp */}
              <div className="pt-3 border-t border-slate-100">
                <a
                  href={`https://api.whatsapp.com/send?text=${shareText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-50 font-medium text-xs transition-colors"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share Vacancy</span>
                </a>
              </div>

              {/* Candidate Protection Pillars */}
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-600 space-y-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Verified foreign employer quota</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>SLBFE legal clearance assistance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Plane className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Air ticket provided upon selection</span>
                </div>
              </div>
            </div>

            {/* 5-STEP RECRUITMENT ROADMAP: STAIRCASE LAYOUT */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <h4 className="font-heading font-bold text-sm text-slate-900 flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-sky-600" />
                    <span>Application Stages</span>
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Step-by-step career progression
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-sky-50 text-sky-700 border border-sky-200 shadow-2xs">
                  <span>5 Steps</span>
                  <ArrowRight className="w-2.5 h-2.5" />
                  <Plane className="w-3 h-3 text-sky-600" />
                </span>
              </div>

              {/* Progressive Staircase Steps */}
              <div className="space-y-2 pt-1">
                {APPLICATION_STAGES.map((stage, idx) => {
                  const offsets = [
                    "ml-0",
                    "ml-1.5 sm:ml-2.5",
                    "ml-3 sm:ml-5",
                    "ml-4.5 sm:ml-7.5",
                    "ml-6 sm:ml-10",
                  ];
                  const isFinal = idx === APPLICATION_STAGES.length - 1;
                  return (
                    <div
                      key={stage.step}
                      className={`group relative flex items-center gap-3 p-2.5 sm:p-3 rounded-xl border transition-all duration-200 ${offsets[idx]} ${
                        isFinal
                          ? "bg-gradient-to-r from-emerald-50 via-emerald-50/70 to-white border-emerald-300 shadow-sm hover:shadow-md hover:border-emerald-400"
                          : "bg-slate-50/70 hover:bg-white border-slate-200/90 hover:border-sky-300 hover:shadow-2xs"
                      }`}
                    >
                      {/* Step Number Badge */}
                      <span
                        className={`w-7 h-7 rounded-lg font-heading font-black text-xs flex items-center justify-center shrink-0 border shadow-2xs transition-all ${
                          isFinal
                            ? "bg-emerald-600 text-white border-emerald-600 shadow-emerald-600/30"
                            : "bg-white text-slate-700 border-slate-200 group-hover:bg-sky-50 group-hover:text-sky-700 group-hover:border-sky-200"
                        }`}
                      >
                        {isFinal ? <Plane className="w-3.5 h-3.5" /> : stage.step}
                      </span>

                      {/* Stage Title & Description */}
                      <div className="min-w-0 flex-1">
                        <strong
                          className={`block text-xs font-bold leading-tight ${
                            isFinal ? "text-emerald-950" : "text-slate-800"
                          }`}
                        >
                          {stage.title}
                        </strong>
                        <span
                          className={`block text-[11px] truncate mt-0.5 ${
                            isFinal ? "text-emerald-700 font-medium" : "text-slate-500"
                          }`}
                        >
                          {stage.desc}
                        </span>
                      </div>

                      {/* Final Target Badge */}
                      {isFinal && (
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 shrink-0">
                          Departure
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: SIMILAR OPPORTUNITIES */}
      {relatedJobs.length > 0 && (
        <section className="py-14 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl font-bold font-heading text-slate-900">
                  Similar Opportunities
                </h3>
                <p className="text-slate-500 text-xs mt-1">
                  Other verified openings in {job.destinationCountry} or within {job.category}.
                </p>
              </div>
              <Link
                href="/jobs"
                className="text-xs font-semibold text-sky-700 hover:text-sky-800 inline-flex items-center gap-1 hover:underline"
              >
                View All Vacancies <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedJobs.map((rJob) => (
                <JobCard key={rJob.id} job={rJob} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 9: EXECUTIVE FOOTER CTA */}
      <section className="py-14 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading mb-3 tracking-tight">
            Interested in This Career Opportunity?
          </h2>
          <p className="text-slate-300 text-sm mb-7 leading-relaxed max-w-xl mx-auto">
            Submit your application directly through Apex World. Our recruitment officers evaluate submissions against active employer quotas daily.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href={`/jobs/${job.slug}/apply`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>Apply for Position</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`https://wa.me/94771234567?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
              <span>Inquire via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* MOBILE STICKY BOTTOM ACTION BAR */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 p-3 px-4 shadow-lg flex items-center justify-between gap-3">
        <div className="min-w-0">
          <span className="text-[10px] uppercase font-bold text-slate-500 block truncate">
            {job.currency} {job.salary} / mo
          </span>
          {approxLKR && (
            <span className="text-[11px] font-bold text-emerald-800 block truncate">
              {approxLKR}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href={`https://wa.me/94771234567?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Inquire via WhatsApp"
            className="p-2.5 rounded-xl text-slate-700 bg-slate-100 border border-slate-200 hover:bg-slate-200"
          >
            <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
          </a>

          <Link
            href={`/jobs/${job.slug}/apply`}
            className="px-5 py-2.5 rounded-xl bg-sky-600 text-white font-bold text-xs shadow-sm hover:bg-sky-700"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}
