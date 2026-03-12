"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const articles = {
  "what-ai-agents-actually-do-for-small-business": {
    title: "What AI Agents Actually Do for a Small Business",
    date: "February 2026",
    readTime: "7 min read",
    category: "AI & Automation",
    content: [
      {
        type: "paragraph",
        text: `There's a lot of noise about AI right now. Every SaaS company has slapped "AI-powered" on their marketing page. Every LinkedIn post promises that AI will 10x your productivity. Most of it is vague, overhyped, or designed to sell you a subscription you don't need.`,
      },
      {
        type: "paragraph",
        text: `So let's talk about what AI agents actually look like when they're installed in a real small business — not a tech company, not a startup, but a service business with 5-50 employees that makes money by doing good work for real clients.`,
      },
      {
        type: "heading",
        text: "First: What Is an AI Agent, Actually?",
      },
      {
        type: "paragraph",
        text: `An AI agent is software that can take action on your behalf — not just answer questions, but actually do things. It can read your inbox, update your CRM, draft content, monitor your SEO rankings, follow up with leads, and make decisions based on rules you define. Think of it as a virtual team member that handles the repetitive operational work you're currently doing manually.`,
      },
      {
        type: "paragraph",
        text: `The key difference between an AI agent and a regular automation tool (like Zapier) is judgment. Zapier follows rigid if-then rules. An agent can look at context, interpret it, and decide what to do. "This lead came from the roofing page, has a commercial email, and filled out the emergency form — route to the owner directly and mark as high priority." That's agent behavior.`,
      },
      {
        type: "heading",
        text: "What This Looks Like in Practice",
      },
      {
        type: "subheading",
        text: "CRM Agent",
      },
      {
        type: "paragraph",
        text: `A lead fills out your contact form. The CRM agent captures their information, enriches it (company size, industry, location), scores it based on your criteria, creates a record in your pipeline, and sends them a personalized acknowledgment email — all before you've looked at your phone. If the lead is high-value, it texts you directly. If it's a tire-kicker, it queues a nurture sequence. The agent handles 90% of lead intake that you or your admin used to do by hand.`,
      },
      {
        type: "subheading",
        text: "SEO Agent",
      },
      {
        type: "paragraph",
        text: `Your SEO agent monitors your keyword rankings weekly, tracks competitor movements, identifies content gaps, and flags when a page drops below position 10 for a target keyword. It can draft optimized content, suggest title tag changes, and generate internal linking recommendations. Instead of paying an agency $2,000/month to send you a PDF report, you have an agent that actually watches the numbers and tells you when to act.`,
      },
      {
        type: "subheading",
        text: "Web Management Agent",
      },
      {
        type: "paragraph",
        text: `Need to update your hours for a holiday? Change a team member's bio? Add a new service to your site? Instead of emailing your agency and waiting 3 days, you tell your web management agent in plain English: "Update our holiday hours to closed December 24-26 on the contact page." It makes the change, shows you a preview, and deploys when you approve. Your website is no longer something you need a developer to touch.`,
      },
      {
        type: "subheading",
        text: "Content Agent",
      },
      {
        type: "paragraph",
        text: `Your content agent tracks what topics are performing in your industry, drafts blog posts and social content based on your positioning, formats everything for your website, and can publish on a schedule you define. It's not replacing your voice — it's doing the 80% of content work that's research, formatting, and scheduling, so you only need to review and approve.`,
      },
      {
        type: "heading",
        text: "What This Costs vs. What You're Paying Now",
      },
      {
        type: "paragraph",
        text: `Most businesses I work with are spending $3,000-8,000/month across agency retainers, SaaS subscriptions, and manual labor to handle the work these agents do. The agents run on infrastructure that typically costs $50-200/month in API and hosting fees. The math isn't complicated.`,
      },
      {
        type: "paragraph",
        text: `The difference is that agents are a one-time build. You pay to have them built and configured for your business. After that, you own them. The ongoing costs are the API calls and hosting — pennies per interaction, not thousands per month.`,
      },
      {
        type: "heading",
        text: "Who This Is For (and Who It Isn't)",
      },
      {
        type: "paragraph",
        text: `This works best for service businesses and owner-operators who have proven demand but are drowning in operational overhead. Contractors, professional firms, local service companies, agencies that want to stop being agencies. If you're spending more time managing your business than doing the work that makes money, agents are the leverage point.`,
      },
      {
        type: "paragraph",
        text: `This isn't for businesses that want a chatbot on their website. It's not for companies looking for a quick hack. It's for people who understand that the businesses winning right now are the ones that figured out how to automate the grind and focus on what actually matters.`,
      },
      {
        type: "heading",
        text: "The Bottom Line",
      },
      {
        type: "paragraph",
        text: `AI agents aren't magic and they're not hype — they're a practical tool that lets small businesses operate with the efficiency of companies ten times their size. The question isn't whether AI will change how your business runs. It's whether you'll be the one adopting it or the one competing against businesses that did.`,
      },
    ],
  },
  "manual-operations-killing-your-margins": {
    title: "The Manual Operations Quietly Killing Your Margins",
    date: "February 2026",
    readTime: "5 min read",
    category: "Operations",
    content: [
      {
        type: "paragraph",
        text: `Nobody wakes up one morning and decides to build an inefficient business. It happens gradually — one workaround at a time, one "I'll just handle that manually for now" after another. Before you know it, you've got a team of five people and three of them spend half their day on tasks that exist only because your systems don't talk to each other.`,
      },
      {
        type: "heading",
        text: "The Tasks You Don't Notice Anymore",
      },
      {
        type: "paragraph",
        text: `Here's what manual operations actually look like in most service businesses:`,
      },
      {
        type: "paragraph",
        text: `A lead comes in through your website. Someone copies their info into the CRM. Then someone sends them an email. Then someone checks the CRM two days later to see if they responded. Then someone follows up. Each of these is a manual step that takes 5-10 minutes. Multiply by 20 leads a week. That's a full day of someone's time — just on lead intake.`,
      },
      {
        type: "paragraph",
        text: `Your admin sends out invoices. Then checks whether they've been paid. Then sends reminders. Then updates the spreadsheet. Then tells the project manager the payment came through. Five touchpoints for something that should be completely automatic.`,
      },
      {
        type: "paragraph",
        text: `You need to update your website. You email the agency. They email back asking for specifics. You email the specifics. They make the change three days later. You check it and notice a typo. You email them about the typo. Seven days and six emails for a phone number change.`,
      },
      {
        type: "heading",
        text: "Why This Matters More Than You Think",
      },
      {
        type: "paragraph",
        text: `The direct cost is obvious — you're paying people to do work a machine should handle. But the indirect costs are bigger:`,
      },
      {
        type: "paragraph",
        text: `Speed-to-lead drops. When a lead waits 24 hours for a response because your intake process is manual, you lose 60% of them. That's not a stat I made up — Harvard Business Review studied it. The businesses that respond within 5 minutes are 21x more likely to qualify the lead than those that respond within 30 minutes.`,
      },
      {
        type: "paragraph",
        text: `Errors compound. Every manual data entry is a chance for something to go wrong. Wrong phone number. Misspelled name. Lost email. Missed follow-up. Each error is small, but they accumulate into a pattern of unreliability that clients notice even if you don't.`,
      },
      {
        type: "paragraph",
        text: `You can't scale. When every new client adds manual work, growth becomes linear — you need proportionally more people for proportionally more revenue. Automated businesses scale logarithmically — the system handles the increased volume without proportional cost increases.`,
      },
      {
        type: "heading",
        text: "The Audit You Should Do This Week",
      },
      {
        type: "paragraph",
        text: `Take one day and write down every time you or your team manually moves data from one place to another. Every copy-paste. Every "let me check on that." Every time someone has to remember to do something. You'll be surprised — most businesses find 15-25 manual processes that happen daily, and at least half of them can be fully automated.`,
      },
      {
        type: "paragraph",
        text: `The ones that matter most are the revenue-adjacent ones: lead intake, follow-up, proposals, invoicing, onboarding. These directly affect how fast you close and how reliably you deliver. Start there.`,
      },
      {
        type: "heading",
        text: "What Automation Actually Looks Like",
      },
      {
        type: "paragraph",
        text: `This isn't about replacing your team. It's about redirecting their energy. Your office manager shouldn't be copy-pasting lead info into a CRM — they should be building relationships with existing clients. Your marketing person shouldn't be manually scheduling social posts — they should be developing strategy.`,
      },
      {
        type: "paragraph",
        text: `Automation takes the repetitive, rule-based work off people's plates so they can do the judgment-based work that actually grows your business. The people don't go away — they just start doing work that matters.`,
      },
      {
        type: "heading",
        text: "The Bottom Line",
      },
      {
        type: "paragraph",
        text: `Every manual process in your business is a silent tax on your margins. You don't see it because you've always paid it. But your competitors who've automated these operations are operating at 30-50% lower overhead on the same revenue. That gap only widens with time.`,
      },
    ],
  },
  "why-off-the-shelf-software-doesnt-fit": {
    title: "Why Off-the-Shelf Software Never Quite Fits Your Business",
    date: "February 2026",
    readTime: "6 min read",
    category: "Custom Tools",
    content: [
      {
        type: "paragraph",
        text: `You've been here before. You find a new tool that's supposed to solve your problem. You sign up, watch the demo, get excited. Then you try to use it for your actual workflow and hit a wall. The thing it can't do — the one specific thing your business needs — is the thing that would make it actually useful.`,
      },
      {
        type: "paragraph",
        text: `So you work around it. You build a spreadsheet that supplements it. You hire a VA to handle the gap. You pay for a second tool that covers what the first one doesn't. And suddenly you're spending $800/month across four platforms, plus 10 hours a week of manual work stitching them together. Sound familiar?`,
      },
      {
        type: "heading",
        text: "The Fundamental Problem with SaaS",
      },
      {
        type: "paragraph",
        text: `SaaS products are built for the average of their customer base, not for any specific customer. They have to serve a roofing company in Dallas and a law firm in Seattle and a marketing agency in Miami — all with the same interface. To do that, they make everything generic enough to be usable but specific enough to feel like it's purpose-built. It's an illusion.`,
      },
      {
        type: "paragraph",
        text: `The result is that every business ends up adapting their workflow to fit the software, instead of the other way around. You change how you do things to match what the tool can do. That's backwards. Your process exists because it works for your clients and your team. The software should support the process — not redefine it.`,
      },
      {
        type: "heading",
        text: "What You're Actually Paying For",
      },
      {
        type: "paragraph",
        text: `Let's do the real math. Say you're paying $200/month for a CRM, $150 for an email marketing tool, $100 for a project management platform, $80 for a scheduling tool, and $50 for a reporting dashboard. That's $580/month — $6,960/year — for tools that each do 60% of what you need.`,
      },
      {
        type: "paragraph",
        text: `Now add the labor cost of the gaps. Your admin spends 5 hours/week managing the workarounds between these tools. At $25/hour, that's $6,500/year in labor just to compensate for software limitations. Total real cost: $13,460/year for a stack that's "good enough."`,
      },
      {
        type: "paragraph",
        text: `And it never gets better. You'll still be paying that next year. And the year after that. SaaS pricing goes up, never down. The features you actually need stay on the roadmap. The integrations remain "coming soon."`,
      },
      {
        type: "heading",
        text: "The Custom Alternative",
      },
      {
        type: "paragraph",
        text: `Custom-built tools used to be prohibitively expensive. Building a CRM from scratch would cost $100,000+ and take months. That was true five years ago. It's not true anymore.`,
      },
      {
        type: "paragraph",
        text: `Modern development frameworks and AI-assisted engineering have compressed the cost and timeline of custom software dramatically. A tailored internal dashboard that replaces three SaaS tools can be built in weeks, not months. A custom CRM that matches your exact pipeline stages, data fields, and automation rules can cost less than two years of the SaaS subscriptions it replaces.`,
      },
      {
        type: "paragraph",
        text: `And here's the part that changes the math completely: you own it. No monthly fees to anyone for the software itself. The only ongoing costs are hosting (typically $20-50/month) and any API integrations. You're not renting access to your own business data.`,
      },
      {
        type: "heading",
        text: "When Custom Makes Sense",
      },
      {
        type: "paragraph",
        text: `Custom tools aren't always the answer. If a SaaS product genuinely fits your workflow and the price is reasonable, use it. Don't build custom for the sake of building custom.`,
      },
      {
        type: "paragraph",
        text: `But custom makes sense when:`,
      },
      {
        type: "paragraph",
        text: `You're paying for 3+ tools that should be one system. You have workarounds and manual processes bridging the gaps between them. The specific workflow your business runs doesn't match any product's default settings. You've been "making it work" for so long that you've forgotten what efficient actually looks like.`,
      },
      {
        type: "paragraph",
        text: `If that sounds like where you are, it's worth having the conversation about what a purpose-built solution would look like. Not to replace everything — but to replace the friction points that are silently costing you time and money every single day.`,
      },
      {
        type: "heading",
        text: "The Bottom Line",
      },
      {
        type: "paragraph",
        text: `Off-the-shelf software is designed for the general case. Your business is a specific case. The further those two things diverge, the more you pay — in subscription fees, in workaround labor, and in opportunities lost to friction. Custom tools don't have to be a massive investment. They just have to fit the way you actually work.`,
      },
    ],
  },
};

