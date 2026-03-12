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
      title: "I Build the Systems",
      description:
        "I don't advise and leave. I build the website, configure the agents, connect the integrations, and make sure everything works before I hand it over.",
    },
    {
      icon: Lightbulb,
      title: "Marketing + Engineering",
      description:
        "12+ years in SaaS marketing leadership means I understand what actually drives leads and revenue. The tech I build is informed by what actually converts.",
    },
    {
      icon: ShieldCheck,
      title: "Independence Is the Product",
      description:
        "Everything I build is designed for you to own and operate. After the handoff, you don't need me. That's not a risk — it's the entire point.",
    },
    {
      icon: Users,
      title: "Built for Owners, Not Developers",
      description:
        "Plain English management, no-code interfaces, clear documentation. If you can write an email, you can run the systems I install.",
    },
  ];

  const background = [
    "12+ years B2B SaaS marketing leadership",
    "Built and deployed AI agent systems for operational businesses",
    "Website migrations from Wix, WordPress, GoDaddy, Squarespace",
    "CRM architecture and integration (Supabase, HubSpot, custom)",
    "Full-stack development (Next.js, React, Node.js, Tailwind)",
    "SEO systems and content automation pipelines",
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
              I spent a decade building
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--electric-blue)] to-[var(--mint)]">
                growth systems for SaaS companies.
              </span>
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
              Now I bring that same infrastructure to the businesses that
              actually need it — service companies, owner-operators, and SMBs
              that deserve modern tools but don't have a dev team.
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
              I'm Connor Provines. For the past 12+ years I've been in SaaS
              marketing — building go-to-market strategies, setting up
              automation pipelines, running growth operations. I've seen what it
              takes to build the systems that actually generate leads and close
              deals at scale.
            </p>

            <p>
              What I kept noticing was that the businesses doing the most
              important work — contractors, service companies, professional
              firms — were stuck with the worst tools. Their websites were on
              platforms that couldn't support modern marketing. Their leads were
              falling through the cracks. They were paying agencies for things
              they should have been able to do themselves.
            </p>

            <p>
              So I started building for them. I take what I know about
              marketing operations, automation, and AI — and I package it into
              something a business owner can actually use. Not a retainer. Not
              a dashboard they'll never log into. A system they own and operate
              themselves, with agents that handle the repetitive work and
              infrastructure that supports whatever they want to do next.
            </p>

            <p>
              The engagement ends with a handoff. You know how everything
              works, you have documentation, you have 90 days of support. After
              that, you're running your own digital operations. That's not a
              feature — it's the foundation of everything I build.
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
            where you want to be, and whether this is the right fit.
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
