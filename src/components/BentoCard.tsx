import type { ReactNode } from "react";

export type BentoSpan = 4 | 6 | 8 | 12;

export interface BentoCardProps {
  id?: string;
  title: string;
  titleLevel?: "h2" | "h3";
  label?: string;
  span?: BentoSpan;
  children: ReactNode;
  className?: string;
}

export function BentoCard({
  id,
  title,
  titleLevel = "h2",
  label,
  span = 12,
  children,
  className = "",
}: BentoCardProps) {
  const spanClass =
    span === 12
      ? ""
      : span === 8
        ? " bento-card--span-8"
        : span === 6
          ? " bento-card--span-6"
          : " bento-card--span-4";

  const Heading = titleLevel;
  const headingId = id ? `${id}-heading` : undefined;

  return (
    <article
      id={id}
      className={`bento-card${spanClass} ${className}`.trim()}
      aria-labelledby={headingId}
    >
      {label ? <p className="bento-card__label">{label}</p> : null}
      <Heading id={headingId}>{title}</Heading>
      {children}
    </article>
  );
}
