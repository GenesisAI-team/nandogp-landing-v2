/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { LegalBlock, TextSegment } from "../types";

export function renderSegments(segments: TextSegment[], key?: string): React.ReactNode {
  return segments.map((seg, i) => {
    if (seg.bold) {
      return <strong key={key ? `${key}-${i}` : i}>{seg.text}</strong>;
    }
    if (seg.italic) {
      return <em key={key ? `${key}-${i}` : i}>{seg.text}</em>;
    }
    return <React.Fragment key={key ? `${key}-${i}` : i}>{seg.text}</React.Fragment>;
  });
}

export function BlockRenderer({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case "heading":
      return <h3>{block.text}</h3>;

    case "paragraph":
      return <p>{renderSegments(block.segments)}</p>;

    case "list": {
      const items = block.items.map((itemSegments, i) => (
        <li key={i}>{renderSegments(itemSegments, `item-${i}`)}</li>
      ));
      return block.ordered ? <ol>{items}</ol> : <ul>{items}</ul>;
    }

    case "infoCard":
      return (
        <div className="legal-sheet__info-card">
          {block.fields.map((field, i) => (
            <p key={i}>
              <strong>{field.label}</strong> {field.value}
            </p>
          ))}
        </div>
      );

    default:
      return null;
  }
}
