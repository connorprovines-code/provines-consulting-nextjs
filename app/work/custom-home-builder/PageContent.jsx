"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const SHOW_CLIENT_DETAILS = process.env.NEXT_PUBLIC_SHOW_CLIENT_DETAILS === "true";

export default function CaseStudyContent() {
  const clientName = SHOW_CLIENT_DETAILS ? "Turner & Son Homes" : "Custom Home Builder";
  const location = SHOW_CLIENT_DETAILS
    ? "Custom Home Construction — Oklahoma City, OK"
    : "Custom Home Construction — Oklahoma City";

  return (
    <div className="bg-white">
      {/* Back link */}
      <div className="max-w-3xl mx-auto px-6 sm:px-8 pt-24 md:pt-28">
        <Link
          href="/work"
          className="inline-flex items-center text-sm text-slate-400 hover:text-[var(--navy)] transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          All case studies
        </Link>
      </div>

      {/* Header */}
      <header className="max-w-3xl mx-auto px-6 sm:px-8 pt-8 pb-12 md:pb-16">
        <p className="text-[var(--electric-blue)] text-xs font-bold uppercase tracking-widest mb-4">
          Case Study
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--navy)] leading-tight mb-3">
          Legacy Lock-In to Full Control
        </h1>
        <p className="text-lg text-slate-500 mb-8">
          Years of overpaying for software nobody fully used. Fixed in under a month.
        </p>
        <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-normal">
          A 9-person custom home builder was running their entire digital presence on a platform they
          couldn&apos;t meaningfully control. Their website was trapped in a proprietary CMS, their
          software costs were wildly oversized for the team, and nobody on staff could make a change
          without outside help. In under four weeks we rebuilt the site on a modern stack, deployed an
          AI-powered environment the team manages themselves, migrated their CRM, and handed them
          full ownership of everything.
        </p>
      </header>

      {/* Before/After images */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 pb-16">
        <div className="grid grid-cols-2 gap-3">
          <div className="relative rounded-lg overflow-hidden border border-slate-200">
            <div className="absolute top-3 left-3 bg-slate-800/80 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded z-10">
              Before
            </div>
            <img
              src="/ts-before.png"
              alt="Legacy CMS website with dated styling"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative rounded-lg overflow-hidden border border-slate-200">
            <div className="absolute top-3 left-3 bg-[var(--mint)] text-[var(--navy)] text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded z-10">
              After
            </div>
            <img
              src="/ts-after.png"
              alt="Modern Next.js website"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Article body */}
      <article className="max-w-3xl mx-auto px-6 sm:px-8 pb-24">
        {/* The Situation */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-medium text-[var(--navy)] mb-6">
            The Situation
          </h2>
          <div className="space-y-5">
            <p className="text-slate-600 leading-relaxed">
              This is a well-established custom home builder in Oklahoma City that&apos;s been operating
              since the 1960s. They have a 9-person team and strong local brand recognition. From the
              outside, things looked fine.
            </p>
            <p className="text-slate-600 leading-relaxed">
              The website was the most visible problem. It was hosted inside their CRM&apos;s proprietary
              content management system, which meant it was functionally trapped on that platform. The
              styling was broken in places; old CSS, legacy HTML patterns, and an editor that made even
              simple changes feel like a grind. If someone on the team wanted to update a headline or
              swap out an image, they either fought through the editor themselves or waited for an outside
              developer to get to it. The site did not reflect the quality of the homes they build. It
              reflected the limitations of the platform it was stuck on.
            </p>
            <p className="text-slate-600 leading-relaxed">
              On the software side, they were significantly overpaying. The CRM platform they were on
              was built for enterprise sales organizations, and for a team of nine people, the vast
              majority of features went completely unused. A second business under the same umbrella had
              its own separate CRM instance with the same problem. Combined, they were spending over 90%
              more than they needed to on platforms that didn&apos;t fit the size or shape of their operation.
            </p>
          </div>
        </section>

        {/* What We Did */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-medium text-[var(--navy)] mb-8">
            What We Did
          </h2>

          {/* Website Rebuild */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-[var(--navy)] mb-4">
              Website Rebuild
            </h3>
            <div className="space-y-5">
              <p className="text-slate-600 leading-relaxed">
                The site had to come off the proprietary CMS. It came up in our initial conversations
                and quickly became a priority because the CRM migration meant the hosting platform was
                going away regardless, and the state of the site made it clear this needed to happen
                on its own merits too.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We did a full 1:1 page migration into a modern React-based framework. Every page was
                rebuilt with clean, modern styling and proper responsive behavior. Critically, every URL
                was preserved exactly as it was. That meant Google didn&apos;t really register that a
                migration had happened at all; the underlying technology changed but the structure stayed
                the same, so there was no disruption to their search rankings or existing traffic. The
                result is a site that actually looks like the company it represents, loads faster, works
                properly on mobile, and is structured for both search engines and the way people actually
                discover businesses now through AI-powered search tools.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The site rebuild was delivered in under two weeks. This was an aggressive timeline,
                but it needed to be because the CRM migration was already in motion and the site
                couldn&apos;t stay on a platform they were leaving.
              </p>
            </div>
          </div>

          {/* AI Enablement */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-[var(--navy)] mb-4">
              AI-Powered Management Environment
            </h3>
            <div className="space-y-5">
              <p className="text-slate-600 leading-relaxed">
                Rebuilding the site only solves half the problem if the team still can&apos;t manage it
                without calling someone. The whole point of this engagement was to make them self-sufficient,
                so we built an AI-powered environment that gives the team direct control over their own
                platform.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We set up a dedicated virtual machine the team dials into from anywhere, fully configured
                with LLM tools, a development environment, and a purpose-built interface designed for
                people who aren&apos;t developers. The way it works is straightforward: you describe what
                you want to change in plain language, the AI builds the change, and you see a live preview
                side-by-side with the current version so you can review it before anything goes live. It
                handles everything from deploying new landing pages to updating copy to adjusting forms
                to publishing blog posts and running keyword research.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We got on a training call with the team, about an hour long, and walked through everything
                together. By the end of that single session, they had updated their contact page, added a
                mortgage calculator, embedded training videos, restructured the navigation menu, and
                knocked out about four other changes that had been sitting in a backlog. That was over a
                month&apos;s worth of updates by their old timeline, completed in one sitting, because the
                AI environment removed the technical barrier that had been between the team and their own
                website.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The team is running the site now. When something needs to change, someone logs into the
                environment and handles it with AI assistance. There is no agency to call, no developer
                to wait on, no ticket to submit. They have the tools, they understand how to use them,
                and they own the entire platform.
              </p>
            </div>
          </div>

          {/* CRM Migration */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-[var(--navy)] mb-4">
              CRM Migration and Software Consolidation
            </h3>
            <div className="space-y-5">
              <p className="text-slate-600 leading-relaxed">
                The primary business needed to get off their legacy CRM entirely. We didn&apos;t do this
                by hand; the migration was fully programmatic. We built an LLM-powered pipeline that
                connected to both platforms via API, used browser automation to handle the parts that
                didn&apos;t have clean API access, and moved everything over: contacts, deals, properties,
                workflow configurations, the full dataset. The move put them on a platform that actually
                fits a team their size, at a fraction of what they were paying before.
              </p>
              <p className="text-slate-600 leading-relaxed">
                For the second business under the same umbrella, the situation was different. They didn&apos;t
                need a migration; they needed someone to actually look at what they were paying for versus
                what they were using. We reviewed the account, identified everything that was turned on but
                untouched, and recommended they drop the unused features and restructure their plan. That
                conversation alone reduced their annual spend by over 90%. No migration required, just an
                honest assessment of what they actually needed versus what they&apos;d been sold.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Between both businesses, the total reduction in annual software costs was over 90%.
              </p>
            </div>
          </div>

        </section>

        {/* The Outcome */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-medium text-[var(--navy)] mb-8">
            The Outcome
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="py-3 pr-6 text-sm font-bold text-slate-400 uppercase tracking-wider">Before</th>
                  <th className="py-3 text-sm font-bold text-[var(--mint)] uppercase tracking-wider">After</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                <tr className="border-b border-slate-100">
                  <td className="py-4 pr-6">Website locked in a proprietary CMS with broken styling and a painful editor</td>
                  <td className="py-4">Modern, responsive site on a framework the team manages through AI</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 pr-6">No one on the team could make site changes without a developer or agency</td>
                  <td className="py-4">AI-powered environment where any team member updates the site in plain language</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 pr-6">Oversized CRM platforms across two businesses; over 90% of features unused</td>
                  <td className="py-4">Right-sized platforms at over 90% less annual cost</td>
                </tr>
                <tr>
                  <td className="py-4 pr-6">Total dependency on outside vendors for digital presence</td>
                  <td className="py-4">Full ownership of website, CRM, AI tools, and marketing infrastructure</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 inline-flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-full px-5 py-2.5">
            <span className="text-[var(--electric-blue)] text-sm font-bold">Timeline:</span>
            <span className="text-slate-700 text-sm">Kickoff to full handoff in under 4 weeks</span>
          </div>
        </section>

        {/* Closing */}
        <section className="mb-16">
          <div className="space-y-5">
            <p className="text-slate-600 leading-relaxed">
              If this had gone through a traditional agency, it would have been scoped as three separate
              projects: a website redesign, an AI enablement package, and a CRM migration. Each with
              its own timeline, its own invoice, and its own account manager. And at
              the end of all of it, the team would still be calling someone else every time they needed
              a change made.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Instead, this was one engagement. The team runs their own marketing infrastructure now.
              They manage their website through AI, their CRM fits their actual needs, and their digital
              presence belongs to them. The goal was never to become their agency. The goal was to make
              sure they never need one.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-slate-200 pt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-medium text-[var(--navy)] mb-4">
            Want to see what this looks like for your business?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            30 minutes. I&apos;ll walk you through the live systems and we can talk about what makes
            sense for your situation.
          </p>
          <Link
            href="/schedule"
            className="inline-flex items-center justify-center px-10 py-4 bg-[var(--navy)] text-white font-semibold text-lg rounded-lg hover:opacity-90 transition-opacity"
          >
            Book a growth audit
          </Link>
        </section>
      </article>
    </div>
  );
}
