import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers & Opportunities",

  description:
    "Explore careers, internships, and future opportunities at DevHatch Labs. Join a team building practical AI systems, automation workflows, custom software, and digital products.",

  alternates: {
    canonical: "/join-us",
  },

  openGraph: {
    type: "website",
    url: "https://devhatchlabs.com/join-us",
    title: "Careers & Opportunities | DevHatch Labs",
    description:
      "Explore internships and future opportunities at DevHatch Labs for people interested in AI, automation, software engineering, design, growth, and practical technology projects.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Careers & Opportunities | DevHatch Labs",
    description:
      "Explore internships and future opportunities at DevHatch Labs for people interested in AI, automation, software engineering, design, growth, and practical technology projects.",
  },
};

export default function JoinUsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}