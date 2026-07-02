import { defineType, defineField } from "sanity";

export const postSchema = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" } }),
    defineField({
      name: "metaTitle",
      title: "Meta Title (max 60 chars)",
      type: "string",
      validation: (Rule) => Rule.max(60),
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description (max 160 chars)",
      type: "string",
      validation: (Rule) => Rule.max(160),
    }),
    defineField({ name: "category", title: "Category", type: "string" }),
    defineField({ name: "readTime", title: "Read Time (minutes)", type: "number" }),
    defineField({ name: "publishedAt", title: "Published At", type: "datetime" }),
    defineField({ name: "updatedAt", title: "Updated At", type: "datetime" }),
    defineField({
      name: "pillarOrCluster",
      title: "Pillar or Cluster",
      type: "string",
      options: { list: ["pillar", "cluster"] },
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
    }),
    defineField({
      name: "tldr",
      title: "TL;DR Bullets",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "body",
      title: "Body (HTML)",
      type: "text",
      rows: 20,
    }),
    defineField({
      name: "faq",
      title: "FAQ",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "question", title: "Question", type: "string" },
            { name: "answer", title: "Answer", type: "text", rows: 4 },
          ],
        },
      ],
    }),
    defineField({
      name: "statSources",
      title: "Stat Sources",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "claim", title: "Claim", type: "string" },
            { name: "source", title: "Source", type: "string" },
            { name: "sourceScreenshotUrl", title: "Screenshot URL", type: "url" },
          ],
        },
      ],
    }),
    defineField({
      name: "relatedPosts",
      title: "Related Posts",
      type: "array",
      of: [{ type: "reference", to: [{ type: "post" }] }],
    }),
    defineField({ name: "thumbnail", title: "Thumbnail", type: "image" }),
  ],
  preview: {
    select: { title: "title", subtitle: "pillarOrCluster" },
  },
});
