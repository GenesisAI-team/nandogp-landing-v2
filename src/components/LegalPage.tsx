/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from "react-router-dom";
import { ArrowLeft, X } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import FloatingContact from "./FloatingContact";
import { BlockRenderer } from "./LegalBlockRenderer";
import { LEGAL_CONTENT } from "../config/legalData";
import { LegalDocType } from "../types";

const PHONE_NUMBER = "+34 605 47 49 30";

interface LegalPageProps {
  slug: NonNullable<LegalDocType>;
}

export default function LegalPage({ slug }: LegalPageProps) {
  const data = LEGAL_CONTENT[slug];

  if (!data) {
    return (
      <div className="nando-bg min-h-screen text-brand-white font-sans flex items-center justify-center">
        <p className="text-brand-peach">Documento no encontrado.</p>
      </div>
    );
  }

  return (
    <div className="nando-bg min-h-screen text-brand-white font-sans selection:text-brand-white relative overflow-x-hidden">
      <Header phone={PHONE_NUMBER} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-brand-peach hover:text-brand-white transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>

        {/* Premium Card */}
        <div className="max-w-3xl mx-auto rounded-2xl premium-card overflow-hidden flex flex-col max-h-[85vh]">
          {/* Title bar — same style as LegalSheet */}
          <div className="shrink-0 flex items-center justify-between px-6 py-5 border-b border-brand-peach/10">
            <h1 className="font-display text-lg font-bold uppercase tracking-tight text-brand-white">
              {data.title}
            </h1>
            <Link
              to="/"
              className="p-2 rounded-lg text-brand-peach hover:text-brand-white hover:bg-brand-brown/50 transition-all cursor-pointer"
              aria-label="Volver al inicio"
            >
              <X className="w-5 h-5" />
            </Link>
          </div>

          {/* Scrollable content */}
          <div className="overflow-y-auto px-6 py-6 legal-sheet__content">
            {data.blocks.map((block, i) => (
              <BlockRenderer key={i} block={block} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
      <FloatingContact />
    </div>
  );
}
