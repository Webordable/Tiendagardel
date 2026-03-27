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
    subtitle: string;
    shipping: string;
    shippingText: string;
    timeframe: string;
    timeframeText: string;
    packaging: string;
    packagingText: string;
    guarantee: string;
    guaranteeText: string;
    faqTitle: string;
    faqQ1: string;
    faqA1: string;
    faqQ2: string;
    faqA2: string;
    faqQ3: string;
    faqA3: string;
    faqQ4: string;
    faqA4: string;
    faqQ5: string;
    faqA5: string;
    citiesText: string;
    finalCTATitle: string;
    finalCTAButton: string;
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
        "Tableros de ajedrez tallados a mano en La Plata, Argentina.",
      primaryCTA: "Comprar ahora",
      secondaryCTA: "Descubrir la historia",
      trustLine:
        "Envíos a Buenos Aires, La Plata, City Bell y toda Argentina.",
    },
    transformation: {
      before: "Antes",
      beforeText: "Un tablero de plástico o importado.",
      after: "Después",
      afterText:
        "Una pieza de madera maciza que dura toda la vida.",
      microcopy:
        "Cada tablero es diferente. La madera lo hace único.",
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
        "Así se hace cada tablero — paso a paso, sin apuros.",
      cta: "Ver proceso completo",
    },
    socialProof: {
      quote1: "Lo compré de regalo y quedaron encantados.",
      quote2: "Llegó perfecto, bien embalado y más lindo de lo que esperaba.",
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
        "Así se hace cada tablero. Sin atajos.",
      woodSelection: "Selección de Madera",
      woodSelectionText:
        "Elegimos madera maciza local a mano. Cada pieza tiene una veta diferente — eso es lo que hace único a cada tablero.",
      handSanding: "Lijado a Mano",
      handSandingText:
        "Cada superficie se lija a mano hasta que se siente bien. Sin máquinas.",
      finishing: "Acabado Natural",
      finishingText:
        "Terminamos con aceites naturales únicamente. Nada artificial.",
      philosophy: "Filosofía del Oficio",
      philosophyText:
        "No hacemos producción en masa. Cada tablero lleva su tiempo.",
    },
    shippingPage: {
      title: "Envíos y Garantía",
      subtitle: "Enviamos tu tablero artesanal con el máximo cuidado a cualquier rincón de Argentina.",
      shipping: "Envíos a toda Argentina",
      shippingText:
        "Realizamos envíos a todo el país con embalaje especializado para proteger tu tablero.",
      timeframe: "Tiempo de Entrega",
      timeframeText:
        "Buenos Aires, La Plata, City Bell: 3-5 días hábiles. Resto del país: 7-10 días hábiles.",
      packaging: "Embalaje Cuidadoso",
      packagingText:
        "Lo embalamos bien para que llegue en perfectas condiciones.",
      guarantee: "Garantía de Satisfacción",
      guaranteeText:
        "¿No estás contento con tu tablero? Lo arreglamos dentro de los 30 días.",
      faqTitle: "Preguntas Frecuentes",
      faqQ1: "¿Está incluido el envío?",
      faqA1: "Sí, el envío está incluido en el precio. Sin costos extra.",
      faqQ2: "¿Envían a mi ciudad?",
      faqA2: "Sí, enviamos a donde sea.",
      faqQ3: "¿Cómo se embala el tablero?",
      faqA3: "Lo embalamos bien para que llegue como tiene que llegar.",
      faqQ4: "¿Qué pasa si el tablero llega dañado?",
      faqA4: "Lo arreglamos nosotros, sin vueltas.",
      faqQ5: "¿Puedo devolver el tablero?",
      faqA5: "Sí, dentro de los 30 días de la compra.",
      citiesText: "Y muchas ciudades más en todo el país.",
      finalCTATitle: "¿Listo para recibir tu tablero artesanal?",
      finalCTAButton: "Comprar ahora",
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
      subtitle: "Información detallada sobre nuestros envíos",
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
      faqQ1: "¿Cuánto tiempo tarda el envío?",
      faqA1: "El tiempo de entrega varía según la ubicación. Buenos Aires, La Plata y City Bell: 3-5 días hábiles. Resto del país: 7-10 días hábiles.",
      faqQ2: "¿Cómo se envían los tableros?",
      faqA2: "Cada tablero se envía con embalaje especializado para protegerlo durante el transporte.",
      faqQ3: "¿Qué garantía ofrecen?",
      faqA3: "Ofrecemos una garantía de satisfacción. Si no estás satisfecho con tu tablero, puedes devolverlo sin preguntas dentro de los primeros 30 días.",
      faqQ4: "¿Puedo seguir el estado de mi pedido?",
      faqA4: "Sí, puedes seguir el estado de tu pedido a través de nuestro sistema de seguimiento de pedidos.",
      faqQ5: "¿Qué ciudades tienen envío rápido?",
      faqA5: "Buenos Aires, La Plata y City Bell tienen envío rápido de 3-5 días hábiles.",
      citiesText: "Envíos a todo el país.",
      finalCTATitle: "¿Listo para jugar?",
      finalCTAButton: "Comprar ahora",
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
        "Handcrafted chess boards made in La Plata, Argentina.",
      primaryCTA: "Buy now",
      secondaryCTA: "Discover the story",
      trustLine:
        "Shipping to Buenos Aires, La Plata, City Bell and throughout Argentina.",
    },
    transformation: {
      before: "Before",
      beforeText: "A plastic or mass-produced board.",
      after: "After",
      afterText: "A solid wood piece that lasts a lifetime.",
      microcopy:
        "Every board is different. The wood makes it unique.",
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
        "How each board is made — step by step, without rushing.",
      cta: "See full process",
    },
    socialProof: {
      quote1: "I bought it as a gift and they absolutely loved it.",
      quote2: "Arrived perfectly packed and even more beautiful than expected.",
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
        "This is how each board is made. No shortcuts.",
      woodSelection: "Wood Selection",
      woodSelectionText:
        "We pick local solid wood by hand. Each piece has a different grain — that's what makes every board one of a kind.",
      handSanding: "Hand Sanding",
      handSandingText:
        "Every surface is sanded by hand until it feels right. No machines.",
      finishing: "Natural Finishing",
      finishingText:
        "We finish with natural oils only. Nothing artificial.",
      philosophy: "Craft Philosophy",
      philosophyText:
        "We don't do mass production. Each board takes the time it takes.",
    },
    shippingPage: {
      title: "Shipping & Guarantee",
      subtitle: "We ship your board carefully to anywhere in Argentina.",
      shipping: "Shipping Across Argentina",
      shippingText:
        "We ship nationwide with specialized packaging to protect your board.",
      timeframe: "Delivery Time",
      timeframeText:
        "Buenos Aires, La Plata, City Bell: 3-5 business days. Rest of the country: 7-10 business days.",
      packaging: "Careful Packaging",
      packagingText:
        "We wrap it carefully so it arrives in perfect condition.",
      guarantee: "Satisfaction Guarantee",
      guaranteeText:
        "Not happy with your board? We'll make it right within 30 days.",
      faqTitle: "Frequently Asked Questions",
      faqQ1: "Is shipping included?",
      faqA1: "Yes, shipping is included in the price. No extra costs.",
      faqQ2: "Do you ship to my city?",
      faqA2: "Yes, we ship anywhere in Argentina.",
      faqQ3: "How is the board packaged?",
      faqA3: "We wrap it carefully so it arrives in perfect condition.",
      faqQ4: "What if the board arrives damaged?",
      faqA4: "We'll sort it out. No questions asked.",
      faqQ5: "Can I return the board?",
      faqA5: "Yes, within 30 days of purchase.",
      citiesText: "And many more cities across Argentina.",
      finalCTATitle: "Ready to receive your board?",
      finalCTAButton: "Buy now",
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