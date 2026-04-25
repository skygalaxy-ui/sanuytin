import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  output: 'standalone', // Bắt buộc cho VPS Node.js server thay vì tĩnh
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ecipdcojedkbrlggaqja.supabase.co', // Supabase project hiện tại
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.google.com',
      },
      {
        protocol: 'https',
        hostname: 't1.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'ecipdcojedkbrlggaqja.supabase.co',
      },
    ]
  },
  async rewrites() {
    return [
      { source: '/sktp/:path*', destination: '/external/sktp/:path*' },
    ];
  },
};

export default nextConfig;
