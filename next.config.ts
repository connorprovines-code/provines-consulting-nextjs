import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/about", destination: "/", permanent: true },
      { source: "/contact", destination: "/schedule", permanent: true },
      { source: "/services", destination: "/how-it-works", permanent: true },
      { source: "/faq", destination: "/how-it-works", permanent: true },
      { source: "/rebuild-offer", destination: "/", permanent: true },
      { source: "/website-rebuild", destination: "/", permanent: true },
      { source: "/blog/:slug*", destination: "/", permanent: true },
      { source: "/case-studies/:slug*", destination: "/work", permanent: true },
      { source: "/guides/:slug*", destination: "/", permanent: true },
      { source: "/content", destination: "/", permanent: true },
      { source: "/content/:slug*", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
