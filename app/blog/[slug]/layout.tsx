import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights on AI agents, business automation, and digital operations from Provines Consulting.',
  openGraph: {
    title: 'Blog | Provines Consulting',
    description: 'Insights on AI agents, business automation, and digital operations.',
    type: 'article',
  },
};

export default function BlogSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
