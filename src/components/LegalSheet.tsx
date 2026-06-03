/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { LEGAL_CONTENT } from "../config/legalData";
import { LegalDocType, LegalBlock, TextSegment } from "../types";
import useBodyScrollLock from "../hooks/useBodyScrollLock";

interface LegalSheetProps {
  isOpen: boolean;
  onClose: () => void;
  section: LegalDocType;
}

function renderSegments(segments: TextSegment[], key?: string): React.ReactNode {
  return segments.map((seg, i) => {
    if (seg.bold) {
      return <strong key={key ? `${key}-${i}` : i}>{seg.text}</strong>;
    }
    if (seg.italic) {
      return <em key={key ? `${key}-${i}` : i}>{seg.text}</em>;
    }
    return <React.Fragment key={key ? `${key}-${i}` : i}>{seg.text}</React.Fragment>;
  });
}

function BlockRenderer({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case "heading":
      return <h3>{block.text}</h3>;

    case "paragraph":
      return <p>{renderSegments(block.segments)}</p>;

    case "list": {
      const items = block.items.map((itemSegments, i) => (
        <li key={i}>{renderSegments(itemSegments, `item-${i}`)}</li>
      ));
      return block.ordered ? <ol>{items}</ol> : <ul>{items}</ul>;
    }

    case "infoCard":
      return (
        <div className="legal-sheet__info-card">
          {block.fields.map((field, i) => (
            <p key={i}>
              <strong>{field.label}</strong> {field.value}
            </p>
          ))}
        </div>
      );

    default:
      return null;
  }
}

export default function LegalSheet({ isOpen, onClose, section }: LegalSheetProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useBodyScrollLock(isOpen);

  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    closeButtonRef.current?.focus();

    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  const data = section ? LEGAL_CONTENT[section] : null;
  if (!data) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-end justify-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="legal-sheet-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-brand-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Bottom sheet panel */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 500, damping: 50 }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-hidden rounded-t-3xl bg-brand-dark/98 backdrop-blur-xl border border-brand-peach/15 border-b-0 flex flex-col shadow-2xl"
          >
            {/* Header bar */}
            <div className="shrink-0 flex items-center justify-between px-6 py-5 border-b border-brand-peach/10">
              <h2
                id="legal-sheet-title"
                className="font-display text-lg font-bold uppercase tracking-tight text-brand-white"
              >
                {data.title}
              </h2>
              <button
                ref={closeButtonRef}
                onClick={onClose}
                className="p-2 rounded-lg text-brand-peach hover:text-brand-white hover:bg-brand-brown/50 transition-all cursor-pointer"
                aria-label="Cerrar panel legal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable content */}
            <div className="overflow-y-auto px-6 py-6 legal-sheet__content">
              {data.blocks.map((block, i) => (
                <BlockRenderer key={i} block={block} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
