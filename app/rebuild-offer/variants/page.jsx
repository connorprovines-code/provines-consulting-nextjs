import React from "react";

// ─── Variants ─────────────────────────────────────────────────────────────────
const variants = [
  {
    label: "A — Deep steel blue (darker than electric)",
    style: { color: "#1a6fa8" },
  },
  {
    label: "B — Navy + text-shadow depth",
    style: { color: "#0A1F44", textShadow: "1px 1px 4px rgba(0,145,255,0.35)" },
  },
  {
    label: "C — Slate blue (muted, closer to navy)",
    style: { color: "#3b5998" },
  },
  {
    label: "D — Indigo (between navy and blue)",
    style: { color: "#3730a3" },
  },
  {
    label: "E — Electric blue + subtle drop shadow",
    style: { color: "#0091FF", textShadow: "0px 2px 6px rgba(0,145,255,0.25)" },
  },
  {
    label: "F — Dark cyan (cool, near-navy)",
    style: { color: "#0e6e8c" },
  },
  {
    label: "G — Lighter navy (same hue, less dark)",
    style: { color: "#1e3a6e" },
  },
  {
    label: "H — Navy + font-normal weight (lighter feel, same color)",
    style: { color: "#0A1F44", fontWeight: 400 },
  },
];

export default function VariantsPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[700px] mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-[#0A1F44] mb-4">
          H1 Variant Comparison
        </h1>
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-12">
          /rebuild-offer headline options
        </p>

        <div className="space-y-16">
          {variants.map(({ label, style }, i) => (
            <div key={i}>
              <p className="text-[11px] font-mono text-slate-400 mb-4 uppercase tracking-widest">
                {label}
              </p>
              <div className="border border-slate-100 rounded-xl p-8 bg-slate-50/50">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
                  Provines Consulting
                </p>
                <p className="text-[2.6rem] md:text-5xl font-bold text-[#0A1F44] leading-[1.15] mb-7">
                  Own your website.<br />
                  Run your own marketing.<br />
                  <span style={style}>No agency. No builder. No one in the way.</span>
                </p>
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
