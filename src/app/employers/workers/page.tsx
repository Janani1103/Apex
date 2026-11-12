"use client";

import React, { useState, useMemo, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
  Search,
  Filter,
  X,
  Users,
  RotateCcw,
  ShieldCheck,
  Building2,
  ArrowRight,
  Briefcase,
  MapPin,
} from "lucide-react";
import { WorkerCard } from "@/components/employers/WorkerCard";
import { WORKERS_DATA } from "@/data/workersData";

function WorkersContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";
  const initialCountry = searchParams.get("country") || "All";

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedCountry, setSelectedCountry] = useState(initialCountry);
  const [selectedExperience, setSelectedExperience] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // STRICT PRIVACY & AVAILABILITY RULE:
  // Must satisfy Visible on Website = Yes AND Availability Status = Available
  const filteredWorkers = useMemo(() => {
    return WORKERS_DATA.filter((worker) => {
      // Must be visible and available
      if (!worker.visibleOnWebsite || worker.availabilityStatus !== "Available") {
        return false;
      }

      // Search term
      if (searchTerm.trim()) {
        const q = searchTerm.toLowerCase();
        const matchesId = worker.workerId.toLowerCase().includes(q);
        const matchesOccupation = worker.occupation.toLowerCase().includes(q);
        const matchesCategory = worker.category.toLowerCase().includes(q);
        const matchesSkills = worker.skills.some((s) => s.toLowerCase().includes(q));
        const matchesSummary = worker.summary.toLowerCase().includes(q);
        if (!matchesId && !matchesOccupation && !matchesCategory && !matchesSkills && !matchesSummary) {
          return false;
        }
      }

      // Category filter
      if (selectedCategory !== "All" && !worker.category.toLowerCase().includes(selectedCategory.toLowerCase())) {
        return false;
      }

      // Country preference filter
      if (selectedCountry !== "All" && worker.preferredCountry !== selectedCountry) {
        return false;
      }

      // Experience filter
      if (selectedExperience !== "All" && !worker.totalExperience.toLowerCase().includes(selectedExperience.toLowerCase())) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === "experience") {
        const expA = parseInt(a.totalExperience) || 0;
        const expB = parseInt(b.totalExperience) || 0;
        return expB - expA;
      }
      if (sortBy === "category") {
        return a.category.localeCompare(b.category);
      }
      // default newest / workerId
      return a.workerId.localeCompare(b.workerId);
    });
  }, [searchTerm, selectedCategory, selectedCountry, selectedExperience, sortBy]);

  const totalPages = Math.ceil(filteredWorkers.length / itemsPerPage);
  const paginatedWorkers = filteredWorkers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setSelectedCountry("All");
    setSelectedExperience("All");
    setSortBy("newest");
    setCurrentPage(1);
  };

  const hasActiveFilters =
    searchTerm !== "" ||
    selectedCategory !== "All" ||
    selectedCountry !== "All" ||
    selectedExperience !== "All";

  return (
    <div className="w-full">
      {/* SECTION 1: PAGE HEADER WITH CLEAR 2-COLUMN VISUAL SHOWCASE */}
      <section className="relative pt-32 sm:pt-36 pb-14 sm:pb-16 border-b border-slate-200/80 bg-gradient-to-b from-sky-50/70 via-white to-slate-50 overflow-hidden">
        {/* Soft background ambient dot grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#0284c70a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-center">
            {/* LEFT COLUMN: TITLE, DESCRIPTION & SEARCH CONSOLE (5 COLS) */}
            <div className="lg:col-span-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/90 border border-sky-200 text-sky-800 text-xs font-bold shadow-2xs mb-4">
                <ShieldCheck className="w-4 h-4 text-sky-600" />
                <span>Authenticated Talent Catalog • Trade Tested & Verified</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 tracking-tight leading-[1.15] mb-4">
                Discover Skilled Sri Lankan Professionals.
              </h1>

              <p className="max-w-xl mx-auto lg:mx-0 text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
                Explore our available workforce and find candidates with the skills and experience your company needs. All candidate profiles are verified and actively available for employer interviews.
              </p>

              {/* SEARCH BAR */}
              <div className="bg-white rounded-2xl shadow-xl shadow-sky-950/8 border border-slate-200/90 p-2 sm:p-2.5 flex flex-col sm:flex-row items-center gap-2 mb-4">
                <div className="flex items-center gap-2.5 px-3 flex-1 w-full">
                  <Search className="w-5 h-5 text-sky-600 shrink-0" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setCurrentPage(1);
                    }}
                    placeholder="Search by worker ID, skill, occupation (e.g. WRK-001, Welder)..."
                    className="w-full text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none bg-transparent"
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm("")}
                      className="p-1 text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <button
                  onClick={() => setCurrentPage(1)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs transition-colors shrink-0 shadow-sm shadow-sky-600/25"
                >
                  Search Workers
                </button>
              </div>

              {/* Popular Quick Search Chips */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs text-slate-500">
                <span className="font-semibold text-slate-400">Popular:</span>
                {["6G Welder", "Electrician", "Heavy Driver", "Caregiver", "Civil Foreman"].map((trade) => (
                  <button
                    key={trade}
                    type="button"
                    onClick={() => {
                      setSearchTerm(trade);
                      setCurrentPage(1);
                    }}
                    className="bg-white hover:bg-slate-50 text-slate-700 hover:text-sky-700 px-3 py-1 rounded-full border border-slate-200/80 shadow-2xs transition-all hover:scale-105 active:scale-95"
                  >
                    {trade}
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN: EXTRA-LARGE ASYMMETRIC PHOTOGRAPHIC SHOWCASE (7 COLS - NO CAPTIONS) */}
            <div className="lg:col-span-7">
              <div className="relative mx-auto w-full">
                {/* Ambient Soft Glow Aura */}
                <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-tr from-sky-400/25 via-indigo-300/20 to-emerald-300/25 rounded-[3.5rem] blur-2xl -z-10 pointer-events-none" />

                {/* Unique Asymmetric Offset Backing Base */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-100/80 via-slate-100/70 to-emerald-100/70 rounded-tl-[3.5rem] rounded-br-[3.5rem] rounded-tr-2xl rounded-bl-2xl sm:rounded-tl-[4.5rem] sm:rounded-br-[4.5rem] sm:rounded-tr-3xl sm:rounded-bl-3xl transform translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 border border-sky-200/70 -z-10" />

                {/* Main Asymmetric Image Frame (100% Clean Image, No Captions/Overlays) */}
                <div className="relative rounded-tl-[3.5rem] rounded-br-[3.5rem] rounded-tr-2xl rounded-bl-2xl sm:rounded-tl-[4.5rem] sm:rounded-br-[4.5rem] sm:rounded-tr-3xl sm:rounded-bl-3xl overflow-hidden bg-white p-3 sm:p-4 shadow-2xl shadow-sky-950/15 border border-slate-200/90 group">
                  <div className="relative w-full h-[360px] sm:h-[440px] md:h-[490px] lg:h-[530px] xl:h-[560px] rounded-tl-[2.8rem] rounded-br-[2.8rem] rounded-tr-xl rounded-bl-xl sm:rounded-tl-[3.8rem] sm:rounded-br-[3.8rem] sm:rounded-tr-2xl sm:rounded-bl-2xl overflow-hidden bg-slate-100">
                    <Image
                      src="/images/talent-catalog-banner.jpg"
                      alt="International Manpower Trade Assessment & Technical Evaluation Facility"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 65vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER CONTROLS & CATALOG RESULTS */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strict Privacy Assurance Banner */}
        <div className="mb-6 p-4 rounded-2xl bg-sky-50 border border-sky-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-700">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-sky-600 shrink-0" />
            <span>
              <strong>Candidate Privacy Notice:</strong> In compliance with international data privacy laws, sensitive personal information (passport numbers, private contact details, and residential addresses) is strictly protected and provided only through official recruitment channels upon formal employer request.
            </span>
          </div>
          <Link
            href="/employers/request"
            className="text-xs font-bold text-sky-700 hover:text-sky-800 underline shrink-0"
          >
            Request Multiple Workers
          </Link>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 mb-8 shadow-sm">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-sky-600" />
              <span className="font-heading font-bold text-sm text-slate-900">
                Filter Candidates
              </span>
              <span className="text-xs text-slate-400">
                ({filteredWorkers.length} available candidates)
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto justify-between lg:justify-end">
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="inline-flex items-center gap-1.5 text-xs text-rose-600 hover:text-rose-700 font-semibold py-1.5 px-3 rounded-lg bg-rose-50 border border-rose-100 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Clear All Filters
                </button>
              )}

              {/* Sorting */}
              <div className="flex items-center gap-2 text-xs">
                <span className="text-slate-500 font-medium">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 font-medium text-xs focus:outline-none focus:border-sky-500"
                >
                  <option value="newest">Worker ID (Ascending)</option>
                  <option value="experience">Years of Experience</option>
                  <option value="category">Job Category</option>
                </select>
              </div>
            </div>
          </div>

          {/* Filter Dropdowns Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
            {/* Job Category */}
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                Job Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-slate-50 text-slate-800 focus:outline-none focus:border-sky-500"
              >
                <option value="All">All Categories</option>
                <option value="Electrical">Electrical</option>
                <option value="Mechanical">Mechanical & Welding</option>
                <option value="Hospitality">Hospitality</option>
                <option value="Driving">Heavy Driving</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Construction">Construction</option>
                <option value="Technical">Technical & HVAC</option>
                <option value="Manufacturing">Manufacturing & CNC</option>
                <option value="General Labour">General Labour</option>
              </select>
            </div>

            {/* Country Preference */}
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                Preferred Destination
              </label>
              <select
                value={selectedCountry}
                onChange={(e) => {
                  setSelectedCountry(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-slate-50 text-slate-800 focus:outline-none focus:border-sky-500"
              >
                <option value="All">All Countries</option>
                <option value="UAE">🇦🇪 UAE</option>
                <option value="Saudi Arabia">🇸🇦 Saudi Arabia</option>
                <option value="Qatar">🇶🇦 Qatar</option>
                <option value="Kuwait">🇰🇼 Kuwait</option>
                <option value="Oman">🇴🇲 Oman</option>
                <option value="Japan">🇯🇵 Japan</option>
                <option value="Singapore">🇸🇬 Singapore</option>
              </select>
            </div>

            {/* Experience */}
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                Experience Level
              </label>
              <select
                value={selectedExperience}
                onChange={(e) => {
                  setSelectedExperience(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-slate-50 text-slate-800 focus:outline-none focus:border-sky-500"
              >
                <option value="All">Any Experience</option>
                <option value="3">3+ Years</option>
                <option value="5">5+ Years</option>
                <option value="7">7+ Years</option>
              </select>
            </div>
          </div>
        </div>

        {/* SECTION 4: WORKER SEARCH RESULTS */}
        {filteredWorkers.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-2xl mx-auto my-8 shadow-sm">
            <div className="w-16 h-16 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">
              No Worker Profiles Match Your Search
            </h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto mb-6 leading-relaxed">
              We have additional unlisted candidates currently completing trade test evaluations. You can submit a custom manpower request to our recruitment desk.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={clearFilters}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs transition-colors"
              >
                Clear Filters
              </button>
              <Link
                href="/employers/request"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold text-xs transition-colors"
              >
                Submit Custom Manpower Request
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {paginatedWorkers.map((worker) => (
                <WorkerCard key={worker.workerId} worker={worker} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex items-center justify-center gap-2">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50"
                >
                  Previous
                </button>

                {[...Array(totalPages)].map((_, i) => {
                  const p = i + 1;
                  return (
                    <button
                      key={p}
                      onClick={() => setCurrentPage(p)}
                      className={`w-9 h-9 rounded-xl text-xs font-bold transition-colors ${
                        currentPage === p
                          ? "bg-sky-600 text-white shadow-sm"
                          : "border border-slate-200 text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {p}
                    </button>
                  );
                })}

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}

        {/* SECTION 5: REQUEST WORKER CTA */}
        <div className="mt-16 bg-gradient-to-r from-sky-900 to-slate-900 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-xl">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider block mb-1">
              Enterprise Bulk Hiring
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading mb-2">
              Looking for Multiple Workers or a Specialized Trade Squad?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Submit your company's manpower requisition. We coordinate mass trade tests in Colombo and handle candidate mobilization from start to finish.
            </p>
          </div>

          <Link
            href="/employers/request"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm shrink-0 shadow-lg shadow-sky-500/20 transition-all hover:scale-105"
          >
            <Building2 className="w-4 h-4" />
            Submit Employer Request
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default function BrowseWorkersPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen pt-36 pb-20 text-center text-slate-500 text-sm">
          Loading worker catalog...
        </div>
      }
    >
      <WorkersContent />
    </Suspense>
  );
}
