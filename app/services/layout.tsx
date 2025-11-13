import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services – AI Automation & Growth Marketing',
  description: 'Agentic AI automation, growth marketing strategy, and marketing operations for B2B SaaS. White-glove service from strategy to implementation.',
  keywords: ['AI automation', 'agentic AI', 'growth marketing', 'marketing operations', 'B2B SaaS marketing', 'voice agents', 'marketing automation'],
  openGraph: {
    title: 'Services – AI Automation & Growth Marketing | Provines Consulting',
    description: 'Agentic AI automation, growth marketing strategy, and marketing operations for B2B SaaS.',
    type: 'website',
    url: 'https://www.provinesconsulting.com/services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services – AI Automation & Growth Marketing | Provines Consulting',
    description: 'Agentic AI automation, growth marketing strategy, and marketing operations for B2B SaaS.',
  },
  alternates: {
    canonical: 'https://www.provinesconsulting.com/services',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
