"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Bot,
  Workflow,
  Globe,
  TrendingUp,
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
    tagline: "Your complete marketing department — built as systems you own.",
    description:
      "Website, CRM, AI assistants, content engine, SEO, ads integration — one connected system that replaces the agency, the freelancers, and the patchwork of SaaS tools that don't talk to each other. I've spent 12+ years building marketing operations for B2B SaaS companies. Now I package that into infrastructure that business owners actually own and run themselves.",
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
    icon: TrendingUp,
    title: "Growth Consulting",
    tagline: "Strategy from someone who's built the systems, not just the decks.",
    description:
      "Sometimes you don't need the full infrastructure build — you need someone who's done this 100 times to look at your business and tell you what's actually going to move the needle. I spent 12+ years running demand gen, GTM, and pipeline for B2B SaaS companies before I started building these systems. That background doesn't disappear when I'm consulting — it's the whole point. Whether you need help with positioning, pipeline architecture, or figuring out where your marketing dollars should actually go, this is strategy with implementation behind it.",
    features: [
      "Go-to-market strategy and positioning",
      "Demand gen and pipeline architecture",
      "Marketing operations audit and roadmap",
      "Channel strategy and budget allocation",
      "Marketing org design and hiring plans",
      "Can lead into a full infrastructure build if that's what makes sense",
    ],
  },
  {
    icon: Bot,
    title: "AI Assistants & Intelligent Automation",
    tagline: "Claude-powered agents that handle real work.",
    description:
      "These aren't chatbots that answer FAQs from a knowledge base. I build AI assistants on Anthropic's Claude that connect to your CRM, manage workflows, draft content, handle customer communication, and update your website — all configured for your specific business and data. The difference between what most companies sell as \"AI\" and what I build is that mine actually do things.",
    features: [
      "Lead intake, qualification, and CRM routing",
      "Content drafting, editing, and publishing",
      "Appointment scheduling and calendar management",
      "Customer communication and follow-up",
      "Website updates in plain English",
      "Agents that improve as they learn your business",
    ],
  },
  {
    icon: Globe,
    title: "Website, CRM & Content Platform",
    tagline: "Your website, lead ops, and content engine — one connected system.",
    description:
      "Most businesses run their website on one platform, their CRM on another, their content somewhere else, and none of it talks to each other. I build all of it as one system — your website captures leads and feeds your CRM, your CRM triggers follow-up, your content engine publishes through your website, and SEO runs in the background. Built on Next.js, connected to your CRM of choice, managed in plain English.",
    features: [
      "Website rebuild on Next.js — fast, modern, yours to own",
      "Migration from Wix, WordPress, Squarespace, or GoDaddy",
      "CRM with automated lead capture, scoring, and follow-up",
      "AI-driven content drafting and publishing pipeline",
      "SEO monitoring and keyword tracking baked in",
      "Update pages, publish content, check leads — all in plain English",
    ],
  },
  {
    icon: Wrench,
    title: "Custom Development",
    tagline: "When the tool you need doesn't exist yet.",
    description:
      "Internal dashboards, client portals, reporting tools, industry-specific apps, API integrations. Sometimes what your business needs is 200 lines of code that do exactly the right thing — not a $500/month SaaS product that covers 60% of it. I build custom tools that fit into your existing stack and solve the specific problem you're dealing with.",
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
      <section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[var(--electric-blue)]/6 via-[var(--mint)]/4 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-36 pb-16 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--navy)] mb-6 leading-tight border-l-4 border-transparent" style={{ borderImage: 'linear-gradient(to bottom, var(--electric-blue), var(--mint)) 1', paddingLeft: '1rem' }}>
              Most businesses come to me needing one thing and leave with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--electric-blue)] to-[var(--mint)]">
                a system that handles everything.
              </span>
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl ml-5">
              These aren't à la carte services. They're building blocks of an
              integrated marketing infrastructure — designed by someone who's spent
              12+ years in B2B SaaS marketing, assembled for whatever your
              business actually needs.
            </p>
          </motion.div>
        </div>
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
