import { BentoCard } from "../components/BentoCard";
import { RoadmapPhases } from "../illustrations/RoadmapPhases";

export function PartVI() {
  return (
    <div className="bento-grid">
      <BentoCard
        id="part-vi-brand-evolution-roadmap"
        title="Part VI: Brand Evolution Roadmap"
        titleLevel="h2"
        label="Section"
      >
        <p style={{ maxWidth: "none" }}>
          Your brand is not static. It should evolve as your agency grows. But evolution must be
          deliberate — not reactive. Here is a phased roadmap:
        </p>
        <div className="illustration-wrap">
          <RoadmapPhases style={{ width: "100%", maxWidth: "400px" }} />
        </div>
      </BentoCard>

      <BentoCard
        id="phase-1-foundation"
        title="Phase 1: Foundation (Months 1–6, $500–$1,500/project)"
        titleLevel="h3"
      >
        <p>
          <strong>Focus:</strong> Establish credibility. Look like a real business.
        </p>
        <ul>
          <li>Lock in logo, palette, type, and voice</li>
          <li>Build your own website — it is your single most important marketing asset</li>
          <li>Create templates for proposals, invoices, and social posts</li>
          <li>Collect every testimonial. Display them prominently.</li>
          <li>
            Your brand promise: &quot;We deliver clean, professional websites on time and on budget.&quot;
          </li>
        </ul>
        <p style={{ marginBottom: 0 }}>
          <strong>Portfolio goal:</strong> 10–15 completed projects across 3+ industries.
        </p>
      </BentoCard>

      <BentoCard
        id="phase-2-refinement"
        title="Phase 2: Refinement (Months 6–18, $1,500–$3,000/project)"
        titleLevel="h3"
      >
        <p>
          <strong>Focus:</strong> Sharpen positioning. Begin to specialize or differentiate.
        </p>
        <ul>
          <li>Audit your portfolio — which projects are strongest? Which industries keep coming back?</li>
          <li>Refine your messaging to emphasize results, not just deliverables</li>
          <li>Introduce case studies with before/after metrics where possible</li>
          <li>Consider tightening your niche (2–3 verticals instead of &quot;anyone&quot;)</li>
          <li>Upgrade visual assets: professional mockups, possibly a brand photoshoot</li>
          <li>
            Your brand promise evolves: &quot;We build websites that drive real business results for
            [specific audience].&quot;
          </li>
        </ul>
        <p style={{ marginBottom: 0 }}>
          <strong>Portfolio goal:</strong> 25–40 projects, with 5–8 strong case studies.
        </p>
      </BentoCard>

      <BentoCard
        id="phase-3-elevation"
        title="Phase 3: Elevation (Months 18–36, $3,000–$8,000+/project)"
        titleLevel="h3"
        layout="full"
      >
        <p>
          <strong>Focus:</strong> Move upmarket. Brand signals premium without losing approachability.
        </p>
        <ul>
          <li>
            Consider a visual identity refresh — not a rebrand, but an elevation (tighter typography, more
            refined color application, more editorial layout)
          </li>
          <li>
            Introduce strategy-led services (brand strategy, conversion optimization, ongoing retainers)
          </li>
          <li>Shift from volume to selectivity — fewer, better projects</li>
          <li>Build authority content (case study deep-dives, talks, guest features)</li>
          <li>
            Your brand promise evolves: &quot;We are the strategic partner that [specific audience] trusts
            to grow online.&quot;
          </li>
        </ul>
        <p>
          <strong>Key principle:</strong> Never rebrand reactively. Rebrand when your capabilities have
          genuinely outgrown your identity — when the portfolio makes the old brand feel like it&apos;s
          underselling you. That is the signal.
        </p>
      </BentoCard>

      <BentoCard
        id="summary-positioning-in-one-sentence"
        title="Summary: Positioning in One Sentence"
        titleLevel="h3"
        layout="full"
      >
        <blockquote className="blockquote-card" style={{ maxWidth: "min(52ch, 100%)" }}>
          <p style={{ marginBottom: 0 }}>
            A dependable, modern web studio that makes small businesses look credible — at a price that
            makes sense for where they are now.
          </p>
        </blockquote>
        <p>
          This is the north star. Every color choice, word choice, and design decision should serve this
          positioning until the portfolio earns the right to move upmarket.
        </p>
        <footer style={{ marginTop: "1.5rem", fontSize: "0.9rem", color: "var(--color-text-muted)" }}>
          <p style={{ margin: 0 }}>Guide authored: 2026-04-02</p>
          <p style={{ margin: "0.25rem 0 0" }}>Reviewed and expanded: 2026-04-02</p>
        </footer>
      </BentoCard>
    </div>
  );
}
