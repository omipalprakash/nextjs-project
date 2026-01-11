import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // ✅ OK for Strapi Cloud
    remotePatterns: [
      // 🔹 LOCAL STRAPI
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },

      // 🔹 STRAPI CLOUD (PRODUCTION)
      {
        protocol: "https",
        hostname: "splendid-boot-3cb33a55a4.strapiapp.com",
        pathname: "/uploads/**",
      },
    ],
  },

  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
