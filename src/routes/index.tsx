import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HANUMAN PETROLEUMS | Petrol Pump in Gajuwaka | 24/7 Fuel Station" },
      { name: "description", content: "24/7 petrol pump in Gajuwaka offering petrol, diesel and mobile tanker services." },
      { property: "og:title", content: "HANUMAN PETROLEUMS | 24/7 Fuel Station in Gajuwaka" },
      { property: "og:description", content: "24/7 petrol pump in Gajuwaka offering petrol, diesel and mobile tanker services." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LanguageProvider>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
      <FloatingButtons />
    </LanguageProvider>
  );
}
