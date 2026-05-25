/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Phone, ShieldCheck, Heart, Clock } from "lucide-react";

interface HeroProps {
  onOpenCalculator: () => void;
  phone: string;
}

interface StackPhoto {
  id: number;
  url: string;
  title: string;
  tag: string;
  desc: string;
}

const PHOTOS_STACK: StackPhoto[] = [
{
  id: 1,
  url: "/Furgoneta-Prod3.png",
  title: "Transporte Seguro",
  tag: "FLOTA HOMOLOGADA",
  desc: "Vehículos equipados para realizar portes, mudanzas y traslados con una carga ordenada y bien sujeta."
},
{
  id: 2,
  url: "/Furgoneta-Prod2.png",
  title: "Protección de Enseres",
  tag: "EMBALAJE PREMIUM",
  desc: "Envolvemos muebles, cajas y objetos delicados con materiales adecuados para evitar golpes, roces o daños durante el traslado."
},
{
  id: 3,
  url: "/Furgoneta-Prod4.png",
  title: "Montaje y Desmontaje",
  tag: "MONTAJE EXPERTO",
  desc: "Desmontamos y montamos muebles voluminosos cuando el traslado lo requiere, cuidando piezas, tornillos y estructuras."
},
{
  id: 4,
  url: "/Furgoneta-Prod5.png",
  title: "Portes Express",
  tag: "RAPIDEZ ABSOLUTA",
  desc: "Servicio ágil para mover muebles sueltos, electrodomésticos, compras, cajas o entregas puntuales sin montar una mudanza completa."
},
{
  id: 5,
  url: "/Furgoneta-Prod6.png",
  title: "Vaciado de Espacios",
  tag: "VACIADO PROFESIONAL",
  desc: "Retiramos muebles, enseres y objetos voluminosos de pisos, trasteros, garajes o locales, adaptándonos al volumen del vaciado."
}
];

