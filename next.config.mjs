/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // enables static export
  distDir: "out", // optional: where build files go
  images: {
    unoptimized: true, // disable Image Optimization for static export
  },
  basePath: "/bpsourav21-portfolio-site", // replace with your GitHub repo name (omit if using username.github.io repo)
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
