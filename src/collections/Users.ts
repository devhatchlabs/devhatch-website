import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
auth: {
  maxLoginAttempts: 5,
  lockTime: 10 * 60 * 1000,
},  admin: {
    useAsTitle: "email",
  },
  fields: [
    { name: "name", type: "text", required: true },
    {
      name: "role",
      type: "select",
      options: [
        { label: "Admin", value: "admin" },
        { label: "Editor", value: "editor" },
      ],
      defaultValue: "editor",
      required: true,
    },
  ],
};