"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Lightbulb, Target, Users, ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const expertise = [
    {
      icon: Target,
      title: "Strategic Vision",
      description: "10+ years driving 0→1 and 1→10 growth for B2B SaaS companies with proven GTM strategies and product-led marketing initiatives."
    },
    {
      icon: Lightbulb,
      title: "Innovation Leader",
      description: "At the forefront of Agentic AI and marketing automation, implementing transformational solutions that redefine business operations."
    },
    {
      icon: Briefcase,
      title: "Hands-On Execution",
      description: "White-glove service from strategy to implementation. Every project receives personal attention and expert execution."
    },
    {
      icon: Users,
      title: "Client-First Approach",
      description: "Building long-term partnerships through transparent communication, measurable results, and genuine commitment to your success."
    }
  ];

  const credentials = [
    "10+ years B2B SaaS marketing leadership",
    "Expert in Product-Led Growth (PLG) strategies",
    "Certified in Marketing Automation platforms",
    "Generative Engine Optimization (GEO) specialist",
    "Full-stack Agentic AI implementation",
    "Marketing Operations architecture"
  ];

  return (
    <div className="relative">
      {/* Hero - IMPROVED TO MATCH HOME */}
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

            <h1 className="text-5xl md:text-7xl font-bold text-[var(--navy)] mb-6 leading-tight">
              Marketing Leadership
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--electric-blue)] to-[var(--mint)]">
                Meets AI Innovation
              </span>
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
              I'm Connor Provines, and I help companies navigate the intersection of strategic marketing and transformational AI technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-slate-50/30 to-white" />
        <div className="absolute top-1/3 left-0 w-[300px] h-[300px] bg-gradient-to-br from-[var(--electric-blue)]/5 to-transparent rounded-full blur-3xl -z-10" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="prose prose-lg max-w-none"
        >
          <h2 className="text-3xl font-bold text-[var(--navy)] mb-6">
            A Decade of Driving Growth
          </h2>

          <div className="space-y-6 text-slate-700 leading-relaxed">
            <p>
              Over the past 10+ years, I've had the privilege of leading marketing initiatives for B2B SaaS companies at every stage of their journey—from initial market entry (0→1) through scaled growth (1→10). My approach has always been grounded in a simple principle: strategic thinking paired with hands-on execution delivers results.
            </p>

            <p>
              Today, my focus has evolved to include cutting-edge Agentic AI and large-scale marketing automation. I've witnessed firsthand how the right AI implementation can transform not just marketing operations, but entire business processes. From voice agents handling front desk operations to sophisticated lead enrichment and scoring systems, I build solutions that work seamlessly in the real world.
            </p>

            <p>
              What sets my work apart is the combination of deep marketing expertise and technical implementation capability. I don't just advise—I build, deploy, and optimize. Every solution is white-glove, meaning you get personal attention from strategy through execution and beyond.
            </p>

            <p>
              Whether you're looking to refine your go-to-market strategy, implement product-led growth initiatives, optimize with Generative Engine Optimization, or transform your operations with AI automation, I bring both the strategic vision and technical know-how to make it happen.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Expertise Grid */}
      <section className="relative bg-gradient-to-b from-white via-slate-50/50 to-white py-24">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-bl from-[var(--mint)]/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-[var(--electric-blue)]/5 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[var(--navy)] mb-4">
              What I Bring to the Table
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A unique blend of strategic marketing leadership and hands-on technical execution.
            </p>
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
                <Card className="border-0 shadow-lg h-full hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-slate-50/50 relative overflow-hidden group">
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

      {/* Credentials */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-[var(--electric-blue)]/5 to-transparent rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[var(--navy)] via-[#0d2a52] to-[#1a3a6b] rounded-3xl p-12 md:p-16 text-white relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[var(--mint)] to-transparent rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[var(--electric-blue)] to-transparent rounded-full blur-2xl" />
          </div>

          <div className="relative">
            <h2 className="text-3xl font-bold mb-8">Credentials & Expertise</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {credentials.map((credential, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-[var(--mint)] flex-shrink-0" />
                  <span className="text-white">{credential}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-slate-50/30 to-white" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[var(--navy)] mb-6">
            Let's Build Something Great
          </h2>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Whether you need strategic guidance or full implementation, I'm here to help you achieve your growth goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/schedule">
              <Button
                size="lg"
                className="bg-[var(--electric-blue)] hover:bg-[var(--navy)] text-white text-lg h-14 px-8 shadow-lg shadow-[var(--electric-blue)]/20 w-full sm:w-auto"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule a Call
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
