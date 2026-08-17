import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/sanity";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://www.scrubthedeck.com";
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`,         lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/about`,    lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/process`,  lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`,     lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/faq`,      lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/clients`,  lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/branding`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];

  const posts = await getAllPosts().catch(() => []);
  const postRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${base}/blog/${p.slug.current}`,
    lastModified: new Date(p.updatedAt || p.publishedAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...postRoutes];
}
