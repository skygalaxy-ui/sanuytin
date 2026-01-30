import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: isProd ? 'export' : undefined,
  trailingSlash: true,
  assetPrefix: isProd ? '/home' : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
