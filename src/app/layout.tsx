import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";
import { DATA } from "@/data/resume";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://akashvinchankar.dev"),
  title: {
    default: "Akash Vinchankar - Frontend Developer",
    template: "%s | Akash Vinchankar",
  },
  description: DATA.description,
  keywords: [
    "Akash Vinchankar",
    "Frontend Developer",
    "React.js Developer",
    "TypeScript",
    "JavaScript",
    "Web Developer",
    "Software Engineer",
    "Mumbai",
    "India",
    "Portfolio",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Redux",
    "Golang",
  ],
  authors: [
    {
      name: "Akash Vinchankar",
      url: "https://akashvinchankar.dev",
    },
  ],
  creator: "Akash Vinchankar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://akashvinchankar.dev",
    title: "Akash Vinchankar - Frontend Developer",
    description: DATA.description,
    siteName: "Akash Vinchankar Portfolio",
    images: [
      {
        url: "/picofme.png",
        width: 1200,
        height: 630,
        alt: "Akash Vinchankar - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akash Vinchankar - Frontend Developer",
    description: DATA.description,
    images: ["/picofme.png"],
    creator: "@akashvinchankar",
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
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-4xl mx-auto py-12 sm:py-24 px-6 lg:px-8",
          fontSans.variable
        )}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
