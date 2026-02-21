"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState(null);

  const faqs = [
    {
      question: "What exactly do you do?",
      answer:
        "I rebuild websites on modern infrastructure (Next.js), install AI agents to handle marketing and operations (CRM, SEO, content, lead follow-up), connect your existing tools, and train you to run everything yourself. One engagement, complete digital transformation — then you're independent.",
    },
    {
      question: "Who is this for?",
      answer:
        "Owner-operators of small to medium businesses — especially service companies, contractors, professional firms, and businesses with high operational burden. If you're stuck on Wix or WordPress, paying an agency for every small change, or drowning in manual marketing work, this is built for you.",
    },
    {
      question: "Why would you rebuild my site before I pay you?",
      answer:
        "Because a demo beats a pitch deck. I build a working preview of your site so you can see the actual product — not a mockup, not promises. If you don't like it, you don't pay. Preview builds convert better than asking people to trust a pitch, and the work tends to speak for itself.",
    },
    {
      question: "How much does this cost?",
      answer:
        "It depends on what you need. Some businesses just need the website rebuild. Others need the full suite — agents, CRM integration, email automation, team training. I scope it based on your situation and give you clear, fixed pricing before anything starts. No standard packages because the work isn't standard.",
    },
    {
      question: "Do I need to know how to code?",
      answer:
        "No. Everything is built for plain English use. You describe what you want changed, the system does it. No terminal, no Git, no developer on speed dial. If you can write an email, you can manage your site and run your agents.",
    },
    {
      question: "What do I actually own after the engagement?",
      answer:
        "Everything. The code, the hosting, the domain, the agents, the documentation. No lock-in, no monthly fees to me. Any developer you hire down the road can work on it. I can't hold it over you — and I wouldn't want to.",
    },
    {
      question: "How is this different from hiring an agency?",
      answer:
        "An agency builds your site and you're dependent on them forever. Every change, every update, every small fix — you're calling them and paying for it. I build your site, install the tools, train your team, and hand you the keys. After the handoff, you don't need me. That's the whole point.",
    },
    {
      question: "What platforms do you migrate from?",
      answer:
        "Wix, Squarespace, WordPress, GoDaddy, Weebly, and most other website builders. If your site is currently live somewhere, I can migrate the content, images, and structure to modern infrastructure.",
    },
    {
      question: "What's the timeline?",
      answer:
        "Depends on scope. A straightforward website rebuild can be done in a few weeks. Full digital operations — site + agents + integrations + training — typically takes 4-8 weeks. I'll give you a clear timeline during the scoping conversation.",
    },
    {
      question: "What happens after the 90 days of support?",
      answer:
        "You're on your own — in a good way. You know how everything works, you have documentation, and the systems are designed to be self-managing. If you want to add new capabilities or expand later, I'm available for new projects. But you'll never be in a position where you need me to keep things running.",
    },
    {
      question: "What are the AI agents, specifically?",
      answer:
        "They're automated systems that handle operational tasks for your business. A CRM agent captures and routes leads from your website. An SEO agent monitors your rankings and optimizes content. A web management agent lets you update your site through natural language. They run continuously and handle work you'd otherwise do manually or pay someone to do.",
    },
    {
      question: "What's the catch?",
      answer:
        "No catch. This is how I find clients. I build a preview, you see the quality of work, and we have a conversation about whether the full engagement makes sense. If it doesn't, no hard feelings. The preview cost me time, not you.",
    },
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
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--navy)] mb-6 leading-tight">
              Common
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--electric-blue)] to-[var(--mint)]">
                Questions
              </span>
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Straight answers about how this works, what it costs, and what you
              get.
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
              className="bg-[var(--electric-blue)] hover:bg-[var(--navy)] text-white text-lg h-14 px-8"
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
