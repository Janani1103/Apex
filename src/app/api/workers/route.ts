import { NextResponse } from "next/server";
import { getPublicWorkers } from "@/lib/storage";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search")?.toLowerCase();
    const category = searchParams.get("category");
    const country = searchParams.get("country");
    const experience = searchParams.get("experience");

    let workers = await getPublicWorkers();

    if (search) {
      workers = workers.filter(
        (w) =>
          w.workerId.toLowerCase().includes(search) ||
          w.occupation.toLowerCase().includes(search) ||
          w.category.toLowerCase().includes(search) ||
          w.skills.some((s) => s.toLowerCase().includes(search))
      );
    }

    if (category && category !== "All") {
      workers = workers.filter((w) => w.category.toLowerCase() === category.toLowerCase());
    }

    if (country && country !== "All") {
      workers = workers.filter((w) => w.preferredCountry.toLowerCase() === country.toLowerCase());
    }

    if (experience && experience !== "All") {
      workers = workers.filter((w) => w.totalExperience.toLowerCase().includes(experience.toLowerCase()));
    }

    return NextResponse.json({
      success: true,
      count: workers.length,
      workers,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch worker profiles" },
      { status: 500 }
    );
  }
}

