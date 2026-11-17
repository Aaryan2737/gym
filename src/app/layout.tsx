import type { Metadata, Viewport } from "next";
import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import MotionProvider from "@/components/motion/MotionProvider";
import { siteConfig } from "@/content/site";

export const viewport: Viewport = {
  themeColor: "#111111",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: `${siteConfig.name} — Forge Your Strength | Koregaon Park, Pune`,
  description: siteConfig.description,
  keywords: [
    "gym in pune",
    "koregaon park gym",
    "powerlifting gym pune",
    "personal training pune",
    "strength and conditioning",
    "jerai athletic club",
  ],
  authors: [{ name: siteConfig.name }],
  metadataBase: new URL("https://jerai-gym-demo.local"),
  openGraph: {
    title: `${siteConfig.name} — High Performance Training in Koregaon Park, Pune`,
    description: siteConfig.description,
    type: "website",
    locale: "en_IN",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
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
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-[#F4F2EC] text-[#111111]">
        <MotionProvider>
          <SiteHeader />
          <main className="flex-1 w-full">{children}</main>
          <SiteFooter />
          <WhatsAppButton />
        </MotionProvider>
      </body>
    </html>
  );
}
