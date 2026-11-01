import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://alireza-mashayekhi.com"),
  title: "Alireza Mashayekhi | Software Engineer",
  description: "Alireza Mashayekhi is a software engineer building frontend platforms, full-stack products, and data-rich web experiences.",
  applicationName: "Alireza Mashayekhi Portfolio",
  authors: [{ name: "Alireza Mashayekhi" }],
  creator: "Alireza Mashayekhi",
  keywords: ["Alireza Mashayekhi", "Software Engineer", "Frontend Engineer", "Full-Stack Developer", "React", "Next.js", "TypeScript"],
  openGraph: {
    title: "Alireza Mashayekhi | Software Engineer",
    description: "Frontend platforms, full-stack products, and thoughtful web experiences.",
    type: "website",
    images: [{ url: "/twitter-am.png", width: 1200, height: 630, alt: "Alireza Mashayekhi" }],
  },
  twitter: { card: "summary_large_image", title: "Alireza Mashayekhi | Software Engineer", images: ["/twitter-am.png"] },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
