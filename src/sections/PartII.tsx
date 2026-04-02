import { BentoCard } from "../components/BentoCard";
import { SixThemesIllustration } from "../illustrations/SixThemesIllustration";

export function PartII() {
  return (
    <div className="guide-flow">
      <BentoCard
        id="part-ii-choosing-a-brand-theme"
        title="Part II: Choosing a Brand Theme"
        titleLevel="h2"
        label="Section"
      >
        <p style={{ maxWidth: "none" }}>
          How to choose the emotional and aesthetic territory your agency owns.
        </p>
      </BentoCard>

      <BentoCard
        id="the-theme-selection-framework"
        title="The Theme Selection Framework"
        titleLevel="h3"
      >
        <p>
          A brand theme is the emotional and aesthetic territory your agency owns. It should emerge
          from the intersection of three things:
        </p>
        <ol>
          <li>
            <strong>Who your clients are</strong> — their taste, sophistication, and what they respond
            to
          </li>
          <li>
            <strong>What you do best</strong> — your actual craft strengths
          </li>
          <li>
            <strong>What market gap exists</strong> — what competitors are not doing
          </li>
        </ol>
      </BentoCard>

      <BentoCard
        id="the-six-primary-agency-themes"
        title="The Six Primary Agency Themes"
        titleLevel="h3"
      >
        <div className="illustration-wrap">
          <SixThemesIllustration style={{ width: "100%", maxWidth: "min(420px, 100%)" }} />
          <p className="figure-caption">
            Figure: Six visual metaphors—clean, bold, technical, warm, premium editorial, niche focus.
          </p>
        </div>
        <p>
          <strong>1. The Clean Executor</strong>
          <br />
          Minimal, white-space-heavy, highly typographic. Signals precision and professionalism.
          Attracts SMBs wanting something &quot;clean and modern.&quot; Risk: forgettable without a strong
          differentiator.
        </p>
        <p>
          <strong>2. The Bold Creative</strong>
          <br />
          High-contrast, expressive typography, unexpected color. Signals originality. Attracts brands
          in lifestyle, fashion, food, culture. Risk: alienates conservative clients.
        </p>
        <p>
          <strong>3. The Technical Partner</strong>
          <br />
          Dark backgrounds, monospace accents, structured grids. Signals depth and capability.
          Attracts SaaS, startups, tech companies. Risk: feels cold to non-technical clients.
        </p>
        <p>
          <strong>4. The Approachable Studio</strong>
          <br />
          Warm neutrals, rounded type, friendly tone. Signals accessibility. Attracts local businesses,
          solopreneurs, non-profits. Risk: undervalues the work in client perception.
        </p>
        <p>
          <strong>5. The Premium Consultancy</strong>
          <br />
          Restrained palette, serif type, editorial spacing. Signals exclusivity and expertise. Attracts
          established businesses with real budgets. Risk: requires genuine portfolio depth to back it
          up.
        </p>
        <p style={{ marginBottom: 0 }}>
          <strong>6. The Niche Specialist</strong>
          <br />
          Identity built around a specific vertical (restaurants, law firms, e-commerce). Signals focused
          expertise. Attracts clients in that niche. Risk: limits future expansion.
        </p>
      </BentoCard>
    </div>
  );
}
