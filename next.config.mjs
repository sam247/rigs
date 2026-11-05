/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      { source: "/commercial", destination: "/services", permanent: true },
      // 2026-11-05: consolidate duplicate service hubs (Sam approved)
      {
        source: "/services/fuse-board-upgrades",
        destination: "/services/consumer-unit-replacement",
        permanent: true,
      },
      {
        source: "/services/electrical-inspections",
        destination: "/services/eicr-certificates",
        permanent: true,
      },
      // Consolidate host: GSC shows www + apex splitting Tring query equity
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.rigselectrical.co.uk" }],
        destination: "https://rigselectrical.co.uk/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
