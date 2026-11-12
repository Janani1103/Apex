"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Building2,
  Users,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  ShieldCheck,
  Send,
  Calendar,
  Briefcase,
  ArrowRight,
} from "lucide-react";

interface EmployerRequestFormProps {
  initialWorkerId?: string;
  initialCategory?: string;
}

export function EmployerRequestForm({
  initialWorkerId = "",
  initialCategory = "",
}: EmployerRequestFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    // Company Information
    companyName: "",
    companyCountry: "United Arab Emirates",
    companyWebsite: "",
    contactPerson: "",
    email: "",
    phone: "",
    whatsapp: "",
    companyAddress: "",

    // Worker Requirements
    jobCategory: initialCategory || "Construction",
    skills: "",
    numberOfWorkers: 5,
    requiredExperience: "3–5 Years",
    preferredGender: "Any",
    preferredQualifications: "",
    preferredLanguages: "English & Sinhala",
    expectedStartDate: "",
    workerId: initialWorkerId || "",
    additionalNotes: "",
  });

  const updateField = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName || !formData.contactPerson || !formData.email || !formData.phone) {
      setErrorMessage("Please complete all required company and contact information fields.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/employer-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (result.success) {
        setReferenceId(result.referenceId);
        setSubmitSuccess(true);
      } else {
        setErrorMessage(result.error || "Failed to submit request. Please try again.");
      }
    } catch (err) {
      setErrorMessage("Network error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    const whatsappText = encodeURIComponent(
      `Hello Apex World, I have submitted an Employer Manpower Request for ${formData.companyName} (${formData.companyCountry}). Request Reference ID: ${referenceId}.`
    );

    return (
      <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-xl text-center animate-fadeIn">
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 uppercase tracking-wider">
          Request Received
        </span>

        <h2 className="text-2xl md:text-3xl font-bold font-heading text-slate-900 mt-3 mb-2">
          Your Worker Request Has Been Submitted!
        </h2>

        <p className="text-slate-600 text-sm max-w-lg mx-auto mb-6">
          Thank you for trusting Apex World. Our international business development directorate will review your manpower specifications and contact you shortly.
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-8 max-w-md mx-auto">
          <span className="text-xs uppercase font-semibold text-slate-400 block mb-1">
            Official Request Reference Number
          </span>
          <span className="font-mono text-2xl font-bold text-sky-600 tracking-wide select-all">
            {referenceId}
          </span>
          <p className="text-[11px] text-slate-400 mt-2">
            A confirmation dispatch has been sent to our client desk.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`https://wa.me/94771234567?text=${whatsappText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all shadow-md shadow-emerald-600/20"
          >
            <MessageCircle className="w-4 h-4" />
            Connect via Official WhatsApp
          </a>

          <Link
            href="/employers/workers"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors"
          >
            Browse More Candidates
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-8 md:p-9 space-y-8"
    >
      {/* Selected Target Worker Banner */}
      {formData.workerId && (
        <div className="p-4 bg-sky-50 border border-sky-200 rounded-2xl flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-ping" />
            <span className="text-slate-700">
              Inquiring about specific candidate:{" "}
              <strong className="text-sky-800 font-mono text-sm">{formData.workerId}</strong>
            </span>
          </div>
          <button
            type="button"
            onClick={() => updateField("workerId", "")}
            className="text-slate-400 hover:text-slate-600 text-xs font-medium"
          >
            Clear Candidate ID
          </button>
        </div>
      )}

      {errorMessage && (
        <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* SECTION 1: Company Information */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
          <Building2 className="w-5 h-5 text-sky-600" />
          <h3 className="font-heading font-bold text-lg text-slate-900">
            1. Company Information
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Company / Enterprise Name *
            </label>
            <input
              type="text"
              required
              value={formData.companyName}
              onChange={(e) => updateField("companyName", e.target.value)}
              placeholder="e.g. Al-Mansoor Contracting LLC"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Country of Operations *
            </label>
            <select
              value={formData.companyCountry}
              onChange={(e) => updateField("companyCountry", e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none"
            >
              <option value="United Arab Emirates">United Arab Emirates</option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Qatar">Qatar</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Oman">Oman</option>
              <option value="Japan">Japan</option>
              <option value="Singapore">Singapore</option>
              <option value="Other">Other Country</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Contact Person Full Name *
            </label>
            <input
              type="text"
              required
              value={formData.contactPerson}
              onChange={(e) => updateField("contactPerson", e.target.value)}
              placeholder="e.g. Tariq Al-Hashimi (HR Director)"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Corporate Business Email *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => updateField("email", e.target.value)}
              placeholder="e.g. hr@company.ae"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Telephone Number *
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => updateField("phone", e.target.value)}
              placeholder="e.g. +971 4 123 4567"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              WhatsApp Contact Number
            </label>
            <input
              type="tel"
              value={formData.whatsapp}
              onChange={(e) => updateField("whatsapp", e.target.value)}
              placeholder="e.g. +971 50 123 4567"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Company Headquarters / Project Address
            </label>
            <input
              type="text"
              value={formData.companyAddress}
              onChange={(e) => updateField("companyAddress", e.target.value)}
              placeholder="Building, Business Bay, Dubai"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none"
            />
          </div>
        </div>
      </div>

      {/* SECTION 2: Worker Requirements */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
          <Users className="w-5 h-5 text-sky-600" />
          <h3 className="font-heading font-bold text-lg text-slate-900">
            2. Manpower & Skill Requirements
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Primary Job Category Required *
            </label>
            <select
              value={formData.jobCategory}
              onChange={(e) => updateField("jobCategory", e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none"
            >
              <option value="Construction">Construction & Civil Engineering</option>
              <option value="Mechanical & Welding">Mechanical & 6G Pipe Welding</option>
              <option value="Electrical">Industrial & Commercial Electrical</option>
              <option value="Heavy Driving">Heavy Truck & Trailer Driving</option>
              <option value="Hospitality">Hotel, Culinary & Hospitality Staff</option>
              <option value="Healthcare">Certified Healthcare & Caregivers</option>
              <option value="Manufacturing">Precision Machining & Factory Assembly</option>
              <option value="Technical">HVAC & Facility Maintenance</option>
              <option value="General Labour">General Logistics & Site Labour</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Number of Workers Required *
            </label>
            <input
              type="number"
              min={1}
              max={500}
              value={formData.numberOfWorkers}
              onChange={(e) => updateField("numberOfWorkers", parseInt(e.target.value) || 1)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Required Minimum Experience
            </label>
            <select
              value={formData.requiredExperience}
              onChange={(e) => updateField("requiredExperience", e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none"
            >
              <option value="1–2 Years">1–2 Years</option>
              <option value="3–5 Years">3–5 Years</option>
              <option value="5+ Years">5+ Years Senior / Master Level</option>
              <option value="Any Experience Level">Any Experience Level</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Expected Deployment / Mobilization Date
            </label>
            <input
              type="date"
              value={formData.expectedStartDate}
              onChange={(e) => updateField("expectedStartDate", e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Specific Technical Skills & Tool Familiarity
            </label>
            <input
              type="text"
              value={formData.skills}
              onChange={(e) => updateField("skills", e.target.value)}
              placeholder="e.g. SMAW/GTAW 6G certified, Fanuc CNC controllers, Doka formwork systems..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Detailed Scope of Work & Additional Company Requirements
            </label>
            <textarea
              rows={4}
              value={formData.additionalNotes}
              onChange={(e) => updateField("additionalNotes", e.target.value)}
              placeholder="Describe your company's project timeline, accommodation arrangements, trade test preferences, or specific work conditions..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none"
            />
          </div>
        </div>
      </div>

      {/* Privacy note */}
      <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-center gap-3 text-xs text-slate-600">
        <ShieldCheck className="w-5 h-5 text-sky-600 shrink-0" />
        <span>
          Apex World coordinates all statutory job order approvals, embassy endorsements, trade skill demonstrations, and worker departure clearance in full compliance with host country labor laws and the Sri Lanka Bureau of Foreign Employment (SLBFE).
        </span>
      </div>

      {/* Submit Button */}
      <div className="text-right">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-700 disabled:bg-sky-400 text-white font-bold text-sm transition-all shadow-lg shadow-sky-600/25"
        >
          {isSubmitting ? (
            <>
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Submitting Manpower Request...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Submit Employer Request
            </>
          )}
        </button>
      </div>
    </form>
  );
}

