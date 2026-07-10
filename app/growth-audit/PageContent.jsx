"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function GrowthAuditContent() {
  return (
    <div className="bg-white">
      {/* ============================================================ */}
      {/* HERO — navy, the offer in one breath                          */}
      {/* ============================================================ */}
      <section className="bg-[var(--navy)]">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 pt-32 pb-16 md:pt-40 md:pb-24">
          <p className="text-[var(--electric-blue)] text-xs font-bold uppercase tracking-widest mb-5">
            The Owner-Operated Growth Stack
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.06] tracking-tight mb-6">
            Stop renting your marketing.<br />
            Start owning it.
          </h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-xl">
            A marketing department you own: website, CRM, and ads wired together in your
            name, run day to day by an AI operator you direct in plain English.
          </p>
          <Link
            href="/schedule"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[var(--navy)] font-semibold text-lg hover:bg-slate-100 transition-colors"
          >
            Book a growth audit
          </Link>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 01 — A QUICK TEST                                             */}
      {/* ============================================================ */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <p className="text-sm font-semibold text-[var(--electric-blue)] uppercase tracking-wide mb-3">A quick test</p>
          <div className="space-y-5 text-slate-600 leading-relaxed text-lg max-w-2xl">
            <p>
              When was the last time you changed something about your own marketing?
              Not requested a change. Made one.
            </p>
            <p>
              Say the idea hits you on a Tuesday morning: a campaign for the service you want
              more of, in a market you want to break into. Nothing exotic. It needs a landing
              page, ad copy, a campaign pointed at the right searches, and the leads wired into
              follow-up. Be honest: how long would that take you today? Could you build the page
              yourself? Set up the tracking? Who would you have to call first, and how many
              weeks before it&apos;s live?
            </p>
            <p>
              If the answer is a list of people you&apos;d have to wait on, then you don&apos;t own your marketing. You&apos;re renting it, no matter whose name is on the invoices.
            </p>
            <p>
              That&apos;s the deal most owner-operated businesses have with their agency: a rental agreement. You pay a few grand a month. The agency owns the accounts, the data, and everything they&apos;ve learned about your customers on your dime. The reports say things are going well. You can&apos;t check. Leave, and all of it stays with them. You start over from nothing, because none of it was ever yours.
            </p>
          </div>

          <div className="my-10 border-l-4 border-[var(--electric-blue)] bg-slate-50 px-6 py-5">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--electric-blue)] mb-2">Ownership, defined</p>
            <p className="text-[var(--navy)] text-lg leading-relaxed font-medium">
              Ownership isn&apos;t having the passwords. It&apos;s being able to understand your
              own tools, change them, and act on your own vision without a third party standing
              between you and your business. Anything less is rent.
            </p>
          </div>

          <div className="space-y-5 text-slate-600 leading-relaxed text-lg max-w-2xl">
            
            <p>
              And the rent is worse than the money. Every idea you have gets translated through someone else&apos;s ticket queue. You see the ad copy after it&apos;s live. Your vision for your own company arrives watered down and three weeks late, if it arrives at all.
            </p>
            <p>
              Here&apos;s what I&apos;ve learned opening these businesses up: the owner is never
              the problem. You know what you want. You know your market better than any agency
              ever will, and you can say exactly what should happen next. What you don&apos;t
              have is the technical ability to execute it, or the time to learn five tools deep
              enough to try. That gap, between your vision and your hands on the controls, is
              what you&apos;ve been renting people to fill.
            </p>
            <p>
              AI is what closes that gap now. Not a chatbot bolted onto your website. AI
              integrated into your actual systems, where it can see where your leads come from,
              what your ads return, what your competitors are doing, and then act on it the
              moment you say so. Integration is the whole game, and it&apos;s the part nobody
              selling AI wants to do.
            </p>
            <p>
              Once it&apos;s done, that Tuesday-morning idea is a same-day launch. The page, the
              copy, the campaign, the tracking, live before dinner, without calling anyone.
              When you have the thought, you can actually execute it.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 02 — WHAT CHANGED — navy band with comparison table           */}
      {/* ============================================================ */}
      <section className="bg-[var(--navy)] py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
            AI rewrote the economics of marketing labor. It didn&apos;t change who keeps the keys.
          </h2>
          <div className="space-y-5 text-slate-300 leading-relaxed mb-12">
            <p>
              The labor an agency actually does for you, meaning the follow-up, the campaign
              adjustments, the reporting, the CRM upkeep: AI can now do most of that work, all
              day, on your numbers. The agencies know it. Plenty are already using AI to do your
              work and billing you the same retainer.
            </p>
            <p>
              So a wave of new companies will now sell you an &quot;AI marketing team&quot; instead.
              Here&apos;s the part nobody says out loud: they kept the keys too. The bots run on
              their platform. Your data lives inside their subscription. The moment you stop paying,
              your so-called marketing employee vanishes with everything it learned. Same rental
              agreement, new landlord.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="text-slate-400 uppercase text-xs tracking-wider border-b border-white/20">
                  <th className="py-3 pr-4 font-semibold"></th>
                  <th className="py-3 pr-4 font-semibold">Agency</th>
                  <th className="py-3 pr-4 font-semibold">AI platforms</th>
                  <th className="py-3 font-semibold text-[var(--mint)]">The Growth Stack</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-white/10">
                  <td className="py-4 pr-4 font-semibold text-white">Who owns the accounts</td>
                  <td className="py-4 pr-4">They do</td>
                  <td className="py-4 pr-4">They do</td>
                  <td className="py-4 text-white font-medium">You do</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 pr-4 font-semibold text-white">Who does the daily labor</td>
                  <td className="py-4 pr-4">Their juniors, increasingly their AI</td>
                  <td className="py-4 pr-4">Their bots, on their servers</td>
                  <td className="py-4 text-white font-medium">Your operator, on your machine</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 pr-4 font-semibold text-white">Who understands the system</td>
                  <td className="py-4 pr-4">They do</td>
                  <td className="py-4 pr-4">Nobody, really</td>
                  <td className="py-4 text-white font-medium">You do. I train you.</td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 font-semibold text-white">What&apos;s left when you leave</td>
                  <td className="py-4 pr-4">Nothing</td>
                  <td className="py-4 pr-4">Nothing</td>
                  <td className="py-4 text-white font-medium">Everything. Leaving isn&apos;t a concept that applies.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-white text-lg leading-relaxed mt-12 max-w-2xl">
            I do the one thing neither of them will, because it would kill their retainer.
            I build the machine in your name, and I teach you to run it.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 03 — THE BUILD                                                */}
      {/* ============================================================ */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <p className="text-sm font-semibold text-[var(--electric-blue)] uppercase tracking-wide mb-3">The build</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] leading-tight mb-6">
            About five weeks, fixed scope. Every piece exists so you can act on your own
            vision without asking permission.
          </h2>
          <p className="text-slate-600 leading-relaxed text-lg max-w-2xl mb-10">
            None of it works as a bolt-on. A bot that isn&apos;t inside your systems can write
            you a paragraph. An operator that&apos;s wired into your site, your CRM, and your
            ad accounts can see your numbers and execute your decisions. The five weeks exist to do that wiring. By the end, one operator can see the whole board at once: the site, the CRM, the campaigns, the search data, with every path between them mapped. That&apos;s what makes the same-day launch real.
          </p>

          <div className="space-y-4 mb-12">
            {[
              {
                build: "Your website, migrated to a modern stack you own",
                get: "Same URLs, same rankings, none of the platform lock-in. Change your own headline the moment you think of it. No editor to fight, no ticket to file.",
              },
              {
                build: "Your CRM, right-sized to how your team actually sells",
                get: "See every lead and exactly what's happening to it, in one place, with follow-up that fires in minutes instead of days.",
              },
              {
                build: "Your ad campaigns, wired to closed-loop tracking",
                get: "Trace every dollar to booked revenue. You'll never wonder what's working again.",
              },
              {
                build: "An AI orchestrator on a machine you own, wired into all of it",
                get: "Direct the ops in plain English: lead follow-up, campaign adjustments, CRM upkeep, new pages when you need them, SEO and competitor research on tap. It executes; you stay the decision-maker.",
              },
            ].map((row) => (
              <div key={row.build} className="grid md:grid-cols-[1fr_1.3fr] gap-2 md:gap-8 border border-slate-200 p-6">
                <p className="font-semibold text-[var(--navy)]">{row.build}</p>
                <p className="text-slate-600">{row.get}</p>
              </div>
            ))}
          </div>

          <div className="space-y-5 text-slate-600 leading-relaxed text-lg max-w-2xl">
            <p>
              While I&apos;m in there, I do the job I spent twelve years doing inside B2B software
              companies: I fix how your marketing hands off to your sales. Most businesses I open
              up are leaking leads in the gap between the two. Shaking those cobwebs out is part
              of the build, not an upsell.
            </p>
            <p>
              When we&apos;re done, I train you until you don&apos;t need me. Not a Loom library
              and a goodbye. We run it together until directing the operator feels like directing
              an employee, and the distance between your idea and your website is an afternoon,
              not a meeting cycle.
            </p>
            <p>
              Then you have a choice: run it yourself, or keep me on month to month. Either way
              nothing is locked in, and everything is yours. The code, the data, the accounts,
              the machine.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 04 — PROOF                                                    */}
      {/* ============================================================ */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <p className="text-sm font-semibold text-[var(--electric-blue)] uppercase tracking-wide mb-3">Proof</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] leading-tight mb-10">
            Two recent builds.
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white border border-slate-200 p-7">
              <h3 className="font-bold text-[var(--navy)] text-lg mb-3">9-person custom home builder, Oklahoma City</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Paying over 90% more than they needed to in software, with a website trapped in a
                CMS nobody on staff could edit. Four weeks later the site was migrated to a stack
                they own, the CRM was right-sized, and an AI operator was on the day-to-day. Their
                team changes their own website now.
              </p>
              <Link href="/work/custom-home-builder" className="inline-flex items-center text-[var(--electric-blue)] font-medium text-sm hover:underline">
                Read the case study
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            <div className="bg-white border border-slate-200 p-7">
              <h3 className="font-bold text-[var(--navy)] text-lg mb-3">5-person owner-operated company, Oregon</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                The owner had the marketing instincts and none of the tools: a site he
                couldn&apos;t meaningfully edit and a CRM full of automations an agency built and
                never turned on. We migrated the platform and wired ads, landing pages, and the
                CRM into one connected system. Today he runs the whole thing himself. Not
                &quot;his agency runs it.&quot; He runs it.
              </p>
              <Link href="/work/residential-construction" className="inline-flex items-center text-[var(--electric-blue)] font-medium text-sm hover:underline">
                Read the case study
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 05 — THE FIRST STEP + CTA                                     */}
      {/* ============================================================ */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <p className="text-sm font-semibold text-[var(--electric-blue)] uppercase tracking-wide mb-3">The first step</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] leading-tight mb-8">
            You don&apos;t decide about the build today. You decide whether it&apos;s worth
            finding out what you&apos;re leaking.
          </h2>
          <div className="space-y-5 text-slate-600 leading-relaxed text-lg mb-10 max-w-2xl">
            <p>
              The first real step is a growth audit. I go through your site, your CRM, and your
              ad accounts, and I put dollar figures on where leads are leaking. You get the
              findings in writing, in plain English, whether or not we go further. If we do
              build, the audit fee comes off the build. It ends with a plan either way. Worst
              case, you finally know what&apos;s working.
            </p>
          </div>

          <div className="border border-slate-200 bg-slate-50 px-6 py-5 mb-10 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--navy)] mb-3">Where the risk sits</p>
            <ul className="space-y-2 text-slate-700">
              <li>If every account isn&apos;t in your name when we&apos;re done, you don&apos;t pay the final invoice.</li>
              <li>If the stack isn&apos;t live and generating tracked leads within 90 days, I work free until it is.</li>
              <li className="text-[var(--navy)] font-medium">I can offer both because I&apos;m not betting on your dependency. I&apos;m betting you&apos;ll own it.</li>
            </ul>
          </div>

          <p className="text-slate-500 leading-relaxed mb-12 max-w-2xl">
            One honest note on fit: this is for owner-operated businesses doing roughly $500K to
            $10M a year that want control of their own growth. If you&apos;d rather never look at
            a dashboard and pay someone to handle everything forever, an agency is genuinely a
            better fit, and I&apos;ll tell you that on the call.
          </p>

          <div className="text-center border-t border-slate-200 pt-12">
            <Link
              href="/schedule"
              className="inline-flex items-center justify-center px-10 py-5 bg-[var(--navy)] text-white font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              Book a growth audit
            </Link>
            <p className="text-sm text-slate-400 mt-4">
              30 minutes to kick it off. We walk through your site, your CRM, and your ad accounts.
            </p>
          </div>

          <p className="text-sm text-slate-500 italic leading-relaxed mt-14 border-t border-slate-100 pt-8 max-w-2xl">
            P.S. To be clear about what the AI is here, because the market is noisy: it&apos;s
            not a chatbot and it&apos;s not a copywriter. Anyone can get AI to write a paragraph.
            This is an orchestrator that sits inside your site, your CRM, and your ad accounts,
            watches the numbers, and executes the ops work you&apos;d otherwise hire out. The
            system that lets AI actually run things is the hard part. That system is what you
            own when we&apos;re done.
          </p>
        </div>
      </section>
    </div>
  );
}
