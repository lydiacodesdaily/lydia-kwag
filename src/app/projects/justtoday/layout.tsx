import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JustToday Case Study — Lydia Kwag",
  description:
    "A deep dive into JustToday — a focused daily planning app built with React Native and TypeScript.",
  openGraph: {
    title: "JustToday Case Study — Lydia Kwag",
    description:
      "A deep dive into JustToday — a focused daily planning app built with React Native and TypeScript.",
    url: "https://lydiakwag.com/projects/justtoday",
    siteName: "Lydia Kwag",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "JustToday Case Study — Lydia Kwag",
    description:
      "A deep dive into JustToday — a focused daily planning app built with React Native and TypeScript.",
  },
};

export default function JustTodayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
