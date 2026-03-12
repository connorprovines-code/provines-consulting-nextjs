"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Bot,
  Workflow,
  Globe,
  Zap,
  GraduationCap,
  Wrench,
  CheckCircle,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Bot,
    title: "AI Agents & Custom Assistants",
    tagline: "Purpose-built intelligence for your operations.",
    description:
      "I don't install generic chatbots. I build agents trained on your business — handling CRM management, lead follow-up, content creation, SEO monitoring, and operational tasks that currently eat your time. You manage them in plain English. They learn your patterns and get better.",
    features: [
      "CRM agent — leads captured, enriched, and routed automatically",
      "SEO agent — keyword tracking, content optimization, rank monitoring",
      "Content agent — draft, publish, and schedule without manual work",
      "Custom operational agents — tailored to your specific workflows",
      "Managed in plain English — no technical knowledge required",
      "Agents improve over time as they learn your business",
    ],
  },
  {
    icon: Workflow,
    title: "Process Automation & Workflow Engineering",
    tagline: "Turn multi-step manual work into one-click operations.",
    description:
      "Every business has processes that shouldn't require a person — data entry, report generation, lead routing, follow-up sequences, internal notifications. I map your operations, identify what's wasteful, and build end-to-end automation that eliminates it.",
    features: [
      "End-to-end workflow design and implementation",
      "Multi-tool orchestration (CRM, email, scheduling, billing)",
      "Lead routing and follow-up automation",
      "Internal operations dashboards and reporting",
      "Conditional logic and smart decision trees",
      "Integration with your existing tech stack",
    ],
  },
  {
    icon: Globe,
    title: "Website Rebuild & Digital Platform",
    tagline: "Modern infrastructure you own — built for AI.",
    description:
      "Your website is the foundation everything else connects to. I rebuild outdated sites on modern, AI-ready infrastructure — fast, SEO-optimized, and designed so your agents can update and manage it directly. No lock-in, no recurring fees to me.",
    features: [
      "Full rebuild on Next.js — fast, modern, and extensible",
      "Content and branding migrated from any existing platform",
      "Mobile-first, SEO-optimized by default",
      "AI-editable — update pages in plain English",
      "You own the code, hosting, and domain completely",
      "Any developer can work on it — zero vendor lock-in",
    ],
  },
  {
    icon: Zap,
    title: "System Integrations",
    tagline: "Your tools talking to each other, automatically.",
    description:
      "Most businesses run 5-15 tools that don't communicate. Leads come in from the website but don't make it to the CRM. Appointments get booked but no one gets notified. I connect everything so data flows and nothing falls through the cracks.",
    features: [
      "CRM integration — site leads flow directly into your pipeline",
      "Email marketing and drip campaign automation",
      "Scheduling and appointment booking connections",
      "Review management and reputation monitoring",
      "Payment processing and invoicing workflows",
      "API connections to any platform with an interface",
    ],
  },
  {
    icon: Wrench,
    title: "Custom Tool Development",
    tagline: "When off-the-shelf doesn't fit your business.",
    description:
      "Sometimes the tool you need doesn't exist — or the one that does costs $500/month and only covers 60% of what you actually need. I build custom internal tools, client portals, dashboards, and operational software scoped exactly to your requirements.",
    features: [
      "Internal dashboards and operational tools",
      "Client-facing portals and self-service platforms",
      "Custom reporting and analytics dashboards",
      "Data management and processing tools",
      "Industry-specific applications and calculators",
      "Built to integrate with your existing systems",
    ],
  },
  {
    icon: GraduationCap,
    title: "Training & Handoff",
    tagline: "The goal is for you to not need me.",
    description:
      "Every engagement ends with full ownership transfer. Your team learns how to operate every system, manage every agent, and troubleshoot issues independently. I provide documentation, training, and 90 days of support — then you run it yourself.",
    features: [
      "Hands-on training for you and your team",
      "Comprehensive documentation and SOPs",
      "90 days of post-launch support included",
      "Agent management and troubleshooting training",
      "No ongoing dependency — fully self-sufficient",
      "Available for future projects if you want to expand",
    ],
  },
];

