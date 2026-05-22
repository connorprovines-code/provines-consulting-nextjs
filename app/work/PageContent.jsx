"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const SHOW_CLIENT_DETAILS = process.env.NEXT_PUBLIC_SHOW_CLIENT_DETAILS === "true";

const caseStudies = [
  {
    slug: "custom-home-builder",
    title: "Legacy Lock-In to Full Control",
    subtitle: SHOW_CLIENT_DETAILS ? "Turner & Son Homes" : "Custom Home Builder",
    location: "Oklahoma City, OK",
    headline: "Years of overpaying for software nobody fully used. Fixed in under a month.",
    tags: ["Website Rebuild", "AI Enablement", "CRM Migration", "Team Training"],
    image: "/ts-after.png",
    ready: true,
  },
];

export default function WorkContent() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 pt-24 pb-8 md:pt-32 md:pb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--navy)] mb-6 leading-tight">
          Case Studies
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
          Every engagement ends the same way: the client owns everything and
          knows how to run it. Here&apos;s what that looks like in practice.
        </p>
      </section>

      {/* Case Study Cards */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 py-12 md:py-16">
        <div className="space-y-8">
          {caseStudies.map((study) => {
            const content = (
              <>
                {/* Image */}
                <div className="aspect-[2.4/1] overflow-hidden bg-slate-100">
                  <img
                    src={study.image}
                    alt={study.title}
                    className={`w-full h-full object-cover object-top ${study.ready ? "group-hover:scale-[1.02]" : ""} transition-transform duration-500`}
                  />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <h2 className="text-xl md:text-2xl font-bold text-[var(--navy)] mb-2 leading-snug">
                    {study.title}
                  </h2>
                  <div className="flex items-center gap-2 mb-4">
                    <p className="text-sm font-medium text-slate-500">
                      {study.subtitle}
                    </p>
                    <span className="text-slate-300">&middot;</span>
                    <p className="text-sm text-slate-400">{study.location}</p>
                  </div>
                  <p className="text-base text-slate-600 mb-4 leading-relaxed">
                    {study.headline}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {study.ready ? (
                    <span className="inline-flex items-center text-sm font-semibold text-[var(--electric-blue)] group-hover:gap-2 transition-all">
                      Read the case study
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  ) : (
                    <span className="inline-flex items-center text-sm font-medium text-slate-400">
                      Full case study coming soon
                    </span>
                  )}
                </div>
              </>
            );

            if (study.ready) {
              return (
                <Link
                  key={study.slug}
                  href={`/work/${study.slug}`}
                  className="group block border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  {content}
                </Link>
              );
            }

            return (
              <div
                key={study.slug}
                className="block border border-slate-200 rounded-xl overflow-hidden"
              >
                {content}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-6">
            Want to see what this looks like for your business?
          </h2>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            30 minutes. I&apos;ll walk you through the live systems. No pitch deck.
          </p>
          <Link
            href="/schedule"
            className="inline-flex items-center justify-center px-10 py-4 bg-[var(--navy)] text-white font-semibold text-lg rounded-lg hover:opacity-90 transition-opacity"
          >
            Book a discovery call
          </Link>
        </div>
      </section>
    </div>
  );
}
