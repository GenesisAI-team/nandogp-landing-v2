/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageSquare, CreditCard, Award } from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [conPhone, setConPhone] = useState("");
  const [conEmail, setConEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !conPhone) return;

    // Persist local message thread
    const savedMsg = JSON.parse(localStorage.getItem("nandogp_messages") || "[]");
    savedMsg.unshift({
      id: "msg_" + Date.now(),
      date: new Date().toLocaleDateString("es-ES"),
      name,
      conPhone,
      conEmail,
      message
    });
    localStorage.setItem("nandogp_messages", JSON.stringify(savedMsg));

    setSubmitted(true);
    setName("");
    setConPhone("");
    setConEmail("");
    setMessage("");
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hola NANDO-GP, os escribo desde la sección de contacto de la web. Mi nombre es ${name || "un cliente"}.`);
    window.open(`https://wa.me/34605911930?text=${text}`, "_blank");
  };

  return (
    <section 
      id="contacto" 
      className="relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-20">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 px-3">
          <div className="inline-flex py-1 px-3 rounded-full bg-brand-brown/40 border border-brand-peach/15 text-[10px] font-mono tracking-widest text-brand-sand uppercase mb-4">
            CONTÁCTENOS
          </div>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-brand-white leading-tight uppercase heading-on-bg">
            Atención al Cliente <span className="text-brand-coral font-sans font-light">Soporte 24h</span>
          </h2>
          <p className="text-[0.95rem] sm:text-base font-semibold mt-3 font-sans text-on-bg">
            Solicite soporte preventivo, cotizaciones, o asesoría logística inmediata para mudanzas locales e interprovinciales.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Left Column: Direct Info, Bizum credentials*/}
          <motion.div 
            initial={{ opacity: 0, x: -120, y: -100 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ type: "spring", stiffness: 70, damping: 14, mass: 1.2 }}
            className="lg:col-span-5"
          >
            <div className="p-6 rounded-2xl premium-card space-y-6">
              <div className="space-y-4">
                <h3 className="sm:text-lg font-bold text-transparent bg-gradient-to-r from-brand-coral via-brand-terracota to-brand-coral bg-clip-text uppercase ">INFORMACIÓN DE CONTACTOS</h3>
                <p className="text-xs text-brand-white font-semibold leading-relaxed font-sans">
                  Atendemos de lunes a domingos, incluyendo días festivos y horas especiales en casos de mudanzas nocturnas para oficinas o locales comerciales de España.
                </p>
              </div>

              {/* Quick list info */}
              <div className="space-y-4">
              
              <div className="flex items-center space-x-3.5 p-3.5 rounded-xl bg-brand-dark/95 border border-brand-peach/5 hover:border-brand-peach/20 transition-all">
                <div className="p-2.5 bg-brand-coral rounded-xl border text-brand-white">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-brand-peach/50 font-mono uppercase">Llamadas e Info Directa</p>
                  <a href="tel:+34605911930" className="text-sm font-mono font-bold text-brand-white hover:text-brand-sand transition-all">
                    +34 653 89 63 52
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3.5 p-3.5 rounded-xl bg-brand-dark/95 border border-brand-peach/5 hover:border-brand-peach/20 transition-all">
                <div className="p-2.5 bg-brand-coral rounded-xl border text-brand-white">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-brand-peach/50 font-mono uppercase">Correo electrónico corporativo</p>
                  <a href="mailto:transportesymundanzasnandogp@gmail.com" className="block max-w-full text-xs sm:text-sm font-bold text-brand-white hover:text-brand-sand transition-all leading-tight [overflow-wrap:anywhere]">
                    transportesymundanzasnandogp@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3.5 p-3.5 rounded-xl bg-brand-dark/95 border border-brand-peach/5 hover:border-brand-peach/20 transition-all">
                <div className="p-2.5 bg-brand-coral rounded-xl border text-brand-white">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-brand-peach/50 font-mono uppercase">Horario comercial de respuesta</p>
                  <p className="text-sm font-bold text-brand-white leading-tight font-sans">
                    Lunes a Domingos — 24 Horas
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3.5 p-3.5 rounded-xl bg-brand-dark/95 border border-brand-peach/5 hover:border-brand-peach/20 transition-all">
                <div className="p-2.5 bg-brand-coral rounded-xl border text-brand-white">
                  <CreditCard className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-brand-peach/50 font-mono uppercase">Formas de pago seguras aceptadas</p>
                  <div className="flex flex-wrap items-center gap-1.5 mt-1 ">
                    <span className="text-[10px] font-bold text-sky-400 bg-sky-950/45 px-2 py-0.5 rounded-md border border-sky-400/20">BIZUM</span>
                    <span className="text-[10px] font-bold text-teal-400 bg-teal-950/45 px-2 py-0.5 rounded-md border border-teal-400/20">EFECTIVO</span>
                    <span className="text-[10px] font-bold text-amber-400 bg-amber-950/45 px-2 py-0.5 rounded-md border border-amber-400/20">TRANSFERENCIA</span>
                  </div>
                </div>
              </div>

            </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
