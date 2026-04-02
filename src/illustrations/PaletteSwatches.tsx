import type { CSSProperties } from "react";

/** Recommended beginner palette swatches. */
export function PaletteSwatches({
  className = "",
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 360 88"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="swatch-title"
    >
      <title id="swatch-title">Deep navy, warm white, and muted gold palette</title>
      <rect x="20" y="24" width="96" height="48" rx="12" fill="#1B2A4A" stroke="rgba(255,255,255,0.35)" />
      <text x="68" y="86" textAnchor="middle" fontSize="10" fill="#2d2d2d" fontFamily="Inter, sans-serif">
        #1B2A4A
      </text>
      <rect x="132" y="24" width="96" height="48" rx="12" fill="#F5F2EE" stroke="#1B2A4A" strokeWidth="1" />
      <text x="180" y="86" textAnchor="middle" fontSize="10" fill="#2d2d2d" fontFamily="Inter, sans-serif">
        #F5F2EE
      </text>
      <rect x="244" y="24" width="96" height="48" rx="12" fill="#C9A96E" stroke="rgba(27,42,74,0.2)" />
      <text x="292" y="86" textAnchor="middle" fontSize="10" fill="#2d2d2d" fontFamily="Inter, sans-serif">
        #C9A96E
      </text>
    </svg>
  );
}
