import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";
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
  title: "Beru Café | Artisan Café in Sri Lanka",
  description:
    "Discover Beru Café — an artisan café offering thoughtfully crafted food, specialty drinks and a warm café experience in Sri Lanka.",
  keywords: [
    "Beru Cafe",
    "Beru Cafe Colombo",
    "Artisan Cafe Colombo",
    "Specialty Coffee Sri Lanka",
    "Matcha Colombo",
    "Thimbirigasyaya Cafe",
    "Best cafes in Colombo",
    "Colombo cafe culture",
  ],
  authors: [{ name: "Beru Café" }],
  creator: "Beru Café",
  metadataBase: new URL("https://berucafe.lk"),
  openGraph: {
    title: "Beru Café | Artisan Café in Sri Lanka",
    description:
      "A cozy space where great food, refreshing drinks and good vibes come together. Located at 29, Thimbirigasyaya Place, Colombo 05.",
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
    title: "Beru Café | Artisan Café in Sri Lanka",
    description:
      "Discover Beru Café — an artisan café offering thoughtfully crafted food, specialty drinks and a warm café experience in Sri Lanka.",
    images: ["/images/exterior-facade.jpg"],
  },
  icons: {
    icon: "/images/beru-shell-badge.png",
    apple: "/images/beru-shell-badge.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org LocalBusiness / Cafe data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: BERU_INFO.name,
    image: "https://berucafe.lk/images/exterior-facade.jpg",
    description: BERU_INFO.quote,
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
    url: "https://berucafe.lk",
    telephone: "+94771234567",
    servesCuisine: ["Artisan Cafe", "Specialty Coffee", "Japanese Matcha", "Modern Brunch"],
    priceRange: "$$",
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
      "https://www.instagram.com/berucafe.lk/",
      "https://maps.app.goo.gl/ZGNUv53XZPMz3Q2U7?g_st=ic",
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
      </body>
    </html>
  );
}
