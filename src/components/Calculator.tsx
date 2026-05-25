/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calculator, ArrowRight, ArrowLeft, Send, CheckCircle2, Phone, Home, Truck, Users, MessageSquare, Zap } from "lucide-react";

interface CalculatorProps {
  initialServiceId?: string | null;
  onClose?: () => void;
}

export default function CalculatorComponent({ initialServiceId, onClose }: CalculatorProps) {
  const [step, setStep] = useState(1);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [estimatedDistance, setEstimatedDistance] = useState(30); // in km
  
  // Size selection
  const [moveSize, setMoveSize] = useState<"portes" | "piso-pequeno" | "piso-mediano" | "chalet">("piso-pequeno");

  // Extras
  const [extraMontaje, setExtraMontaje] = useState(false);
  const [extraEmbalaje, setExtraEmbalaje] = useState(false);
  const [extraVaciado, setExtraVaciado] = useState(false);
  const [extraOperario, setExtraOperario] = useState(false);

  // Client info
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [formSubmitted, setFormSubmitted] = useState(false);

  // Auto-fill or adjust based on initial service ID if navigated here
  useEffect(() => {
    if (initialServiceId) {
      if (initialServiceId === "portes-express" || initialServiceId === "muebles-electrodomesticos") {
        setMoveSize("portes");
      } else if (initialServiceId === "vaciados") {
        setMoveSize("piso-pequeno");
        setExtraVaciado(true);
      } else if (initialServiceId === "montaje-muebles") {
        setExtraMontaje(true);
      } else if (initialServiceId === "locales-nacionales") {
        setMoveSize("piso-mediano");
        setEstimatedDistance(180);
      }
      setStep(1); // Set to step 1 to proceed with coordinates
    }
  }, [initialServiceId]);

  // Compute live price estimations
  const calculateTotal = () => {
    let basePrice = 80;

    // Adjust based on load size
    switch (moveSize) {
      case "portes":
        basePrice = 60;
        break;
      case "piso-pequeno":
        basePrice = 160;
        break;
      case "piso-mediano":
        basePrice = 280;
        break;
      case "chalet":
        basePrice = 520;
        break;
    }

    // Distance surcharge: e.g. 0.90€ / km after a base inclusion of 15km
    const freeKm = 15;
    const distanceSurcharge = estimatedDistance > freeKm ? (estimatedDistance - freeKm) * 0.95 : 0;

    // Extras
    const extrasPrice = 
      (extraMontaje ? 75 : 0) +
      (extraEmbalaje ? 55 : 0) +
      (extraVaciado ? 110 : 0) +
      (extraOperario ? 90 : 0);

    return Math.round(basePrice + distanceSurcharge + extrasPrice);
  };

  const currentPrice = calculateTotal();

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    // Create persistent item within localStorage
    const savedQuotes = JSON.parse(localStorage.getItem("nandogp_quotes") || "[]");
    const newQuote = {
      id: "quote_" + Date.now(),
      date: new Date().toLocaleDateString("es-ES"),
      origin,
      destination,
      distance: estimatedDistance,
      moveSize,
      extras: {
        montaje: extraMontaje,
        embalaje: extraEmbalaje,
        vaciado: extraVaciado,
        operario: extraOperario
      },
      fullName,
      phone,
      email,
      totalCost: currentPrice
    };
    savedQuotes.unshift(newQuote);
    localStorage.setItem("nandogp_quotes", JSON.stringify(savedQuotes));

    setFormSubmitted(true);
  };

  // Triggers WhatsApp messages to let them contact easily
  const triggerWhatsAppQuote = () => {
    const sizeLabels = {
      "portes": "Portes Express / Bultos Individuales",
      "piso-pequeno": "Piso Pequeño / Apartamento (1-2 hab)",
      "piso-mediano": "Piso Mediano / Casa Completa",
      "chalet": "Chalet Grande / Local / Oficina"
    };

    const extrasList = [];
    if (extraMontaje) extrasList.push("• Montaje de muebles");
    if (extraEmbalaje) extrasList.push("• Embalaje de cajas");
    if (extraVaciado) extrasList.push("• Vaciado de enseres antiguos");
    if (extraOperario) extrasList.push("• Operario de carga adicional");

    const message = 
`💼 *PRESUPUESTO ESTIMADO DE MUDANZA* 🚚
---------------------------------------
👤 *Cliente:* ${fullName}
📞 *Teléfono:* ${phone}
📧 *Email:* ${email || "No provisto"}

📍 *Origen:* ${origin || "No especificado"}
🏁 *Destino:* ${destination || "No especificado"}
🚗 *Distancia:* ${estimatedDistance} km

📦 *Volumen:* ${sizeLabels[moveSize]}
✨ *Servicios Extra:*
${extrasList.length > 0 ? extrasList.join("\n") : "_Ninguno solicitado_"}

---------------------------------------
💰 *PRESUPUESTO PREVISTO (Estimado):* ~ ${currentPrice}€
---------------------------------------
_¡Hola NANDO-GP! Solicito confirmación y reserva de fecha para este traslado._`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/34605911930?text=${encoded}`, "_blank");
  };

  return (
    <section 
      id="calculadora" 
      className="py-24 relative"
    >
      <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[60%] h-[30%] bg-gradient-to-r from-brand-brown/20 to-brand-terracotta/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex py-1 px-3 rounded-full bg-brand-brown/40 border border-brand-peach/15 text-[10px] font-mono tracking-widest text-brand-sand uppercase mb-4">
            PRESUPUESTO EN VIVO
          </div>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-brand-white leading-tight uppercase heading-on-bg">
            Calculadora de <span className="text-brand-coral font-sans font-light">Tarifas</span>
          </h2>
          <p className="text-xs sm:text-sm text-brand-sand mt-3 font-sans text-on-bg">
            Rellene las opciones y planifique su presupuesto en tiempo real. Sin trucos ni sorpresas desagradables al descargar.
          </p>
        </div>

        {/* Dynamic Calculator body inside beautiful copper gold wood container */}
        <div className="rounded-3xl premium-card overflow-hidden relative">
          
          {/* Header Progress status bar */}
          <div className="bg-brand-brown/40 border-b border-brand-peach/10 px-6 py-4 flex justify-between items-center text-xs">
            <span className="font-mono text-brand-sand font-semibold uppercase">Paso {step} de 3</span>
            <div className="flex space-x-2">
              {[1, 2, 3].map((s) => (
                <div 
                  key={s} 
                  className={`w-8 h-1.5 rounded-full transition-all duration-300 ${
                    s <= step ? "bg-brand-coral" : "bg-brand-brown/80 border border-brand-peach/10"
                  }`} 
                />
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {!formSubmitted ? (
              <div className="p-6 sm:p-10">
                <form onSubmit={handleNextStep}>
                  
                  {/* Step 1: Volume, origin, destination */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-8"
                    >
                      <div className="text-left">
                        <h3 className="font-display font-bold text-lg text-brand-white mb-2 uppercase">
                          Detalles del Traslado
                        </h3>
                        <p className="text-xs text-brand-peach/60 font-sans">
                          A continuación especifique el tamaño general de su mudanza y la distancia estimada por carretera.
                        </p>
                      </div>

                      {/* Origin & Destination inputs */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5 text-left">
                          <label className="text-xs font-mono text-brand-peach/80 uppercase">Punto de Origen (Ciudad o Dirección)</label>
                          <input 
                            id="calc-input-origin"
                            type="text"
                            required
                            placeholder="Ej. Madrid centro, Alcorcón, etc."
                            value={origin}
                            onChange={(e) => setOrigin(e.target.value)}
                            className="w-full bg-brand-black/60 border border-brand-peach/20 focus:border-brand-coral text-brand-white text-xs rounded-xl p-3.5 outline-none font-sans transition-all focus:ring-1 focus:ring-brand-coral/30"
                          />
                        </div>

                        <div className="space-y-1.5 text-left">
                          <label className="text-xs font-mono text-brand-peach/80 uppercase">Punto de Destino (Ciudad o Dirección)</label>
                          <input 
                            id="calc-input-destination"
                            type="text"
                            required
                            placeholder="Ej. Valencia, Pozuelo de Alarcón..."
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                            className="w-full bg-brand-black/60 border border-brand-peach/20 focus:border-brand-coral text-brand-white text-xs rounded-xl p-3.5 outline-none font-sans transition-all focus:ring-1 focus:ring-brand-coral/30"
                          />
                        </div>
                      </div>

                      {/* Estimated Distance Silder option */}
                      <div className="space-y-3 text-left">
                        <div className="flex justify-between items-baseline">
                          <label className="text-xs font-mono text-brand-peach/85 uppercase">Distancia estimada por carretera (Km)</label>
                          <span className="font-mono text-brand-sand text-sm font-bold bg-brand-brown/75 px-2.5 py-1 rounded-lg border border-brand-peach/10">
                            {estimatedDistance} km
                          </span>
                        </div>
                        <input 
                          id="calc-range-distance"
                          type="range"
                          min="1"
                          max="650"
                          value={estimatedDistance}
                          onChange={(e) => setEstimatedDistance(Number(e.target.value))}
                          className="w-full accent-brand-coral h-1.5 rounded-lg bg-brand-brown cursor-pointer"
                        />
                        <div className="flex justify-between text-[10px] text-brand-peach/50 font-mono">
                          <span>Urbano/Local (1-15 km)</span>
                          <span>Provincial (15-100 km)</span>
                          <span>Larga distancia (100 - 650+ km)</span>
                        </div>
                      </div>

                      {/* Volume selection cards */}
                      <div className="space-y-3 text-left">
                        <label className="text-xs font-mono text-brand-peach/85 uppercase">¿Qué tipo de carga desea trasladar?</label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          
                          {/* Option 1: Portes */}
                          <div 
                            id="size-selector-portes"
                            onClick={() => setMoveSize("portes")}
                            className={`group p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between h-28 ${
                              moveSize === "portes" 
                                ? "bg-brand-brown/40 border-brand-coral text-brand-white" 
                                : "bg-brand-black/40 border-brand-peach/10 hover:border-brand-peach/30 text-brand-peach"
                            }`}
                          >
                            <Zap className={`w-5 h-5 ${moveSize === "portes" ? "text-brand-coral" : "text-brand-sand/70 group-hover:text-brand-coral"}`} />
                            <div>
                              <p className="text-xs font-bold leading-tight uppercase">Portes Express</p>
                              <p className="text-[10px] opacity-60">1-4 bultos, sofá, nevera...</p>
                            </div>
                          </div>

                          {/* Option 2: Piso pequeño */}
                          <div 
                            id="size-selector-piso-pequeno"
                            onClick={() => setMoveSize("piso-pequeno")}
                            className={`group p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between h-28 ${
                              moveSize === "piso-pequeno" 
                                ? "bg-brand-brown/40 border-brand-coral text-brand-white" 
                                : "bg-brand-black/40 border-brand-peach/10 hover:border-brand-peach/30 text-brand-peach"
                            }`}
                          >
                            <Home className={`w-5 h-5 ${moveSize === "piso-pequeno" ? "text-brand-coral" : "text-brand-sand/70 group-hover:text-brand-coral"}`} />
                            <div>
                              <p className="text-xs font-bold leading-tight uppercase">Piso Pequeño</p>
                              <p className="text-[10px] opacity-60">Apartamento (1-2 hab)</p>
                            </div>
                          </div>

                          {/* Option 3: Piso mediano */}
                          <div 
                            id="size-selector-piso-mediano"
                            onClick={() => setMoveSize("piso-mediano")}
                            className={`group p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between h-28 ${
                              moveSize === "piso-mediano" 
                                ? "bg-brand-brown/40 border-brand-coral text-brand-white" 
                                : "bg-brand-black/40 border-brand-peach/10 hover:border-brand-peach/30 text-brand-peach"
                            }`}
                          >
                            <Truck className={`w-5 h-5 ${moveSize === "piso-mediano" ? "text-brand-coral" : "text-brand-sand/70 group-hover:text-brand-coral"}`} />
                            <div>
                              <p className="text-xs font-bold leading-tight uppercase">Piso Mediano</p>
                              <p className="text-[10px] opacity-60">Piso familiar o casa entera</p>
                            </div>
                          </div>

                          {/* Option 4: Chalet */}
                          <div 
                            id="size-selector-chalet"
                            onClick={() => setMoveSize("chalet")}
                            className={`group p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between h-28 ${
                              moveSize === "chalet" 
                                ? "bg-brand-brown/40 border-brand-coral text-brand-white" 
                                : "bg-brand-black/40 border-brand-peach/10 hover:border-brand-peach/30 text-brand-peach"
                            }`}
                          >
                            <Users className={`w-5 h-5 ${moveSize === "chalet" ? "text-brand-coral" : "text-brand-sand/70 group-hover:text-brand-coral"}`} />
                            <div>
                              <p className="text-xs font-bold leading-tight uppercase">Chalet / Gran carga</p>
                              <p className="text-[10px] opacity-60">Grandes m3 o vaciado comercial</p>
                            </div>
                          </div>

                        </div>
                      </div>

                    </motion.div>
                  )}

                  {/* Step 2: Extras list */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-8"
                    >
                      <div className="text-left">
                        <h3 className="font-display font-bold text-lg text-brand-white mb-2 uppercase">
                          Servicios Extra Opcionales
                        </h3>
                        <p className="text-xs text-brand-peach/60 font-sans">
                          Complemente su servicio con opciones especializadas para no aguantar ningún esfuerzo innecesario de carpintería y embalaje.
                        </p>
                      </div>

                      {/* Toggle Cards checklist */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        
                        {/* Extra 1 */}
                        <div 
                          id="extra-toggle-montaje"
                          onClick={() => setExtraMontaje(!extraMontaje)}
                          className={`p-5 rounded-2xl border text-left cursor-pointer transition-all flex items-start space-x-4 ${
                            extraMontaje 
                              ? "bg-brand-brown/40 border-brand-coral" 
                              : "bg-brand-black/30 border-brand-peach/10 hover:border-brand-peach/20"
                          }`}
                        >
                          <input 
                            type="checkbox"
                            checked={extraMontaje}
                            readOnly
                            className="mt-1 accent-brand-coral cursor-pointer"
                          />
                          <div className="space-y-1">
                            <p className="text-xs font-bold uppercase text-brand-white">Montaje y Desmontaje de Muebles (+75€)</p>
                            <p className="text-[11px] text-brand-peach/60 font-sans">Carpinteros calificados para armarios, camas e instalación.</p>
                          </div>
                        </div>

                        {/* Extra 2 */}
                        <div 
                          id="extra-toggle-embalaje"
                          onClick={() => setExtraEmbalaje(!extraEmbalaje)}
                          className={`p-5 rounded-2xl border text-left cursor-pointer transition-all flex items-start space-x-4 ${
                            extraEmbalaje 
                              ? "bg-brand-brown/40 border-brand-coral" 
                              : "bg-brand-black/30 border-brand-peach/10 hover:border-brand-peach/20"
                          }`}
                        >
                          <input 
                            type="checkbox"
                            checked={extraEmbalaje}
                            readOnly
                            className="mt-1 accent-brand-coral cursor-pointer"
                          />
                          <div className="space-y-1">
                            <p className="text-xs font-bold uppercase text-brand-white">Embalaje de cajas (+55€)</p>
                            <p className="text-[11px] text-brand-peach/60 font-sans">Llevamos mantas y embalamos vajillas, copas y objetos frágiles.</p>
                          </div>
                        </div>

                        {/* Extra 3 */}
                        <div 
                          id="extra-toggle-vaciado"
                          onClick={() => setExtraVaciado(!extraVaciado)}
                          className={`p-5 rounded-2xl border text-left cursor-pointer transition-all flex items-start space-x-4 ${
                            extraVaciado 
                              ? "bg-brand-brown/40 border-brand-coral" 
                              : "bg-brand-black/30 border-brand-peach/10 hover:border-brand-peach/20"
                          }`}
                        >
                          <input 
                            type="checkbox"
                            checked={extraVaciado}
                            readOnly
                            className="mt-1 accent-brand-coral cursor-pointer"
                          />
                          <div className="space-y-1">
                            <p className="text-xs font-bold uppercase text-brand-white">Vaciado previo de enseres (+110€)</p>
                            <p className="text-[11px] text-brand-peach/60 font-sans">Deshacernos ecológicamente de trastos inservibles.</p>
                          </div>
                        </div>

                        {/* Extra 4 */}
                        <div 
                          id="extra-toggle-operario"
                          onClick={() => setExtraOperario(!extraOperario)}
                          className={`p-5 rounded-2xl border text-left cursor-pointer transition-all flex items-start space-x-4 ${
                            extraOperario 
                              ? "bg-brand-brown/40 border-brand-coral" 
                              : "bg-brand-black/30 border-brand-peach/10 hover:border-brand-peach/20"
                          }`}
                        >
                          <input 
                            type="checkbox"
                            checked={extraOperario}
                            readOnly
                            className="mt-1 accent-brand-coral cursor-pointer"
                          />
                          <div className="space-y-1">
                            <p className="text-xs font-bold uppercase text-brand-white">Ayuda de operario adicional (+90€)</p>
                            <p className="text-[11px] text-brand-peach/60 font-sans">Ideal si hay escaleras muy empinadas o fincas sin ascensor.</p>
                          </div>
                        </div>

                      </div>

                    </motion.div>
                  )}

                  {/* Step 3: Contacts */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left"
                    >
                      {/* Left: Contact Form */}
                      <div className="space-y-5">
                        <div>
                          <h3 className="font-display font-bold text-lg text-brand-white mb-2 uppercase">
                            Información de Contacto
                          </h3>
                          <p className="text-[11px] text-brand-peach/60 font-sans">
                            Por favor facilítenos sus datos básicos de contacto en España para enviarle el presupuesto.
                          </p>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] font-mono text-brand-peach/60 uppercase">Nombre Completo *</label>
                          <input 
                            id="calc-contact-name"
                            type="text"
                            required
                            placeholder="Ej. Juan de Dios"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full bg-brand-black/50 border border-brand-peach/15 focus:border-brand-coral text-brand-white text-xs rounded-xl p-3.5 outline-none"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] font-mono text-brand-peach/60 uppercase">Teléfono Móvil *</label>
                          <input 
                            id="calc-contact-phone"
                            type="tel"
                            required
                            placeholder="Ej. +34 605 911 930"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full bg-brand-black/50 border border-brand-peach/15 focus:border-brand-coral text-brand-white text-xs rounded-xl p-3.5 outline-none"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] font-mono text-brand-peach/60 uppercase">Email (Opcional)</label>
                          <input 
                            id="calc-contact-email"
                            type="email"
                            placeholder="Ej. correo@servidor.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-brand-black/50 border border-brand-peach/15 focus:border-brand-coral text-brand-white text-xs rounded-xl p-3.5 outline-none"
                          />
                        </div>
                      </div>

                      {/* Right: Bill details receipt review */}
                      <div className="p-6 rounded-2xl bg-brand-black/50 border border-brand-peach/15 flex flex-col justify-between">
                        <div>
                          <p className="text-xs font-mono text-brand-sand uppercase tracking-wider mb-4 border-b border-brand-peach/10 pb-2">
                            Resumen de Solicitud
                          </p>
                          <div className="space-y-3.5 text-xs">
                            <div className="flex justify-between">
                              <span className="text-brand-peach/60">Servicio Mudanza:</span>
                              <span className="text-brand-white capitalize font-medium">{moveSize.replace("-", " ")}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-brand-peach/60">Recorrido:</span>
                              <span className="text-brand-white truncate max-w-[150px]" title={`${origin || "?"} a ${destination || "?"}`}>
                                {origin || "?"} → {destination || "?"}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-brand-peach/60">Recorrido en carretera:</span>
                              <span className="text-brand-white font-mono">{estimatedDistance} km</span>
                            </div>

                            {/* Extra bullets list if enabled */}
                            {(extraMontaje || extraEmbalaje || extraVaciado || extraOperario) && (
                              <div className="pt-2.5 border-t border-brand-peach/10">
                                <p className="text-[10px] uppercase font-mono text-brand-sand/70 mb-1.5">Servicios Suplementarios:</p>
                                <div className="space-y-1 text-[11px] text-brand-peach/80">
                                  {extraMontaje && <p>✓ Montaje/Desmontaje de Muebles</p>}
                                  {extraEmbalaje && <p>✓ Embalaje Profesional Cajas</p>}
                                  {extraVaciado && <p>✓ Vaciado / Gestión Reciclaje</p>}
                                  {extraOperario && <p>✓ Ayuda de Peón Extra</p>}
                                </div>
                              </div>
                            )}

                          </div>
                        </div>

                        {/* Live Total Cost */}
                        <div className="pt-6 border-t border-brand-peach/10 mt-6 flex justify-between items-baseline">
                          <span className="text-xs font-mono uppercase text-brand-sand"> ESTIMADO TOTAL:</span>
                          <span className="text-3xl font-mono text-brand-coral font-bold font-mono">
                            ~ {currentPrice}€
                          </span>
                        </div>
                      </div>

                    </motion.div>
                  )}

                  {/* Nav button bar inside modal */}
                  <div className="mt-8 pt-6 border-t border-brand-peach/10 flex items-center justify-between">
                    {" "}
                    <div>
                      {step > 1 && (
                        <button
                          id="calc-prev-btn"
                          type="button"
                          onClick={handlePrevStep}
                          className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-brand-brown/40 hover:bg-brand-brown text-xs font-bold text-brand-sand hover:text-brand-white border border-brand-peach/10 transition-all cursor-pointer"
                        >
                          <ArrowLeft className="w-4 h-4" />
                          <span>Atrás</span>
                        </button>
                      )}
                    </div>
                    {/* Next step button */}
                    {step < 3 ? (
                      <button
                        id="calc-next-btn"
                        type="button"
                        onClick={handleNextStep}
                        disabled={step === 1 && (!origin || !destination)}
                        className={`flex items-center space-x-2 px-6 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          step === 1 && (!origin || !destination)
                            ? "bg-brand-brown/10 text-brand-peach/30 border border-brand-peach/5 cursor-not-allowed"
                            : "bg-brand-terracotta hover:bg-brand-coral text-brand-white border border-brand-peach/10"
                        }`}
                      >
                        <span>Siguiente</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        id="calc-submit-btn"
                        type="button"
                        onClick={handleFinalSubmit}
                        disabled={!fullName || !phone}
                        className={`flex items-center space-x-2 px-6 py-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          !fullName || !phone
                            ? "bg-brand-brown/10 text-brand-peach/30 border border-brand-peach/5 cursor-not-allowed"
                            : "bg-gradient-to-r from-brand-terracotta to-brand-coral text-brand-white border border-brand-white/10"
                        }`}
                      >
                        <Send className="w-4 h-4" />
                        <span>Generar Presupuesto</span>
                      </button>
                    )}
                  </div>

                </form>
              </div>
            ) : (
              /* Step 4: Final Success check and WhatsApp button */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 sm:p-12 text-center flex flex-col items-center justify-center space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-950 flex items-center justify-center text-emerald-400 border border-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-extrabold text-2xl text-brand-white uppercase">
                    ¡Presupuesto Generado!
                  </h3>
                  <p className="text-xs text-brand-peach/70 max-w-md mx-auto leading-relaxed">
                    Hemos registrado su solicitud en el sistema provisional de NANDO-GP en España. El presupuesto aproximado para su mudanza entre <strong className="text-brand-sand">{origin}</strong> y <strong className="text-brand-sand">{destination}</strong> es de <strong className="text-brand-coral font-mono">{currentPrice}€</strong>.
                  </p>
                </div>

                {/* Main WhatsApp integration block */}
                <div className="p-6 rounded-2xl bg-brand-black/50 border border-brand-peach/15 max-w-md w-full space-y-4">
                  <p className="text-xs text-brand-peach leading-normal font-sans">
                    Para asegurar su día y obtener un presupuesto 100% formal y detallado sin compromiso, por favor haga click a continuación para enviar los detalles directamente a nuestro director a través de <strong>WhatsApp</strong>:
                  </p>

                  <button
                    id="calc-whatsapp-send-btn"
                    onClick={triggerWhatsAppQuote}
                    className="w-full flex items-center justify-center space-x-3 py-4 bg-emerald-700 hover:bg-emerald-600 active:bg-emerald-800 text-brand-white text-xs font-extrabold rounded-xl transition-all cursor-pointer shadow-lg hover:scale-[1.02]"
                  >
                    <MessageSquare className="w-4 h-4 text-white fill-white" />
                    <span>Enviar Detalles por WhatsApp</span>
                  </button>
                </div>

                <div className="flex space-x-3 pt-2">
                  <button
                    id="calc-reset-btn"
                    onClick={() => {
                      setFormSubmitted(false);
                      setStep(1);
                      setOrigin("");
                      setDestination("");
                      setEstimatedDistance(30);
                      setFullName("");
                      setPhone("");
                      setExtraMontaje(false);
                      setExtraEmbalaje(false);
                      setExtraVaciado(false);
                      setExtraOperario(false);
                    }}
                    className="px-5 py-2 text-xs font-bold text-brand-peach hover:text-brand-white bg-brand-brown/40 hover:bg-brand-brown rounded-lg border border-brand-peach/10 transition-all cursor-pointer"
                  >
                    Calcular Otra Mudanza
                  </button>
                  {onClose && (
                    <button
                      onClick={onClose}
                      className="px-5 py-2 text-xs font-bold text-brand-white bg-brand-terracotta hover:bg-brand-coral rounded-lg transition-all cursor-pointer"
                    >
                      Cerrar Calculadora
                    </button>
                  )}
                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