export default function ServicesContent() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-[#0A1F44]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[var(--electric-blue)]/10 via-[var(--mint)]/5 to-transparent rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Solutions built for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--electric-blue)] to-[var(--mint)]">
                how your business actually works.
              </span>
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Every engagement is scoped to your specific operations. These are
              the building blocks — assembled into whatever combination actually
              solves your problem.
            </p>
          </motion.div>
        </div>

        <div className="relative z-10 h-32" style={{ background: 'linear-gradient(to bottom, #0A1F44 0%, #0A1F44 5%, rgba(10,31,68,0.8) 25%, rgba(10,31,68,0.4) 50%, rgba(255,255,255,0.6) 75%, white 100%)' }} />
      </section>

      {/* Services Detail */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Service card */}
              <div className="relative rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                {/* Top accent line */}
                <div
                  className="h-1"
                  style={{
                    background: index % 2 === 0
                      ? `linear-gradient(90deg, var(--electric-blue), var(--mint))`
                      : `linear-gradient(90deg, var(--mint), var(--electric-blue))`,
                  }}
                />

                <div className="p-10 lg:p-12">
                  {/* Header */}
                  <div className="flex items-start gap-5 mb-8">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm"
                      style={{
                        backgroundColor: index % 2 === 0 ? 'var(--electric-blue)' : 'var(--mint)',
                      }}
                    >
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-[var(--navy)] mb-1">
                        {service.title}
                      </h2>
                      <p className="text-slate-500 font-medium text-lg">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed text-lg mb-10 max-w-3xl">
                    {service.description}
                  </p>

                  {/* Features grid */}
                  <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-3">
                        <CheckCircle
                          className="w-4 h-4 flex-shrink-0 mt-1"
                          style={{
                            color: index % 2 === 0 ? 'var(--electric-blue)' : 'var(--mint)',
                          }}
                        />
                        <span className="text-sm text-slate-700 leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-4">
              Pricing
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Every business is different, so every engagement is scoped to what
              you actually need. No standard packages — because the work isn't
              standard.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl border border-slate-100 bg-white shadow-lg overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-[var(--electric-blue)] to-[var(--mint)]" />
              <div className="p-10 md:p-12">
                <div className="space-y-8">
                  {[
                    {
                      title: "Custom-scoped to your business",
                      detail: "Some businesses need a single automation workflow. Others need the full stack — website, agents, CRM, training. I scope based on your situation and give you clear pricing before anything starts.",
                    },
                    {
                      title: "See the work before you commit",
                      detail: "For website rebuilds, I build a working preview before you pay. For automation and agent projects, you get a detailed architecture document and demo. No surprises.",
                    },
                    {
                      title: "No recurring fees to me",
                      detail: "You pay for the engagement, you own the result. Hosting and API costs are yours (typically modest), but there are no ongoing fees to me. After the handoff, you're independent.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-5">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[var(--navy)] flex items-center justify-center text-white font-bold text-sm">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <div>
                        <p className="font-semibold text-[var(--navy)] text-lg mb-1">
                          {item.title}
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 text-center">
                  <Link href="/schedule">
                    <Button
                      size="lg"
                      className="bg-[var(--electric-blue)] hover:bg-[var(--navy)] text-white text-lg h-14 px-8"
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Book a Call to Scope Your Project
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--navy)] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[var(--electric-blue)]/8 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Not sure where to start?
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              That's what the first call is for. We'll look at where you are
              now, what's costing you time and money, and figure out what
              to build first.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/schedule">
                <Button
                  size="lg"
                  className="bg-[var(--mint)] hover:bg-[var(--mint)]/90 text-[var(--navy)] text-lg h-14 px-8 w-full sm:w-auto font-semibold"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book a Discovery Call
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button
                  size="lg"
                  className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 text-lg h-14 px-8 w-full sm:w-auto"
                >
                  See How It Works
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
