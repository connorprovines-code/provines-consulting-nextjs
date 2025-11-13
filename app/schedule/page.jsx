"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Schedule() {
  useEffect(() => {
    // Load Calendly widget script if not already loaded
    const existingScript = document.querySelector('script[src*="calendly"]');

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => {
        // Script loaded, Calendly widget will initialize automatically
        console.log('Calendly script loaded successfully');
      };
      document.body.appendChild(script);
    } else {
      // Script tag exists, but check if Calendly object is loaded
      if (typeof window.Calendly === 'undefined') {
        // Wait for the existing script to finish loading
        existingScript.addEventListener('load', () => {
          console.log('Calendly script loaded successfully');
        });
      }
    }
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-slate-50 min-h-screen">
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
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block mb-4">
              <span className="px-4 py-1.5 bg-gradient-to-r from-[var(--mint)]/10 to-[var(--electric-blue)]/10 text-[var(--navy)] rounded-full text-sm font-medium border border-[var(--mint)]/20">
                Book a Consultation
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-[var(--navy)] mb-6 leading-tight">
              Let's Build Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--electric-blue)] to-[var(--mint)]">
                Growth Strategy
              </span>
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Schedule a free consultation to discuss how AI automation and strategic marketing can transform your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calendly Inline Widget */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div
          className="calendly-inline-widget bg-white rounded-2xl shadow-2xl overflow-hidden"
          data-url="https://calendly.com/connorprovines/30min?hide_gdpr_banner=1"
          style={{ minWidth: "320px", height: "700px" }}
        />
      </section>
    </div>
  );
}
