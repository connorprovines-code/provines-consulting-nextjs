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

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative bg-[#0A1F44]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[var(--electric-blue)]/10 via-[var(--mint)]/5 to-transparent rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[var(--mint)]/8 to-transparent rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-[var(--mint)] animate-pulse" />
              <span className="text-sm text-slate-300 font-medium">AI-powered operations for SMBs</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]">
              Stop grinding through tasks
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--electric-blue)] to-[var(--mint)]">
                your business should handle itself.
              </span>
            </h1>

            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              I build custom AI agents, automated workflows, and modern digital
              infrastructure that replace the manual work eating your margins.
              CRM, marketing, content, operations — built for your business,
              owned by you, managed in plain English.
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

        <div className="relative z-10 h-32" style={{ background: 'linear-gradient(to bottom, #0A1F44 0%, #0A1F44 5%, rgba(10,31,68,0.8) 25%, rgba(10,31,68,0.4) 50%, rgba(255,255,255,0.6) 75%, white 100%)' }} />
      </section>

      {/* The Pain — Why they need this */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-6">
            You didn't start a business to manage spreadsheets.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            But that's where you are — chasing leads manually, updating
            websites through agencies, copying data between tools, and spending
            hours on work that should take minutes. Meanwhile, the businesses
            pulling ahead have systems doing this for them.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: Clock,
              problem: "Drowning in manual operations",
              detail:
                "Lead follow-up, content updates, reporting, data entry — your day is consumed by tasks that should be automated but aren't.",
            },
            {
              icon: Users,
              problem: "Overpaying for underdelivery",
              detail:
                "Agencies charge monthly for basic changes. Freelancers disappear. SaaS tools don't talk to each other. Nothing is built for your business specifically.",
            },
            {
              icon: TrendingUp,
              problem: "Falling behind on AI",
              detail:
                "You know AI is changing how business gets done, but every solution is either consumer-grade fluff or enterprise software you can't afford.",
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

      {/* What I Build — Core Capabilities */}
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
              Custom-built systems that run your business operations.
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Not templates. Not off-the-shelf SaaS. Solutions engineered
              for how your business actually works.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Bot,
                title: "AI Agents & Assistants",
                description:
                  "Purpose-built agents that handle CRM, lead follow-up, content creation, SEO monitoring, and operational tasks — managed in plain English.",
                accent: "var(--electric-blue)",
              },
              {
                icon: Workflow,
                title: "Process Automation",
                description:
                  "End-to-end workflows that connect your tools, eliminate data entry, and turn multi-step manual processes into one-click operations.",
                accent: "var(--mint)",
              },
              {
                icon: Globe,
                title: "Modern Web Platforms",
                description:
                  "Fast, AI-ready websites built on infrastructure you own. No lock-in, no monthly agency fees — and your agents can update them directly.",
                accent: "var(--electric-blue)",
              },
              {
                icon: Zap,
                title: "System Integrations",
                description:
                  "CRM, email, scheduling, payments, reviews — connected so data flows automatically and nothing falls through the cracks.",
                accent: "var(--mint)",
              },
              {
                icon: BarChart3,
                title: "SEO & Content Engines",
                description:
                  "Automated keyword tracking, content pipelines, and publishing workflows that keep you visible without daily manual effort.",
                accent: "var(--electric-blue)",
              },
              {
                icon: Wrench,
                title: "Custom Tool Development",
                description:
                  "When off-the-shelf doesn't cut it, I build exactly what you need — internal dashboards, client portals, reporting tools, and more.",
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

          <div className="text-center mt-12">
            <Link href="/services">
              <Button
                variant="outline"
                size="lg"
                className="border-[var(--navy)] text-[var(--navy)] hover:bg-[var(--navy)] hover:text-white"
              >
                Explore Full Service Details
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works — Brief */}
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
            No black boxes. No vague timelines. A structured process from
            discovery to independence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Discovery",
              description:
                "We map your current operations, identify where time and money are being wasted, and scope what to build.",
            },
            {
              step: "02",
              title: "Architecture",
              description:
                "I design the systems — agents, automations, integrations, and infrastructure — scoped to your specific needs with clear pricing.",
            },
            {
              step: "03",
              title: "Build & Deploy",
              description:
                "Everything gets built, tested end-to-end, and deployed into your environment. You see it working before it goes live.",
            },
            {
              step: "04",
              title: "Handoff & Training",
              description:
                "Your team learns how to manage everything. Full documentation, 90 days of support, and complete ownership.",
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
      <section className="relative bg-[var(--navy)] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[var(--electric-blue)]/8 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[var(--mint)]/5 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything I build is yours. That's the point.
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              No retainers, no lock-in, no dependency. The engagement ends with
              you owning and operating every system independently.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-3xl mx-auto">
            {[
              { icon: Shield, text: "You own all code, infrastructure, and data" },
              { text: "No recurring fees to me — ever" },
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
      <section className="relative py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--electric-blue)] via-[#0077cc] to-[var(--navy)]" />
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `radial-gradient(circle at 30% 50%, var(--mint), transparent 60%)`
            }} />

            <div className="relative p-12 md:p-16 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Let's talk about what's slowing you down.
              </h2>
              <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto">
                30 minutes. No pitch deck. We'll look at where you're spending
                time on things that should be automated and figure out what to
                build first.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/schedule">
                  <Button
                    size="lg"
                    className="bg-white text-[var(--navy)] hover:bg-slate-100 text-lg h-14 px-8 shadow-lg w-full sm:w-auto font-semibold"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book a Discovery Call
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-transparent border-2 border-white/40 text-white hover:bg-white/10 text-lg h-14 px-8 w-full sm:w-auto"
                  >
                    Send a Message
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
