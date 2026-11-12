import React from "react";
import Link from "next/link";
import { Worker } from "@/types";
import { ShieldCheck, CheckCircle2, UserCheck, ArrowRight, Briefcase, Globe } from "lucide-react";

interface WorkerCardProps {
  worker: Worker;
}

export function WorkerCard({ worker }: WorkerCardProps) {
  return (
    <div className="group bg-white rounded-2xl border border-slate-200/90 hover:border-sky-300 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
      {/* Top Header Row */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
            {worker.workerId}
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {worker.availabilityStatus}
          </span>
        </div>

        {/* Worker Title & Nationality */}
        <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-sky-600 transition-colors mb-1">
          {worker.occupation}
        </h3>
        <div className="flex items-center gap-1.5 text-xs text-sky-600 font-medium mb-3">
          <ShieldCheck className="w-3.5 h-3.5 text-sky-500" />
          <span>Sri Lankan Professional • Category: {worker.category}</span>
        </div>

        {/* Experience & Country Specs */}
        <div className="grid grid-cols-2 gap-2 text-xs bg-slate-50 p-3 rounded-xl border border-slate-100 mb-4">
          <div>
            <span className="text-slate-400 block text-[10px] uppercase font-semibold">Total Experience</span>
            <span className="font-bold text-slate-800">{worker.totalExperience}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px] uppercase font-semibold">Preferred Country</span>
            <span className="font-bold text-sky-700">{worker.preferredCountry}</span>
          </div>
        </div>

        {/* Skills Tags */}
        <div className="mb-4">
          <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold block mb-1.5">
            Verified Technical Skills
          </span>
          <div className="flex flex-wrap gap-1.5">
            {worker.skills.slice(0, 4).map((skill, index) => (
              <span
                key={index}
                className="px-2 py-0.5 rounded text-[11px] font-medium bg-sky-50 text-sky-800 border border-sky-100"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Profile Summary Snippet */}
        <p className="text-slate-500 text-xs line-clamp-2 mb-4 leading-relaxed">
          {worker.summary}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
        <Link
          href={`/employers/workers/${worker.workerId}`}
          className="text-xs font-semibold text-slate-600 hover:text-sky-600 inline-flex items-center gap-1 group/btn"
        >
          View Profile
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
        </Link>

        <Link
          href={`/employers/request?workerId=${worker.workerId}&category=${encodeURIComponent(worker.category)}`}
          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700 shadow-sm shadow-sky-600/20 group-hover:scale-105 transition-all"
        >
          Request Worker
        </Link>
      </div>
    </div>
  );
}

