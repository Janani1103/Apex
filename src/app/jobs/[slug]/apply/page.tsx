import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { JOBS_DATA } from "@/data/jobsData";
import { ApplicationMultiStepForm } from "@/components/jobs/ApplicationMultiStepForm";

interface JobApplyPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return JOBS_DATA.map((job) => ({
    slug: job.slug,
  }));
}

export function generateMetadata({ params }: JobApplyPageProps) {
  const job = JOBS_DATA.find((j) => j.slug === params.slug);
  if (!job) return { title: "Apply Online | Apex World" };
  return {
    title: `Apply for ${job.title} | Apex World Foreign Employment Agencies (Pvt) Ltd.`,
    description: `Submit your online application for the ${job.title} vacancy in ${job.destinationCountry}.`,
  };
}

export default function JobApplyPage({ params }: JobApplyPageProps) {
  const job = JOBS_DATA.find((j) => j.slug === params.slug && j.status === "Active");

  if (!job) {
    notFound();
  }

  return (
    <div className="w-full pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <div className="mb-6">
          <Link
            href={`/jobs/${job.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-sky-600 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Vacancy Details: {job.title}
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center mb-8">
          <span className="text-xs font-bold text-sky-700 uppercase tracking-wider bg-sky-100/80 px-3 py-1 rounded-full border border-sky-200">
            Official Online Application
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 mt-2 mb-2">
            Apply for: {job.title}
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
            Destination: <strong>{job.destinationCountry}</strong> • Reference: <span className="font-mono font-bold text-sky-700">{job.referenceId}</span>
          </p>
        </div>

        {/* Multi-step form with pre-populated data */}
        <ApplicationMultiStepForm
          initialJobSlug={job.slug}
          initialJobTitle={job.title}
          initialCountry={job.destinationCountry}
          initialCategory={job.category}
        />
      </div>
    </div>
  );
}

