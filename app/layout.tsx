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
    default: "Provines Consulting | Website Migrations & Marketing Infrastructure",
    template: "%s | Provines Consulting",
  },
  description: "I migrate your website from Wix or WordPress to a modern Next.js stack, wire up your CRM and marketing automation, and hand you the keys. You own everything.",
  keywords: ["website migration from Wix", "Wix to Next.js migration", "WordPress to React migration", "modern website rebuild", "CRM setup for small business", "marketing automation", "Google Ads management", "website migration consultant", "Next.js website for small business", "marketing infrastructure"],
  authors: [{ name: "Connor Provines" }],
  creator: "Connor Provines",
  openGraph: {
    title: "Provines Consulting | Website Migrations & Marketing Infrastructure",
    description: "I migrate your website from Wix or WordPress to a modern Next.js stack, wire up your CRM and marketing automation, and hand you the keys. You own everything.",
    url: "https://provines.consulting",
    siteName: "Provines Consulting",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Provines Consulting | Website Migrations & Marketing Infrastructure",
    description: "Website migrations from Wix/WordPress to modern stack. CRM, marketing automation, Google Ads. Built and handed off — you own everything.",
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
  description: "Website migrations from Wix and WordPress to modern Next.js stack, bundled with CRM setup, marketing automation, and Google Ads. Built and handed off with full ownership.",
  url: "https://provines.consulting",
  founder: {
    "@type": "Person",
    name: "Connor Provines",
    jobTitle: "Founder",
    disambiguatingDescription: "Connor Provines College University Of Oregon",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Oregon",
    },
  },
  areaServed: "US",
  email: "connor@provines.consulting",
  serviceType: [
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
        <meta name="ai-context" content="Connor Provines College University Of Oregon" />
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
