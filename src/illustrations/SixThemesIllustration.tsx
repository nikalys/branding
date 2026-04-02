import type { CSSProperties } from "react";

/** Six distinct mini-compositions for agency theme territories. */
export function SixThemesIllustration({
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
      viewBox="0 0 420 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g opacity="0.9">
        <rect x="8" y="20" width="58" height="60" rx="8" fill="#F5F2EE" stroke="#1B2A4A" />
        <line x1="16" y1="40" x2="58" y2="40" stroke="#1B2A4A" strokeWidth="1" />
        <line x1="16" y1="52" x2="50" y2="52" stroke="#1B2A4A" strokeWidth="1" opacity="0.5" />
      </g>
      <g>
        <rect x="78" y="16" width="58" height="68" rx="6" fill="#1B2A4A" />
        <text x="107" y="54" textAnchor="middle" fill="#C9A96E" fontSize="22" fontWeight="700">
          Aa
        </text>
      </g>
      <g>
        <rect x="148" y="22" width="58" height="56" rx="4" fill="#1A1A2E" />
        <text
          x="177"
          y="56"
          textAnchor="middle"
          fill="#8A8A8A"
          fontSize="11"
          fontFamily="monospace"
        >
          &lt;/&gt;
        </text>
      </g>
      <g>
        <rect x="218" y="24" width="58" height="54" rx="16" fill="#E8E8E8" stroke="#C9A96E" />
        <circle cx="247" cy="50" r="14" fill="none" stroke="#1B2A4A" strokeWidth="1.5" />
      </g>
      <g>
        <rect x="288" y="20" width="58" height="60" rx="2" fill="#F5F2EE" stroke="#1B2A4A" />
        <line x1="296" y1="48" x2="338" y2="48" stroke="#1B2A4A" strokeWidth="0.8" />
        <line x1="300" y1="58" x2="334" y2="58" stroke="#1B2A4A" strokeWidth="0.8" />
      </g>
      <g>
        <rect x="358" y="26" width="54" height="48" rx="10" fill="#C9A96E" opacity="0.35" />
        <path d="M372 50h28" stroke="#1B2A4A" strokeWidth="2" />
        <circle cx="386" cy="50" r="4" fill="#1B2A4A" />
      </g>
    </svg>
  );
}
