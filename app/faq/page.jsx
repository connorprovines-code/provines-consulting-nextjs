"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "I specialize in three core areas: Agentic AI Automation (voice agents, lead enrichment, automated workflows), Growth Marketing Strategy (GTM planning, PLG, GEO), and Marketing Operations (automation platform setup, workflow optimization, CRM integration)."
    },
    {
      question: "How does the free audit work?",
      answer: "The complimentary audit includes a comprehensive review of your current marketing systems and operations, followed by a 30-minute consultation where we discuss identified opportunities and potential solutions. There's no obligation to move forward."
    },
    {
      question: "What is Agentic AI?",
      answer: "Agentic AI refers to intelligent automation systems that can take actions autonomously based on specific triggers and conditions. Examples include voice agents for appointment setting, automated lead scoring and handoff systems, and social listening platforms that engage automatically."
    },
    {
      question: "Do you work with startups or enterprises?",
      answer: "I work with B2B SaaS companies at all stages - from early-stage 0→1 growth to established companies scaling from 1→10. My approach is tailored to your specific stage and needs."
    },
    {
      question: "What is your typical engagement process?",
      answer: "We start with discovery to understand your goals and challenges, then develop a comprehensive strategy tailored to your needs. Implementation is white-glove with ongoing communication, followed by continuous optimization and monitoring for maximum results."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on scope. AI automation implementations typically take 4-8 weeks, marketing strategy development 2-4 weeks, and operations setup 6-12 weeks. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes! Many clients choose to continue working together after initial implementation for ongoing optimization, monitoring, and scaling. We can discuss retainer options that fit your needs."
    },
    {
      question: "What platforms and tools do you work with?",
      answer: "I'm platform-agnostic and work with leading marketing automation platforms (HubSpot, Marketo, Pardot), CRMs (Salesforce, HubSpot), AI platforms, and custom integrations. I'll recommend the best tools for your specific needs and budget."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-slate-50 min-h-screen">
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
            <div className="inline-block mb-4">
              <span className="px-4 py-1.5 bg-gradient-to-r from-[var(--mint)]/10 to-[var(--electric-blue)]/10 text-[var(--navy)] rounded-full text-sm font-medium border border-[var(--mint)]/20">
                Frequently Asked Questions
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-[var(--navy)] mb-6 leading-tight">
              Got
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--electric-blue)] to-[var(--mint)]">
                Questions?
              </span>
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Find answers to common questions about services, process, and how we can work together.
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
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <CardContent
                  className="p-6"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-lg font-bold text-[var(--navy)] flex-1">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-[var(--electric-blue)] flex-shrink-0 transition-transform ${
                        openIndex === index ? 'rotate-180' : ''
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
      </section>
    </div>
  );
}
