import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/tattoo-removal",
        destination: "/faq",
        permanent: true,
      },
      {
        source: "/tattoo-shop-aurora",
        destination: "/locations/aurora",
        permanent: true,
      },
      {
        source: "/cover-up-tattoos",
        destination: "/faq",
        permanent: true,
      },
      {
        source: "/tattoo-2",
        destination: "/",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/locations",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/tattoo-services-in-richmond-hill",
        destination: "/locations/richmond-hill",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
