import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X } from "lucide-react";

const SECTIONS = ["home", "services", "reviews", "contact"] as const;

export function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo("home")}>
          <img src="/images/hanuman-logo.jpeg" alt="Hanuman Petroleums" className="h-10 w-10 rounded-full object-cover" />
          <span className="font-bold text-lg text-foreground hidden sm:block">HANUMAN PETROLEUMS</span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {SECTIONS.map((s) => (
            <button key={s} onClick={() => scrollTo(s)} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors capitalize">
              {t(s)}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "en" ? "hi" : "en")}
            className="text-xs font-semibold px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground hover:opacity-90 transition-opacity"
          >
            {lang === "en" ? "हिंदी" : "EN"}
          </button>
          <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-2">
          {SECTIONS.map((s) => (
            <button key={s} onClick={() => scrollTo(s)} className="block w-full text-left py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors capitalize">
              {t(s)}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
