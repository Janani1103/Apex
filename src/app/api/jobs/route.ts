import { NextResponse } from "next/server";
import { getActiveJobs } from "@/lib/storage";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search")?.toLowerCase();
    const country = searchParams.get("country");
    const category = searchParams.get("category");
    const experience = searchParams.get("experience");
    const employmentType = searchParams.get("type");

    let jobs = await getActiveJobs();

    if (search) {
      jobs = jobs.filter(
        (job) =>
          job.title.toLowerCase().includes(search) ||
          job.destinationCountry.toLowerCase().includes(search) ||
          job.category.toLowerCase().includes(search) ||
          job.referenceId.toLowerCase().includes(search) ||
          job.description.toLowerCase().includes(search)
      );
    }

    if (country && country !== "All") {
      jobs = jobs.filter((job) => job.destinationCountry.toLowerCase() === country.toLowerCase());
    }

    if (category && category !== "All") {
      jobs = jobs.filter((job) => job.category.toLowerCase() === category.toLowerCase());
    }

    if (experience && experience !== "All") {
      jobs = jobs.filter((job) => job.experience.toLowerCase().includes(experience.toLowerCase()));
    }

    if (employmentType && employmentType !== "All") {
      jobs = jobs.filter((job) => job.employmentType.toLowerCase() === employmentType.toLowerCase());
    }

    return NextResponse.json({ success: true, count: jobs.length, jobs });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch jobs" },
      { status: 500 }
    );
  }
}

