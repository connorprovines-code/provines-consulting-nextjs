import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-src 'self' https://calendly.com https://*.calendly.com;"
          },
        ],
      },
    ];
  },
};

export default nextConfig;
