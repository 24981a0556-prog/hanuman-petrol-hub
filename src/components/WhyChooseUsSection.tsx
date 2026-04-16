import { useLanguage } from "@/contexts/LanguageContext";
import { Clock, ShieldCheck, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const bullets = [
  { key: "bullet1" as const, icon: Clock },
  { key: "bullet2" as const, icon: ShieldCheck },
  { key: "bullet3" as const, icon: Zap },
];

function useScrollFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

export function WhyChooseUsSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollFadeIn();

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div
        ref={ref}
        className="max-w-4xl mx-auto"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
        }}
      >
        <div className="bg-card rounded-2xl shadow-lg border border-border p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-6">
            {t("whyChooseUsTitle")}
          </h2>

          <p className="text-muted-foreground leading-relaxed text-center mb-10 text-sm md:text-base">
            {t("whyChooseUsDesc")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bullets.map((b, i) => (
              <div
                key={b.key}
                className="flex flex-col items-center text-center gap-3 p-5 rounded-xl bg-primary/5 border border-primary/10"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(16px)",
                  transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
                  transitionDelay: `${300 + i * 150}ms`,
                }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <b.icon size={22} className="text-primary" />
                </div>
                <span className="font-semibold text-foreground text-sm">
                  {t(b.key)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
