import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevHatch Labs | Build Smarter. Scale Faster.",
  description:
    "DevHatch Labs builds AI chatbots, automation, and full-stack products for ambitious teams.",
};

// Root layout for the public marketing site only. It lives inside the
// (frontend) route group on purpose — Payload's admin UI gets its own
// sibling route group + root layout in Step 9, so the two never share
// fonts, nav, or styling by accident.
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* <Navbar /> goes here once it's built in Step 3 */}
        <main className="flex-1">{children}</main>
        {/* <Footer /> goes here once it's built in Step 3 */}
      </body>
    </html>
  );
}