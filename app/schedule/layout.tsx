import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Schedule a Discovery Call',
  description: 'Book a free 30-minute call. We\'ll figure out what your marketing infrastructure should look like and what to build first.',
  keywords: ['schedule consultation', 'book a call', 'discovery call', 'marketing infrastructure consultation', 'AI assistant consultation'],
  openGraph: {
    title: 'Schedule a Discovery Call',
    description: 'Book a free 30-minute call about your marketing infrastructure.',
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
