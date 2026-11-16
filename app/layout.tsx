import type { Metadata } from "next";
import "./globals.css";
import ScrollEffects from "@/components/ui/ScrollEffects";
import BeneathReveal from "@/components/ui/BeneathReveal";

export const metadata: Metadata = {
  title: {
    default: "OSBEE SOLUTIONS PRIVATE LIMITED | Economic Consulting",
    template: "%s | OSBEE SOLUTIONS",
  },
  description:
    "OSBEE SOLUTIONS PRIVATE LIMITED offers economic consulting, commercial guidance, cost optimization and practical business solutions in India.",
  applicationName: "OSBEE SOLUTIONS PRIVATE LIMITED",
  keywords: [
    "OSBEE SOLUTIONS PRIVATE LIMITED",
    "Economic Consulting",
    "Commercial Consulting",
    "Cost Optimization",
    "Business Solutions",
    "Business Consulting India",
    "Kolkata Consulting",
  ],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "OSBEE SOLUTIONS PRIVATE LIMITED",
    description:
      "Economic Consulting & Smart Business Solutions. Practical commercial guidance and cost optimization for businesses.",
    siteName: "OSBEE SOLUTIONS PRIVATE LIMITED",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body>
        <ScrollEffects />
        <BeneathReveal />
        {children}
      </body>
    </html>
  );
}
