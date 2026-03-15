"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Wrench,
  Lightbulb,
  ShieldCheck,
  Users,
  ArrowRight,
  Calendar,
} from "lucide-react";
import { motion } from "framer-motion";

export default function AboutContent() {
  const expertise = [
    {
      icon: Wrench,
      title: "Strategy + Implementation in One Person",
      description:
        "I don't hand you a strategy deck and wish you luck. I architect the system and build it. The marketing experience informs what gets built. The technical skills mean it actually gets shipped.",
    },
    {
      icon: Lightbulb,
      title: "Everything Built for Independence",
      description:
        "After the handoff, you don't need me. That's not a risk — it's the entire point. You own the code, the data, the infrastructure. Any developer can maintain it.",
    },
    {
      icon: ShieldCheck,
      title: "Built for Owners, Not Developers",
      description:
        "Plain English management. Tell your AI to update the homepage. Check leads in your dashboard. Approve content your AI drafted. If you can write an email, you can run these systems.",
    },
    {
      icon: Users,
      title: "Marketing Experience That Shows in the Build",
      description:
        "I don't just build your marketing stack. I architect it around what actually drives revenue — because I've spent a decade doing exactly that. The systems I build are informed by what actually converts.",
    },
  ];

  const background = [
    "12+ years B2B SaaS marketing leadership (demand gen, marketing ops, RevOps)",
    "Production AI systems — Claude-powered assistants, multi-agent workflows, voice agents",
    "Website migrations from Wix, WordPress, Squarespace to Next.js",
    "CRM architecture and integration (GoHighLevel, HubSpot, Supabase, custom)",
    "Full-stack development — Next.js, React, Tailwind, Supabase, Vercel",
    "SEO systems, content automation, and lead enrichment pipelines",
  ];

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[var(--electric-blue)]/5 via-[var(--mint)]/5 to-transparent rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[var(--mint)]/5 via-[var(--electric-blue)]/5 to-transparent rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-block mb-4">
              <span className="px-4 py-1.5 bg-gradient-to-r from-[var(--mint)]/10 to-[var(--electric-blue)]/10 text-[var(--navy)] rounded-full text-sm font-medium border border-[var(--mint)]/20">
                About Connor
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--navy)] mb-6 leading-tight">
              12+ years building marketing systems for SaaS companies.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--electric-blue)] to-[var(--mint)]">
                Now I package that into infrastructure business owners actually own.
              </span>
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
              Most developers don't understand marketing. Most marketers can't
              build production systems. I do both — which means the
              infrastructure I build isn't just technically sound, it's designed
              around what actually drives leads and revenue.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-slate-50/30 to-white" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
            <p>
              I'm Connor Provines. Twelve years in B2B SaaS marketing —
              building go-to-market strategies, running demand gen, setting up
              the automation and ops infrastructure that actually generates
              pipeline. I've done it at companies going from zero to first
              customers and companies scaling from 10M to 50M.
            </p>

            <p>
              What I kept seeing was that the businesses doing the hardest,
              most important work — contractors, service companies,
              professional firms — were stuck with the worst tools. Websites on
              platforms that couldn't support basic SEO. Leads falling through
              cracks. Paying agencies thousands a month for a content calendar
              and a website they couldn't update themselves.
            </p>

            <p>
              So I started building for them. I take what I know about
              marketing operations, automation, and AI — and I build it as
              infrastructure a business owner can actually run. Not a retainer.
              Not a dashboard you'll never log into. A system you own. AI
              assistants that handle the repetitive work. A website that your
              AI can update. A CRM that routes leads without you touching it.
            </p>

            <p>
              The engagement ends with a handoff. You know how everything
              works. You have documentation. You have 90 days of support. After
              that, you're running your own marketing infrastructure. That's
              the product.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Expertise Grid */}
      <section className="relative bg-gradient-to-b from-white via-slate-50/50 to-white py-24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-bl from-[var(--mint)]/5 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-4">
              Why work with me
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg h-full hover:shadow-xl transition-all duration-300 bg-white relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[var(--electric-blue)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardContent className="p-8 relative">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--electric-blue)] to-[var(--mint)] flex items-center justify-center mb-6 shadow-lg shadow-[var(--electric-blue)]/20">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[var(--navy)] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[var(--navy)] via-[#0d2a52] to-[#1a3a6b] rounded-3xl p-12 md:p-16 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[var(--mint)] to-transparent rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[var(--electric-blue)] to-transparent rounded-full blur-2xl" />
          </div>

          <div className="relative">
            <h2 className="text-3xl font-bold mb-8">Background</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {background.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-[var(--mint)] flex-shrink-0" />
                  <span className="text-white">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-6">
            Let's talk about your business.
          </h2>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            No pitch, no pressure. Just a conversation about where you are,
            where you want to be, and whether I can build the infrastructure
            to get you there.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/schedule">
              <Button
                size="lg"
                className="bg-[var(--electric-blue)] hover:bg-[var(--navy)] text-white text-lg h-14 px-8 shadow-lg shadow-[var(--electric-blue)]/20 w-full sm:w-auto"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book a Call
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
        </motion.div>
      </section>
    </div>
  );
}
