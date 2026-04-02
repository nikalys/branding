import type { CSSProperties } from "react";

/** Three-phase brand evolution path. */
export function RoadmapPhases({
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
      viewBox="0 0 400 100"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="roadmap-title"
    >
      <title id="roadmap-title">Foundation, refinement, and elevation phases connected in sequence</title>
      <path
        d="M40 50 H360"
        stroke="#1B2A4A"
        strokeWidth="2"
        strokeDasharray="4 6"
        opacity="0.35"
      />
      <circle cx="80" cy="50" r="14" fill="#1B2A4A" />
      <text x="80" y="55" textAnchor="middle" fill="#F5F2EE" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">
        1
      </text>
      <circle cx="200" cy="50" r="14" fill="#C9A96E" />
      <text x="200" y="55" textAnchor="middle" fill="#1B2A4A" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">
        2
      </text>
      <circle cx="320" cy="50" r="14" fill="#F5F2EE" stroke="#1B2A4A" strokeWidth="2" />
      <text x="320" y="55" textAnchor="middle" fill="#1B2A4A" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">
        3
      </text>
      <text x="80" y="82" textAnchor="middle" fontSize="9" fill="#5c5c5c" fontFamily="Inter, sans-serif">
        Foundation
      </text>
      <text x="200" y="82" textAnchor="middle" fontSize="9" fill="#5c5c5c" fontFamily="Inter, sans-serif">
        Refinement
      </text>
      <text x="320" y="82" textAnchor="middle" fontSize="9" fill="#5c5c5c" fontFamily="Inter, sans-serif">
        Elevation
      </text>
    </svg>
  );
}
