import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { postSchema } from "./src/sanity/schemas/post";
import { authorSchema } from "./src/sanity/schemas/author";

export default defineConfig({
  name: "scrub-the-deck",
  title: "Scrub the Deck",
  projectId: "x88tod9f",
  dataset: "production",
  plugins: [structureTool()],
  schema: {
    types: [postSchema, authorSchema],
  },
});
