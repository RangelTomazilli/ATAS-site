import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    // Desabilitar recursos experimentais que possam causar problemas no Amplify
    serverComponentsExternalPackages: [],
  },
};

export default nextConfig;
