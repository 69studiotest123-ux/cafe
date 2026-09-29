import Hero from "@/components/Hero";
import FeatureStrip from "@/components/FeatureStrip";
import StorySection from "@/components/StorySection";
import MenuPreview from "@/components/MenuPreview";
import SpecialtyDrinks from "@/components/SpecialtyDrinks";
import Gallery from "@/components/Gallery";
import VisitSection from "@/components/VisitSection";
import Booking from "@/components/Booking";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureStrip />
      <StorySection />
      <MenuPreview />
      <SpecialtyDrinks />
      <Gallery />
      <VisitSection />
      <Booking />
    </>
  );
}
