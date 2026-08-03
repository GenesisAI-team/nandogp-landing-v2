/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import SidebarMenu from "./SidebarMenu";
import Hero from "./Hero";
import Header from "./Header";
import Services from "./Services";
import Reviews from "./Reviews";
import Faqs from "./Faqs";
import ContactForm from "./ContactForm";
import SectionTransition from "./SectionTransition";
import Footer from "./Footer";
import FloatingContact from "./FloatingContact";
import SEOMeta from "./SEOMeta";
import StructuredData from "./StructuredData";
import { SEO_HOME } from "../config/seo";
import { HOMEPAGE_SCHEMA } from "../config/schema";

const PHONE_NUMBER = "+34 605 47 49 30";

export default function HomePage() {
  return (
    <div className="nando-bg min-h-screen text-brand-white font-sans selection:text-brand-white relative overflow-x-hidden">
      <SEOMeta data={SEO_HOME} />
      <StructuredData schemas={HOMEPAGE_SCHEMA} />
      <Header phone={PHONE_NUMBER} />

      <SidebarMenu />

      {/* Main Content Sections */}
      <main>
        {/* HERO SECTION (Includes Slogans & Drag Stack Photos of transport) */}
        <Hero />

        {/* SERVICES SECTION */}
        <Services />

        <SectionTransition src="/Transition-1-No-bg.webp" />

        {/* GOOGLE REVIEWS SECTION */}
        <Reviews />

        <SectionTransition src="/Transition-2-No-bg.webp" />

        {/* FAQS SECTION */}
        <Faqs />

        <SectionTransition src="/Transition-3-No-bg.webp" />

        {/* CONTACT / España Map Location SECTION */}
        <ContactForm />
      </main>

      <Footer />

      <FloatingContact />
    </div>
  );
}
