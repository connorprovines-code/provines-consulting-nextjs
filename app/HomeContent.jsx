"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const SHOW_CLIENT_DETAILS = process.env.NEXT_PUBLIC_SHOW_CLIENT_DETAILS === "true";

export default function HomeContent() {
  return (
    <div className="relative">
      {/* Hero — Value first */}
      <section className="bg-[var(--navy)] min-h-[90vh] flex items-center">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full pt-32 pb-20 md:pt-40 md:pb-28">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-white leading-[1.04] tracking-tight mb-6">
            Stop renting your marketing.<br />
            Start owning it.
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-2xl mb-4">
            No agency captures your voice like you do. I remove the technical
            barrier so the person who knows the business can actually run the marketing.
          </p>
          <p className="text-base text-slate-500 mb-14 max-w-xl">
            Modern site you edit with AI. CRM, ads, and email in one connected system.
            12 years of B2B strategy included — not billed separately.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/schedule"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[var(--navy)] font-semibold text-lg hover:bg-slate-100 transition-colors"
            >
              Book a discovery call
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
      </section>

      {/* Tension — what they feel right now */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <p className="text-slate-400 text-sm font-medium uppercase tracking-widest mb-10">
            The problem
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--navy)] leading-[1.15] mb-10">
            Your agency owns your website. Your ads. Your data.
          </h2>
          <div className="space-y-8 text-lg md:text-xl text-slate-600 leading-[1.7]">
            <p>
              Your site is on Wix or WordPress. It loads slow, it&apos;s hard to update,
              and it doesn&apos;t connect to anything. Your CRM is a spreadsheet.
              Your ads run but you can&apos;t tell what&apos;s working.
            </p>
            <p>
              You&apos;ve looked at agencies — $3k/month to send you a PDF nobody reads.
              You&apos;ve looked at freelancers — they&apos;ll rebuild the site but won&apos;t
              touch the marketing. And you&apos;re still the one holding it all together.
            </p>
          </div>
        </div>
      </section>

      {/* Bridge — the pivot from problem to solution */}
      <section className="bg-[var(--navy)] py-14 md:py-16">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light italic">
            What if one person migrated the site, connected the tools, set up the
            automation, showed you how everything works — and then got out of the way?
          </p>
        </div>
      </section>

      {/* The shift — Value statement */}
      <section className="border-t border-b border-slate-200 py-28 md:py-36 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <p className="text-[var(--electric-blue)] text-sm font-medium uppercase tracking-widest mb-10">
            What changes
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--navy)] leading-[1.12] mb-16">
            Everything runs. Everything&apos;s yours. And you know how it all works.
          </h2>

          <div className="grid md:grid-cols-3 gap-x-12 gap-y-16">
            <div>
              <p className="text-sm font-bold text-[var(--navy)] uppercase tracking-wider mb-3">
                Your house, your keys
              </p>
              <p className="text-slate-600 leading-relaxed">
                Your website moves to a modern stack you control. No platform fees, no lock-in.
                Edit content with AI — no developer needed for day-to-day changes.
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-[var(--navy)] uppercase tracking-wider mb-3">
                One system. Nothing duct-taped together.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Your website, CRM, and ad accounts are wired together. Write a blog post and
                an agent can distribute it, build a landing page, even spin up ad campaigns —
                all from the same connected system.
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-[var(--navy)] uppercase tracking-wider mb-3">
                Strategy&apos;s included. Not a line item.
              </p>
              <p className="text-slate-600 leading-relaxed">
                12 years of B2B SaaS marketing means I look at your entire operation —
                what&apos;s working, what isn&apos;t, where to invest next. Not billed separately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works — compact */}
      <section className="py-28 md:py-36">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <p className="text-slate-400 text-sm font-medium uppercase tracking-widest mb-10">
            The engagement
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] leading-tight mb-16">
            I build it. We run it together. Then it&apos;s yours.
          </h2>
          <div className="space-y-12">
            <div className="flex gap-8">
              <div className="text-4xl font-bold text-slate-200 leading-none shrink-0 w-12">1</div>
              <div>
                <p className="font-semibold text-[var(--navy)] text-lg mb-2">Build</p>
                <p className="text-slate-600 leading-relaxed">
                  I scope what you need, build the systems, and deploy everything in your environment.
                  Website, CRM, automation, ads — scoped to what matters.
                </p>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="text-4xl font-bold text-slate-200 leading-none shrink-0 w-12">2</div>
              <div>
                <p className="font-semibold text-[var(--navy)] text-lg mb-2">Run together</p>
                <p className="text-slate-600 leading-relaxed">
                  I work alongside you 1:1. We make sure everything runs, I train you on the systems,
                  and I flag what needs attention in your marketing.
                </p>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="text-4xl font-bold text-slate-200 leading-none shrink-0 w-12">3</div>
              <div>
                <p className="font-semibold text-[var(--navy)] text-lg mb-2">Hand off</p>
                <p className="text-slate-600 leading-relaxed">
                  When you&apos;re comfortable, I step back. You own everything — code, data,
                  infrastructure. The goal is to make myself unnecessary.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-14">
            <Link
              href="/how-it-works"
              className="inline-flex items-center text-[var(--electric-blue)] font-medium hover:underline text-lg"
            >
              Full process breakdown
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Proof — Creekside as real before/after story */}
      <section className="bg-[var(--navy)] text-white py-28 md:py-36">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <p className="text-[var(--mint)] text-sm font-medium uppercase tracking-widest mb-10">
            Recent work
          </p>

          {SHOW_CLIENT_DETAILS ? (
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] mb-6">
                Creekside Homes
              </h2>
              <p className="text-slate-400 mb-12">
                Residential Construction — Oregon
              </p>

              {/* Screenshot */}
              <div className="mb-14 rounded overflow-hidden border border-white/10">
                <img
                  src="/creekside-after.png"
                  alt="Creekside Homes — rebuilt site on Next.js"
                  className="w-full"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-16">
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Before</p>
                  <div className="space-y-3 text-slate-300 leading-relaxed">
                    <p>Wix site — slow, hard to update, completely disconnected from everything else.</p>
                    <p>Leads went to an inbox. No CRM, no follow-up, no visibility.</p>
                    <p>No ad campaigns. No automation. Owner couldn&apos;t change the site without a developer.</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-bold text-[var(--mint)] uppercase tracking-wider mb-4">After</p>
                  <div className="space-y-3 text-slate-300 leading-relaxed">
                    <p>Custom Next.js site on their own machine. Owner edits content directly with AI — no developer needed.</p>
                    <p>CRM, lead pipeline, and follow-up sequences all automated. Google Ads running and connected.</p>
                    <p>One connected system — blog posts can become landing pages and feed ad campaigns through a single agent.</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] mb-6">
                Residential Construction Company
              </h2>
              <p className="text-slate-400 mb-12">
                Oregon
              </p>

              {/* Screenshot */}
              <div className="mb-14 rounded overflow-hidden border border-white/10">
                <img
                  src="/creekside-after.png"
                  alt="Client website — rebuilt on modern stack"
                  className="w-full"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-16">
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Before</p>
                  <div className="space-y-3 text-slate-300 leading-relaxed">
                    <p>Wix site — slow, hard to update, completely disconnected from everything else.</p>
                    <p>Leads went to an inbox. No CRM, no follow-up, no visibility.</p>
                    <p>No ad campaigns. No automation. Owner couldn&apos;t change the site without a developer.</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-bold text-[var(--mint)] uppercase tracking-wider mb-4">After</p>
                  <div className="space-y-3 text-slate-300 leading-relaxed">
                    <p>Custom Next.js site on company-owned infrastructure. Owner edits content directly with AI — no developer needed.</p>
                    <p>CRM, lead pipeline, and follow-up sequences all automated. Google Ads running and connected.</p>
                    <p>One connected system — blog posts can become landing pages and feed ad campaigns through a single agent.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="mt-14 flex flex-wrap gap-8 items-center">
            <Link
              href="/work"
              className="inline-flex items-center text-[var(--mint)] font-medium hover:underline text-lg"
            >
              See all work
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <span className="text-slate-500 text-sm">
              4 completed engagements &middot; additional case studies available on request
            </span>
          </div>
        </div>
      </section>

      {/* Connor — short, direct */}
      <section className="py-28 md:py-36">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <p className="text-slate-400 text-sm font-medium uppercase tracking-widest mb-10">
            Who you work with
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] leading-tight mb-10">
            I&apos;m Connor.
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-slate-600 leading-[1.7]">
            <p>
              12 years in B2B SaaS — building demand gen programs, managing six-figure
              ad budgets, and scaling pipeline at companies where getting it wrong meant
              real consequences.
            </p>
            <p>
              Now I take that and apply it to business owners who need the same caliber
              of marketing infrastructure but shouldn&apos;t have to hire a team to get it.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 py-28 md:py-36">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--navy)] mb-6 leading-tight">
            Let&apos;s build yours.
          </h2>
          <p className="text-xl text-slate-500 mb-14 max-w-lg mx-auto">
            30 minutes. No pitch deck. We look at what you&apos;ve got
            and what you&apos;ll own when we&apos;re done.
          </p>
          <Link
            href="/schedule"
            className="inline-flex items-center justify-center px-10 py-5 bg-[var(--navy)] text-white font-semibold text-lg hover:bg-[var(--navy)]/90 transition-opacity"
          >
            Book a discovery call
          </Link>
        </div>
      </section>
    </div>
  );
}
