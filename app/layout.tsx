import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { UiProvider } from "../context/context";
import Layout from "../components/layout/Layout";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alireza Mashayekhi - Software Engineer",
  description:
    "Alireza Mashayekhi, Software Engineer with 5+ years experience in full-stack development",
  applicationName: "Alireza Mashayekhi — Software Engineer",
  authors: [{ name: "Alireza Mashayekhi", url: "https://github.com/maalireza51" }],
  creator: "Alireza Mashayekhi",
  publisher: "Alireza Mashayekhi",
  keywords: [
    "Alireza Mashayekhi",
    "Software Engineer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Portfolio",
    "Resume",
    "Web Development",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Alireza Mashayekhi - Software Engineer",
    description:
      "Software Engineer specializing in React, Next.js, and full-stack JavaScript.",
    url: "/",
    siteName: "Alireza Mashayekhi",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/twitter-am.png",
        width: 1200,
        height: 630,
        alt: "Alireza Mashayekhi — Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alireza Mashayekhi - Software Engineer",
    description:
      "Software Engineer specializing in React, Next.js, and full-stack JavaScript.",
    images: ["/twitter-am.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <UiProvider>
          <Layout>{children}</Layout>
        </UiProvider>
      </body>
    </html>
  );
}
