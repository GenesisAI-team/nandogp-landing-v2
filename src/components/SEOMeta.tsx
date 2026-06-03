/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SEOData } from "../config/seo";

/**
 * Injects SEO meta tags into <head>.
 * React 19 automatically hoists <title>, <meta>, and <link> tags
 * rendered anywhere in the component tree to the document head.
 * No external dependency required.
 */
export default function SEOMeta({ data }: { data: SEOData }) {
  return (
    <>
      <title>{data.title}</title>
      <meta name="description" content={data.description} />
      <link rel="canonical" href={data.canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={data.ogTitle || data.title} />
      <meta property="og:description" content={data.ogDescription || data.description} />
      <meta property="og:url" content={data.canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="es_ES" />
      {data.ogImage && <meta property="og:image" content={data.ogImage} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={data.ogTitle || data.title} />
      <meta name="twitter:description" content={data.ogDescription || data.description} />
      {data.ogImage && <meta name="twitter:image" content={data.ogImage} />}
    </>
  );
}
