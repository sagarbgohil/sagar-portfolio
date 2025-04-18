import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weights: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetBrainsMono",
});

export const metadata = {
  title: "Sagar Gohil | Portfolio",
  description: "Backend Engineer | Technology Enthusiast | Chess Player",
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
      <body className={`${jetBrainsMono.className}`}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
