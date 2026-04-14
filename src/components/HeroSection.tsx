import { useLanguage } from "@/contexts/LanguageContext";
import { Phone, MapPin } from "lucide-react";

const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Hanuman+Petroleums+Gajuwaka+Visakhapatnam";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />

      {/* Watermark logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src="/images/watermark-logo.png"
          alt=""
          className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] object-contain opacity-[0.06]"
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <img
          src="/images/hanuman-logo.jpeg"
          alt="Hanuman Petroleums Logo"
          className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-6 shadow-lg border-4 border-primary/20 object-cover"
        />

        <h1 className="text-3xl md:text-5xl font-black text-foreground tracking-tight mb-3">
          {t("heroTitle")}
        </h1>

        <p className="text-base md:text-lg text-primary font-semibold italic mb-2">
          {t("tagline")}
        </p>

        <p className="text-sm md:text-base text-muted-foreground mb-8">
          {t("heroSubtitle")}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <a
            href="tel:9618882888"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-xl text-base shadow-lg hover:opacity-90 transition-opacity"
          >
            <Phone size={20} />
            {t("callNow")}
          </a>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-bold px-8 py-4 rounded-xl text-base shadow-lg hover:opacity-90 transition-opacity"
          >
            <MapPin size={20} />
            {t("getDirections")}
          </a>
        </div>

        <p className="text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
          {t("about")}
        </p>
      </div>
    </section>
  );
}
