/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import SidebarMenu from "./components/SidebarMenu";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import Faqs from "./components/Faqs";
import ContactForm from "./components/ContactForm";
import SectionTransition from "./components/SectionTransition";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";
import GoogleRatingCard from "./components/GoogleRatingCard";
import { GOOGLE_REVIEWS } from "./config/googleReviews";

const PHONE_NUMBER = "+34 605 47 49 30";

export default function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="nando-bg min-h-screen text-brand-white font-sans selection:text-brand-white relative overflow-x-hidden">
      {/* Global Background Gradients - Elegant Dark Theme */}
    
      <Header phone={PHONE_NUMBER} />

      {/* Google Reviews Badge - Mobile */}
      <div className="md:hidden w-full flex justify-center sm:pt-[5.5rem] pt-[5rem] pb-0 -mb-22">
        <GoogleRatingCard
          rating={GOOGLE_REVIEWS.rating}
          reviewCount={GOOGLE_REVIEWS.reviewCount}
          href={GOOGLE_REVIEWS.viewReviewsUrl}
          businessName={GOOGLE_REVIEWS.businessName}
          ctaLabel="Ver reseñas en Google"
          size="mobile"
        />
      </div>

      {/* Google Reviews Badge - Desktop */}
      <div className="hidden md:flex w-full justify-center pt-[5.5rem] lg:pt-[6.5rem] pb-0 -mb-22 lg:-mb-35 xl:-mb-30">
        <GoogleRatingCard
          rating={GOOGLE_REVIEWS.rating}
          reviewCount={GOOGLE_REVIEWS.reviewCount}
          href={GOOGLE_REVIEWS.viewReviewsUrl}
          businessName={GOOGLE_REVIEWS.businessName}
          ctaLabel="Ver reseñas en Google"
          size="md"
        />
      </div>

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
