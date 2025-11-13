import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Connor Provines – Marketing Leadership & AI Innovation',
  description: '10+ years of B2B SaaS marketing leadership meets cutting-edge AI automation. Strategic vision paired with hands-on execution for 0→1 and 1→10 growth.',
  keywords: ['Connor Provines', 'marketing leadership', 'AI automation', 'B2B SaaS expert', 'product-led growth', 'marketing operations'],
  openGraph: {
    title: 'About Connor Provines – Marketing Leadership & AI Innovation | Provines Consulting',
    description: '10+ years of B2B SaaS marketing leadership meets cutting-edge AI automation.',
    type: 'website',
    url: 'https://provines.consulting/about',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Connor Provines – Marketing Leadership & AI Innovation | Provines Consulting',
    description: '10+ years of B2B SaaS marketing leadership meets cutting-edge AI automation.',
  },
  alternates: {
    canonical: 'https://provines.consulting/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
