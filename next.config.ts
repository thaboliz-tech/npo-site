
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow production builds even when TypeScript errors exist.
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
