import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.scrubthedeck.com";
  const now = new Date();

  return [
    { url: `${base}/`,        lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/about`,   lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/process`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`,    lastModified: now, changeFrequency: "weekly",  priority: 0.7 },
    { url: `${base}/faq`,     lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/branding`,lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];
}
