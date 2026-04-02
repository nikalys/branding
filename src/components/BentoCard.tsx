import type { ReactNode } from "react";

export interface BentoCardProps {
  id?: string;
  title: string;
  titleLevel?: "h2" | "h3";
  label?: string;
  /** Span all columns (tables, long sections). Part openers can omit—CSS makes first card full width. */
  layout?: "default" | "full";
  children: ReactNode;
  className?: string;
}

export function BentoCard({
  id,
  title,
  titleLevel = "h2",
  label,
  layout = "default",
  children,
  className = "",
}: BentoCardProps) {
  const layoutClass = layout === "full" ? " bento-card--full" : "";

  const Heading = titleLevel;
  const headingId = id ? `${id}-heading` : undefined;

  return (
    <article
      id={id}
      className={`bento-card${layoutClass} ${className}`.trim()}
      aria-labelledby={headingId}
    >
      {label ? <p className="bento-card__label">{label}</p> : null}
      <Heading id={headingId}>{title}</Heading>
      <div className="bento-card__body">{children}</div>
    </article>
  );
}
