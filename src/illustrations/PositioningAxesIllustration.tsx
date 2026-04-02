import type { CSSProperties } from "react";

/** Three positioning axes for a web agency (schematic). */
export function PositioningAxesIllustration({
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
      viewBox="0 0 360 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <line x1="40" y1="160" x2="320" y2="160" stroke="#1B2A4A" strokeWidth="1.2" opacity="0.4" />
      <line x1="40" y1="160" x2="40" y2="30" stroke="#1B2A4A" strokeWidth="1.2" opacity="0.4" />
      <line x1="40" y1="160" x2="280" y2="50" stroke="#1B2A4A" strokeWidth="1" opacity="0.25" />
      <circle cx="200" cy="100" r="10" fill="#C9A96E" opacity="0.85" />
      <circle cx="200" cy="100" r="4" fill="#1B2A4A" />
      <text x="325" y="165" fontSize="10" fill="#5c5c5c" fontFamily="Inter, sans-serif">
        A
      </text>
      <text x="32" y="24" fontSize="10" fill="#5c5c5c" fontFamily="Inter, sans-serif">
        B
      </text>
      <text x="285" y="48" fontSize="10" fill="#5c5c5c" fontFamily="Inter, sans-serif">
        C
      </text>
    </svg>
  );
}
