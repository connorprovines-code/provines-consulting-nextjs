import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insights | AI, Marketing Infrastructure & Business Automation',
  description: 'Practical insights on AI implementation, marketing infrastructure, and business automation — from someone who builds these systems for a living.',
  keywords: ['AI for small business', 'marketing infrastructure', 'business automation insights', 'Claude AI for business', 'AI chatbot vs AI assistant', 'marketing automation', 'website migration guide'],
  openGraph: {
    title: 'Insights | AI, Marketing Infrastructure & Business Automation',
    description: 'Practical insights on AI implementation, marketing infrastructure, and business automation.',
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
