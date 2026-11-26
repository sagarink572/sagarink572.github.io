"use client";

import React from "react";
import { motion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import {
  Cpu,
  Terminal,
  Award,
  Download,
  Mail,
  Linkedin,
  Github,
  Phone,
  MapPin,
  Layers,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import {
  HERO_PROFILE,
  IMPACT_METRICS,
  AUTOMATION_CASE_STUDIES,
  CAREER_TIMELINE,
} from "@/data/portfolioData";

export default function PortfolioDashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-400 font-mono font-bold">
              SU
            </div>
            <div>
              <span className="font-semibold tracking-tight text-white">
                {HERO_PROFILE.name}
              </span>
              <span className="ml-3 hidden rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 text-xs font-medium text-emerald-400 md:inline-block">
                Intel SoC Design Engineer • 8+ Yrs
              </span>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 lg:flex">
            <a href="#impact" className="hover:text-sky-400 transition">Impact</a>
            <a href="#automation" className="hover:text-sky-400 transition">Key Automations</a>
            <a href="#expertise" className="hover:text-sky-400 transition">PD & 3D-IC</a>
            <a href="#timeline" className="hover:text-sky-400 transition">Timeline</a>
            <a href="#why-hire" className="hover:text-sky-400 transition">Why Hire Sagar</a>
            <a
              href={HERO_PROFILE.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-sky-400 transition"
            >
              <Download className="h-3.5 w-3.5" />
              Download Resume (PDF)
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-12 space-y-20">
        {/* 1. EXECUTIVE LANDING PAGE */}
        <section className="grid gap-10 lg:grid-cols-12 items-center pt-4">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3.5 py-1 text-xs font-medium text-sky-300">
              <Sparkles className="h-3.5 w-3.5" />
              Intel Corporation (01/2018 – Present) • Intel 18A • TSMC N3 • Foveros Direct 3D-IC
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.12]">
              Solving Complex Silicon Challenges Through{" "}
              <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                Physical Design & EDA Automation
              </span>
            </h1>
            <p className="max-w-3xl text-lg text-slate-300 leading-relaxed">
              {HERO_PROFILE.narrative}
            </p>
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href={HERO_PROFILE.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/20 hover:bg-sky-400 transition"
              >
                <Download className="h-4 w-4" />
                Download Resume (PDF)
              </a>
              <a
                href={HERO_PROFILE.docxUrl}
                download
                className="inline-flex items-center gap-2 rounded-xl border border-sky-500/40 bg-sky-500/10 px-4 py-3 text-sm font-medium text-sky-300 hover:bg-sky-500/20 transition"
              >
                <Download className="h-4 w-4" />
                Resume (DOCX)
              </a>
              <a
                href={HERO_PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm font-medium text-slate-200 hover:border-sky-500/50 hover:text-white transition"
              >
                <Linkedin className="h-4 w-4 text-sky-400" />
                LinkedIn
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={HERO_PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm font-medium text-slate-200 hover:border-emerald-500/50 hover:text-white transition"
              >
                <Github className="h-4 w-4 text-emerald-400" />
                github.com/sagarink572
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={HERO_PROFILE.vercelUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-purple-500/40 bg-purple-500/10 px-4 py-3 text-sm font-medium text-purple-300 hover:bg-purple-500/20 hover:text-white transition"
              >
                <Sparkles className="h-4 w-4 text-purple-400" />
                Vercel App Live
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${HERO_PROFILE.email}`}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/50 px-4 py-3 text-sm text-slate-300 hover:border-slate-700"
              >
                <Mail className="h-4 w-4 text-emerald-400" />
                {HERO_PROFILE.email}
              </a>
            </div>
          </motion.div>

          {/* 9. QR CODE & EXECUTIVE CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-sky-400">
                  Quick Access Card
                </p>
                <h2 className="text-lg font-bold text-white mt-0.5">
                  Scan for Portfolio & Resume
                </h2>
              </div>
              <Cpu className="h-6 w-6 text-sky-400" />
            </div>
            <div className="my-5 flex items-center gap-4">
              <div className="rounded-xl bg-white p-3 shadow-md">
                <QRCodeSVG value={HERO_PROFILE.portfolioUrl} size={96} />
              </div>
              <div className="space-y-1.5 text-xs text-slate-300">
                <a
                  href="https://sagarink572.github.io"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-sky-400 hover:underline flex items-center gap-1"
                >
                  sagarink572.github.io <ArrowUpRight className="h-3 w-3" />
                </a>
                <a
                  href={HERO_PROFILE.vercelUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-purple-400 hover:underline flex items-center gap-1"
                >
                  sagar-umamaheswara-portfolio.vercel.app <ArrowUpRight className="h-3 w-3" />
                </a>
                <div className="flex items-center gap-1.5 text-slate-400 pt-1">
                  <MapPin className="h-3.5 w-3.5 text-sky-400" />
                  {HERO_PROFILE.location}
                </div>
                <div className="flex items-center gap-1.5 text-slate-400">
                  <Phone className="h-3.5 w-3.5 text-emerald-400" />
                  {HERO_PROFILE.phone}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2.5 pt-2 text-xs">
              <div className="rounded-lg bg-slate-950/80 p-2.5 border border-slate-800">
                <span className="text-slate-400 block">M.Tech (BITS Pilani)</span>
                <span className="font-semibold text-white">8.75 CGPA (Top 10%)</span>
              </div>
              <div className="rounded-lg bg-slate-950/80 p-2.5 border border-slate-800">
                <span className="text-slate-400 block">B.E. ECE (SIT)</span>
                <span className="font-semibold text-white">9.16 CGPA • IIT-G</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 2. ENGINEERING IMPACT DASHBOARD */}
        <section id="impact" className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-sky-400">
                Quantified Silicon & Productivity Outcomes
              </p>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Engineering Impact Highlights
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-400">
              Verified Production Outcomes • Intel Corporation (2018–Present)
            </span>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {IMPACT_METRICS.map((m, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-sky-500/40 transition"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-400">
                    {m.label}
                  </span>
                  <span className="rounded-full bg-sky-500/10 px-2.5 py-0.5 text-[11px] font-mono text-sky-300">
                    {m.delta}
                  </span>
                </div>
                <p className="mt-3 text-3xl font-extrabold text-white tracking-tight">
                  {m.value}
                </p>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                  {m.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. KEY EDA AUTOMATIONS & SILICON TOOLS BUILT */}
        <section id="automation" className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                Production EDA Tools, Timing Engines & Compute Telemetry
              </p>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Key Automations & Methodologies Built at Intel
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400">
              <Terminal className="h-4 w-4" />
              Python • TCL • Perl • Synopsys FC / ICC2 / 3DIC / PrimeTime / StarRC
            </div>
          </div>

          {/* 6 Deep-Dive Real Automation Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {AUTOMATION_CASE_STUDIES.map((cs, i) => (
              <div
                key={i}
                className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-sky-500/40 transition"
              >
                <div className="space-y-3">
                  <span className="inline-block rounded-md bg-sky-500/10 border border-sky-500/30 px-2.5 py-1 text-[11px] font-mono text-sky-300">
                    {cs.badge}
                  </span>
                  <h3 className="text-lg font-bold text-white leading-snug">
                    {cs.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    <strong className="text-slate-200">Engineering Problem:</strong>{" "}
                    {cs.problem}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    <strong className="text-slate-200">Automation Architecture:</strong>{" "}
                    {cs.architecture}
                  </p>
                </div>
                <ul className="mt-4 space-y-1.5 border-t border-slate-800/80 pt-3 text-xs text-emerald-300">
                  {cs.impact.map((pt, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 mt-0.5 shrink-0 text-emerald-400" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 5. PHYSICAL DESIGN & 3D-IC EXPERTISE */}
        <section id="expertise" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-sky-400">
                Multi-Node Silicon Implementation
              </p>
              <h2 className="text-2xl font-bold text-white">
                Physical Design, Timing Closure & 3D-IC Technical Stack
              </h2>
            </div>
            <Layers className="h-7 w-7 text-sky-400" />
          </div>
          <div className="grid gap-4 md:grid-cols-4 text-xs">
            <div className="rounded-xl bg-slate-950/70 p-4 border border-slate-800">
              <p className="font-mono text-sky-400 font-semibold">EDA Tool Suite</p>
              <p className="mt-2 text-slate-300 leading-relaxed">
                Synopsys Fusion Compiler, IC Compiler II (ICC2), Synopsys 3DIC Compiler, PrimeTime (STA), StarRC.
              </p>
            </div>
            <div className="rounded-xl bg-slate-950/70 p-4 border border-slate-800">
              <p className="font-mono text-emerald-400 font-semibold">Process Nodes</p>
              <p className="mt-2 text-slate-300 leading-relaxed">
                Intel 18A, TSMC N3 (3nm), Intel 10nm, and Intel 14nm production tapeout signoff.
              </p>
            </div>
            <div className="rounded-xl bg-slate-950/70 p-4 border border-slate-800">
              <p className="font-mono text-amber-400 font-semibold">3D-IC, PDN & Timing</p>
              <p className="mt-2 text-slate-300 leading-relaxed">
                64-core Foveros Direct 3D stacking, hierarchical & top-metal bump/PDN routing, 1-click bottom-up DEF ingestion, EVR top-level DEF pushdown to partitions, Cross-Voltage (XPV) Min-Max timing closure, MCMM STA & EM/IR signoff.
              </p>
            </div>
            <div className="rounded-xl bg-slate-950/70 p-4 border border-slate-800">
              <p className="font-mono text-purple-400 font-semibold">Automation & Telemetry</p>
              <p className="mt-2 text-slate-300 leading-relaxed">
                Python, TCL, Perl, Least-Squares Delay Scaling Models, NetBatch Compute Capacity & Job Telemetry, Interactive Web & Fusion Compiler GUI Cockpits.
              </p>
            </div>
          </div>
        </section>

        {/* 4. CAREER TIMELINE */}
        <section id="timeline" className="space-y-6">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-sky-400">
              Experience & Education
            </p>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Career & Academic Timeline
            </h2>
          </div>
          <div className="space-y-4 border-l-2 border-slate-800 pl-6">
            {CAREER_TIMELINE.map((item, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6"
              >
                <span className="absolute -left-[31px] top-7 h-3.5 w-3.5 rounded-full border-2 border-sky-400 bg-slate-950" />
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-base font-bold text-white">{item.role}</h3>
                  <span className="rounded-md bg-slate-800 px-2.5 py-1 text-xs font-mono text-sky-300">
                    {item.period} • {item.node}
                  </span>
                </div>
                <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
                  {item.highlights.map((h, k) => (
                    <li key={k} className="flex items-start gap-2">
                      <span className="text-sky-400">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 7. WHY HIRE SAGAR & 8. RESUME DOWNLOAD */}
        <section
          id="why-hire"
          className="rounded-3xl border border-sky-500/30 bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950/40 p-8 lg:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-12 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sky-400">
                <Award className="h-4 w-4" />
                Engineering Value Proposition
              </div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Why Hire Sagar Umamaheswara?
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Sagar combines 8+ years of hands-on physical design and timing signoff at Intel Corporation with the ability to conceive and ship production software/EDA tools that solve critical silicon bottlenecks:
              </p>
              <div className="grid gap-3 sm:grid-cols-2 text-xs text-slate-200 pt-2">
                <div className="rounded-xl bg-slate-950/60 p-3.5 border border-slate-800">
                  <strong className="text-sky-400 block mb-1">
                    1. Advanced-Node & 3D-IC Execution (Intel 18A, TSMC N3)
                  </strong>
                  Proven full-chip 64-core Foveros Direct 3D-IC and sub-3nm block signoff ownership across Fusion Compiler, 3DIC Compiler, PrimeTime, and StarRC.
                </div>
                <div className="rounded-xl bg-slate-950/60 p-3.5 border border-slate-800">
                  <strong className="text-emerald-400 block mb-1">
                    2. High-Impact Production Automation
                  </strong>
                  Creator of Cross-Voltage (Min-Max) rail-aware timing scaling, 40%-faster structural/layout verification, top-metal PDN/EVR cockpits (1-click bottom-up DEF ingestion & EVR top-level DEF to partitions), and NetBatch compute telemetry.
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center gap-3">
              <a
                href={HERO_PROFILE.resumeUrl}
                download
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-6 py-3.5 text-sm font-bold text-slate-950 hover:bg-sky-400 transition"
              >
                <Download className="h-4 w-4" />
                Download Resume (PDF)
              </a>
              <a
                href={`mailto:${HERO_PROFILE.email}?subject=SoC%20Physical%20Design%20%2F%20EDA%20Automation%20Opportunity`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-950/80 px-6 py-3 text-xs font-semibold text-slate-200 hover:border-sky-400 transition"
              >
                <Mail className="h-4 w-4 text-sky-400" />
                Schedule Technical Discussion
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
