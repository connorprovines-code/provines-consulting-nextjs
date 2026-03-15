"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Search,
  Ruler,
  Hammer,
  Key,
  Calendar,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";

export default function HowItWorksContent() {
  const steps = [
    {
      icon: Search,
      step: "01",
      title: "Discovery",
      subtitle: "I figure out what your marketing team would look like — then design it as infrastructure.",
      description:
        "This is where the GTM experience matters. I'm not just asking what tools you use — I'm mapping where leads come from, where they drop off, what content you should be creating, and how your follow-up should work. This call is free and there's zero obligation.",
      details: [
        "Map where leads come from and where they drop off",
        "Audit your current website, CRM, and marketing tools",
        "Identify what a marketing team would be doing for you",
        "Understand your team's technical comfort level",
      ],
    },
    {
      icon: Ruler,
      step: "02",
      title: "Architecture & Scoping",
      subtitle: "Strategy meets implementation — with clear pricing.",
      description:
        "You get a system design informed by 12+ years of marketing operations — not just a list of features to build. Architecture includes your website platform, CRM configuration, AI assistant design, content pipeline, and integration map — with clear pricing for each module.",
      details: [
        "Detailed solution architecture document",
        "Website, CRM, AI assistant, and content pipeline design",
        "Fixed pricing — no hourly surprises",
        "You choose which modules to include",
      ],
    },
    {
      icon: Hammer,
      step: "03",
      title: "Build & Deploy",
      subtitle: "Everything built, tested, and running in your environment.",
      description:
        "Every build includes Claude-powered AI assistants configured for your specific business — trained on your services, connected to your CRM, ready to handle real workflows. Built on Next.js, Supabase, Vercel, and Anthropic's Claude. Nothing launches until you've seen it working.",
      details: [
        "Iterative build with regular check-ins",
        "Claude-powered AI assistants configured for your business",
        "Website previews and workflow demos before launch",
        "Deployed into your environment — you own everything",
      ],
    },
    {
      icon: Key,
      step: "04",
      title: "Handoff & Independence",
      subtitle: "You run this. That's the whole point.",
      description:
        "Tell your AI to update the homepage. Ask it to draft a blog post. Check your CRM dashboard for this week's leads. That's what 'managed in plain English' actually means. After 90 days, you're fully independent. Any competent developer can pick it up. No proprietary lock-in.",
      details: [
        "Hands-on training for you and your team",
        "Written documentation and SOPs for everything",
        "90 days of post-launch support included",
        "Complete ownership — code, data, infrastructure, everything",
      ],
    },
  ];

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
              From conversation to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--electric-blue)] to-[var(--mint)]">
                full ownership.
              </span>
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
              No black boxes, no vague timelines, no surprises.
              Here's exactly how an engagement works from start to finish.
            </p>
          </motion.div>
        </div>

        <div className="relative z-10 h-32" style={{ background: 'linear-gradient(to bottom, #0A1F44 0%, #0A1F44 5%, rgba(10,31,68,0.8) 25%, rgba(10,31,68,0.4) 50%, rgba(255,255,255,0.6) 75%, white 100%)' }} />
      </section>

      {/* Steps */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="space-y-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Step indicator + title */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-[var(--navy)] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {step.step}
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-[var(--navy)]">
                        {step.title}
                      </h2>
                      <p className="text-slate-500 font-medium">
                        {step.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-600 leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>

                {/* Details card */}
                <div className="rounded-2xl border border-slate-100 bg-white shadow-sm p-8">
                  <div className="space-y-4">
                    {step.details.map((detail, dIndex) => (
                      <div key={dIndex} className="flex items-start gap-3">
                        <CheckCircle
                          className="w-5 h-5 flex-shrink-0 mt-0.5"
                          style={{
                            color: index % 2 === 0 ? 'var(--electric-blue)' : 'var(--mint)',
                          }}
                        />
                        <span className="text-slate-700 text-sm leading-relaxed">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex justify-start pl-8 py-4">
                  <div className="w-0.5 h-12 bg-gradient-to-b from-slate-200 to-transparent" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* What You Need to Provide */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-8 text-center">
              What you need to provide
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-2xl border border-slate-100 bg-white shadow-sm p-8">
                <h3 className="text-lg font-bold text-[var(--navy)] mb-4">
                  From you
                </h3>
                <ul className="space-y-3">
                  {[
                    "A clear picture of your current operations and pain points",
                    "Access to existing tools and platforms (website URL, CRM, etc.)",
                    "Your goals — what success looks like in 6 months",
                    "Availability for check-in calls during the build",
                    "Your team members who will manage things post-launch",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-[var(--mint)] flex-shrink-0 mt-1" />
                      <span className="text-sm text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-white shadow-sm p-8">
                <h3 className="text-lg font-bold text-[var(--navy)] mb-4">
                  What You Walk Away With
                </h3>
                <ul className="space-y-3">
                  {[
                    "Modern website on infrastructure you own (Next.js / Vercel)",
                    "Configured CRM with automated lead pipeline",
                    "Claude-powered AI assistants trained on your business",
                    "Automated content and SEO pipeline",
                    "Full documentation and SOPs for every system",
                    "90 days of post-launch support",
                    "Complete ownership — code, data, infrastructure, everything",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-[var(--electric-blue)] flex-shrink-0 mt-1" />
                      <span className="text-sm text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to see what your marketing infrastructure should look like?
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              The first step is a conversation. No obligation, no pitch — just
              a look at what you're doing manually that should be a system.
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
              <Link href="/services">
                <Button
                  size="lg"
                  className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 text-lg h-14 px-8 w-full sm:w-auto"
                >
                  View Services
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
