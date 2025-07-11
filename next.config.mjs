/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only use basePath and assetPrefix in production
  ...(process.env.NODE_ENV === 'production' && {
    basePath: "/agrowFarm",
    assetPrefix: "/agrowFarm/",
    output: "export",
  }),
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
