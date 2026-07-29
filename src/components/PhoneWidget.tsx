/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PhoneCall } from "lucide-react";

const phoneNumber = "+34 605 47 49 30";

export default function PhoneWidget() {
  return (
    <a
      href={`tel:${phoneNumber}`}
      className="relative group transition-transform hover:scale-110 active:scale-95"
      aria-label="Llamar por teléfono"
    >
      <div className="w-16 h-16 bg-[#D90429] rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.3)] relative overflow-hidden">
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity rounded-full"></div>

        <PhoneCall className="w-8 h-8 text-white relative z-10" strokeWidth={2.4} />
      </div>

      <span className="hidden sm:block absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-dark/80 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Llámanos
      </span>
    </a>
  );
}
