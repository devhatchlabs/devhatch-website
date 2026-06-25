import type { CollectionConfig } from "payload";

export const JobPositions: CollectionConfig = {
  slug: "job-positions",

  admin: {
    useAsTitle: "title",
    defaultColumns: [
      "title",
      "status",
      "department",
      "employmentType",
      "workMode",
      "updatedAt",
    ],
    group: "Careers",
  },

  access: {
    read: ({ req }) => {
      // Logged-in admin users can see all jobs.
      if (req.user) {
        return true;
      }

      // Public website visitors can only see open jobs.
      return {
        status: {
          equals: "open",
        },
      };
    },
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },

  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Job Title",
    },
    {
      name: "department",
      type: "text",
      required: true,
      label: "Department",
      admin: {
        placeholder: "Example: Engineering, Business Development, Operations",
      },
    },
    {
      type: "row",
      fields: [
        {
          name: "employmentType",
          type: "select",
          required: true,
          defaultValue: "full-time",
          options: [
            { label: "Full-time", value: "full-time" },
            { label: "Part-time", value: "part-time" },
            { label: "Internship", value: "internship" },
            { label: "Contract", value: "contract" },
            { label: "Freelance", value: "freelance" },
          ],
        },
        {
          name: "workMode",
          type: "select",
          required: true,
          defaultValue: "remote",
          options: [
            { label: "Remote", value: "remote" },
            { label: "Hybrid", value: "hybrid" },
            { label: "On-site", value: "on-site" },
          ],
        },
      ],
    },
    {
      name: "location",
      type: "text",
      required: true,
      defaultValue: "Pakistan",
      admin: {
        placeholder: "Example: Lahore, Pakistan or Remote",
      },
    },
    {
      name: "shortDescription",
      type: "textarea",
      required: true,
      label: "Short Job Description",
      admin: {
        placeholder:
          "A short 1–2 line overview shown on the Join Us page.",
      },
    },
    {
      name: "responsibilities",
      type: "array",
      label: "Key Responsibilities",
      fields: [
        {
          name: "item",
          type: "text",
          required: true,
          label: "Responsibility",
        },
      ],
    },
    {
      name: "requirements",
      type: "array",
      label: "Requirements",
      fields: [
        {
          name: "item",
          type: "text",
          required: true,
          label: "Requirement",
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "status",
          type: "select",
          required: true,
          defaultValue: "closed",
          options: [
            { label: "Open — visible on website", value: "open" },
            { label: "Closed — hidden from website", value: "closed" },
          ],
        },
        {
          name: "applicationDeadline",
          type: "date",
          label: "Application Deadline",
          admin: {
            date: {
              pickerAppearance: "dayOnly",
            },
          },
        },
        {
          name: "sortOrder",
          type: "number",
          defaultValue: 0,
          label: "Display Order",
          admin: {
            description:
              "Lower numbers appear first on the public Join Us page.",
          },
        },
      ],
    },
  ],
};