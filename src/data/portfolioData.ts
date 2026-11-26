export interface MetricCard {
  label: string;
  value: string;
  delta: string;
  detail: string;
}

export const HERO_PROFILE = {
  name: "Sagar Umamaheswara",
  role: "SoC Design Engineer — Physical Design, Timing Closure, 3D-IC Integration & EDA Automation",
  company: "Intel Corporation (Jan 2018 – Present)",
  location: "Bengaluru, India",
  phone: "+91 8277701996",
  email: "sagaruec85@gmail.com",
  linkedin: "https://www.linkedin.com/in/sagar-u-a628ab105",
  github: "https://github.com/sagarink572",
  resumeUrl: "/Sagar_Umamaheswara_Resume.pdf",
  docxUrl: "/Sagar_Umamaheswara_Resume.docx",
  portfolioUrl: "https://sagarink572.github.io",
  vercelUrl: "https://sagar-umamaheswara-portfolio.vercel.app",
  githubPagesUrl: "https://sagarink572.github.io",
  narrative:
    "SoC Design Engineer at Intel Corporation (since Jan 2018) combining advanced-node RTL-to-GDSII physical implementation (Intel 18A, TSMC N3, 10nm, 14nm) and 64-core Foveros Direct 3D-IC integration with production EDA automation for Cross-Voltage (Min-Max) timing scaling, automated structural/layout verification, top-metal PDN/EVR routing, and NetBatch compute telemetry.",
};

export const IMPACT_METRICS: MetricCard[] = [
  {
    label: "Verification Cycle-Time Reduction",
    value: "40%",
    delta: "-40% Turnaround Time",
    detail: "Automated structural design & physical layout verification framework across multi-node tapeouts",
  },
  {
    label: "Cross-Voltage (Min-Max) Scaling",
    value: "0.45V–0.95V",
    delta: "Eliminates 70% Flat Error",
    detail: "Pin-by-pin PrimeTime rail decomposition & least-squares Setup/Hold ECO margin predictor",
  },
  {
    label: "3D-IC & Multi-Node Signoff",
    value: "64-Core",
    delta: "14nm -> 10nm -> N3 -> 18A",
    detail: "Foveros Direct 3D-IC full-chip layout & hierarchical/top-metal PDN across 30+ partitions",
  },
  {
    label: "Compute Telemetry & Honors",
    value: "800+ Hosts",
    delta: "2 Papers + Leadership Award",
    detail: "NetBatch capacity/job tracker (~20K+ cores) + 2 Intel conference papers + SoC Leadership Award",
  },
];

