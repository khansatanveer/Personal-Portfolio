import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Khansa | Fullstack Web Developer",
    template: "%s | Khansa",
  },
  description:
    "Fullstack Web Developer based in Karachi, Pakistan. Specializing in React, Next.js, Node.js, and scalable web applications.",
  keywords: [
    "Fullstack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Karachi",
    "Pakistan",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Khansa", url: "https://khansa.dev" }],
  creator: "Khansa",
  publisher: "Khansa",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://khansa.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://khansa.dev",
    title: "Khansa | Fullstack Web Developer",
    description:
      "Fullstack Web Developer based in Karachi, Pakistan. Specializing in React, Next.js, Node.js, and scalable web applications.",
    siteName: "Khansa Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Khansa - Fullstack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Khansa | Fullstack Web Developer",
    description:
      "Fullstack Web Developer based in Karachi, Pakistan.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body className="antialiased bg-dark text-foreground">
        {children}
      </body>
    </html>
  );
}
