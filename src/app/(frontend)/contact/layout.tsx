import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",

  description:
    "Contact DevHatch Labs to discuss AI chatbots, workflow automation, RAG systems, custom software, web applications, or your next technology project.",

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    type: "website",
    url: "https://devhatchlabs.com/contact",
    title: "Contact DevHatch Labs | Start Your AI or Software Project",
    description:
      "Tell DevHatch Labs about your AI chatbot, automation, RAG, web application, or custom software idea and explore the right next step.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact DevHatch Labs | Start Your AI or Software Project",
    description:
      "Tell DevHatch Labs about your AI chatbot, automation, RAG, web application, or custom software idea and explore the right next step.",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}