/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import PhoneWidget from "./PhoneWidget";
import WhatsappWidget from "./WhatsappWidget";
import GoogleRatingCard from "./GoogleRatingCard";
import { GOOGLE_REVIEWS } from "../config/googleReviews";

export default function FloatingContact() {
  return (
    <>
      <div className="fixed bottom-10 left-3 z-50">
        <GoogleRatingCard
          rating={GOOGLE_REVIEWS.rating}
          reviewCount={GOOGLE_REVIEWS.reviewCount}
          href={GOOGLE_REVIEWS.viewReviewsUrl}
          businessName={GOOGLE_REVIEWS.businessName}
          size="mobile"
        />
      </div>
      <div className="fixed bottom-10 right-3 z-50 flex flex-col items-end gap-3">
        <PhoneWidget />
        <WhatsappWidget />
      </div>
    </>
  );
}
