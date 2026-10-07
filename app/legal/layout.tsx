import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy and Terms of Service',
  alternates: { canonical: '/legal' },
  description: 'Review our privacy policy, terms of service, and legal information. Learn how we protect your data and maintain transparency.',
  keywords: ['privacy policy', 'terms of service', 'legal', 'data protection', 'GDPR'],
  openGraph: {
    title: 'Privacy Policy and Terms of Service | Provines Consulting',
    description: 'Review our privacy policy and terms of service.',
    type: 'website',
  },
};

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
