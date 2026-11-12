import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Plane,
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Globe,
  ArrowRight,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-11 h-11 rounded-xl overflow-hidden bg-white p-0.5 shadow-md shadow-sky-500/20 shrink-0 group-hover:scale-105 transition-transform">
                <Image
                  src="/images/logo.jpg"
                  alt="Apex World Foreign Employment Agencies (Pvt) Ltd."
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-2xl tracking-tight text-white leading-none">
                  APEX WORLD
                </span>
                <span className="text-[10px] tracking-wider uppercase font-semibold text-sky-400 mt-1">
                  Foreign Employment Agencies (Pvt) Ltd.
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed pr-6">
              Apex World Foreign Employment Agencies (Pvt) Ltd. is a premier international workforce solutions provider connecting qualified Sri Lankan professionals with accredited overseas employers across the Middle East, East Asia, and beyond.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Level 7, Apex World Tower, Galle Road, Colombo 03, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>+94 11 234 5678 / +94 11 234 5679</span>
              </div>
              <div className="flex items-center gap-2.5">
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>WhatsApp Hotline: +94 77 123 4567</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>inquiries@apexworld.lk / hr@apexworld.lk</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Mon – Fri: 8:30 AM – 5:30 PM | Sat: 9:00 AM – 1:00 PM</span>
              </div>
            </div>
          </div>

          {/* Column 2: Job Seekers */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4 text-sky-400">
              Job Seekers
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/jobs" className="hover:text-sky-300 transition-colors">
                  Available Vacancies
                </Link>
              </li>
              <li>
                <Link href="/apply" className="hover:text-sky-300 transition-colors">
                  Submit Online Application
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:text-sky-300 transition-colors">
                  Help & Document Checklist
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-sky-300 transition-colors">
                  Candidate FAQs
                </Link>
              </li>
              <li>
                <Link href="/help#visa" className="hover:text-sky-300 transition-colors">
                  Visa & Medical Stages
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Foreign Employers */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4 text-sky-400">
              Foreign Employers
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/employers" className="hover:text-sky-300 transition-colors">
                  Employer Overview
                </Link>
              </li>
              <li>
                <Link href="/employers/workers" className="hover:text-sky-300 transition-colors">
                  Browse Available Workers
                </Link>
              </li>
              <li>
                <Link href="/employers/request" className="hover:text-sky-300 transition-colors">
                  Submit Manpower Request
                </Link>
              </li>
              <li>
                <Link href="/services#employer-services" className="hover:text-sky-300 transition-colors">
                  Recruitment & Trade Testing
                </Link>
              </li>
              <li>
                <Link href="/faqs#employers" className="hover:text-sky-300 transition-colors">
                  Employer Hiring FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Destinations & Company */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4 text-sky-400">
              Destinations & Agency
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/destinations/united-arab-emirates"
                  className="flex items-center gap-2 hover:text-sky-300 transition-colors group"
                >
                  <span className="relative w-5 h-3.5 rounded-xs overflow-hidden border border-slate-700 shadow-xs shrink-0">
                    <Image
                      src="https://flagcdn.com/w40/ae.png"
                      alt="UAE"
                      fill
                      className="object-cover"
                      sizes="20px"
                      unoptimized
                    />
                  </span>
                  <span>UAE Opportunities</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/saudi-arabia"
                  className="flex items-center gap-2 hover:text-sky-300 transition-colors group"
                >
                  <span className="relative w-5 h-3.5 rounded-xs overflow-hidden border border-slate-700 shadow-xs shrink-0">
                    <Image
                      src="https://flagcdn.com/w40/sa.png"
                      alt="Saudi Arabia"
                      fill
                      className="object-cover"
                      sizes="20px"
                      unoptimized
                    />
                  </span>
                  <span>Saudi Arabia</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/qatar"
                  className="flex items-center gap-2 hover:text-sky-300 transition-colors group"
                >
                  <span className="relative w-5 h-3.5 rounded-xs overflow-hidden border border-slate-700 shadow-xs shrink-0">
                    <Image
                      src="https://flagcdn.com/w40/qa.png"
                      alt="Qatar"
                      fill
                      className="object-cover"
                      sizes="20px"
                      unoptimized
                    />
                  </span>
                  <span>Qatar</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/japan"
                  className="flex items-center gap-2 hover:text-sky-300 transition-colors group"
                >
                  <span className="relative w-5 h-3.5 rounded-xs overflow-hidden border border-slate-700 shadow-xs shrink-0">
                    <Image
                      src="https://flagcdn.com/w40/jp.png"
                      alt="Japan"
                      fill
                      className="object-cover"
                      sizes="20px"
                      unoptimized
                    />
                  </span>
                  <span>Japan (SSW Program)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/singapore"
                  className="flex items-center gap-2 hover:text-sky-300 transition-colors group"
                >
                  <span className="relative w-5 h-3.5 rounded-xs overflow-hidden border border-slate-700 shadow-xs shrink-0">
                    <Image
                      src="https://flagcdn.com/w40/sg.png"
                      alt="Singapore"
                      fill
                      className="object-cover"
                      sizes="20px"
                      unoptimized
                    />
                  </span>
                  <span>Singapore</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-sky-300 transition-colors block pt-1">
                  About Apex World
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sky-300 transition-colors block">
                  Contact Office
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Compliance Statement */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} Apex World Foreign Employment Agencies (Pvt) Ltd. All rights reserved. Registered under the Sri Lanka Bureau of Foreign Employment (SLBFE).
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-sky-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-sky-400 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/faqs" className="hover:text-sky-400 transition-colors">
              Help Center
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

