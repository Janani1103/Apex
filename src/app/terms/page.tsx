import React from "react";
import Link from "next/link";
import { FileText, ShieldAlert, Award, Scale } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | Apex World Foreign Employment Agencies (Pvt) Ltd.",
  description:
    "Official terms and conditions governing the usage of the Apex World recruitment platform, candidate applications, and employer requests.",
};

export default function TermsPage() {
  return (
    <div className="w-full pt-36 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center mx-auto mb-4">
            <Scale className="w-6 h-6" />
          </div>
          <span className="text-xs font-bold text-sky-700 uppercase tracking-wider bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
            Legal & Operational Agreement
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 mt-2 mb-3">
            Terms & Conditions
          </h1>
          <p className="text-slate-500 text-xs">
            Governed by the Sri Lanka Bureau of Foreign Employment (SLBFE) Act No. 21 of 1985 and Bilateral Labor Treaties
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 space-y-8 leading-relaxed">
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs">
            <strong>Notice of Operational Scope:</strong> Apex World acts as an authorized international recruitment intermediary connecting Sri Lankan citizens with foreign companies. We operate strictly within the legal framework established by the Sri Lanka Bureau of Foreign Employment (SLBFE) and the labor ministries of host destination countries.
          </div>

          <section className="space-y-3">
            <h2 className="text-lg font-bold font-heading text-slate-900 border-b pb-2">
              1. Acceptance of Terms & Website Usage
            </h2>
            <p>
              By accessing, browsing, or utilizing the Apex World website (including exploring available vacancies, submitting online candidate registrations, or submitting employer manpower requests), you agree to be bound by these Terms & Conditions. If you do not agree with any provision herein, you must cease use of the portal immediately.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold font-heading text-slate-900 border-b pb-2">
              2. Candidate Application Conditions & Accuracy of Information
            </h2>
            <p>
              All candidates submitting profiles or applications through our online multi-step portal warrant and covenant that:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>All information provided regarding identity, age, educational credentials, work history, and licenses is truthful, complete, and authentic.</li>
              <li>Uploaded documents (passports, certificates, and diplomas) are genuine and unmanipulated.</li>
              <li>Submission of false or counterfeit documentation will result in immediate disqualification, termination of recruitment processing, and reporting to relevant statutory authorities.</li>
              <li>Submitting an application does not constitute a guaranteed offer of overseas employment or visa approval.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold font-heading text-slate-900 border-b pb-2">
              3. Foreign Employer Requisitions & Placement Terms
            </h2>
            <p>
              International corporate employers utilizing our services agree that:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>All manpower requests are for genuine, approved employment vacancies with verified compensation and safe working environments.</li>
              <li>Employer requisitions are subject to statutory Job Order approvals by the Embassy of Sri Lanka and the SLBFE prior to candidate deployment.</li>
              <li>Confidential candidate profiles shared through Apex World shall not be transferred to third-party sub-agencies without prior written consent.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold font-heading text-slate-900 border-b pb-2">
              4. Disclaimer Regarding Visa Issuance & Employment Guarantees
            </h2>
            <p>
              In accordance with ethical global recruitment principles:
            </p>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-800">
              Apex World strictly does not make unsupported guarantees of employment or visa issuance. The authority to issue employment visas, resident permits, and entry authorizations rests solely with sovereign foreign immigration departments. Final candidate selection rests exclusively with the accredited foreign employer.
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold font-heading text-slate-900 border-b pb-2">
              5. Intellectual Property Rights
            </h2>
            <p>
              All website content—including trademarks, logos, visual branding, aviation graphics, software workflows, text, and database compilations—is the exclusive intellectual property of Apex World and protected under copyright laws. Unauthorized reproduction or scraping is strictly prohibited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold font-heading text-slate-900 border-b pb-2">
              6. Governing Law & Dispute Resolution
            </h2>
            <p>
              These Terms & Conditions shall be construed and governed in accordance with the laws of the Democratic Socialist Republic of Sri Lanka. Any disputes arising out of recruitment services shall be subject to the exclusive jurisdiction of the competent courts in Colombo, Sri Lanka.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold font-heading text-slate-900 border-b pb-2">
              7. Legal Contact
            </h2>
            <p>
              For legal inquiries regarding operational compliance or contractual frameworks, please contact:
            </p>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1">
              <div><strong>Legal Directorate:</strong> Apex World Foreign Employment Agencies (Pvt) Ltd.</div>
              <div><strong>Address:</strong> Level 7, Apex World Tower, Galle Road, Colombo 03, Sri Lanka</div>
              <div><strong>Email:</strong> legal@apexworld.lk</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

