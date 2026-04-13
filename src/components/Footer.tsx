import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background py-8 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src="/images/hanuman-logo.jpeg" alt="Hanuman Petroleums" className="w-8 h-8 rounded-full object-cover" />
          <span className="font-bold text-sm">HANUMAN PETROLEUMS</span>
        </div>
        <p className="text-xs text-background/60">
          © {new Date().getFullYear()} Hanuman Petroleums. {t("allRightsReserved")}
        </p>
      </div>
    </footer>
  );
}
