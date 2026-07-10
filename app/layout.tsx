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
  metadataBase: new URL("https://www.provinesconsulting.com"),
  title: {
    default: "Provines Consulting | The Owner-Operated Growth Stack",
    template: "%s | Provines Consulting",
  },
  description: "I replace your marketing agency with a growth stack you own: modern website, connected CRM, and live ad campaigns, run day-to-day by an AI operator you direct in plain English. Built, handed over, yours.",
  keywords: ["marketing agency alternative", "replace marketing agency", "AI marketing operator", "owner-operated growth stack", "website migration from Wix", "Wix to Next.js migration", "WordPress to React migration", "modern website rebuild", "CRM setup for small business", "marketing automation", "Google Ads management", "website migration consultant", "Next.js website for small business", "marketing infrastructure"],
  authors: [{ name: "Connor Provines" }],
  creator: "Connor Provines",
  openGraph: {
    title: "Provines Consulting | The Owner-Operated Growth Stack",
    description: "I replace your marketing agency with a growth stack you own: modern website, connected CRM, and live ad campaigns, run day-to-day by an AI operator you direct in plain English. Built, handed over, yours.",
    url: "https://www.provinesconsulting.com",
    siteName: "Provines Consulting",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Provines Consulting | The Owner-Operated Growth Stack",
    description: "Replace your marketing agency with a stack you own: website, CRM, and ads, run by an AI operator you direct. Built and handed over — you own everything.",
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
  description: "Replaces your marketing agency with infrastructure you own: modern website, connected CRM, and ad campaigns, operated day-to-day by a dedicated AI. Built and handed over with full ownership.",
  url: "https://www.provinesconsulting.com",
  founder: {
    "@type": "Person",
    name: "Connor Provines",
    jobTitle: "Founder",
  },
  areaServed: "US",
  email: "connor@provines.consulting",
  serviceType: [
    "Marketing Agency Replacement",
    "AI Marketing Operator Setup",
    "Website Migration",
    "Wix to Next.js Migration",
    "WordPress to React Migration",
    "CRM Setup and Automation",
    "Marketing Automation",
    "Google Ads Management",
    "Marketing Operations Consulting",
  ],
  knowsAbout: [
    "Website Migration",
    "Next.js Development",
    "React Development",
    "CRM Integration",
    "Marketing Automation",
    "Google Ads",
    "B2B Marketing Operations",
    "Lead Generation",
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
