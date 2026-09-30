import VisitSection from "@/components/VisitSection";
import Booking from "@/components/Booking";

export const metadata = {
  title: "Visit Us | Beru Café Colombo",
  description:
    "Find directions, hours, and table reservation requests for Beru Café at 29, Thimbirigasyaya Place, Colombo 05.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 bg-[#FAF7F2]">
      <VisitSection />
      <Booking />
    </div>
  );
}
