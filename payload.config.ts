import { buildConfig } from "payload";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import sharp from "sharp";
import { resendAdapter } from "@payloadcms/email-resend";

import { Posts } from "./src/collections/Posts";
import { CaseStudies } from "./src/collections/CaseStudies";
import { Team } from "./src/collections/Team";
import { Users } from "./src/collections/Users";
import { Media } from "./src/collections/Media";
import { Leads } from "./src/collections/Leads";
import { JobPositions } from "./src/collections/JobPositions";
import { JobApplications } from "./src/collections/JobApplications";

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: "— DevHatch Labs CMS",
    },
  },

  collections: [
    Users,
    Media,
    Posts,
    CaseStudies,
    Team,
    Leads,
    JobPositions,
    JobApplications,
  ],

  editor: lexicalEditor(),

  db: mongooseAdapter({
    url: process.env.MONGODB_URI as string,
  }),

  secret: process.env.PAYLOAD_SECRET as string,

  email: resendAdapter({
  apiKey: process.env.RESEND_API_KEY || "",
  defaultFromAddress:
    process.env.EMAIL_FROM_ADDRESS || "website@mail.devhatchlabs.com",
  defaultFromName: "DevHatch Labs",
}),

  sharp,

  typescript: {
    outputFile: "src/payload-types.ts",
  },
});