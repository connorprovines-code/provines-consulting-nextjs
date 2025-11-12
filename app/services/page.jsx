"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, TrendingUp, Settings, Target, CheckCircle, Calendar, ArrowRight, Zap, Rocket, Brain } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      icon: Bot,
      title: "Agentic AI Automation",
      tagline: "Transform operations with intelligent AI systems",
      description: "I build and deploy complete AI automation systems that transform your operations. From strategy to implementation to optimization, every solution is tailored to your specific needs.",
      features: [
        "Voice agents for appointment setting and lead enrichment",
        "Automated lead scoring and intelligent handoff systems",
        "Social listening and automated engagement platforms",
        "Custom AI workflows integrated with your tech stack",
        "Ongoing optimization and performance monitoring"
      ],
      color: "#0091FF",
      accentColor: "#00D9A3"
    },
    {
      icon: TrendingUp,
      title: "Growth Marketing Strategy",
      tagline: "Proven strategies for exponential SaaS growth",
      description: "Drawing on 10+ years of B2B SaaS leadership across all growth stages, I develop and execute comprehensive growth strategies that drive measurable results.",
      features: [
        "Go-to-market (GTM) strategy and execution",
        "Product-Led Growth (PLG) initiative planning",
        "Generative Engine Optimization (GEO) implementation",
        "Multi-channel growth campaigns",
        "Conversion rate optimization",
        "Performance tracking and analytics setup"
      ],
      color: "#00D9A3",
      accentColor: "#0091FF"
    },
    {
      icon: Settings,
      title: "Marketing Operations",
      tagline: "Build the foundation for scalable growth",
      description: "I architect and implement marketing systems that enable your team to operate efficiently and scale effectively.",
      features: [
        "Marketing automation platform setup and optimization",
        "Workflow design and implementation",
        "CRM integration and data architecture",
        "Lead routing and attribution modeling",
        "Reporting dashboards and analytics",
        "Team training and documentation"
      ],
      color: "#0091FF",
      accentColor: "#00D9A3"
    }
  ];

  return (
    <div className="bg-white">
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
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block mb-4">
              <span className="px-4 py-1.5 bg-gradient-to-r from-[var(--mint)]/10 to-[var(--electric-blue)]/10 text-[var(--navy)] rounded-full text-sm font-medium border border-[var(--mint)]/20">
                Comprehensive Solutions
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-[var(--navy)] mb-6 leading-tight">
              Services Built
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--electric-blue)] to-[var(--mint)]">
                for Growth
              </span>
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              From strategic marketing leadership to cutting-edge AI automation, I deliver comprehensive solutions that transform your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid - COMPLETELY REDESIGNED */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-xl h-full hover:shadow-2xl transition-all duration-300 bg-white relative overflow-hidden group">
                {/* Gradient header */}
                <div
                  className="h-48 relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${service.color} 0%, ${service.accentColor} 100%)`
                  }}
                >
                  {/* Geometric pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-5 right-5 w-24 h-24 border-2 border-white rounded-full" />
                    <div className="absolute bottom-5 left-5 w-16 h-16 border-2 border-white rotate-45" />
                  </div>

                  <div className="relative h-full flex flex-col items-center justify-center text-white p-8">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-sm">
                      <service.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-center">{service.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-8">
                  <p className="text-slate-600 font-medium mb-6">{service.tagline}</p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.description}</p>

                  <div className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: service.color }} />
                        <span className="text-sm text-slate-700 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Free Audit CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="border-2 border-[var(--mint)] shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="bg-gradient-to-br from-[var(--mint)] to-[var(--electric-blue)] p-12 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-10 right-10 w-32 h-32 border-2 border-white rounded-full" />
                  <div className="absolute bottom-10 left-10 w-24 h-24 border-2 border-white rotate-45" />
                </div>
                <div className="relative">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                    <Target className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold mb-3">Free Growth Audit</h3>
                  <p className="text-white/90 text-lg">Get expert insights into your marketing systems and growth opportunities</p>
                </div>
              </div>

              <div className="p-12 bg-white">
                <h4 className="font-bold text-[var(--navy)] mb-4 text-xl">What You'll Get:</h4>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--mint)] flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Comprehensive systems audit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--mint)] flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Identified opportunities for improvement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--mint)] flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">30-minute strategy consultation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--mint)] flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Actionable recommendations</span>
                  </li>
                </ul>
                <Link href="/schedule">
                  <Button className="w-full bg-[var(--electric-blue)] hover:bg-[var(--navy)] text-white h-12">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Your Free Audit
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </motion.div>
      </section>

      {/* Process */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[var(--navy)] mb-4">
              How We Work Together
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Every engagement is tailored to your needs, but here's the typical process:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "We discuss your goals, challenges, and opportunities in depth.", icon: Brain },
              { step: "02", title: "Strategy", desc: "I develop a comprehensive plan tailored to your specific needs.", icon: Target },
              { step: "03", title: "Implementation", desc: "White-glove execution with ongoing communication and updates.", icon: Rocket },
              { step: "04", title: "Optimization", desc: "Continuous monitoring, refinement, and scaling for maximum results.", icon: Zap }
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
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--electric-blue)] to-[var(--mint)] text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                      {item.step}
                    </div>
                    <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-6 h-6 text-[var(--navy)]" />
                    </div>
                    <h3 className="text-xl font-bold text-[var(--navy)] mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--navy)] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-3">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[var(--electric-blue)] to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Let's discuss how I can help you achieve your growth goals with strategic marketing and AI automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/schedule">
                <Button
                  size="lg"
                  className="bg-[var(--mint)] hover:bg-[var(--mint)]/90 text-[var(--navy)] text-lg h-14 px-8 w-full sm:w-auto font-semibold"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book a Call
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[var(--navy)] text-lg h-14 px-8 w-full sm:w-auto font-semibold"
                >
                  Send a Message
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
