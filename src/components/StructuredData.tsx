/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Injects structured data (JSON-LD) into <head>.
 * React 19 hoists <script> tags rendered anywhere in the component tree.
 */
export default function StructuredData({
  schemas,
}: {
  schemas: Record<string, unknown>[];
}) {
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
