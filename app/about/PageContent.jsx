"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
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
        "I don't hand you a strategy deck and wish you luck. I architect the system and build it. The marketing experience informs what gets built. The technical skills mean it actually ships.",
    },
    {
      icon: Lightbulb,
      title: "Everything Built for Independence",
      description:
        "After the handoff, you don't need me. That's not a risk. It's the entire point. You own the code, the data, the infrastructure. Any developer can maintain it.",
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
        "I don't just build your marketing stack. I architect it around what actually drives revenue, because I've spent 12+ years doing exactly that. The systems I build reflect what actually converts.",
    },
  ];

  const background = [
    "12+ years B2B SaaS marketing leadership (demand gen, marketing ops, RevOps)",
    "Production AI systems: Claude-powered assistants, multi-agent workflows, voice agents",
    "Website migrations from Wix, WordPress, Squarespace to Next.js",
    "CRM architecture and integration (GoHighLevel, HubSpot, Supabase, custom)",
    "Full-stack development: Next.js, React, Tailwind, Supabase, Vercel",
    "SEO systems, content automation, and lead enrichment pipelines",
  ];

  return (
    <div className="relative">
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
              12+ years building marketing systems for SaaS companies. Now I build infrastructure business owners actually own.
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              Most developers don&apos;t understand marketing. Most marketers can&apos;t build production systems. I do both, which means the infrastructure I build is designed around what actually drives leads and revenue.
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
              I&apos;m Connor Provines. Twelve years in B2B SaaS marketing. Building go-to-market strategies, running demand gen, setting up the automation and ops infrastructure that actually generates pipeline. I&apos;ve done it at companies going from zero to first customers and companies scaling from 10M to 50M.
            </p>

            <p>
              What I kept seeing was that the businesses doing the hardest, most important work (contractors, service companies, professional firms) were stuck with the worst tools. Websites on platforms that couldn&apos;t support basic SEO. Leads falling through cracks. Paying agencies thousands a month for a content calendar and a website they couldn&apos;t update themselves.
            </p>

            <p>
              So I started building for them. I take what I know about marketing operations, automation, and AI and build it as infrastructure a business owner can actually run. Not a retainer. Not a dashboard you&apos;ll never log into. A system you own. AI assistants that handle the repetitive work. A website that your AI can update. A CRM that routes leads without you touching it.
            </p>

            <p>
              The engagement ends with a handoff. You know how everything works. You have documentation. You have 90 days of support. After that, you&apos;re running your own marketing infrastructure. That&apos;s the product.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Expertise Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                className="relative pl-6 border-l-3"
                style={{
                  borderLeftWidth: '3px',
                  borderLeftColor: index % 2 === 0 ? 'var(--electric-blue)' : 'var(--mint)',
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <item.icon className="w-5 h-5" style={{ color: index % 2 === 0 ? 'var(--electric-blue)' : 'var(--mint)' }} />
                  <h3 className="text-xl font-bold text-[var(--navy)]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
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
          className="bg-[var(--navy)] rounded-3xl p-12 md:p-16 text-white"
        >
          <div>
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
            Let&apos;s talk about your business.
          </h2>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            No pitch, no pressure. Just a conversation about where you are, where you want to be, and whether I can help build the infrastructure to get you there.
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
