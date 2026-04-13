import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, Phone, Clock } from "lucide-react";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 px-4 bg-muted/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
          {t("contactTitle")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <p className="font-bold text-card-foreground mb-1">HANUMAN PETROLEUMS</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{t("address")}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Phone size={20} />
              </div>
              <div className="space-y-1">
                <a href="tel:9618882888" className="block text-sm font-semibold text-primary hover:underline">9618882888</a>
                <a href="tel:6281147889" className="block text-sm font-semibold text-primary hover:underline">6281147889</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Clock size={20} />
              </div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold px-4 py-2 rounded-full text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                {t("open24")}
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-md border border-border h-64 md:h-auto">
            <iframe
              title="Hanuman Petroleums Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.5!2d83.2!3d17.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQyJzAwLjAiTiA4M8KwMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 256 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
