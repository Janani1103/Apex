"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, X, Briefcase, Users, Globe, HelpCircle, ArrowRight } from "lucide-react";
import { JOBS_DATA } from "@/data/jobsData";
import { WORKERS_DATA } from "@/data/workersData";
import { DESTINATIONS_DATA } from "@/data/destinationsData";
import { FAQS_DATA } from "@/data/faqsData";

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GlobalSearchModal({ isOpen, onClose }: GlobalSearchModalProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        // Toggle or open
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.trim().toLowerCase();

  const filteredJobs = q
    ? JOBS_DATA.filter(
        (j) =>
          j.title.toLowerCase().includes(q) ||
          j.destinationCountry.toLowerCase().includes(q) ||
          j.category.toLowerCase().includes(q) ||
          j.referenceId.toLowerCase().includes(q)
      ).slice(0, 4)
    : [];

  const filteredWorkers = q
    ? WORKERS_DATA.filter(
        (w) =>
          w.visibleOnWebsite &&
          w.availabilityStatus === "Available" &&
          (w.workerId.toLowerCase().includes(q) ||
            w.occupation.toLowerCase().includes(q) ||
            w.category.toLowerCase().includes(q) ||
            w.skills.some((s) => s.toLowerCase().includes(q)))
      ).slice(0, 3)
    : [];

  const filteredDestinations = q
    ? DESTINATIONS_DATA.filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.shortIntro.toLowerCase().includes(q)
      ).slice(0, 3)
    : [];

  const filteredFaqs = q
    ? FAQS_DATA.filter((f) => f.question.toLowerCase().includes(q)).slice(0, 2)
    : [];

  const hasResults =
    filteredJobs.length > 0 ||
    filteredWorkers.length > 0 ||
    filteredDestinations.length > 0 ||
    filteredFaqs.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3 bg-slate-50">
          <Search className="w-5 h-5 text-sky-600 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search jobs, workers, destinations, or requirements (e.g. Electrician, UAE, WRK-001)..."
            className="w-full bg-transparent border-none text-slate-800 placeholder:text-slate-400 text-sm focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-semibold px-2 py-1 rounded bg-slate-200 text-slate-600 hover:bg-slate-300"
          >
            ESC
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {!q && (
            <div className="py-8 text-center text-slate-400 text-xs">
              Type keywords to search across international vacancies, registered worker profiles, destination country hubs, and FAQs.
            </div>
          )}

          {q && !hasResults && (
            <div className="py-8 text-center text-slate-500 text-sm">
              No matching results found for <strong className="text-slate-800">"{query}"</strong>.
              <div className="mt-2 text-xs text-slate-400">
                Try searching for "Driver", "Saudi Arabia", "Welder", or "Hospitality".
              </div>
            </div>
          )}

          {/* Jobs Results */}
          {filteredJobs.length > 0 && (
            <div>
              <div className="text-[11px] font-bold text-sky-600 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5" />
                Vacancies ({filteredJobs.length})
              </div>
              <div className="space-y-1.5">
                {filteredJobs.map((job) => (
                  <Link
                    key={job.id}
                    href={`/jobs/${job.slug}`}
                    onClick={onClose}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-sky-50/70 border border-transparent hover:border-sky-100 transition-colors group"
                  >
                    <div>
                      <div className="font-semibold text-xs text-slate-800 group-hover:text-sky-700">
                        {job.title}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {job.destinationCountry} • {job.category} • {job.salary} {job.currency}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-sky-600 group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Workers Results */}
          {filteredWorkers.length > 0 && (
            <div>
              <div className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5" />
                Worker Catalog ({filteredWorkers.length})
              </div>
              <div className="space-y-1.5">
                {filteredWorkers.map((worker) => (
                  <Link
                    key={worker.workerId}
                    href={`/employers/workers/${worker.workerId}`}
                    onClick={onClose}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-emerald-50/70 border border-transparent hover:border-emerald-100 transition-colors group"
                  >
                    <div>
                      <div className="font-semibold text-xs text-slate-800 group-hover:text-emerald-700">
                        {worker.workerId} – {worker.occupation}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {worker.totalExperience} Exp • Preferred: {worker.preferredCountry} • {worker.skills.slice(0, 2).join(", ")}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Destinations Results */}
          {filteredDestinations.length > 0 && (
            <div>
              <div className="text-[11px] font-bold text-amber-600 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" />
                Destinations ({filteredDestinations.length})
              </div>
              <div className="space-y-1.5">
                {filteredDestinations.map((dest) => (
                  <Link
                    key={dest.slug}
                    href={`/destinations/${dest.slug}`}
                    onClick={onClose}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-amber-50/70 border border-transparent hover:border-amber-100 transition-colors group"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{dest.flag}</span>
                      <div>
                        <div className="font-semibold text-xs text-slate-800 group-hover:text-amber-700">
                          {dest.name}
                        </div>
                        <div className="text-[11px] text-slate-500">
                          {dest.availableJobsCount} Verified Vacancies Available
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* FAQs Results */}
          {filteredFaqs.length > 0 && (
            <div>
              <div className="text-[11px] font-bold text-purple-600 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5" />
                Help Topics ({filteredFaqs.length})
              </div>
              <div className="space-y-1.5">
                {filteredFaqs.map((faq) => (
                  <Link
                    key={faq.id}
                    href="/faqs"
                    onClick={onClose}
                    className="block p-2.5 rounded-xl hover:bg-purple-50/70 text-xs text-slate-700 hover:text-purple-700 transition-colors"
                  >
                    {faq.question}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="p-3 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
          <span>Tip: Browse full catalog on Available Jobs page</span>
          <button onClick={onClose} className="hover:text-slate-800">
            Close Dialog
          </button>
        </div>
      </div>
    </div>
  );
}

