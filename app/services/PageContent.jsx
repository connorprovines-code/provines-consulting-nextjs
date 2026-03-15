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
    icon: Workflow,
    title: "Marketing Infrastructure Build",
    tagline: "Your complete marketing department — built as infrastructure you own.",
    description:
      "The full package. Website, CRM, AI assistants, content engine, SEO, ads integration — one system that replaces the agency, the freelancers, and the patchwork of SaaS tools that don't talk to each other. This is for you if you know what your marketing should look like but don't have the team to build or run it.",
    features: [
      "Modern website on infrastructure you own",
      "CRM with automated lead pipeline",
      "Claude-powered AI assistants for content and ops",
      "SEO monitoring and content engine",
      "Ad platform integration and tracking",
      "Full ownership and independence after handoff",
    ],
  },
  {
    icon: Bot,
    title: "AI Assistants & Intelligent Automation",
    tagline: "Claude-powered agents that do real work — not a chat widget.",
    description:
      "I build AI assistants that connect to your CRM, manage real workflows, and handle operational tasks — not a chat bubble that answers FAQs from a knowledge base. Built on Anthropic's Claude, configured specifically for your business, your data, your workflows. This is for you if you've looked at AI chatbot tools and realized they don't actually do anything beyond answering basic questions.",
    features: [
      "Lead intake, qualification, and CRM routing",
      "Content drafting, editing, and publishing",
      "Appointment scheduling and calendar management",
      "Customer communication and follow-up",
      "Website updates in plain English",
      "Agents improve as they learn your business",
    ],
  },
  {
    icon: Globe,
    title: "Website Platform & AI-Managed Content",
    tagline: "Your website isn't a brochure — it's the hub your AI runs through.",
    description:
      "Built on Next.js — fast, SEO-optimized, extensible. Your AI assistants publish content, capture leads, and keep your business visible through it. Update pages in plain English. This is for you if your current website is on a platform that limits what you can do, charges you monthly for basic changes, or can't integrate with modern AI tools.",
    features: [
      "Full rebuild on Next.js — fast and modern",
      "Migration from Wix, WordPress, Squarespace, GoDaddy",
      "AI-editable — update pages in plain English",
      "Mobile-first, SEO-optimized by default",
      "You own the code, hosting, and domain",
      "Any developer can maintain or extend it",
    ],
  },
  {
    icon: Zap,
    title: "CRM & Lead Operations",
    tagline: "Leads in. Follow-up out. Nothing lost in between.",
    description:
      "Full lead lifecycle — capture, enrichment, scoring, routing, follow-up, reporting. Connected to your website, ads, and AI assistants so leads get handled the minute they come in. This is for you if leads come in and then nothing happens — or it takes two days to follow up, or you're manually copying data between tools.",
    features: [
      "Lead capture from website, ads, and forms",
      "Automatic enrichment and scoring",
      "Smart routing to the right person or workflow",
      "Automated follow-up sequences",
      "Connects to GoHighLevel, HubSpot, or custom CRM",
      "Full pipeline visibility and reporting",
    ],
  },
  {
    icon: GraduationCap,
    title: "SEO & Content Engine",
    tagline: "Your AI drafts it. You approve it. It goes live.",
    description:
      "Automated, AI-driven content pipeline. Your AI drafts content, you approve it, it publishes. SEO monitoring runs in the background. Your content engine feeds your website, your website feeds your CRM, your CRM feeds your follow-up. One system. This is for you if you know SEO matters but you haven't published a blog post in six months because who has the time.",
    features: [
      "AI-assisted content drafting and editing",
      "Keyword tracking and rank monitoring",
      "Automated publishing pipeline",
      "Content calendar management",
      "SEO audit and optimization recommendations",
      "Connected to your website and CRM",
    ],
  },
  {
    icon: Wrench,
    title: "Custom Development",
    tagline: "When the tool you need doesn't exist.",
    description:
      "Internal dashboards, client portals, reporting tools, industry-specific apps, API integrations. Sometimes what you need isn't a product — it's 200 lines of code that do exactly what your business requires. This is for you if the tool you need doesn't exist, or it does but costs $500/month and covers 60% of what you need.",
    features: [
      "Internal dashboards and operational tools",
      "Client-facing portals and self-service platforms",
      "Custom reporting and analytics",
      "Industry-specific applications",
      "API integrations between any platforms",
      "Built to work with your existing systems",
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
              Most businesses come to me needing one thing and leave with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--electric-blue)] to-[var(--mint)]">
                a system that handles everything their marketing team would have done.
              </span>
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
              These aren't à la carte services. They're building blocks of an
              integrated marketing infrastructure — assembled for whatever your
              business actually needs.
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
                      detail: "Some businesses need one workflow. Others need the full stack — website, AI assistants, CRM, content engine. I scope to your situation and give you clear pricing before anything starts.",
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
              now, what's eating your time, and figure out what to build first.
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
