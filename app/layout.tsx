import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { UiProvider } from "../context/context";
import Layout from "../components/layout/Layout";
import './globals.css'

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
  description: "Alireza Mashayekhi, Software Engineer with 5+ years experience in full-stack development",
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
