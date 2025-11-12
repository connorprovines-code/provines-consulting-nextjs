"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BlogPost, Guide, CaseStudy } from "@/api/entities";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, FileText, BookOpen, TrendingUp } from "lucide-react";
import { format } from "date-fns";
import { motion } from "framer-motion";

export default function Content() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [guides, setGuides] = useState([]);
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    const [posts, guidesList, studies] = await Promise.all([
      BlogPost.filter({ status: "published" }, "-published_date"),
      Guide.filter({ status: "published" }, "-created_date"),
      CaseStudy.filter({ status: "published" }, "-created_date")
    ]);
    setBlogPosts(posts);
    setGuides(guidesList);
    setCaseStudies(studies);
    setLoading(false);
  };

  return (
    <div className="relative">
      {/* Hero - IMPROVED TO MATCH HOME */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[var(--electric-blue)]/5 via-[var(--mint)]/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-[var(--mint)]/5 via-[var(--electric-blue)]/5 to-transparent rounded-full blur-3xl" />
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
                Resources & Insights
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-[var(--navy)] mb-6 leading-tight">
              Insights &
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--electric-blue)] to-[var(--mint)]">
                Implementation
              </span>
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Strategic thinking, practical guides, and actionable insights on marketing and AI automation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
          <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-gradient-to-br from-[var(--mint)]/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-[var(--electric-blue)]/5 to-transparent rounded-full blur-3xl" />
        </div>

        <Tabs defaultValue="guides" className="w-full">
          {/* Updated TabsList to include Case Studies */}
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="guides" className="text-base">
              <FileText className="w-4 h-4 mr-2" />
              Implementation Guides
            </TabsTrigger>
            <TabsTrigger value="blog" className="text-base">
              <BookOpen className="w-4 h-4 mr-2" />
              Blog Posts
            </TabsTrigger>
            <TabsTrigger value="case-studies" className="text-base">
              <TrendingUp className="w-4 h-4 mr-2" />
              Case Studies
            </TabsTrigger>
          </TabsList>

          <TabsContent value="guides">
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--mint)] mx-auto" />
              </div>
            ) : guides.length === 0 ? (
              <Card className="border-2 border-dashed">
                <CardContent className="text-center py-12">
                  <FileText className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-500">No implementation guides published yet. Check back soon!</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid md:grid-cols-2 gap-8">
                {guides.map((guide, index) => (
                  <motion.div
                    key={guide.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Link href={`/guide?slug=${guide.slug}`}>
                      <Card className="group hover:shadow-2xl transition-all duration-300 border-0 h-full bg-gradient-to-br from-white to-slate-50/50 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[var(--mint)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <CardHeader className="relative">
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--mint)] to-[var(--electric-blue)] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[var(--mint)]/20">
                              <FileText className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex gap-2">
                              <Badge variant="secondary" className="capitalize">
                                {guide.difficulty}
                              </Badge>
                            </div>
                          </div>
                          <CardTitle className="text-xl group-hover:text-[var(--mint)] transition-colors">
                            {guide.title}
                          </CardTitle>
                          {guide.estimated_time && (
                            <div className="flex items-center gap-2 text-sm text-slate-500">
                              <Clock className="w-4 h-4" />
                              {guide.estimated_time}
                            </div>
                          )}
                        </CardHeader>
                        <CardContent className="relative">
                          <p className="text-slate-600 line-clamp-3 mb-4">{guide.description}</p>
                          <span className="text-[var(--mint)] font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                            View Guide <ArrowRight className="w-4 h-4" />
                          </span>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="blog">
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--electric-blue)] mx-auto" />
              </div>
            ) : blogPosts.length === 0 ? (
              <Card className="border-2 border-dashed">
                <CardContent className="text-center py-12">
                  <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-500">No blog posts published yet. Check back soon!</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Link href={`/blogpost?slug=${post.slug}`}>
                      <Card className="group hover:shadow-2xl transition-all duration-300 border-0 h-full bg-gradient-to-br from-white to-slate-50/50 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[var(--electric-blue)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {post.featured_image && (
                          <div className="aspect-video overflow-hidden">
                            <img
                              src={post.featured_image}
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}
                        <CardHeader className="relative">
                          <CardTitle className="text-xl group-hover:text-[var(--electric-blue)] transition-colors">
                            {post.title}
                          </CardTitle>
                          <div className="flex items-center gap-4 text-sm text-slate-500 mt-2">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {format(new Date(post.published_date), "MMM d, yyyy")}
                            </span>
                          </div>
                        </CardHeader>
                        <CardContent className="relative">
                          <p className="text-slate-600 line-clamp-3 mb-4">{post.excerpt}</p>
                          <span className="text-[var(--electric-blue)] font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                            Read More <ArrowRight className="w-4 h-4" />
                          </span>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </TabsContent>

          {/* New TabsContent for Case Studies */}
          <TabsContent value="case-studies">
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--mint)] mx-auto" />
              </div>
            ) : caseStudies.length === 0 ? (
              <Card className="border-2 border-dashed">
                <CardContent className="text-center py-12">
                  <TrendingUp className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-500">No case studies published yet. Check back soon!</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid md:grid-cols-2 gap-8">
                {caseStudies.map((study, index) => (
                  <motion.div
                    key={study.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Link href={`/casestudy?slug=${study.slug}`}>
                      <Card className="group hover:shadow-2xl transition-all duration-300 border-0 h-full bg-gradient-to-br from-white to-slate-50/50 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[var(--mint)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {study.featured_image && (
                          <div className="aspect-video overflow-hidden">
                            <img
                              src={study.featured_image}
                              alt={study.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}
                        <CardHeader className="relative">
                          <Badge className="w-fit mb-2 bg-[var(--mint)]/10 text-[var(--mint)] border-[var(--mint)]/20">
                            Case Study
                          </Badge>
                          <CardTitle className="text-xl group-hover:text-[var(--mint)] transition-colors">
                            {study.title}
                          </CardTitle>
                          {study.company_profile && (
                            <p className="text-sm text-slate-500 mt-2">
                              {study.company_profile}
                            </p>
                          )}
                        </CardHeader>
                        <CardContent className="relative">
                          <p className="text-slate-600 line-clamp-3 mb-4">{study.challenge}</p>
                          <span className="text-[var(--mint)] font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                            Read Case Study <ArrowRight className="w-4 h-4" />
                          </span>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
