import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insights – AI, Automation & Operations for Business Owners | Provines Consulting',
  description: 'Practical thinking about AI agents, process automation, and operational efficiency — written for business owners, not developers.',
  keywords: ['AI agents', 'business automation', 'operations', 'small business AI', 'process automation', 'custom tools'],
  openGraph: {
    title: 'Insights – AI, Automation & Operations for Business Owners',
    description: 'Practical thinking about AI agents, automation, and operations for business owners.',
    type: 'website',
  },
};

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
