"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Users,
  Search,
  Download,
  Calendar,
  Briefcase,
  MapPin,
  FileText,
  Mail,
  RefreshCw,
  X,
  ShieldCheck,
  CheckCircle2,
  Lock,
  KeyRound,
  LogOut,
  AlertCircle,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";
import { JobApplication } from "@/types";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export default function AdminApplicationsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [pinInput, setPinInput] = useState("");
  const [showPin, setShowPin] = useState(false);
  const [authError, setAuthError] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [selectedApp, setSelectedApp] = useState<JobApplication | null>(null);

  // Check existing session on load
  const checkAuth = async () => {
    try {
      const res = await fetch("/api/admin/auth");
      const data = await res.json();
      if (data.authenticated) {
        setIsAuthenticated(true);
        fetchApplications();
      } else {
        setIsAuthenticated(false);
      }
    } catch {
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pinInput.trim()) {
      setAuthError("Please enter the Admin Security Passcode.");
      return;
    }

    setIsVerifying(true);
    setAuthError("");

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pin: pinInput }),
      });

      const data = await res.json();
      if (data.success) {
        setIsAuthenticated(true);
        setPinInput("");
        fetchApplications();
      } else {
        setAuthError(data.error || "Incorrect Passcode. Access Denied.");
      }
    } catch {
      setAuthError("Authentication request failed. Please try again.");
    } finally {
      setIsVerifying(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/auth", { method: "DELETE" });
    } finally {
      setIsAuthenticated(false);
      setApplications([]);
      setSelectedApp(null);
    }
  };

  const fetchApplications = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/applications");
      if (res.status === 401) {
        setIsAuthenticated(false);
        return;
      }
      const data = await res.json();
      if (data.success && Array.isArray(data.applications)) {
        setApplications(data.applications);
      }
    } catch (err) {
      console.error("Failed to fetch applications:", err);
    } finally {
      setLoading(false);
    }
  };

  const filtered = applications.filter((app) => {
    if (selectedCountry !== "All" && app.preferredCountry !== selectedCountry) {
      return false;
    }
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      const matchName = app.fullName.toLowerCase().includes(q);
      const matchRef = app.referenceId.toLowerCase().includes(q);
      const matchJob = (app.applyingJob || "").toLowerCase().includes(q);
      const matchPhone = (app.whatsapp || "").toLowerCase().includes(q);
      return matchName || matchRef || matchJob || matchPhone;
    }
    return true;
  });

  const countries = Array.from(
    new Set(applications.map((a) => a.preferredCountry).filter(Boolean))
  );

  // 1. LOADING INITIAL AUTH STATUS
  if (isAuthenticated === null) {
    return (
      <div className="w-full min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="text-center text-slate-400">
          <RefreshCw className="w-8 h-8 animate-spin mx-auto text-sky-500 mb-3" />
          <p className="text-xs uppercase tracking-wider font-semibold">Verifying Security Session...</p>
        </div>
      </div>
    );
  }

  // 2. SECURITY PIN LOCKSCREEN (When not authenticated)
  if (!isAuthenticated) {
    return (
      <div className="w-full min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4 pt-24 pb-20">
        <div className="max-w-md w-full bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200/90 p-8 shadow-2xl relative overflow-hidden animate-fadeIn">
          {/* Top Blue Accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600" />

          {/* Icon Header */}
          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center mx-auto mb-4 text-sky-700 shadow-inner">
              <Lock className="w-8 h-8" />
            </div>

            <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200 inline-block mb-2">
              Protected Area
            </span>

            <h2 className="text-2xl font-black font-heading text-slate-900 tracking-tight">
              Management Portal
            </h2>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Restricted access to candidate personal data and recruitment files. Please enter your secret admin passcode to continue.
            </p>
          </div>

          {/* Passcode Form */}
          <form onSubmit={handleLogin} className="mt-7 space-y-4">
            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Admin Security Passcode
              </label>
              <div className="relative">
                <input
                  type={showPin ? "text" : "password"}
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  placeholder="Enter Secret Passcode..."
                  autoFocus
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-slate-50 text-slate-900 focus:outline-none focus:border-sky-600 focus:bg-white transition-colors tracking-wide pr-11"
                />
                <button
                  type="button"
                  onClick={() => setShowPin(!showPin)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                  title={showPin ? "Hide Passcode" : "Show Passcode"}
                >
                  {showPin ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {authError && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center gap-2 animate-fadeIn">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isVerifying}
              className="w-full py-3 px-6 rounded-xl bg-slate-900 hover:bg-sky-600 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-sky-600/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isVerifying ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Verifying Passcode...</span>
                </>
              ) : (
                <>
                  <KeyRound className="w-4 h-4" />
                  <span>Unlock Applications Portal</span>
                </>
              )}
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
            <span>Apex World Manpower Systems</span>
            <Link href="/" className="hover:text-sky-600 underline">
              Return to Website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // 3. AUTHENTICATED ADMIN APPLICATIONS DASHBOARD
  return (
    <div className="w-full min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-sky-100 text-sky-800 uppercase tracking-wider">
                Authorized Session
              </span>
              <span className="text-xs text-slate-400">Persistent Database Storage</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 tracking-tight">
              Candidate Applications Portal
            </h1>
            <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
              Review and manage incoming candidate job applications submitted via Apex World.
            </p>
          </div>

          <div className="flex items-center gap-2.5 flex-wrap">
            <button
              onClick={fetchApplications}
              disabled={loading}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 text-xs font-semibold shadow-2xs transition-colors"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
              <span>Refresh</span>
            </button>

            <a
              href="/api/applications/export"
              download
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-sky-600 text-white text-xs font-bold shadow-sm transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export to Excel / CSV</span>
            </a>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 text-xs font-semibold transition-colors"
              title="Lock and End Session"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Log Out</span>
            </button>
          </div>
        </div>

        {/* Filters and Stats Bar */}
        <div className="my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
            <span className="text-[11px] uppercase font-bold text-slate-400 block">Total Applications</span>
            <span className="text-2xl font-black font-heading text-slate-900">{applications.length}</span>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
            <span className="text-[11px] uppercase font-bold text-slate-400 block">Unique Nationalities</span>
            <span className="text-2xl font-black font-heading text-sky-700">Sri Lankan</span>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
            <span className="text-[11px] uppercase font-bold text-slate-400 block">Local Disk Sync</span>
            <span className="text-sm font-bold text-emerald-700 flex items-center gap-1 mt-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Active (JSON + CSV)
            </span>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
            <span className="text-[11px] uppercase font-bold text-slate-400 block">Access Control</span>
            <span className="text-sm font-bold text-slate-800 flex items-center gap-1 mt-1">
              <ShieldCheck className="w-4 h-4 text-sky-600" />
              Passcode Protected
            </span>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 mb-6 shadow-2xs flex flex-col sm:flex-row items-center gap-3">
          <div className="flex items-center gap-2.5 px-3 py-2 bg-slate-50 rounded-xl border border-slate-200/80 flex-1 w-full text-xs">
            <Search className="w-4 h-4 text-slate-400 shrink-0" />
            <input
              type="text"
              placeholder="Search by candidate name, reference ID, phone number or job title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent focus:outline-none text-slate-800 placeholder:text-slate-400"
            />
            {searchTerm && (
              <button onClick={() => setSearchTerm("")} className="text-slate-400 hover:text-slate-600">
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="w-full sm:w-auto">
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full sm:w-48 px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 text-slate-700 focus:outline-none"
            >
              <option value="All">All Destination Countries</option>
              {countries.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Table of Applications */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          {filtered.length === 0 ? (
            <div className="p-16 text-center text-slate-500">
              <FileText className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="font-heading font-bold text-base text-slate-800">No applications found</h3>
              <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                {applications.length === 0
                  ? "When candidate applications are submitted on the website, they will appear here automatically."
                  : "No applications match your search filter."}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200 text-slate-500 uppercase tracking-wider text-[10px] font-bold">
                    <th className="p-4">Reference ID</th>
                    <th className="p-4">Candidate Name</th>
                    <th className="p-4">Applying For</th>
                    <th className="p-4">Destination</th>
                    <th className="p-4">Contact (WhatsApp)</th>
                    <th className="p-4">Experience</th>
                    <th className="p-4">Date</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {filtered.map((app) => (
                    <tr
                      key={app.id || app.referenceId}
                      className="hover:bg-slate-50/70 transition-colors cursor-pointer"
                      onClick={() => setSelectedApp(app)}
                    >
                      <td className="p-4 font-mono font-bold text-sky-700 whitespace-nowrap">
                        {app.referenceId}
                      </td>
                      <td className="p-4 font-bold text-slate-900 whitespace-nowrap">
                        {app.fullName}
                      </td>
                      <td className="p-4 font-medium max-w-xs truncate">
                        {app.applyingJob || app.mainOccupation}
                      </td>
                      <td className="p-4 whitespace-nowrap">
                        <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 font-semibold text-[11px]">
                          {app.preferredCountry}
                        </span>
                      </td>
                      <td className="p-4 whitespace-nowrap">
                        <a
                          href={`https://wa.me/${app.whatsapp.replace(/[^0-9]/g, "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 text-emerald-700 hover:underline font-semibold"
                        >
                          <WhatsAppIcon className="w-3.5 h-3.5" />
                          <span>{app.whatsapp}</span>
                        </a>
                      </td>
                      <td className="p-4 whitespace-nowrap text-slate-500">
                        {app.yearsOfExperience}
                      </td>
                      <td className="p-4 whitespace-nowrap text-slate-400">
                        {app.submittedAt ? new Date(app.submittedAt).toLocaleDateString() : "Recent"}
                      </td>
                      <td className="p-4 text-right whitespace-nowrap">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedApp(app);
                          }}
                          className="px-3 py-1.5 rounded-lg bg-sky-50 text-sky-700 hover:bg-sky-100 font-bold text-xs"
                        >
                          View Bio
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Candidate Profile Modal */}
      {selectedApp && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-slate-200 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 animate-fadeIn">
            <div className="flex items-start justify-between pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-mono font-bold text-sky-700 block">
                  {selectedApp.referenceId}
                </span>
                <h3 className="text-xl font-bold font-heading text-slate-900 mt-0.5">
                  {selectedApp.fullName}
                </h3>
                <p className="text-xs text-slate-500">
                  Applied for: <strong>{selectedApp.applyingJob}</strong> • {selectedApp.preferredCountry}
                </p>
              </div>

              <button
                onClick={() => setSelectedApp(null)}
                className="p-1 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-6 space-y-6 text-xs text-slate-700">
              {/* Personal Details */}
              <div>
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-3 text-slate-400">
                  Personal Information
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Date of Birth</span>
                    <strong className="text-slate-800">{selectedApp.dob || "N/A"}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Gender</span>
                    <strong className="text-slate-800">{selectedApp.gender || "Male"}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Nationality</span>
                    <strong className="text-slate-800">{selectedApp.nationality || "Sri Lankan"}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">City / District</span>
                    <strong className="text-slate-800">{selectedApp.city}</strong>
                  </div>
                  <div className="col-span-2">
                    <span className="text-slate-400 block text-[10px] uppercase">Address</span>
                    <span className="text-slate-800">{selectedApp.currentAddress || "Not provided"}</span>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-3 text-slate-400">
                  Contact Details
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={`https://wa.me/${selectedApp.whatsapp.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between text-emerald-800 font-bold"
                  >
                    <div className="flex items-center gap-2">
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>{selectedApp.whatsapp}</span>
                    </div>
                    <span className="text-[10px] font-semibold bg-emerald-600 text-white px-2 py-0.5 rounded-md">Open WhatsApp</span>
                  </a>

                  <a
                    href={`mailto:${selectedApp.email}`}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2 text-slate-700 font-semibold"
                  >
                    <Mail className="w-4 h-4 text-slate-400" />
                    <span className="truncate">{selectedApp.email}</span>
                  </a>
                </div>
              </div>

              {/* Skills & Experience */}
              <div>
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-3 text-slate-400">
                  Qualifications & Skills
                </h4>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Primary Trade / Occupation:</span>
                    <strong className="text-slate-900">{selectedApp.mainOccupation}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Experience Duration:</span>
                    <strong className="text-slate-900">{selectedApp.yearsOfExperience}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Highest Education:</span>
                    <strong className="text-slate-900">{selectedApp.highestEducation}</strong>
                  </div>
                  {selectedApp.skills && selectedApp.skills.length > 0 && (
                    <div className="pt-2 border-t border-slate-200">
                      <span className="text-slate-500 block mb-1.5">Trade Skills:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedApp.skills.map((s, idx) => (
                          <span key={idx} className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700 text-[11px] font-medium">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Documents Status */}
              <div>
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-3 text-slate-400">
                  Attached Documents
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-white border border-slate-200">
                    <span className="text-[10px] text-slate-400 block uppercase">Curriculum Vitae (CV)</span>
                    <strong className="text-slate-800 text-xs truncate block mt-0.5">
                      {selectedApp.documents?.cvName || "File attached with application"}
                    </strong>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200">
                    <span className="text-[10px] text-slate-400 block uppercase">Passport Copy</span>
                    <strong className="text-slate-800 text-xs truncate block mt-0.5">
                      {selectedApp.documents?.passportName || "File attached with application"}
                    </strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-2">
              <button
                onClick={() => setSelectedApp(null)}
                className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
