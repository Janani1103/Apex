import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Globe2,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Briefcase,
  FileText,
  HelpCircle,
  ArrowRight,
  ChevronLeft,
} from "lucide-react";
import { DESTINATIONS_DATA } from "@/data/destinationsData";
import { JOBS_DATA } from "@/data/jobsData";
import { JobCard } from "@/components/jobs/JobCard";
import { Accordion } from "@/components/ui/Accordion";

interface DestinationPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return DESTINATIONS_DATA.map((d) => ({
    slug: d.slug,
  }));
}

export function generateMetadata({ params }: DestinationPageProps) {
  const dest = DESTINATIONS_DATA.find((d) => d.slug === params.slug);
  if (!dest) return { title: "Destination Not Found | Apex World" };
  return {
    title: `Overseas Jobs in ${dest.name} | Apex World Foreign Employment Agencies (Pvt) Ltd.`,
    description: dest.shortIntro,
  };
}

export default function CountryDetailPage({ params }: DestinationPageProps) {
  const dest = DESTINATIONS_DATA.find((d) => d.slug === params.slug);

  if (!dest) {
    notFound();
  }

  // Filter active jobs for this country
  const countryJobs = JOBS_DATA.filter(
    (job) =>
      job.status === "Active" &&
      (job.destinationCountry.toLowerCase().includes(dest.name.toLowerCase()) ||
        dest.name.toLowerCase().includes(job.destinationCountry.toLowerCase()))
  );

  return (
    <div className="w-full">
      {/* Breadcrumb — merged INTO the Hero top bar, no separate blank bar */}
      <section className="relative min-h-[480px] sm:min-h-[520px] lg:min-h-[560px] flex flex-col justify-center bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={dest.image}
            alt={dest.name}
            className="w-full h-full object-cover"
          />
          {/* Lighter scrim — image visible at ~70% */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/55 via-slate-900/25 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 w-full">
          {/* Back link inside hero */}
          <Link
            href="/destinations"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-sky-400 transition-colors mb-6"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to All Destinations
          </Link>

          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold text-sky-300 border border-white/10">
              <span className="text-base">{dest.flag}</span>
              <span>Official Manpower Destination</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight">
              Employment in {dest.name}
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {dest.shortIntro}
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs font-semibold">
              <span className="px-3 py-1.5 rounded-lg bg-sky-500 text-white">
                {countryJobs.length} Confirmed Active Vacancies
              </span>
              <a href="#vacancies" className="text-sky-300 hover:underline">
                View Available Openings ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: COUNTRY OVERVIEW & REQUIREMENTS */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Overview */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-4">
              <h2 className="font-heading font-bold text-2xl text-slate-900 pb-2 border-b border-slate-100">
                Country Overview & Market Insights
              </h2>
              <p className="text-slate-700 text-sm leading-relaxed">
                {dest.fullOverview}
              </p>

              <h3 className="font-heading font-bold text-base text-slate-900 pt-4">
                Active Employment Sectors:
              </h3>
              <div className="flex flex-wrap gap-2">
                {dest.activeSectors.map((sec, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg bg-sky-50 text-sky-800 text-xs font-semibold border border-sky-100"
                  >
                    {sec}
                  </span>
                ))}
              </div>
            </div>

            {/* Employment Conditions & Labor Information */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-4">
              <h2 className="font-heading font-bold text-2xl text-slate-900 pb-2 border-b border-slate-100">
                General Employment & Labor Conditions
              </h2>
              <div className="space-y-3 pt-2">
                {dest.employmentInfo.map((info, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{info}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Candidate Prerequisites */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-4">
              <h2 className="font-heading font-bold text-2xl text-slate-900 pb-2 border-b border-slate-100">
                Candidate Prerequisites for {dest.name}
              </h2>
              <ul className="space-y-2.5 text-xs text-slate-700 pt-2">
                {dest.keyRequirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQs for this destination */}
            {dest.faqs.length > 0 && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-4">
                <h2 className="font-heading font-bold text-2xl text-slate-900 pb-2 border-b border-slate-100">
                  {dest.name} Employment FAQs
                </h2>
                <Accordion
                  items={dest.faqs.map((f, i) => ({
                    id: `dest-faq-${i}`,
                    title: f.q,
                    content: f.a,
                  }))}
                />
              </div>
            )}
          </div>

          {/* Right Column: Fast Application CTA */}
          <div className="space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-xl space-y-4">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-wider block">
                Direct Placement
              </span>
              <h3 className="font-heading font-bold text-xl text-white">
                Interested in Working in {dest.name}?
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Register your profile with Apex World. We coordinate trade tests and employer interviews directly in Colombo.
              </p>

              <Link
                href={`/apply?country=${encodeURIComponent(dest.name)}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs shadow-md transition-all hover:scale-[1.02]"
              >
                Apply for {dest.name} Jobs
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-sky-50 border border-sky-100 rounded-2xl p-5 text-xs text-slate-700 space-y-2">
              <div className="font-bold text-sky-900 text-sm">SLBFE Guarantee</div>
              <p className="leading-relaxed text-slate-600">
                All foreign employment contracts with {dest.name} companies are endorsed by the Embassy of Sri Lanka and registered through the Sri Lanka Bureau of Foreign Employment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: AVAILABLE JOBS IN THIS COUNTRY */}
      <section id="vacancies" className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold text-sky-600 uppercase tracking-wider bg-white px-3 py-1 rounded-full border border-slate-200">
                Current Opportunities
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 mt-2">
                Active Vacancies in {dest.name}
              </h2>
            </div>
            <Link
              href="/jobs"
              className="text-xs font-bold text-sky-600 hover:text-sky-700 inline-flex items-center gap-1"
            >
              Browse All Countries <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {countryJobs.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center text-slate-500 text-xs">
              No vacancies are actively listed for {dest.name} at this exact moment. Please submit an online general application so our officers can notify you when new quotas open.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {countryJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

