import type { CollectionConfig } from "payload";

export const CaseStudies: CollectionConfig = {
  slug: "case-studies",
  admin: {
    useAsTitle: "clientName",
    defaultColumns: ["clientName", "service", "status"],
  },
  access: {
    read: ({ req: { user } }) => {
      if (user) return true;
      return { status: { equals: "published" } };
    },
  },
  fields: [
    { name: "clientName", type: "text", required: true, label: "Client / Business Name" },
    { name: "clientIndustry", type: "text", label: "Industry", admin: { description: "e.g. Restaurant, E-commerce, Logistics" } },
    { name: "slug", type: "text", required: true, unique: true },
    {
      name: "service",
      type: "select",
      required: true,
      options: [
        { label: "AI Chatbot & Agent", value: "chatbot" },
        { label: "Automation System", value: "automation" },
        { label: "Full-Stack Web App", value: "webapp" },
        { label: "AI Consulting / RAG", value: "consulting" },
      ],
    },
    {
      name: "headline",
      type: "text",
      required: true,
      label: "One-line outcome",
      admin: { description: 'e.g. "Reduced response time from 4 hours to 30 seconds"' },
    },
    { name: "quote", type: "textarea", label: "Client quote (optional)" },
    { name: "quoteAuthor", type: "text", label: "Quote author name & title" },
    {
      name: "metrics",
      type: "array",
      label: "Key metrics",
      admin: { description: "Add 1–3 specific, verifiable numbers" },
      fields: [
        { name: "label", type: "text", label: "Metric label", admin: { placeholder: "Response time" } },
        { name: "before", type: "text", label: "Before", admin: { placeholder: "4 hours" } },
        { name: "after", type: "text", label: "After", admin: { placeholder: "30 seconds" } },
      ],
    },
    {
      name: "stack",
      type: "array",
      label: "Tech used",
      fields: [{ name: "tech", type: "text" }],
    },
    { name: "body", type: "richText", label: "Full case study (optional — for expanded view)" },
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
    { name: "publishedAt", type: "date" },
  ],
};