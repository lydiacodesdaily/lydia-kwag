import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FlowMate Case Study — Lydia Kwag",
  description:
    "A deep dive into FlowMate — a productivity app built with React Native, TypeScript, and AI APIs.",
  openGraph: {
    title: "FlowMate Case Study — Lydia Kwag",
    description:
      "A deep dive into FlowMate — a productivity app built with React Native, TypeScript, and AI APIs.",
    url: "https://lydiakwag.com/projects/flowmate",
    siteName: "Lydia Kwag",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "FlowMate Case Study — Lydia Kwag",
    description:
      "A deep dive into FlowMate — a productivity app built with React Native, TypeScript, and AI APIs.",
  },
};

export default function FlowMateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
