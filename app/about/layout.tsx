import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Connor Provines | Marketing Leader & AI Infrastructure Builder',
  description: '12+ years B2B SaaS marketing leadership meets production AI systems. I build marketing infrastructure that business owners own — strategy and implementation in one person.',
  keywords: ['Connor Provines', 'AI infrastructure builder', 'marketing leadership', 'B2B SaaS marketing', 'AI assistant developer', 'fractional marketing technology'],
  openGraph: {
    title: 'About Connor Provines | Marketing Leader & AI Infrastructure Builder',
    description: '12+ years B2B SaaS marketing leadership meets production AI systems. Strategy and implementation in one person.',
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
