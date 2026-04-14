import { useLanguage } from "@/contexts/LanguageContext";
import { Clock, Shield, Zap } from "lucide-react";

const services = [
  {
    key: "mobileTanker" as const,
    descKey: "mobileTankerDesc" as const,
    image: "/images/petrol-tanker.jpeg",
  },
  {
    key: "petrolDiesel" as const,
    descKey: "petrolDieselDesc" as const,
    image: "/images/petrol-pump.jpeg",
  },
  {
    key: "bulkTransport" as const,
    descKey: "bulkTransportDesc" as const,
    image: "/images/diesel-carrier.jpeg",
  },
];

const badges = [
  { key: "service247" as const, icon: Clock },
  { key: "reliableFuel" as const, icon: Shield },
  { key: "quickService" as const, icon: Zap },
];

export function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 px-4 bg-muted/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
          {t("services")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {services.map((s) => (
            <div
              key={s.key}
              className="bg-card rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-border"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.image}
                  alt={t(s.key)}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-bold text-card-foreground mb-2">
                  {t(s.key)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(s.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-bold text-center text-foreground mb-6">
          {t("trustBadges")}
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {badges.map((b) => (
            <div
              key={b.key}
              className="flex items-center gap-2 bg-primary/10 text-primary font-semibold px-5 py-3 rounded-full text-sm"
            >
              <b.icon size={18} />
              {t(b.key)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
