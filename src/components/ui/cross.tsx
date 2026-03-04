/**
 * Cross — a single "+" SVG mark for structural grid intersections.
 */

import type { CSSProperties } from "react";

const SIZE = 20;
const COLOR = "var(--primary)";
const STROKE = 1;

interface CrossProps {
  className?: string;
  style?: CSSProperties;
  opacity?: number;
}

export default function Cross({ className = "", style, opacity = 0.35 }: CrossProps) {
  return (
    <div className={`pointer-events-none ${className}`} style={style} aria-hidden="true">
      <svg
        width={SIZE}
        height={SIZE}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        fill="none"
        style={{ opacity }}
      >
        <line x1={SIZE / 2} y1={0} x2={SIZE / 2} y2={SIZE} stroke={COLOR} strokeWidth={STROKE} />
        <line x1={0} y1={SIZE / 2} x2={SIZE} y2={SIZE / 2} stroke={COLOR} strokeWidth={STROKE} />
      </svg>
    </div>
  );
}
