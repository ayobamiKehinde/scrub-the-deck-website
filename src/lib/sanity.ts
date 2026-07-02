import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "x88tod9f",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: true,
});

export interface SanityPost {
  _id: string;
  title: string;
  slug: { current: string };
  metaTitle: string;
  metaDescription: string;
  category: string;
  readTime: number;
  publishedAt: string;
  updatedAt: string;
  pillarOrCluster: string;
  tldr: string[];
  body: string;
  faq: { question: string; answer: string }[];
  statSources: { claim: string; source: string; sourceScreenshotUrl?: string }[];
  author: {
    name: string;
    title: string;
    credentials: string;
  };
}

export async function getAllPosts(): Promise<SanityPost[]> {
  return sanityClient.fetch(
    `*[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
      _id, title, slug, metaTitle, metaDescription, category, readTime, publishedAt, updatedAt, pillarOrCluster,
      "author": author->{ name, title, credentials }
    }`
  );
}

export async function getPostBySlug(slug: string): Promise<SanityPost | null> {
  return sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
      _id, title, slug, metaTitle, metaDescription, category, readTime, publishedAt, updatedAt, pillarOrCluster,
      tldr, body, faq, statSources,
      "author": author->{ name, title, credentials }
    }`,
    { slug }
  );
}

export async function getAllSlugs(): Promise<{ slug: string }[]> {
  return sanityClient.fetch(
    `*[_type == "post" && !(_id in path("drafts.**"))] { "slug": slug.current }`
  );
}
