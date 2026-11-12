import fs from "fs";
import path from "path";
import { JobApplication, EmployerRequest } from "@/types";

const DB_DIR = path.join(process.cwd(), "src", "data", "db");
const APPLICATIONS_JSON = path.join(DB_DIR, "applications.json");
const APPLICATIONS_CSV = path.join(DB_DIR, "applications.csv");
const EMPLOYERS_JSON = path.join(DB_DIR, "employer_requests.json");
const EMPLOYERS_CSV = path.join(DB_DIR, "employer_requests.csv");

function ensureDirectoryExists() {
  if (!fs.existsSync(DB_DIR)) {
    fs.mkdirSync(DB_DIR, { recursive: true });
  }
}

function escapeCsvField(field: any): string {
  if (field === null || field === undefined) return '""';
  const str = String(field).replace(/"/g, '""');
  return `"${str}"`;
}

// ==========================================
// JOB APPLICATIONS
// ==========================================

export async function loadApplicationsFromDisk(): Promise<JobApplication[]> {
  try {
    ensureDirectoryExists();
    if (!fs.existsSync(APPLICATIONS_JSON)) {
      await fs.promises.writeFile(APPLICATIONS_JSON, JSON.stringify([], null, 2), "utf8");
      return [];
    }
    const data = await fs.promises.readFile(APPLICATIONS_JSON, "utf8");
    return JSON.parse(data) as JobApplication[];
  } catch (error) {
    console.error("Failed to read applications from disk:", error);
    return [];
  }
}

export async function saveApplicationToDisk(application: JobApplication): Promise<void> {
  try {
    ensureDirectoryExists();

    // 1. Save to JSON Database
    const existing = await loadApplicationsFromDisk();
    const updated = [application, ...existing.filter((a) => a.id !== application.id)];
    await fs.promises.writeFile(APPLICATIONS_JSON, JSON.stringify(updated, null, 2), "utf8");

    // 2. Append to CSV Spreadsheet
    const csvExists = fs.existsSync(APPLICATIONS_CSV);
    const csvHeader = [
      "Reference ID",
      "Date Submitted",
      "Full Name",
      "Date of Birth",
      "Gender",
      "WhatsApp Number",
      "Email Address",
      "City",
      "Applying Job",
      "Destination Country",
      "Job Category",
      "Primary Occupation",
      "Experience",
      "Education",
      "Skills",
      "CV Uploaded",
      "Passport Uploaded",
      "Status",
    ].map(escapeCsvField).join(",") + "\n";

    const csvRow = [
      application.referenceId,
      new Date(application.submittedAt).toLocaleString(),
      application.fullName,
      application.dob,
      application.gender,
      application.whatsapp,
      application.email,
      application.city,
      application.applyingJob,
      application.preferredCountry,
      application.preferredCategory,
      application.mainOccupation,
      application.yearsOfExperience,
      application.highestEducation,
      (application.skills || []).join("; "),
      application.documents?.cvName || "No",
      application.documents?.passportName || "No",
      application.status,
    ].map(escapeCsvField).join(",") + "\n";

    if (!csvExists) {
      await fs.promises.writeFile(APPLICATIONS_CSV, csvHeader + csvRow, "utf8");
    } else {
      await fs.promises.appendFile(APPLICATIONS_CSV, csvRow, "utf8");
    }
  } catch (error) {
    console.error("Failed to write application to disk:", error);
  }
}

export async function getApplicationsCsv(): Promise<string> {
  try {
    ensureDirectoryExists();
    if (fs.existsSync(APPLICATIONS_CSV)) {
      return await fs.promises.readFile(APPLICATIONS_CSV, "utf8");
    }
    // If CSV doesn't exist yet, generate from JSON
    const apps = await loadApplicationsFromDisk();
    const csvHeader = [
      "Reference ID",
      "Date Submitted",
      "Full Name",
      "Date of Birth",
      "Gender",
      "WhatsApp Number",
      "Email Address",
      "City",
      "Applying Job",
      "Destination Country",
      "Job Category",
      "Primary Occupation",
      "Experience",
      "Education",
      "Skills",
      "CV Uploaded",
      "Passport Uploaded",
      "Status",
    ].map(escapeCsvField).join(",") + "\n";

    const rows = apps.map((a) =>
      [
        a.referenceId,
        new Date(a.submittedAt).toLocaleString(),
        a.fullName,
        a.dob,
        a.gender,
        a.whatsapp,
        a.email,
        a.city,
        a.applyingJob,
        a.preferredCountry,
        a.preferredCategory,
        a.mainOccupation,
        a.yearsOfExperience,
        a.highestEducation,
        (a.skills || []).join("; "),
        a.documents?.cvName || "No",
        a.documents?.passportName || "No",
        a.status,
      ].map(escapeCsvField).join(",")
    ).join("\n");

    return csvHeader + rows;
  } catch {
    return "";
  }
}

// ==========================================
// EMPLOYER REQUESTS
// ==========================================

export async function loadEmployerRequestsFromDisk(): Promise<EmployerRequest[]> {
  try {
    ensureDirectoryExists();
    if (!fs.existsSync(EMPLOYERS_JSON)) {
      await fs.promises.writeFile(EMPLOYERS_JSON, JSON.stringify([], null, 2), "utf8");
      return [];
    }
    const data = await fs.promises.readFile(EMPLOYERS_JSON, "utf8");
    return JSON.parse(data) as EmployerRequest[];
  } catch (error) {
    console.error("Failed to read employer requests from disk:", error);
    return [];
  }
}

export async function saveEmployerRequestToDisk(req: EmployerRequest): Promise<void> {
  try {
    ensureDirectoryExists();

    const existing = await loadEmployerRequestsFromDisk();
    const updated = [req, ...existing.filter((r) => r.id !== req.id)];
    await fs.promises.writeFile(EMPLOYERS_JSON, JSON.stringify(updated, null, 2), "utf8");

    const csvExists = fs.existsSync(EMPLOYERS_CSV);
    const csvHeader = [
      "Reference ID",
      "Date Submitted",
      "Company Name",
      "Country",
      "Contact Person",
      "Email",
      "WhatsApp",
      "Phone",
      "Job Category",
      "Number of Workers",
      "Required Experience",
      "Expected Start Date",
      "Status",
    ].map(escapeCsvField).join(",") + "\n";

    const csvRow = [
      req.referenceId,
      new Date(req.submittedAt).toLocaleString(),
      req.companyName,
      req.companyCountry,
      req.contactPerson,
      req.email,
      req.whatsapp,
      req.phone,
      req.jobCategory,
      req.numberOfWorkers,
      req.requiredExperience,
      req.expectedStartDate,
      req.status,
    ].map(escapeCsvField).join(",") + "\n";

    if (!csvExists) {
      await fs.promises.writeFile(EMPLOYERS_CSV, csvHeader + csvRow, "utf8");
    } else {
      await fs.promises.appendFile(EMPLOYERS_CSV, csvRow, "utf8");
    }
  } catch (error) {
    console.error("Failed to write employer request to disk:", error);
  }
}

