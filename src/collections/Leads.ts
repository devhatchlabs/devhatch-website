import type { CollectionConfig } from "payload";

export const Leads: CollectionConfig = {
  slug: "leads",

  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "email", "service", "status", "createdAt"],
    group: "Sales",
  },

  access: {
    create: () => true,
    read: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },

  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      label: "Full Name",
    },
    {
      name: "email",
      type: "email",
      required: true,
      label: "Email Address",
    },
    {
      name: "company",
      type: "text",
      label: "Company / Organization",
    },
    {
      name: "service",
      type: "select",
      label: "Service Needed",
      options: [
        {
          label: "AI Chatbot",
          value: "ai-chatbot",
        },
        {
          label: "Agentic AI System",
          value: "agentic-ai",
        },
        {
          label: "RAG Application",
          value: "rag-application",
        },
        {
          label: "AI Automation",
          value: "ai-automation",
        },
        {
          label: "Custom Software",
          value: "custom-software",
        },
        {
          label: "Web Application",
          value: "web-application",
        },
        {
          label: "Other / Not Sure Yet",
          value: "other",
        },
      ],
    },
    {
      name: "budget",
      type: "select",
      label: "Estimated Budget",
      options: [
        {
          label: "Under $500",
          value: "under-500",
        },
        {
          label: "$500 – $1,500",
          value: "500-1500",
        },
        {
          label: "$1,500 – $5,000",
          value: "1500-5000",
        },
        {
          label: "$5,000+",
          value: "5000-plus",
        },
        {
          label: "Let's Discuss",
          value: "discuss",
        },
      ],
    },
    {
      name: "message",
      type: "textarea",
      required: true,
      label: "Project Details",
      admin: {
        description:
          "The client's message about what they want to build, improve, or automate.",
      },
    },
    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "new",
      options: [
        {
          label: "New",
          value: "new",
        },
        {
          label: "Contacted",
          value: "contacted",
        },
        {
          label: "Qualified",
          value: "qualified",
        },
        {
          label: "Closed",
          value: "closed",
        },
        {
          label: "Not Interested",
          value: "not-interested",
        },
      ],
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "internalNotes",
      type: "textarea",
      label: "Internal Notes",
      admin: {
        position: "sidebar",
        description: "Private notes for the DevHatch Labs team.",
      },
    },
    {
      name: "source",
      type: "select",
      label: "Lead Source",
      defaultValue: "website",
      options: [
        {
          label: "Website Contact Form",
          value: "website",
        },
        {
          label: "WhatsApp",
          value: "whatsapp",
        },
        {
          label: "LinkedIn",
          value: "linkedin",
        },
        {
          label: "Referral",
          value: "referral",
        },
        {
          label: "Other",
          value: "other",
        },
      ],
      admin: {
        position: "sidebar",
      },
    },
  ],
};