"use client";

import { motion } from "framer-motion";

export default function Legal() {
  return (
    <div className="bg-gradient-to-b from-white to-slate-50 min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[var(--electric-blue)]/5 to-transparent rounded-full blur-3xl transform -translate-x-1/3 -translate-y-1/3" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold text-[var(--navy)] mb-4">
              Legal Information
            </h1>
            <p className="text-xl text-slate-600">
              Terms of Service and Privacy Policy
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-[var(--navy)] mb-6">Terms of Service</h2>

          <h3 className="text-xl font-bold text-[var(--navy)] mt-8 mb-4">Services</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            Provines Consulting provides strategic marketing leadership, AI automation implementation,
            and marketing operations consulting services. All services are provided on a project or
            retainer basis as agreed upon in individual statements of work.
          </p>

          <h3 className="text-xl font-bold text-[var(--navy)] mt-8 mb-4">Payment Terms</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            Payment terms are outlined in individual contracts and statements of work. Typical terms
            include 50% upfront and 50% upon completion for project-based work, or monthly invoicing
            for retainer arrangements.
          </p>

          <h3 className="text-xl font-bold text-[var(--navy)] mt-8 mb-4">Intellectual Property</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            Upon full payment, all deliverables and work product become the property of the client.
            Provines Consulting retains the right to use anonymized case studies and results for
            marketing purposes unless otherwise specified in the contract.
          </p>

          <h3 className="text-xl font-bold text-[var(--navy)] mt-8 mb-4">Confidentiality</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            All client information, strategies, and data are treated as strictly confidential.
            Non-disclosure agreements are available upon request.
          </p>

          <h2 className="text-3xl font-bold text-[var(--navy)] mb-6 mt-12">Privacy Policy</h2>

          <h3 className="text-xl font-bold text-[var(--navy)] mt-8 mb-4">Information Collection</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            We collect information you provide directly through contact forms, email communications,
            and consultation scheduling. This includes name, email, company name, and any details you
            choose to share about your business needs.
          </p>

          <h3 className="text-xl font-bold text-[var(--navy)] mt-8 mb-4">Use of Information</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            Information is used solely to respond to inquiries, provide requested services, and communicate
            about projects. We never sell or share your information with third parties for marketing purposes.
          </p>

          <h3 className="text-xl font-bold text-[var(--navy)] mt-8 mb-4">Data Security</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            We implement appropriate security measures to protect your information. All data is stored
            securely and accessed only by authorized personnel.
          </p>

          <h3 className="text-xl font-bold text-[var(--navy)] mt-8 mb-4">Contact</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            For questions about these terms or our privacy practices, please contact us at
            connorprovines@gmail.com
          </p>

          <p className="text-sm text-slate-500 mt-12">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>
    </div>
  );
}
