/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { ShieldCheck } from "lucide-react";
import GoogleRatingCard from "./GoogleRatingCard";
import LegalSheet from "./LegalSheet";
import { GOOGLE_REVIEWS } from "../config/googleReviews";
import { LegalDocType } from "../types";

const PHONE_NUMBER = "+34 605 47 49 30";

const LEGAL_LINKS: { label: string; href: string; section: Exclude<LegalDocType, null> }[] = [
  { label: "Aviso Legal", href: "/aviso-legal", section: "aviso-legal" },
  { label: "Política de Privacidad", href: "/privacidad", section: "privacidad" },
  { label: "Términos y Condiciones del Servicio", href: "/terminos", section: "terminos" },
  { label: "Política de Cookies", href: "/cookies", section: "cookies" },
];

export default function Footer() {
  const [legalOpen, setLegalOpen] = useState<LegalDocType>(null);
  return (
    <footer className="bg-brand-black border-t border-brand-peach/10 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-brand-peach/5">
          
          {/* Branding Column */}
          <div className="flex flex-col items-center md:col-span-5 space-y-4">
            <span className="font-display font-extrabold text-3xl uppercase text-gradient-gold">
              NANDO<span className="font-sans font-light text-brand-coral ml-1">-GP</span>
            </span>
            <p className="text-xs text-brand-peach/60 max-w-sm leading-relaxed font-sans">
              Líderes en servicios de transporte y logística integral en España. Llevamos su hogar, oficina, o bulto express a destino velando por la absoluta seguridad de cada componente.
            </p>
            
            <div className="flex items-center space-x-2 text-xs font-mono text-brand-sand">
              <ShieldCheck className="w-4 h-4 text-brand-coral" />
              <span>Empresa Certificada y Asegurada</span>
            </div>
          </div>

          {/* Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-brand-white">EXPLORAR</h4>
            <ul className="space-y-2 text-xs text-brand-peach/70 font-sans">
              <li><a href="#inicio" className="hover:text-brand-white transition-all">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-brand-white transition-all">Servicios de Mudanza</a></li>
              <li><a href="#faq" className="hover:text-brand-white transition-all">Preguntas Frecuentes</a></li>
              <li><a href="#opiniones" className="hover:text-brand-white transition-all">Opiniones Reales de Google</a></li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-brand-white">NANDO-GP MUDANZAS ESPAÑA</h4>
            <p className="text-xs text-brand-peach/60 leading-normal font-sans">
              Para reservas extraordinarias, incidencias o reclamaciones directas:
            </p>
            <div className="font-mono text-xs space-y-1 text-brand-sand">
              <p>📞 Tel: <strong className="text-brand-white">+34 653 89 63 52</strong></p>
              <p>📞 Whatsapp: <strong className="text-brand-white">{PHONE_NUMBER}</strong></p>
              <p>✉ Soporte: <strong className="text-brand-white">transportesymudanzasnandogp
                @gmail.com</strong></p>
              <p>📍 Central Operativa: Pamplona, España</p>
            </div>
          </div>

          <div className="md:col-span-12 md:col-start-2 flex justify-center pt-4">
            <GoogleRatingCard
              rating={GOOGLE_REVIEWS.rating}
              reviewCount={GOOGLE_REVIEWS.reviewCount}
              href={GOOGLE_REVIEWS.viewReviewsUrl}
              businessName={GOOGLE_REVIEWS.businessName}
              size="md"
            />
          </div>

        </div>

        {/* Legal / Bottom footer */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-brand-peach/40 font-mono gap-4">
          
          <p>© 2026 NANDO-GP Mudanzas y Transportes. Todos los derechos reservados. Diseñado con total fluidez y dinamismo.</p>
          
          <div className="flex space-x-4">
            {LEGAL_LINKS.map((link, i) => (
              <span key={link.section} className="flex items-center space-x-4">
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setLegalOpen(link.section);
                  }}
                  className="hover:text-brand-white transition-all"
                >
                  {link.label}
                </a>
                {i < LEGAL_LINKS.length - 1 && <span>•</span>}
              </span>
            ))}
          </div>

        </div>

      </div>

      <LegalSheet
        isOpen={legalOpen !== null}
        onClose={() => setLegalOpen(null)}
        section={legalOpen}
      />

    </footer>
  );
}