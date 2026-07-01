import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation, Chatbots & Custom Software",
  description:
    "Explore DevHatch Labs services: AI chatbots, agentic AI systems, RAG applications, workflow automation, custom software, web applications, CRM automation, SEO, and more.",

  alternates: {
    canonical: "/services",
  },

  openGraph: {
    type: "website",
    url: "https://devhatchlabs.com/services",
    title: "AI Automation, Chatbots & Custom Software | DevHatch Labs",
    description:
      "Explore AI chatbots, agentic AI, RAG systems, business automation, custom software, web applications, CRM automation, and digital growth services.",
  },

  twitter: {
    card: "summary_large_image",
    title: "AI Automation, Chatbots & Custom Software | DevHatch Labs",
    description:
      "Explore AI chatbots, agentic AI, RAG systems, business automation, custom software, web applications, CRM automation, and digital growth services.",
  },
};

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}