import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guide',
  description: 'Step-by-step guides on AI agents, automation, and modern digital operations for business owners.',
  openGraph: {
    title: 'Guide | Provines Consulting',
    description: 'Practical guides on AI agents and automation for business owners.',
    type: 'article',
  },
};

export default function GuideSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
