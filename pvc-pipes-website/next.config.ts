import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // ✅ Strapi Cloud के लिए OK
    remotePatterns: [
      // 🔹 LOCAL STRAPI (development)
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },

      // 🔹 STRAPI CLOUD (production)
      {
        protocol: "https",
        hostname: "splendid-boot-3cb33a55a4.media.strapiapp.com",
        pathname: "/uploads/**",
      },
    ],
  },

  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
