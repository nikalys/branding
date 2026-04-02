import type { CSSProperties } from "react";

/** Combination mark: symbol + word line. */
export function LogoLockupHint({ style }: { style?: CSSProperties }) {
  return (
    <svg
      style={style}
      viewBox="0 0 200 56"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="8" y="10" width="36" height="36" rx="8" fill="none" stroke="#1B2A4A" strokeWidth="2" />
      <path d="M20 34 L26 22 L32 34" fill="none" stroke="#C9A96E" strokeWidth="2" />
      <line x1="56" y1="22" x2="188" y2="22" stroke="#1B2A4A" strokeWidth="3" strokeLinecap="round" />
      <line x1="56" y1="34" x2="160" y2="34" stroke="#1B2A4A" strokeWidth="2" opacity="0.35" strokeLinecap="round" />
    </svg>
  );
}
