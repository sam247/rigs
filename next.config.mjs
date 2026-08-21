/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      { source: "/commercial", destination: "/services", permanent: true },
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
