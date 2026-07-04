import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/home",             destination: "/",            permanent: true },
      { source: "/contact",          destination: "/davecall-q",  permanent: true },
      { source: "/intro",            destination: "/",            permanent: true },
      { source: "/e-book-download",  destination: "/",            permanent: true },
      { source: "/bookacall-j-form", destination: "/davecall-q",  permanent: true },
      { source: "/bookacall-joey",   destination: "/davecall-q",  permanent: true },
      { source: "/bookacall-joey-form", destination: "/davecall-q", permanent: true },
      { source: "/bookacall-dpg-form-3", destination: "/davecall-q", permanent: true },
      { source: "/offer",            destination: "/process",     permanent: true },
      { source: "/faq-fb",           destination: "/faq",         permanent: true },
      { source: "/fb1-old",          destination: "/",            permanent: true },
      { source: "/phone15",          destination: "/davecall-q",  permanent: true },
    ];
  },
};

export default nextConfig;
