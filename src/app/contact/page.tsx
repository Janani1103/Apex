"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    inquiryType: "Job Opportunity",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");
  const [error, setError] = useState("");

  const updateField = (field: string, val: string) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) {
      setError("Please complete all required fields.");
      return;
    }
    setIsSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setTicketId(data.ticketId);
        setSubmitted(true);
      } else {
        setError(data.error || "Failed to submit message.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactCards = [
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Head Office",
      value: "Level 7, Apex World Tower\nGalle Road, Colombo 03",
      color: "bg-sky-500",
      light: "bg-sky-50 text-sky-600",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Telephone",
      value: "+94 11 234 5678\n+94 11 234 5679",
      color: "bg-indigo-500",
      light: "bg-indigo-50 text-indigo-600",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "info@apexworld.lk\nrecruitment@apexworld.lk",
      color: "bg-violet-500",
      light: "bg-violet-50 text-violet-600",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: "Office Hours",
      value: "Mon–Fri: 8:30 AM – 5:30 PM\nSat: 9:00 AM – 1:00 PM",
      color: "bg-emerald-500",
      light: "bg-emerald-50 text-emerald-600",
    },
  ];

  return (
    <div className="w-full bg-white">

      {/* ═══════════════════════════════════════════════
          SECTION 1 — HERO (Aero Sky Gradient)
      ═══════════════════════════════════════════════ */}
      <section className="relative pt-36 pb-28 overflow-hidden">
        {/* Background gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-indigo-50/60 to-white pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-sky-200/30 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-20 right-0 w-72 h-72 bg-indigo-200/25 rounded-full blur-[80px] pointer-events-none" />

        {/* Dot grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold text-sky-700 tracking-wider uppercase bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-sky-200 shadow-sm mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading text-slate-900 tracking-tight leading-tight mb-5">
            We&apos;re Here to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">
              Help You Connect.
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-500 leading-relaxed mb-8">
            Whether you&apos;re looking for an overseas career or searching for skilled workers,
            our Colombo recruitment team is ready to assist.
          </p>

          {/* Quick CTA row */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/94771234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs shadow-lg shadow-emerald-500/30 transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Now
            </a>
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-sky-50 text-slate-700 font-bold text-xs border border-slate-200 shadow-sm transition-all hover:scale-105"
            >
              Send a Message
              <ChevronRight className="w-4 h-4 text-sky-500" />
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 2 — GLASSMORPHISM INFO CARDS
      ═══════════════════════════════════════════════ */}
      <section className="relative -mt-10 z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contactCards.map((card, i) => (
            <div
              key={i}
              className="group relative bg-white/80 backdrop-blur-xl rounded-2xl border border-white/90 shadow-xl shadow-slate-200/60 p-6 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-100/80 transition-all duration-300 overflow-hidden"
            >
              {/* Soft ambient hover glow */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-sky-100/60 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className={`w-10 h-10 rounded-xl ${card.light} flex items-center justify-center mb-4 shadow-sm`}>
                {card.icon}
              </div>
              <h3 className="font-heading font-bold text-sm text-slate-900 mb-2">{card.label}</h3>
              {card.value.split("\n").map((line, j) => (
                <p key={j} className="text-xs text-slate-500 leading-relaxed">{line}</p>
              ))}

              {/* Bottom accent bar */}
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${card.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 3 — FORM + MAP (Side by Side)
      ═══════════════════════════════════════════════ */}
      <section id="contact-form" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* ── CONTACT FORM (3 cols) ── */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-2xl shadow-slate-200/50 p-8 md:p-10">
              {/* Form header */}
              <div className="mb-8">
                <span className="text-xs font-bold text-sky-600 uppercase tracking-wider bg-sky-50 px-3 py-1 rounded-full border border-sky-100 inline-block mb-3">
                  Direct Inquiry
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 tracking-tight">
                  Send Us a Message
                </h2>
                <p className="text-slate-400 text-sm mt-1">
                  We respond within 1–2 business hours during office hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h4 className="font-heading font-bold text-xl text-emerald-900 mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-sm text-emerald-700 mb-2">
                    Your reference ticket:
                  </p>
                  <span className="inline-block font-mono font-bold text-emerald-800 bg-white px-4 py-1.5 rounded-xl border border-emerald-200 shadow-sm text-sm mb-5">
                    {ticketId}
                  </span>
                  <br />
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ fullName: "", email: "", phone: "", inquiryType: "Job Opportunity", subject: "", message: "" });
                    }}
                    className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <div className="p-3.5 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1.5 tracking-wide">
                      Full Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => updateField("fullName", e.target.value)}
                      placeholder="e.g. Kasun Chamara"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/60 text-sm text-slate-900 placeholder-slate-400 focus:border-sky-400 focus:ring-3 focus:ring-sky-100 focus:bg-white outline-none transition-all"
                    />
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-1.5 tracking-wide">
                        Email <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        placeholder="name@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/60 text-sm text-slate-900 placeholder-slate-400 focus:border-sky-400 focus:ring-3 focus:ring-sky-100 focus:bg-white outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-1.5 tracking-wide">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        placeholder="+94 77 123 4567"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/60 text-sm text-slate-900 placeholder-slate-400 focus:border-sky-400 focus:ring-3 focus:ring-sky-100 focus:bg-white outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Inquiry Type */}
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1.5 tracking-wide">
                      Inquiry Type
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => updateField("inquiryType", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/60 text-sm text-slate-900 focus:border-sky-400 focus:ring-3 focus:ring-sky-100 focus:bg-white outline-none transition-all appearance-none"
                    >
                      <option value="Job Opportunity">Job Opportunity / Vacancy Inquiry</option>
                      <option value="Application Inquiry">Application Status Follow-up</option>
                      <option value="Employer Recruitment">Employer Manpower Request</option>
                      <option value="Worker Request">Inquiring About Worker Catalog</option>
                      <option value="General Inquiry">General Agency Inquiry</option>
                    </select>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1.5 tracking-wide">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => updateField("subject", e.target.value)}
                      placeholder="Brief summary of your inquiry"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/60 text-sm text-slate-900 placeholder-slate-400 focus:border-sky-400 focus:ring-3 focus:ring-sky-100 focus:bg-white outline-none transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1.5 tracking-wide">
                      Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      placeholder="How can our recruitment team help you? Please provide relevant details..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/60 text-sm text-slate-900 placeholder-slate-400 focus:border-sky-400 focus:ring-3 focus:ring-sky-100 focus:bg-white outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2.5 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 disabled:from-sky-300 disabled:to-indigo-300 text-white font-bold text-sm shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* ── RIGHT COLUMN: MAP + WHATSAPP (2 cols) ── */}
          <div className="lg:col-span-2 space-y-5">

            {/* Google Maps Embed with Pin */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden">
              {/* Map header */}
              <div className="px-6 py-5 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-slate-900">Apex World Colombo HQ</h4>
                    <p className="text-[11px] text-slate-400">Galle Road, Colombo 03, Sri Lanka</p>
                  </div>
                </div>
              </div>

              {/* Embedded Google Map — Colombo 03, Galle Road */}
              <div className="relative h-64 sm:h-72">
                <iframe
                  title="Apex World Colombo Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0!2d79.8468!3d6.9021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259251b7a4e49%3A0x9b9d79e3e3d8b0a0!2sGalle%20Rd%2C%20Colombo%2003%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1699900000000!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
                {/* Animated custom pin overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="relative">
                    <div className="w-5 h-5 rounded-full bg-sky-600 border-2 border-white shadow-xl shadow-sky-600/50 animate-pulse" />
                    <div className="absolute -inset-2 rounded-full border-2 border-sky-400/40 animate-ping" />
                  </div>
                </div>
              </div>

              {/* Directions link */}
              <div className="px-6 py-4 bg-slate-50/80 border-t border-slate-100">
                <a
                  href="https://maps.google.com/?q=Galle+Road,+Colombo+03,+Sri+Lanka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-700 transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  Open in Google Maps
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* WhatsApp CTA Card */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 p-6 shadow-xl shadow-emerald-500/20 text-white">
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-heading font-bold text-lg mb-1">Prefer WhatsApp?</h4>
                <p className="text-emerald-100 text-xs leading-relaxed mb-4">
                  Chat instantly with our candidate and employer desks. Fast, direct response guaranteed.
                </p>
                <a
                  href="https://wa.me/94771234567?text=Hello%20Apex%20World,%20I%20would%20like%20to%20connect%20with%20your%20team."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-emerald-700 font-bold text-xs hover:bg-emerald-50 transition-colors shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-3">
                Follow Apex World
              </span>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { name: "Facebook", color: "hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200" },
                  { name: "LinkedIn", color: "hover:bg-sky-50 hover:text-sky-700 hover:border-sky-200" },
                  { name: "Instagram", color: "hover:bg-pink-50 hover:text-pink-700 hover:border-pink-200" },
                  { name: "YouTube", color: "hover:bg-red-50 hover:text-red-700 hover:border-red-200" },
                ].map((s) => (
                  <button
                    key={s.name}
                    className={`px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 text-xs font-semibold transition-all ${s.color}`}
                  >
                    {s.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
