/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/dalowa/david-urbano/main/public/techIcons/**",
      },
    ],
  },
};

module.exports = nextConfig;
