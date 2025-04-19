import { JetBrains_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";

import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import HeadElements from "@/components/HeadElements";
import Canonical from "@/components/Canonical";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weights: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetBrainsMono",
});

export const metadata = {
  title: "Sagar Gohil | Backend Engineer & Tech Enthusiast",
  description:
    "Passionate Backend Engineer with a love for technology, clean architecture, and strategy — both in software development and chess.",
  keywords:
    "Sagar Gohil, Portfolio, Backend Engineer, Technology Enthusiast, Chess Player",
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
      <Canonical />
      <GoogleAnalytics gaId="G-MG5JRSF0RR" />
      <body className={`${jetBrainsMono.className}`}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
