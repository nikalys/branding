import { useEffect, useId, useState } from "react";
import { navTree, type NavEntry } from "../content/navData";

interface TableOfContentsProps {
  activeId: string;
  onNavigate?: () => void;
}

function NavBranch({
  entries,
  activeId,
  onNavigate,
  onLinkClick,
  depth,
}: {
  entries: NavEntry[];
  activeId: string;
  onNavigate?: () => void;
  onLinkClick: () => void;
  depth: number;
}) {
  return (
    <ul>
      {entries.map((entry) => (
        <li key={entry.id}>
          <a
            href={`#${entry.id}`}
            className={
              depth === 0
                ? `toc-part${activeId === entry.id ? " is-active" : ""}`
                : `toc-sublink${activeId === entry.id ? " is-active" : ""}`
            }
            onClick={() => {
              onNavigate?.();
              onLinkClick();
            }}
          >
            {entry.label}
          </a>
          {entry.children ? (
            <NavBranch
              entries={entry.children}
              activeId={activeId}
              onNavigate={onNavigate}
              onLinkClick={onLinkClick}
              depth={depth + 1}
            />
          ) : null}
        </li>
      ))}
    </ul>
  );
}

export function TableOfContents({ activeId, onNavigate }: TableOfContentsProps) {
  const panelId = useId();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="toc-nav" aria-label="Guide sections">
      <button
        type="button"
        className="mobile-toc-toggle"
        aria-expanded={mobileOpen}
        aria-controls={panelId}
        onClick={() => setMobileOpen((o) => !o)}
      >
        Contents
        <span aria-hidden="true">{mobileOpen ? "−" : "+"}</span>
      </button>
      <div id={panelId} className={`mobile-toc-panel${mobileOpen ? " is-open" : ""}`}>
        <NavBranch
          entries={navTree}
          activeId={activeId}
          onNavigate={onNavigate}
          onLinkClick={() => setMobileOpen(false)}
          depth={0}
        />
      </div>
    </nav>
  );
}

/** Observes section visibility to highlight the current TOC link. */
export function useScrollSpy(ids: readonly string[], rootMargin = "-20% 0px -60% 0px") {
  const [activeId, setActiveId] = useState(ids[0] ?? "");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]?.target.id) setActiveId(visible[0].target.id);
      },
      { root: null, rootMargin, threshold: [0, 0.25, 0.5, 1] },
    );

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, [ids, rootMargin]);

  return activeId;
}
