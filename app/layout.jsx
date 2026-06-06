import {
  JetBrains_Mono,
  Space_Grotesk,
  Hanken_Grotesk,
} from "next/font/google";

import "./globals.css";

import Header from "@/components/Header";
import HeadElements from "@/components/HeadElements";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Footer from "@/components/Footer";
import { Clarity } from "@/components/Clarity";
import ScrollToHash from "@/components/ScrollToHash";
import WebMCP from "@/components/WebMCP";
import RevealObserver from "@/components/RevealObserver";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-hanken-grotesk",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata = {
  title: "Sagar Gohil - Backend-leaning Full-Stack Engineer",
  favicon: "/favicon.ico",
  description:
    "Backend-leaning full-stack engineer. Scalable backend systems and full-stack apps with Node.js, NestJS, PostgreSQL and AWS.",
  keywords:
    "Sagar Gohil, Portfolio, Software Engineer, Backend Engineer, Node.js, NestJS, PostgreSQL",
  authors: [{ name: "Sagar Gohil", url: "https://sagargohil.dev" }],
  creator: "Sagar Gohil",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <HeadElements />
      <body
        className={`${spaceGrotesk.variable} ${hankenGrotesk.variable} ${jetBrainsMono.variable}`}
      >
        <div className="ambient" />
        <Clarity />
        <ScrollToHash />
        <WebMCP />
        <RevealObserver />
        <Header />
        {children}
        <GoogleAnalytics />
        <Footer />
      </body>
    </html>
  );
}
