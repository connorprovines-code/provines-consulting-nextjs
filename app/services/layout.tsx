import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services – AI Agents, Automation & Custom Solutions | Provines Consulting',
  description: 'AI agents, process automation, website platforms, system integrations, and custom tool development for SMB owners. Built for your operations, owned by you.',
  keywords: ['AI agents', 'process automation', 'custom tools', 'CRM integration', 'workflow automation', 'website rebuild', 'business automation'],
  openGraph: {
    title: 'Services – AI Agents, Automation & Custom Solutions',
    description: 'AI agents, process automation, integrations, and custom tools for business owners.',
    type: 'website',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
