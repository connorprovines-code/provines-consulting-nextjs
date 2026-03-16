"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function FAQContent() {
  const [openIndex, setOpenIndex] = React.useState(null);

  const faqs = [
    {
      question: "What exactly do you build?",
      answer:
        "Marketing infrastructure. Website, CRM, AI assistants, content systems, SEO, lead automation — one integrated system. Everything a marketing team would build, delivered as infrastructure you own.",
    },
    {
      question: "What are the AI assistants and how do they work?",
      answer:
        "Claude-powered AI agents trained on your business. They connect to your CRM, manage content, handle lead intake, schedule appointments, and automate operations. Not a chat widget — real agents doing real work. Built on Anthropic's Claude, configured for your data and workflows.",
    },
    {
      question: "How is this different from hiring a marketing agency?",
      answer:
        "An agency charges monthly and you never own anything. Every change, every update — you're calling them and paying for it. I build systems you own completely. After handoff — no recurring fees, no lock-in, no dependency. You run it yourself.",
    },
    {
      question: "How is this different from a chatbot tool?",
      answer:
        "Most chatbot tools are a widget answering questions from a knowledge base. My AI assistants are integrated into your systems — CRM, website, scheduling, pipeline. They don't just answer questions. They route leads, update your website, draft content, and manage follow-up.",
    },
    {
      question: "What technology do you use?",
      answer:
        "Next.js and React for websites. Supabase for databases. Vercel for hosting. Anthropic's Claude for AI. Various APIs for CRM, email, scheduling, and enrichment. Modern, open, maintainable by any developer.",
    },
    {
      question: "Do I need technical knowledge?",
      answer:
        "No. Plain English management. Tell your AI to update the homepage. Check leads in your dashboard. Approve content your AI drafted. If you can write an email, you can run these systems.",
    },
    {
      question: "How do engagements work?",
      answer:
        "Every engagement starts with a discovery call where we figure out what you actually need. From there I scope it — some businesses need one workflow, others need the full infrastructure build. You know exactly what you're getting before anything starts.",
    },
    {
      question: "What happens after the project?",
      answer:
        "90 days of support, full documentation, training. Then you're independent. Code yours, infrastructure yours, data yours. Any developer can maintain or extend it.",
    },
    {
      question: "What kinds of businesses do you work with?",
      answer:
        "Service businesses, contractors, home builders, SMB owner-operators who need marketing infrastructure but don't have or want a marketing team. Also small SaaS companies on AI integration.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Website rebuild with basic AI assistants: 3-4 weeks. Full marketing infrastructure build: 6-8 weeks. Specific timeline during scoping.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-[#0A1F44]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Common Questions
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Straight answers about how this works and what you get.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <CardContent
                  className="p-6"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-lg font-bold text-[var(--navy)] flex-1">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-[var(--electric-blue)] flex-shrink-0 transition-transform ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 text-slate-600 leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-slate-600 mb-6">
            Still have questions? Let's talk.
          </p>
          <Link href="/schedule">
            <Button
              size="lg"
              className="bg-[var(--electric-blue)] hover:bg-[var(--navy)] text-white text-lg h-14 px-8 w-full sm:w-auto"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book a Call
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
