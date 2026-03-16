"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const articles = [
  {
    slug: "you-dont-need-a-marketing-team",
    title: "You Don't Need a Marketing Team. You Need Marketing Infrastructure.",
    excerpt:
      "The cost of hiring a marketing team vs. building systems that do the work. Why infrastructure beats headcount for businesses under 50 employees — and what that infrastructure actually looks like.",
    readTime: "8 min read",
    date: "March 2026",
    category: "Marketing Infrastructure",
  },
  {
    slug: "ai-chatbots-vs-ai-assistants",
    title: "AI Chatbots vs. AI Assistants: Why Most Business Bots Are a Waste of Money",
    excerpt:
      "There's a difference between a chat widget that answers FAQs and an AI assistant that routes leads, updates your website, and manages your CRM. Most businesses are buying the wrong one.",
    readTime: "7 min read",
    date: "March 2026",
    category: "AI & Automation",
  },
  {
    slug: "what-claude-powered-ai-assistant-does-for-small-business",
    title: "What a Claude-Powered AI Assistant Actually Does for a Small Business",
    excerpt:
      "Forget the hype. Here's what happens on a Tuesday morning when your AI assistant handles lead intake, drafts a blog post, updates your homepage, and follows up with yesterday's inquiries — all before you finish coffee.",
    readTime: "7 min read",
    date: "March 2026",
    category: "AI & Automation",
  },
  {
    slug: "migrating-website-from-wix-to-nextjs",
    title: "Migrating Your Website from Wix to Next.js: What Business Owners Need to Know",
    excerpt:
      "Why legacy platforms limit your growth, what modern infrastructure looks like, and what actually happens during a migration. Written for business owners, not developers.",
    readTime: "6 min read",
    date: "March 2026",
    category: "Website Platform",
  },
  {
    slug: "real-cost-of-not-following-up-with-leads",
    title: "The Real Cost of Not Following Up with Leads",
    excerpt:
      "The data on lead response time is brutal. Every hour you wait cuts your conversion rate in half. Here's the math on what that's actually costing you — and what automated follow-up looks like in practice.",
    readTime: "5 min read",
    date: "March 2026",
    category: "Lead Operations",
  },
  {
    slug: "complete-marketing-infrastructure-for-home-builder",
    title: "How I Built a Complete Marketing Infrastructure for a Home Builder in 6 Weeks",
    excerpt:
      "Website migration, AI content agents, CRM overhaul, cost estimation AI, automated lead flow. A full walkthrough of what was built, what it replaced, and how the owner runs it daily.",
    readTime: "10 min read",
    date: "March 2026",
    category: "Case Study",
  },
  {
    slug: "business-owners-guide-to-ai-2026",
    title: "The Business Owner's Guide to AI in 2026: What's Real and What to Build First",
    excerpt:
      "Cutting through the noise. Where AI delivers actual ROI right now for small businesses — operational infrastructure, not shiny consumer tools. What to build first, what to skip.",
    readTime: "9 min read",
    date: "March 2026",
    category: "AI & Automation",
  },
  {
    slug: "why-your-marketing-agency-isnt-building-anything-you-own",
    title: "Why Your $3K/Month Marketing Agency Isn't Building You Anything You Own",
    excerpt:
      "The retainer model means you never own anything. When you leave, you start over. There's an alternative: build the infrastructure once, own it forever, and run it yourself.",
    readTime: "6 min read",
    date: "March 2026",
    category: "Marketing Infrastructure",
  },
];

export default function ContentPage() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-36 pb-16 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--navy)] mb-6 leading-tight">
              Insights for business owners.
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
              Practical thinking about AI implementation, marketing infrastructure, and business automation — written for people who run businesses, not developers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-6">
          {articles.map((article, index) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link href={`/content/${article.slug}`}>
                <div className="group rounded-2xl border border-slate-100 bg-white hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="p-8 md:p-10">
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                      <span className="px-3 py-1 bg-[var(--navy)]/5 text-[var(--navy)] rounded-full text-xs font-medium">
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
                    <h2 className="text-2xl font-bold text-[var(--navy)] mb-3 group-hover:text-[var(--electric-blue)] transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-4 max-w-3xl">
                      {article.excerpt}
                    </p>
                    <span className="text-[var(--electric-blue)] font-medium flex items-center gap-2 group-hover:gap-3 transition-all text-sm">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-4">
            Ready to build your marketing infrastructure?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            30 minutes. No pitch deck. We&apos;ll figure out what to build first.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/schedule">
              <Button
                size="lg"
                className="bg-[var(--navy)] hover:bg-[var(--navy)]/90 text-white text-lg h-14 px-8 w-full sm:w-auto font-semibold"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book a Discovery Call
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-[var(--navy)] text-[var(--navy)] hover:bg-[var(--navy)] hover:text-white text-lg h-14 px-8 w-full sm:w-auto"
              >
                See What I Build
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
