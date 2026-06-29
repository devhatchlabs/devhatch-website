import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/", "/join-us/apply"],
      },
    ],
    sitemap: "https://devhatchlabs.com/sitemap.xml",
  };
}