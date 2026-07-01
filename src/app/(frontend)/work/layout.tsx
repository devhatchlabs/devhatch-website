import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work & Case Studies",

  description:
    "Explore selected DevHatch Labs projects across AI, machine learning, full-stack development, web applications, e-commerce, automation, and practical business technology.",

  alternates: {
    canonical: "/work",
  },

  openGraph: {
    type: "website",
    url: "https://devhatchlabs.com/work",
    title: "Our Work & Case Studies | DevHatch Labs",
    description:
      "Explore selected AI, machine-learning, full-stack, web, e-commerce, and practical technology projects built by the DevHatch Labs team.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Our Work & Case Studies | DevHatch Labs",
    description:
      "Explore selected AI, machine-learning, full-stack, web, e-commerce, and practical technology projects built by the DevHatch Labs team.",
  },
};

export default function WorkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}