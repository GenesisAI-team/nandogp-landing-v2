/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import SidebarMenu from "./components/SidebarMenu";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import Faqs from "./components/Faqs";
import ContactForm from "./components/ContactForm";
import SectionTransition from "./components/SectionTransition";
import { ShieldCheck, ArrowUp } from "lucide-react";

const PHONE_NUMBER = "+34 605 47 49 30";

export default function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="nando-bg min-h-screen text-brand-white font-sans selection:text-brand-white relative overflow-x-hidden">
      {/* Global Background Gradients - Elegant Dark Theme */}
    
      <Header phone={PHONE_NUMBER} />

      {/* 
        The Fixed Menu on the right side "nando GP"
        Stays completely vertical and fixed in matching gold vertical alignment poster lettering

    

      */}
      
      <SidebarMenu 
        phone={PHONE_NUMBER} 
      />

      {/* Main Content Sections */}
      <main>
        
        {/* HERO SECTION (Includes Slogans & Drag Stack Photos of transport) */}
        <Hero 
          phone={PHONE_NUMBER} 
        />


        {/* SERVICES SECTION */}
        <Services />

        <SectionTransition src="/Transition-1-No-bg.webp" />

        {/* GOOGLE REVIEWS SECTION */}
        <Reviews />

        <SectionTransition src="/Transition-2-No-bg.webp" />

        {/* FAQS SECTION */}
        <Faqs />

        <SectionTransition src="/Transition-3-No-bg.webp" />

        {/* CONTACT / España Map Location SECTION */}
        <ContactForm />

      </main>

      {/* Beautiful cohesive elegant footer */}
      <footer className="bg-brand-black border-t border-brand-peach/10 py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-brand-peach/5">
            
            {/* Branding Column */}
            <div className="md:col-span-5 space-y-4">
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
                <p>📞 Whatsapp / Tel: <strong className="text-brand-white">{PHONE_NUMBER}</strong></p>
                <p>✉ Soporte: <strong className="text-brand-white">soporte@nandogp.es</strong></p>
                <p>📍 Central Operativa: Madrid, España</p>
              </div>
            </div>

          </div>

          {/* Legal / Bottom footer */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-brand-peach/40 font-mono gap-4">
            
            <p>© 2026 NANDO-GP Mudanzas y Transportes. Todos los derechos reservados. Diseñado con total fluidez y dinamismo.</p>
            
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-white transition-all">Política de Privacidad</a>
              <span>•</span>
              <a href="#" className="hover:text-brand-white transition-all">Términos del Servicio</a>
              <span>•</span>
              <a href="#" className="hover:text-brand-white transition-all">Seguro de Carga (LOTT)</a>
            </div>

          </div>

        </div>

        {/* Scroll back to top button */}
        <button
          id="scroll-to-top-btn"
          onClick={scrollToTop}
          className="absolute right-8 bottom-8 p-3 rounded-full bg-brand-brown hover:bg-brand-terracotta text-brand-white border border-brand-peach/25 shadow-xl cursor-pointer hover:scale-105 active:scale-95 transition-all"
          title="Subir al inicio"
        >
          <ArrowUp className="w-4 h-4 text-brand-sand" />
        </button>

      </footer>

    </div>
  );
}
