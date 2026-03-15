import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How It Works | Marketing Infrastructure Process',
  description: 'A clear 4-step process: discovery, architecture, build, and handoff. You get complete marketing infrastructure — website, AI, CRM, content — that you own and operate.',
  keywords: ['marketing infrastructure process', 'AI assistant implementation', 'website migration process', 'CRM setup', 'marketing automation setup', 'Claude AI implementation'],
  openGraph: {
    title: 'How It Works | Marketing Infrastructure Process',
    description: 'A clear 4-step process: discovery, architecture, build, and handoff. Complete marketing infrastructure you own and operate.',
    type: 'website',
  },
};

export default function HowItWorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
