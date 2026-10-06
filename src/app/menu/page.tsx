import type { Metadata } from "next";
import MenuClient from "./MenuClient";

export const metadata: Metadata = {
  title: "Artisan Menu & Specialty Drinks",
  description:
    "Explore the Beru Café menu in Colombo 05: ceremonial Japanese Uji matcha, single-origin espresso, artisan breakfast bagels, and savory croissants.",
  alternates: {
    canonical: "https://berucafe.lk/menu",
  },
  openGraph: {
    title: "Artisan Menu & Specialty Drinks | Beru Café Colombo",
    description:
      "Explore breakfast, bowls, ceremonial matcha, and specialty coffee prepared from scratch at 29, Thimbirigasyaya Place, Colombo 05.",
    url: "https://berucafe.lk/menu",
    images: [
      {
        url: "/images/dish-smoothie-green-juice.jpg",
        width: 1200,
        height: 630,
        alt: "Beru Café signature matcha and artisan bowls",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artisan Menu | Beru Café Colombo",
    description: "Ceremonial matcha, specialty coffee, and handcrafted brunch in Colombo 05.",
    images: ["/images/dish-smoothie-green-juice.jpg"],
  },
};

export default function MenuPage() {
  return <MenuClient />;
}
