import { Phone, MessageCircle, MapPin } from "lucide-react";

const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=HANUMAN+PETROLEUMS+Gajuwaka";
const WHATSAPP_URL = "https://wa.me/919618882888?text=Hello%20I%20need%20fuel%20service";

const buttons = [
  { href: "tel:9618882888", icon: Phone, label: "Call", bg: "bg-primary" },
  { href: WHATSAPP_URL, icon: MessageCircle, label: "WhatsApp", bg: "bg-[oklch(0.55_0.16_150)]" },
  { href: MAPS_URL, icon: MapPin, label: "Maps", bg: "bg-secondary" },
];

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3">
      {buttons.map((b) => (
        <a
          key={b.label}
          href={b.href}
          target={b.href.startsWith("tel") ? undefined : "_blank"}
          rel={b.href.startsWith("tel") ? undefined : "noopener noreferrer"}
          aria-label={b.label}
          className={`${b.bg} text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform`}
        >
          <b.icon size={24} />
        </a>
      ))}
    </div>
  );
}
