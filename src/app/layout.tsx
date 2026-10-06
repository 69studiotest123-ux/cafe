import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";
import MobileActionBar from "@/components/MobileActionBar";
import { BERU_INFO } from "@/data/cafeData";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAF7F2",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://berucafe.lk"),
  title: {
    default: "Beru Café | Colombo 05 | Artisan Café & Matcha Bar",
    template: "%s | Beru Café Colombo",
  },
  description:
    "Beru Café is an artisan café in Thimbirigasyaya, Colombo 05. Experience ceremonial Japanese matcha, specialty coffee, and handcrafted brunch in an unhurried oasis.",
  keywords: [
    "Beru Cafe",
    "Beru Cafe Colombo",
    "Cafe Colombo 05",
    "Thimbirigasyaya Cafe",
    "Matcha Colombo",
    "Specialty Coffee Colombo",
    "Best Cafes in Colombo",
    "Colombo Brunch",
  ],
  authors: [{ name: "Beru Café" }],
  creator: "Beru Café",
  alternates: {
    canonical: "https://berucafe.lk",
  },
  openGraph: {
    title: "Beru Café | Colombo 05 | Artisan Café & Matcha Bar",
    description:
      "A cozy space where great food, refreshing drinks and good vibes come together at 29, Thimbirigasyaya Place, Colombo 05.",
    url: "https://berucafe.lk",
    siteName: "Beru Café",
    images: [
      {
        url: "/images/exterior-facade.jpg",
        width: 1200,
        height: 630,
        alt: "Beru Café Colombo facade and illuminated shell emblem",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beru Café | Colombo 05 | Artisan Café & Matcha Bar",
    description:
      "Artisan café in Thimbirigasyaya, Colombo 05 featuring ceremonial Japanese matcha, specialty coffee, and handcrafted dishes.",
    images: ["/images/exterior-facade.jpg"],
  },
  icons: {
    icon: "/images/beru-shell-badge.png",
    apple: "/images/beru-shell-badge.png",
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
  // Schema.org LocalBusiness / CafeOrCoffeeShop structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "@id": "https://berucafe.lk/#cafe",
    name: BERU_INFO.name,
    image: "https://berucafe.lk/images/exterior-facade.jpg",
    description: BERU_INFO.quote,
    url: "https://berucafe.lk",
    telephone: BERU_INFO.phoneTel,
    menu: "https://berucafe.lk/menu",
    hasMap: BERU_INFO.mapsUrl,
    acceptsReservations: "True",
    priceRange: "$$",
    servesCuisine: [
      "Artisan Cafe",
      "Specialty Coffee",
      "Ceremonial Japanese Matcha",
      "All-Day Modern Brunch",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "29, Thimbirigasyaya Place",
      addressLocality: "Colombo",
      postalCode: "00500",
      addressRegion: "Western Province",
      addressCountry: "LK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 6.8925,
      longitude: 79.8654,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "17:30",
      },
    ],
    sameAs: [
      BERU_INFO.instagramUrl,
      BERU_INFO.mapsUrl,
    ],
  };

  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#FAF7F2] text-[#2A1B12] font-sans antialiased selection:bg-[#E4C8BA] selection:text-[#2A1B12] overflow-x-clip" suppressHydrationWarning>
        <PageLoader />
        <Navbar />
        <main className="w-full overflow-x-clip">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
