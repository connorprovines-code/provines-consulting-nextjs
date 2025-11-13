import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us – Get Your Free Marketing Audit',
  description: 'Get in touch for a free marketing audit and consultation. Transform your B2B SaaS marketing with strategic guidance and AI automation.',
  keywords: ['contact', 'free audit', 'marketing consultation', 'get in touch', 'B2B SaaS consulting'],
  openGraph: {
    title: 'Contact Us – Get Your Free Marketing Audit | Provines Consulting',
    description: 'Get in touch for a free marketing audit and consultation.',
    type: 'website',
    url: 'https://www.provinesconsulting.com/contact',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us – Get Your Free Marketing Audit | Provines Consulting',
    description: 'Get in touch for a free marketing audit and consultation.',
  },
  alternates: {
    canonical: 'https://www.provinesconsulting.com/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
