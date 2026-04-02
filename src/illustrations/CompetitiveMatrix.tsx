import type { CSSProperties } from "react";

/** 2×2 landscape: affordable to premium vs creative to corporate. */
export function CompetitiveMatrix({
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
      viewBox="0 0 240 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="matrix-title"
    >
      <title id="matrix-title">Competitive map with affordable to premium and creative to corporate axes</title>
      <rect x="40" y="32" width="160" height="140" rx="8" fill="rgba(27,42,74,0.04)" stroke="#1B2A4A" />
      <line x1="120" y1="32" x2="120" y2="172" stroke="#C9A96E" strokeWidth="1.2" opacity="0.7" />
      <line x1="40" y1="102" x2="200" y2="102" stroke="#C9A96E" strokeWidth="1.2" opacity="0.7" />
      <text x="120" y="24" textAnchor="middle" fontSize="9" fill="#5c5c5c" fontFamily="Inter, sans-serif">
        Premium
      </text>
      <text x="120" y="196" textAnchor="middle" fontSize="9" fill="#5c5c5c" fontFamily="Inter, sans-serif">
        Affordable
      </text>
      <text x="28" y="106" textAnchor="end" fontSize="9" fill="#5c5c5c" fontFamily="Inter, sans-serif">
        Corp
      </text>
      <text x="208" y="106" fontSize="9" fill="#5c5c5c" fontFamily="Inter, sans-serif">
        Creative
      </text>
      <circle cx="88" cy="130" r="5" fill="#1B2A4A" opacity="0.5" />
      <circle cx="145" cy="75" r="5" fill="#C9A96E" opacity="0.9" />
      <circle cx="132" cy="118" r="4" fill="#1B2A4A" opacity="0.35" />
    </svg>
  );
}
