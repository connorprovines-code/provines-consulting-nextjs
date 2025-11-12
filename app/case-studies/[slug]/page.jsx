"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { CaseStudy } from "@/api/entities";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, TrendingUp } from "lucide-react";
import ReactMarkdown from "react-markdown";

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params.slug;
  const [caseStudy, setCaseStudy] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCaseStudy = async () => {
      const studies = await CaseStudy.filter({ slug: slug });
      if (studies.length > 0) {
        setCaseStudy(studies[0]);
      }
      setLoading(false);
    };

    if (slug) {
      loadCaseStudy();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--mint)]" />
      </div>
    );
  }

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Case study not found</h1>
          <Link href="/content">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Content
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-white to-slate-50 min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--navy)] to-[var(--navy)]/80 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--mint)]/10 to-[var(--electric-blue)]/10" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[var(--mint)]/20 to-transparent rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <Link href="/content">
            <Button variant="ghost" className="text-white hover:text-white hover:bg-white/10 mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Content
            </Button>
          </Link>

          <Badge className="mb-4 bg-[var(--mint)] text-[var(--navy)] hover:bg-[var(--mint)]/90">
            <TrendingUp className="w-3 h-3 mr-1" />
            Case Study
          </Badge>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {caseStudy.title}
          </h1>

          {caseStudy.company_profile && (
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4">
              <p className="text-sm font-semibold text-[var(--mint)] mb-1">Company Profile</p>
              <p className="text-white/90">{caseStudy.company_profile}</p>
            </div>
          )}

          {caseStudy.challenge && (
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="text-sm font-semibold text-[var(--mint)] mb-1">Challenge</p>
              <p className="text-white/90">{caseStudy.challenge}</p>
            </div>
          )}
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="guide-content prose prose-lg max-w-none">
          <style>{`
            .guide-content h2 {
              font-size: 2.25rem;
              font-weight: 700;
              color: var(--navy);
              margin-top: 3rem;
              margin-bottom: 1.5rem;
              line-height: 1.2;
            }

            .guide-content h3 {
              font-size: 1.75rem;
              font-weight: 700;
              color: var(--navy);
              margin-top: 2.5rem;
              margin-bottom: 1rem;
              line-height: 1.3;
            }

            .guide-content h4 {
              font-size: 1.25rem;
              font-weight: 600;
              color: var(--navy);
              margin-top: 2rem;
              margin-bottom: 0.75rem;
            }

            .guide-content p {
              font-size: 1.125rem;
              line-height: 1.8;
              color: #334155;
              margin-bottom: 1.5rem;
            }

            .guide-content ul, .guide-content ol {
              margin-bottom: 1.5rem;
              padding-left: 1.5rem;
            }

            .guide-content li {
              font-size: 1.125rem;
              line-height: 1.8;
              color: #334155;
              margin-bottom: 0.75rem;
            }

            .guide-content strong {
              font-weight: 600;
              color: var(--navy);
            }

            .guide-content code {
              background: #f1f5f9;
              padding: 0.125rem 0.375rem;
              border-radius: 0.25rem;
              font-size: 0.9em;
              color: var(--electric-blue);
              font-family: 'Monaco', 'Courier New', monospace;
            }

            .guide-content pre {
              background: #1e293b;
              color: #e2e8f0;
              padding: 1.5rem;
              border-radius: 0.5rem;
              overflow-x: auto;
              margin-bottom: 1.5rem;
            }

            .guide-content blockquote {
              border-left: 4px solid var(--mint);
              padding-left: 1.5rem;
              margin: 2rem 0;
              font-style: italic;
              color: #64748b;
            }

            .guide-content a {
              color: var(--electric-blue);
              text-decoration: underline;
            }

            .guide-content img {
              max-width: 100%;
              height: auto;
              border-radius: 0.5rem;
              margin: 2rem 0;
              box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            }
          `}</style>

          <ReactMarkdown>{caseStudy.content}</ReactMarkdown>
        </div>

        {/* CTA at bottom */}
        <div className="mt-16 p-8 bg-gradient-to-r from-[var(--mint)]/10 to-[var(--electric-blue)]/10 rounded-xl border border-[var(--mint)]/20">
          <h3 className="text-2xl font-bold text-[var(--navy)] mb-3">
            Ready to Transform Your Process?
          </h3>
          <p className="text-slate-600 mb-6">
            Get a complimentary audit and see how automation can drive similar results for your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/schedule">
              <Button className="bg-[var(--electric-blue)] hover:bg-[var(--navy)] text-white w-full sm:w-auto">
                Schedule Free Audit
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-[var(--navy)] text-[var(--navy)] hover:bg-[var(--navy)] hover:text-white w-full sm:w-auto">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
