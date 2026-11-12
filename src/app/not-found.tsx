import React from "react";
import Link from "next/link";
import { Plane, Compass, ArrowRight, Briefcase } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center pt-36 pb-20 px-4 bg-slate-50">
      <div className="max-w-md w-full bg-white rounded-3xl border border-slate-200 p-8 md:p-10 shadow-xl text-center">
        <div className="w-20 h-20 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center mx-auto mb-6 shadow-inner">
          <Plane className="w-10 h-10 transform -rotate-45" />
        </div>

        <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
          Flight Status: Diverted (404)
        </span>

        <h1 className="text-3xl font-extrabold font-heading text-slate-900 mt-4 mb-2">
          Page Not Found
        </h1>

        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-8">
          The destination or page you are attempting to reach does not exist or may have been relocated.
        </p>

        <div className="flex flex-col gap-3">
          <Link
            href="/"
            className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs shadow-md transition-all"
          >
            Return to Homepage
          </Link>

          <Link
            href="/jobs"
            className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors"
          >
            <Briefcase className="w-4 h-4" />
            Explore Available Vacancies
          </Link>
        </div>
      </div>
    </div>
  );
}

