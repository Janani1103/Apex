import { Job, Worker, JobApplication, EmployerRequest } from "@/types";
import { JOBS_DATA } from "@/data/jobsData";
import { WORKERS_DATA } from "@/data/workersData";
import { getDatabase } from "./mongodb";
import {
  appendApplicationToGoogleSheets,
  appendEmployerRequestToGoogleSheets,
} from "./googleSheets";
import {
  saveApplicationToDisk,
  loadApplicationsFromDisk,
  saveEmployerRequestToDisk,
  loadEmployerRequestsFromDisk,
} from "./fileStorage";

// In-memory runtime cache as a safe fallback
const inMemoryApplications: JobApplication[] = [];
const inMemoryEmployerRequests: EmployerRequest[] = [];

// Clean sensitive worker fields before public transmission
export function sanitizeWorkerForPublic(worker: Worker): Worker {
  return {
    workerId: worker.workerId,
    category: worker.category,
    occupation: worker.occupation,
    totalExperience: worker.totalExperience,
    skills: worker.skills,
    preferredCountry: worker.preferredCountry,
    availabilityStatus: worker.availabilityStatus,
    visibleOnWebsite: worker.visibleOnWebsite,
    summary: worker.summary,
    experienceTimeline: worker.experienceTimeline,
    qualifications: worker.qualifications,
    featured: worker.featured,
    photoUrl: worker.photoUrl,
  };
}

export async function getPublicWorkers(): Promise<Worker[]> {
  const activeWorkers = WORKERS_DATA.filter(
    (w) => w.visibleOnWebsite === true && w.availabilityStatus === "Available"
  );
  return activeWorkers.map(sanitizeWorkerForPublic);
}

export async function getWorkerById(workerId: string): Promise<Worker | null> {
  const worker = WORKERS_DATA.find(
    (w) =>
      w.workerId.toLowerCase() === workerId.toLowerCase() &&
      w.visibleOnWebsite === true &&
      w.availabilityStatus === "Available"
  );
  return worker ? sanitizeWorkerForPublic(worker) : null;
}

export async function getActiveJobs(): Promise<Job[]> {
  return JOBS_DATA.filter((job) => job.status === "Active");
}

export async function getJobBySlug(slug: string): Promise<Job | null> {
  const job = JOBS_DATA.find((j) => j.slug === slug && j.status === "Active");
  return job || null;
}

/**
 * Saves a new Job Application to Permanent Disk File (JSON + CSV),
 * MongoDB (if configured), and Google Sheets (if configured).
 */
export async function saveJobApplication(
  data: Omit<JobApplication, "id" | "referenceId" | "submittedAt" | "status">
): Promise<JobApplication> {
  const referenceId = `GLO-APP-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
  const newApplication: JobApplication = {
    ...data,
    id: `app_${Date.now()}`,
    referenceId,
    submittedAt: new Date().toISOString(),
    status: "Application Received",
  };

  // 1. In-memory runtime cache
  inMemoryApplications.unshift(newApplication);

  // 2. Permanent Disk Storage (JSON Database + Excel CSV spreadsheet)
  try {
    await saveApplicationToDisk(newApplication);
    console.log(`[Disk Storage] Application permanently saved: ${referenceId}`);
  } catch (err) {
    console.error("[Disk Storage Error] Failed to write to disk:", err);
  }

  // 3. MongoDB Cloud persistence (if MONGODB_URI is provided)
  try {
    const db = await getDatabase();
    if (db) {
      await db.collection("applications").insertOne({
        ...newApplication,
        createdAt: new Date(),
      });
      console.log(`[MongoDB] Successfully saved application: ${referenceId}`);
    }
  } catch (error) {
    console.error("[MongoDB Error] Failed to persist application:", error);
  }

  // 4. Google Sheets synchronization (Runs asynchronously in background)
  appendApplicationToGoogleSheets(newApplication)
    .then((synced) => {
      if (synced) {
        console.log(`[Google Sheets] Application synced: ${referenceId}`);
      }
    })
    .catch((err) => {
      console.error("[Google Sheets Error] Failed to sync application:", err);
    });

  return newApplication;
}

/**
 * Retrieves all submitted job applications across Database, Disk, and Memory.
 */
export async function getAllApplications(): Promise<JobApplication[]> {
  // 1. Try MongoDB if connected
  try {
    const db = await getDatabase();
    if (db) {
      const docs = await db
        .collection("applications")
        .find({})
        .sort({ submittedAt: -1 })
        .toArray();
      if (docs && docs.length > 0) {
        return docs.map((doc: any) => ({
          ...doc,
          id: doc.id || doc._id.toString(),
        })) as JobApplication[];
      }
    }
  } catch {
    // MongoDB not connected, continue to local disk
  }

  // 2. Load from local Disk storage
  try {
    const diskApps = await loadApplicationsFromDisk();
    if (diskApps.length > 0) {
      return diskApps;
    }
  } catch {
    // Fallback to in-memory
  }

  // 3. Fallback to in-memory
  return inMemoryApplications;
}

/**
 * Saves a new Employer Manpower Request to Permanent Disk File (JSON + CSV),
 * MongoDB (if configured), and Google Sheets (if configured).
 */
export async function saveEmployerRequest(
  data: Omit<EmployerRequest, "id" | "referenceId" | "submittedAt" | "status">
): Promise<EmployerRequest> {
  const referenceId = `GLO-REQ-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
  const newRequest: EmployerRequest = {
    ...data,
    id: `req_${Date.now()}`,
    referenceId,
    submittedAt: new Date().toISOString(),
    status: "Request Received",
  };

  // 1. In-memory runtime cache
  inMemoryEmployerRequests.unshift(newRequest);

  // 2. Permanent Disk Storage (JSON + CSV)
  try {
    await saveEmployerRequestToDisk(newRequest);
    console.log(`[Disk Storage] Employer request permanently saved: ${referenceId}`);
  } catch (err) {
    console.error("[Disk Storage Error] Failed to write employer request to disk:", err);
  }

  // 3. MongoDB Cloud persistence
  try {
    const db = await getDatabase();
    if (db) {
      await db.collection("employer_requests").insertOne({
        ...newRequest,
        createdAt: new Date(),
      });
      console.log(`[MongoDB] Successfully saved employer request: ${referenceId}`);
    }
  } catch (error) {
    console.error("[MongoDB Error] Failed to persist employer request:", error);
  }

  // 4. Google Sheets synchronization
  appendEmployerRequestToGoogleSheets(newRequest)
    .then((synced) => {
      if (synced) {
        console.log(`[Google Sheets] Employer request synced: ${referenceId}`);
      }
    })
    .catch((err) => {
      console.error("[Google Sheets Error] Failed to sync employer request:", err);
    });

  return newRequest;
}

export async function getAllEmployerRequests(): Promise<EmployerRequest[]> {
  try {
    const db = await getDatabase();
    if (db) {
      const docs = await db
        .collection("employer_requests")
        .find({})
        .sort({ submittedAt: -1 })
        .toArray();
      if (docs && docs.length > 0) {
        return docs as any[];
      }
    }
  } catch {
    // Continue
  }

  try {
    const diskReqs = await loadEmployerRequestsFromDisk();
    if (diskReqs.length > 0) return diskReqs;
  } catch {
    // Continue
  }

  return inMemoryEmployerRequests;
}
