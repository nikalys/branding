import type { CSSProperties } from "react";

/** Simple geometric do and don't marks for identity rules. */
export function DosDontsIcons({
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
      viewBox="0 0 200 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="40" cy="32" r="22" fill="rgba(22,101,52,0.12)" stroke="#166534" strokeWidth="1.5" />
      <path d="M30 32 L36 38 L50 24" fill="none" stroke="#166534" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="100" cy="32" r="22" fill="rgba(185,28,28,0.1)" stroke="#b91c1c" strokeWidth="1.5" />
      <path d="M92 24 L108 40 M108 24 L92 40" stroke="#b91c1c" strokeWidth="2.2" strokeLinecap="round" />
      <text x="148" y="28" fontSize="10" fill="#2d2d2d" fontFamily="Inter, sans-serif">
        system
      </text>
      <text x="148" y="44" fontSize="10" fill="#8a8a8a" fontFamily="Inter, sans-serif">
        violations
      </text>
    </svg>
  );
}
