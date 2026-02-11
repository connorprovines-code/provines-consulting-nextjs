"use client";

import React from "react";
import { Calendar, Mail } from "lucide-react";

// ─── Constants ────────────────────────────────────────────────────────────────
const CALENDLY_URL = "https://calendly.com/connorprovines/30min";
const CONTACT_EMAIL = "connorprovines@gmail.com";
const CONTACT_PHONE_HREF = "+14083403265";
const CONTACT_PHONE_PARTS = ["+1 (408)", " 340", "-3265"];

// ─── Reusable inline CTA ──────────────────────────────────────────────────────
function InlineCTA({ compact = false }) {
  return (
    <div className={`flex flex-col sm:flex-row flex-wrap gap-3 ${compact ? "mt-5" : "mt-8"}`}>
      <a
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[var(--navy)] hover:bg-[var(--charcoal)] transition-colors"
      >
        <Calendar className="w-4 h-4" />
        Book a 15-min call
      </a>
      <a
        href={`mailto:${CONTACT_EMAIL}`}
        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold border border-slate-300 text-slate-700 hover:border-[var(--navy)] hover:text-[var(--navy)] transition-colors bg-white"
      >
        <Mail className="w-4 h-4" />
        Send an email
      </a>
      <a
        href={`tel:${CONTACT_PHONE_HREF}`}
        className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm border border-slate-200 text-slate-500 hover:border-slate-400 hover:text-[var(--navy)] transition-colors bg-white"
      >
        <span aria-hidden="true">
          {CONTACT_PHONE_PARTS.map((part, i) => (
            <span key={i}>{part}</span>
          ))}
        </span>
        <span className="sr-only">+1 408 340 3265</span>
      </a>
    </div>
  );
}

