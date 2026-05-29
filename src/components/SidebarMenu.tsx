/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, MessageSquare, Calculator, Star, HelpCircle, X, ChevronLeft, Menu } from "lucide-react";

interface SidebarMenuProps {
  phone: string;
}

export default function SidebarMenu({ phone }: SidebarMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Track scroll position to highlight sections or adapt the side bar design
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "servicios", "calculadora", "opiniones", "faq", "contacto"];
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "inicio", label: "Inicio", icon: Menu },
    { id: "servicios", label: "Servicios", icon: MessageSquare },
    { id: "opiniones", label: "Reseñas", icon: Star },
    { id: "faq", label: "Páginas FAQ", icon: HelpCircle },
    { id: "contacto", label: "Contacto", icon: Phone,  highlight: true },
  ];

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent("¡Hola NANDO-GP! Me gustaría solicitar información para un servicio de mudanza.");
    window.open(`https://wa.me/34605911930?text=${text}`, "_blank");
  };

  return (
    <>
      {/* 
        Sticky Side Strip - NANDO-GP
        This stays completely fixed vertically on the right side of the screen as you scroll.
        It has beautiful high-impact design matching the poster.
      */}
      <div 
        id="side-menu-container"
        className="fixed right-0 top-0 bottom-0 z-40 flex items-center justify-end select-none pointer-events-none opacity-80"
      >
        <div className="h-full flex items-center">
          {/* Vertical banner block */}
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="pointer-events-auto shadow-2xl h-[50vh] sm:h-[60vh] w-8 sm:w-15 md:w-24 flex flex-col justify-between items-center py-8 rounded-l-3xl bg-brand-dark/5 border-l border-y border-brand-peach/20 glass-panel"
          >
         

            {/* Vertical Branding text: NANDO-GP - hueco que mantiene el flex layout interno */}
            <div 
              id="vertical-branding-strip"
              onClick={() => setIsOpen(!isOpen)}
              className="flex-1 cursor-pointer py-4"
              title="Click para ver contenido"
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>

      {/* 
        Decorative vertical "NANDO-GP" branding strip on the right edge.
        Sits behind the interactive sidebar (pointer-events-none) and provides
        the poster-style copper vertical lettering integrated into a dark fade.
      */}
      <div
        id="vertical-branding-decor"
        className="fixed right-0 top-0 h-full w-8 sm:w-15 md:w-24 z-50 pointer-events-none flex items-center justify-center bg-gradient-to-l from-brand-800/80 to-transparent"
      >
        <span
          style={{ writingMode: "vertical-rl" }}
          className="rotate-180 text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-widest bg-gradient-to-b from-brand-400 via-brand-500 to-brand-600 bg-clip-text opacity-100 text-transparent"
        >
          NANDO-GP
        </span>
      </div>
    </>
  );
}
