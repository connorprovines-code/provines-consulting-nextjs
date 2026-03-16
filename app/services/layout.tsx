import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Marketing Infrastructure & Automation Services',
  description: 'Marketing infrastructure, growth consulting, AI assistants, website and CRM platforms, and custom development — built for business owners by someone with 12+ years in B2B SaaS marketing.',
  keywords: ['AI marketing infrastructure', 'growth consulting', 'B2B SaaS marketing consultant', 'custom AI chatbot for business', 'Claude-powered AI assistant', 'marketing automation for service companies', 'CRM automation', 'website rebuild', 'replace marketing agency'],
  openGraph: {
    title: 'AI Marketing Infrastructure & Automation Services',
    description: 'Complete marketing infrastructure builds, Claude-powered AI assistants, website platforms, CRM automation, and SEO systems — custom-built for business owners.',
    type: 'website',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
