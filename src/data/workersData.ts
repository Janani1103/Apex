import { Worker } from "@/types";

export const WORKERS_DATA: Worker[] = [
  {
    workerId: "WRK-001",
    category: "Electrical",
    occupation: "Electrical Technician",
    totalExperience: "5 Years",
    skills: ["Electrical Installation", "Panel Wiring", "Preventative Maintenance", "Circuit Diagnostics"],
    preferredCountry: "UAE",
    availabilityStatus: "Available",
    visibleOnWebsite: true,
    featured: true,
    summary:
      "An experienced and disciplined electrical technician with practical knowledge of commercial installations, cable routing, switchgear assembly, and troubleshooting in industrial environments.",
    qualifications: [
      "National Vocational Qualification (NVQ) Level 4 in Industrial Electrical Technology",
      "City & Guilds Diploma in Electrical Engineering",
      "Certified First Aid and Workplace Safety Training",
    ],
    experienceTimeline: [
      {
        period: "2023 - 2026",
        role: "Senior Electrical Technician",
        industry: "Commercial Infrastructure, Colombo",
        responsibilities: [
          "Installed secondary distribution panels and raceways across high-rise residential towers.",
          "Conducted diagnostic testing using multimeters and megohmmeter insulation testers.",
          "Supervised a squad of junior apprentices on safety compliance.",
        ],
      },
      {
        period: "2021 - 2023",
        role: "Assistant Electrical Installer",
        industry: "Electrical Engineering Contracting, Kandy",
        responsibilities: [
          "Ran conduit piping and pulled power and control cables.",
          "Assisted in terminating 3-phase power connections and backup generator wiring.",
        ],
      },
    ],
  },
  {
    workerId: "WRK-002",
    category: "Mechanical & Welding",
    occupation: "Certified 6G Pipe Welder",
    totalExperience: "6 Years",
    skills: ["TIG Welding (GTAW)", "Shielded Metal Arc (SMAW)", "Isometric Blueprint Reading", "Pressure Vessel Fitting"],
    preferredCountry: "Saudi Arabia",
    availabilityStatus: "Available",
    visibleOnWebsite: true,
    featured: true,
    summary:
      "Dedicated 6G welder with extensive background in high-pressure steam lines, petroleum pipe spools, and heavy steel structures. Proven 98%+ pass rate on radiographic non-destructive tests.",
    qualifications: [
      "Welder Performance Qualification (WPQ) 6G ASME Section IX",
      "NVQ Level 4 Welder & Fabricator Certification (Sri Lanka)",
      "OSHA-compliant Rigging and Hot-Work Safety Certificate",
    ],
    experienceTimeline: [
      {
        period: "2022 - 2026",
        role: "Lead Pipe Welder",
        industry: "Heavy Fabrication & Shipyard, Colombo Dockyard",
        responsibilities: [
          "Carried out high-precision root and cap passes on carbon and stainless steel pipes.",
          "Collaborated with QA/QC welding inspectors for magnetic particle and ultrasonic testing.",
        ],
      },
      {
        period: "2020 - 2022",
        role: "Structural Welder",
        industry: "Steel Fabricators, Biyagama Export Zone",
        responsibilities: [
          "MIG and stick welding on heavy structural columns and gantry crane frames.",
        ],
      },
    ],
  },
  {
    workerId: "WRK-003",
    category: "Hospitality",
    occupation: "Front Desk & Guest Relations Officer",
    totalExperience: "4 Years",
    skills: ["Guest Relations", "Opera PMS System", "VIP Concierge", "Fluent English & Conversational Arabic"],
    preferredCountry: "Qatar",
    availabilityStatus: "Available",
    visibleOnWebsite: true,
    featured: true,
    summary:
      "Customer-centric hospitality professional with four years of luxury beach resort experience in Sri Lanka. Adept at front desk management, billing systems, and creating exceptional guest experiences.",
    qualifications: [
      "Diploma in Hotel & Tourism Management (Sri Lanka Institute of Tourism & Hotel Management - SLITHM)",
      "Certified Opera PMS Front Office Operator",
      "IELTS English Proficiency Band 7.0",
    ],
    experienceTimeline: [
      {
        period: "2023 - 2026",
        role: "Senior Guest Relations Associate",
        industry: "5-Star Luxury Resort, Bentota",
        responsibilities: [
          "Handled international guest arrivals, room assignments, and VIP check-ins.",
          "Coordinated cross-departmental guest requests and maintained 96% positive feedback ratings.",
        ],
      },
      {
        period: "2021 - 2023",
        role: "Front Office Receptionist",
        industry: "Boutique Hotel, Galle Fort",
        responsibilities: [
          "Processed reservations, managed telephone switchboard, and managed night audit reconciliations.",
        ],
      },
    ],
  },
  {
    workerId: "WRK-004",
    category: "Heavy Driving",
    occupation: "Multi-Axle Trailer & Heavy Truck Driver",
    totalExperience: "7 Years",
    skills: ["Heavy Articulated Vehicles", "Container Haulage", "Defensive Driving", "Basic Vehicle Mechanics"],
    preferredCountry: "UAE",
    availabilityStatus: "Available",
    visibleOnWebsite: true,
    featured: false,
    summary:
      "Reliable heavy vehicle driver holding clean Sri Lankan heavy articulated license with 7 continuous years hauling containers and bulk materials across national highways. Thorough understanding of vehicle safety inspections.",
    qualifications: [
      "Sri Lankan Heavy Vehicle & Articulated Trailer License (Class G/CE)",
      "Defensive Driving Certification - National Transport Commission",
      "Basic Automotive Mechanical Maintenance Training",
    ],
    experienceTimeline: [
      {
        period: "2021 - 2026",
        role: "Inter-District Container Hauler",
        industry: "Logistics Services, Colombo Port Corridor",
        responsibilities: [
          "Transported 40ft high-cube shipping containers between port terminals and inland clearance depots.",
          "Maintained zero-accident record and executed daily airbrake and tyre inspections.",
        ],
      },
      {
        period: "2019 - 2021",
        role: "Tipper & Dump Truck Driver",
        industry: "Highway Construction Project, Central Expressway",
        responsibilities: [
          "Delivered quarry aggregate and earth fill on civil construction roads under strict delivery schedules.",
        ],
      },
    ],
  },
  {
    workerId: "WRK-005",
    category: "Healthcare",
    occupation: "Certified Caregiver / Nursing Assistant",
    totalExperience: "3 Years",
    skills: ["Geriatric Nursing Care", "Vital Signs Monitoring", "Bedside Mobility Assistance", "Japanese N4 Language"],
    preferredCountry: "Japan",
    availabilityStatus: "Available",
    visibleOnWebsite: true,
    featured: true,
    summary:
      "Warm, attentive caregiver certified under Sri Lankan healthcare standards and specialized in geriatric support. Possesses Japanese Language Proficiency (JLPT N4) and passed the Prometric Caregiver test.",
    qualifications: [
      "Diploma in Nursing Care / Geriatric Assistant (1-year full time)",
      "JLPT N4 Certificate (Japanese Language Proficiency)",
      "Prometric Japan Caregiver Skills Evaluation Certificate",
      "BLS (Basic Life Support) & CPR Certification",
    ],
    experienceTimeline: [
      {
        period: "2024 - 2026",
        role: "In-Patient Care Assistant",
        industry: "Elder Care & Rehabilitation Center, Kandy",
        responsibilities: [
          "Assisted senior residents with bathing, nutrition, range-of-motion therapy, and emotional wellness.",
          "Monitored blood pressure, glucose readings, and maintained daily progress notes.",
        ],
      },
      {
        period: "2023 - 2024",
        role: "Home Care Nursing Aide",
        industry: "Private Healthcare Service, Colombo",
        responsibilities: [
          "Provided dedicated post-operative care and mobility rehabilitation for an elderly client.",
        ],
      },
    ],
  },
  {
    workerId: "WRK-006",
    category: "Construction",
    occupation: "Civil Formwork Carpenter & Mason",
    totalExperience: "5 Years",
    skills: ["Formwork Fabrication", "Concrete Pouring", "Timber Scaffolding", "Structural Plumb Alignment"],
    preferredCountry: "Saudi Arabia",
    availabilityStatus: "Available",
    visibleOnWebsite: true,
    featured: false,
    summary:
      "Versatile civil construction worker with hands-on expertise in rapid modular formwork, slab casting, and architectural masonry on major commercial and residential developments.",
    qualifications: [
      "NVQ Level 3 in Formwork Carpentry (National Apprentice & Industrial Training Authority - NAITA)",
      "Construction Site Health & Safety Induction Card",
    ],
    experienceTimeline: [
      {
        period: "2022 - 2026",
        role: "Lead Shuttering Carpenter",
        industry: "Building Construction, Colombo Port City Project",
        responsibilities: [
          "Fabricated wooden and Doka formwork systems for concrete retaining walls and columns.",
          "Checked structural plumb lines and ensured leak-proof shutter joins before pours.",
        ],
      },
      {
        period: "2020 - 2022",
        role: "Mason & Finisher",
        industry: "Urban Housing Scheme, Kurunegala",
        responsibilities: [
          "Laid cement blocks, applied plastering coats, and assisted in floor screeding.",
        ],
      },
    ],
  },
  {
    workerId: "WRK-007",
    category: "Technical",
    occupation: "HVAC & Refrigeration Technician",
    totalExperience: "4 Years",
    skills: ["Chiller Plant Maintenance", "VRV/VRF Systems", "Duct Fabrication", "Refrigerant Charging"],
    preferredCountry: "Kuwait",
    availabilityStatus: "Available",
    visibleOnWebsite: true,
    featured: false,
    summary:
      "Skilled HVAC technician proficient in installing, charging, and servicing residential and commercial air-conditioning systems including multi-split units and package rooftop chillers.",
    qualifications: [
      "NVQ Level 4 in Refrigeration & Air Conditioning Technology",
      "Environmental Refrigerant Handling & Recovery License",
    ],
    experienceTimeline: [
      {
        period: "2023 - 2026",
        role: "HVAC Service Specialist",
        industry: "Commercial FM Contractor, Colombo",
        responsibilities: [
          "Maintained 40+ split and VRF AC systems for banking branches and data centers.",
          "Repaired blower motors, diagnosed faulty thermostats, and leak-tested copper piping.",
        ],
      },
    ],
  },
  {
    workerId: "WRK-008",
    category: "Manufacturing",
    occupation: "CNC Milling Machinist",
    totalExperience: "5 Years",
    skills: ["Fanuc Controller", "G-Code & M-Code Programming", "Tool Setting", "Precision Metrology"],
    preferredCountry: "Singapore",
    availabilityStatus: "Available",
    visibleOnWebsite: true,
    featured: true,
    summary:
      "Detail-focused precision machinist capable of programming, fixturing, and operating 3-axis CNC vertical milling machines for aerospace and tooling components within micron tolerances.",
    qualifications: [
      "National Certificate in Industrial Engineering & Machining (Ceylon German Technical Training Institute - CGTTI)",
      "AutoCAD & Mastercam Level 2 Certificate",
    ],
    experienceTimeline: [
      {
        period: "2022 - 2026",
        role: "CNC Machinist",
        industry: "Precision Tool & Die Works, Katunayake EPZ",
        responsibilities: [
          "Programmed and setup CNC milling machines for custom injection molds.",
          "Inspected finished workpieces using optical comparators and digital micrometers.",
        ],
      },
    ],
  },
  {
    workerId: "WRK-009",
    category: "Hospitality",
    occupation: "Executive Housekeeping Supervisor",
    totalExperience: "4 Years",
    skills: ["Linen Inventory Control", "Chemical Hygiene Standards", "Team Leadership", "Room Inspection Audit"],
    preferredCountry: "Oman",
    availabilityStatus: "Available",
    visibleOnWebsite: true,
    featured: false,
    summary:
      "Experienced housekeeping supervisor with hotel background ensuring stringent international cleanliness standards, rapid room turnaround, and effective team coordination.",
    qualifications: [
      "Diploma in Hospitality Operations",
      "HACCP & Sanitization Standards Certification",
    ],
    experienceTimeline: [
      {
        period: "2023 - 2026",
        role: "Housekeeping Team Lead",
        industry: "Star Class Beach Hotel, Negombo",
        responsibilities: [
          "Audited 60+ guest rooms daily and trained floor attendants in hygiene protocols.",
          "Managed laundry distribution and guest amenities inventory.",
        ],
      },
    ],
  },
  {
    workerId: "WRK-010",
    category: "General Labour",
    occupation: "Warehouse Logistics Helper",
    totalExperience: "3 Years",
    skills: ["Cargo Palletizing", "Barcode Handheld Scanning", "Forklift Assistance", "Heavy Lifting"],
    preferredCountry: "Qatar",
    availabilityStatus: "Available",
    visibleOnWebsite: true,
    featured: false,
    summary:
      "Physically fit and punctual warehouse associate with strong experience in order picking, packing, sorting, and inventory counts in high-throughput distribution facilities.",
    qualifications: [
      "G.C.E. Ordinary Level Examination",
      "Warehouse Safety & Manual Handling Certificate",
    ],
    experienceTimeline: [
      {
        period: "2023 - 2026",
        role: "Warehouse Operations Helper",
        industry: "FMCG Central Distribution Center, Wattala",
        responsibilities: [
          "Sorted and palletized container deliveries for export dispatch.",
          "Conducted cycle counts using RF scanner guns.",
        ],
      },
    ],
  },
];

