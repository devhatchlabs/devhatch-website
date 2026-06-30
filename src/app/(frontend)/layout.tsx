import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://devhatchlabs.com"),

  title: {
    default: "DevHatch Labs | AI Automation & Custom Software",
    template: "%s | DevHatch Labs",
  },

  description:
    "DevHatch Labs builds AI chatbots, automation workflows, RAG systems, web applications, and custom software for growing businesses.",

  applicationName: "DevHatch Labs",

  authors: [
    {
      name: "DevHatch Labs",
      url: "https://devhatchlabs.com",
    },
  ],

  creator: "DevHatch Labs",
  publisher: "DevHatch Labs",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devhatchlabs.com",
    siteName: "DevHatch Labs",
    title: "DevHatch Labs | AI Automation & Custom Software",
    description:
      "AI chatbots, automation workflows, RAG systems, web applications, and custom software for growing businesses.",
  },

  twitter: {
    card: "summary_large_image",
    title: "DevHatch Labs | AI Automation & Custom Software",
    description:
      "AI chatbots, automation workflows, RAG systems, web applications, and custom software for growing businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}