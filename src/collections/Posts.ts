import type { CollectionConfig } from "payload";

export const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "status", "publishedAt"],
  },
  access: {
    read: ({ req: { user } }) => {
      if (user) return true;
      return { status: { equals: "published" } };
    },
  },
  fields: [
    { name: "title", type: "text", required: true },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: { description: "URL-safe identifier, e.g. how-we-built-our-chatbot" },
    },
    {
      name: "excerpt",
      type: "textarea",
      required: true,
      admin: { description: "Short summary shown in blog listing cards (1–2 sentences)" },
    },
    { name: "coverImage", type: "upload", relationTo: "media" },
    { name: "body", type: "richText", required: true },
    {
      name: "tags",
      type: "array",
      fields: [{ name: "tag", type: "text" }],
    },
    {
      name: "status",
      type: "select",
      options: [
        { label: "Draft", value: "draft" },
        { label: "Published", value: "published" },
      ],
      defaultValue: "draft",
      required: true,
    },
    {
      name: "publishedAt",
      type: "date",
      admin: {
        date: { pickerAppearance: "dayAndTime" },
        description: "Leave blank to auto-set on first publish",
      },
    },
  ],
};