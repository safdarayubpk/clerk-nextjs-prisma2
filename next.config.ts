import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow remote product images from Unsplash
    domains: ["images.unsplash.com", "source.unsplash.com"],
  },
};

export default nextConfig;
