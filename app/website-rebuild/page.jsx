"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Globe,
  Bot,
  Database,
  Lock,
  GraduationCap,
  ChevronDown,
  CheckCircle,
  Calendar,
  Mail,
  Phone,
  ArrowRight,
  Eye,
  MessageSquare,
  Handshake,
  MonitorSmartphone,
  Video,
  User,
  Code2,
  Cpu,
} from "lucide-react";
import { motion } from "framer-motion";

// ─── Constants ────────────────────────────────────────────────────────────────
const CALENDLY_URL = "https://calendly.com/connorprovines/30min";
const CONTACT_EMAIL = "connorprovines@gmail.com";
const CONTACT_PHONE_HREF = "+14083403265";
// Phone displayed obfuscated across spans to defeat scrapers (tap-to-call still works)
const CONTACT_PHONE_PARTS = ["+1 (408)", " 340", "-3265"];

// ─── FAQ Data ─────────────────────────────────────────────────────────────────
const faqs = [
  {
    question: "Is this a scam? Why would you rebuild my website before I pay you?",
    answer:
      "Fair question. I rebuild a preview (typically your main pages) as a demo because it's the best way to show you exactly what you're getting. No vague promises, no mockups—you see the actual finished product. If you don't like it, you don't pay. Simple as that.",
  },
  {
    question: "What's the catch?",
    answer:
      "No catch. This is my business. I specialize in helping professional services businesses move to modern, AI-powered infrastructure they can control themselves. I do preview builds upfront because it's a better sales process than asking you to trust a pitch.",
  },
  {
    question: "So you just copy my existing site exactly as-is?",
    answer:
      "No. The preview shows you your site rebuilt on modern infrastructure, but when we work together, we improve it. I fix design issues, upgrade outdated elements, and make it work better for your business. You're not just getting a code migration—you're getting an upgrade.",
  },
  {
    question: "How much does this cost?",
    answer:
      "It depends on what you need. Some businesses just need the website rebuild and basic platform. Others want full CRM integration, advanced SEO automation, and custom marketing workflows. Let's talk about your specific needs and I'll give you transparent pricing based on the actual scope.",
  },
  {
    question: "Do I need to know how to code?",
    answer:
      "Not at all. The AI platform I set you up with lets you make changes in plain English. Want to update your homepage headline? Just tell it what you want. Need to add a new service page? Describe it and it builds it. No code required.",
  },
  {
    question: "What if I need help after the handoff?",
    answer:
      "First 90 days of technical support are included for anything within the scope of what I built. After that, ongoing support is available at a reasonable rate. I stand behind my work.",
  },
  {
    question: "How is this different from just hiring a web agency?",
    answer:
      "Agencies build you a site and then you're stuck paying them every time you need a change. I build you a site AND give you the tools to manage it yourself forever. Plus, you get the AI platform to run your SEO, build marketing automation, and integrate with your other tools. You're investing in independence and capability, not dependency.",
  },
  {
    question: "What platforms do you work with?",
    answer:
      "I work with businesses currently on Wix, Squarespace, WordPress, or any other website builder who want to break free from those limitations and move to modern, AI-compatible infrastructure.",
  },
  {
    question: "You mention CRM integration—what does that mean?",
    answer:
      "I'll help you connect your website to your CRM (whatever you're using—or help you set one up if you don't have one). That means leads from your website flow directly into your system, your marketing and sales data work together, and you have a complete view of your customer journey.",
  },
  {
    question: "What's this about building 'additional agents'?",
    answer:
      "The platform I give you isn't just for your website. You can use it to build other marketing automation—email campaigns, lead qualification, content generation, competitive intelligence, whatever your business needs. I'll show you how. You've been hearing about AI agents—this is how you actually use them for your business.",
  },
  {
    question: "How long does this take?",
    answer:
      "Typically 2-3 weeks from agreement to full handoff, depending on the complexity of your needs.",
  },
  {
    question: "Where does my website get hosted?",
    answer:
      "Your choice. I can set it up on your own server, your own machine, or recommend hosting options. You own the infrastructure—I just help you set it up.",
  },
  {
    question: "What happens when AI technology changes again?",
    answer:
      "That's the whole point. I'm building you on modern infrastructure that's designed to evolve with AI. When new tools come out, your platform can integrate them. You won't need to rebuild or migrate—you'll already be ready.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function WebsiteRebuild() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  return (
    <div className="bg-white">

      {/* ══════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[var(--electric-blue)]/5 via-[var(--mint)]/5 to-transparent rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[var(--mint)]/5 via-[var(--electric-blue)]/5 to-transparent rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: Text + CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block mb-4">
                <span className="px-4 py-1.5 bg-gradient-to-r from-[var(--mint)]/10 to-[var(--electric-blue)]/10 text-[var(--navy)] rounded-full text-sm font-medium border border-[var(--mint)]/20">
                  Website Rebuild + AI Marketing Platform
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--navy)] mb-6 leading-tight">
                Take Control of Your Website
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--electric-blue)] to-[var(--mint)]">
                  and Marketing. Forever.
                </span>
              </h1>

              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                I rebuild websites for professional services businesses on modern, AI-powered
                infrastructure—then hand you the platform to manage your site, run SEO,
                integrate your CRM, and build your own marketing automation. No agencies.
                No dependencies.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="h-14 px-8 text-lg font-semibold w-full sm:w-auto shadow-lg shadow-[var(--electric-blue)]/20 text-white"
                    style={{ background: "linear-gradient(135deg, var(--electric-blue), var(--mint))" }}
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule a Free Call
                  </Button>
                </a>
                <a href="#how-it-works">
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-14 px-8 text-lg border-2 border-[var(--navy)] text-[var(--navy)] hover:bg-[var(--navy)] hover:text-white w-full sm:w-auto"
                  >
                    See How It Works
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
              </div>

              {/* Trust signals */}
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {["No upfront commitment", "You own everything", "90-day support included"].map((point, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--mint)] flex-shrink-0" />
                    <span className="text-sm text-slate-600">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Before/After CSS mockup — hidden on mobile */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative h-80">
                {/* "Before" card — old/stale aesthetic */}
                <div className="absolute left-0 top-8 w-52 bg-slate-100 rounded-xl p-4 shadow-md border border-slate-200 rotate-[-5deg] z-0">
                  <div className="text-xs font-mono text-slate-400 mb-2 truncate">yoursite.wixsite.com/home</div>
                  <div className="space-y-2">
                    <div className="h-2 bg-slate-300 rounded w-full" />
                    <div className="h-2 bg-slate-300 rounded w-3/4" />
                    <div className="h-10 bg-slate-200 rounded w-full mt-3" />
                    <div className="h-2 bg-slate-300 rounded w-full mt-2" />
                    <div className="h-2 bg-slate-300 rounded w-5/6" />
                    <div className="h-2 bg-slate-200 rounded w-4/6" />
                  </div>
                  <div className="mt-3 text-[10px] text-red-400 font-mono flex items-center gap-1">
                    <span>⚠</span> slow · outdated · no control
                  </div>
                </div>

                {/* "After" card — modern clean */}
                <div className="absolute right-0 top-0 z-10 w-72 bg-white rounded-2xl shadow-2xl p-5 border border-slate-100">
                  {/* Browser chrome */}
                  <div className="flex items-center gap-1.5 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                    <div className="ml-2 flex-1 bg-slate-100 rounded-full h-5 text-[10px] text-slate-400 font-mono flex items-center px-3">
                      yourbusiness.com
                    </div>
                  </div>
                  {/* Fake site content */}
                  <div className="space-y-3">
                    <div className="h-3 rounded w-3/5" style={{ background: "linear-gradient(90deg, var(--electric-blue)44, var(--mint)44)" }} />
                    <div className="h-2 bg-slate-100 rounded w-full" />
                    <div className="h-2 bg-slate-100 rounded w-4/5" />
                    <div className="h-11 rounded-xl mt-3" style={{ background: "linear-gradient(135deg, var(--electric-blue), var(--mint))" }} />
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="h-16 bg-slate-50 rounded-lg border border-slate-100" />
                      ))}
                    </div>
                  </div>
                  {/* AI badge */}
                  <div className="absolute -top-3 -right-3 bg-[var(--mint)] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    AI-Powered ✓
                  </div>
                </div>

                {/* Floating stat */}
                <div className="absolute bottom-0 right-8 bg-[var(--navy)] text-white text-xs px-3 py-2 rounded-lg shadow-lg z-20">
                  <span className="text-[var(--mint)] font-bold">100%</span> You Own It
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          2. PROBLEM
      ══════════════════════════════════════════════ */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Sound Familiar?</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: MonitorSmartphone,
                title: "Trapped on Wix or WordPress",
                desc: "Your platform was fine in 2015. Now it's slow, hard to update, and every change costs you money or hours of frustration.",
              },
              {
                icon: Database,
                title: "Dependent on Your Agency",
                desc: "You pay them every month just to make a text change. You don't own your code, your content, or your data—they do.",
              },
              {
                icon: Cpu,
                title: "Locked Out of AI Tools",
                desc: "You hear about AI for SEO and content but your platform can't support it. Your competitors are moving. You're watching.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8"
              >
                <item.icon className="w-8 h-8 text-[var(--mint)] mb-4" />
                <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          3. SOLUTION — 5 VALUE PILLARS
      ══════════════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-b from-white via-slate-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <span className="px-4 py-1.5 bg-gradient-to-r from-[var(--mint)]/10 to-[var(--electric-blue)]/10 text-[var(--navy)] rounded-full text-sm font-medium border border-[var(--mint)]/20">
                What You Get
              </span>
            </div>
            <h2 className="text-4xl font-bold text-[var(--navy)] mb-4">
              Everything You Need.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--electric-blue)] to-[var(--mint)]">
                Nothing You Don't.
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              One engagement. A complete modern web presence plus the tools and training
              to run your entire marketing operation yourself—forever.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Rebuilt Website",
                description:
                  "Your site rebuilt on Next.js—fast, SEO-ready, mobile-first, and AI-compatible from day one. Not a template. Not a copy-paste. Built for your business and improved along the way.",
              },
              {
                icon: Bot,
                title: "AI Editing Platform",
                description:
                  "A marketing command center where you update pages, run SEO audits, and publish content in plain English. No developer. No agency. Just you, telling it what you want.",
              },
              {
                icon: Database,
                title: "CRM Integration",
                description:
                  "Your site connected to your CRM so leads flow in automatically. Your marketing and sales data work together. Full visibility into your customer journey.",
              },
              {
                icon: Lock,
                title: "Full Ownership",
                description:
                  "You own the code, the hosting, the domain, and all your data. No vendor lock-in. No monthly platform fees to me. Any developer can work on it in the future.",
              },
              {
                icon: GraduationCap,
                title: "Education & Handoff",
                description:
                  "90-day post-launch support plus hands-on training for you and your team. You leave knowing how to run, manage, and expand your own marketing platform.",
              },
            ].map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={index === 4 ? "sm:col-span-2 lg:col-span-1" : ""}
              >
                <Card className="border-0 shadow-lg h-full hover:shadow-xl transition-all duration-300 bg-white">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--electric-blue)] to-[var(--mint)] flex items-center justify-center mb-6 shadow-lg shadow-[var(--electric-blue)]/20">
                      <pillar.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[var(--navy)] mb-3">{pillar.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{pillar.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          4. FUTURE-PROOF
      ══════════════════════════════════════════════ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-[var(--navy)] via-[#0d2a52] to-[#1a3a6b] rounded-3xl p-10 md:p-16 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[var(--mint)]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[var(--electric-blue)]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

              <div className="relative grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <span className="px-3 py-1 bg-[var(--mint)]/20 text-[var(--mint)] rounded-full text-sm font-medium border border-[var(--mint)]/30 inline-block mb-6">
                    Why This Matters Now
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                    AI Is Rewriting Marketing. Your Platform Needs to Keep Up.
                  </h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Modern AI tools—for SEO, content generation, personalization, and automation—are
                    built to work with React, Next.js, and open APIs. Wix and WordPress weren't
                    designed for this world.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    When your competitors start using AI to rank faster, publish more, and convert
                    better, you won't be playing catch-up. You'll already be running on the same
                    infrastructure they're building toward.
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    { label: "Next.js + React", sub: "AI-native framework", color: "var(--electric-blue)" },
                    { label: "Tailwind CSS", sub: "LLM-friendly styling", color: "var(--mint)" },
                    { label: "Open APIs", sub: "Connects to any tool", color: "var(--electric-blue)" },
                    { label: "You Own the Code", sub: "No lock-in, ever", color: "var(--mint)" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 bg-white/10 rounded-xl p-4 border border-white/10"
                    >
                      <div
                        className="w-3 h-3 rounded-full flex-shrink-0"
                        style={{ backgroundColor: item.color }}
                      />
                      <div>
                        <div className="font-semibold text-white text-sm">{item.label}</div>
                        <div className="text-xs text-slate-400">{item.sub}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          5. HOW IT WORKS
      ══════════════════════════════════════════════ */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[var(--navy)] mb-4">How It Works</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A low-risk process where you see real results before committing to anything.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                icon: Eye,
                title: "I Build You a Preview",
                desc: "Before any money changes hands, I build a working ~5-page demo of your new site so you can see exactly what you're getting.",
              },
              {
                step: "02",
                icon: MessageSquare,
                title: "We Discuss Your Needs",
                desc: "We review the preview together, scope your full project, discuss any custom features, and agree on pricing that fits your actual needs.",
              },
              {
                step: "03",
                icon: Code2,
                title: "I Build and Refine",
                desc: "I build your full site with your input at every stage. You're never in the dark. Revisions are part of the process.",
              },
              {
                step: "04",
                icon: Handshake,
                title: "Handoff and Training",
                desc: "You get your code, your platform access, and a full walkthrough. 90 days of support ensures your team is confident and capable.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow h-full bg-white">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--electric-blue)] to-[var(--mint)] text-white font-bold text-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[var(--electric-blue)]/20">
                      {item.step}
                    </div>
                    <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-6 h-6 text-[var(--navy)]" />
                    </div>
                    <h3 className="text-xl font-bold text-[var(--navy)] mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          6. FAQ
      ══════════════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[var(--navy)] mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Everything you need to know before we talk.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                  <CardContent
                    className="p-6"
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  >
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="text-base font-bold text-[var(--navy)] flex-1">
                        {faq.question}
                      </h3>
                      <ChevronDown
                        className={`w-5 h-5 text-[var(--electric-blue)] flex-shrink-0 transition-transform duration-200 ${
                          openFaqIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    {openFaqIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 text-slate-600 leading-relaxed text-sm"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          7. VIDEO PLACEHOLDER
      ══════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl font-bold text-[var(--navy)] mb-4">See It in Action</h2>
            <p className="text-xl text-slate-600">
              A short walkthrough from preview to launch—so you know exactly what working
              together looks like.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/*
              TO ADD LOOM VIDEO: Replace the placeholder div below with:
              <iframe
                src="https://www.loom.com/embed/YOUR_LOOM_ID"
                className="absolute inset-0 w-full h-full rounded-2xl"
                allowFullScreen
              />
              And remove the placeholder content div.
            */}
            <div className="relative aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="w-20 h-20 bg-[var(--navy)]/10 rounded-full flex items-center justify-center border-2 border-[var(--navy)]/20">
                  <Video className="w-8 h-8 text-[var(--navy)]/50" />
                </div>
                <p className="text-slate-500 font-medium text-sm">
                  Video walkthrough coming soon
                </p>
                <p className="text-slate-400 text-xs">
                  Watch a live rebuild and platform demo
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          8. ABOUT / CREDIBILITY
      ══════════════════════════════════════════════ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-[220px_1fr]">
                {/* Gradient avatar panel */}
                <div
                  className="flex items-center justify-center p-10"
                  style={{ background: "linear-gradient(135deg, var(--electric-blue), var(--mint))" }}
                >
                  <div className="w-24 h-24 rounded-full bg-white/20 border-4 border-white/40 flex items-center justify-center">
                    {/*
                      TO ADD HEADSHOT: Replace the User icon below with:
                      <Image src="/headshot.jpg" alt="Connor Provines" fill className="rounded-full object-cover" />
                      (add your photo to /public/headshot.jpg)
                    */}
                    <User className="w-12 h-12 text-white" />
                  </div>
                </div>

                {/* Text */}
                <CardContent className="p-8 md:p-10 bg-white">
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <h2 className="text-2xl font-bold text-[var(--navy)]">Connor Provines</h2>
                    <span className="px-2 py-0.5 text-xs font-medium bg-[var(--mint)]/10 text-[var(--mint)] border border-[var(--mint)]/30 rounded-full">
                      Provines Consulting
                    </span>
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    I run Provines Consulting, where I specialize in AI automation and workflow
                    development for service businesses. After seeing too many business owners trapped
                    on platforms that can't evolve with AI—and frustrated with agencies that keep them
                    dependent—I started rebuilding websites on modern infrastructure and handing owners
                    the complete platform to control their marketing autonomously.
                  </p>
                  <p className="text-slate-800 font-semibold leading-relaxed">
                    This isn't consulting. This is building you a working system and teaching you
                    how to use it.
                  </p>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          9. FINAL CTA
      ══════════════════════════════════════════════ */}
      <section className="bg-[var(--navy)] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[var(--electric-blue)]/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[var(--mint)]/10 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="px-4 py-1.5 bg-[var(--mint)]/20 text-[var(--mint)] rounded-full text-sm font-medium border border-[var(--mint)]/30 inline-block mb-6">
              Zero Risk to Get Started
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to See Your New Site?
            </h2>

            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              I'll build you a working preview—no commitment required. Schedule 30 minutes
              and let's see what your business could look like. No pressure, no hard sell.
              Just a conversation about what's possible.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="h-14 px-8 text-lg font-semibold w-full sm:w-auto bg-[var(--mint)] hover:bg-[var(--mint)]/90 text-[var(--navy)] shadow-lg shadow-[var(--mint)]/30"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule a Free Call
                </Button>
              </a>
              <a href={`mailto:${CONTACT_EMAIL}`}>
                <Button
                  size="lg"
                  className="h-14 px-8 text-lg font-semibold w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-[var(--navy)]"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send an Email
                </Button>
              </a>
            </div>

            {/* Phone — CSS-obfuscated display, functional tel: href */}
            <p className="text-slate-400 text-sm">
              Prefer to call?{" "}
              <a
                href={`tel:${CONTACT_PHONE_HREF}`}
                className="text-[var(--mint)] hover:text-white transition-colors font-medium"
              >
                <span aria-hidden="true">
                  {CONTACT_PHONE_PARTS.map((part, i) => (
                    <span key={i}>{part}</span>
                  ))}
                </span>
                <span className="sr-only">+1 408 340 3265</span>
              </a>
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
