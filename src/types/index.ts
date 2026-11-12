export interface Job {
  id: string;
  slug: string;
  referenceId: string;
  title: string;
  destinationCountry: string;
  countryCode: string;
  category: string;
  experience: string;
  employmentType: "Full-time" | "Contract";
  salary: string;
  currency: string;
  vacanciesCount: number;
  deadline: string;
  postedDate: string;
  status: "Active" | "Closed";
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  requiredDocuments: string[];
  workingHours?: string;
  featured?: boolean;
}

export interface WorkerTimelineItem {
  period: string;
  role: string;
  industry: string;
  responsibilities: string[];
}

export interface Worker {
  workerId: string; // e.g. WRK-001
  category: string;
  occupation: string;
  totalExperience: string; // e.g. "5 Years"
  skills: string[];
  preferredCountry: string;
  availabilityStatus: "Available" | "Pending" | "Placed";
  visibleOnWebsite: boolean;
  summary: string;
  experienceTimeline: WorkerTimelineItem[];
  qualifications: string[];
  photoUrl?: string;
  featured?: boolean;
}

export interface JobApplication {
  id: string;
  referenceId: string;
  // Step 1: Personal Information
  fullName: string;
  dob: string;
  gender: string;
  nationality: string;
  currentAddress: string;
  city: string;
  email: string;
  whatsapp: string;
  altPhone?: string;
  // Step 2: Job Preferences
  preferredCountry: string;
  preferredCategory: string;
  applyingJob: string;
  applyingJobSlug?: string;
  preferredEmploymentType: string;
  expectedSalary?: string;
  availability: string;
  // Step 3: Skills & Experience
  mainOccupation: string;
  skills: string[];
  yearsOfExperience: string;
  previousPosition?: string;
  previousCountry?: string;
  previousEmployer?: string;
  languages: string[];
  // Step 4: Education & Certificates
  highestEducation: string;
  institution: string;
  certifications: string[];
  additionalQualifications?: string;
  // Step 5: Document Uploads
  documents: {
    cvName?: string;
    passportName?: string;
    educationCertName?: string;
    experienceCertName?: string;
  };
  consentAgreed: boolean;
  submittedAt: string;
  status: "Application Received" | "Under Review" | "Documents Pending" | "Selected" | "Visa Processing" | "Approved" | "Deployed";
}

export interface EmployerRequest {
  id: string;
  referenceId: string;
  companyName: string;
  companyCountry: string;
  companyWebsite?: string;
  contactPerson: string;
  email: string;
  phone: string;
  whatsapp: string;
  companyAddress: string;
  // Requirements
  jobCategory: string;
  skills: string;
  numberOfWorkers: number;
  requiredExperience: string;
  preferredGender?: string;
  preferredQualifications?: string;
  preferredLanguages?: string;
  expectedStartDate: string;
  workerId?: string; // Optional targeted candidate
  additionalNotes?: string;
  submittedAt: string;
  status: "Request Received" | "Reviewing Pool" | "Profiles Dispatched" | "In Coordination";
}

export interface Destination {
  slug: string;
  name: string;
  countryCode: string;
  flag: string;
  image: string;
  shortIntro: string;
  fullOverview: string;
  activeSectors: string[];
  availableJobsCount: number;
  keyRequirements: string[];
  employmentInfo: string[];
  faqs: { q: string; a: string }[];
}

export interface FAQItem {
  id: string;
  category: "Job Seekers" | "Foreign Employers" | "General";
  question: string;
  answer: string;
}

