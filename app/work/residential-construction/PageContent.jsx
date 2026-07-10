"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const SHOW_CLIENT_DETAILS = process.env.NEXT_PUBLIC_SHOW_CLIENT_DETAILS === "true";

export default function CaseStudyContent() {
  const clientName = SHOW_CLIENT_DETAILS ? "Creekside Homes" : "Custom Home Builder";
  const location = SHOW_CLIENT_DETAILS
    ? "Design-Build Custom Homes — McMinnville, Oregon"
    : "Design-Build Custom Homes — Oregon";

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
          The Bottleneck Was Never the Owner
        </h1>
        <p className="text-lg text-slate-500 mb-8">
          He had the vision and the creative instincts. The tools just couldn&apos;t keep up.
        </p>
        <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-normal">
          A 5-person custom home builder in Oregon was stuck on a Wix site they couldn&apos;t
          meaningfully edit, with a CRM full of automations that had never been turned on, and no
          real system connecting their marketing to their pipeline. We migrated the site to a modern
          stack, built an AI-powered content and marketing engine the owner runs himself, and wired
          the whole thing together so ads, landing pages, and the CRM all talk to each other
          automatically.
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
              src="/creekside-before.png"
              alt="Old Wix website with basic layout"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative rounded-lg overflow-hidden border border-slate-200">
            <div className="absolute top-3 left-3 bg-[var(--mint)] text-[var(--navy)] text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded z-10">
              After
            </div>
            <img
              src="/creekside-after.png"
              alt="Modern Next.js website with AI assistant"
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
              This is a design-build custom home builder in Oregon with a small team and a strong
              reputation in their market. The owner is the kind of person who has more ideas than
              hours in the day; he knows what he wants to build, how he wants to market it, and what
              his brand should look and sound like. What he didn&apos;t have was a platform that let
              him execute any of it without fighting the tools.
            </p>
            <p className="text-slate-600 leading-relaxed">
              The website was on Wix. It had been built by an agency, handed off with a
              &quot;good luck,&quot; and left in a state where the owner couldn&apos;t make meaningful
              changes to it. That might not be obvious from looking at a screenshot of the old site;
              it looks like a website. But Wix sites require you to work inside a proprietary drag-and-drop
              editor to make any change, and if you don&apos;t know that editor, you&apos;re stuck.
              Want to add a new page? You need to understand Wix&apos;s page builder. Want to update
              a blog post? You need to navigate their content manager. Want to change a form? You&apos;re
              in their form designer. Every single change requires learning a different tool inside a
              closed platform you don&apos;t own. For a small team without a dedicated web person, that
              means the site just doesn&apos;t get updated.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Beyond the surface-level frustration, there were deeper technical problems: canonicals
              weren&apos;t set correctly, there were dead URLs creating crawl issues, and the SEO
              foundation was riddled with errors that had been baked in from the start and never
              addressed.
            </p>
            <p className="text-slate-600 leading-relaxed">
              The CRM was a separate mess. A previous agency had gone in and built out an enormous
              automation setup; we&apos;re talking something like 120 steps in an email automation
              sequence for a 5-person team. None of it had ever been turned on. The whole thing was
              just sitting there, untouched, adding complexity without delivering any value. Leads
              were coming in but there was no real pipeline, no structured follow-up, and no system
              connecting the marketing activity to the sales process.
            </p>
          </div>
        </section>

        {/* What We Did */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-medium text-[var(--navy)] mb-8">
            What We Did
          </h2>

          {/* Website Migration */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-[var(--navy)] mb-4">
              Website Migration
            </h3>
            <div className="space-y-5">
              <p className="text-slate-600 leading-relaxed">
                We migrated the entire site off Wix onto a modern React-based framework. Every page
                was rebuilt with clean code, proper responsive behavior, and a structure that actually
                works for search engines instead of fighting them. The canonical issues, dead URLs, and
                crawl errors from the old build were all resolved as part of the migration; the new
                site launched with a clean technical foundation rather than inheriting the old one&apos;s
                problems.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The real difference isn&apos;t what the site looks like; it&apos;s how it gets managed.
                On Wix, every change required the owner to open a proprietary editor, find the right
                tool inside that editor, figure out how to make the change without breaking the layout,
                and hope it rendered correctly. On the new platform, the owner describes what he wants
                in plain language, the AI builds the change, and he reviews a live preview before
                anything goes live. A new landing page, a blog post, a form update, a navigation
                change; it all works the same way. He tells the system what he needs, and the system
                handles the technical execution. The platform is his, the code is his, and the barrier
                between having an idea and publishing it is essentially gone.
              </p>
            </div>
          </div>

          {/* AI Content Engine */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-[var(--navy)] mb-4">
              AI-Powered Content Engine
            </h3>
            <div className="space-y-5">
              <p className="text-slate-600 leading-relaxed">
                This is where the engagement turned into something more than a typical migration. The
                owner had the vision and the creative instincts but didn&apos;t have a system that let
                him act on them at scale. We built one.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We uploaded his full brand style guide along with voice and tone recommendations from
                a separate consultant he&apos;d worked with into the AI environment. That means when he
                sits down to create content, the system already understands how his brand sounds, what
                language to use, and how to maintain consistency across everything it produces. He uses
                this regularly now to create blog content, social posts, and one of the bigger wins has
                been geo-specific landing pages; regional content targeting specific markets that would
                have taken a traditional agency weeks to produce per page.
              </p>
              <p className="text-slate-600 leading-relaxed">
                He trained on the AI tools and took to them immediately. The owner is now producing
                content at a pace that simply wasn&apos;t possible before, not because he lacked the
                ideas but because the tools between his brain and his website used to be the bottleneck.
                That bottleneck is gone.
              </p>
            </div>
          </div>

          {/* CRM Overhaul */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-[var(--navy)] mb-4">
              CRM Audit and Overhaul
            </h3>
            <div className="space-y-5">
              <p className="text-slate-600 leading-relaxed">
                The CRM needed to be taken apart and rebuilt around what the team actually does. We
                used AI to audit the entire existing setup, map out what was configured versus what was
                being used, and build a roadmap for what the CRM should actually look like for a team
                this size. The 120-step automation that had never been turned on was a symptom of a
                broader problem: someone had built a system for a company that didn&apos;t exist yet,
                instead of the one that was actually there.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We sourced, hired, and managed a specialist through Upwork to execute the cleanup and
                reconfiguration at a fraction of what an agency would have charged for the same work.
                The result is a CRM that fits the team, with automations that are actually running and
                a pipeline that connects to the rest of the marketing stack.
              </p>
            </div>
          </div>

          {/* Full-Stack AI Agent */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-[var(--navy)] mb-4">
              Full-Stack Marketing Automation
            </h3>
            <div className="space-y-5">
              <p className="text-slate-600 leading-relaxed">
                After the core pieces were in place, we connected everything together through an AI
                agent that manages the full marketing stack: website, CRM, and Google Ads. The system
                runs autonomously in the background handling routine operations, and the owner can drop
                in at any time to check performance, ask questions about what&apos;s happening, or
                kick off new work.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The ad creation flow is where this really comes together. The owner decides he wants to
                run a new campaign. The system handles keyword research using integrated SEO tools,
                generates the ad copy, builds the landing page on the site, sets up conversion tracking,
                wires the lead flow into the CRM, and configures the bidding strategy. What used to
                require coordinating across an agency, a web developer, and a CRM admin now happens in
                a single conversation. The owner controls the strategy; the AI handles the execution
                across every platform.
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
                  <td className="py-4 pr-6">Wix site the owner couldn&apos;t edit, built by an agency and abandoned</td>
                  <td className="py-4">Modern site on a framework the owner manages through AI, producing content at scale</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 pr-6">CRM with 120-step automations that had never been turned on</td>
                  <td className="py-4">Right-sized CRM with working automations and a connected pipeline</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 pr-6">No connection between ads, landing pages, and lead management</td>
                  <td className="py-4">Full-stack AI agent managing ads, site, and CRM as one system</td>
                </tr>
                <tr>
                  <td className="py-4 pr-6">Creative owner bottlenecked by tools that couldn&apos;t keep up with his ideas</td>
                  <td className="py-4">Owner producing geo-targeted pages, blog content, and ad campaigns on his own</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 inline-flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-full px-5 py-2.5">
            <span className="text-[var(--electric-blue)] text-sm font-bold">Timeline:</span>
            <span className="text-slate-700 text-sm">Core build in 3 weeks, ongoing optimization</span>
          </div>
        </section>

        {/* Closing */}
        <section className="mb-16">
          <div className="space-y-5">
            <p className="text-slate-600 leading-relaxed">
              This engagement started as a website migration and turned into a complete reimagining
              of how a small team runs their marketing. The owner had the vision the entire time; what
              he needed was a platform that could keep up with it. The website, the CRM, the content
              pipeline, and the ad system all work together now as a single stack that he controls.
            </p>
            <p className="text-slate-600 leading-relaxed">
              He&apos;s 100% self-sufficient. We check in because we enjoy the relationship, not
              because he needs us to keep the lights on. The tools are his, the content is his, the
              strategy is his. We just made sure the infrastructure matched the ambition.
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
