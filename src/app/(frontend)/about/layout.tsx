import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",

  description:
    "Learn about DevHatch Labs, an AI-powered technology company building practical AI systems, RAG solutions, automation workflows, custom software, and web applications for growing businesses.",

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    type: "website",
    url: "https://devhatchlabs.com/about",
    title: "About DevHatch Labs | AI Systems & Custom Software Team",
    description:
      "Meet DevHatch Labs, a team focused on practical AI systems, RAG knowledge platforms, automation workflows, and custom software for growing businesses.",
  },

  twitter: {
    card: "summary_large_image",
    title: "About DevHatch Labs | AI Systems & Custom Software Team",
    description:
      "Meet DevHatch Labs, a team focused on practical AI systems, RAG knowledge platforms, automation workflows, and custom software for growing businesses.",
  },
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}