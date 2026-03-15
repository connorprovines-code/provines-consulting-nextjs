import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | AI Marketing Infrastructure & Business Automation Questions',
  description: 'Common questions about AI assistants, marketing infrastructure, website migrations, CRM automation, and how engagements work.',
  keywords: ['AI assistant FAQ', 'marketing infrastructure questions', 'Claude AI for business FAQ', 'website migration FAQ', 'CRM automation questions', 'AI chatbot vs assistant'],
  openGraph: {
    title: 'FAQ | AI Marketing Infrastructure & Business Automation Questions',
    description: 'Common questions about AI assistants, marketing infrastructure, website migrations, CRM automation, and how engagements work.',
    type: 'website',
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
