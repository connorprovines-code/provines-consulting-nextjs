import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Schedule a Call – Free Discovery Consultation | Provines Consulting',
  description: 'Book a free 30-minute discovery call. We\'ll look at where you\'re spending time on things that should be automated and figure out what to build first.',
  keywords: ['schedule consultation', 'book a call', 'discovery call', 'AI consultation', 'automation consultation'],
  openGraph: {
    title: 'Schedule a Call – Free Discovery Consultation',
    description: 'Book a free 30-minute discovery call about AI agents and automation for your business.',
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
