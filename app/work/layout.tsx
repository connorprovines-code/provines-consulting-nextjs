import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Real engagements: website rebuilds, AI-powered team enablement, CRM migrations, and full marketing infrastructure ownership. Every client owns everything when we are done.',
  keywords: ['AI marketing case studies', 'website rebuild case studies', 'AI team enablement', 'CRM migration', 'marketing infrastructure', 'legacy software migration'],
  openGraph: {
    title: 'Case Studies | Provines Consulting',
    description: 'Real engagements: website rebuilds, AI-powered team enablement, CRM migrations, and full marketing infrastructure ownership.',
    type: 'website',
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
