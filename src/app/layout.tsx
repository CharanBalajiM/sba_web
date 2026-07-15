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
    default: "Sree Balaji Advertising | Premium Sign Boards & Printing Erode",
    template: "%s | Sree Balaji Advertising",
  },
  description:
    "Erode's premier printing and signage company since 1999. Specializing in Sunpack sheet printing, Auto top printing, and custom sign boards for schools, colleges, and hospitals.",
  metadataBase: new URL("https://sreebalajiadvertising.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sree Balaji Advertising | Premium Sign Boards & Printing Erode",
    description:
      "Leading signage and printing agency in Tamil Nadu. High quality custom design boards, banner printing, and auto branding since 1999.",
    url: "https://sreebalajiadvertising.com",
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
    "image": "https://sreebalajiadvertising.com/logo.png",
    "@id": "https://sreebalajiadvertising.com/#localbusiness",
    "url": "https://sreebalajiadvertising.com",
    "telephone": "+919345632103",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "L362, Periyar Nagar",
      "addressLocality": "Erode",
      "addressRegion": "Tamil Nadu",
      "postalCode": "638009",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "11.3382768",
      "longitude": "77.7171457",
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
