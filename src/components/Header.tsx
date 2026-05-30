/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Phone, Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  phone: string;
}

const NAV_ITEMS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Opiniones", href: "#opiniones" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header({ phone }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      "¡Hola NANDO-GP! Acabo de ver vuestra web y me gustaría preguntar por vuestras tarifas de mudanzas."
    );
    const num = phone.replace(/\s+/g, "").replace("+", "");
    window.open(`https://wa.me/${num}?text=${text}`, "_blank");
  };

  const phoneClean = phone.replace(/\s+/g, "");
  const phoneTel = `tel:${phoneClean}`;

  return (
    <>
      <header className="fixed top-0 inset-x-0 h-18 sm:h-20 lg:h-24 z-30 bg-brand-black/40 backdrop-blur-md border-b border-brand-peach/10">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-full flex items-center justify-between ">

          {/* Logo */}
          <div className="flex items-center min-w-0 shrink-0">
            <span className="font-display font-black text-lg sm:text-2xl uppercase tracking-tighter text-brand-white whitespace-nowrap">
              NANDO<span className="text-brand-coral font-sans font-extralight tracking-widest ml-0.5 sm:ml-1">-GP</span>
            </span>
            <div className="hidden sm:block h-4 w-px bg-brand-peach/20 ml-2.5" />
            <span className="hidden sm:inline-block font-mono text-[9px] text-brand-sand tracking-widest uppercase ml-2.5">
              Mudanzas Profesionales
            </span>
          </div>

          {/* Mobile: phone link - grows to fill space between logo and hamburger */}
          <a
            href={phoneTel}
            className="md:hidden flex-1 flex items-center justify-center mx-3 px-3 h-10 rounded-lg bg-brand-brown/60 border border-brand-peach/20 text-brand-sand hover:text-brand-white transition-all whitespace-nowrap"
          >
            <Phone className="w-5.5 h-5.5 text-brand-coral shrink-0 mr-1.5" />
            <span className="font-mono text-[1rem] font-semibold">653 89 63 52</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-3 md:space-x-4 lg:space-x-6 text-[0.65rem] md:text-[0.7rem] lg:text-sm uppercase tracking-wider font-mono">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-brand-peach hover:text-brand-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop phone button */}
          <a
            id="top-phone-call-btn"
            href={phoneTel}
            className="hidden md:flex items-center space-x-1 md:space-x-2 lg:space-x-3 px-2 md:px-3 lg:px-5 py-2 lg:py-3 rounded-xl bg-brand-brown/50 border border-brand-peach/25 font-bold text-brand-sand hover:text-brand-white transition-all hover:scale-103 text-[0.65rem] md:text-xs lg:text-[2rem]"
          >
            <Phone className="text-brand-coral shrink-0 w-3 h-3 md:w-3.5 md:h-3.5 lg:w-7 lg:h-7" />
            <span className="font-mono">653 89 63 52</span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden shrink-0 w-10 h-10 flex items-center justify-center rounded-lg p-2.5 bg-brand-coral rounded-xl border text-brand-white"
            aria-label="Abrir menú"
          >
            <Menu className="w-5 h-5" />
          </button>

        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-brand-black/10 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Slide-in panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-brand-dark/98 backdrop-blur-xl border-l border-brand-peach/15 flex flex-col"
            >
              {/* Close button */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-brand-peach/10">
                <span className="font-display font-black text-lg uppercase tracking-tighter text-brand-white">
                  NANDO<span className="text-brand-coral font-sans font-extralight tracking-widest ml-1">-GP</span>
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-brand-peach hover:text-brand-white transition-colors cursor-pointer"
                  aria-label="Cerrar menú"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Action buttons */}
              <div className="pb-8  flex flex-col ">
                <a
                  href={phoneTel}
                  className="flex items-center justify-center gap-3 px-5 py-3.5 bg-gradient-to-r from-brand-terracotta to-brand-coral text-brand-white font-bold transition-all hover:scale-103"
                >
                  <Phone className="w-6 h-6" />
                  <span>Llamar ahora</span>
                </a>
                <button
                  onClick={handleWhatsApp}
                  className="flex items-center justify-center gap-1 px-5 py-3.5 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold transition-all cursor-pointer"
                >
                  <img src="/Whatsapp-button.webp" alt="WhatsApp" className="w-14 h-14 shrink-0 object-contain rounded" />
                  <span>WhatsApp</span>
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col">
                {NAV_ITEMS.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.06, duration: 0.3 }}
                    onClick={() => handleNavClick(item.href)}
                    className="px-6 py-4 text-lg font-display uppercase tracking-wider text-brand-sand hover:text-brand-white hover:bg-brand-brown/40 transition-all border-b border-brand-peach/5"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>

              
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}