import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Content Library – Marketing Insights & AI Guides | Provines Consulting',
  description: 'Explore our library of marketing guides, AI automation insights, case studies, and thought leadership content for B2B SaaS growth.',
  keywords: ['marketing content', 'AI guides', 'case studies', 'blog', 'B2B SaaS resources', 'marketing insights'],
  openGraph: {
    title: 'Content Library – Marketing Insights & AI Guides',
    description: 'Explore our library of marketing guides and AI automation insights.',
    type: 'website',
  },
};

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
