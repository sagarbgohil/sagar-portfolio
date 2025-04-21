import { JetBrains_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";

import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import HeadElements from "@/components/HeadElements";
import Canonical from "@/components/Canonical";
import StickyWidget from "@/components/StickWidget";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weights: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetBrainsMono",
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <HeadElements />
      <GoogleAnalytics gaId="G-MG5JRSF0RR" />
      <Canonical />

      <body className={`${jetBrainsMono.className} pl-8 pr-8`}>
        <Header />
        <StairTransition />
        <PageTransition>
          {children}
          <StickyWidget />
        </PageTransition>
      </body>
    </html>
  );
}
