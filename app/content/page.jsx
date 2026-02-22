"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const articles = [
  {
    slug: "what-ai-agents-actually-do-for-small-business",
    title: "What AI Agents Actually Do for a Small Business",
    excerpt:
      "Cut through the hype. Here's what AI agents look like in practice for a service business — CRM automation, SEO monitoring, content updates, and lead follow-up that actually runs without you.",
    readTime: "7 min read",
    date: "February 2026",
    category: "AI & Automation",
  },
  {
    slug: "manual-operations-killing-your-margins",
    title: "The Manual Operations Quietly Killing Your Margins",
    excerpt:
      "You don't notice them because they've always been there — the spreadsheets, the copy-pasting, the follow-up emails you type by hand. But they're costing you more than you think.",
    readTime: "5 min read",
    date: "February 2026",
    category: "Operations",
  },
  {
    slug: "why-off-the-shelf-software-doesnt-fit",
    title: "Why Off-the-Shelf Software Never Quite Fits Your Business",
    excerpt:
      "You're paying for 100 features and using 12 of them. The one thing you actually need it to do? That's the thing it can't do. Here's why custom-built tools are closer than you think.",
    readTime: "6 min read",
    date: "February 2026",
    category: "Custom Tools",
  },
];

export default function Content() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative bg-[#0A1F44]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[var(--electric-blue)]/8 via-[var(--mint)]/5 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Insights for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--electric-blue)] to-[var(--mint)]">
                business owners.
              </span>
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Practical thinking about AI, automation, and operations —
              written for people who run businesses, not developers.
            </p>
          </motion.div>
        </div>

        <div className="relative z-10 h-32" style={{ background: 'linear-gradient(to bottom, #0A1F44 0%, #0A1F44 5%, rgba(10,31,68,0.8) 25%, rgba(10,31,68,0.4) 50%, rgba(255,255,255,0.6) 75%, white 100%)' }} />
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
    </div>
  );
}
