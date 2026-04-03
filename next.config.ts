import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  output: process.env.VERCEL ? undefined : 'export', // Tự động tắt "export" tĩnh nếu đang build trên Vercel để API hoạt động được.
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pbxpjmklrkkwatdvacap.supabase.co',
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
};

export default nextConfig;
