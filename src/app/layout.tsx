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
  title: "Lydia Kwag — Product Engineer",
  description:
    "Product engineer building human-centered productivity tools. React Native, TypeScript, Next.js, AI APIs.",
  openGraph: {
    title: "Lydia Kwag — Product Engineer",
    description:
      "Product engineer building human-centered productivity tools.",
    url: "https://lydiakwag.com",
    siteName: "Lydia Kwag",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Lydia Kwag — Product Engineer",
    description:
      "Product engineer building human-centered productivity tools.",
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
        <Cursor />
        {children}
      </body>
    </html>
  );
}
