"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  ArrowRight,
  Globe,
  Zap,
  TrendingUp,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Work() {
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
      title: "Website Migrations",
      description:
        "Full rebuilds from Wix, WordPress, GoDaddy, and Squarespace to modern Next.js. Content, images, branding — all migrated.",
      industries: "Home services, professional services, contractors, local businesses",
    },
    {
      icon: Zap,
      title: "AI Agent Installations",
      description:
        "CRM agents, SEO monitoring, content management, and lead follow-up — all running through plain English interfaces.",
      industries: "Service businesses with high operational burden",
    },
    {
      icon: TrendingUp,
      title: "Full Digital Operations",
      description:
        "Complete transformations: website + agents + CRM integration + email automation + training and handoff.",
      industries: "Owner-operators ready to own their digital infrastructure",
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
              Work that
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--electric-blue)] to-[var(--mint)]">
                speaks for itself.
              </span>
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Every project ends the same way: the client owns everything and
              runs it themselves. Here's what that looks like.
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
              What I build
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Three types of engagements, often combined into one project.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg h-full hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--electric-blue)] to-[var(--mint)] flex items-center justify-center mb-6 shadow-lg">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[var(--navy)] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">
                      {item.industries}
                    </p>
                  </CardContent>
                </Card>
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
            Case studies coming soon.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            I'm documenting current client projects with before/after
            comparisons, performance metrics, and detailed breakdowns of what
            was built. In the meantime, the best way to see the work is to
            book a call — I'll walk you through live examples.
          </p>
          <Link href="/schedule">
            <Button
              size="lg"
              className="bg-[var(--electric-blue)] hover:bg-[var(--navy)] text-white text-lg h-14 px-8"
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
              Want to see what your site could look like?
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              I'll build a preview of your site on modern infrastructure —
              before you commit to anything. See the work first, decide later.
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
