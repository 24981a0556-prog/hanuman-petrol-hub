import { useLanguage } from "@/contexts/LanguageContext";
import { Star } from "lucide-react";

const reviews = [
  { name: "Rajesh Kumar", rating: 5, text: "Best petrol pump in Gajuwaka. Always open 24/7 and fuel quality is excellent!" },
  { name: "Srinivas Rao", rating: 4, text: "Good service and quick filling. Staff is very helpful and polite." },
  { name: "Priya Sharma", rating: 5, text: "Mobile tanker service is amazing! Delivered diesel to our construction site on time." },
  { name: "Venkat Reddy", rating: 4, text: "Reliable fuel station. Never had any issues with fuel quality. Highly recommended." },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} size={14} className={i < count ? "fill-primary text-primary" : "text-border"} />
      ))}
    </div>
  );
}

export function ReviewsSection() {
  const { t } = useLanguage();

  return (
    <section id="reviews" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-4">
          {t("reviewsTitle")}
        </h2>

        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-4xl font-black text-foreground">4.3</span>
          <Stars count={4} />
        </div>
        <p className="text-sm text-muted-foreground text-center mb-10">{t("basedOnGoogle")}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {reviews.map((r, i) => (
            <div key={i} className="bg-card border border-border rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-sm">
                  {r.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-sm text-card-foreground">{r.name}</p>
                  <Stars count={r.rating} />
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
