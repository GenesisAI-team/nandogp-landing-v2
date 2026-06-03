/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./components/HomePage";
import LegalPage from "./components/LegalPage";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/aviso-legal" element={<LegalPage slug="aviso-legal" />} />
      <Route path="/privacidad" element={<LegalPage slug="privacidad" />} />
      <Route path="/terminos" element={<LegalPage slug="terminos" />} />
      <Route path="/cookies" element={<LegalPage slug="cookies" />} />
    </Routes>
    </>
  );
}
