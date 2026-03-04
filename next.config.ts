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
        hostname: 'logo.clearbit.com',
      },
      {
        protocol: 'https',
        hostname: 'ecipdcojedkbrlggaqja.supabase.co',
      },
    ]
  },
};

export default nextConfig;
