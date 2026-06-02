/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/commercial", destination: "/domestic", permanent: true },
      { source: "/services", destination: "/domestic", permanent: true },
    ];
  },
};

module.exports = nextConfig;

