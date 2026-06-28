import type { CollectionConfig } from "payload";

export const ApplicantDocuments: CollectionConfig = {
  slug: "applicant-documents",

  admin: {
    useAsTitle: "label",
    defaultColumns: ["label", "filename", "mimeType", "filesize", "createdAt"],
    group: "Careers",
  },

  access: {
    create: () => true,
    read: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },

  upload: {
    staticDir: "applicant-documents",
    crop: false,
    focalPoint: false,
    pasteURL: false,
    mimeTypes: [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ],
  },

  fields: [
    {
      name: "label",
      type: "text",
      required: true,
      label: "Document Label",
    },
  ],
};
