"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap, TrendingUp, Settings, CheckCircle, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const services = [
    {
      icon: Zap,
      title: "Agentic AI Automation",
      description: "Full white-glove AI solutions including voice agents, automated lead enrichment, social listening, and intelligent handoff systems.",
      color: "var(--electric-blue)"
    },
    {
      icon: TrendingUp,
      title: "Growth Marketing Strategy",
      description: "Product-led marketing, GEO strategies, and comprehensive GTM planning for 0→1 SaaS growth.",
      color: "var(--mint)"
    },
    {
      icon: Settings,
      title: "Marketing Operations",
      description: "End-to-end marketing automation, workflow optimization, and transformational system implementations.",
      color: "var(--electric-blue)"
    }
  ];

  const features = [
    "10+ years B2B SaaS marketing leadership",
    "Proven 0→1 and 1→10 growth expertise",
    "Cutting-edge AI automation implementation",
    "Strategic GTM planning and execution"
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[var(--electric-blue)]/5 via-[var(--mint)]/5 to-transparent rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[var(--mint)]/5 via-[var(--electric-blue)]/5 to-transparent rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-gradient-radial from-[var(--navy)]/3 via-transparent to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
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
                Strategic Marketing + AI Automation
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-[var(--navy)] mb-6 leading-tight">
              Transform Your Marketing
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--electric-blue)] to-[var(--mint)]">
                with AI-Powered Growth
              </span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl">
              I help B2B SaaS companies scale from 0→1 and 1→10 by applying battle-tested marketing strategies and implementing cutting-edge agentic AI automation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/schedule">
                <Button
                  size="lg"
                  className="bg-[var(--electric-blue)] hover:bg-[var(--navy)] text-white text-lg h-14 px-8 shadow-lg shadow-[var(--electric-blue)]/20 w-full sm:w-auto"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Your Free Audit
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[var(--navy)] text-[var(--navy)] hover:bg-[var(--navy)] hover:text-white text-lg h-14 px-8 w-full sm:w-auto"
                >
                  Explore Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <CheckCircle className="w-5 h-5 text-[var(--mint)] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-[var(--electric-blue)]/5 to-transparent rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[var(--navy)] mb-4">
            Services That Drive Results
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            From strategic planning to full-scale AI implementations, I deliver white-glove solutions tailored to your growth goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white via-white to-slate-50/50 h-full relative overflow-hidden">
                {/* Card background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{ backgroundColor: service.color }}
                />

                <CardContent className="p-8 relative">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <service.icon
                      className="w-7 h-7"
                      style={{ color: service.color }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--navy)] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <Button
              variant="outline"
              size="lg"
              className="border-[var(--electric-blue)] text-[var(--electric-blue)] hover:bg-[var(--electric-blue)] hover:text-white"
            >
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-[var(--navy)] text-white overflow-hidden">
        {/* Background pattern - VERY SUBTLE, no green */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[var(--electric-blue)] to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Marketing?
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Get a complimentary audit of your current systems and a 30-minute consultation to explore how we can drive your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/schedule">
                <Button
                  size="lg"
                  className="bg-[var(--mint)] hover:bg-[var(--mint)]/90 text-[var(--navy)] text-lg h-14 px-8 shadow-lg shadow-[var(--mint)]/20 w-full sm:w-auto font-semibold"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Free Audit
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[var(--navy)] text-lg h-14 px-8 w-full sm:w-auto font-semibold"
                >
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
