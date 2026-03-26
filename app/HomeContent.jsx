"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Calendar,
  Bot,
  Workflow,
  Globe,
  Zap,
  TrendingUp,
  Shield,
  Clock,
  BarChart3,
  Wrench,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

export default function HomeContent() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="bg-[#0A1F44]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-[var(--mint)] animate-pulse" />
              <span className="text-sm text-slate-300 font-medium">AI marketing infrastructure for business owners</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]">
              You know what your marketing should look like. You just don&apos;t have the team to build it.
            </h1>

            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              I build complete marketing systems. Website, AI assistants, CRM,
              content, lead flow. Then I hand you the keys. No retainers,
              no lock-in. It&apos;s yours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/schedule">
                <Button
                  size="lg"
                  className="bg-[var(--mint)] hover:bg-[var(--mint)]/90 text-[var(--navy)] text-lg h-14 px-8 shadow-lg shadow-[var(--mint)]/20 w-full sm:w-auto font-semibold"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book a Discovery Call
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 text-lg h-14 px-8 w-full sm:w-auto"
                >
                  See What I Build
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

      </section>

      {/* The Pain */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-6">
            You&apos;re running the business and the marketing. Neither one gets your full attention.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Content, SEO, a website that actually converts, follow-up that doesn&apos;t depend on your memory. You know all of it matters. But you&apos;re also running the business, so marketing gets whatever time is left. Which is none.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: Clock,
              problem: "You are the marketing department",
              detail:
                "Website updates, content, SEO, lead follow-up, social, ads. It all lands on you. And it gets done when there's time, which there never is.",
            },
            {
              icon: Users,
              problem: "Agencies take your money, not your problems",
              detail:
                "Monthly retainers for basic site changes. Reports nobody reads. \"Strategy\" that's really just a content calendar. You pay for a team that never builds anything you keep.",
            },
            {
              icon: TrendingUp,
              problem: "AI is everywhere and nowhere useful",
              detail:
                "Every tool slaps AI on the label. Most of it is a chat widget that can't find your pricing page. What you actually need are systems that do the work.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--navy)]/5 flex items-center justify-center mb-5">
                <item.icon className="w-6 h-6 text-[var(--navy)]" />
              </div>
              <h3 className="text-lg font-bold text-[var(--navy)] mb-2">
                {item.problem}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What I Build */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-4">
              The marketing infrastructure your company should have had from day one.
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              One connected system. Website, AI assistants, CRM, content engine. It does what a marketing team would do. And you own all of it.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Globe,
                title: "Modern Website You Own",
                description:
                  "Built on Next.js. Fast, SEO-ready, and designed so your AI assistants can update it directly. No agency fees. No platform lock-in. Your code, your hosting, your domain.",
                accent: "var(--electric-blue)",
              },
              {
                icon: Zap,
                title: "CRM & Lead Operations",
                description:
                  "Leads captured, enriched, scored, routed, and followed up. Automatically. Your CRM talks to your website, your ads, and your AI. Nothing falls through.",
                accent: "var(--mint)",
              },
              {
                icon: Bot,
                title: "AI Assistants That Do Real Work",
                description:
                  "Claude-powered agents connected to your CRM, website, and calendar. They handle content, lead intake, customer communication, and scheduling. Not a chatbot. Actual operational tools.",
                accent: "var(--electric-blue)",
              },
              {
                icon: BarChart3,
                title: "SEO & Content Engine",
                description:
                  "Your AI drafts content, you approve it, it goes live. Keyword tracking and SEO monitoring run in the background. Publishing stays consistent without you thinking about it.",
                accent: "var(--mint)",
              },
              {
                icon: Workflow,
                title: "End-to-End Automation",
                description:
                  "Multi-step manual processes turned into one-click operations. Data entry, report generation, follow-up sequences, internal notifications. All handled.",
                accent: "var(--electric-blue)",
              },
              {
                icon: Wrench,
                title: "Custom Development",
                description:
                  "Internal dashboards, client portals, reporting tools, industry-specific apps. When the tool you need doesn't exist or costs too much for what it actually does.",
                accent: "var(--mint)",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="group h-full p-8 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                  <div
                    className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: service.accent }}
                  />
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: `${service.accent}10` }}
                  >
                    <service.icon
                      className="w-6 h-6"
                      style={{ color: service.accent }}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--navy)] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-slate-600 mt-10 max-w-2xl mx-auto"
          >
            Most people come in needing one thing and leave with a system that handles five. That&apos;s by design. Everything connects.
          </motion.p>

          <div className="text-center mt-8">
            <Link href="/services">
              <Button
                variant="outline"
                size="lg"
                className="border-[var(--navy)] text-[var(--navy)] hover:bg-[var(--navy)] hover:text-white"
              >
                See Full Service Details
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* AI Assistant Callout */}
      <section className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-[var(--navy)] p-10 md:p-14"
        >
          <div>
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full border border-white/10 bg-white/5">
              <Bot className="w-4 h-4 text-[var(--mint)]" />
              <span className="text-sm text-slate-300 font-medium">Claude-powered AI assistants</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Every system includes AI assistants trained on your business.
            </h3>
            <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
              They update your website, draft and publish content, handle lead intake, manage your calendar, and answer customer questions. All using your actual CRM data, not a generic knowledge base. This isn&apos;t a chat widget. It&apos;s operational intelligence wired into how your business runs.
            </p>
          </div>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-4">
            How an engagement works
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            No black boxes. No vague timelines. Here&apos;s the process from start to finish.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Discovery",
              description:
                "I look at your current setup, find where time and money are leaking, and figure out what to build first.",
            },
            {
              step: "02",
              title: "Architecture",
              description:
                "I design the systems. Agents, automations, integrations, infrastructure. 12+ years of marketing ops goes into the blueprint.",
            },
            {
              step: "03",
              title: "Build & Deploy",
              description:
                "Everything gets built, tested end-to-end, and deployed in your environment. You see it working before it goes live.",
            },
            {
              step: "04",
              title: "Handoff & Training",
              description:
                "Your team learns how to run everything. Full documentation, 90 days of support, and complete ownership.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[var(--navy)] text-white font-bold text-xl flex items-center justify-center shadow-lg">
                    {item.step}
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 left-full w-full h-px bg-gradient-to-r from-slate-200 to-transparent -translate-y-1/2 ml-2" />
                  )}
                </div>
                <h3 className="text-lg font-bold text-[var(--navy)] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/how-it-works">
            <Button
              variant="outline"
              size="lg"
              className="border-[var(--electric-blue)] text-[var(--electric-blue)] hover:bg-[var(--electric-blue)] hover:text-white"
            >
              See the Full Process
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Ownership Principles */}
      <section className="bg-[var(--navy)] text-white py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything I build is yours. That&apos;s the whole point.
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              No retainers, no lock-in, no dependency. When the engagement ends, you own and operate every system independently.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-3xl mx-auto">
            {[
              { icon: Shield, text: "You own all code, infrastructure, and data" },
              { text: "No recurring fees to me, ever" },
              { text: "Manage agents and systems in plain English" },
              { text: "Any developer can maintain or extend what I build" },
              { text: "Full documentation and SOPs for every system" },
              { text: "90 days of post-launch support included" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <div className="w-5 h-5 rounded-full bg-[var(--mint)]/20 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-[var(--mint)]" />
                </div>
                <span className="text-slate-200">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-6">
              Let&apos;s figure out what to build first.
            </h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              30 minutes. No pitch deck. We look at what you&apos;re doing manually, what should be automated, and where to start.
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
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[var(--navy)] text-[var(--navy)] hover:bg-[var(--navy)] hover:text-white text-lg h-14 px-8 w-full sm:w-auto"
                >
                  Send a Message
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
