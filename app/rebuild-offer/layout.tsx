import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Website Rebuild Offer – Own Your Site, Run Your Marketing',
  description: 'See your website rebuilt on modern infrastructure before you commit. Own the code, run your marketing in plain English, no agency dependency.',
  keywords: ['website rebuild', 'website migration', 'Wix alternative', 'Squarespace alternative', 'own your website', 'AI marketing platform'],
  openGraph: {
    title: 'Website Rebuild Offer – Own Your Site, Run Your Marketing',
    description: 'See your website rebuilt before you commit. Own the code, run your marketing yourself.',
    type: 'website',
  },
};

export default function RebuildOfferLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
