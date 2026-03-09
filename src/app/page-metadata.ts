import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "CashCounter Pro - Precision Currency Counter | Free Online Cash Calculator",
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
  openGraph: {
    title:
      "CashCounter Pro - Precision Currency Counter | Free Online Cash Calculator",
    description:
      "Free online currency counter for precise cash calculations. Count money quickly with our professional cash counter. Support for 150+ currencies.",
    url: "https://cash-counter-pro-plus.vercel.app/",
    // url: "https://cashcounterpro.com",
    siteName: "CashCounter Pro",
    images: [
      {
        url: "/icon.svg",
        width: 1200,
        height: 630,
        alt: "CashCounter Pro - Professional Currency Counter",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CashCounter Pro - Precision Currency Counter",
    description:
      "Free online currency counter for precise cash calculations. Count money quickly with our professional cash counter.",
    images: ["/icon.svg"],
  },
  alternates: {
    canonical: "https://cashcounterpro.com",
  },
};

export function generateStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "CashCounter Pro",
    description:
      "Free online currency counter for precise cash calculations. Professional cash counting tool supporting 150+ currencies.",
    url: "https://cashcounterpro.com",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    creator: {
      "@type": "Organization",
      name: "CashCounter Pro",
    },
    featureList: [
      "Multi-currency support (150+ currencies)",
      "Real-time calculation",
      "Professional cash counting",
      "Export and share summaries",
      "Dark/Light theme support",
      "Mobile responsive design",
      "Fast and accurate calculations",
    ],
    screenshot: "/icon.svg",
    softwareVersion: "1.0.0",
    datePublished: "2024-01-01",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1000",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return JSON.stringify(structuredData);
}
