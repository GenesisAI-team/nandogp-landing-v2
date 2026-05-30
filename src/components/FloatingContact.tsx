/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import PhoneWidget from "./PhoneWidget";
import WhatsappWidget from "./WhatsappWidget";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-10 right-3 z-50 flex flex-col items-end gap-3">
      <PhoneWidget />
      <WhatsappWidget />
    </div>
  );
}
