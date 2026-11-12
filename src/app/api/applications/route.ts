import { NextResponse } from "next/server";
import { saveJobApplication, getAllApplications } from "@/lib/storage";
import { isAuthenticatedAdmin } from "@/lib/auth";

export async function GET() {
  // Enforce Admin Authentication
  if (!isAuthenticatedAdmin()) {
    return NextResponse.json(
      { success: false, error: "Unauthorized access. Admin authentication required." },
      { status: 401 }
    );
  }

  try {
    const applications = await getAllApplications();
    return NextResponse.json({
      success: true,
      count: applications.length,
      applications,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to retrieve applications" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Basic validation
    if (!body.fullName || !body.email || !body.whatsapp || !body.mainOccupation) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required personal and employment fields." },
        { status: 400 }
      );
    }

    if (!body.consentAgreed) {
      return NextResponse.json(
        { success: false, error: "You must agree to the declaration and privacy policy." },
        { status: 400 }
      );
    }

    const application = await saveJobApplication(body);

    // Format WhatsApp & Email payload summary for notification dispatch
    const notificationPayload = {
      type: "JOB_APPLICATION",
      referenceId: application.referenceId,
      applicantName: application.fullName,
      jobTitle: application.applyingJob || "General Pool Application",
      country: application.preferredCountry,
      contact: {
        whatsapp: application.whatsapp,
        email: application.email,
      },
      message: `New Job Application Received [Ref: ${application.referenceId}] from ${application.fullName} for ${application.applyingJob || application.mainOccupation} (${application.preferredCountry}).`,
    };

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully",
      referenceId: application.referenceId,
      application,
      notification: notificationPayload,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to process application" },
      { status: 500 }
    );
  }
}
