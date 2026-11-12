import React from "react";
import Link from "next/link";
import { ApplicationMultiStepForm } from "@/components/jobs/ApplicationMultiStepForm";

export const metadata = {
  title: "Online Job Application | Apex World Foreign Employment Agencies (Pvt) Ltd.",
  description:
    "Submit your candidate profile to Apex World's international manpower talent database for upcoming foreign employment vacancies.",
};

export default function GeneralApplyPage() {
  return (
    <div className="w-full pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <span className="text-xs font-bold text-sky-700 uppercase tracking-wider bg-sky-100/80 px-3 py-1 rounded-full border border-sky-200">
            Candidate Registration Portal
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 mt-2 mb-2">
            Online Job Application
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
            Register your credentials in our overseas workforce database. Our recruitment team matches candidate profiles with verified foreign employer orders daily.
          </p>
        </div>

        {/* Multi-step form */}
        <ApplicationMultiStepForm />
      </div>
    </div>
  );
}

