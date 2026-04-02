const stages = [
  "Discovery",
  "Inquiry",
  "Proposal",
  "Onboarding",
  "Production",
  "Delivery",
  "Post",
];

import type { CSSProperties } from "react";

/** Horizontal timeline matching client journey stages. */
export function JourneyTimeline({
  className = "",
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  const w = 520;
  const pad = 24;
  const step = (w - pad * 2) / (stages.length - 1);
  return (
    <svg
      className={className}
      style={style}
      viewBox={`0 0 ${w} 72`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="journey-timeline-title"
    >
      <title id="journey-timeline-title">Client journey stages from discovery to post-project</title>
      <line x1={pad} y1="28" x2={w - pad} y2="28" stroke="#1B2A4A" strokeWidth="2" opacity="0.25" />
      {stages.map((label, i) => {
        const x = pad + i * step;
        return (
          <g key={label}>
            <circle cx={x} cy="28" r="6" fill={i % 2 === 0 ? "#1B2A4A" : "#C9A96E"} />
            <text
              x={x}
              y="52"
              textAnchor="middle"
              fontSize="9"
              fill="#2d2d2d"
              fontFamily="Inter, sans-serif"
            >
              {label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
