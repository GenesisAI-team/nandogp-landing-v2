/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

interface SectionTransitionProps {
  src: string;
}

export default function SectionTransition({ src }: SectionTransitionProps) {
  return (
    <div className="relative w-full flex items-center justify-center overflow-hidden pointer-events-none select-none">
      <motion.img
        src={src}
        alt=""
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-8xl  h-auto sm:max-h-[38.5rem] object-contain"
        draggable={false}
      />
    </div>
  );
}