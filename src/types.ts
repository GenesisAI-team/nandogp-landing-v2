/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MovingService {
  id: string;
  idAttribute: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  basePrice: number;
  priceDescriptor: string;
  iconName: string;
  bgImage: string;
}

export interface GoogleReview {
  id: string;
  idAttribute: string;
  authorName: string;
  profilePhotoUrl: string;
  rating: number; // Max 5
  relativeTimeDescription: string;
  text: string;
  isLocal?: boolean;
}

export interface FAQItem {
  id: string;
  idAttribute: string;
  question: string;
  answer: string;
  category: "precios" | "seguridad" | "proceso" | "otros";
}

export interface RouteEstimatorState {
  origin: string;
  destination: string;
  moveSize: "piso-pequeno" | "piso-mediano" | "chalet" | "portes-express";
  servicesSelected: string[];
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  distance: number; // in km
  calculatedCost: number;
  currentStep: number; // 1: Datos mudanza, 2: Servicios Extra, 3: Datos de Contacto y Resumen
}