export default function Hero({ onOpenCalculator, phone }: HeroProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % PHOTOS_STACK.length);
  };

  const activePhoto = PHOTOS_STACK[activeIndex];

  const handleWhatsApp = () => {
    const text = encodeURIComponent("¡Hola NANDO-GP! Acabo de ver vuestra web y me gustaría preguntar por vuestras tarifas de mudanzas.");
    window.open(`https://wa.me/34605911930?text=${text}`, "_blank");
  };

  return (
    <section 
      id="inicio"
      className="relative min-h-[95vh] pt-24 flex flex-col justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-5 items-center">
          
          {/* Main Slogan & Headings Block */}
          <div className="lg:col-span-7 flex flex-col space-y-8 text-left lg:pr-6 p-6 sm:p-10 rounded-3xl premium-card">
            
            {/* Quick trust tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex self-start py-1.5 px-3 rounded-full bg-brand-brown/60 border border-brand-peach/20 text-xs font-mono text-brand-sand tracking-widest uppercase"
            >
              <span>NANDO-GP MUDANZAS EN ESPAÑA</span>
            </motion.div>

            {/* Poster Header "MUDANZAS Y TRANSPORTES" matching typography and colors */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-display font-extrabold text-[44px] sm:text-[64px] md:text-[76px] leading-[0.9] uppercase tracking-tighter"
              >
                MUDANZAS
                <span className="block text-brand-coral font-sans font-light tracking-[0.25em] text-2xl sm:text-5xl md:text-6xl mt-1 select-none">
                  Y TRANSPORTES.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base sm:text-lg  max-w-2xl leading-relaxed font-sans font-medium"
              >
                Hacemos realidad su traslado sin estrés. Especialistas en mudanzas del hogar, locales y nacionales, montaje meticuloso de muebles, vaciado rápido de inmuebles y portes express garantizados al mejor precio nacional.
              </motion.p>
            </div>

            {/* Quick Action Button Drawer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <a
                href="tel:+34653896352"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-terracotta to-brand-coral hover:from-brand-coral hover:to-brand-terracotta text-brand-white font-bold rounded-xl shadow-xl transition-all hover:scale-103 cursor-pointer group"
              >
                <Phone className="w-5 h-5 shrink-0" />
                <span>653 89 63 52</span>
                <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
              </a>

<button
                id="hero-whatsapp-btn"
                onClick={handleWhatsApp}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold rounded-xl transition-all cursor-pointer hover:scale-103"
              >
                <img src="/Whatsapp-button.png" alt="WhatsApp" className="w-20 h-20 shrink-0 object-contain rounded" />
                <span>Contactar por WhatsApp</span>
              </button>
            </motion.div>

            {/* Key Service Highlights on Home Banner with icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="grid grid-cols-3 gap-2 sm:gap-4 border-t border-brand-peach pt-8"
            >
              <div className="flex flex-col space-y-1">
                <div className="flex items-center space-x-1 text-brand-coral">
                  <ShieldCheck className="w-3 h-3" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider">Garantía</span>
                </div>
                <p className="text-xs text-brand-peach/60 leading-normal">Seguros de cobertura a todo riesgo.</p>
              </div>

               <div className="flex flex-col space-y-1">
                <div className="flex items-center space-x-1 text-brand-coral">
                  <ShieldCheck className="w-3 h-3" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider">Urgencias</span>
                </div>
                <p className="text-xs text-brand-peach/60 leading-normal">Portes rápidos y ágiles en 24h.</p>

              </div> <div className="flex flex-col space-y-1">
                <div className="flex items-center space-x-1 text-brand-coral">
                  <ShieldCheck className="w-3 h-3" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider">Confianza</span>
                </div>
                <p className="text-xs text-brand-peach/60 leading-normal">Trato amigable, cercano y educado.</p>
              </div>
            
            </motion.div>

          </div>

          {/* Floating van carousel with info card */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center ">
            
            <div className="relative w-full max-w-[520px]" style={{ minHeight: '520px' }}>
              
              {/* Info card — sits at the bottom, behind the van */}
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={`card-${activePhoto.id}`}
                  custom={direction}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ type: "spring", stiffness: 220, damping: 26 }}
                  className="max-h-[200px] overflow-hidden absolute bottom-0 left-0 right-0 z-10 rounded-2xl border border-brand-peach/18 shadow-2xl px-4 py-4 flex flex-col"
                  style={{ background: "linear-gradient(180deg, rgba(21,16,11,0.97) 0%, rgba(10,6,4,0.98) 100%)" }}
                >
                  {/* Tag badge */}
                  <span className="text-center bg-gradient-to-r from-brand-terracotta to-brand-coral text-brand-white text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md">
                    {activePhoto.tag}
                  </span>

                  {/* Title and description */}
                  <h3 className="font-display uppercase font-bold bg-gradient-to-r from-brand-terracotta to-brand-coral bg-clip-text text-transparent text-lg leading-snug mt-3">
                    {activePhoto.title}
                  </h3>
                  <p className="text-medium leading-relaxed mt-1 line-clamp-4">
                    {activePhoto.desc}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Van image — floating, clickable to advance */}
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={`van-${activePhoto.id}`}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 100, scale: 0.92 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: direction * -100, scale: 0.92 }}
                  transition={{ type: "spring", stiffness: 180, damping: 24 }}
                  className="absolute z-20 left-0 right-0 top-0 hero-van-floating cursor-pointer"
                  style={{ height: '340px' }}
                  onClick={handleNext}
                >
                  <img
                    src={activePhoto.url}
                    alt={activePhoto.title}
                    className="w-full h-full object-contain select-none scale-110 sm:scale-[1.15]"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Minimal dot navigation */}
            <div className="mt-5 mb-5 flex items-center gap-3">
              {PHOTOS_STACK.map((photo, i) => (
                <button
                  key={photo.id}
                  onClick={() => { setDirection(i >= activeIndex ? 1 : -1); setActiveIndex(i); }}
                  className={`rounded-full transition-all duration-300 cursor-pointer ${
                    i === activeIndex
                      ? 'w-3 h-3 bg-brand-terracotta ring-2 ring-brand-terracotta/40 ring-offset-2 ring-offset-brand-black'
                      : 'w-2.5 h-2.5 bg-brand-peach/30 hover:bg-brand-peach/60'
                  }`}
                  title={photo.tag}
                />
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
