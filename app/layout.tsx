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
    default: "Provines Consulting – Custom AI Agents & Operational Automation for Business Owners",
    template: "%s | Provines Consulting",
  },
  description: "Custom AI agents, process automation, and modern digital infrastructure for SMB owners. Replace manual operations with intelligent systems you own and control.",
  keywords: ["AI agents", "business automation", "custom tools", "process automation", "small business AI", "CRM automation", "digital operations", "workflow automation"],
  authors: [{ name: "Connor Provines" }],
  creator: "Connor Provines",
  openGraph: {
    title: "Provines Consulting – Custom AI Agents & Operational Automation for Business Owners",
    description: "Custom AI agents, process automation, and digital infrastructure built for SMB owners. Own everything, depend on no one.",
    url: "https://provines.consulting",
    siteName: "Provines Consulting",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Provines Consulting – Custom AI Agents & Automation",
    description: "Custom AI agents, process automation, and digital infrastructure for business owners.",
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
  description: "Custom AI agents, process automation, workflow engineering, and digital infrastructure for small and medium business owners.",
  url: "https://provines.consulting",
  founder: {
    "@type": "Person",
    name: "Connor Provines",
    jobTitle: "Founder",
  },
  areaServed: "US",
  serviceType: [
    "AI Agent Development",
    "Business Process Automation",
    "Custom Software Development",
    "Website Design and Development",
    "CRM Integration",
    "Business Technology Consulting",
  ],
  knowsAbout: [
    "AI Agents",
    "Process Automation",
    "Workflow Engineering",
    "Custom Tool Development",
    "Next.js Development",
    "CRM Integration",
    "SEO Automation",
    "Small Business Digital Operations",
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
