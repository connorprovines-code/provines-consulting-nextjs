"use client";

import Link from "next/link";

export default function HowItWorksContent() {
  return (
    <div className="bg-white">
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-24 md:py-32">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--navy)] mb-6 leading-tight">
          From conversation to full ownership.
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
          No black boxes, no vague timelines. Here&apos;s exactly how an engagement
          works from start to finish.
        </p>
      </section>

      <section className="border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 py-20 md:py-28 space-y-20">
          <div>
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-sm font-semibold text-[var(--electric-blue)] uppercase tracking-wide">01</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--navy)]">Growth Audit</h2>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              This is where 12 years of marketing ops shows up. I&apos;m not just asking
              what tools you use. I&apos;m mapping where leads come from, where they drop off,
              what content you should be creating, and how your follow-up should work.
            </p>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start gap-3"><span className="text-[var(--electric-blue)] mt-0.5">&rarr;</span><span>Map where leads come from and where they drop off</span></li>
              <li className="flex items-start gap-3"><span className="text-[var(--electric-blue)] mt-0.5">&rarr;</span><span>Audit your current website, CRM, and marketing tools</span></li>
              <li className="flex items-start gap-3"><span className="text-[var(--electric-blue)] mt-0.5">&rarr;</span><span>Identify what a marketing team would be doing for you</span></li>
              <li className="flex items-start gap-3"><span className="text-[var(--electric-blue)] mt-0.5">&rarr;</span><span>You get the findings in writing. They&apos;re yours either way.</span></li>
            </ul>
          </div>

          <div>
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-sm font-semibold text-[var(--electric-blue)] uppercase tracking-wide">02</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--navy)]">Scope &amp; Architecture</h2>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              You get a system design informed by over a decade of marketing operations.
              Not a list of features &mdash; a blueprint. Website platform, CRM configuration,
              automation design, content pipeline, integration map. Scoped to what you
              actually need, not what sounds impressive.
            </p>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start gap-3"><span className="text-[var(--electric-blue)] mt-0.5">&rarr;</span><span>Detailed solution architecture document</span></li>
              <li className="flex items-start gap-3"><span className="text-[var(--electric-blue)] mt-0.5">&rarr;</span><span>Fixed scope engagement &mdash; no hourly billing</span></li>
              <li className="flex items-start gap-3"><span className="text-[var(--electric-blue)] mt-0.5">&rarr;</span><span>You choose which modules to include</span></li>
            </ul>
          </div>

          <div>
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-sm font-semibold text-[var(--electric-blue)] uppercase tracking-wide">03</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--navy)]">Build &amp; Deploy</h2>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Everything gets built, tested, and deployed in your environment.
              Site migration, CRM setup, automation pipelines, the AI operator &mdash;
              nothing launches until you&apos;ve seen it working. Regular check-ins
              throughout so there are no surprises.
            </p>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start gap-3"><span className="text-[var(--electric-blue)] mt-0.5">&rarr;</span><span>Iterative build with regular check-ins</span></li>
              <li className="flex items-start gap-3"><span className="text-[var(--electric-blue)] mt-0.5">&rarr;</span><span>Website previews and workflow demos before launch</span></li>
              <li className="flex items-start gap-3"><span className="text-[var(--electric-blue)] mt-0.5">&rarr;</span><span>Deployed in your environment &mdash; you own everything</span></li>
            </ul>
          </div>

          <div>
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-sm font-semibold text-[var(--electric-blue)] uppercase tracking-wide">04</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--navy)]">Run Together &amp; Hand Off</h2>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              This is the part most people skip. I don&apos;t just build it and disappear.
              I work alongside you 1:1 &mdash; making sure everything runs, training you to
              direct the operator and every system underneath it, flagging what needs attention
              in your marketing. When you&apos;re comfortable, I step back. Stay independent
              or keep me on light-touch &mdash; month to month, nothing locked in.
            </p>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start gap-3"><span className="text-[var(--electric-blue)] mt-0.5">&rarr;</span><span>Hands-on training for you and your team</span></li>
              <li className="flex items-start gap-3"><span className="text-[var(--electric-blue)] mt-0.5">&rarr;</span><span>Written documentation and SOPs for everything</span></li>
              <li className="flex items-start gap-3"><span className="text-[var(--electric-blue)] mt-0.5">&rarr;</span><span>Post-launch support included</span></li>
              <li className="flex items-start gap-3"><span className="text-[var(--electric-blue)] mt-0.5">&rarr;</span><span>Complete ownership of code, data, and infrastructure</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <h3 className="text-xl font-bold text-[var(--navy)] mb-6">What you provide</h3>
              <ul className="space-y-4 text-slate-600">
                <li>A clear picture of your current operations and pain points</li>
                <li>Access to existing tools and platforms</li>
                <li>Your goals and what success looks like in 6 months</li>
                <li>Availability for check-in calls during the build</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[var(--navy)] mb-6">What you walk away with</h3>
              <ul className="space-y-4 text-slate-600">
                <li>Modern website on infrastructure you own</li>
                <li>Configured CRM with automated lead pipeline</li>
                <li>A dedicated AI operator that runs the day-to-day &mdash; you direct it in plain English</li>
                <li>Full documentation and SOPs for every system</li>
                <li>Complete ownership &mdash; code, data, accounts, infrastructure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-6">
            The first step is the growth audit.
          </h2>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl mx-auto">
            I go through what you&apos;re working with, quantify where the leaks are,
            and hand you the findings in writing.
          </p>
          <Link
            href="/schedule"
            className="inline-flex items-center justify-center px-8 py-4 bg-[var(--navy)] text-white font-semibold text-lg rounded-lg hover:opacity-90 transition-opacity"
          >
            Book a growth audit
          </Link>
        </div>
      </section>
    </div>
  );
}
