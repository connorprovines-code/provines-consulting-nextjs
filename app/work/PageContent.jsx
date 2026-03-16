"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  ArrowRight,
  Globe,
  Zap,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

export default function WorkContent() {
  // Placeholder projects — replace with real case studies as they become available
  const highlights = [
    {
      metric: "Sub-2s",
      label: "Average load time after rebuild",
    },
    {
      metric: "100%",
      label: "Client ownership of code and hosting",
    },
    {
      metric: "90 days",
      label: "Post-launch support included",
    },
    {
      metric: "Plain English",
      label: "Site management — no code required",
    },
  ];

  const capabilities = [
    {
      icon: Globe,
      title: "Complete Marketing Infrastructure",
      description:
        "Website rebuilt on Next.js. Claude-powered AI assistants handling content and leads. CRM integrated with automated follow-up. SEO running on autopilot. From a static website and manual everything to a system that runs your marketing.",
      industries: "Home builders, service businesses, professional firms",
    },
    {
      icon: Zap,
      title: "AI Assistant Deployment",
      description:
        "AI voice receptionist handling calls 24/7. Leads routed to CRM automatically. Automated follow-up sequences. Review management. Website generating leads on its own.",
      industries: "Service businesses with high call volume and lead flow",
    },
    {
      icon: TrendingUp,
      title: "Agency Replacement Build",
      description:
        "From paying an agency $3K/month for a website they controlled to owning everything. AI handles what the agency used to do. Content publishing, SEO, site updates — all in plain English.",
      industries: "Owner-operators tired of agency dependency",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[var(--electric-blue)]/5 via-[var(--mint)]/5 to-transparent rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--navy)] mb-6 leading-tight">
              Real projects.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--electric-blue)] to-[var(--mint)]">
                Real infrastructure.
              </span>
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Every project ends the same way: the client owns everything and runs it themselves. No retainers. No dependency. Here's what that looks like in practice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--electric-blue)] to-[var(--mint)]">
                {item.metric}
              </p>
              <p className="text-sm text-slate-600 mt-2">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What I Build */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-4">
              What marketing infrastructure looks like in practice
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Three patterns I see most. Most projects combine elements of all three.
            </p>
          </motion.div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {capabilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 items-start p-6 md:p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: ['color-mix(in srgb, var(--electric-blue) 12%, transparent)', 'color-mix(in srgb, var(--mint) 12%, transparent)', 'color-mix(in srgb, var(--navy) 10%, transparent)'][index] }}
                >
                  <item.icon className="w-6 h-6" style={{ color: ['var(--electric-blue)', 'var(--mint)', 'var(--navy)'][index] }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--navy)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-3">
                    {item.description}
                  </p>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">
                    {item.industries}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Placeholder */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-4">
            Detailed case studies coming soon.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            I'm documenting current projects with before/after comparisons, performance metrics, and full breakdowns of what was built and what it replaced. In the meantime — book a call and I'll walk you through live systems.
          </p>
          <Link href="/schedule">
            <Button
              size="lg"
              className="bg-[var(--electric-blue)] hover:bg-[var(--navy)] text-white text-lg h-14 px-8 w-full sm:w-auto"
            >
              <Calendar className="w-5 h-5 mr-2" />
              See Live Examples on a Call
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--navy)] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-3">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[var(--electric-blue)] to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want to see what your marketing infrastructure could look like?
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              I'll walk you through live systems and show you what makes sense for your business. No pitch deck. Just a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/schedule">
                <Button
                  size="lg"
                  className="bg-[var(--mint)] hover:bg-[var(--mint)]/90 text-[var(--navy)] text-lg h-14 px-8 w-full sm:w-auto font-semibold"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book a Call
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[var(--navy)] text-lg h-14 px-8 w-full sm:w-auto font-semibold"
                >
                  View All Services
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
