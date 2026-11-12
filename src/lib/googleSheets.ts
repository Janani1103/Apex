import { JobApplication, EmployerRequest } from "@/types";

/**
 * Sends newly received Job Applications to Google Sheets via Google Apps Script Webhook.
 * This approach requires ZERO complicated Google Cloud service accounts or OAuth tokens.
 * A simple 10-line Apps Script in Google Sheets receives the POST request and appends a row!
 */
export async function appendApplicationToGoogleSheets(
  application: JobApplication
): Promise<boolean> {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!webhookUrl) {
    return false;
  }

  try {
    const payload = {
      action: "JOB_APPLICATION",
      referenceId: application.referenceId,
      submittedAt: application.submittedAt || new Date().toISOString(),
      fullName: application.fullName,
      dob: application.dob,
      gender: application.gender,
      nationality: application.nationality,
      whatsapp: application.whatsapp,
      email: application.email,
      altPhone: application.altPhone || "",
      city: application.city,
      address: application.currentAddress,
      applyingJob: application.applyingJob,
      preferredCountry: application.preferredCountry,
      preferredCategory: application.preferredCategory,
      mainOccupation: application.mainOccupation,
      yearsOfExperience: application.yearsOfExperience,
      highestEducation: application.highestEducation,
      skills: (application.skills || []).join(", "),
      status: application.status || "Application Received",
      cvName: application.documents?.cvName || "Not uploaded",
      passportName: application.documents?.passportName || "Not uploaded",
    };

    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    return res.ok;
  } catch (error) {
    console.error("Failed to append application to Google Sheets:", error);
    return false;
  }
}

/**
 * Sends newly received Employer Requests to Google Sheets.
 */
export async function appendEmployerRequestToGoogleSheets(
  request: EmployerRequest
): Promise<boolean> {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!webhookUrl) {
    return false;
  }

  try {
    const payload = {
      action: "EMPLOYER_REQUEST",
      referenceId: request.referenceId,
      submittedAt: request.submittedAt || new Date().toISOString(),
      companyName: request.companyName,
      companyCountry: request.companyCountry,
      contactPerson: request.contactPerson,
      email: request.email,
      whatsapp: request.whatsapp,
      phone: request.phone,
      jobCategory: request.jobCategory,
      numberOfWorkers: request.numberOfWorkers,
      requiredExperience: request.requiredExperience,
      expectedStartDate: request.expectedStartDate,
      workerId: request.workerId || "",
      status: request.status || "Request Received",
    };

    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    return res.ok;
  } catch (error) {
    console.error("Failed to append employer request to Google Sheets:", error);
    return false;
  }
}