// ─── Divider ──────────────────────────────────────────────────────────────────
function Divider() {
  return <hr className="border-t border-slate-100 my-14" />;
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function RebuildOffer() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[640px] mx-auto px-6 py-20 md:py-28">

        {/* ── OPENING HOOK ─────────────────────────────────────────────── */}
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8">
          Provines Consulting
        </p>

        <h1 className="text-[2.6rem] md:text-5xl font-bold text-[var(--navy)] leading-[1.15] mb-7" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
          Own your website.<br />
          Run your own marketing.<br />
          <span className="text-slate-400 font-normal">No agency. No builder. No one in the way.</span>
        </h1>

        <p className="text-lg text-slate-700 leading-relaxed mb-4">
          Most business owners have been stuck for years — on a platform they can't control,
          or paying someone else every time they need a simple change. Meanwhile AI is
          changing what's possible for marketing, and it only works if your site is built
          to support it.
        </p>

        <p className="text-lg text-slate-700 leading-relaxed">
          I rebuild websites for service businesses on modern infrastructure, then hand you
          the platform to run your own marketing — updates, SEO, content, lead flow — in
          plain English. No code. No waiting on anyone. Yours to keep and build on forever.
        </p>

        <InlineCTA />

        <Divider />

        {/* ── WHY MOST FIXES FAIL ──────────────────────────────────────── */}
        <h2 style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}className="text-2xl font-bold text-[var(--navy)] mb-5">
          Why every other fix doesn't stick
        </h2>

        <p className="text-slate-700 leading-relaxed mb-4">
          Hire an agency: they take three months, cost twice what they quoted, and now you
          need them every time you want to change a headline. You traded one dependency
          for a more expensive one.
        </p>

        <p className="text-slate-700 leading-relaxed mb-4">
          Try to do it yourself on Wix or Squarespace: you spend a weekend fighting a
          builder that won't cooperate, the site still looks like a template, and you're
          still paying a monthly fee for the privilege.
        </p>

        <p className="text-slate-700 leading-relaxed mb-4">
          Either way, the site doesn't get updated. The leads don't come in the way you
          want. And every new tool you hear about — better SEO, AI content, automated
          follow-up — doesn't work with your platform and probably never will.
        </p>

        <p className="text-slate-700 leading-relaxed">
          That's the part most people don't talk about. The platforms your competitors
          are building toward — the ones that let you automate your marketing, rank faster,
          and run AI agents for lead follow-up — those only work on modern infrastructure.
          Wix isn't getting there. Old WordPress installs aren't either.
        </p>

        <Divider />

        {/* ── HOW THIS WORKS ───────────────────────────────────────────── */}
        <h2 style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}className="text-2xl font-bold text-[var(--navy)] mb-5">
          Here's what I actually do
        </h2>

        <p className="text-slate-700 leading-relaxed mb-4">
          I sent you a preview of your site rebuilt from scratch — your pages, your content,
          your branding — on Next.js and Tailwind. Fast, clean, mobile-first. Not a
          template. Built from your actual site, with fixes along the way.
        </p>

        <p className="text-slate-700 leading-relaxed mb-4">
          That preview is just the starting point. When we work together, you tell me what
          you actually need — more pages, specific features, integrations — and I build
          that. The preview exists so you can see I can do the work before you commit to
          anything.
        </p>

        <p className="text-slate-700 leading-relaxed">
          After launch, you get a platform where you control everything yourself. Not a
          login to some editor that limits what you can do — actual control over your
          entire marketing operation.
        </p>

        <Divider />

        {/* ── WHAT YOU WALK AWAY WITH ──────────────────────────────────── */}
        <h2 style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}className="text-2xl font-bold text-[var(--navy)] mb-6">
          What's included
        </h2>

        <div className="space-y-6">
          {[
            {
              heading: "Your site — fully rebuilt, fully yours",
              body: "You own the code, the hosting, the domain, everything. No monthly fees to me. No lock-in. Any developer you hire down the road can work on it. I can't hold it over you.",
            },
            {
              heading: "An AI platform to run your marketing",
              body: "Make changes to your site in plain English. Update copy, add pages, run SEO audits — without touching code, without calling anyone, on your own schedule. This is where the real value is.",
            },
            {
              heading: "CRM integration",
              body: "Leads from your site go directly into your CRM. If you don't have one, I'll help you pick and set one up. Your website and your sales process work together instead of being disconnected.",
            },
            {
              heading: "Training and 90 days of support",
              body: "I walk you and your team through how to use everything. Then 90 days where I'm available for questions and fixes on anything within scope. You actually learn how to run this.",
            },
            {
              heading: "A foundation you can keep building on",
              body: "The platform isn't just for your website. You can add SEO automation, email workflows, follow-up agents — whatever your business needs next. You're not starting over every time a new tool comes out.",
            },
          ].map(({ heading, body }, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex-shrink-0 w-1 rounded-full bg-[var(--mint)] mt-1.5" style={{ minHeight: "100%" }} />
              <div>
                <p className="font-semibold text-[var(--navy)] mb-1.5">{heading}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>

        <Divider />

        {/* ── CTA #2 (MID-PAGE) ────────────────────────────────────────── */}
        <div className="border border-slate-200 rounded-xl p-7 bg-slate-50">
          <p className="font-semibold text-[var(--navy)] mb-2">
            If this sounds worth a conversation —
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            Grab 15 minutes. I'll walk you through the preview, answer your questions, and
            we'll figure out if the scope and investment makes sense for where you are.
            No pressure either way.
          </p>
          <InlineCTA compact />
        </div>

        <Divider />

        {/* ── OBJECTIONS ───────────────────────────────────────────────── */}
        <h2 style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}className="text-2xl font-bold text-[var(--navy)] mb-6">
          Questions I always get
        </h2>

        <div className="space-y-7">
          <div>
            <p className="font-semibold text-[var(--navy)] mb-2">
              "Why would you rebuild my site before I pay you?"
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              Because a demo beats a pitch deck. You see the actual finished product before
              you decide anything. No vague promises, no mockups — just the thing itself.
              If you don't like it, you don't pay.
            </p>
          </div>

          <div>
            <p className="font-semibold text-[var(--navy)] mb-2">
              "What's the catch?"
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              No catch. This is my sales process. Preview builds convert better than asking
              people to trust a pitch. If the preview is good, we talk. If it isn't, I
              learn something.
            </p>
          </div>

          <div>
            <p className="font-semibold text-[var(--navy)] mb-2">
              "How much does this cost?"
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              Depends on what you need. Some businesses just need the rebuild and the
              platform. Others need CRM integration, automation, multiple people trained.
              I scope it based on your situation and give you clear pricing before anything
              starts. No standard packages because the work isn't standard.
            </p>
          </div>

          <div>
            <p className="font-semibold text-[var(--navy)] mb-2">
              "Do I need to know how to code?"
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              No. The platform is built for plain-English use. You describe what you want,
              it does it. No terminal, no Git, no developer on speed dial.
            </p>
          </div>

          <div>
            <p className="font-semibold text-[var(--navy)] mb-2">
              "How is this different from an agency?"
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              An agency builds your site and you're dependent on them forever. Every change,
              every update, every small fix — you're calling them. I build your site and
              hand you the tools to run it yourself. After the handoff, you don't need me.
              That's the whole point.
            </p>
          </div>
        </div>

        <Divider />

        {/* ── ABOUT ────────────────────────────────────────────────────── */}
        <p className="text-slate-500 text-sm leading-relaxed">
          I'm Connor. I run{" "}
          <a href="/" className="text-[var(--navy)] underline underline-offset-2 hover:text-[var(--electric-blue)]">
            Provines Consulting
          </a>
          , where I specialize in AI automation and marketing systems for service
          businesses. I spent 12+ years in SaaS marketing leadership before building
          these tools — so when I rebuild a site, you're getting both the technical
          infrastructure and the marketing thinking that actually converts. I started
          doing preview builds because I got tired of asking people to trust a pitch —
          and because the work tends to speak for itself.
        </p>

        <Divider />

        {/* ── FINAL CTA ────────────────────────────────────────────────── */}
        <h2 style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}className="text-2xl font-bold text-[var(--navy)] mb-4">
          Want to take a look?
        </h2>

        <p className="text-slate-700 leading-relaxed mb-2">
          If you like what you see, I'll hand you the keys and show you how it works.
          If not, no worries — you can ignore this and nothing changes.
        </p>

        <p className="text-slate-500 text-sm mb-1">Either way, thought you'd want to see it.</p>

        <InlineCTA />

        <p className="mt-10 text-xs text-slate-400">— Connor Provines</p>

      </div>
    </div>
  );
}
