import type { CSSProperties } from "react";

/** Positioning tiers as ascending bands. */
export function MarketTierLadder({
  className = "",
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  const tiers = ["Budget", "Mid", "Niche", "Creative", "Growth", "Enterprise"];
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 280 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="tier-ladder-title"
    >
      <title id="tier-ladder-title">Market positioning tiers from budget to enterprise</title>
      {tiers.map((t, i) => {
        const y = 160 - i * 26;
        const w = 80 + i * 22;
        return (
          <g key={t}>
            <rect
              x={140 - w / 2}
              y={y}
              width={w}
              height="20"
              rx="6"
              fill={i % 2 === 0 ? "rgba(27,42,74,0.12)" : "rgba(201,169,110,0.25)"}
              stroke="#1B2A4A"
              strokeWidth="0.8"
              opacity="0.9"
            />
            <text x="140" y={y + 14} textAnchor="middle" fontSize="9" fill="#1B2A4A" fontFamily="Inter, sans-serif">
              {t}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
