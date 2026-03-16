"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function ScheduleContent() {
  const widgetRef = useRef(null);

  useEffect(() => {
    function initWidget() {
      if (window.Calendly && widgetRef.current) {
        widgetRef.current.innerHTML = "";
        window.Calendly.initInlineWidget({
          url: "https://calendly.com/connorprovines/30min?hide_gdpr_banner=1&background_color=ffffff&text_color=0A1F44&primary_color=0091FF",
          parentElement: widgetRef.current,
        });
      }
    }

    if (window.Calendly) {
      initWidget();
      return;
    }

    const existing = document.querySelector('script[src*="calendly.com/assets/external/widget.js"]');
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = initWidget;
      document.head.appendChild(script);
    } else {
      existing.addEventListener("load", initWidget);
      setTimeout(initWidget, 500);
    }

    if (!document.querySelector('link[href*="calendly.com"]')) {
      const link = document.createElement("link");
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero - compact, no jarring gradient */}
      <section className="bg-[#0A1F44]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Book a discovery call
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed max-w-xl mx-auto">
              30 minutes. No pitch. We'll figure out what your marketing infrastructure should look like — and what to build first.
            </p>
          </motion.div>
        </div>

      </section>

      {/* Calendly Widget - full size, no container clipping */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div
          ref={widgetRef}
          style={{ minWidth: "320px", height: "750px", width: "100%" }}
        />
      </section>
    </div>
  );
}
