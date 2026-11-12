import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Apex World Foreign Employment Agencies (Pvt) Ltd. | Sri Lanka",
  icons: {
    icon: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
  description:
    "Connecting qualified Sri Lankan professionals with accredited overseas employment opportunities across the UAE, Saudi Arabia, Qatar, Japan, Singapore, and Europe. Dedicated foreign employer workforce solutions.",
  keywords: [
    "Sri Lankan Manpower",
    "Overseas Jobs Sri Lanka",
    "Recruitment Agency Colombo",
    "Foreign Employment",
    "UAE Jobs",
    "Qatar Jobs",
    "Saudi Arabia Jobs",
    "Japan SSW Caregiver",
    "Hire Sri Lankan Workers",
  ],
  authors: [{ name: "Apex World Foreign Employment Agencies (Pvt) Ltd." }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#f8fafc] text-[#0f172a] antialiased selection:bg-sky-500 selection:text-white font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
