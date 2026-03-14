import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flow Club Companion Case Study — Lydia Kwag",
  description:
    "A deep dive into Flow Club Companion — a productivity tool built with React Native and TypeScript.",
  openGraph: {
    title: "Flow Club Companion Case Study — Lydia Kwag",
    description:
      "A deep dive into Flow Club Companion — a productivity tool built with React Native and TypeScript.",
    url: "https://lydiakwag.com/projects/flow-club-companion",
    siteName: "Lydia Kwag",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Flow Club Companion Case Study — Lydia Kwag",
    description:
      "A deep dive into Flow Club Companion — a productivity tool built with React Native and TypeScript.",
  },
};

export default function FlowClubCompanionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
