import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Apex World Foreign Employment Agencies (Pvt) Ltd.",
  description:
    "Data protection policy and privacy commitment for Sri Lankan candidates and international employers using Apex World.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full pt-36 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <span className="text-xs font-bold text-sky-700 uppercase tracking-wider bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
            Data Governance & Privacy
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 mt-2 mb-3">
            Privacy Policy
          </h1>
          <p className="text-slate-500 text-xs">
            Last Updated: November 2026 • In Compliance with the Sri Lanka Personal Data Protection Act No. 9 of 2022
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 space-y-8 leading-relaxed">
          <div className="p-4 rounded-2xl bg-sky-50 border border-sky-100 text-sky-900 text-xs">
            <strong>Key Commitment:</strong> Apex World never displays private personal information—such as full passport numbers, personal contact phone numbers, private home addresses, or unredacted identification documents—on our public worker showcases. All candidate profiles published in our public catalog are anonymized, showing only verified occupational metrics.
          </div>

          <section className="space-y-3">
            <h2 className="text-lg font-bold font-heading text-slate-900 border-b pb-2">
              1. What Personal Information We Collect
            </h2>
            <p>
              When candidates apply for international vacancies or employers submit manpower requisitions through the Apex World website, we may collect the following data:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li><strong>Candidate Personal Identifiers:</strong> Full legal name, date of birth, nationality, gender, current city, and residential address.</li>
              <li><strong>Contact Coordinates:</strong> Email address, mobile telephone number, and active WhatsApp number.</li>
              <li><strong>Employment & Vocational Background:</strong> Primary occupation, years of experience, trade skill tags, previous overseas employment history, and languages spoken.</li>
              <li><strong>Educational & Professional Credentials:</strong> Highest academic qualifications, technical diplomas, NVQ certificates, and trade licenses.</li>
              <li><strong>Uploaded Supporting Documents:</strong> CV/Resume documents, passport bio-data copies, and training certificates submitted voluntarily through our online portal.</li>
              <li><strong>Employer Information:</strong> Corporate business entity name, country of operations, corporate email, telephone, project location, and manpower requisitions.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold font-heading text-slate-900 border-b pb-2">
              2. Purpose of Information Processing
            </h2>
            <p>We collect and utilize your personal information solely for lawful recruitment and regulatory purposes:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>To evaluate candidate suitability against accredited overseas job vacancies.</li>
              <li>To present anonymized candidate credentials to international employers seeking qualified Sri Lankan workers.</li>
              <li>To contact shortlisted applicants regarding interview schedules, trade testing, and document requirements.</li>
              <li>To complete statutory clearance and registration procedures mandated by the Sri Lanka Bureau of Foreign Employment (SLBFE).</li>
              <li>To assist with official host-country employment visa submissions and medical appointments (GAMCA/QVC).</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold font-heading text-slate-900 border-b pb-2">
              3. Protection of Worker Information in Public Catalogs
            </h2>
            <p>
              Under our strict operational protocols, a worker's profile is only featured in our public talent showcase when both of the following mandatory conditions are met:
            </p>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-mono text-slate-800">
              (Visible on Website = Yes) AND (Availability Status = Available)
            </div>
            <p>
              Once a candidate is selected, placed, or withdraws their availability, their public showcase entry is immediately deactivated. Public profiles display only an assigned Worker Reference ID (e.g., WRK-001) and professional skill summaries.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold font-heading text-slate-900 border-b pb-2">
              4. Sharing Data with International Employers
            </h2>
            <p>
              Complete, unredacted candidate dossiers (including CVs, passport copies, and contact records) are shared exclusively with accredited, licensed corporate employers who have entered into a formal recruitment covenant with Apex World. We do not sell, rent, or lease candidate data to commercial marketing third parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold font-heading text-slate-900 border-b pb-2">
              5. Data Retention & Security Measures
            </h2>
            <p>
              We apply state-of-the-art administrative, technical, and physical safeguards to prevent unauthorized access, alteration, or disclosure of user data. Candidate records are maintained securely in our encrypted databases during the active recruitment lifecycle, or until a candidate requests profile removal.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold font-heading text-slate-900 border-b pb-2">
              6. Your Rights Under Data Protection Laws
            </h2>
            <p>As a candidate or employer, you hold the legal right to:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>Request a copy of the personal information stored in your file.</li>
              <li>Request immediate correction of any inaccurate or outdated records.</li>
              <li>Request the removal or deactivation of your profile from our talent database.</li>
              <li>Withdraw your consent for public showcase display at any time.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold font-heading text-slate-900 border-b pb-2">
              7. Privacy Inquiries & Contact
            </h2>
            <p>
              If you have any questions or wish to exercise your data rights, please contact our Data Governance Officer:
            </p>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1">
              <div><strong>Data Protection Officer:</strong> Apex World Foreign Employment Agencies (Pvt) Ltd.</div>
              <div><strong>Head Office:</strong> Level 7, Apex World Tower, Galle Road, Colombo 03, Sri Lanka</div>
              <div><strong>Official Email:</strong> privacy@apexworld.lk</div>
              <div><strong>Telephone Hotline:</strong> +94 11 234 5678</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

