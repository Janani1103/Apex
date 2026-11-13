"use client";

import React, { useState, useMemo, useRef, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
  Search,
  Filter,
  X,
  Briefcase,
  MapPin,
  Clock,
  ArrowUpDown,
  RotateCcw,
  MessageCircle,
} from "lucide-react";
import { JobCard } from "@/components/jobs/JobCard";
import { JOBS_DATA, JOB_CATEGORIES } from "@/data/jobsData";
import { DESTINATIONS_DATA } from "@/data/destinationsData";

function JobsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";
  const initialCountry = searchParams.get("country") || "All";

  // Filter States
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(initialCountry);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedExperience, setSelectedExperience] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [sortBy, setSortBy] = useState("latest");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filter Logic
  const filteredJobs = useMemo(() => {
    return JOBS_DATA.filter((job) => {
      // Must be active
      if (job.status !== "Active") return false;

      // Search term
      if (searchTerm.trim()) {
        const q = searchTerm.toLowerCase();
        const matchesTitle = job.title.toLowerCase().includes(q);
        const matchesCountry = job.destinationCountry.toLowerCase().includes(q);
        const matchesCategory = job.category.toLowerCase().includes(q);
        const matchesRef = job.referenceId.toLowerCase().includes(q);
        const matchesDesc = job.description.toLowerCase().includes(q);
        if (!matchesTitle && !matchesCountry && !matchesCategory && !matchesRef && !matchesDesc) {
          return false;
        }
      }

      // Country filter
      if (selectedCountry !== "All" && job.destinationCountry !== selectedCountry) {
        return false;
      }

      // Category filter
      if (selectedCategory !== "All" && job.category !== selectedCategory) {
        return false;
      }

      // Experience filter
      if (selectedExperience !== "All" && !job.experience.toLowerCase().includes(selectedExperience.toLowerCase())) {
        return false;
      }

      // Employment type filter
      if (selectedType !== "All" && job.employmentType !== selectedType) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === "country") return a.destinationCountry.localeCompare(b.destinationCountry);
      if (sortBy === "category") return a.category.localeCompare(b.category);
      // latest
      return new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime();
    });
  }, [searchTerm, selectedCountry, selectedCategory, selectedExperience, selectedType, sortBy]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);
  const paginatedJobs = filteredJobs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const listingsRef = useRef<HTMLDivElement>(null);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    if (listingsRef.current) {
      const navOffset = 90;
      const elementPosition = listingsRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCountry("All");
    setSelectedCategory("All");
    setSelectedExperience("All");
    setSelectedType("All");
    setSortBy("latest");
    setCurrentPage(1);
  };

  const hasActiveFilters =
    searchTerm !== "" ||
    selectedCountry !== "All" ||
    selectedCategory !== "All" ||
    selectedExperience !== "All" ||
    selectedType !== "All";

  return (
    <div className="w-full">
      {/* SECTION 1: PAGE HERO (WITH BACKGROUND IMAGE 13.JPEG) */}
      <section className="relative pt-36 pb-20 overflow-hidden border-b border-slate-200/60 select-none min-h-[50vh] flex items-center justify-center">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/13.jpeg"
            alt="Sri Lankan Job Seeker Gateway - Apex World"
            fill
            priority
            className="object-cover object-center brightness-[0.98] contrast-[1.03]"
            sizes="100vw"
            quality={92}
          />
          {/* Subtle multi-layer gradient overlays: keeps image clearly visible while guaranteeing crisp text & search bar contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-white/15 to-white" />
          <div className="absolute inset-0 bg-sky-950/20 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_65%_at_50%_48%,rgba(255,255,255,0.85),transparent_85%)] pointer-events-none" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
          <span className="text-xs font-bold text-sky-900 tracking-wider uppercase bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full border border-sky-200/80 shadow-md inline-flex items-center gap-2 mb-4">
            Sri Lankan Job Seeker Gateway
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-slate-900 tracking-tight mb-4 drop-shadow-xs">
            Find Your Next Opportunity Around the World.
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-700 mb-8 leading-relaxed font-medium">
            Explore international job opportunities that match your skills, qualifications and career goals with verified employer sponsorships.
          </p>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-200/90 p-2 sm:p-3 flex flex-col sm:flex-row items-center gap-2 transition-shadow hover:shadow-2xl">
            <div className="flex items-center gap-2.5 px-3 flex-1 w-full">
              <Search className="w-5 h-5 text-sky-600 shrink-0" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search jobs, countries or skills (e.g. Electrician, Dubai, Driver)..."
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
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs transition-colors shrink-0 shadow-sm"
            >
              Search Vacancies
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2 & 3: FILTERS & JOB LISTINGS */}
      <section ref={listingsRef} id="job-listings" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters Controls Panel */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 mb-8 shadow-sm">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-sky-600" />
              <span className="font-heading font-bold text-sm text-slate-900">
                Filter Vacancies
              </span>
              <span className="text-xs text-slate-400">
                ({filteredJobs.length} active positions found)
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
                  <option value="latest">Latest Vacancies</option>
                  <option value="country">Destination Country</option>
                  <option value="category">Job Category</option>
                </select>
              </div>
            </div>
          </div>

          {/* Filter Dropdowns Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-4">
            {/* Destination Country */}
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                Destination Country
              </label>
              <select
                value={selectedCountry}
                onChange={(e) => {
                  setSelectedCountry(e.target.value);
                  setCurrentPage(1);
                }}
                className={`w-full px-3 py-2 rounded-xl border text-xs transition-colors focus:outline-none focus:border-sky-500 ${
                  selectedCountry !== "All"
                    ? "border-sky-500 bg-sky-50/50 text-sky-900 font-semibold shadow-2xs"
                    : "border-slate-200 bg-slate-50 text-slate-800"
                }`}
              >
                <option value="All">All Countries</option>
                <option value="United Arab Emirates">🇦🇪 United Arab Emirates</option>
                <option value="Saudi Arabia">🇸🇦 Saudi Arabia</option>
                <option value="Qatar">🇶🇦 Qatar</option>
                <option value="Kuwait">🇰🇼 Kuwait</option>
                <option value="Oman">🇴🇲 Oman</option>
                <option value="Japan">🇯🇵 Japan</option>
                <option value="Singapore">🇸🇬 Singapore</option>
              </select>
            </div>

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
                className={`w-full px-3 py-2 rounded-xl border text-xs transition-colors focus:outline-none focus:border-sky-500 ${
                  selectedCategory !== "All"
                    ? "border-sky-500 bg-sky-50/50 text-sky-900 font-semibold shadow-2xs"
                    : "border-slate-200 bg-slate-50 text-slate-800"
                }`}
              >
                <option value="All">All Categories</option>
                <option value="Construction Workers">Construction Workers</option>
                <option value="Drivers">Drivers & Heavy Transport</option>
                <option value="Electricians">Electricians</option>
                <option value="Welders">Welders</option>
                <option value="Hotel & Hospitality Staff">Hotel & Hospitality Staff</option>
                <option value="Housekeeping Staff">Housekeeping Staff</option>
                <option value="Healthcare Support">Healthcare Support</option>
                <option value="Factory Workers">Factory Workers</option>
                <option value="Technicians">Technicians</option>
                <option value="Skilled Labourers">Skilled Labourers</option>
              </select>
            </div>

            {/* Experience */}
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                Experience Requirement
              </label>
              <select
                value={selectedExperience}
                onChange={(e) => {
                  setSelectedExperience(e.target.value);
                  setCurrentPage(1);
                }}
                className={`w-full px-3 py-2 rounded-xl border text-xs transition-colors focus:outline-none focus:border-sky-500 ${
                  selectedExperience !== "All"
                    ? "border-sky-500 bg-sky-50/50 text-sky-900 font-semibold shadow-2xs"
                    : "border-slate-200 bg-slate-50 text-slate-800"
                }`}
              >
                <option value="All">Any Experience</option>
                <option value="Entry-level">Entry-level</option>
                <option value="1–3 Years">1–3 Years</option>
                <option value="3–5 Years">3–5 Years</option>
                <option value="5+ Years">5+ Years</option>
              </select>
            </div>

            {/* Employment Type */}
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                Employment Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => {
                  setSelectedType(e.target.value);
                  setCurrentPage(1);
                }}
                className={`w-full px-3 py-2 rounded-xl border text-xs transition-colors focus:outline-none focus:border-sky-500 ${
                  selectedType !== "All"
                    ? "border-sky-500 bg-sky-50/50 text-sky-900 font-semibold shadow-2xs"
                    : "border-slate-200 bg-slate-50 text-slate-800"
                }`}
              >
                <option value="All">All Types</option>
                <option value="Full-time">Full-time (Standard 2-Yr)</option>
                <option value="Contract">Contract / Specified</option>
              </select>
            </div>
          </div>

          {/* Active Filter Badges/Pills (Dismissable) */}
          {hasActiveFilters && (
            <div className="pt-4 mt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mr-1">
                Active Filters:
              </span>

              {searchTerm.trim() && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-200 shadow-2xs">
                  <span>Search: &ldquo;{searchTerm}&rdquo;</span>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchTerm("");
                      setCurrentPage(1);
                    }}
                    className="hover:text-sky-900 rounded-full p-0.5 hover:bg-sky-200/60 transition-colors"
                    title="Remove keyword filter"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {selectedCountry !== "All" && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-200 shadow-2xs">
                  <span>Country: {selectedCountry}</span>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCountry("All");
                      setCurrentPage(1);
                    }}
                    className="hover:text-sky-900 rounded-full p-0.5 hover:bg-sky-200/60 transition-colors"
                    title="Remove country filter"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {selectedCategory !== "All" && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-200 shadow-2xs">
                  <span>Category: {selectedCategory}</span>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategory("All");
                      setCurrentPage(1);
                    }}
                    className="hover:text-sky-900 rounded-full p-0.5 hover:bg-sky-200/60 transition-colors"
                    title="Remove category filter"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {selectedExperience !== "All" && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-200 shadow-2xs">
                  <span>Exp: {selectedExperience}</span>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedExperience("All");
                      setCurrentPage(1);
                    }}
                    className="hover:text-sky-900 rounded-full p-0.5 hover:bg-sky-200/60 transition-colors"
                    title="Remove experience filter"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {selectedType !== "All" && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-200 shadow-2xs">
                  <span>Type: {selectedType}</span>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedType("All");
                      setCurrentPage(1);
                    }}
                    className="hover:text-sky-900 rounded-full p-0.5 hover:bg-sky-200/60 transition-colors"
                    title="Remove type filter"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              <button
                type="button"
                onClick={clearFilters}
                className="text-xs text-rose-600 hover:text-rose-700 font-semibold underline underline-offset-2 ml-1 transition-colors"
              >
                Reset All
              </button>
            </div>
          )}
        </div>

        {/* SECTION 5: NO JOBS FOUND EMPTY STATE */}
        {filteredJobs.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-2xl mx-auto my-8 shadow-sm">
            <div className="w-16 h-16 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-8 h-8" />
            </div>
            <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">
              No Vacancies Found
            </h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto mb-6 leading-relaxed">
              Currently, there are no vacancies matching your search. Please explore other opportunities or contact our recruitment team directly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={clearFilters}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs transition-colors"
              >
                Clear All Filters
              </button>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold text-xs transition-colors"
              >
                Contact Recruitment Officers
              </Link>
            </div>
          </div>
        ) : (
          <>
            {/* Job Listing Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>

            {/* SECTION 4: PAGINATION */}
            {totalPages > 1 && (
              <div className="mt-12 flex items-center justify-center gap-2">
                <button
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors"
                >
                  Previous
                </button>

                {[...Array(totalPages)].map((_, i) => {
                  const p = i + 1;
                  return (
                    <button
                      key={p}
                      onClick={() => handlePageChange(p)}
                      className={`w-9 h-9 rounded-xl text-xs font-bold transition-all ${
                        currentPage === p
                          ? "bg-sky-600 text-white shadow-sm scale-105"
                          : "border border-slate-200 text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {p}
                    </button>
                  );
                })}

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
}

export default function AvailableJobsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen pt-36 pb-20 text-center text-slate-500 text-sm">
          Loading available opportunities...
        </div>
      }
    >
      <JobsContent />
    </Suspense>
  );
}
