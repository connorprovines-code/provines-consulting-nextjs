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
    tagline: "Your complete marketing department, built as systems you own.",
    description:
      "Website, CRM, AI assistants, content engine, SEO, ads integration. One connected system that replaces the agency, the freelancers, and the patchwork of SaaS tools that don't talk to each other. I spent 12+ years building marketing operations for B2B SaaS companies. Now I package that into infrastructure business owners actually own and run themselves.",
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
      "Sometimes you don't need the full build. You need someone who's done this 100 times to look at your business and tell you what's actually going to move the needle. I ran demand gen, GTM, and pipeline for B2B SaaS companies for over a decade before I started building these systems. That background doesn't go away when I'm consulting. It's the whole point. Positioning, pipeline architecture, figuring out where your marketing dollars should actually go. Strategy with implementation behind it.",
    features: [
      "Go-to-market strategy and positioning",
      "Demand gen and pipeline architecture",
      "Marketing operations audit and roadmap",
      "Channel strategy and budget allocation",
      "Marketing org design and hiring plans",
      "Can lead into a full infrastructure build if that makes sense",
    ],
  },
  {
    icon: Bot,
    title: "AI Assistants & Automation",
    tagline: "Agents that handle the work, not just the questions.",
    description:
      "Claude-powered AI assistants that connect to your CRM, draft and publish content, route leads, manage your calendar, and update your website. Configured for your business, your data, your workflows. They get better as they learn how you operate.",
    features: [
      "Lead intake, qualification, and CRM routing",
      "Content drafting, editing, and publishing",
      "Customer communication and automated follow-up",
      "Website updates in plain English",
    ],
  },
  {
    icon: Globe,
    title: "Website & Marketing Operations",
    tagline: "Website, CRM, content, SEO. One connected system you own.",
    description:
      "Your website captures leads and feeds your CRM. Your CRM triggers follow-up. Your content engine publishes through your site. SEO runs in the background. I build the whole thing as one platform on Next.js, and you manage it in plain English.",
    features: [
      "Website rebuild on Next.js, fast, modern, yours to own",
      "CRM with automated lead capture, scoring, and follow-up",
      "AI-driven content and SEO pipeline",
      "Migration from Wix, WordPress, Squarespace, or legacy platforms",
    ],
  },
  {
    icon: Wrench,
    title: "Custom Development",
    tagline: "When the tool you need doesn't exist yet.",
    description:
      "Internal dashboards, client portals, reporting tools, industry-specific apps, API integrations. Sometimes what your business needs is 200 lines of code that do exactly the right thing. Not a $500/month SaaS product that covers 60% of it. I build custom tools that fit into your existing stack and solve the specific problem you're dealing with.",
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
      <section className="bg-[#0A1F44]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Most people come in needing one thing and leave with a system that handles everything.
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              These aren&apos;t a la carte services. They&apos;re building blocks of an integrated marketing infrastructure. Assembled for whatever your business actually needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-5 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--navy)] flex items-center justify-center flex-shrink-0 mt-1">
                  <service.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[var(--navy)]">
                    {service.title}
                  </h2>
                  <p className="text-slate-500 font-medium mt-1">
                    {service.tagline}
                  </p>
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed text-lg mb-6 max-w-3xl">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, fIndex) => (
                  <span
                    key={fIndex}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm bg-slate-50 text-slate-700 border border-slate-100"
                  >
                    <CheckCircle className="w-3.5 h-3.5 flex-shrink-0 text-[var(--mint)]" />
                    {feature}
                  </span>
                ))}
              </div>

              {index < services.length - 1 && (
                <div className="border-b border-slate-100 mt-16" />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-100 py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-6">
            Not sure where to start?
          </h2>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            That&apos;s what the first call is for. We look at where you are now, what&apos;s eating your time, and figure out what to build first.
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
            <Link href="/how-it-works">
              <Button
                size="lg"
                variant="outline"
                className="border-[var(--navy)] text-[var(--navy)] hover:bg-[var(--navy)] hover:text-white text-lg h-14 px-8 w-full sm:w-auto"
              >
                See How It Works
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
