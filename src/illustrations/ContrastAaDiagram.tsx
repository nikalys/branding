import type { CSSProperties } from "react";

/** WCAG AA contrast concept: body vs large text thresholds. */
export function ContrastAaDiagram({
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
      viewBox="0 0 360 100"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="contrast-title"
    >
      <title id="contrast-title">WCAG AA contrast: 4.5 to one for body text, 3 to one for large text</title>
      <rect x="16" y="20" width="150" height="36" rx="8" fill="#1B2A4A" />
      <text x="91" y="44" textAnchor="middle" fill="#F5F2EE" fontSize="13" fontFamily="Inter, sans-serif">
        Aa body 4.5:1
      </text>
      <rect x="182" y="24" width="162" height="44" rx="8" fill="#F5F2EE" stroke="#1B2A4A" />
      <text x="263" y="52" textAnchor="middle" fill="#1B2A4A" fontSize="18" fontWeight="700" fontFamily="Inter, sans-serif">
        Aa 3:1
      </text>
      <text x="16" y="88" fontSize="10" fill="#5c5c5c" fontFamily="Inter, sans-serif">
        Pair type and surface; test gold on white for small copy.
      </text>
    </svg>
  );
}
