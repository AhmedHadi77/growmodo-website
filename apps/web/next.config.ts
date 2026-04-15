import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@growmodo/db", "@growmodo/ui"],
  output: "standalone",
};

export default nextConfig;
