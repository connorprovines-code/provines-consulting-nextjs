import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ – Frequently Asked Questions | Provines Consulting',
  description: 'Get answers to common questions about our AI automation services, marketing strategies, pricing, and how we help B2B SaaS companies scale.',
  keywords: ['FAQ', 'frequently asked questions', 'AI automation questions', 'pricing', 'services', 'B2B SaaS'],
  openGraph: {
    title: 'FAQ – Frequently Asked Questions',
    description: 'Get answers to common questions about our AI automation and marketing services.',
    type: 'website',
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
