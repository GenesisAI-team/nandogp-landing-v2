/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface SEOData {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

const BASE_URL = "https://www.transportesnandogp.com";
const OG_IMAGE = `${BASE_URL}/og-nando-image.jpg`;

const SITE_NAME = "NANDO-GP Mudanzas";

export const SEO_HOME: SEOData = {
  title: "NANDO-GP Mudanzas | Mudanzas y Transportes en toda España",
  description:
    "Mudanzas en Navarra y toda España. Servicio profesional de mudanzas locales, nacionales, de oficina, portes express, embalaje y montaje de muebles. Presupuesto sin compromiso.",
  canonical: `${BASE_URL}/`,
  ogTitle: `${SITE_NAME} | Mudanzas y Portes Express en toda España`,
  ogDescription:
    "Especialistas en mudanzas locales, nacionales y de oficina con embalaje profesional, portes express y montaje de muebles. Servicio asegurado en toda España.",
  ogImage: OG_IMAGE,
};

export const SEO_AVISO_LEGAL: SEOData = {
  title: "Aviso Legal | NANDO-GP Mudanzas",
  description:
    "Aviso Legal de NANDO-GP Mudanzas. Información del titular del sitio web, condiciones de uso, propiedad intelectual y legislación aplicable a nuestros servicios de mudanzas.",
  canonical: `${BASE_URL}/aviso-legal`,
};

export const SEO_PRIVACIDAD: SEOData = {
  title: "Política de Privacidad | NANDO-GP Mudanzas",
  description:
    "Política de Privacidad de NANDO-GP Mudanzas. Conozca cómo tratamos sus datos personales al solicitar presupuestos de mudanzas y portes en Navarra y toda España.",
  canonical: `${BASE_URL}/privacidad`,
};

export const SEO_TERMINOS: SEOData = {
  title: "Términos y Condiciones | NANDO-GP Mudanzas",
  description:
    "Términos y Condiciones de NANDO-GP Mudanzas. Condiciones de contratación de mudanzas y portes, precios, cancelaciones y derechos del cliente.",
  canonical: `${BASE_URL}/terminos`,
};

export const SEO_COOKIES: SEOData = {
  title: "Política de Cookies | NANDO-GP Mudanzas",
  description:
    "Política de Cookies de NANDO-GP Mudanzas. Información sobre el uso exclusivo de cookies técnicas necesarias en nuestro sitio web de mudanzas y portes.",
  canonical: `${BASE_URL}/cookies`,
};

export function getLegalSEO(slug: string): SEOData | null {
  switch (slug) {
    case "aviso-legal":
      return SEO_AVISO_LEGAL;
    case "privacidad":
      return SEO_PRIVACIDAD;
    case "terminos":
      return SEO_TERMINOS;
    case "cookies":
      return SEO_COOKIES;
    default:
      return null;
  }
}
