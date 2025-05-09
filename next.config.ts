import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   async headers() {
    return [
      {
        source: '/(sitemap.*|robots.txt)', // toutes les URLs de sitemap
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
