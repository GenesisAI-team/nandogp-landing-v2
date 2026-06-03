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
import GoogleRatingCard from "./GoogleRatingCard";
import { GOOGLE_REVIEWS } from "../config/googleReviews";
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
