import { useLanguage } from "@/contexts/LanguageContext";
import { Fuel, Droplets, Truck, Clock, Shield, Zap } from "lucide-react";

const services = [
  { key: "petrol" as const, descKey: "petrolDesc" as const, icon: Fuel, color: "text-primary" },
  { key: "diesel" as const, descKey: "dieselDesc" as const, icon: Droplets, color: "text-secondary" },
  { key: "tanker" as const, descKey: "tankerDesc" as const, icon: Truck, color: "text-primary" },
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
            <div key={s.key} className="bg-card rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-shadow border border-border">
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-4 ${s.color}`}>
                <s.icon size={28} />
              </div>
              <h3 className="text-lg font-bold text-card-foreground mb-2">{t(s.key)}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t(s.descKey)}</p>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-bold text-center text-foreground mb-6">{t("trustBadges")}</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {badges.map((b) => (
            <div key={b.key} className="flex items-center gap-2 bg-primary/10 text-primary font-semibold px-5 py-3 rounded-full text-sm">
              <b.icon size={18} />
              {t(b.key)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
