/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/commercial", destination: "/services", permanent: true },
    ];
  },
};

export default nextConfig;
