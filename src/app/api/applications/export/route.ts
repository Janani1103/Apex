import { NextResponse } from "next/server";
import { getApplicationsCsv } from "@/lib/fileStorage";
import { isAuthenticatedAdmin } from "@/lib/auth";

export async function GET() {
  if (!isAuthenticatedAdmin()) {
    return NextResponse.json(
      { success: false, error: "Unauthorized access. Admin authentication required." },
      { status: 401 }
    );
  }

  try {
    const csvContent = await getApplicationsCsv();

    return new NextResponse(csvContent, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="apexworld_applications_${new Date().toISOString().split("T")[0]}.csv"`,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to export applications to CSV" },
      { status: 500 }
    );
  }
}
