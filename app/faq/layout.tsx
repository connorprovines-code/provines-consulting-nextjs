import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ – Common Questions | Provines Consulting',
  description: 'Answers about website rebuilds, AI agents, pricing, ownership, timelines, and how the full engagement works.',
  keywords: ['FAQ', 'website rebuild questions', 'AI agents FAQ', 'pricing', 'ownership', 'small business'],
  openGraph: {
    title: 'FAQ – Common Questions',
    description: 'Answers about website rebuilds, AI agents, pricing, ownership, and how it all works.',
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
