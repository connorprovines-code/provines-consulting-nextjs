import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Study',
  description: 'Real-world results from AI agent installations, automation builds, and digital operations transformations.',
  openGraph: {
    title: 'Case Study | Provines Consulting',
    description: 'Real-world results from automation and AI agent projects.',
    type: 'article',
  },
};

export default function CaseStudySlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
