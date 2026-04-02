import type { CSSProperties } from "react";

/** Abstract color signals as vertical bars (Part III). */
export function ColorSignalBars({
  className = "",
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  const colors = ["#1A1A1A", "#F5F2EE", "#1B2A4A", "#2563eb", "#16a34a", "#ea580c", "#dc2626", "#7c3aed"];
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 320 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {colors.map((c, i) => {
        const h = 30 + (i % 4) * 12;
        const x = 20 + i * 36;
        return (
          <rect
            key={c}
            x={x}
            y={80 - h}
            width="24"
            height={h}
            rx="4"
            fill={c}
            opacity="0.85"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="1"
          />
        );
      })}
    </svg>
  );
}
