"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { BlogPost } from "@/api/entities";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import { format } from "date-fns";
import { motion } from "framer-motion";

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
              {post.title}
            </h1>

            {post.published_date && (
              <div className="flex items-center text-slate-600 mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <time dateTime={post.published_date}>
                  {format(new Date(post.published_date), "MMMM d, yyyy")}
                </time>
              </div>
            )}

            {post.excerpt && (
              <p className="text-xl text-slate-600 leading-relaxed">
                {post.excerpt}
              </p>
            )}
          </header>

          <div className="prose prose-lg max-w-none">
            <div
              dangerouslySetInnerHTML={{ __html: post.content }}
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
