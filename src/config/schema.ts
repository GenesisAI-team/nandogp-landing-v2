/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SERVICES_DATA, FAQ_DATA } from "../data";

const BASE_URL = "https://www.transportesnandogp.com";

// ─── WebSite ───────────────────────────────────────────
export const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "NANDO-GP Mudanzas",
  url: BASE_URL,
  description:
    "Mudanzas baratas en Pamplona y Navarra. Portes express, montaje de muebles y vaciado de locales con presupuesto sin compromiso y precios competitivos en toda España.",
  inLanguage: "es",
};

// ─── MovingCompany (LocalBusiness) ────────────────────
export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: "NANDO-GP Mudanzas",
  url: BASE_URL,
  telephone: "+34605474930",
  email: "eonandogp@gmail.com",
  description:
    "Mudanzas baratas en Pamplona y Navarra. Presupuesto sin compromiso con precios competitivos. Mudanzas locales, nacionales, portes express, montaje de muebles y vaciado de locales en toda España. Servicio asegurado con cobertura nacional.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "C/ Mayor 15, 1.5",
    addressLocality: "Burlada",
    addressRegion: "Navarra",
    postalCode: "31600",
    addressCountry: "ES",
  },
  areaServed: [
    { "@type": "City", name: "Pamplona" },
    { "@type": "State", name: "Navarra" },
    { "@type": "Country", name: "ES" },
  ],
  priceRange: "€€",
};

// ─── Service (x5) ─────────────────────────────────────
export const SERVICES_SCHEMA = SERVICES_DATA.map((service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.title,
  description: service.description,
  provider: {
    "@type": "MovingCompany",
    name: "NANDO-GP Mudanzas",
    areaServed: "España",
  },
  areaServed: { "@type": "Country", name: "ES" },
  offers: {
    "@type": "Offer",
    description:
      "Presupuesto personalizado sin compromiso. Precio competitivo ajustado al volumen, distancia y servicios extra solicitados.",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "EUR",
      description:
        "Presupuesto económico adaptado a cada cliente. Solicite valoración gratis por WhatsApp.",
    },
  },
}));

// ─── FAQPage ──────────────────────────────────────────
export const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_DATA.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

// ─── Combined homepage schemas ────────────────────────
export const HOMEPAGE_SCHEMA = [
  WEBSITE_SCHEMA,
  LOCAL_BUSINESS_SCHEMA,
  ...SERVICES_SCHEMA,
  FAQ_SCHEMA,
];

// ─── BreadcrumbList (legal pages) ─────────────────────
export function getBreadcrumbSchema(slug: string, label: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: `${BASE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: label,
        item: `${BASE_URL}/${slug}`,
      },
    ],
  };
}
