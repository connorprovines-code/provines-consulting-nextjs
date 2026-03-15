import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Discuss Your Marketing Infrastructure',
  description: 'Let\'s figure out what your marketing infrastructure should look like. Reach out to discuss AI assistants, website builds, CRM automation, and more.',
  keywords: ['contact', 'marketing infrastructure consultation', 'AI assistant inquiry', 'website rebuild inquiry', 'CRM automation consultation'],
  openGraph: {
    title: 'Contact | Discuss Your Marketing Infrastructure',
    description: 'Let\'s figure out what your marketing infrastructure should look like.',
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
