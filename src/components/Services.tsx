/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Truck, Wrench, Trash2, Package, Zap, CheckCircle2, ChevronDown, ArrowRight, ShieldCheck } from "lucide-react";
import { MovingService } from "../types";
import { SERVICES_DATA } from "../data";

interface ServicesProps {
  onOpenCalculatorWithService: (serviceId: string) => void;
}

// Icon mapper helper
const IconComponents: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Truck: Truck,
  Wrench: Wrench,
  Trash2: Trash2,
  Refrigerator: Package, // Representing large home furniture/boxes cleanly
  Zap: Zap,
};

export default function Services({ onOpenCalculatorWithService }: ServicesProps) {
  const [activeTab, setActiveTab] = useState<string>(SERVICES_DATA[0].id);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  return (
    <section 
      id="servicios" 
      className="py-24 border-y border-brand-peach/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with nice scroll animations */}
        <div className="text-center max-w-3xl mx-auto mb-20 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex py-1 px-3 rounded-full bg-brand-brown/40 border border-brand-peach/20 text-[10px] font-mono tracking-widest text-brand-sand uppercase mb-4"
          >
            QUÉ HACEMOS POR USTED
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl text-brand-white leading-tight uppercase heading-on-bg"
          >
            Servicios <span className="text-brand-coral font-sans font-light">Especializados</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base mt-4 sm:text-base leading-relaxed font-sans font-bold"
          >
            Ofrecemos soluciones personalizadas y flexibles en mudanzas y transportes por toda España. Cuidado de inicio a fin garantizado con tarifas totalmente cerradas y transparentes.
          </motion.p>
        </div>

        {/* Tab Selection for Big Screens / Interactive Panel */}
        <div className="hidden md:flex justify-center space-x-2 mb-12 p-1.5 rounded-2xl bg-brand-black/50 border border-brand-peach/10 max-w-4xl mx-auto">
          {SERVICES_DATA.map((service) => {
            const Icon = IconComponents[service.iconName] || Truck;
            const isSelected = activeTab === service.id;
            return (
              <button
                id={`service-tab-btn-${service.id}`}
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`flex-1 flex items-center justify-center space-x-2.5 py-3.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isSelected 
                    ? "bg-gradient-to-r from-brand-terracotta to-brand-coral text-brand-white shadow-lg" 
                    : "text-brand-peach/70 hover:text-brand-white hover:bg-brand-brown/30"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{service.title.split(" y ")[0].split(" de ")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Display selected item (Desktop version) */}
        <div className="hidden md:block max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {SERVICES_DATA.filter(s => s.id === activeTab).map((service) => {
              const Icon = IconComponents[service.iconName] || Truck;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-12 gap-8 p-8 rounded-3xl premium-card"
                >
                  {/* Left Side Details */}
                  <div className="col-span-7 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-brand-coral rounded-2xl border border-brand-peach/30 text-brand-white">
                          <Icon className="w-8 h-8" />
                        </div>
                        <div>
                          <h3 className=" font-medium text-2xl uppercase bg-gradient-to-r from-brand-coral to-brand-terracotta bg-clip-text text-transparent tracking-tight">
                            {service.title}
                          </h3>
                          <p className="text-xs text-brand-white font-mono tracking-wider uppercase">
                            NANDO-GP MUDANZAS ESPAÑA
                          </p>
                        </div>
                      </div>

                      <p className="text-medium text-brand-peach/90 leading-relaxed font-sans">
                        {service.longDescription}
                      </p>

                      {/* Tick features list */}
                      <div className="grid grid-cols-1 gap-3 pt-2">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-start space-x-2.5">
                            <CheckCircle2 className="w-4 h-4 text-brand-coral mt-0.5 shrink-0" />
                            <span className="text-xs font-bold text-brand-white/90">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Side Image Layer */}
                  <div className="col-span-5 relative rounded-2xl overflow-hidden min-h-[300px] border border-brand-peach/10 shadow-inner group">
                    <img 
                      src={service.bgImage} 
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1000ms] group-hover:scale-105 saturate-75 contrast-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent" />
                    
                    {/* Tiny safety shield indicator */}
                    <div className="absolute bottom-4 right-4 flex items-center space-x-2.5 bg-brand-dark/90 px-3 py-1.5 rounded-lg border border-brand-peach/20">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span className="text-[10px] text-brand-white font-mono uppercase tracking-wider">Servicio Asegurado</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Mobile Accordion style cards (Staggered Scroll Animations) */}
        <div className="md:hidden space-y-4">
          {SERVICES_DATA.map((service, index) => {
            const Icon = IconComponents[service.iconName] || Truck;
            const isExpanded = expandedCard === service.id;
            return (
              <motion.div
                id={service.idAttribute}
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-2xl premium-card overflow-hidden"
              >
                {/* Header summary button clickable */}
                <button
                  id={`mobile-service-expand-${service.id}`}
                  onClick={() => setExpandedCard(isExpanded ? null : service.id)}
                  className="w-full p-5 flex items-center justify-between text-left cursor-pointer transition-colors active:bg-brand-brown/10"
                >
                  <div className="flex items-center space-x-3.5">
                    <div className="p-2.5 bg-brand-coral rounded-xl border text-brand-white ">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="bg-gradient-to-r from-brand-terracotta to-brand-coral bg-clip-text text-transparent uppercase ">
                        {service.title}
                      </h3>
                     <p className="text-[0.65rem] text-brand-white font-mono tracking-wider uppercase">
                         * NANDO-GP MUDANZAS ESPAÑA
                      </p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-brand-peach"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                {/* Animated content expansion */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-brand-peach/10 bg-brand-black/30"
                    >
                      <div className="p-5 space-y-5">
                        {/* Service Photo */}
                        <div className="relative h-40 rounded-xl overflow-hidden border border-brand-peach/10">
                          <img 
                            src={service.bgImage} 
                            alt={service.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover saturate-75"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
                        </div>

                        <p className="text-medium text-brand-peach leading-relaxed font-sans">
                          {service.longDescription}
                        </p>

                        {/* List items */}
                        <div className="space-y-2">
                          {service.features.map((feature, i) => (
                            <div key={i} className="flex items-start space-x-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-brand-coral mt-0.5 shrink-0" />
                              <span className="text-[11px] font-bold text-brand-white/90">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
