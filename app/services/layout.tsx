import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | AI Marketing Infrastructure, Custom Bots & Automation',
  description: 'Complete marketing infrastructure builds, Claude-powered AI assistants, website platforms, CRM automation, and SEO systems — custom-built for business owners.',
  keywords: ['AI marketing infrastructure', 'custom AI chatbot for business', 'Claude-powered AI assistant', 'marketing automation for service companies', 'CRM automation', 'website rebuild', 'AI assistant implementation', 'replace marketing agency'],
  openGraph: {
    title: 'Services | AI Marketing Infrastructure, Custom Bots & Automation',
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
