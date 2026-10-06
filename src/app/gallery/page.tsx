import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Visual Diary & Moments",
  description:
    "Glimpses of daily rituals, tropical modernist architecture, and culinary creations at Beru Café, 29 Thimbirigasyaya Place, Colombo 05.",
  alternates: {
    canonical: "https://berucafe.lk/gallery",
  },
  openGraph: {
    title: "Visual Diary | Beru Café Colombo",
    description: "Moments, flavors, and Colombo café culture at 29, Thimbirigasyaya Place, Colombo 05.",
    url: "https://berucafe.lk/gallery",
    images: [
      {
        url: "/images/exterior-facade.jpg",
        width: 1200,
        height: 630,
        alt: "Beru Café Colombo atmosphere and moments",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Visual Diary | Beru Café Colombo",
    description: "Moments, flavors, and Colombo café culture.",
    images: ["/images/exterior-facade.jpg"],
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
