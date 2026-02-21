"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Schedule() {
  const widgetRef = useRef(null);

  useEffect(() => {
    // Function to initialize the Calendly widget
    function initWidget() {
      if (window.Calendly && widgetRef.current) {
        window.Calendly.initInlineWidget({
          url: "https://calendly.com/connorprovines/30min?hide_gdpr_banner=1",
          parentElement: widgetRef.current,
        });
      }
    }

    // If Calendly is already loaded, init immediately
    if (window.Calendly) {
      initWidget();
      return;
    }

    // Otherwise load the script and init when ready
    const existing = document.querySelector('script[src*="calendly.com/assets/external/widget.js"]');
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = initWidget;
      document.head.appendChild(script);
    } else {
      // Script tag exists but may still be loading
      existing.addEventListener("load", initWidget);
      // Also try in case it already loaded
      setTimeout(initWidget, 500);
    }

    // Load Calendly CSS if not present
    if (!document.querySelector('link[href*="calendly.com"]')) {
      const link = document.createElement("link");
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[var(--navy)] to-[#112240]">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Book a
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--electric-blue)] to-[var(--mint)]">
                {" "}discovery call.
              </span>
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
              30 minutes. No pitch. We'll look at where you're spending time
              on things that should be automated and figure out what to build first.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Calendly Widget */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div
          ref={widgetRef}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
          style={{ minWidth: "320px", minHeight: "700px" }}
        />
      </section>
    </div>
  );
}
