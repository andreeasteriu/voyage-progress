/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  optimizeFonts: false,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
