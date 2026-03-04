import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  // output: 'export', // VPS usually runs SSR
  images: {
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
