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
      className="py-24 relative"
    >
      <div className="absolute top-[20%] right-[10%] w-[35%] h-[35%] rounded-full bg-gradient-to-br from-brand-brown/40 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[10%] w-[35%] h-[35%] rounded-full bg-gradient-to-tr from-brand-terracotta/25 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex py-1 px-3 rounded-full bg-brand-brown/40 border border-brand-peach/15 text-[10px] font-mono tracking-widest text-brand-sand uppercase mb-4">
            CONTÁCTENOS
          </div>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-brand-white leading-tight uppercase heading-on-bg">
            Atención al Cliente <span className="text-brand-coral font-sans font-light">Soporte 24h</span>
          </h2>
          <p className="text-xs sm:text-sm text-brand-sand mt-3 font-sans text-on-bg">
            Solicite soporte preventivo, cotizaciones, o asesoría logística inmediata para mudanzas locales e interprovinciales.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Left Column: Direct Info, Bizum credentials, schematic map */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="space-y-4">
              <h3 className="font-display font-extrabold text-lg text-brand-white uppercase">INFORMACIÓN DE CONTACTOS</h3>
              <p className="text-xs text-brand-peach/60 leading-relaxed font-sans">
                Atendemos de lunes a domingos, incluyendo días festivos y horas especiales en casos de mudanzas nocturnas para oficinas o locales comerciales de España.
              </p>
            </div>

            {/* Quick list info */}
            <div className="space-y-4">
              
              <div className="flex items-center space-x-3.5 p-3.5 rounded-xl bg-brand-dark/95 border border-brand-peach/5 hover:border-brand-peach/20 transition-all">
                <div className="p-2.5 bg-brand-brown/85 rounded-lg border border-brand-peach/20 text-brand-sand">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-brand-peach/50 font-mono uppercase">Llamadas e Info Directa</p>
                  <a href="tel:+34605911930" className="text-sm font-mono font-bold text-brand-white hover:text-brand-sand transition-all">
                    +34 605 911 930
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3.5 p-3.5 rounded-xl bg-brand-dark/95 border border-brand-peach/5 hover:border-brand-peach/20 transition-all">
                <div className="p-2.5 bg-brand-brown/85 rounded-lg border border-brand-peach/20 text-brand-sand">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-brand-peach/50 font-mono uppercase">Correo electrónico corporativo</p>
                  <a href="mailto:soporte@nandogp.es" className="text-sm font-bold text-brand-white hover:text-brand-sand transition-all">
                    soporte@nandogp.es
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3.5 p-3.5 rounded-xl bg-brand-dark/95 border border-brand-peach/5 hover:border-brand-peach/20 transition-all">
                <div className="p-2.5 bg-brand-brown/85 rounded-lg border border-brand-peach/20 text-brand-sand">
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
                <div className="p-2.5 bg-brand-brown/85 rounded-lg border border-brand-peach/20 text-brand-sand">
                  <CreditCard className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-brand-peach/50 font-mono uppercase">Formas de pago seguras aceptadas</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-[10px] font-bold text-sky-400 bg-sky-950/45 px-2 py-0.5 rounded-md border border-sky-400/20">BIZUM</span>
                    <span className="text-[10px] font-bold text-teal-400 bg-teal-950/45 px-2 py-0.5 rounded-md border border-teal-400/20">EFECTIVO</span>
                    <span className="text-[10px] font-bold text-amber-400 bg-amber-950/45 px-2 py-0.5 rounded-md border border-amber-400/20">TRANSFERENCIA</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Micro visual map with pins indicating national coverage */}
            <div className="p-5 rounded-2xl bg-brand-dark/90 border border-brand-peach/10">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-bold text-brand-white uppercase">Cobertura en España</p>
                <div className="flex items-center space-x-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-[9px] text-brand-sand tracking-widest font-mono uppercase">Rutas Activas</span>
                </div>
              </div>
              <p className="text-[11px] text-brand-peach/60 font-sans mb-4">
                Prestamos servicios permanentes en toda la Península, especializándonos en mudanzas entre las principales provincias: Madrid, Barcelona, Valencia, Zaragoza, Sevilla, Burgos, etc.
              </p>

              {/* Graphical outline map illustration */}
              <div className="h-32 bg-brand-black/50 border border-brand-peach/5 rounded-xl relative overflow-hidden flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full opacity-10 stroke-brand-peach fill-none" viewBox="0 0 100 100">
                  <path d="M 30,10 C 45,5 65,3 85,20 C 95,35 90,60 80,75 C 70,88 55,95 38,90 C 20,85 10,70 12,50 C 13,30 18,15 30,10 Z" strokeWidth="1" />
                  <path d="M 40,25 Q 55,30 75,55 L 85,75" strokeWidth="1.5" strokeDasharray="3,3" />
                  <path d="M 22,45 Q 45,45 75,55" strokeWidth="1" strokeDasharray="4,2" />
                </svg>

                {/* Simulated Pins */}
                <span className="absolute top-[25%] left-[45%] w-2 h-2 rounded-full bg-brand-coral" title="Madrid (Sede Principal)" />
                <span className="absolute top-[25%] left-[43%] text-[9px] font-mono text-brand-sand select-none font-bold">Mad</span>

                <span className="absolute top-[32%] left-[80%] w-1.5 h-1.5 rounded-full bg-brand-peach" title="Barcelona" />
                <span className="absolute top-[48%] left-[68%] w-1.5 h-1.5 rounded-full bg-brand-peach" title="Valencia" />
                <span className="absolute top-[75%] left-[32%] w-1.5 h-1.5 rounded-full bg-brand-peach" title="Andalucía" />
                <span className="absolute top-[18%] left-[18%] w-1.5 h-1.5 rounded-full bg-brand-peach" title="Galicia" />
                
                <span className="absolute bottom-2 right-3 text-[9px] font-mono text-brand-peach/40 uppercase">NANDO-GP Tránsito</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            
            <div className="p-6 sm:p-10 rounded-3xl premium-card relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand-terracotta/10 to-transparent pointer-events-none" />
              
              <h3 className="font-display font-extrabold text-lg text-brand-white uppercase mb-2">SOLICITUD DE INFORMACIÓN</h3>
              <p className="text-xs text-brand-peach/60 font-sans mb-8">
                ¿Necesita una mudanza urgente? Escríbanos a continuación y uno de nuestros operarios valorará su solicitud de inmediato.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center justify-center text-center space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-950 flex items-center justify-center text-emerald-400 border border-emerald-500/35">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-display font-bold text-sm text-brand-white uppercase">¡Mensaje Enviado con éxito!</h4>
                    <p className="text-xs text-brand-peach/70 max-w-sm">
                      Hemos recibido sus datos de contacto. Le llamaremos en los próximos minutos o le mandaremos presupuesto formal.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-5">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1 text-left">
                      <label className="text-[10px] font-mono text-brand-peach/75 uppercase">Nombre Completo *</label>
                      <input 
                        id="contact-input-name"
                        type="text"
                        required
                        placeholder="Ej. Manuel Antonio"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-brand-black/60 border border-brand-peach/15 focus:border-brand-coral text-brand-white text-xs rounded-xl p-3.5 outline-none font-sans"
                      />
                    </div>

                    <div className="space-y-1 text-left">
                      <label className="text-[10px] font-mono text-brand-peach/75 uppercase">Teléfono Móvil *</label>
                      <input 
                        id="contact-input-phone"
                        type="tel"
                        required
                        placeholder="Ej. 605 911 930"
                        value={conPhone}
                        onChange={(e) => setConPhone(e.target.value)}
                        className="w-full bg-brand-black/60 border border-brand-peach/15 focus:border-brand-coral text-brand-white text-xs rounded-xl p-3.5 outline-none font-sans"
                      />
                    </div>
                  </div>

                  <div className="space-y-1 text-left">
                    <label className="text-[10px] font-mono text-brand-peach/75 uppercase">Correo electrónico (Opcional)</label>
                    <input 
                      id="contact-input-email"
                      type="email"
                      placeholder="Ej. manuel@página.com"
                      value={conEmail}
                      onChange={(e) => setConEmail(e.target.value)}
                      className="w-full bg-brand-black/60 border border-brand-peach/15 focus:border-brand-coral text-brand-white text-xs rounded-xl p-3.5 outline-none font-sans"
                    />
                  </div>

                  <div className="space-y-1 text-left">
                    <label className="text-[10px] font-mono text-brand-peach/75 uppercase">Detalles / Mensaje / Tipo de mudanza</label>
                    <textarea 
                      id="contact-textarea-msg"
                      rows={4}
                      placeholder="Indique si necesita embalaje, desmontaje de muebles, un porte puntual de electrodoméstico o vaciado..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-brand-black/60 border border-brand-peach/15 focus:border-brand-coral text-brand-white text-xs rounded-xl p-3.5 outline-none resize-none font-sans"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-3">
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      className="flex-1 flex items-center justify-center space-x-2 py-3.5 bg-gradient-to-r from-brand-terracotta to-brand-coral hover:from-brand-coral hover:to-brand-terracotta text-brand-white text-xs font-bold rounded-xl shadow-lg transition-all cursor-pointer hover:scale-[1.01]"
                    >
                      <Send className="w-4 h-4" />
                      <span>Enviar Solicitud</span>
                    </button>

                    <button
                      id="contact-whatsapp-btn"
                      type="button"
                      onClick={handleWhatsApp}
                      className="flex-1 flex items-center justify-center space-x-2 py-3.5 bg-brand-black border border-brand-peach/30 hover:bg-brand-brown text-brand-sand hover:text-brand-white text-xs font-bold rounded-xl transition-all cursor-pointer hover:scale-[1.01]"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-400" />
                      <span>Chatear por WhatsApp</span>
                    </button>
                  </div>

                </form>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
