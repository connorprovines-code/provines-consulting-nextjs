import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact – Get in Touch | Provines Consulting',
  description: 'Reach out to discuss website rebuilds, AI agent installations, and digital operations for your business. No pitch, no pressure.',
  keywords: ['contact', 'website rebuild inquiry', 'AI agents', 'business consultation', 'get in touch'],
  openGraph: {
    title: 'Contact – Get in Touch',
    description: 'Reach out to discuss website rebuilds, AI agents, and digital operations for your business.',
    type: 'website',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
