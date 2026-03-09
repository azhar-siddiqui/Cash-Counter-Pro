import { Analytics } from "@/components/Analytics";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { PWAInstallPrompt } from "@/components/PWAInstallPrompt";
import { ThemeProvider } from "@/provider/theme-provider";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cash-counter-pro-plus.vercel.app/"),
  title: {
    default:
      "CashCounter Pro - Precision Currency Counter | Free Online Cash Calculator",
    template: "%s | CashCounter Pro",
  },
  description:
    "Free online currency counter for precise cash calculations. Count money quickly with our professional cash counter. Support for 150+ currencies including USD, EUR, INR, GBP. Perfect for businesses, banks, and cashiers.",
  keywords: [
    "cash counter",
    "currency counter",
    "money counter",
    "cash calculator",
    "currency calculator",
    "bill counter",
    "cash register",
    "money calculator",
    "currency converter",
    "cash management",
    "banking tools",
    "financial calculator",
    "cash counting machine",
    "digital cash counter",
    "professional cash counter",
  ],
  authors: [{ name: "CashCounter Pro Team" }],
  creator: "CashCounter Pro",
  publisher: "CashCounter Pro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "finance",
  classification: "Financial Tools",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cashcounterpro.com",
    title:
      "CashCounter Pro - Precision Currency Counter | Free Online Cash Calculator",
    description:
      "Free online currency counter for precise cash calculations. Count money quickly with our professional cash counter. Support for 150+ currencies.",
    siteName: "CashCounter Pro",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CashCounter Pro - Professional Currency Counter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CashCounter Pro - Precision Currency Counter",
    description:
      "Free online currency counter for precise cash calculations. Count money quickly with our professional cash counter.",
    images: ["/og-image.jpg"],
    creator: "@cashcounterpro",
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
  verification: {
    google: "your-google-site-verification-code",
    yandex: "your-yandex-verification-code",
    other: {
      bing: "your-bing-verification-code",
    },
  },
  alternates: {
    canonical: "https://cash-counter-pro-plus.vercel.app/",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="light dark" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ErrorBoundary>
          <PWAInstallPrompt>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <Analytics />
            </ThemeProvider>
          </PWAInstallPrompt>
        </ErrorBoundary>
      </body>
    </html>
  );
}
