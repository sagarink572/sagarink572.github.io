import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sagar Umamaheswara | SoC Design Engineer — Physical Design, Timing Closure & EDA Automation",
  description:
    "Engineering Portfolio of Sagar Umamaheswara — 8+ Years at Intel Corporation specializing in Physical Design (Intel 18A, TSMC N3, 10nm, 14nm), 64-Core Foveros Direct 3D-IC Integration, Cross-Voltage (Min-Max) Timing Closure, and EDA Automation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-sky-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
