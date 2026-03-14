import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lydia Kwag — Senior Front-End Engineer",
  description:
    "Senior front-end engineer building human-centered productivity tools. React Native, TypeScript, Next.js, AI APIs.",
  openGraph: {
    title: "Lydia Kwag — Senior Front-End Engineer",
    description:
      "Senior front-end engineer building human-centered productivity tools.",
    url: "https://lydiakwag.com",
    siteName: "Lydia Kwag",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Lydia Kwag — Senior Front-End Engineer",
    description:
      "Senior front-end engineer building human-centered productivity tools.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:rounded-md focus:bg-violet-500 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:outline-none"
        >
          Skip to main content
        </a>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
