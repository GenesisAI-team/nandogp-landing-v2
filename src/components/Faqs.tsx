/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronDown, Award, Sparkles, MessageSquare, ShieldAlert, ArrowRight, Phone } from "lucide-react";
import { FAQ_DATA } from "../data";

export default function Faqs() {
  const [activeCategory, setActiveCategory] = useState<"todos" | "precios" | "seguridad" | "proceso">("todos");
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setOpenFaqId("faq1");
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  const handleWhatsApp = () => {
    const text = encodeURIComponent("¡Hola NANDO-GP! Me gustaría resolver una duda sobre vuestros servicios de mudanza.");
    window.open(`https://wa.me/34605474930?text=${text}`, "_blank");
  };

  // Categories mapping
  const categoryLabels = [
    { id: "todos", label: "Todas las preguntas" },
    { id: "precios", label: "Precios y Tarifas" },
    { id: "seguridad", label: "Seguro y Seguridad" },
    { id: "proceso", label: "Proceso y Reserva" }
  ];

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    if (activeCategory === "todos") return true;
    return faq.category === activeCategory;
  });

  return (
    <section 
      id="faq" 
      className="py-24 border-y border-brand-peach/10 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block with dynamic entrance */}
        <div className="text-center max-w-2xl mx-auto mb-16 px-3.5">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex py-1 px-3 rounded-full bg-brand-brown/40 border border-brand-peach/15 text-[10px] font-mono tracking-widest text-brand-sand uppercase mb-4"
          >
            DUDAS RESUELTAS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-display font-semibold text-3xl sm:text-4xl text-brand-white leading-tight uppercase heading-on-bg"
          >
            Preguntas Frecuentes <span className="text-brand-coral font-sans font-light">(FAQ)</span>
          </motion.h2>

          <p className="text-[0.95rem] sm:text-base font-semibold mt-3 font-sans text-on-bg">
            Encuentre respuestas rápidas sobre coberturas, cajas de embalaje, planificación y metodología de trabajo en NANDO-GP.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categoryLabels.map((cat) => (
            <button
              id={`faq-cat-filter-${cat.id}`}
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id as any);
                setOpenFaqId(null); // Close active one to let them explore cleanly
              }}
              className={`py-2 px-4 rounded-xl text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id 
                  ? "bg-brand-brown border border-brand-coral text-brand-sand shadow-md" 
                  : "bg-brand-dark/40 border border-brand-peach/10 text-brand-peach hover:text-brand-white hover:bg-brand-brown/30"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic collapse accordion */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openFaqId === faq.id;
              return (
                <motion.div
                  id={faq.idAttribute}
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`rounded-2xl border transition-colors overflow-hidden ${
                    isOpen 
                      ? "premium-card border-brand-bronze/40" 
                      : "premium-card opacity-90"
                  }`}
                >
                  <button
                    id={`faq-accordion-toggle-${faq.id}`}
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full p-5 sm:p-6 flex items-center justify-between text-left cursor-pointer active:bg-brand-brown/20"
                  >
                    <div className="flex items-center space-x-3.5 pr-4">
                      <HelpCircle className={`w-4 h-4 shrink-0 ${isOpen ? "text-brand-coral" : "text-brand-sand/70"}`} />
                      <span className="text-xs bg-gradient-to-r from-brand-coral via-brand-sand/90 to-brand-coral bg-clip-text text-transparent uppercase">
                        {faq.question}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-brand-peach"
                    >
                      <ChevronDown className="w-4 h-4 shrink-0" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-brand-black/35 border-t border-brand-peach/10"
                      >
                        <div className="p-5 sm:p-6 text-[0.8rem] sm:text-sm text-brand-white leading-relaxed font-sans text-left">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Quick helper contact box */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.88 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ type: "spring", stiffness: 100, damping: 12, mass: 0.6 }}
          className="mt-12 p-6 rounded-2xl premium-card flex flex-col justify-between items-center text-center sm:text-left gap-4"
          >
            <div className="space-y-1">
              <h4 className="font-display font-bold text-brand-white text-sm uppercase">¿Su duda no aparece aquí?</h4>
              <p className="text-xs text-brand-peach/70 font-sans">
                Estamos disponibles para conversar por WhatsApp o atender su llamada telefónica en cualquier momento.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:gap-4 gap-2">
              <a
                href="tel:+34653896352"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-terracotta to-brand-coral hover:from-brand-coral hover:to-brand-terracotta text-brand-white font-bold rounded-xl shadow-xl transition-all hover:scale-103 cursor-pointer group"
              >
                <Phone className="w-5 h-5 shrink-0" />
                <span>653 89 63 52</span>
                <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                id="faq-whatsapp-btn"
                onClick={handleWhatsApp}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold rounded-xl transition-all cursor-pointer hover:scale-103"
              >
                <img src="/Whatsapp-button.webp" alt="WhatsApp" className="w-20 h-20 shrink-0 object-contain rounded" />
                <span>Contactar por WhatsApp</span>
              </button>
            </div>
          </motion.div>
        </div>
    </section>
  );
}
