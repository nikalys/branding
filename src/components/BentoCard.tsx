import type { ReactNode } from "react";

export interface BentoCardProps {
  id?: string;
  title: string;
  titleLevel?: "h2" | "h3";
  label?: string;
  children: ReactNode;
  className?: string;
}

/** One subsection in the guide—linear reading order, no bento/grid tiles. */
export function BentoCard({
  id,
  title,
  titleLevel = "h2",
  label,
  children,
  className = "",
}: BentoCardProps) {
  const Heading = titleLevel;
  const headingId = id ? `${id}-heading` : undefined;

  return (
    <article
      id={id}
      className={`guide-section ${className}`.trim()}
      aria-labelledby={headingId}
    >
      {label ? <p className="guide-section__label">{label}</p> : null}
      <Heading id={headingId}>{title}</Heading>
      <div className="guide-section__body">{children}</div>
    </article>
  );
}
