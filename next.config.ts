import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://res.cloudinary.com/dtyb1yj3x/image/upload/**")]
  }
};

export default nextConfig;
