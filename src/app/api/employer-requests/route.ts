import { NextResponse } from "next/server";
import { saveEmployerRequest } from "@/lib/storage";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.companyName || !body.contactPerson || !body.email || !body.phone || !body.jobCategory) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required company and workforce requirement fields." },
        { status: 400 }
      );
    }

    const employerRequest = await saveEmployerRequest(body);

    const notificationPayload = {
      type: "EMPLOYER_WORKER_REQUEST",
      referenceId: employerRequest.referenceId,
      company: employerRequest.companyName,
      country: employerRequest.companyCountry,
      contactPerson: employerRequest.contactPerson,
      targetCandidate: employerRequest.workerId || "General Manpower Request",
      headcount: employerRequest.numberOfWorkers,
      category: employerRequest.jobCategory,
      message: `New Employer Request [Ref: ${employerRequest.referenceId}] from ${employerRequest.companyName} (${employerRequest.companyCountry}) for ${employerRequest.numberOfWorkers} workers in ${employerRequest.jobCategory}.`,
    };

    return NextResponse.json({
      success: true,
      message: "Employer request submitted successfully",
      referenceId: employerRequest.referenceId,
      request: employerRequest,
      notification: notificationPayload,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to process employer request" },
      { status: 500 }
    );
  }
}

