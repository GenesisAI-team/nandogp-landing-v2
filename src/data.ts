/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MovingService, GoogleReview, FAQItem } from "./types";

export const SERVICES_DATA: MovingService[] = [
  {
    id: "locales-nacionales",
    idAttribute: "service-locales-nacionales",
    title: "Mudanzas Locales y Nacionales",
    description: "Servicio integral de mudanzas en toda España, garantizando el traslado seguro de todo su hogar con la máxima puntualidad.",
    longDescription: "Ya sea que se mude a la calle de al lado o a la otra punta de las península, planificamos cada fase de su mudanza. Contamos con furgones adaptados y personal cualificado que vela por la integridad de sus pertenencias.",
    features: [
      "Cobertura nacional de puerta a puerta",
      "Inventario detallado de cajas y enseres",
      "Seguro de transporte de mercancías incluido",
      "Asesoramiento y planificación de fechas",
      "Precios competitivos y ajustados al volumen real"
    ],
    basePrice: 280,
    priceDescriptor: "precio base medio",
    iconName: "Truck",
    bgImage: ("/Carrousel-Nando-1.webp"),
  },
  {
    id: "montaje-muebles",
    idAttribute: "service-montaje-muebles",
    title: "Montaje y Desmontaje de Muebles",
    description: "Desmontamos con sumo cuidado y volvemos a montar sus armarios, camas y estanterías en su nuevo destino sin complicaciones.",
    longDescription: "Contamos con las herramientas idóneas para trabajar con muebles de cualquier marca (IKEA, Conforama, El Corte Inglés, rústicos, etc.). Protegemos cada tornillo y herraje para que no se pierda nada.",
    features: [
      "Personal experto en montaje y desmontaje de muebles",
      "Herramientas profesionales para desmontar y montar con seguridad",
      "Identificación y cuidado de piezas, tornillos y herrajes durante el traslado",
      "Embalaje protector específico de armarios y camas",
      "Montaje en destino dejando los muebles listos para su uso"
    ],
    basePrice: 45,
    priceDescriptor: "por hora / operario",
    iconName: "Wrench",
    bgImage: ("/Carrousel-Nando-2.webp"),
  },
  {
    id: "vaciados",
    idAttribute: "service-vaciados",
    title: "Vaciado de Locales, Oficinas y Pisos",
    description: "Despejamos cualquier inmueble retirando todos los enseres, muebles viejos y residuos para depositarlos en puntos limpios autorizados.",
    longDescription: "Si necesita entregar un piso de alquiler limpio, vaciar un trastero abarrotado o despejar un local comercial completo, nos encargamos de todo con rapidez y absoluta discreción.",
    features: [
      "Nos encargamos de retirar muebles y enseres que ya no necesitas",
      "Vaciado organizado de viviendas, trasteros, oficinas y locales",
      "Separación básica de materiales para facilitar su correcta gestión",
      "Traslado a puntos autorizados cuando sea necesario",
      "Servicio ágil, ordenado y con presupuesto adaptado al volumen"
    ],
    basePrice: 150,
    priceDescriptor: "desde",
    iconName: "Trash2",
    bgImage: ("/Carrousel-Nando-3.webp")
  },
  {
    id: "muebles-electrodomesticos",
    idAttribute: "service-muebles-electrodomesticos",
    title: "Transporte de Muebles y Electrodomésticos",
    description: "Traslado seguro de objetos voluminosos individuales como lavadoras, neveras, sofás o pianos con protección de burbuja de alta resistencia.",
    longDescription: "No arriesgue su espalda ni dañe sus electrodomésticos. Disponemos de carretillas especiales, rampas y correas de carga para mover objetos pesados por escaleras de forma totalmente óptima.",
    features: [
      "Protegemos los muebles y electrodomésticos con mantas, film y materiales adecuados",
      "Preparación segura de lavadoras, frigoríficos, sofás, mesas y muebles voluminosos",
      "Carga y descarga cuidadosa para evitar golpes, roces o daños en la vivienda",
      "Traslado adaptado a escaleras, ascensores estrechos o accesos complicados",
      "Colocación en destino en la estancia indicada por el cliente"
    ],
    basePrice: 75,
    priceDescriptor: "por viaje local",
    iconName: "Refrigerator",
    bgImage: ("/Carrousel-Nando-4.webp")
  },
  {
    id: "portes-express",
    idAttribute: "service-portes-express",
    title: "Portes Express / Urgentes",
    description: "Envíos directos y urgentes a cualquier hora para mudanzas pequeñas o entregas puntuales que no pueden esperar en absoluto.",
    longDescription: "Pensado para traslados pequeños, entregas urgentes o recogidas puntuales que necesitan una respuesta rápida. Organizamos el porte de forma directa, ajustándonos al volumen, la distancia y la disponibilidad para que el servicio sea ágil, claro y sin complicaciones.",
    features: [
      "Salidas inmediatas en furgonetas dedicadas",
      "Carga y descarga express a pie de calle",
      "Seguimiento telefónico en tiempo real",
      "Flexibilidad horaria absoluta 24/7 bajo aviso",
      "Tarifa económica optimizada a volumen real"
    ],
    basePrice: 50,
    priceDescriptor: "tarifa inicial",
    iconName: "Zap",
    bgImage: ("/Carrousel-Nando-5.webp")
  }
];

