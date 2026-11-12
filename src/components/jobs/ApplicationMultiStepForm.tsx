"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  User,
  Briefcase,
  Wrench,
  GraduationCap,
  FileUp,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  UploadCloud,
  Trash2,
  FileText,
  AlertCircle,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";

interface ApplicationMultiStepFormProps {
  initialJobSlug?: string;
  initialJobTitle?: string;
  initialCountry?: string;
  initialCategory?: string;
}

export function ApplicationMultiStepForm({
  initialJobSlug = "",
  initialJobTitle = "",
  initialCountry = "",
  initialCategory = "",
}: ApplicationMultiStepFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Form State
  const [formData, setFormData] = useState({
    // Step 1: Personal
    fullName: "",
    dob: "",
    gender: "Male",
    nationality: "Sri Lankan",
    currentAddress: "",
    city: "",
    email: "",
    whatsapp: "",
    altPhone: "",

    // Step 2: Job Preferences
    preferredCountry: initialCountry || "United Arab Emirates",
    preferredCategory: initialCategory || "Construction",
    applyingJob: initialJobTitle || "General Manpower Pool",
    applyingJobSlug: initialJobSlug,
    preferredEmploymentType: "Full-time",
    expectedSalary: "",
    availability: "Immediate (Within 30 Days)",

    // Step 3: Skills & Experience
    mainOccupation: "",
    skillsInput: "",
    skills: [] as string[],
    yearsOfExperience: "3–5 Years",
    previousPosition: "",
    previousCountry: "",
    previousEmployer: "",
    languages: ["Sinhala", "English"],

    // Step 4: Education & Certifications
    highestEducation: "G.C.E. A/L or Technical Diploma",
    institution: "",
    certifications: "",
    additionalQualifications: "",

    // Step 5: Documents
    documents: {
      cvName: "",
      cvSize: "",
      passportName: "",
      passportSize: "",
      educationCertName: "",
      experienceCertName: "",
    },

    // Step 6: Review & Consent
    consentAgreed: false,
  });

  const updateField = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const updateDocument = (docKey: string, fileName: string, fileSize: string) => {
    setFormData((prev) => ({
      ...prev,
      documents: {
        ...prev.documents,
        [docKey + "Name"]: fileName,
        [docKey + "Size"]: fileSize,
      },
    }));
  };

  const removeDocument = (docKey: string) => {
    setFormData((prev) => ({
      ...prev,
      documents: {
        ...prev.documents,
        [docKey + "Name"]: "",
        [docKey + "Size"]: "",
      },
    }));
  };

  const handleAddSkill = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && formData.skillsInput.trim()) {
      e.preventDefault();
      const newSkill = formData.skillsInput.trim();
      if (!formData.skills.includes(newSkill)) {
        setFormData((prev) => ({
          ...prev,
          skills: [...prev.skills, newSkill],
          skillsInput: "",
        }));
      }
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s !== skillToRemove),
    }));
  };

  // Step Validation
  const validateStep = (step: number) => {
    setErrorMessage("");
    if (step === 1) {
      if (!formData.fullName.trim()) return "Please enter your full name.";
      if (!formData.dob) return "Please enter your date of birth.";
      if (!formData.email.trim() || !formData.email.includes("@")) return "Please enter a valid email address.";
      if (!formData.whatsapp.trim()) return "Please enter your active WhatsApp mobile number.";
      if (!formData.city.trim()) return "Please enter your current city or district.";
    }
    if (step === 2) {
      if (!formData.preferredCountry) return "Please select a preferred destination country.";
      if (!formData.preferredCategory) return "Please select a job category.";
    }
    if (step === 3) {
      if (!formData.mainOccupation.trim()) return "Please enter your primary occupation / trade.";
    }
    return "";
  };

  const handleNext = () => {
    const error = validateStep(currentStep);
    if (error) {
      setErrorMessage(error);
      return;
    }
    setCurrentStep((prev) => Math.min(prev + 1, 6));
  };

  const handlePrev = () => {
    setErrorMessage("");
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consentAgreed) {
      setErrorMessage("You must agree to the declaration and privacy policy before submitting.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (result.success) {
        setReferenceId(result.referenceId);
        setSubmitSuccess(true);
      } else {
        setErrorMessage(result.error || "Failed to submit application. Please try again.");
      }
    } catch (err) {
      setErrorMessage("An unexpected error occurred. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Steps definition for top indicator
  const steps = [
    { num: 1, title: "Personal", icon: User },
    { num: 2, title: "Preferences", icon: Briefcase },
    { num: 3, title: "Experience", icon: Wrench },
    { num: 4, title: "Education", icon: GraduationCap },
    { num: 5, title: "Documents", icon: FileUp },
    { num: 6, title: "Review", icon: CheckCircle2 },
  ];

  // SUCCESS SCREEN
  if (submitSuccess) {
    const whatsappText = encodeURIComponent(
      `Hello Apex World, I have submitted an online application for ${formData.applyingJob}. My Application Reference ID is: ${referenceId}.`
    );

    return (
      <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-xl text-center animate-fadeIn">
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 uppercase tracking-wider">
          Application Received
        </span>

        <h2 className="text-2xl md:text-3xl font-bold font-heading text-slate-900 mt-3 mb-2">
          Application Submitted Successfully!
        </h2>

        <p className="text-slate-600 text-sm max-w-lg mx-auto mb-6">
          Thank you for applying with Apex World. Your application profile has been registered in our international talent pipeline for manual review.
        </p>

        {/* Reference Box */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-8 max-w-md mx-auto">
          <span className="text-xs uppercase font-semibold text-slate-400 block mb-1">
            Your Official Application Reference ID
          </span>
          <span className="font-mono text-2xl font-bold text-sky-600 tracking-wide select-all">
            {referenceId}
          </span>
          <p className="text-[11px] text-slate-400 mt-2">
            Save this reference ID. Our recruitment team will quote this number when contacting you.
          </p>
        </div>

        {/* Next Steps Guidance */}
        <div className="text-left bg-sky-50/70 border border-sky-100 rounded-2xl p-5 mb-8 text-xs space-y-2 text-slate-700">
          <h4 className="font-bold text-sky-900 text-sm mb-1">What Happens Next?</h4>
          <p>1. Our recruitment officers will review your qualifications against foreign employer quotas.</p>
          <p>2. Suitable candidates are contacted via WhatsApp or phone for an initial pre-interview.</p>
          <p>3. You will be scheduled for trade testing or client interview when shortlisted.</p>
        </div>

        {/* WhatsApp & Home Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`https://wa.me/94771234567?text=${whatsappText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all shadow-md shadow-emerald-600/20"
          >
            <MessageCircle className="w-4 h-4" />
            Notify Recruitment Team on WhatsApp
          </a>

          <Link
            href="/jobs"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors"
          >
            Explore Other Jobs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      {/* Top Progress Tracker */}
      <div className="bg-slate-50 border-b border-slate-200 p-4 md:p-6">
        <div className="flex items-center justify-between max-w-3xl mx-auto">
          {steps.map((s, index) => {
            const Icon = s.icon;
            const isCompleted = currentStep > s.num;
            const isCurrent = currentStep === s.num;

            return (
              <React.Fragment key={s.num}>
                <div className="flex flex-col items-center">
                  <div
                    className={`w-9 h-9 md:w-11 md:h-11 rounded-full flex items-center justify-center font-bold text-xs md:text-sm transition-all ${
                      isCompleted
                        ? "bg-emerald-500 text-white shadow-sm"
                        : isCurrent
                        ? "bg-sky-600 text-white shadow-md shadow-sky-500/30 ring-4 ring-sky-100"
                        : "bg-slate-200 text-slate-500"
                    }`}
                  >
                    <Icon className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <span
                    className={`text-[10px] md:text-xs mt-1.5 font-medium ${
                      isCurrent ? "text-sky-600 font-bold" : "text-slate-500"
                    }`}
                  >
                    {s.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-0.5 mx-1 md:mx-2 transition-colors ${
                      currentStep > index + 1 ? "bg-emerald-400" : "bg-slate-200"
                    }`}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Form Content */}
      <div className="p-6 md:p-10">
        {errorMessage && (
          <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* STEP 1: Personal Information */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <h3 className="text-xl font-bold text-slate-900 font-heading">
                Step 1: Personal Information
              </h3>
              <p className="text-slate-500 text-xs mt-1">
                Please enter your accurate personal details as displayed on your National Identity Card or Passport.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name (as per Passport/NIC) *
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => updateField("fullName", e.target.value)}
                  placeholder="e.g. Kasun Chamara Perera"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  value={formData.dob}
                  onChange={(e) => updateField("dob", e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Gender (if required for vacancy)
                </label>
                <select
                  value={formData.gender}
                  onChange={(e) => updateField("gender", e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Nationality
                </label>
                <input
                  type="text"
                  value={formData.nationality}
                  disabled
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-100 text-slate-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Current City / District *
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => updateField("city", e.target.value)}
                  placeholder="e.g. Colombo, Kandy, Gampaha, Galle"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Current Residential Address
                </label>
                <input
                  type="text"
                  value={formData.currentAddress}
                  onChange={(e) => updateField("currentAddress", e.target.value)}
                  placeholder="Street address, Village or Postal town"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder="name@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  WhatsApp Contact Number *
                </label>
                <input
                  type="tel"
                  value={formData.whatsapp}
                  onChange={(e) => updateField("whatsapp", e.target.value)}
                  placeholder="e.g. +94 77 123 4567"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Alternative Telephone Number (optional)
                </label>
                <input
                  type="tel"
                  value={formData.altPhone}
                  onChange={(e) => updateField("altPhone", e.target.value)}
                  placeholder="e.g. +94 11 234 5678"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: Job Preferences */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <h3 className="text-xl font-bold text-slate-900 font-heading">
                Step 2: Job Preferences
              </h3>
              <p className="text-slate-500 text-xs mt-1">
                Tell us where you wish to work and what role best matches your skills.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Applying Vacancy / Position
                </label>
                <input
                  type="text"
                  value={formData.applyingJob}
                  onChange={(e) => updateField("applyingJob", e.target.value)}
                  placeholder="e.g. Senior Industrial Electrician"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none bg-sky-50/50 font-medium text-sky-900"
                />
                <span className="text-[11px] text-slate-400 mt-1 block">
                  Auto-populated if you applied directly from a specific job advertisement.
                </span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Preferred Destination Country *
                </label>
                <select
                  value={formData.preferredCountry}
                  onChange={(e) => updateField("preferredCountry", e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none"
                >
                  <option value="United Arab Emirates">United Arab Emirates</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Qatar">Qatar</option>
                  <option value="Kuwait">Kuwait</option>
                  <option value="Oman">Oman</option>
                  <option value="Japan">Japan (SSW Program)</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Any Destination">Any Suitable Destination</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Preferred Job Category *
                </label>
                <select
                  value={formData.preferredCategory}
                  onChange={(e) => updateField("preferredCategory", e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none"
                >
                  <option value="Construction">Construction</option>
                  <option value="Drivers">Drivers & Heavy Transport</option>
                  <option value="Electricians">Electricians</option>
                  <option value="Welders">Welders & Fabricators</option>
                  <option value="Hotel & Hospitality">Hotel & Hospitality Staff</option>
                  <option value="Housekeeping">Housekeeping Staff</option>
                  <option value="Healthcare">Healthcare Support / Caregiver</option>
                  <option value="Factory">Factory & Manufacturing</option>
                  <option value="Technicians">Technicians & Mechanics</option>
                  <option value="Skilled Labourers">Skilled Labourers</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Preferred Employment Type
                </label>
                <select
                  value={formData.preferredEmploymentType}
                  onChange={(e) => updateField("preferredEmploymentType", e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none"
                >
                  <option value="Full-time">Full-time Contract (2-Year Standard)</option>
                  <option value="Contract">Project-based Contract</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Earliest Availability to Travel
                </label>
                <select
                  value={formData.availability}
                  onChange={(e) => updateField("availability", e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none"
                >
                  <option value="Immediate (Within 30 Days)">Immediate (Within 30 Days)</option>
                  <option value="1 to 2 Months">1 to 2 Months</option>
                  <option value="More than 2 Months">More than 2 Months</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Expected Monthly Salary (optional)
                </label>
                <input
                  type="text"
                  value={formData.expectedSalary}
                  onChange={(e) => updateField("expectedSalary", e.target.value)}
                  placeholder="e.g. AED 3,500 or USD 900"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: Skills & Experience */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <h3 className="text-xl font-bold text-slate-900 font-heading">
                Step 3: Skills & Experience
              </h3>
              <p className="text-slate-500 text-xs mt-1">
                Provide details about your trade background, years of work, and practical competencies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Main Occupation / Trade *
                </label>
                <input
                  type="text"
                  value={formData.mainOccupation}
                  onChange={(e) => updateField("mainOccupation", e.target.value)}
                  placeholder="e.g. Industrial Electrician, 6G Welder, Trailer Driver"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Total Years of Experience *
                </label>
                <select
                  value={formData.yearsOfExperience}
                  onChange={(e) => updateField("yearsOfExperience", e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none"
                >
                  <option value="Entry-level (Under 1 Year)">Entry-level (Under 1 Year)</option>
                  <option value="1–3 Years">1–3 Years</option>
                  <option value="3–5 Years">3–5 Years</option>
                  <option value="5+ Years">5+ Years</option>
                  <option value="10+ Years">10+ Years</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Professional Skills (Press Enter to add tags)
                </label>
                <input
                  type="text"
                  value={formData.skillsInput}
                  onChange={(e) => updateField("skillsInput", e.target.value)}
                  onKeyDown={handleAddSkill}
                  placeholder="e.g. Wiring, Blueprint Reading, PLC Maintenance (Press Enter)"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none mb-2"
                />
                <div className="flex flex-wrap gap-1.5">
                  {formData.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg bg-sky-100 text-sky-800 text-xs font-medium flex items-center gap-1.5"
                    >
                      {skill}
                      <button
                        type="button"
                        onClick={() => removeSkill(skill)}
                        className="hover:text-rose-600"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Previous Job Position (Latest)
                </label>
                <input
                  type="text"
                  value={formData.previousPosition}
                  onChange={(e) => updateField("previousPosition", e.target.value)}
                  placeholder="e.g. Electrical Maintenance Associate"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Previous Country of Employment
                </label>
                <input
                  type="text"
                  value={formData.previousCountry}
                  onChange={(e) => updateField("previousCountry", e.target.value)}
                  placeholder="e.g. Sri Lanka, UAE, Qatar"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Previous Employer / Company Name (optional)
                </label>
                <input
                  type="text"
                  value={formData.previousEmployer}
                  onChange={(e) => updateField("previousEmployer", e.target.value)}
                  placeholder="e.g. Colombo Dockyard PLC"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: Education & Certifications */}
        {currentStep === 4 && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <h3 className="text-xl font-bold text-slate-900 font-heading">
                Step 4: Education & Certifications
              </h3>
              <p className="text-slate-500 text-xs mt-1">
                Share your educational background, NVQ trade levels, and licenses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Highest Education Level *
                </label>
                <select
                  value={formData.highestEducation}
                  onChange={(e) => updateField("highestEducation", e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none"
                >
                  <option value="G.C.E. Ordinary Level (O/L)">G.C.E. Ordinary Level (O/L)</option>
                  <option value="G.C.E. Advanced Level (A/L)">G.C.E. Advanced Level (A/L)</option>
                  <option value="Vocational NVQ Level 3 / 4">Vocational NVQ Level 3 / 4</option>
                  <option value="National Diploma / HND">National Diploma / HND</option>
                  <option value="Bachelors Degree">Bachelors Degree</option>
                  <option value="Other">Other Vocational Training</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Educational Institution / Vocational Center
                </label>
                <input
                  type="text"
                  value={formData.institution}
                  onChange={(e) => updateField("institution", e.target.value)}
                  placeholder="e.g. NAITA / German Tech / SLITHM"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Professional Certifications / Licenses
                </label>
                <textarea
                  rows={3}
                  value={formData.certifications}
                  onChange={(e) => updateField("certifications", e.target.value)}
                  placeholder="e.g. Heavy Vehicle Driving License, 6G Welder ASME IX, JLPT N4 Japanese, CPR First Aid..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 5: Document Upload */}
        {currentStep === 5 && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <h3 className="text-xl font-bold text-slate-900 font-heading">
                Step 5: Document Upload
              </h3>
              <p className="text-slate-500 text-xs mt-1">
                Upload your CV and supporting files. PDF, DOCX, and JPG formats accepted (Max 5MB each).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* CV / Resume */}
              <div className="p-4 rounded-2xl border-2 border-dashed border-slate-300 hover:border-sky-400 bg-slate-50/50 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-xs text-slate-800">
                      CV / Resume Document *
                    </span>
                    <span className="text-[10px] text-sky-600 font-medium">Recommended</span>
                  </div>
                  {formData.documents.cvName ? (
                    <div className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-slate-200">
                      <div className="flex items-center gap-2 overflow-hidden">
                        <FileText className="w-4 h-4 text-sky-600 shrink-0" />
                        <span className="text-xs truncate font-medium">{formData.documents.cvName}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeDocument("cv")}
                        className="text-rose-500 hover:text-rose-700 p-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ) : (
                    <label className="cursor-pointer block text-center py-4">
                      <UploadCloud className="w-7 h-7 text-sky-500 mx-auto mb-1" />
                      <span className="text-xs text-sky-600 font-medium hover:underline">
                        Click to select CV (PDF/DOC)
                      </span>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        onChange={(e) => {
                          if (e.target.files?.[0]) {
                            const file = e.target.files[0];
                            updateDocument("cv", file.name, `${(file.size / 1024).toFixed(1)} KB`);
                          }
                        }}
                      />
                    </label>
                  )}
                </div>
              </div>

              {/* Passport Copy */}
              <div className="p-4 rounded-2xl border-2 border-dashed border-slate-300 hover:border-sky-400 bg-slate-50/50 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-xs text-slate-800">
                      Passport Bio-Data Page Copy
                    </span>
                    <span className="text-[10px] text-slate-400">PDF / JPG</span>
                  </div>
                  {formData.documents.passportName ? (
                    <div className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-slate-200">
                      <div className="flex items-center gap-2 overflow-hidden">
                        <FileText className="w-4 h-4 text-sky-600 shrink-0" />
                        <span className="text-xs truncate font-medium">{formData.documents.passportName}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeDocument("passport")}
                        className="text-rose-500 hover:text-rose-700 p-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ) : (
                    <label className="cursor-pointer block text-center py-4">
                      <UploadCloud className="w-7 h-7 text-sky-500 mx-auto mb-1" />
                      <span className="text-xs text-sky-600 font-medium hover:underline">
                        Click to select Passport Copy
                      </span>
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        className="hidden"
                        onChange={(e) => {
                          if (e.target.files?.[0]) {
                            const file = e.target.files[0];
                            updateDocument("passport", file.name, `${(file.size / 1024).toFixed(1)} KB`);
                          }
                        }}
                      />
                    </label>
                  )}
                </div>
              </div>
            </div>

            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-amber-800 text-xs flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 shrink-0 text-amber-600" />
              <span>
                Document privacy guarantee: Your uploaded documents are encrypted and accessible exclusively to licensed recruitment officers for verified employer submissions.
              </span>
            </div>
          </div>
        )}

        {/* STEP 6: Review & Submit */}
        {currentStep === 6 && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <h3 className="text-xl font-bold text-slate-900 font-heading">
                Step 6: Review Your Application
              </h3>
              <p className="text-slate-500 text-xs mt-1">
                Please double check all submitted details before finalizing your submission.
              </p>
            </div>

            <div className="space-y-4 text-xs">
              {/* Summary Card 1 */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-slate-800 text-sm">Personal & Contact</h4>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="text-sky-600 hover:underline font-semibold"
                  >
                    Edit
                  </button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-slate-600">
                  <div><strong>Name:</strong> {formData.fullName || "—"}</div>
                  <div><strong>DOB:</strong> {formData.dob || "—"}</div>
                  <div><strong>City:</strong> {formData.city || "—"}</div>
                  <div><strong>Email:</strong> {formData.email || "—"}</div>
                  <div><strong>WhatsApp:</strong> {formData.whatsapp || "—"}</div>
                  <div><strong>Gender:</strong> {formData.gender}</div>
                </div>
              </div>

              {/* Summary Card 2 */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-slate-800 text-sm">Job & Preferences</h4>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="text-sky-600 hover:underline font-semibold"
                  >
                    Edit
                  </button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-slate-600">
                  <div><strong>Applying For:</strong> {formData.applyingJob}</div>
                  <div><strong>Destination:</strong> {formData.preferredCountry}</div>
                  <div><strong>Category:</strong> {formData.preferredCategory}</div>
                  <div><strong>Availability:</strong> {formData.availability}</div>
                  <div><strong>Salary Expectation:</strong> {formData.expectedSalary || "Negotiable"}</div>
                </div>
              </div>

              {/* Summary Card 3 */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-slate-800 text-sm">Occupation & Skills</h4>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(3)}
                    className="text-sky-600 hover:underline font-semibold"
                  >
                    Edit
                  </button>
                </div>
                <div className="text-slate-600 space-y-1">
                  <div><strong>Trade:</strong> {formData.mainOccupation || "—"} ({formData.yearsOfExperience})</div>
                  <div><strong>Skills:</strong> {formData.skills.join(", ") || "General trade experience"}</div>
                </div>
              </div>

              {/* Declaration & Privacy Consent */}
              <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.consentAgreed}
                    onChange={(e) => updateField("consentAgreed", e.target.checked)}
                    className="mt-1 w-4 h-4 rounded text-sky-600 focus:ring-sky-500"
                  />
                  <div className="text-xs text-slate-700 leading-relaxed">
                    <strong>Applicant Declaration & Consent:</strong> I hereby certify that the information provided in this application is accurate and true to the best of my knowledge. I authorize Apex World to process my profile and communicate with accredited foreign employers in accordance with the{" "}
                    <Link href="/privacy-policy" className="text-sky-700 underline font-semibold" target="_blank">
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link href="/terms" className="text-sky-700 underline font-semibold" target="_blank">
                      Terms & Conditions
                    </Link>
                    .
                  </div>
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Form Nav Buttons */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between gap-4">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={handlePrev}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold text-xs transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous Step
            </button>
          ) : (
            <div />
          )}

          {currentStep < 6 ? (
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs transition-all shadow-md shadow-sky-600/20"
            >
              Continue to Step {currentStep + 1}
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 disabled:bg-sky-400 text-white font-bold text-sm transition-all shadow-lg shadow-sky-600/25"
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Submitting Application...
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  Submit Application
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

