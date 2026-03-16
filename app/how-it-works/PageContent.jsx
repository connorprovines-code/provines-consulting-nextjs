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
      subtitle: "Figure out what you actually need, not what sounds good on paper.",
      description:
        "This is where the GTM experience shows up. I'm not just asking what tools you use. I'm mapping where leads come from, where they drop off, what content you should be creating, and how your follow-up should work. This call is free and there's zero obligation.",
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
      subtitle: "Strategy meets implementation, scoped to your business.",
      description:
        "You get a system design informed by 12+ years of marketing operations. Not just a list of features to build. Architecture covers your website platform, CRM configuration, AI assistant design, content pipeline, and integration map. Scoped to what you actually need.",
      details: [
        "Detailed solution architecture document",
        "Website, CRM, AI assistant, and content pipeline design",
        "Scoped engagement, no hourly billing",
        "You choose which modules to include",
      ],
    },
    {
      icon: Hammer,
      step: "03",
      title: "Build & Deploy",
      subtitle: "Everything built, tested, and running in your environment.",
      description:
        "Every build includes Claude-powered AI assistants configured for your specific business. Trained on your services, connected to your CRM, ready to handle real workflows. Built on Next.js, Supabase, Vercel, and Anthropic's Claude. Nothing launches until you've seen it working.",
      details: [
        "Iterative build with regular check-ins",
        "Claude-powered AI assistants configured for your business",
        "Website previews and workflow demos before launch",
        "Deployed into your environment, you own everything",
      ],
    },
    {
      icon: Key,
      step: "04",
      title: "Handoff & Independence",
      subtitle: "You run this. That's the whole point.",
      description:
        "Tell your AI to update the homepage. Ask it to draft a blog post. Check your CRM dashboard for this week's leads. That's what managing in plain English actually looks like. After 90 days, you're fully independent. Any developer can pick it up. No proprietary lock-in.",
      details: [
        "Hands-on training for you and your team",
        "Written documentation and SOPs for everything",
        "90 days of post-launch support included",
        "Complete ownership of code, data, and infrastructure",
      ],
    },
  ];

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
              From conversation to full ownership.
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              No black boxes, no vague timelines, no surprises.
              Here&apos;s exactly how an engagement works from start to finish.
            </p>
          </motion.div>
        </div>
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
                    "Your goals and what success looks like in 6 months",
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
                    "Complete ownership of code, data, and infrastructure",
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
      <section className="border-t border-slate-100 py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-6">
            Ready to see what this looks like for your business?
          </h2>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            The first step is a conversation. No obligation, no pitch. Just a look at what you&apos;re doing manually that should be a system.
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
                View Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
