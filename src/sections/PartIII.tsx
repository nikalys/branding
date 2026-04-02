import { BentoCard } from "../components/BentoCard";
import { DataTable } from "../components/DataTable";
import { ColorSignalBars } from "../illustrations/ColorSignalBars";
import { TypePairingSample } from "../illustrations/TypePairingSample";
import { ColorRatio603010 } from "../illustrations/ColorRatio603010";
import { ContrastAaDiagram } from "../illustrations/ContrastAaDiagram";
import { CompetitiveMatrix } from "../illustrations/CompetitiveMatrix";

export function PartIII() {
  return (
    <div className="bento-grid">
      <BentoCard
        id="part-iii-implications-of-branding-decisions"
        title="Part III: Implications of Branding Decisions"
        titleLevel="h2"
        label="Section"
      >
        <p style={{ maxWidth: "none" }}>
          Color, type, imagery, competition, ratios, and accessibility—what each choice signals.
        </p>
      </BentoCard>

      <BentoCard id="color" title="Color" titleLevel="h3">
        <p>Color is the fastest-decoded visual signal. It operates before conscious thought.</p>
        <div className="illustration-wrap">
          <ColorSignalBars style={{ width: "100%", maxWidth: "320px" }} />
          <p className="figure-caption">
            Figure: Abstract strip of common brand hues—signals decode before copy does.
          </p>
        </div>
        <DataTable
          caption="Color signals and client types"
          columns={[
            { key: "color", header: "Color" },
            { key: "primary", header: "Primary Signal" },
            { key: "secondary", header: "Secondary Signal" },
            { key: "client", header: "Client Type Attracted" },
          ]}
          rows={[
            {
              color: "Black",
              primary: "Luxury, authority",
              secondary: "Exclusivity",
              client: "Premium, fashion, high-end",
            },
            {
              color: "White/Off-white",
              primary: "Cleanliness, space",
              secondary: "Modernity",
              client: "Any tier, universal",
            },
            {
              color: "Navy/Dark blue",
              primary: "Trust, stability",
              secondary: "Corporate",
              client: "Finance, legal, professional services",
            },
            {
              color: "Bright blue",
              primary: "Technology, clarity",
              secondary: "Reliability",
              client: "Tech, SaaS, startups",
            },
            {
              color: "Green",
              primary: "Growth, freshness",
              secondary: "Sustainability",
              client: "Health, eco, finance, SMB",
            },
            {
              color: "Orange",
              primary: "Energy, creativity",
              secondary: "Approachability",
              client: "Creative, e-commerce, youth",
            },
            {
              color: "Red",
              primary: "Urgency, boldness",
              secondary: "Passion",
              client: "Food, retail, high-energy brands",
            },
            {
              color: "Purple",
              primary: "Innovation, wisdom",
              secondary: "Creativity",
              client: "Beauty, wellness, premium tech",
            },
            {
              color: "Warm neutrals (cream, tan)",
              primary: "Approachability, warmth",
              secondary: "Handcraft",
              client: "Local, artisan, boutique",
            },
            {
              color: "Cool grays",
              primary: "Professionalism",
              secondary: "Balance",
              client: "Corporate, B2B",
            },
          ]}
        />
        <p style={{ marginBottom: 0 }}>
          <strong>Combining colors</strong> amplifies meaning. A dark navy + gold signals established
          premium. A bright blue + white signals tech clarity. A forest green + cream signals organic
          warmth.
        </p>
      </BentoCard>

      <BentoCard id="typography" title="Typography" titleLevel="h3">
        <p>Type communicates personality before a word is read.</p>
        <TypePairingSample />
        <p className="figure-caption">Figure: Serif display over sans body—hierarchy in practice.</p>
        <ul style={{ marginBottom: 0 }}>
          <li>
            <strong>Geometric sans-serif</strong> (Inter, Neue Haas, Futura): Modern, rational, neutral.
            Safe across markets.
          </li>
          <li>
            <strong>Humanist sans-serif</strong> (Gill Sans, Myriad): Warm, approachable. Good for
            service businesses.
          </li>
          <li>
            <strong>Transitional serif</strong> (Georgia, Times variants): Traditional authority. Signals
            established trust.
          </li>
          <li>
            <strong>Modern serif</strong> (Didot, Bodoni): Editorial luxury. Premium tier only.
          </li>
          <li>
            <strong>Slab serif</strong> (Rockwell, Clarendon): Bold, confident. Good for craft-forward
            positioning.
          </li>
          <li>
            <strong>Monospace</strong> (JetBrains Mono, Courier): Technical identity. Dev-adjacent
            markets.
          </li>
          <li>
            <strong>Display/expressive type</strong>: High risk, high reward. Only works when backed by a
            strong portfolio.
          </li>
        </ul>
      </BentoCard>

      <BentoCard id="logo-type" title="Logo Type" titleLevel="h3">
        <DataTable
          caption="Logo format signals and use cases"
          columns={[
            { key: "format", header: "Logo Format" },
            { key: "signal", header: "Signal" },
            { key: "use", header: "Use Case" },
          ]}
          rows={[
            {
              format: "Wordmark only",
              signal: "Name is the brand, confident simplicity",
              use: "Services businesses, early agencies building name recognition",
            },
            {
              format: "Symbol only",
              signal: "Iconic ambition, requires brand maturity",
              use: "Late-stage, well-known brands",
            },
            {
              format: "Combination mark",
              signal: "Flexibility, professionalism",
              use: "Most agencies — best of both worlds",
            },
            {
              format: "Lettermark (monogram)",
              signal: "Elegant, compact",
              use: "When the name is long or complex",
            },
          ]}
        />
      </BentoCard>

      <BentoCard id="naming" title="Naming" titleLevel="h3">
        <ul style={{ marginBottom: 0 }}>
          <li>
            <strong>Descriptive names</strong> (&quot;Swift Web Studio&quot;): Clear but generic, harder to
            own
          </li>
          <li>
            <strong>Abstract/invented names</strong>: High-ownership potential, requires time to build
            meaning
          </li>
          <li>
            <strong>Founder names</strong> (&quot;Smith &amp; Co.&quot;): Personal, builds trust, limits
            scalability
          </li>
          <li>
            <strong>Evocative names</strong>: One strong word that carries brand meaning — highest
            potential
          </li>
        </ul>
      </BentoCard>

      <BentoCard
        id="photography-imagery-direction"
        title="Photography & Imagery Direction"
        titleLevel="h3"
        layout="full"
      >
        <p>
          Imagery is the most underestimated element of agency branding. Mismatched photography
          instantly cheapens an otherwise strong identity. This is especially critical for a web agency
          because your website <em>is</em> the product — clients judge your design taste by every pixel on
          your own site.
        </p>
        <p>
          <strong>Image categories and guidance:</strong>
        </p>
        <DataTable
          caption="Image categories, direction, and pitfalls"
          columns={[
            { key: "cat", header: "Category" },
            { key: "dir", header: "Direction" },
            { key: "avoid", header: "What to Avoid" },
          ]}
          rows={[
            {
              cat: "Hero/lifestyle imagery",
              dir: "Real environments, natural light, human subjects in work contexts",
              avoid: "Generic stock photos with forced smiles, over-saturated filters",
            },
            {
              cat: "Portfolio/case study imagery",
              dir: "High-quality screenshots in device mockups, consistent framing",
              avoid: "Raw screenshots with no context, inconsistent mockup styles",
            },
            {
              cat: "Team/about imagery",
              dir: "Candid but composed, consistent lighting and color grading",
              avoid: "Selfies, low-resolution headshots, inconsistent backgrounds",
            },
            {
              cat: "Abstract/texture imagery",
              dir: "Subtle grain, geometric patterns, or gradients in brand colors",
              avoid: "Busy patterns, unrelated abstract art, AI-generated noise",
            },
            {
              cat: "Iconography",
              dir: "Consistent stroke weight, geometric construction, limited detail",
              avoid: "Mixed icon styles, overly detailed illustrations, clip art",
            },
          ]}
        />
        <p>
          <strong>The image treatment system:</strong>
        </p>
        <p>Define a consistent treatment that applies to all imagery:</p>
        <ul>
          <li>
            <strong>Color overlay</strong>: Do images get a brand-color tint or duotone treatment?
          </li>
          <li>
            <strong>Corners</strong>: Rounded or sharp? Pick one and apply it everywhere.
          </li>
          <li>
            <strong>Borders/shadows</strong>: Consistent elevation system for cards and screenshots.
          </li>
          <li>
            <strong>Grain/texture</strong>: A subtle film grain overlay can unify disparate images under one
            aesthetic.
          </li>
        </ul>
        <p>
          <strong>For a beginner agency:</strong> You likely lack professional photography. This is fine.
          Use a device mockup tool (Figma mockup plugins, shots.so, or similar) to present portfolio work
          consistently. Avoid stock photography on your homepage entirely — it signals that you build
          websites using stock, which clients read as lazy. If you must use imagery, use abstract textures
          or geometric shapes in your brand palette.
        </p>
      </BentoCard>

      <BentoCard
        id="competitive-analysis-framework"
        title="Competitive Analysis Framework"
        titleLevel="h3"
      >
        <div className="illustration-wrap">
          <CompetitiveMatrix style={{ width: "100%", maxWidth: "240px" }} />
          <p className="figure-caption">
            Figure: Map competitors on affordable–premium and corporate–creative axes to find whitespace.
          </p>
        </div>
        <p>
          Before finalizing your brand, you must understand the visual and strategic landscape you are
          entering. Branding does not exist in a vacuum — it exists in contrast to competitors.
        </p>
        <p>
          <strong>The audit process:</strong>
        </p>
        <ol>
          <li>
            <strong>Identify 8–12 competitors</strong> in your local market and price range
          </li>
          <li>
            For each, document:
            <ul>
              <li>Primary and secondary colors used</li>
              <li>Typography style (serif, sans, display)</li>
              <li>Logo format (wordmark, symbol, combo)</li>
              <li>Brand voice (formal, casual, technical, creative)</li>
              <li>Positioning claim (what do they say they do differently?)</li>
              <li>Visual tier signal (budget, mid, premium)</li>
            </ul>
          </li>
          <li>
            <strong>Map the landscape</strong>: Create a simple 2×2 matrix. Common axes:
            <ul>
              <li>X: Affordable ↔ Premium</li>
              <li>Y: Creative ↔ Corporate</li>
            </ul>
          </li>
          <li>
            <strong>Find the gap</strong>: Where are competitors clustered? Where is white space?
          </li>
          <li>
            <strong>Position into the gap</strong>: Choose the visual and verbal territory that is
            underserved
          </li>
        </ol>
        <p style={{ marginBottom: 0 }}>
          <strong>Why this matters:</strong> If every agency in your market uses bright blue and geometric
          sans-serif, doing the same makes you invisible. If they all look corporate, an approachable
          studio aesthetic becomes a differentiator. You cannot differentiate by accident — only through
          deliberate contrast.
        </p>
      </BentoCard>

      <BentoCard
        id="color-usage-ratios-60-30-10-rule"
        title="Color Usage Ratios — The 60-30-10 Rule"
        titleLevel="h3"
      >
        <p>
          Having a palette is not enough. You need a system for <em>how much</em> of each color appears.
          The classic framework:
        </p>
        <div className="illustration-wrap">
          <ColorRatio603010 style={{ width: "100%", maxWidth: "400px" }} />
        </div>
        <ul>
          <li>
            <strong>60% — Dominant color</strong> (backgrounds, large surfaces): Your off-white/warm white
          </li>
          <li>
            <strong>30% — Secondary color</strong> (headings, navigation, sections): Your deep navy
          </li>
          <li>
            <strong>10% — Accent color</strong> (CTAs, highlights, active states): Your muted gold
          </li>
        </ul>
        <p>This ratio creates visual hierarchy and prevents any single color from overwhelming the identity. It applies to:</p>
        <ul>
          <li>Website layouts</li>
          <li>Proposal documents</li>
          <li>Social media templates</li>
          <li>Email signatures</li>
          <li>Slide decks</li>
        </ul>
        <p>
          <strong>Dark mode / inverted contexts:</strong> Flip the 60 and 30 — navy becomes the dominant
          surface, off-white becomes the text and secondary element. The accent stays at 10%.
        </p>
        <p>
          <strong>Neutral support colors:</strong> Beyond your three core colors, define 2–3 functional
          neutrals:
        </p>
        <ul>
          <li>
            A dark text color (not pure black — try #2D2D2D or #1A1A2E)
          </li>
          <li>A medium gray for secondary text and borders (#8A8A8A range)</li>
          <li>A light gray for subtle backgrounds and dividers (#E8E8E8 range)</li>
        </ul>
        <p style={{ marginBottom: 0 }}>
          These are not &quot;brand colors&quot; in the sense that they appear in the logo or marketing —
          they are the infrastructure that allows your brand colors to breathe.
        </p>
      </BentoCard>

      <BentoCard
        id="accessibility-contrast"
        title="Accessibility & Contrast"
        titleLevel="h3"
        layout="full"
      >
        <div className="illustration-wrap">
          <ContrastAaDiagram style={{ width: "100%", maxWidth: "360px" }} />
        </div>
        <p>
          A web design agency that ignores accessibility in its own brand is making a public statement
          about its professional standards. At minimum:
        </p>
        <ul>
          <li>
            <strong>All text on colored backgrounds must meet WCAG 2.1 AA contrast ratios</strong>: 4.5:1
            for body text, 3:1 for large text (18px+ or 14px+ bold)
          </li>
          <li>
            <strong>Your navy (#1B2A4A) on warm white (#F5F2EE)</strong> passes AA at all sizes — this is
            one reason navy is a strong primary
          </li>
          <li>
            <strong>Your gold accent (#C9A96E) on white</strong> will likely fail contrast for small text —
            use it for decorative elements, borders, and icons, not body copy
          </li>
          <li>
            <strong>Gold on navy</strong> should be tested — muted golds can be borderline
          </li>
          <li>
            <strong>Never rely on color alone</strong> to communicate state (error, success, active) — pair
            with icons or text
          </li>
        </ul>
        <p>
          Test your full palette at{" "}
          <a href="https://webaim.org/resources/contrastchecker/" rel="noreferrer noopener">
            contrast-checking tools
          </a>{" "}
          before committing. This is non-negotiable for a web agency. If your own brand fails basic
          accessibility, clients will rightly question whether you will apply it to their sites.
        </p>
      </BentoCard>
    </div>
  );
}
