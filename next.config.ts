/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.ctfassets.net'], // For Contentful images if you add them later
  },
};

module.exports = nextConfig;