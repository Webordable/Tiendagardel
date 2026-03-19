import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

type Language = "es" | "latam" | "en";

interface Translations {
  nav: {
    home: string;
    craftsmanship: string;
    shipping: string;
    contact: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    primaryCTA: string;
    secondaryCTA: string;
    trustLine: string;
  };
  transformation: {
    before: string;
    beforeText: string;
    after: string;
    afterText: string;
    microcopy: string;
  };
  product: {
    feature1: string;
    feature2: string;
    feature3: string;
    feature4: string;
    priceNote: string;
    primaryCTA: string;
    scarcity: string;
  };
  craftsmanshipPreview: {
    headline: string;
    narrative: string;
    cta: string;
  };
  socialProof: {
    quote1: string;
    quote2: string;
    customer1: string;
    customer2: string;
    locations: string;
    guarantee: string;
  };
  finalCTA: {
    headline: string;
    primaryCTA: string;
    secondaryCTA: string;
    securityNote: string;
  };
  craftsmanshipPage: {
    title: string;
    intro: string;
    woodSelection: string;
    woodSelectionText: string;
    handSanding: string;
    handSandingText: string;
    finishing: string;
    finishingText: string;
    philosophy: string;
    philosophyText: string;
  };
  shippingPage: {
    title: string;
    shipping: string;
    shippingText: string;
    timeframe: string;
    timeframeText: string;
    packaging: string;
    packagingText: string;
    guarantee: string;
    guaranteeText: string;
    faqTitle: string;
  };
  contactPage: {
    title: string;
    subtitle: string;
    nameLabel: string;
    emailLabel: string;
    reasonLabel: string;
    reasonBuy: string;
    reasonQuestion: string;
    reasonCustom: string;
    messageLabel: string;
    submitButton: string;
    whatsappText: string;
    instagramText: string;
  };
  footer: {
    navigation: string;
    contact: string;
    followUs: string;
    tagline: string;
    copyright: string;
  };
}

