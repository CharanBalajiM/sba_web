import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTAs from "@/components/FloatingCTAs";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Sree Balaji Advertising | Sunpack Sheet & Auto Top Printing Erode",
    template: "%s | Sree Balaji Advertising",
  },
  description:
    "Erode's premier printing company since 1999. Specializing in high-quality Sunpack sheet printing and Auto top printing across Tamil Nadu.",
  metadataBase: new URL("https://sreebalajiadvertising.co.in"),
  alternates: {
    canonical: "https://sreebalajiadvertising.co.in",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Sree Balaji Advertising | Sunpack Sheet & Auto Top Printing Erode",
    description:
      "Leading printing agency in Tamil Nadu. High quality custom Sunpack sheet printing and Auto top branding since 1999.",
    url: "https://sreebalajiadvertising.co.in",
    siteName: "Sree Balaji Advertising",
    locale: "en_IN",
    type: "website",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Sree Balaji Advertising",
    "image": "https://sreebalajiadvertising.co.in/logo.png",
    "@id": "https://sreebalajiadvertising.co.in/#localbusiness",
    "url": "https://sreebalajiadvertising.co.in",
    "telephone": "+919345632103",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Vasuki Street Number 1, opposite to SCS hospital, Erode Fort",
      "addressLocality": "Erode",
      "addressRegion": "Tamil Nadu",
      "postalCode": "638001",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "11.341000",
      "longitude": "77.726000",
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      "opens": "09:00",
      "closes": "20:00",
    },
  };

  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans text-gray-900 bg-white">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingCTAs />
      </body>
    </html>
  );
}
