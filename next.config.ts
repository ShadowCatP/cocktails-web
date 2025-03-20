import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cocktails.solvro.pl",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
