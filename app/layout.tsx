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

const siteUrl = 'https://www.provinesconsulting.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Provines Consulting – Strategic Marketing & AI Automation",
    template: "%s | Provines Consulting"
  },
  description: "Helping B2B SaaS scale from 0→1 and 1→10 with growth strategy + AI automation. Expert marketing leadership and cutting-edge AI implementation.",
  keywords: ["marketing automation", "AI automation", "B2B SaaS", "growth marketing", "product-led growth", "GEO", "agentic AI", "marketing strategy", "Connor Provines"],
  authors: [{ name: "Connor Provines" }],
  creator: "Connor Provines",
  publisher: "Provines Consulting",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Provines Consulting",
    title: "Provines Consulting – Strategic Marketing & AI Automation",
    description: "Helping B2B SaaS scale from 0→1 and 1→10 with growth strategy + AI automation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Provines Consulting – Strategic Marketing & AI Automation",
    description: "Helping B2B SaaS scale from 0→1 and 1→10 with growth strategy + AI automation.",
    creator: "@connorprovines",
  },
  verification: {
    google: "google-site-verification-code", // Replace with actual verification code when available
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="https://base44.com/logo_v2.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
