/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Star, PenTool, ShieldCheck, ThumbsUp, MapPin } from "lucide-react";
import { INITIAL_REVIEWS } from "../data";
import { GOOGLE_REVIEWS } from "../config/googleReviews";

export default function Reviews() {
  const averageRating = 5.0;
  const totalCount = INITIAL_REVIEWS.length;

  return (
    <section 
      id="opiniones" 
      className="py-24 border-t border-brand-peach/10 relative overflow-hidden"
    >
      <div className="absolute top-[10%] left-[-15%] w-[45%] h-[45%] rounded-full bg-gradient-to-tr from-brand-brown/40 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-15%] w-[45%] h-[45%] rounded-full bg-gradient-to-br from-brand-terracotta/20 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block Scroll Trigger */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          <div className="lg:col-span-7 text-center flex flex-col items-center space-y-4 px-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="inline-flex py-1 px-3 rounded-full bg-brand-brown/40 border border-brand-peach/15 text-[10px] font-mono tracking-widest text-brand-sand uppercase"
            >
              OPINIONES DE NUESTROS CLIENTES
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="font-display font-semibold text-3xl sm:text-4xl text-brand-white leading-tight uppercase heading-on-bg"
            >
              Conectados con <span className="text-brand-coral font-sans font-light">Reseñas de Google</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-[0.95rem] sm:text-base font-sans font-semibold max-w-xl text-on-bg"
            >
              La transparencia es nuestro pilar fundamental. Aquí puede consultar las valoraciones reales importadas directamente de nuestro perfil de Google, así como redactar su propia valoración directamente en Google.
            </motion.p>
          </div>

          {/* Connected Google Badge Summary */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-4 p-6 rounded-2xl bg-white shadow-md border border-gray-100 flex flex-col items-center justify-center space-y-3"
          >
            {/* Google Identity Logo & text */}
            <div className="flex items-center space-x-2 text-brand-white">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22-.19-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span className="font-sans font-bold text-xs tracking-widest text-gray-600 uppercase">Opiniones de Google</span>
            </div>

            {/* Stars summary */}
            <div className="flex flex-col items-center">
              <div className="flex space-x-1 text-amber-400">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>
              <p className="font-mono text-xl font-bold text-gray-900 mt-1">
                {averageRating.toFixed(1)} / 5.0
              </p>
              <p className="text-[10px] text-gray-500 uppercase tracking-wider font-mono">
                {totalCount} Reseñas Totales
              </p>
            </div>

            <a
              id="write-review-btn"
              href={GOOGLE_REVIEWS.writeReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-full inline-flex items-center justify-center space-x-2 py-2 px-4 rounded-xl bg-white border-1 border-gray-500 text-xs font-bold text-gray-900 cursor-pointer transition-all hover:scale-103"
            >
              <PenTool className="w-3.5 h-3.5 text-gray-900" />
              <span>Redactar Reseña</span>
            </a>
          </motion.div>

        </div>

        {/* Reviews List Layout with staggered scroll animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INITIAL_REVIEWS.map((review, rIndex) => {
            return (
              <motion.div
                id={review.idAttribute}
                key={review.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.6, delay: rIndex * 0.08 }}
                className="p-6 rounded-2xl bg-white shadow-md border border-gray-100 flex flex-col justify-between hover:shadow-lg text-left relative"
              >
                
                {/* Header Details */}
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img 
                        src={review.profilePhotoUrl} 
                        alt={review.authorName}
                        referrerPolicy="no-referrer"
                        className="w-10 h-10 rounded-full object-cover border border-brand-peach/10 bg-brand-brown"
                      />
                      <div>
                        <h4 className="text-xs font-bold text-gray-900 truncate max-w-[130px] sm:max-w-none">
                          {review.authorName}
                        </h4>
                        <span className="text-[9px] text-[#4285F4] font-mono tracking-wider flex items-center space-x-1 uppercase mt-0.5">
                          Google Review
                        </span>
                      </div>
                    </div>

                    {/* Google original review visual shield */}
                    <div className="p-1.5 rounded-md bg-gray-100 border border-gray-200">
                      <img
                        src="/icons/g-icon.webp"
                        alt="Google"
                        className="w-3.5 h-3.5 object-contain"
                      />
                    </div>
                  </div>

                  {/* Stars block */}
                  <div className="flex space-x-1 text-amber-400 mt-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-3.5 h-3.5 ${
                          i < review.rating ? "fill-amber-400" : "text-brand-peach/20"
                        }`} 
                      />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-xs text-gray-700 mt-3.5 leading-relaxed font-sans line-clamp-4">
                    &quot;{review.text}&quot;
                  </p>
                </div>

                {/* Footer review age tag */}
                <div className="pt-4 border-t border-gray-200 mt-5 flex items-center justify-between text-[10px] text-gray-500 font-mono">
                  <span>{review.relativeTimeDescription}</span>
                  <div className="flex items-center space-x-1 text-gray-600">
                    <ThumbsUp className="w-3 h-3 text-gray-500" />
                    <span>Útil</span>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Visual Badge Trust */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-12 flex flex-wrap justify-center items-center gap-3 text-xs text-brand-peach/40 uppercase font-mono "
        >
          <div className="flex items-center space-x-1">
            <LockBadge className="w-3 h-3 text-brand-coral" />
            <span className="text-white text-[0.68rem] font-bold tracking-wider">Datos Encriptados</span>
          </div>
          <div className="flex items-center space-x-1">
            <ShieldCheck className="w-3 h-3 text-brand-coral" />
            <span className="text-white text-[0.68rem] font-bold tracking-wider">Reseñas 100% Reales</span>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin className="w-3 h-3 text-brand-coral" />
            <span className="text-white text-[0.68rem] font-bold tracking-wider">España Local de Confianza</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function LockBadge(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}
