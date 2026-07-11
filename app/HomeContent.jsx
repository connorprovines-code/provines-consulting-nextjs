"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomeContent() {
  return (
    <div className="relative">
      {/* ============================================================ */}
      {/* HERO — navy, asymmetric: text left, scope card right         */}
      {/* ============================================================ */}
      <section className="bg-[var(--navy)] min-h-[90vh] flex items-center">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="grid md:grid-cols-[1.3fr_1fr] gap-12 md:gap-16 items-center">
            <div>
              <p className="inline-block border border-white/25 bg-white/5 px-3 py-1.5 font-[family-name:var(--font-geist-mono)] text-[9.5px] sm:text-[11px] tracking-[0.06em] sm:tracking-[0.08em] text-slate-300 mb-8">THE OWNER-OPERATED GROWTH STACK · REV 2026.07</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.02] tracking-tighter mb-10">
                Stop renting your marketing.<br />
                Start <span className="relative whitespace-nowrap"><span className="border-b-4 border-[var(--mint)]">owning</span><span className="absolute left-0 right-0 -bottom-8 text-center font-[family-name:var(--font-geist-mono)] text-[11px] font-normal tracking-[0.06em] text-[var(--mint)]">|—— in your name ——|</span></span> it.
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-4 max-w-lg">
                I replace your marketing agency with a system you own: website, CRM, and ads,
                all connected, run day-to-day by an AI operator you direct in plain English.
                I build it, hand you the keys, and get out of the way.
              </p>
              <p className="text-sm text-slate-500 mb-10 max-w-md">
                12 years of B2B SaaS marketing. Now applied to business owners
                who need the same infrastructure without hiring a department.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/schedule"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-[var(--navy)] font-semibold text-lg hover:bg-slate-100 transition-colors"
                >
                  Book a growth audit
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center px-8 py-4 text-white font-medium text-lg border-b border-white/30 hover:border-white transition-colors bg-transparent"
                >
                  See the work
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>

            {/* Right side — what this looks like in practice */}
            <div className="hidden md:block self-center">
              <div className="flex flex-col">
                <div className="border border-white/20 bg-white/[0.04] px-5 py-4"><div className="font-[family-name:var(--font-geist-mono)] text-[10px] tracking-[0.08em] text-[var(--mint)] mb-1.5">STEP 01 · AUDIT</div><p className="text-slate-300 text-sm leading-relaxed">Start with a growth audit: I map your current stack, find where leads leak, and show you what you&apos;re overpaying for.</p></div>
                <div className="h-5 border-l border-dashed border-white/30 ml-6"></div>
                <div className="border border-white/20 bg-white/[0.04] px-5 py-4"><div className="font-[family-name:var(--font-geist-mono)] text-[10px] tracking-[0.08em] text-[var(--mint)] mb-1.5">STEP 02 · BUILD</div><p className="text-slate-300 text-sm leading-relaxed">Then I build the full stack in your environment: website, CRM, ads, automation. Every account and asset in your name.</p></div>
                <div className="h-5 border-l border-dashed border-white/30 ml-6"></div>
                <div className="border-2 border-[var(--mint)] bg-white/[0.06] px-5 py-4"><div className="font-[family-name:var(--font-geist-mono)] text-[10px] tracking-[0.08em] text-[var(--mint)] mb-1.5">STEP 03 · OPERATOR</div><p className="text-slate-300 text-sm leading-relaxed">An AI operator, trained on your business, runs the ops: follow-up, campaign adjustments, CRM upkeep, reporting. You direct it in plain English.</p></div>
                <div className="h-5 border-l border-dashed border-white/30 ml-6"></div>
                <div className="border border-white/20 bg-white/[0.04] px-5 py-4"><div className="font-[family-name:var(--font-geist-mono)] text-[10px] tracking-[0.08em] text-[var(--mint)] mb-1.5">STEP 04 · HANDOVER</div><p className="text-slate-300 text-sm leading-relaxed">I train you until you don&apos;t need me, then step back. Stay independent or keep me on light-touch, month to month, nothing locked in.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CONNOR — early, personal, photo left, text right             */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid md:grid-cols-[220px_1fr] gap-10 md:gap-14 items-center">
            <div>
              <img
                src="/connor.jpg"
                alt="Connor Provines"
                className="w-full border border-[var(--line)]"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-[var(--navy)] leading-tight mb-6">
                Connor Provines
              </h2>
              <div className="space-y-5 text-slate-600 leading-relaxed max-w-xl">
                <p>
                  12 years in B2B SaaS building demand gen programs, managing six-figure
                  ad budgets, and scaling pipeline at companies where getting it wrong had real
                  consequences. I know what marketing infrastructure is supposed to look like
                  because I&apos;ve built it at scale.
                </p>
                <p>
                  Now I take that same approach and apply it to business owners who need the
                  caliber of systems that big companies have but shouldn&apos;t have to hire
                  a department to get it. I work with one client at a time, build everything
                  in their environment, and hand them the keys when we&apos;re done.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CASE STUDIES — navy, alternating image/text                   */}
      {/* ============================================================ */}
      <section className="bg-[var(--navy)]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 md:py-28">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-white leading-tight mb-16">
            Every engagement ends the same way: the client owns everything.
          </h2>

          {/* Case Study 1 — T&S: image left, text right */}
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-10 md:gap-16 mb-20 items-start">
            <div>
              <Link href="/work/custom-home-builder" className="group">
                <div className="overflow-hidden border border-white/25">
                  <img
                    src="/ts-after.png"
                    alt="Custom home builder website"
                    className="w-full group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </Link>
            </div>
            <div className="md:pt-2">
              <h3 className="text-2xl font-bold text-white mb-2">Legacy Lock-In to Full Control</h3>
              <p className="text-slate-400 text-sm mb-6">Custom Home Builder, Oklahoma City</p>
              <p className="text-slate-300 leading-relaxed mb-6">
                A 9-person home builder paying over 90% more than they needed to in software costs, with a
                website trapped in a CMS nobody could edit. We migrated the CRM and the site, put an AI operator on the day-to-day, and trained the team. Under four weeks, start to finish.
              </p>
              <Link
                href="/work/custom-home-builder"
                className="inline-flex items-center text-[var(--mint)] font-medium text-sm hover:underline"
              >
                Read the case study
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

          {/* Case Study 2 — Creekside: text left, image right */}
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 items-start">
            <div className="md:order-2">
              <Link href="/work/residential-construction" className="group">
                <div className="overflow-hidden border border-white/25">
                  <img
                    src="/creekside-after.png"
                    alt="Residential construction website"
                    className="w-full group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </Link>
            </div>
            <div className="md:order-1 md:pt-2">
              <h3 className="text-2xl font-bold text-white mb-2">The Bottleneck Was Never the Owner</h3>
              <p className="text-slate-400 text-sm mb-6">Custom Home Builder, Oregon</p>
              <p className="text-slate-300 leading-relaxed mb-6">
                An owner with the creative vision and marketing instincts was stuck on a Wix site
                he couldn&apos;t edit, with a CRM full of automations nobody had turned on. We migrated
                the platform, wired ads, landing pages, and the CRM into one connected system,
                and now he runs the whole thing himself.
              </p>
              <Link
                href="/work/residential-construction"
                className="inline-flex items-center text-[var(--mint)] font-medium text-sm hover:underline"
              >
                Read the case study
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* HOW IT WORKS — narrow column, paragraphs not steps           */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 border-t border-[var(--line)]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-[var(--navy)] leading-tight mb-12">
            I build it. An AI operator runs it. You own all of it.
          </h2>
          <div className="mb-14">
            <p className="flex items-baseline gap-3 font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.07em] text-slate-500 mb-7">FIG. 1 — WHAT YOU OWN WHEN WE&apos;RE DONE<span className="flex-1 border-b border-dotted border-slate-400/60"></span></p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-y-8 md:gap-y-0">
              <div className="relative bg-white border border-[var(--navy)] p-5 md:mr-9"><div className="font-[family-name:var(--font-geist-mono)] text-[10px] text-slate-500 mb-2.5">MOD 01</div><h3 className="font-bold text-lg text-[var(--navy)] tracking-tight mb-1.5">Site</h3><p className="text-[13px] leading-relaxed text-slate-600">Migrated. Same URLs, same rankings, zero lock-in.</p><span className="hidden md:block absolute -right-9 top-1/2 -translate-y-1/2 w-9 text-center font-[family-name:var(--font-geist-mono)] text-[11px] text-slate-500">——▸</span></div>
              <div className="relative bg-white border border-[var(--navy)] p-5 md:mr-9"><div className="font-[family-name:var(--font-geist-mono)] text-[10px] text-slate-500 mb-2.5">MOD 02</div><h3 className="font-bold text-lg text-[var(--navy)] tracking-tight mb-1.5">CRM</h3><p className="text-[13px] leading-relaxed text-slate-600">Right-sized. Follow-up in minutes, not days.</p><span className="hidden md:block absolute -right-9 top-1/2 -translate-y-1/2 w-9 text-center font-[family-name:var(--font-geist-mono)] text-[11px] text-slate-500">——▸</span></div>
              <div className="relative bg-white border border-[var(--navy)] p-5 md:mr-9"><div className="font-[family-name:var(--font-geist-mono)] text-[10px] text-slate-500 mb-2.5">MOD 03</div><h3 className="font-bold text-lg text-[var(--navy)] tracking-tight mb-1.5">Ads</h3><p className="text-[13px] leading-relaxed text-slate-600">Longtail, direct, tracked to booked revenue.</p><span className="hidden md:block absolute -right-9 top-1/2 -translate-y-1/2 w-9 text-center font-[family-name:var(--font-geist-mono)] text-[11px] text-slate-500">——▸</span></div>
              <div className="relative bg-white border-2 border-[var(--electric-blue)] p-5"><div className="font-[family-name:var(--font-geist-mono)] text-[10px] text-[var(--electric-blue)] mb-2.5">MOD 04 · OPERATOR</div><h3 className="font-bold text-lg text-[var(--navy)] tracking-tight mb-1.5">Orchestrator</h3><p className="text-[13px] leading-relaxed text-slate-600">Sees the whole board. Executes what you say.</p></div>
            </div>
            <p className="font-[family-name:var(--font-geist-mono)] text-[11px] text-slate-500 mt-6">every path between modules mapped at build · <span className="text-[var(--electric-blue)]">you direct it in plain English</span> · nothing locked in</p>
          </div>
          <div className="max-w-2xl">
          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p>
              The first thing I do is scope what you actually need versus what you&apos;re paying for.
              Most owners I talk to are either paying an agency they can&apos;t see into, where the
              accounts, the data, and the know-how all live on someone else&apos;s side of the
              fence, or they&apos;re spread across tools that don&apos;t talk to each other.
              I look at the whole picture and build a plan around what matters.
            </p>
            <p>
              Then I build the systems in your environment. Your website moves to a modern stack.
              Your CRM gets right-sized. Your ads, email, and content tools get wired together.
              And I stand up the operator: a dedicated AI, trained on your business, that manages
              the site, follows up with leads, adjusts campaigns, and keeps the CRM clean. No
              developer required.
            </p>
            <p>
              We work together 1:1 until you&apos;re comfortable directing it. I train you on the
              system, flag what needs attention, and make sure nothing falls through the cracks
              during the transition. When you don&apos;t need me anymore, I step back. You own
              everything: the code, the data, the accounts, the machine it all runs on.
            </p>
          </div>
          </div>
          <div className="mt-10">
            <Link
              href="/how-it-works"
              className="inline-flex items-center text-[var(--electric-blue)] font-medium hover:underline"
            >
              Full process breakdown
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CTA — asymmetric, text left, button right                    */}
      {/* ============================================================ */}
      <section className="border-t border-slate-200 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-[var(--navy)] leading-tight mb-4">
                Let&apos;s figure out what you need.
              </h2>
              <p className="text-lg text-slate-500 max-w-md">
                The first step is a <Link href="/growth-audit" className="text-[var(--electric-blue)] hover:underline">growth audit</Link>. I go through your site, your CRM, and your
                ad spend, show you where leads are leaking, and map what you&apos;ll own
                when we&apos;re done.
              </p>
            </div>
            <div className="md:text-right">
              <Link
                href="/schedule"
                className="inline-flex items-center justify-center px-10 py-5 bg-[var(--navy)] text-white font-semibold text-lg hover:opacity-90 transition-opacity"
              >
                Book a growth audit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
