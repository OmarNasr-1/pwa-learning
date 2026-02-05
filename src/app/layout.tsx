import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "PWA Learning Hub | Build Progressive Web Apps",
  description: "Learn how to create stunning Progressive Web Apps that install like native apps, work offline, and deliver exceptional user experiences.",
  keywords: ["PWA", "Progressive Web App", "Next.js", "Service Worker", "Offline", "Web Development"],
  authors: [{ name: "PWA Learning Hub" }],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "PWA Hub",
  },
  openGraph: {
    type: "website",
    title: "PWA Learning Hub",
    description: "Learn how to build Progressive Web Apps with Next.js",
    siteName: "PWA Learning Hub",
  },
};

export const viewport: Viewport = {
  themeColor: "#6366f1",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="apple-touch-icon" href="/icons/icon-512x512.png" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-slate-950 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
