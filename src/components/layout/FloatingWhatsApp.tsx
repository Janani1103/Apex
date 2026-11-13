"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { X, ExternalLink, Briefcase, Users } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isEmployerContext = pathname.includes("/employers");

  const defaultMessage = isEmployerContext
    ? "Hello Apex World, I am an international employer interested in recruiting qualified Sri Lankan workers."
    : "Hello Apex World, I would like to inquire about current overseas job opportunities and application requirements.";

  const encodedDefault = encodeURIComponent(defaultMessage);
  const jobSeekerMessage = encodeURIComponent(
    "Hello Apex World, I am a Sri Lankan job seeker looking for overseas employment opportunities."
  );
  const employerMessage = encodeURIComponent(
    "Hello Apex World, our company is interested in recruiting skilled Sri Lankan workers."
  );

  const phoneNumber = "94771234567"; // Company official WhatsApp hotline

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Popover Card */}
      {isOpen && (
        <div className="mb-3 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-fadeIn text-slate-800">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <WhatsAppIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">Apex World WhatsApp</h4>
                <p className="text-[11px] text-emerald-100 flex items-center mt-0.5">
                  Official Recruitment Desk
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-white/10 text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 space-y-3 bg-slate-50 text-xs">
            <p className="text-slate-600">
              Welcome to Apex World Foreign Employment Agencies (Pvt) Ltd.. Please choose your inquiry type to initiate a direct chat with our recruitment officers:
            </p>

            <a
              href={`https://wa.me/${phoneNumber}?text=${jobSeekerMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/50 transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                <Briefcase className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-slate-800 group-hover:text-emerald-700">
                  Job Seeker Assistance
                </div>
                <div className="text-[11px] text-slate-500">
                  Vacancies, application help & updates
                </div>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600" />
            </a>

            <a
              href={`https://wa.me/${phoneNumber}?text=${employerMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/50 transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                <Users className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-slate-800 group-hover:text-emerald-700">
                  Foreign Employer Hiring
                </div>
                <div className="text-[11px] text-slate-500">
                  Bulk manpower requests & talent hiring
                </div>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600" />
            </a>
          </div>

          <div className="p-2.5 bg-slate-100 border-t border-slate-200 text-center text-[10px] text-slate-500">
            Typically replies within a few minutes during Sri Lanka working hours.
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-500/30 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 group focus:outline-none"
        aria-label="Chat with Apex World on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400"></span>
        </span>
        <WhatsAppIcon className="w-7 h-7 group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
}

