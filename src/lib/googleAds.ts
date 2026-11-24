/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const WHATSAPP_SEND_TO = import.meta.env.VITE_ADS_WHATSAPP_SEND_TO?.trim();
const PHONE_SEND_TO = import.meta.env.VITE_ADS_PHONE_SEND_TO?.trim();

function reportConversion(sendTo: string | undefined, channel: string) {
  if (!sendTo) {
    if (import.meta.env.DEV) {
      console.warn(`[googleAds] Falta el send_to de ${channel}; no se registra la conversión.`);
    }
    return;
  }

  if (typeof window.gtag !== "function") {
    if (import.meta.env.DEV) {
      console.warn("[googleAds] gtag no está disponible; no se registra la conversión.");
    }
    return;
  }

  try {
    window.gtag("event", "conversion", { send_to: sendTo });
  } catch {
    // La medición nunca debe bloquear la acción de contacto.
  }
}

export function trackWhatsAppConversion() {
  reportConversion(WHATSAPP_SEND_TO, "WhatsApp");
}

export function trackPhoneConversion() {
  reportConversion(PHONE_SEND_TO, "llamada");
}