export const AUTOMATION_CASE_STUDIES = [
  {
    title: "Cross-Voltage (Min-Max) Rail-Aware Timing Scaling Engine",
    badge: "PrimeTime TCL + Python Least-Squares Engine + Web GUI",
    problem:
      "In multi-voltage (XPV) SoC hubs, supply rails (0.45V–0.95V) invert between Setup and Hold corners. Re-running 200GB PrimeTime sessions per corner after every trial ECO takes hours, while flat corner multipliers suffer up to 70% estimation error because wires (NET) and voltage domains scale differently.",
    architecture:
      "Built a PrimeTime TCL extractor and Python weighted least-squares calibration engine that decomposes violating paths pin-by-pin into per-supply-rail cell buckets, wire (NET), and MACRO stages, computes each path's personal exchange rate (r_eff), and serves interactive HTML/Excel/Web GUI signoff reports.",
    impact: [
      "Predicts exact Setup-vs-Hold ECO slack impact across corners in seconds without 200GB PrimeTime reruns.",
      "Eliminates up to 70% flat-scaling error by separating per-rail gate delays from metal interconnect.",
      "Automatically emits PrimeTime FCT scaling ivars, 22-sheet Excel workbooks, and interactive web diagnostics.",
    ],
  },
  {
    title: "NetBatch Compute Capacity & EDA Job Telemetry Tracker",
    badge: "800+ Hosts (~20,000+ Cores / 775 TB RAM) | SQLite WAL + Web Portal",
    problem:
      "Large-scale physical design and STA regressions across multi-partition SoC teams experienced severe queue wait bottlenecks (>2h waits), host fragmentation, and oversized memory/core reservations (>=250GB RAM / 24C–32C waste).",
    architecture:
      "Engineered a 100% read-only NetBatch telemetry collector, SQLite WAL time-series store, and 10-tab web analytics portal polling nbstatus across virtual and physical compute pools.",
    impact: [
      "Monitors 800+ compute workstations (~20K+ cores) in real time with automated anomaly and wait-cause classification.",
      "Detects oversized RAM/core reservations and stranded host locks to recover wasted compute capacity.",
      "Generates on-demand multi-sheet executive Excel workbooks and live domain/user efficiency scorecards.",
    ],
  },
  {
    title: "Unified Top-Metal PDN, Bump Routing & EVR Cockpit",
    badge: "Synopsys Fusion Compiler TCL Cockpit | 30+ Partitions",
    problem:
      "Routing top-metal power trunks over placed bumps, spreading short-free top-metal power grids across 30+ partitions, ingesting bottom-up partition DEFs, and generating top-level EVR DEF collateral to partitions required complex, error-prone manual steps.",
    architecture:
      "Developed a unified Fusion Compiler TCL package and GUI cockpit supporting dry-run preview, automated top-metal bump-to-trunk routing, pattern gap-fill, 1-click bottom-up DEF ingestion, 2D DRC/resistance/shielding audits, and EVR top-level DEF generation/pushdown to partitions.",
    impact: [
      "Automates short-free top-metal power routing, 1-click bottom-up DEF ingestion, and PDN health checks across 30+ SoC partitions.",
      "Automates EVR top-level DEF pushdown to partitions on read-only library snapshots without locking interactive GUI sessions.",
    ],
  },
  {
    title: "Automated Structural Design & Physical Layout Verification System",
    badge: "40% Cycle-Time Reduction | Intel Technical Conference Paper",
    problem:
      "Iterative structural design rule checks and physical layout verification across high-density SoC blocks created major tapeout bottlenecks and heavy manual engineering dependency.",
    architecture:
      "Spearheaded an end-to-end automated structural and layout verification framework in TCL, Perl, and Python integrated with Synopsys PnR and signoff verification flows.",
    impact: [
      "Reduced overall structural and layout verification execution time by 40%.",
      "Significantly lowered manual workforce dependency and presented a peer-reviewed paper at Intel's internal conference.",
    ],
  },
  {
    title: "64-Core Foveros Direct 3D-IC Integration & Hierarchical PDN Methodology",
    badge: "64-Core 3D-IC Server | Intel Technical Conference Paper + Leadership Award",
    problem:
      "Full-chip die-to-die integration and flat PDN synthesis on a 64-core Foveros Direct 3D-stacked server processor suffered from upper-metal routing congestion and throughput limits.",
    architecture:
      "Owned full-chip physical layout and top-level integration in Synopsys 3DIC Compiler / Fusion Compiler, pioneering a hierarchical PDN routing methodology while mentoring junior engineers through severe block-level routing congestion.",
    impact: [
      "Substantially increased full-chip integration throughput and presented a technical paper at Intel's internal conference.",
      "Honored with Intel's 'SoC Leadership Award' for mentoring junior layout engineers to deliver congestion-critical silicon on schedule.",
    ],
  },
];

export const CAREER_TIMELINE = [
  {
    period: "Jan 2018 – Present (8+ Years)",
    node: "Intel 18A, TSMC N3 (3nm), Intel 10nm & 14nm",
    role: "SoC Design Engineer — Intel Corporation, Bengaluru",
    highlights: [
      "Full-chip layout and top-level integration owner for a 64-core server processor using Foveros Direct 3D stacking technology; pioneered a hierarchical PDN routing methodology (Intel conference paper).",
      "Spearheaded an automated structural design and layout verification system that reduced overall execution time by 40% and lowered workforce dependency (Intel conference paper).",
      "Developed production EDA automations: Cross-Voltage (Min-Max) rail-aware timing scaling engine, NetBatch compute capacity & job tracker, and unified top-metal PDN/bump/EVR cockpit (1-click bottom-up DEF ingestion & EVR top-level DEF pushdown to partitions).",
      "Executed end-to-end block-level RTL-to-GDSII physical design (floorplanning, PnR, CTS, routing, StarRC extraction, PrimeTime STA, DRC/LVS/EM/IR) across Intel 18A, TSMC N3, 10nm, and 14nm.",
      "Mentored and led a team of junior layout engineers to resolve severe routing congestion and deliver tapeout-quality layout, earning Intel's 'SoC Leadership Award'.",
    ],
  },
  {
    period: "Aug 2023",
    node: "Top 10 Percentile (Batch of 300)",
    role: "M.Tech in Microelectronics — BITS Pilani",
    highlights: [
      "Graduated with 8.75 / 10.0 CGPA while working full-time at Intel Corporation.",
      "Ranked in the Top 10 percentile among a cohort of 300 students.",
    ],
  },
  {
    period: "Aug 2017",
    node: "IIT Guwahati Research Internship",
    role: "B.E. in Electronics & Communication Engineering — Siddaganga Institute of Technology",
    highlights: [
      "Graduated with 9.16 / 10.0 CGPA.",
      "Completed summer research internship at Indian Institute of Technology (IIT) Guwahati under Prof. S. R. M. Prasanna.",
    ],
  },
];
