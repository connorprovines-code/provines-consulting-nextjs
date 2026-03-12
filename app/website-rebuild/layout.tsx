import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Website Rebuild – Modern Infrastructure for Service Businesses',
  description: 'Professional website rebuilds on Next.js with AI-powered content management, CRM integration, and full ownership. No lock-in, no recurring fees.',
  keywords: ['website rebuild', 'Next.js website', 'website migration', 'modern website', 'service business website', 'AI website management'],
  openGraph: {
    title: 'Website Rebuild – Modern Infrastructure for Service Businesses',
    description: 'Professional website rebuilds with AI-powered management and full ownership.',
    type: 'website',
  },
};

export default function WebsiteRebuildLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
