"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { CaseStudy } from "@/api/entities";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import { format } from "date-fns";
import { motion } from "framer-motion";

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
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--electric-blue)]" />
      </div>
    );
  }

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Case Study not found</h1>
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
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/content">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Content
            </Button>
          </Link>

          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--navy)] mb-4">
              {caseStudy.title}
            </h1>

            {caseStudy.created_date && (
              <div className="flex items-center text-slate-600 mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <time dateTime={caseStudy.created_date}>
                  {format(new Date(caseStudy.created_date), "MMMM d, yyyy")}
                </time>
              </div>
            )}

            {caseStudy.summary && (
              <p className="text-xl text-slate-600 leading-relaxed">
                {caseStudy.summary}
              </p>
            )}
          </header>

          <div className="prose prose-lg max-w-none">
            <div
              dangerouslySetInnerHTML={{ __html: caseStudy.content }}
              className="text-slate-700 leading-relaxed"
            />
          </div>

          <footer className="mt-12 pt-8 border-t border-slate-200">
            <Link href="/content">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to All Content
              </Button>
            </Link>
          </footer>
        </motion.div>
      </article>
    </div>
  );
}
