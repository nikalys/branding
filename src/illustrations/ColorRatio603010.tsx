import type { CSSProperties } from "react";

/** 60-30-10 ratio bars using guide hex values. */
export function ColorRatio603010({
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
      viewBox="0 0 400 120"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="ratio-title ratio-desc"
    >
      <title id="ratio-title">60-30-10 color distribution</title>
      <desc id="ratio-desc">
        Dominant warm white sixty percent, secondary navy thirty percent, accent gold ten percent.
      </desc>
      <rect x="20" y="30" width="216" height="28" rx="6" fill="#F5F2EE" stroke="#1B2A4A" strokeWidth="1" />
      <rect x="236" y="30" width="108" height="28" rx="6" fill="#1B2A4A" />
      <rect x="344" y="30" width="36" height="28" rx="6" fill="#C9A96E" />
      <text x="20" y="82" fontSize="11" fill="#2d2d2d" fontFamily="Inter, sans-serif">
        60% dominant (surfaces)
      </text>
      <text x="236" y="82" fontSize="11" fill="#2d2d2d" fontFamily="Inter, sans-serif">
        30% secondary
      </text>
      <text x="344" y="82" fontSize="11" fill="#2d2d2d" fontFamily="Inter, sans-serif">
        10% accent
      </text>
    </svg>
  );
}
