import type { CollectionConfig } from "payload";

export const Team: CollectionConfig = {
  slug: "team",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "title", "order"],
  },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "title", type: "text", required: true, label: "Job title", admin: { placeholder: "Founder & CEO" } },
    { name: "photo", type: "upload", relationTo: "media" },
    {
      name: "initials",
      type: "text",
      maxLength: 2,
      admin: { description: "2-letter fallback when no photo is set (e.g. SI, SM)" },
    },
    { name: "bio", type: "textarea", required: true },
    {
      name: "credentials",
      type: "array",
      label: "Credentials / bullet points",
      fields: [{ name: "credential", type: "text" }],
    },
    {
      name: "links",
      type: "array",
      label: "Profile links",
      fields: [
        { name: "label", type: "text", admin: { placeholder: "GitHub" } },
        { name: "url", type: "text", admin: { placeholder: "https://github.com/DevSaimX" } },
      ],
    },
    {
      name: "order",
      type: "number",
      defaultValue: 99,
      admin: { description: "Display order — lower numbers appear first" },
    },
    { name: "active", type: "checkbox", defaultValue: true, label: "Show on website" },
  ],
};