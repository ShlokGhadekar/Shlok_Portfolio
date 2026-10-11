import type { Metadata, Viewport } from "next";
import { Literata, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const literata = Literata({
  variable: "--font-literata",
  subsets: ["latin"],
  axes: ["opsz"],
  style: ["normal", "italic"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shlok Ghadekar",
  description:
    "Software engineer building backend systems and ML pipelines. Final-year Computer Science at VIT.",
};

export const viewport: Viewport = {
  themeColor: "#E6E9ED",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${literata.variable} ${hanken.variable}`}>
      <body>{children}</body>
    </html>
  );
}
