import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Growth Audit',
  description: 'Book a 30-minute call to kick off the audit. We\'ll walk through your site, CRM, and ad accounts and map what to build first.',
  keywords: ['schedule consultation', 'book a call', 'growth audit', 'marketing infrastructure consultation', 'AI marketing operator'],
  openGraph: {
    title: 'Book a Growth Audit',
    description: 'Book a 30-minute call to kick off the audit of your marketing stack.',
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
