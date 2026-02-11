"use client";

import React from "react";

// ─── Variants ─────────────────────────────────────────────────────────────────
const variants = [
  {
    label: "A — Deep steel blue (darker than electric)",
    h1: (
      <h1 className="text-[2.6rem] md:text-5xl font-bold text-[#0A1F44] leading-[1.15] mb-7">
        Own your website.<br />
        Run your own marketing.<br />
        <span style={{ color: "#1a6fa8" }}>No agency. No builder. No one in the way.</span>
      </h1>
    ),
  },
  {
    label: "B — Navy + text-shadow depth",
    h1: (
      <h1 className="text-[2.6rem] md:text-5xl font-bold text-[#0A1F44] leading-[1.15] mb-7">
        Own your website.<br />
        Run your own marketing.<br />
        <span style={{ color: "#0A1F44", textShadow: "1px 1px 4px rgba(0,145,255,0.35)" }}>No agency. No builder. No one in the way.</span>
      </h1>
    ),
  },
  {
    label: "C — Slate blue (muted, closer to navy)",
    h1: (
      <h1 className="text-[2.6rem] md:text-5xl font-bold text-[#0A1F44] leading-[1.15] mb-7">
        Own your website.<br />
        Run your own marketing.<br />
        <span style={{ color: "#3b5998" }}>No agency. No builder. No one in the way.</span>
      </h1>
    ),
  },
  {
    label: "D — Indigo (between navy and blue)",
    h1: (
      <h1 className="text-[2.6rem] md:text-5xl font-bold text-[#0A1F44] leading-[1.15] mb-7">
        Own your website.<br />
        Run your own marketing.<br />
        <span style={{ color: "#3730a3" }}>No agency. No builder. No one in the way.</span>
      </h1>
    ),
  },
  {
    label: "E — Electric blue + subtle drop shadow",
    h1: (
      <h1 className="text-[2.6rem] md:text-5xl font-bold text-[#0A1F44] leading-[1.15] mb-7">
        Own your website.<br />
        Run your own marketing.<br />
        <span style={{ color: "#0091FF", textShadow: "0px 2px 6px rgba(0,145,255,0.25)" }}>No agency. No builder. No one in the way.</span>
      </h1>
    ),
  },
  {
    label: "F — Dark cyan (cool, near-navy)",
    h1: (
      <h1 className="text-[2.6rem] md:text-5xl font-bold text-[#0A1F44] leading-[1.15] mb-7">
        Own your website.<br />
        Run your own marketing.<br />
        <span style={{ color: "#0e6e8c" }}>No agency. No builder. No one in the way.</span>
      </h1>
    ),
  },
  {
    label: "G — Lighter navy (same hue, less dark)",
    h1: (
      <h1 className="text-[2.6rem] md:text-5xl font-bold text-[#0A1F44] leading-[1.15] mb-7">
        Own your website.<br />
        Run your own marketing.<br />
        <span style={{ color: "#1e3a6e" }}>No agency. No builder. No one in the way.</span>
      </h1>
    ),
  },
  {
    label: "H — Navy + font-normal weight (lighter feel, same color)",
    h1: (
      <h1 className="text-[2.6rem] md:text-5xl font-bold text-[#0A1F44] leading-[1.15] mb-7">
        Own your website.<br />
        Run your own marketing.<br />
        <span style={{ color: "#0A1F44", fontWeight: 400 }}>No agency. No builder. No one in the way.</span>
      </h1>
    ),
  },
];

export default function VariantsPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[700px] mx-auto px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-12">
          H1 Variant Comparison — /rebuild-offer
        </p>

        <div className="space-y-16">
          {variants.map(({ label, h1 }, i) => (
            <div key={i}>
              <p className="text-[11px] font-mono text-slate-400 mb-4 uppercase tracking-widest">
                {label}
              </p>
              <div className="border border-slate-100 rounded-xl p-8 bg-slate-50/50">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
                  Provines Consulting
                </p>
                {h1}
                <p className="text-lg text-slate-700 leading-relaxed">
                  Most business owners have been stuck for years — on a platform they can't
                  control, or paying someone else every time they need a simple change.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