export default function ArticleContent() {
  const { slug } = useParams();
  const article = articles[slug];

  if (!article) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-32 text-center">
        <h1 className="text-3xl font-bold text-[var(--navy)] mb-4">
          Article not found
        </h1>
        <Link href="/content">
          <Button variant="outline">Back to Content</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="relative bg-[#0A1F44]">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/content"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">All Articles</span>
            </Link>

            <div className="flex items-center gap-4 text-sm text-slate-400 mb-6">
              <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-slate-300">
                {article.category}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {article.date}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              {article.title}
            </h1>
          </motion.div>
        </div>

        <div className="relative z-10 h-24" style={{ background: 'linear-gradient(to bottom, #0A1F44 0%, #0A1F44 5%, rgba(10,31,68,0.8) 25%, rgba(10,31,68,0.4) 50%, rgba(255,255,255,0.6) 75%, white 100%)' }} />
      </section>

      {/* Article Body */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {article.content.map((block, index) => {
            if (block.type === "heading") {
              return (
                <h2
                  key={index}
                  className="text-2xl font-bold text-[var(--navy)] mt-12 mb-4"
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === "subheading") {
              return (
                <h3
                  key={index}
                  className="text-lg font-bold text-[var(--navy)] mt-8 mb-2"
                >
                  {block.text}
                </h3>
              );
            }
            return (
              <p
                key={index}
                className="text-slate-700 leading-relaxed text-lg"
              >
                {block.text}
              </p>
            );
          })}
        </motion.div>

        {/* Author / CTA */}
        <div className="mt-20 pt-10 border-t border-slate-100">
          <div className="rounded-2xl bg-gradient-to-br from-[var(--navy)] to-[#112240] p-10 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">
              Want to see this in action?
            </h3>
            <p className="text-slate-300 mb-6 max-w-lg mx-auto">
              Book a 30-minute discovery call. We'll look at your
              operations and identify what to automate first.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/schedule">
                <Button
                  size="lg"
                  className="bg-[var(--mint)] hover:bg-[var(--mint)]/90 text-[var(--navy)] font-semibold w-full sm:w-auto"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book a Call
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  className="bg-transparent border border-white/30 text-white hover:bg-white/10 w-full sm:w-auto"
                >
                  View Services
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
