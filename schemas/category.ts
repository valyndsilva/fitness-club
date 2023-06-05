import { defineField, defineType } from "sanity";

export default defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
    }),
    defineField({
      name: "heroDesc",
      title: "Hero Description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "heroImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "heroTitle",
        maxLength: 96,
      },
    }),
  ],
});
