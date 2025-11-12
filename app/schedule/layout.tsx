import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Schedule a Call – Book Your Free Marketing Audit | Provines Consulting',
  description: 'Schedule a free 30-minute consultation and marketing audit. Discover how AI automation and strategic marketing can transform your B2B SaaS business.',
  keywords: ['schedule consultation', 'book a call', 'free audit', 'marketing consultation', 'calendly'],
  openGraph: {
    title: 'Schedule a Call – Book Your Free Marketing Audit',
    description: 'Schedule a free 30-minute consultation and marketing audit.',
    type: 'website',
  },
};

export default function ScheduleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
