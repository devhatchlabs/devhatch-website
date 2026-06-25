import type { CollectionConfig } from "payload";

export const JobApplications: CollectionConfig = {
  slug: "job-applications",

  admin: {
    useAsTitle: "fullName",
    defaultColumns: [
      "fullName",
      "email",
      "job",
      "status",
      "createdAt",
    ],
    group: "Careers",
  },

  access: {
    // Applications stay private inside Payload Admin.
    read: ({ req }) => Boolean(req.user),
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },

  fields: [
    {
      name: "job",
      type: "relationship",
      // Cast to any to satisfy TypeScript when the collection slug
      // isn't included in the expected CollectionSlug union.
      relationTo: "job-positions" as any,
      required: true,
      label: "Position Applied For",
      admin: {
        appearance: "select",
      },
    },
    {
      type: "row",
      fields: [
        {
          name: "fullName",
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
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "phone",
          type: "text",
          required: true,
          label: "Phone / WhatsApp",
        },
        {
          name: "location",
          type: "text",
          required: true,
          label: "Current Location",
          admin: {
            placeholder: "Example: Lahore, Pakistan",
          },
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "linkedinUrl",
          type: "text",
          label: "LinkedIn Profile",
        },
        {
          name: "portfolioUrl",
          type: "text",
          label: "Portfolio / GitHub / Website",
        },
      ],
    },
    {
      name: "resume",
      type: "upload",
      relationTo: "media",
      required: true,
      label: "CV / Resume",
    },
    {
      name: "coverNote",
      type: "textarea",
      required: true,
      label: "Short Cover Note",
      admin: {
        placeholder:
          "Tell us why you are interested in this role and why you would be a good fit.",
      },
    },
    {
      name: "consent",
      type: "checkbox",
      required: true,
      label: "Consent",
      admin: {
        description:
          "Applicant agrees that DevHatch Labs can review and store their application details for recruitment purposes.",
      },
    },
    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "new",
      options: [
        { label: "New", value: "new" },
        { label: "Reviewed", value: "reviewed" },
        { label: "Shortlisted", value: "shortlisted" },
        { label: "Rejected", value: "rejected" },
        { label: "Hired", value: "hired" },
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
        placeholder:
          "Private team notes. This will never be shown to applicants.",
      },
    },
  ],
};