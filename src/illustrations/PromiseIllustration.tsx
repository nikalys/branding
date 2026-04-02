import type { CSSProperties } from "react";

/** Decorative: trust as a closed loop between expectation and delivery. */
export function PromiseIllustration({
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
      viewBox="0 0 320 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <ellipse
        cx="160"
        cy="70"
        rx="120"
        ry="48"
        stroke="#1B2A4A"
        strokeWidth="1.5"
        opacity="0.35"
      />
      <path
        d="M52 70c0-22 48-40 108-40s108 18 108 40-48 40-108 40"
        stroke="#C9A96E"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="70" cy="70" r="6" fill="#1B2A4A" />
      <circle cx="250" cy="70" r="6" fill="#C9A96E" />
      <path
        d="M76 64h8v12h-8z M244 64h8v12h-8z"
        fill="#F5F2EE"
        stroke="#1B2A4A"
        strokeWidth="1"
      />
    </svg>
  );
}
