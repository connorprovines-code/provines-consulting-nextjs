"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Calendar, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const CONTACT_EMAIL = "connorprovines@gmail.com";
const CONTACT_PHONE_HREF = "+14083403265";
const CONTACT_PHONE_DISPLAY = "+1 (408) 340-3265";

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    interest_area: "",
    message: "",
    website: "" // honeypot
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const formLoadedAt = useRef(Date.now());

  // Reset timer when form becomes visible again after submission
  useEffect(() => {
    if (!submitted) {
      formLoadedAt.current = Date.now();
    }
  }, [submitted]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          formLoadedAt: formLoadedAt.current
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          interest_area: "",
          message: "",
          website: "",
        });
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Something went wrong. Please email me directly.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setError("Something went wrong. Please email me directly.");
    }

    setSubmitting(false);
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
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
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--navy)] mb-6 leading-tight">
              Let's
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--electric-blue)] to-[var(--mint)]">
                talk.
              </span>
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Whether you have a specific project in mind or just want to
              explore what's possible — reach out. No pitch, no pressure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Form */}
          <div>
            <Card className="border-0 shadow-2xl bg-white relative">
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
                      Thanks for reaching out. I'll get back to you within 24
                      hours.
                    </p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      variant="outline"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Honeypot - hidden from humans, bots will fill it */}
                    <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", top: "-9999px", height: 0, overflow: "hidden", tabIndex: -1 }}>
                      <label htmlFor="website">Website</label>
                      <input
                        type="text"
                        id="website"
                        name="website"
                        autoComplete="off"
                        tabIndex={-1}
                        value={formData.website}
                        onChange={(e) => handleChange("website", e.target.value)}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          required
                          placeholder="Your name"
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
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) =>
                            handleChange("company", e.target.value)
                          }
                          placeholder="Your business"
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
                      <Label htmlFor="interest">
                        What are you interested in?
                      </Label>
                      <Select
                        value={formData.interest_area}
                        onValueChange={(value) =>
                          handleChange("interest_area", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select an area" />
                        </SelectTrigger>
                        <SelectContent position="popper" sideOffset={4}>
                          <SelectItem value="ai_agents">
                            AI Agents & Assistants
                          </SelectItem>
                          <SelectItem value="process_automation">
                            Process Automation
                          </SelectItem>
                          <SelectItem value="website_rebuild">
                            Website Rebuild & Migration
                          </SelectItem>
                          <SelectItem value="integrations">
                            System Integrations
                          </SelectItem>
                          <SelectItem value="custom_tools">
                            Custom Tool Development
                          </SelectItem>
                          <SelectItem value="full_engagement">
                            Full Engagement (Multiple Services)
                          </SelectItem>
                          <SelectItem value="other">
                            Not Sure / Other
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          handleChange("message", e.target.value)
                        }
                        required
                        rows={6}
                        placeholder="Tell me about your business and what you're looking for..."
                      />
                    </div>

                    {error && (
                      <p className="text-sm text-red-600">
                        {error}{" "}
                        <a
                          href={`mailto:${CONTACT_EMAIL}`}
                          className="underline"
                        >
                          {CONTACT_EMAIL}
                        </a>
                      </p>
                    )}

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
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="text-xl">Get in Touch Directly</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--electric-blue)]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[var(--electric-blue)]" />
                  </div>
                  <div>
                    <p className="font-medium text-[var(--navy)]">Email</p>
                    <p className="text-sm text-slate-600 group-hover:text-[var(--electric-blue)] transition-colors">
                      {CONTACT_EMAIL}
                    </p>
                  </div>
                </a>

                <a
                  href={`tel:${CONTACT_PHONE_HREF}`}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--mint)]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[var(--mint)]" />
                  </div>
                  <div>
                    <p className="font-medium text-[var(--navy)]">Phone</p>
                    <p className="text-sm text-slate-600 group-hover:text-[var(--mint)] transition-colors">
                      {CONTACT_PHONE_DISPLAY}
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[var(--electric-blue)]/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-[var(--electric-blue)]" />
                  </div>
                  <div>
                    <p className="font-medium text-[var(--navy)]">
                      Schedule a Call
                    </p>
                    <p className="text-sm text-slate-600 mb-2">
                      Book directly on my calendar
                    </p>
                    <Link href="/schedule">
                      <Button
                        size="sm"
                        className="bg-[var(--electric-blue)] hover:bg-[var(--navy)] text-white"
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
                <h3 className="font-bold text-[var(--navy)] mb-2">
                  Not sure what you need?
                </h3>
                <p className="text-sm text-slate-600">
                  That's fine — most people aren't when they first reach out.
                  Just tell me about your business and what's not working. We'll
                  figure out the right approach together.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
