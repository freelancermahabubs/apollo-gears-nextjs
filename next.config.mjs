/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{hostname: "api.valogari.com"}],
  },
};

export default nextConfig;
