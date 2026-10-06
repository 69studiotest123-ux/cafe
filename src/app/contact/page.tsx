import type { Metadata } from "next";
import VisitSection from "@/components/VisitSection";
import Booking from "@/components/Booking";
import CafeFAQ from "@/components/CafeFAQ";

export const metadata: Metadata = {
  title: "Visit & Table Reservations",
  description:
    "Find opening hours (8:00 AM – 5:30 PM), location (29, Thimbirigasyaya Place, Colombo 05), map directions, and WhatsApp table reservations for Beru Café.",
  alternates: {
    canonical: "https://berucafe.lk/contact",
  },
  openGraph: {
    title: "Visit & Contact | Beru Café Colombo",
    description: "Opening hours, address, directions, and table bookings at 29, Thimbirigasyaya Place, Colombo 05.",
    url: "https://berucafe.lk/contact",
    images: [
      {
        url: "/images/exterior-facade.jpg",
        width: 1200,
        height: 630,
        alt: "Beru Café Colombo location and facade",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Visit Beru Café Colombo",
    description: "29, Thimbirigasyaya Place, Colombo 05 • Open daily 8:00 AM – 5:30 PM.",
    images: ["/images/exterior-facade.jpg"],
  },
};

export default function ContactPage() {
  return (
    <div className="pt-24 sm:pt-28 bg-[#FAF7F2] min-h-screen">
      <header className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10 text-center mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-2 mb-2.5">
          <span className="w-6 h-[1.5px] bg-[#B98A55]" />
          <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-[#B98A55]">
            LOCATION & CONTACT
          </span>
          <span className="w-6 h-[1.5px] bg-[#B98A55]" />
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#17110D] font-normal tracking-tight mb-3">
          Find Beru Café in Colombo 05
        </h1>

        <p className="text-xs sm:text-sm text-[#6A5546] font-light max-w-lg mx-auto">
          29, Thimbirigasyaya Place, Colombo 05 • Open 7 Days: 8:00 AM – 5:30 PM
        </p>
      </header>

      <VisitSection />
      <Booking />
      <CafeFAQ />
    </div>
  );
}
