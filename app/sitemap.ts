import { MetadataRoute } from 'next'
import { BlogPost, Guide, CaseStudy } from '@/api/entities'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://provines.consulting'

  // Static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/schedule`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/content`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/legal`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]

  // Dynamic blog posts
  let blogPosts: any[] = []
  try {
    blogPosts = await BlogPost.list()
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error)
  }

  const blogRoutes = blogPosts
    .filter(post => post.slug && post.published_date)
    .map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.published_date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

  // Dynamic guides
  let guides: any[] = []
  try {
    guides = await Guide.list()
  } catch (error) {
    console.error('Error fetching guides for sitemap:', error)
  }

  const guideRoutes = guides
    .filter(guide => guide.slug && guide.published_date)
    .map((guide) => ({
      url: `${baseUrl}/guides/${guide.slug}`,
      lastModified: new Date(guide.published_date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

  // Dynamic case studies
  let caseStudies: any[] = []
  try {
    caseStudies = await CaseStudy.list()
  } catch (error) {
    console.error('Error fetching case studies for sitemap:', error)
  }

  const caseStudyRoutes = caseStudies
    .filter(study => study.slug && study.published_date)
    .map((study) => ({
      url: `${baseUrl}/case-studies/${study.slug}`,
      lastModified: new Date(study.published_date),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))

  return [...staticRoutes, ...blogRoutes, ...guideRoutes, ...caseStudyRoutes]
}
