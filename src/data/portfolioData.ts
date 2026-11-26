export interface MetricCard {
  label: string;
  value: string;
  delta: string;
  detail: string;
}

export const HERO_PROFILE = {
  name: "Sagar Umamaheswara",
  role: "Senior SoC Physical Design, Timing Closure & Design Automation Engineer",
  company: "Intel Corporation (Jan 2018 – Present)",
  location: "Bengaluru, India",
  phone: "+91 7019369609",
  email: "sagaruec85@gmail.com",
  linkedin: "https://www.linkedin.com/in/sagar-u-a628ab105",
  github: "https://github.com/sagarink572",
  resumeUrl: "/Sagar_Umamaheswara_Resume.pdf",
  portfolioUrl: "https://sagarink572.github.io",
  narrative:
    "Intel engineer since 2018 who combines Physical Design expertise with high-impact automation, engineering analytics, workflow optimization, and productivity improvements to solve complex semiconductor design challenges at scale.",
};

export const IMPACT_METRICS: MetricCard[] = [
  {
    label: "Verification Cycle-Time Reduction",
    value: "40%",
    delta: "-40% Turnaround Time",
    detail: "Automated structural design & physical layout verification framework across multi-node tapeouts",
  },
  {
    label: "3D-IC Full-Chip Ownership",
    value: "64-Core",
    delta: "Foveros Direct 3D",
    detail: "Full-chip layout, top-level die integration, and pioneering hierarchical PDN routing methodology",
  },
  {
    label: "Foundry Process Nodes",
    value: "4 Nodes",
    delta: "14nm -> 10nm -> N3 -> 18A",
    detail: "Production RTL-to-GDSII signoff across Intel 18A, TSMC N3 (3nm), Intel 10nm, and Intel 14nm",
  },
  {
    label: "Conference Papers & Honors",
    value: "2 Papers",
    delta: "+ SoC Leadership Award",
    detail: "2 peer-reviewed papers presented at Intel internal conferences + management SoC Leadership Award",
  },
];

export const AUTOMATION_CHART_DATA = [
  { stage: "DRC/LVS Pre-Check", manualHours: 28, automatedHours: 14 },
  { stage: "Structural Audit", manualHours: 36, automatedHours: 18 },
  { stage: "PDN / EM/IR Check", manualHours: 24, automatedHours: 15 },
  { stage: "QoR Triage & Report", manualHours: 20, automatedHours: 12 },
  { stage: "Signoff Packaging", manualHours: 18, automatedHours: 16.6 },
];

export const SKILL_RADAR_DATA = [
  { subject: "RTL-to-GDSII PnR", score: 98 },
  { subject: "3D-IC & PDN", score: 96 },
  { subject: "STA & Timing Closure", score: 95 },
  { subject: "TCL/Perl/Python EDA", score: 96 },
  { subject: "Physical Verification", score: 94 },
  { subject: "Team Leadership", score: 92 },
];

export const AUTOMATION_CASE_STUDIES = [
  {
    title: "Automated Structural Design & Layout Verification Framework",
    badge: "40% Faster Execution | Intel Conference Paper",
    problem:
      "Manual structural design checks and iterative physical verification signoff across high-density SoC partitions caused multi-day engineering bottlenecks and heavy manual triage overhead.",
    architecture:
      "Engineered a modular TCL/Perl/Python rule-driven automation pipeline interfacing directly with Synopsys Fusion Compiler, ICC2, and physical verification signoff engines to automate pre-check validation, structural rule auditing, and defect clustering.",
    impact: [
      "Reduced end-to-end structural and layout verification turnaround time by 40%.",
      "Eliminated repetitive manual triage and reduced workforce dependency across multi-block releases.",
      "Authored and presented a peer-reviewed paper at Intel's internal technical conference.",
    ],
  },
  {
    title: "Hierarchical PDN Routing & 3D-IC Integration Automation (64-Core Server)",
    badge: "64-Core Foveros Direct | Intel Conference Paper",
    problem:
      "Conventional flat power delivery network (PDN) synthesis on a 64-core Foveros Direct 3D-stacked server architecture created severe upper-metal routing channel contention and limited integration throughput.",
    architecture:
      "Architected a custom hierarchical PDN routing methodology and automated grid-synthesis scripts inside Synopsys 3DIC Compiler and Fusion Compiler to align 3D die-to-die power/ground grids.",
    impact: [
      "Significantly increased full-chip integration throughput while preserving EM/IR and signal routing margins.",
      "Enabled clean full-chip layout integration across the 64-core Foveros Direct server architecture.",
      "Authored and presented a technical paper on the methodology at Intel's internal engineering conference.",
    ],
  },
  {
    title: "High-Congestion Block Recovery & QoR Analytics Workflow",
    badge: "SoC Leadership Award",
    problem:
      "Critical high-utilization logic blocks suffered from severe pin-access bottlenecks and routing congestion hotspots that threatened tapeout schedule commitments.",
    architecture:
      "Deployed automated congestion-map diagnostics, custom placement density screens, macro halo tuning, and multi-scenario CTS/ECO convergence trackers while leading a team of junior layout engineers.",
    impact: [
      "Eliminated DRC hotspots and achieved on-schedule timing, area, and power (PPA) signoff.",
      "Honored with the 'SoC Leadership Award' by Intel senior management for technical direction and delivery.",
    ],
  },
];

export const CAREER_TIMELINE = [
  {
    period: "2024 – Present",
    node: "Intel 18A & TSMC N3 (3nm)",
    role: "Senior SoC Physical Design & Automation Lead — Intel Corporation",
    highlights: [
      "Leading advanced-node RTL-to-GDSII execution and 64-core Foveros Direct 3D-IC full-chip integration.",
      "Pioneered hierarchical PDN routing methodology and presented at Intel's internal technical conference.",
      "Driving cross-project EDA workflow optimization across Synopsys Fusion Compiler, 3DIC Compiler, PrimeTime, and StarRC.",
    ],
  },
  {
    period: "2021 – 2023",
    node: "TSMC N3 & Intel 10nm | M.Tech @ BITS Pilani",
    role: "SoC Design Engineer & Automation Architect — Intel Corporation",
    highlights: [
      "Spearheaded the automated structural design and layout verification system reducing execution time by 40% (Intel conference paper).",
      "Received the 'SoC Leadership Award' for mentoring junior engineers through severe routing congestion challenges.",
      "Graduated in Top 10% (8.75 CGPA, batch of 300) with M.Tech in Microelectronics from BITS Pilani (08/2023).",
    ],
  },
  {
    period: "2018 – 2020",
    node: "Intel 10nm & Intel 14nm",
    role: "SoC Physical Design Engineer — Intel Corporation",
    highlights: [
      "Executed full block-level physical implementation: floorplanning, placement, CTS, routing, StarRC extraction, PrimeTime STA, and DRC/LVS/EM/IR signoff.",
      "Built foundational TCL & Perl QoR reporting and ECO automation scripts adopted across block implementation teams.",
    ],
  },
  {
    period: "2013 – 2017",
    node: "Academic Foundation & IIT Guwahati Research",
    role: "B.E. in Electronics & Communication — Siddaganga Institute of Technology",
    highlights: [
      "Graduated with 9.16 CGPA (08/2017).",
      "Completed summer research internship at Indian Institute of Technology (IIT) Guwahati under Prof. SRM Prasanna.",
    ],
  },
];
