import type { Metadata, Viewport  } from "next";
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
    default: "Khansa | Frontend Developer",
    template: "%s | Khansa",
  },
  applicationName: "Khansa Portfolio",
  description:
    "Frontend Developer based in Karachi, Pakistan. I build responsive, modern, and user-friendly web applications using Next.js,  TypeScript, JavaScript, HTML, CSS, and Tailwind CSS.",
  category: "technology",
    keywords: [
  "Frontend Developer",
  "Web Developer",
  "Next.js",
  "React",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Portfolio",
  "Karachi",
  "Pakistan",
  ],
  authors: [{ name: "Khansa", url: "https://personal-portfolio-one-lemon.vercel.app" }],
  creator: "Khansa",
  publisher: "Khansa",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://personal-portfolio-one-lemon.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://personal-portfolio-one-lemon.vercel.app",
    title: "Khansa | Frontend Developer",
    description:
      "Frontend Developer based in Karachi, Pakistan. I build responsive, modern, and user-friendly web applications using Next.js, TypeScript, JavaScript, HTML, CSS, and Tailwind CSS.",
    siteName: "Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Khansa - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Khansa | Frontend Developer",
    description:
      "Frontend Developer based in Karachi, Pakistan.",
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
  verification: {
  google: "0nkUUMVM8MCzJdJGwDkqEalxPq_PRRvVO-u045WJg0Y",
}
};
export const viewport: Viewport = {
  themeColor: "#0f172a",
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
