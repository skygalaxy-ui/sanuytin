import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  // output: process.env.VERCEL ? undefined : 'export', // BẮT BUỘC TẮT ĐỂ PM2 HOẠT ĐỘNG! (next start không chạy được với output export)
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
};

export default nextConfig;
