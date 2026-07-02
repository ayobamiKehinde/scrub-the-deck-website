import { defineType, defineField } from "sanity";

export const authorSchema = defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "title", title: "Job Title", type: "string" }),
    defineField({ name: "bio", title: "Bio", type: "text" }),
    defineField({ name: "credentials", title: "Credentials Line", type: "string" }),
    defineField({ name: "image", title: "Photo", type: "image" }),
  ],
  preview: {
    select: { title: "name", subtitle: "title" },
  },
});
