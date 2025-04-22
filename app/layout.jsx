import { JetBrains_Mono } from "next/font/google";

import "./globals.css";

import Header from "@/components/Header";
import HeadElements from "@/components/HeadElements";
import StickyWidget from "@/components/StickWidget";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weights: ["400", "600"],
  variable: "--font-jetBrainsMono",
  display: "swap",
});

export const metadata = {
  title: "Sagar Gohil | Software Engineer and Tech Enthusiast",
  favicon: "/favicon.ico",
  description:
    "Passionate Software Engineer with a love for technology, clean architecture, and strategy — both in software development and chess.",
  keywords:
    "Sagar Gohil, Portfolio, Software Engineer, Backend Engineer, Technology Enthusiast, Chess Player",
  authors: [
    {
      name: "Sagar Gohil",
      url: "https://sagargohil.dev",
    },
  ],
  creator: "Sagar Gohil",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <HeadElements />

      <body className={`${jetBrainsMono.className} px-8`}>
        <Header />
        {children}
        <StickyWidget />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
