import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work – Website Rebuilds & Client Projects',
  description: 'See examples of website rebuilds, AI agent installations, and digital operations transformations for real businesses.',
  keywords: ['website rebuild examples', 'portfolio', 'case studies', 'website migration', 'AI agent projects', 'client work'],
  openGraph: {
    title: 'Work – Website Rebuilds & Client Projects',
    description: 'Real examples of website rebuilds and digital operations transformations.',
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
