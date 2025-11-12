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
  title: "Provines Consulting – Strategic Marketing & AI Automation",
  description: "Helping B2B SaaS scale from 0→1 and 1→10 with growth strategy + AI automation. Expert marketing leadership and cutting-edge AI implementation.",
  keywords: ["marketing automation", "AI automation", "B2B SaaS", "growth marketing", "product-led growth", "GEO", "agentic AI"],
  authors: [{ name: "Connor Provines" }],
  openGraph: {
    title: "Provines Consulting – Strategic Marketing & AI Automation",
    description: "Helping B2B SaaS scale from 0→1 and 1→10 with growth strategy + AI automation.",
    type: "website",
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
        <script src="https://assets.calendly.com/assets/external/widget.js" async></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
