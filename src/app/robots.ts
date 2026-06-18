import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/davecall",
          "/davecall-q",
          "/consultation",
          "/thank-you",
          "/welcome",
          "/privacy",
          "/terms",
        ],
      },
    ],
    sitemap: "https://www.scrubthedeck.com/sitemap.xml",
  };
}
