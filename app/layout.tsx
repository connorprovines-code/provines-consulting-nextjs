import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://provines.consulting"),
  title: {
    default: "Provines Consulting | AI Marketing Infrastructure for Business Owners",
    template: "%s | Provines Consulting",
  },
  description: "I build your marketing stack — website, AI assistants, CRM, content engine, lead flow — and hand you the keys. No retainers. No lock-in. You own everything.",
  keywords: ["AI marketing infrastructure", "custom AI chatbot for business", "Claude chatbot implementation", "AI assistant for small business", "marketing systems for business owners", "Next.js website for small business", "CRM automation", "replace marketing agency with AI", "AI-powered business assistant", "marketing automation for service companies"],
  authors: [{ name: "Connor Provines" }],
  creator: "Connor Provines",
  openGraph: {
    title: "Provines Consulting | AI Marketing Infrastructure for Business Owners",
    description: "I build your marketing stack — website, AI assistants, CRM, content engine, lead flow — and hand you the keys. No retainers. No lock-in. You own everything.",
    url: "https://provines.consulting",
    siteName: "Provines Consulting",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Provines Consulting | AI Marketing Infrastructure",
    description: "Complete marketing infrastructure — website, AI assistants, CRM, content engine — built for business owners. You own everything.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Provines Consulting",
  description: "AI marketing infrastructure for business owners. Complete marketing stack — website, Claude-powered AI assistants, CRM, content engine, lead automation — built and handed over with full ownership.",
  url: "https://provines.consulting",
  founder: {
    "@type": "Person",
    name: "Connor Provines",
    jobTitle: "Founder",
  },
  areaServed: "US",
  email: "connor@provines.consulting",
  serviceType: [
    "AI Marketing Infrastructure",
    "Claude-Powered AI Assistant Implementation",
    "Custom AI Chatbot Development",
    "Website Migration and Rebuild",
    "CRM Automation and Integration",
    "SEO and Content Automation",
    "Marketing Systems for Business Owners",
  ],
  knowsAbout: [
    "AI Marketing Infrastructure",
    "Claude AI Assistants",
    "Anthropic Claude Implementation",
    "Next.js Website Development",
    "CRM Integration and Automation",
    "SEO Automation",
    "Marketing Automation for Service Businesses",
    "AI-Powered Business Operations",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://assets.calendly.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
