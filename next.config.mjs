/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      { source: "/commercial", destination: "/services", permanent: true },
    ];
  },
};

export default nextConfig;
