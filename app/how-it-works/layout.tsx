import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How It Works – From Preview to Full Ownership',
  description: 'See the step-by-step process: preview your rebuilt site before committing, scope the project, build and install, then take full ownership with training and support.',
  keywords: ['website rebuild process', 'how it works', 'website migration steps', 'AI agent installation', 'digital operations handoff'],
  openGraph: {
    title: 'How It Works – From Preview to Full Ownership',
    description: 'See the step-by-step process from preview to full digital independence.',
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
