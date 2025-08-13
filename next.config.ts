import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "images.unsplash.com", 
      "agrosiaa.com", 
      "www.bighaat.com" // <-- add this
    ],
  },
};

export default nextConfig;
