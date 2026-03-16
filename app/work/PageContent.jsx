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
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--navy)] mb-6 leading-tight">
              Real projects. Real infrastructure.
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
              Every project ends the same way: the client owns everything and runs it themselves. No retainers. No dependency. Here's what that looks like.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What I Build */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-4">
              What I typically build
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Three patterns I see most. Most projects combine elements of all three.
            </p>
          </motion.div>

          <div className="space-y-6 max-w-4xl">
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

      {/* CTA — clean, no heavy gradient */}
      <section className="border-t border-slate-100 py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-6">
            Want to see what this looks like for your business?
          </h2>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            I'll walk you through live systems on a call. No pitch deck. Just a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/schedule">
              <Button
                size="lg"
                className="bg-[var(--navy)] hover:bg-[var(--navy)]/90 text-white text-lg h-14 px-8 w-full sm:w-auto font-semibold"
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
        </div>
      </section>
    </div>
  );
}
