import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work | Marketing Infrastructure Projects',
  description: 'Real projects: website rebuilds, AI assistant deployments, CRM automation, and complete marketing infrastructure builds for business owners.',
  keywords: ['AI marketing projects', 'website rebuild case studies', 'AI assistant deployment', 'CRM automation projects', 'marketing infrastructure examples', 'AI for home builders', 'AI for contractors'],
  openGraph: {
    title: 'Work | Marketing Infrastructure Projects',
    description: 'Real projects: website rebuilds, AI assistant deployments, CRM automation, and complete marketing infrastructure builds.',
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
