"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const articles = [
  {
    slug: "what-ai-agents-actually-do-for-small-business",
    title: "What AI Agents Actually Do for a Small Business",
    excerpt:
      "Not chatbots. Not hype. Here's what AI agents look like when they're installed in a real service business. Handling lead intake, CRM updates, content, SEO, and website management.",
    readTime: "7 min read",
    date: "February 2026",
    category: "AI & Automation",
  },
  {
    slug: "manual-operations-killing-your-margins",
    title: "The Manual Operations Quietly Killing Your Margins",
    excerpt:
      "Nobody builds an inefficient business on purpose. It happens one workaround at a time. Here's how to spot the manual processes silently taxing your margins, and what to do about them.",
    readTime: "5 min read",
    date: "February 2026",
    category: "Operations",
  },
  {
    slug: "why-off-the-shelf-software-doesnt-fit",
    title: "Why Off-the-Shelf Software Never Quite Fits Your Business",
    excerpt:
      "You sign up, watch the demo, get excited. Then you hit the one thing it can't do. Before you know it you're paying for four platforms and a VA to stitch them together. There's another way.",
    readTime: "6 min read",
    date: "February 2026",
    category: "Custom Tools",
  },
];

export default function ContentPage() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="bg-[#0A1F44]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Insights for business owners.
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              Practical thinking about AI, operations, and the tools that actually move the needle. Written for people who run businesses, not developers.
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
