import { buildConfig } from "payload";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

import { Posts } from "./src/collections/Posts";
import { CaseStudies } from "./src/collections/CaseStudies";
import { Team } from "./src/collections/Team";
import { Users } from "./src/collections/Users";
import { Media } from "./src/collections/Media";
import { Leads } from "./src/collections/Leads";

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: "— DevHatch Labs CMS",
    },
  },

  collections: [Users, Media, Posts, CaseStudies, Team, Leads],

  editor: lexicalEditor(),

  db: mongooseAdapter({
    url: process.env.MONGODB_URI as string,
  }),

  secret: process.env.PAYLOAD_SECRET as string,

  typescript: {
    outputFile: "src/payload-types.ts",
  },
});