const translations: Record<Language, Translations> = {
  es: {
    nav: {
      home: "Inicio",
      craftsmanship: "La Artesanía",
      shipping: "Envíos",
      contact: "Contacto",
    },
    hero: {
      headline: "El ajedrez, tallado con alma.",
      subheadline:
        "Tablero de ajedrez artesanal hecho a mano en Argentina. Una pieza única para quienes valoran la estrategia y la belleza.",
      primaryCTA: "Comprar ahora",
      secondaryCTA: "Descubrir la historia",
      trustLine:
        "Envíos a Buenos Aires, La Plata, City Bell y toda Argentina.",
    },
    transformation: {
      before: "Antes",
      beforeText: "Tableros industriales, sin carácter.",
      after: "Después",
      afterText:
        "Una pieza que transmite presencia en cualquier espacio.",
      microcopy:
        "Cada tablero es único. La madera nunca repite su historia.",
    },
    product: {
      feature1: "Madera maciza seleccionada",
      feature2: "Hecho a mano en Argentina",
      feature3: "Acabado protector natural",
      feature4: "Producción limitada",
      priceNote: "Envío a todo el país incluido.",
      primaryCTA: "Comprar ahora",
      scarcity: "Producción artesanal limitada por temporada.",
    },
    craftsmanshipPreview: {
      headline: "El arte detrás de cada movimiento.",
      narrative:
        "Desde el corte de la madera hasta el último pulido, cada tablero pasa por manos expertas.",
      cta: "Ver proceso completo",
    },
    socialProof: {
      quote1: "Una obra de arte funcional.",
      quote2: "Calidad que se siente al tocarla.",
      customer1: "Cliente de Buenos Aires",
      customer2: "Cliente de La Plata",
      locations: "Envíos a todo el país.",
      guarantee: "Garantía de satisfacción.",
    },
    finalCTA: {
      headline: "Haz tu próxima jugada.",
      primaryCTA: "Comprar ahora",
      secondaryCTA: "Consultar disponibilidad",
      securityNote: "Pago seguro. Envíos nacionales.",
    },
    craftsmanshipPage: {
      title: "La Artesanía",
      intro:
        "Cada tablero de Tienda Gardel es el resultado de un proceso artesanal meticuloso que honra la tradición de la carpintería argentina.",
      woodSelection: "Selección de Madera",
      woodSelectionText:
        "Seleccionamos cuidadosamente madera maciza local, respetando la veta natural y las características únicas de cada pieza.",
      handSanding: "Lijado a Mano",
      handSandingText:
        "Cada superficie es trabajada a mano con paciencia, creando una textura suave y perfecta al tacto.",
      finishing: "Acabado Natural",
      finishingText:
        "Aplicamos aceites naturales que protegen la madera mientras resaltan su belleza inherente.",
      philosophy: "Filosofía del Oficio",
      philosophyText:
        "No buscamos la producción en masa. Cada tablero lleva tiempo, dedicación y el conocimiento de generaciones de artesanos.",
    },
    shippingPage: {
      title: "Envíos y Garantía",
      shipping: "Envíos a toda Argentina",
      shippingText:
        "Realizamos envíos a todo el país con embalaje especializado para proteger tu tablero durante el transporte.",
      timeframe: "Tiempo de Entrega",
      timeframeText:
        "Buenos Aires, La Plata, City Bell: 3-5 días hábiles. Resto del país: 7-10 días hábiles.",
      packaging: "Embalaje Artesanal",
      packagingText:
        "Cada tablero se envuelve con protección multicapa y materiales sostenibles que garantizan su llegada en perfectas condiciones.",
      guarantee: "Garantía de Satisfacción",
      guaranteeText:
        "Si no estás completamente satisfecho con tu tablero, ofrecemos devolución sin preguntas dentro de los primeros 30 días.",
      faqTitle: "Preguntas Frecuentes",
    },
    contactPage: {
      title: "Contacto",
      subtitle: "Escribinos y responderemos lo antes posible.",
      nameLabel: "Nombre",
      emailLabel: "Email",
      reasonLabel: "Motivo del contacto",
      reasonBuy: "Quiero comprar",
      reasonQuestion: "Tengo una pregunta",
      reasonCustom: "Otra razón",
      messageLabel: "Mensaje",
      submitButton: "Enviar mensaje",
      whatsappText: "O contactanos por WhatsApp",
      instagramText: "O contactanos por Instagram",
    },
    footer: {
      navigation: "Navegación",
      contact: "Contacto",
      followUs: "Síguenos",
      tagline:
        "Tableros de ajedrez artesanales hechos a mano en Argentina.",
      copyright:
        "© 2026 Tienda Gardel. Todos los derechos reservados.",
    },
  },
  latam: {
    nav: {
      home: "Inicio",
      craftsmanship: "La Artesanía",
      shipping: "Envíos",
      contact: "Contacto",
    },
    hero: {
      headline: "El ajedrez, tallado con alma.",
      subheadline:
        "Tablero de ajedrez artesanal hecho a mano en Argentina. Una pieza única para quienes valoran la estrategia y la belleza.",
      primaryCTA: "Comprar ahora",
      secondaryCTA: "Descubrir la historia",
      trustLine:
        "Envíos a Buenos Aires, La Plata, City Bell y toda Argentina.",
    },
    transformation: {
      before: "Antes",
      beforeText: "Tableros industriales, sin carácter.",
      after: "Después",
      afterText:
        "Una pieza que transmite presencia en cualquier espacio.",
      microcopy:
        "Cada tablero es único. La madera nunca repite su historia.",
    },
    product: {
      feature1: "Madera maciza seleccionada",
      feature2: "Hecho a mano en Argentina",
      feature3: "Acabado protector natural",
      feature4: "Producción limitada",
      priceNote: "Envío a todo el país incluido.",
      primaryCTA: "Comprar ahora",
      scarcity: "Producción artesanal limitada por temporada.",
    },
    craftsmanshipPreview: {
      headline: "El arte detrás de cada movimiento.",
      narrative:
        "Desde el corte de la madera hasta el último pulido, cada tablero pasa por manos expertas.",
      cta: "Ver proceso completo",
    },
    socialProof: {
      quote1: "Una obra de arte funcional.",
      quote2: "Calidad que se siente al tocarla.",
      customer1: "Cliente de Buenos Aires",
      customer2: "Cliente de La Plata",
      locations: "Envíos a todo el país.",
      guarantee: "Garantía de satisfacción.",
    },
    finalCTA: {
      headline: "Hace tu próxima jugada.",
      primaryCTA: "Comprar ahora",
      secondaryCTA: "Consultar disponibilidad",
      securityNote: "Pago seguro. Envíos nacionales.",
    },
    craftsmanshipPage: {
      title: "La Artesanía",
      intro:
        "Cada tablero de Tienda Gardel es el resultado de un proceso artesanal meticuloso que honra la tradición de la carpintería argentina.",
      woodSelection: "Selección de Madera",
      woodSelectionText:
        "Seleccionamos cuidadosamente madera maciza local, respetando la veta natural y las características únicas de cada pieza.",
      handSanding: "Lijado a Mano",
      handSandingText:
        "Cada superficie es trabajada a mano con paciencia, creando una textura suave y perfecta al tacto.",
      finishing: "Acabado Natural",
      finishingText:
        "Aplicamos aceites naturales que protegen la madera mientras resaltan su belleza inherente.",
      philosophy: "Filosofía del Oficio",
      philosophyText:
        "No buscamos la producción en masa. Cada tablero lleva tiempo, dedicación y el conocimiento de generaciones de artesanos.",
    },
    shippingPage: {
      title: "Envíos y Garantía",
      shipping: "Envíos a toda Argentina",
      shippingText:
        "Realizamos envíos a todo el país con embalaje especializado para proteger tu tablero durante el transporte.",
      timeframe: "Tiempo de Entrega",
      timeframeText:
        "Buenos Aires, La Plata, City Bell: 3-5 días hábiles. Resto del país: 7-10 días hábiles.",
      packaging: "Embalaje Artesanal",
      packagingText:
        "Cada tablero se envuelve con protección multicapa y materiales sostenibles que garantizan su llegada en perfectas condiciones.",
      guarantee: "Garantía de Satisfacción",
      guaranteeText:
        "Si no estás completamente satisfecho con tu tablero, ofrecemos devolución sin preguntas dentro de los primeros 30 días.",
      faqTitle: "Preguntas Frecuentes",
    },
    contactPage: {
      title: "Contacto",
      subtitle: "Escribinos y responderemos lo antes posible.",
      nameLabel: "Nombre",
      emailLabel: "Email",
      reasonLabel: "Motivo del contacto",
      reasonBuy: "Quiero comprar",
      reasonQuestion: "Tengo una pregunta",
      reasonCustom: "Otra razón",
      messageLabel: "Mensaje",
      submitButton: "Enviar mensaje",
      whatsappText: "O contactanos por WhatsApp",
      instagramText: "O contactanos por Instagram",
    },
    footer: {
      navigation: "Navegación",
      contact: "Contacto",
      followUs: "Síguenos",
      tagline:
        "Tableros de ajedrez artesanales hechos a mano en Argentina.",
      copyright:
        "© 2026 Tienda Gardel. Todos los derechos reservados.",
    },
  },
  en: {
    nav: {
      home: "Home",
      craftsmanship: "Craftsmanship",
      shipping: "Shipping",
      contact: "Contact",
    },
    hero: {
      headline: "Chess, carved with soul.",
      subheadline:
        "Handcrafted artisanal chess board made in Argentina. A unique piece for those who value strategy and beauty.",
      primaryCTA: "Buy now",
      secondaryCTA: "Discover the story",
      trustLine:
        "Shipping to Buenos Aires, La Plata, City Bell and throughout Argentina.",
    },
    transformation: {
      before: "Before",
      beforeText: "Industrial boards, without character.",
      after: "After",
      afterText: "A piece that conveys presence in any space.",
      microcopy:
        "Each board is unique. Wood never repeats its story.",
    },
    product: {
      feature1: "Selected solid wood",
      feature2: "Handmade in Argentina",
      feature3: "Natural protective finish",
      feature4: "Limited production",
      priceNote: "Nationwide shipping included.",
      primaryCTA: "Buy now",
      scarcity: "Limited artisanal production per season.",
    },
    craftsmanshipPreview: {
      headline: "The art behind every move.",
      narrative:
        "From cutting the wood to the final polish, each board passes through expert hands.",
      cta: "See full process",
    },
    socialProof: {
      quote1: "A functional work of art.",
      quote2: "Quality you can feel.",
      customer1: "John Doe",
      customer2: "Jane Smith",
      locations: "Nationwide shipping.",
      guarantee: "Satisfaction guarantee.",
    },
    finalCTA: {
      headline: "Make your next move.",
      primaryCTA: "Buy now",
      secondaryCTA: "Check availability",
      securityNote: "Secure payment. National shipping.",
    },
    craftsmanshipPage: {
      title: "The Craft",
      intro:
        "Each Tienda Gardel board is the result of a meticulous artisanal process that honors the tradition of Argentine carpentry.",
      woodSelection: "Wood Selection",
      woodSelectionText:
        "We carefully select local solid wood, respecting the natural grain and unique characteristics of each piece.",
      handSanding: "Hand Sanding",
      handSandingText:
        "Each surface is worked by hand with patience, creating a smooth and perfect texture to the touch.",
      finishing: "Natural Finishing",
      finishingText:
        "We apply natural oils that protect the wood while enhancing its inherent beauty.",
      philosophy: "Craft Philosophy",
      philosophyText:
        "We do not seek mass production. Each board takes time, dedication, and the knowledge of generations of artisans.",
    },
    shippingPage: {
      title: "Shipping & Guarantee",
      shipping: "Shipping throughout Argentina",
      shippingText:
        "We ship nationwide with specialized packaging to protect your board during transport.",
      timeframe: "Delivery Time",
      timeframeText:
        "Buenos Aires, La Plata, City Bell: 3-5 business days. Rest of the country: 7-10 business days.",
      packaging: "Artisanal Packaging",
      packagingText:
        "Each board is wrapped with multi-layer protection and sustainable materials that guarantee its arrival in perfect condition.",
      guarantee: "Satisfaction Guarantee",
      guaranteeText:
        "If you are not completely satisfied with your board, we offer no-questions-asked returns within the first 30 days.",
      faqTitle: "Frequently Asked Questions",
    },
    contactPage: {
      title: "Contact",
      subtitle:
        "Write to us and we will respond as soon as possible.",
      nameLabel: "Name",
      emailLabel: "Email",
      reasonLabel: "Reason for contact",
      reasonBuy: "I want to buy",
      reasonQuestion: "I have a question",
      reasonCustom: "Other reason",
      messageLabel: "Message",
      submitButton: "Send message",
      whatsappText: "Or contact us via WhatsApp",
      instagramText: "Or contact us via Instagram",
    },
    footer: {
      navigation: "Navigation",
      contact: "Contact",
      followUs: "Follow Us",
      tagline:
        "Handcrafted artisanal chess boards made in Argentina.",
      copyright: "© 2026 Tienda Gardel. All rights reserved.",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<
  LanguageContextType | undefined
>(undefined);

export const LanguageProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [language, setLanguage] = useState<Language>("es");

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "useLanguage must be used within LanguageProvider",
    );
  }
  return context;
};