"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ContactSubmission, SiteConfig } from "@/api/entities";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Calendar, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    interest_area: "",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [webhookUrl, setWebhookUrl] = useState("https://connorprovines.app.n8n.cloud/webhook/contact-me-consulting");

  useEffect(() => {
    loadConfig();
  }, []);

  const loadConfig = async () => {
    const configs = await SiteConfig.list();
    if (configs.length > 0) {
      const siteConfig = configs[0];
      if (siteConfig.webhook_url) {
        setWebhookUrl(siteConfig.webhook_url);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const submissionTimestamp = new Date().toISOString();

      await ContactSubmission.create({
        ...formData,
        submission_timestamp: submissionTimestamp,
        internal_notes: `Submitted via contact form at ${new Date(submissionTimestamp).toLocaleString()}`
      });

      if (webhookUrl) {
        try {
          await fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ...formData,
              submission_timestamp: submissionTimestamp
            })
          });
        } catch (error) {
          console.error("Webhook error:", error);
        }
      }

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        interest_area: "",
        message: ""
      });
    } catch (error) {
      console.error("Submission error:", error);
    }

    setSubmitting(false);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="relative min-h-screen">
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
                Get in Touch
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-[var(--navy)] mb-6 leading-tight">
              Unlock Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--electric-blue)] to-[var(--mint)]">
                1→10x Growth
              </span>
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Ready to scale your business and achieve exponential results? Let's discuss how Agentic AI and strategic automation can drive your growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-[var(--electric-blue)]/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[var(--mint)]/5 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Form */}
          <div>
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-slate-50/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-slate-50/50" />
              <CardHeader className="relative">
                <CardTitle className="text-2xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="relative">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-[var(--mint)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-[var(--mint)]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--navy)] mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-slate-600 mb-6">
                      Thank you for reaching out. I'll get back to you within 24 hours.
                    </p>
                    <Button onClick={() => setSubmitted(false)} variant="outline">
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          required
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          required
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleChange("company", e.target.value)}
                          placeholder="Your Company"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="interest">What are you interested in?</Label>
                      <Select
                        value={formData.interest_area}
                        onValueChange={(value) => handleChange("interest_area", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select an area" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="agentic_ai">Agentic AI Automation</SelectItem>
                          <SelectItem value="marketing_strategy">Marketing Strategy</SelectItem>
                          <SelectItem value="automation">Marketing Automation</SelectItem>
                          <SelectItem value="audit">Free Audit</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        required
                        rows={6}
                        placeholder="Tell me about your project or questions..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={submitting}
                      className="w-full bg-[var(--electric-blue)] hover:bg-[var(--navy)] text-white shadow-lg shadow-[var(--electric-blue)]/20"
                    >
                      {submitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-slate-50/50">
              <CardHeader>
                <CardTitle className="text-xl">Quick Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[var(--electric-blue)]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[var(--electric-blue)]" />
                  </div>
                  <div>
                    <p className="font-medium text-[var(--navy)]">Email</p>
                    <p className="text-sm text-slate-600">connorprovines@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[var(--mint)]/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-[var(--mint)]" />
                  </div>
                  <div>
                    <p className="font-medium text-[var(--navy)]">Schedule a Call</p>
                    <p className="text-sm text-slate-600 mb-2">Book directly on my calendar</p>
                    <Link href="/schedule">
                      <Button
                        size="sm"
                        className="bg-[var(--mint)] hover:bg-[var(--mint)]/90 text-[var(--navy)]"
                      >
                        Book Time
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[var(--mint)] shadow-lg bg-gradient-to-br from-[var(--mint)]/5 to-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[var(--mint)]/20 to-transparent rounded-full blur-2xl" />
              <CardContent className="p-6 relative">
                <h3 className="font-bold text-[var(--navy)] mb-2">Free 1→10x Growth Audit</h3>
                <p className="text-sm text-slate-600">
                  Get a complimentary audit of your current systems to identify 1→10x growth opportunities, plus a 30-minute consultation. No obligation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