export const INITIAL_REVIEWS: GoogleReview[] = [
  {
    id: "rev1",
    idAttribute: "rev-item-juan",
    authorName: "Juan Francisco López",
    profilePhotoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120",
    rating: 5,
    relativeTimeDescription: "Hace 2 días",
    text: "Increíble servicio. Tenía una mudanza súper complicada de un piso sin ascensor y NANDO-GP lo solucionó en un abrir y cerrar de ojos. El desmontaje del armario enorme de madera maciza fue impecable. Muy recomendables y súper económicos en España."
  },
  {
    id: "rev2",
    idAttribute: "rev-item-antonia",
    authorName: "María Antonia Ruiz",
    profilePhotoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120",
    rating: 5,
    relativeTimeDescription: "Hace 1 semana",
    text: "El porte express salvó mi fin de semana. Compré un sofá gigante por internet y en menos de 3 horas NANDO-GP lo tenía metido en mi salón. Trato súper amable y cuidadoso con la pintura de las paredes al subirlo. 10 de 10 estrellas."
  },
  {
    id: "rev3",
    idAttribute: "rev-item-carlos",
    authorName: "Carlos Mendoza S.",
    profilePhotoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120",
    rating: 5,
    relativeTimeDescription: "Hace 3 semanas",
    text: "Hicieron el vaciado de mi oficina en Madrid. Cumplieron con los plazos perfectamente, organizaron el reciclaje del material electrónico en el punto autorizado y me dejaron todo barrido. Súper profesionales, educados y eficientes."
  },
  {
    id: "rev4",
    idAttribute: "rev-item-sofia",
    authorName: "Sofía Vázquel Gil",
    profilePhotoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120",
    rating: 5,
    relativeTimeDescription: "Hace 1 mes",
    text: "Me daba miedo trasladar mi nevera americana y varias vitrinas de cristal. NANDO-GP envolvió todo en un film especial gruesísimo y llegó intacto. Los chicos tienen una fuerza impresionante y una sonrisa que da mucha tranquilidad. El precio fue justo el presupuestado."
  },
  {
    id: "rev5",
    idAttribute: "rev-item-javier",
    authorName: "Javier Herranz",
    profilePhotoUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=120",
    rating: 5,
    relativeTimeDescription: "Hace 2 meses",
    text: "Mudanza nacional desde Barcelona a Valencia completada sin un solo roce. La mudanza más tranquila de toda mi vida. Se encargaron de todo el montaje en la casa nueva. Atienden WhatsApp súper rápido y te dan total confianza."
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq1",
    idAttribute: "faq-q1",
    question: "¿Con cuánta antelación debo reservar mi mudanza?",
    answer: "Recomendamos reservar con al menos 1 o 2 semanas de antelación para asegurar la fecha deseada, especialmente a final de mes o fines de semana que suelen ser fechas de alta demanda. No obstante, gracias a nuestro servicio de Portes Express podemos atender urgencias en 24/48 horas según disponibilidad.",
    category: "proceso"
  },
  {
    id: "faq2",
    idAttribute: "faq-q2",
    question: "¿Cómo se calculan las tarifas de transporte y mudanza?",
    answer: "El precio se ajusta de forma transparente en base a tres factores: la distancia (kilómetros entre origen y destino), el volumen y peso de los enseres (tamaño del camión/furgoneta) y los servicios adicionales solicitados (embalaje de cajas, desmontaje e instalación de armarios/camas, elevadores exteriores). Puede utilizar nuestra calculadora en vivo para obtener un presupuesto aproximado.",
    category: "precios"
  },
  {
    id: "faq3",
    idAttribute: "faq-q3",
    question: "¿Mis objetos y muebles están asegurados durante el transporte?",
    answer: "Sí, todos los traslados y mudanzas realizados por NANDO-GP incluyen por defecto un seguro de mercancías de alta cobertura. Además, todos nuestros furgones cuentan con equipamiento homologado de fijación para que nada sufra rozaduras ni movimientos peligrosos durante el viaje.",
    category: "seguridad"
  },
  {
    id: "faq4",
    idAttribute: "faq-q4",
    question: "¿NANDO-GP realiza el embalaje de objetos frágiles?",
    answer: "¡Por supuesto! Ofrecemos un servicio premium donde nuestro equipo embala minuciosamente vajillas, obras de arte, vajilla de cocina y ropa usando cajas de cartón de doble canal, envoltorios de burbujas antigolpes y papel de protección específico. Si prefiere empaquetar usted mismo, podemos facilitarle las cajas con anterioridad.",
    category: "proceso"
  },
  {
    id: "faq5",
    idAttribute: "faq-q5",
    question: "¿Qué ocurre si en el destino de la mudanza es difícil aparcar?",
    answer: "En NANDO-GP gestionamos la obtención de permisos municipales de ocupación de vía si es necesario en las zonas céntricas de las ciudades de España. Colocamos señalización previa y llevamos camiones de diferentes tonelajes para sortear calles estrechas sin interrumpir el tráfico local.",
    category: "seguridad"
  },
  {
    id: "faq6",
    idAttribute: "faq-q6",
    question: "¿Cuáles son las formas de pago admitidas?",
    answer: "Aceptamos pago al contado (efectivo), transferencia bancaria justificada, y cobro rápido a través de Bizum para una comodidad absoluta en el momento de completar su traslado.",
    category: "precios"
  }
];
