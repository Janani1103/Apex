"use client";

import React from "react";
import Link from "next/link";
import { Job } from "@/types";
import { Calendar, ArrowRight, Clock, Flame } from "lucide-react";
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
    return `~ LKR ${lkr.toLocaleString()}`;
  }

  const minLkr = Math.round((numbers[0] * rate) / 1000) * 1000;
  const maxLkr = Math.round((numbers[1] * rate) / 1000) * 1000;
  return `~ LKR ${minLkr.toLocaleString()} – ${maxLkr.toLocaleString()}`;
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
      return { label: `${weeks}w left`, urgent: false };
    }
  } catch {
    return null;
  }
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

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  const approxLKR = formatApproxLKR(job.salary, job.currency);
  const deadlineStatus = getDeadlineStatus(job.deadline);
  const formattedDeadline = formatDeadlineDate(job.deadline);

  return (
    <div className="group bg-white rounded-3xl border border-slate-200/90 hover:border-sky-400/80 p-6 sm:p-7 shadow-sm hover:shadow-2xl hover:shadow-sky-500/10 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
      {/* Top Accent Gradient Line on Hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-sky-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Ambient Radial Hover Glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-sky-400/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div>
        {/* Top Badges Row: Flag + Country + Live Vacancy Beacon */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2.5">
            {/* Real Official National Flag */}
            <div className="relative w-6 h-4.5 rounded-xs overflow-hidden shadow-2xs border border-slate-300/80 shrink-0">
              <img
                src={`https://flagcdn.com/w80/${job.countryCode}.png`}
                alt={`${job.destinationCountry} Flag`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <span className="text-xs font-bold text-slate-800">{job.destinationCountry}</span>
            <span className="text-[11px] text-slate-400 font-mono hidden sm:inline">• {job.referenceId}</span>
          </div>

          <div className="flex items-center gap-1.5">
            {/* Urgent / Featured Badge */}
            {job.featured && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200/90 shadow-2xs">
                <Flame className="w-3 h-3 text-amber-500" />
                <span>Urgent</span>
              </span>
            )}

            {/* Live Openings Pulse Badge */}
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/80 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>{job.vacanciesCount} Openings</span>
            </span>
          </div>
        </div>

        {/* Job Title */}
        <h3 className="font-heading font-extrabold text-lg sm:text-xl text-slate-900 group-hover:text-sky-600 transition-colors mb-2.5 line-clamp-1">
          {job.title}
        </h3>

        {/* Quick Tag Pills: Category, Experience, Employment Type */}
        <div className="flex flex-wrap items-center gap-2 mb-4 text-[11px] font-semibold text-slate-600">
          <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700">
            {job.category}
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 flex items-center gap-1">
            <Clock className="w-3 h-3 text-slate-400" />
            {job.experience}
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-sky-50 text-sky-700 border border-sky-100">
            {job.employmentType}
          </span>
        </div>

        {/* High-Impact Salary Showcase Banner with LKR Equivalent */}
        <div className="bg-gradient-to-r from-sky-50 via-sky-50/80 to-blue-50/50 rounded-2xl p-4 border border-sky-100 mb-4">
          <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500 block mb-0.5">
            Monthly Basic Compensation
          </span>
          <div className="flex items-baseline gap-1.5 flex-wrap">
            <span className="text-2xl font-black font-heading text-sky-700 tracking-tight">
              {job.currency} {job.salary}
            </span>
            <span className="text-xs font-semibold text-slate-500">/ mo</span>
          </div>
          {approxLKR && (
            <span className="text-[11px] font-bold text-emerald-700 mt-1 block">
              {approxLKR} <span className="font-normal text-slate-500 text-[10px]">(approx.)</span>
            </span>
          )}
        </div>

        {/* Sri Lankan Candidate Core Benefits Chips */}
        <div className="flex flex-wrap gap-1.5 mb-4 text-[11px] font-semibold text-slate-700">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200/80">
            ✈️ Free Air Ticket
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200/80">
            🏠 Housing Provided
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200/80">
            🏥 Medical Covered
          </span>
        </div>

        {/* Short description snippet */}
        <p className="text-slate-500 text-xs line-clamp-2 mb-5 leading-relaxed">
          {job.description}
        </p>
      </div>

      {/* Footer Info & View Details Action */}
      <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
        {/* Deadline & Remaining Days Row - Full Width, No Truncation */}
        <div className="flex items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-1.5 text-slate-500 font-medium whitespace-nowrap">
            <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span>
              Deadline: <strong className="text-slate-700 font-bold">{formattedDeadline}</strong>
            </span>
          </div>

          {deadlineStatus && (
            <span
              className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full shrink-0 shadow-2xs ${
                deadlineStatus.urgent
                  ? "bg-rose-50 text-rose-700 border border-rose-200"
                  : "bg-amber-50 text-amber-700 border border-amber-200"
              }`}
            >
              <Clock className="w-3 h-3 shrink-0" />
              <span>{deadlineStatus.label}</span>
            </span>
          )}
        </div>

        {/* Action Buttons Row - Balanced & Touch Friendly */}
        <div className="flex items-center gap-2 pt-0.5">
          {/* Quick WhatsApp Inquiry */}
          <a
            href={`https://wa.me/94771234567?text=${encodeURIComponent(
              `Hello Apex World, I would like to inquire about the ${job.title} vacancy (Ref: ${job.referenceId}) in ${job.destinationCountry}.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Inquire directly on WhatsApp"
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-600 hover:text-white border border-emerald-200/80 transition-all shadow-2xs hover:shadow-md"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
            <span>WhatsApp</span>
          </a>

          <Link
            href={`/jobs/${job.slug}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-sky-600 shadow-md shadow-slate-950/10 hover:shadow-sky-600/25 transition-all group/btn"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
