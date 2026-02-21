import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Connor Provines – From SaaS Marketing to Digital Operations | Provines Consulting',
  description: '12+ years of SaaS marketing leadership, now building modern websites, AI agents, and digital operations for SMB owners who want independence from agencies.',
  keywords: ['Connor Provines', 'website rebuild', 'AI agents', 'small business', 'digital operations', 'marketing automation'],
  openGraph: {
    title: 'About Connor Provines – From SaaS Marketing to Digital Operations',
    description: '12+ years of marketing leadership, now building digital independence for business owners.',
    type: 'website',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
