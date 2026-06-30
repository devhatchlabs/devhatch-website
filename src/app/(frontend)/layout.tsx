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

  openGraph: {
    type: "website",
    locale: "en_US",
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

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://devhatchlabs.com/#organization",
      name: "DevHatch Labs",
      url: "https://devhatchlabs.com",
      logo: {
        "@type": "ImageObject",
        url: "https://devhatchlabs.com/icon.png",
        width: 512,
        height: 512,
      },
      sameAs: [
        "https://linkedin.com/company/devhatch-labs",
        "https://www.facebook.com/profile.php?id=61590566882773",
        "https://www.instagram.com/devhatch.labs/",
        "https://www.tiktok.com/@devhatchlabs",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://devhatchlabs.com/#website",
      name: "DevHatch Labs",
      url: "https://devhatchlabs.com",
      publisher: {
        "@id": "https://devhatchlabs.com/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}