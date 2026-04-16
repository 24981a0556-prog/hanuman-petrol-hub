import { createContext, useContext, useState, type ReactNode } from "react";

type Language = "en" | "hi";

const translations = {
  en: {
    home: "Home",
    services: "Services",
    reviews: "Reviews",
    contact: "Contact",
    callNow: "Call Now",
    getDirections: "Get Directions",
    heroTitle: "HANUMAN PETROLEUMS",
    heroSubtitle: "24/7 Fuel Services – Petrol, Diesel & Mobile Tankers",
    tagline: "Fueling Your Journey, 24/7 भरोसे के साथ",
    about: "HANUMAN PETROLEUMS 24/7 CNG FULL STOCK & PETROL AND DIESEL AVAILABLE",
    petrol: "Petrol (MS)",
    petrolDesc: "High-quality Motor Spirit fuel for all vehicles. Always available, always reliable.",
    diesel: "Diesel (HSD)",
    dieselDesc: "Premium High Speed Diesel for commercial and personal vehicles.",
    tanker: "Mobile Tanker Services",
    tankerDesc: "Fuel delivery at your doorstep. Charges based on distance.",
    mobileTanker: "CNG",
    mobileTankerDesc: "​CNG fuel is available exclusively at our outlet. Customers can visit our station to avail safe and efficient CNG refueling services.",
    petrolDiesel: "Petrol & Diesel",
    petrolDieselDesc: "High-quality petrol and diesel available with accurate dispensing and quick service.",
    bulkTransport: "Bulk Fuel Transport",
    bulkTransportDesc: "Safe and efficient transportation of fuel for large-scale requirements.",
    service247: "24/7 Service",
    reliableFuel: "Reliable Fuel",
    quickService: "Quick Service",
    reviewsTitle: "What Our Customers Say",
    basedOnGoogle: "Based on Google Reviews",
    contactTitle: "Contact Us",
    address: "Sri Nagar Main Rd, Official Colony, Sri Nagar, Gajuwaka, Andhra Pradesh 530026",
    open24: "Open 24 Hours",
    phone: "Phone",
    whatsapp: "WhatsApp",
    directions: "Directions",
    allRightsReserved: "All rights reserved.",
    trustBadges: "Why Choose Us",
    whyChooseUsTitle: "Why Choose Us",
    whyChooseUsDesc: "At Hanuman Petroleums, we are committed to delivering high-quality fuel with accuracy, safety, and customer satisfaction at the core. Located conveniently in Gajuwaka, we provide 24/7 service with quick refueling, well-maintained facilities, and friendly staff to ensure a smooth experience every time. Whether it's petrol, diesel, or CNG at our outlet, customers trust us for reliability, transparency, and consistent service they can depend on.",
    bullet1: "24/7 Fuel Availability",
    bullet2: "Accurate Dispensing & Quality Assurance",
    bullet3: "Fast & Friendly Service",
  },
  hi: {
    home: "होम",
    services: "सेवाएं",
    reviews: "समीक्षाएं",
    contact: "संपर्क",
    callNow: "अभी कॉल करें",
    getDirections: "दिशा प्राप्त करें",
    heroTitle: "हनुमान पेट्रोलियम्स",
    heroSubtitle: "24/7 ईंधन सेवाएं – पेट्रोल, डीजल और मोबाइल टैंकर",
    tagline: "Fueling Your Journey, 24/7 भरोसे के साथ",
    about: "हनुमान पेट्रोलियम्स 24/7 CNG पूर्ण स्टॉक और पेट्रोल और डीजल उपलब्ध",
    petrol: "पेट्रोल (MS)",
    petrolDesc: "सभी वाहनों के लिए उच्च गुणवत्ता वाला मोटर स्पिरिट ईंधन। हमेशा उपलब्ध, हमेशा विश्वसनीय।",
    diesel: "डीजल (HSD)",
    dieselDesc: "वाणिज्यिक और व्यक्तिगत वाहनों के लिए प्रीमियम हाई स्पीड डीजल।",
    tanker: "मोबाइल टैंकर सेवाएं",
    tankerDesc: "आपके दरवाजे पर ईंधन डिलीवरी। दूरी के आधार पर शुल्क।",
    mobileTanker: "सीएनजी",
    mobileTankerDesc: "व्यवसायों और आपातकालीन जरूरतों के लिए विश्वसनीय मोबाइल सीएनजी डिलीवरी सेवाएं।",
    petrolDiesel: "पेट्रोल और डीजल",
    petrolDieselDesc: "सटीक डिस्पेंसिंग और त्वरित सेवा के साथ उच्च गुणवत्ता वाला पेट्रोल और डीजल उपलब्ध।",
    bulkTransport: "बल्क ईंधन परिवहन",
    bulkTransportDesc: "बड़े पैमाने की आवश्यकताओं के लिए ईंधन का सुरक्षित और कुशल परिवहन।",
    service247: "24/7 सेवा",
    reliableFuel: "विश्वसनीय ईंधन",
    quickService: "त्वरित सेवा",
    reviewsTitle: "हमारे ग्राहक क्या कहते हैं",
    basedOnGoogle: "Google समीक्षाओं पर आधारित",
    contactTitle: "संपर्क करें",
    address: "श्री नगर मेन रोड, ऑफिशियल कॉलोनी, श्री नगर, गजुवाका, आंध्र प्रदेश 530026",
    open24: "24 घंटे खुला",
    phone: "फ़ोन",
    whatsapp: "व्हाट्सएप",
    directions: "दिशा",
    allRightsReserved: "सर्वाधिकार सुरक्षित।",
    trustBadges: "हमें क्यों चुनें",
    whyChooseUsTitle: "हमें क्यों चुनें",
    whyChooseUsDesc: "हनुमान पेट्रोलियम्स में, हम सटीकता, सुरक्षा और ग्राहक संतुष्टि के साथ उच्च गुणवत्ता वाला ईंधन प्रदान करने के लिए प्रतिबद्ध हैं। गजुवाका में सुविधाजनक स्थान पर स्थित, हम त्वरित ईंधन भरने, अच्छी तरह से रखरखाव की गई सुविधाओं और मित्रवत कर्मचारियों के साथ 24/7 सेवा प्रदान करते हैं। चाहे पेट्रोल हो, डीजल हो, या हमारे आउटलेट पर सीएनजी, ग्राहक विश्वसनीयता, पारदर्शिता और निरंतर सेवा के लिए हम पर भरोसा करते हैं।",
    bullet1: "24/7 ईंधन उपलब्धता",
    bullet2: "सटीक डिस्पेंसिंग और गुणवत्ता आश्वासन",
    bullet3: "तेज़ और मैत्रीपूर्ण सेवा",
  },
} as const;

type TranslationKey = keyof typeof translations.en;

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");
  const t = (key: TranslationKey) => translations[lang][key];
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
