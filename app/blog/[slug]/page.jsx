"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { BlogPost } from "@/api/entities";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import { format } from "date-fns";

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      const posts = await BlogPost.filter({ slug: slug });
      if (posts.length > 0) {
        setPost(posts[0]);
      }
      setLoading(false);
    };

    if (slug) {
      loadPost();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--electric-blue)]" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Post not found</h1>
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
        {post.featured_image && (
          <div className="absolute inset-0 opacity-20">
            <img src={post.featured_image} alt="" className="w-full h-full object-cover" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--electric-blue)]/10 to-[var(--mint)]/10" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <Link href="/content">
            <Button variant="ghost" className="text-white hover:text-white hover:bg-white/10 mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Content
            </Button>
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-slate-300">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {format(new Date(post.published_date), "MMMM d, yyyy")}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="guide-content">
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

            .guide-content ul li {
              list-style-type: disc;
            }

            .guide-content ol li {
              list-style-type: decimal;
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

            .guide-content pre code {
              background: transparent;
              color: inherit;
              padding: 0;
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

            .guide-content a:hover {
              color: var(--navy);
            }

            .guide-content img {
              max-width: 100%;
              height: auto;
              border-radius: 0.5rem;
              margin: 2rem 0;
              box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            }

            .guide-content hr {
              border: none;
              border-top: 2px solid #e2e8f0;
              margin: 3rem 0;
            }
          `}</style>

          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </article>
    </div>
  );
}
