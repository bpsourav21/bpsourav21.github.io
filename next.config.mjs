/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // enables static export
  distDir: "out", // optional: where build files go
  images: {
    unoptimized: true, // disable Image Optimization for static export
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
