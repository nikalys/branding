import { BentoCard } from "../components/BentoCard";
import { DataTable } from "../components/DataTable";
import { PaletteSwatches } from "../illustrations/PaletteSwatches";
import { TypePairingSample } from "../illustrations/TypePairingSample";
import { LogoLockupHint } from "../illustrations/LogoLockupHint";
import { DosDontsIcons } from "../illustrations/DosDontsIcons";

export function PartV() {
  return (
    <div className="guide-flow">
      <BentoCard
        id="part-v-recommendations-small-scale-beginner-agency"
        title="Part V: Recommendations for a Small-Scale Beginner Agency ($500–$3,000/project, 1–5 projects/week)"
        titleLevel="h2"
        label="Section"
      >
        <p style={{ maxWidth: "none" }}>
          Practical palette, type, logo, voice, social application, priorities, and do&apos;s and
          don&apos;ts—tailored to early-stage volume and pricing.
        </p>
      </BentoCard>

      <BentoCard id="strategic-positioning" title="Strategic Positioning" titleLevel="h3">
        <p>
          You are an <strong>accessible, professional generalist</strong> with a bias toward small
          businesses that need a real online presence without enterprise budgets. Your clients are
          owners, not marketing departments. They make emotional decisions backed by social proof. They
          need to trust you as a person as much as they trust you as a professional.
        </p>
        <p style={{ marginBottom: 0 }}>
          Your brand should say:{" "}
          <em>&quot;We are modern, dependable, and will make you look legitimate.&quot;</em>
        </p>
      </BentoCard>

      <BentoCard id="color-palette-recommendation" title="Color Palette Recommendation" titleLevel="h3">
        <div className="illustration-wrap">
          <PaletteSwatches style={{ width: "100%", maxWidth: "360px" }} />
        </div>
        <p>
          <strong>Primary: Deep Navy — #1B2A4A (or similar)</strong>
        </p>
        <ul>
          <li>Signals trust, professionalism, and stability</li>
          <li>Universally respected across industries</li>
          <li>
            Works for restaurants, salons, contractors, medical, real estate — virtually any SMB sector
          </li>
          <li>
            Avoids the mistake of looking like a tech startup (bright blue) or a budget provider (harsh
            primaries)
          </li>
        </ul>
        <p>
          <strong>Secondary: Off-White / Warm White — #F5F2EE</strong>
        </p>
        <ul>
          <li>Creates breathing room and cleanliness</li>
          <li>Softer than pure white, signals approachability</li>
          <li>Pairs with navy to create contrast without aggression</li>
        </ul>
        <p>
          <strong>Accent: Muted Gold or Amber — #C9A96E (or similar)</strong>
        </p>
        <ul>
          <li>Elevates the perceived value of the brand without crossing into luxury territory</li>
          <li>Warm undertones humanize the navy&apos;s formality</li>
          <li>Suggests quality, craft, and attention to detail</li>
          <li>Can be used sparingly on CTAs, underlines, or logo marks</li>
        </ul>
        <p>
          <strong>Why this palette works for your stage:</strong>
          <br />
          This combination reads as a legitimate, established business — not a freelancer, not an
          expensive agency. It&apos;s the visual equivalent of a well-dressed founder: polished but not
          intimidating. Clients spending $500–$3,000 want to feel they are working with a real company,
          not a side hustle. This palette delivers that signal.
        </p>
        <p>
          <strong>What to avoid at this stage:</strong>
        </p>
        <ul style={{ marginBottom: 0 }}>
          <li>All-black or stark monochrome: signals premium positioning your portfolio may not yet support</li>
          <li>Neon or highly saturated palettes: signals junior/student work</li>
          <li>Pastels or overly soft colors: reduces perceived competence</li>
          <li>Trendy gradients or complex multi-color systems: hard to apply consistently</li>
        </ul>
      </BentoCard>

      <BentoCard id="typography-recommendation" title="Typography Recommendation" titleLevel="h3">
        <TypePairingSample />
        <p>
          <strong>Primary typeface: Inter or DM Sans (sans-serif)</strong>
        </p>
        <ul>
          <li>Geometric humanist — feels modern and clean, not cold</li>
          <li>Highly legible at all sizes</li>
          <li>Free via Google Fonts — consistent cross-platform rendering</li>
          <li>Widely recognized as the typeface of legitimate digital products</li>
        </ul>
        <p>
          <strong>Display/Heading accent: DM Serif Display or Playfair Display</strong>
        </p>
        <ul>
          <li>A serif accent in headings creates contrast and sophistication</li>
          <li>Signals you understand typographic hierarchy</li>
          <li>The serif/sans pairing is a proven system used by high-end agencies</li>
          <li>Use sparingly — headings and brand statements only</li>
        </ul>
        <p style={{ marginBottom: 0 }}>
          <strong>Why this matters:</strong> Your portfolio pieces will be judged partly by clients&apos;
          impression of your own brand&apos;s type. A thoughtfully paired type system demonstrates you
          understand design principles — which is exactly what clients are paying you to apply to their
          businesses.
        </p>
      </BentoCard>

      <BentoCard id="logo-recommendation" title="Logo Recommendation" titleLevel="h3">
        <div className="illustration-wrap">
          <LogoLockupHint style={{ width: "100%", maxWidth: "200px" }} />
          <p className="figure-caption">
            Figure: Schematic combination mark—compact symbol plus word line for recall.
          </p>
        </div>
        <p>
          <strong>Use a combination mark: wordmark + a simple geometric symbol</strong>
        </p>
        <p>
          <strong>Why:</strong>
        </p>
        <p>
          At early stage, name recognition is near zero. A symbol-only logo has no recall anchor — people
          cannot remember what your symbol means because you haven&apos;t had time to build that
          association. A wordmark alone is functional but misses an opportunity to have a visual device that
          appears on favicons, social avatars, proposal headers, and business cards.
        </p>
        <p>A combination mark gives you:</p>
        <ul>
          <li>A full lockup (symbol + name) for formal contexts</li>
          <li>An isolated symbol for compact contexts (favicon, profile image)</li>
          <li>Name reinforcement every time the logo appears</li>
        </ul>
        <p>
          <strong>Symbol design direction:</strong>
          <br />
          Keep it simple and geometric. One or two shapes maximum. Avoid clichés (globes, rockets,
          lightbulbs, cursive swooshes). Consider abstract letterforms from your agency initials, or a
          minimal geometric mark that suggests construction, precision, or growth. The symbol should be
          recognizable at 16×16px.
        </p>
        <p style={{ marginBottom: 0 }}>
          <strong>Wordmark design direction:</strong>
          <br />
          Set your agency name in your primary sans-serif at a medium-bold weight. Apply subtle
          letter-spacing (+20 to +40 tracking). Do not use script fonts. Do not use decorative variations.
          Cleanliness signals competence.
        </p>
      </BentoCard>

      <BentoCard
        id="brand-personality-model-emotional-territory"
        title="Brand Personality Model & Emotional Territory"
        titleLevel="h3"
      >
        <p>
          Brand voice comes from brand personality. Before writing a single word of copy, define where
          your brand sits on five personality dimensions (adapted from Aaker&apos;s Brand Personality
          framework):
        </p>
        <DataTable
          caption="Brand personality dimensions and recommended position"
          columns={[
            { key: "dim", header: "Dimension" },
            { key: "spec", header: "Spectrum" },
            { key: "pos", header: "Your Position" },
          ]}
          rows={[
            {
              dim: "Sincerity",
              spec: "Corporate ↔ Genuine",
              pos: (
                <>
                  <strong>Lean genuine</strong> — clients at this tier value honesty over polish
                </>
              ),
            },
            {
              dim: "Excitement",
              spec: "Restrained ↔ Energetic",
              pos: (
                <>
                  <strong>Moderate</strong> — enough energy to feel modern, not enough to feel chaotic
                </>
              ),
            },
            {
              dim: "Competence",
              spec: "Casual ↔ Expert",
              pos: (
                <>
                  <strong>Lean expert</strong> — this is your primary trust signal
                </>
              ),
            },
            {
              dim: "Sophistication",
              spec: "Rugged ↔ Refined",
              pos: (
                <>
                  <strong>Center-right</strong> — refined enough to signal taste, not so much it signals
                  expense
                </>
              ),
            },
            {
              dim: "Toughness",
              spec: "Soft ↔ Strong",
              pos: (
                <>
                  <strong>Center</strong> — firm in process, flexible in collaboration
                </>
              ),
            },
          ]}
        />
        <p>
          <strong>Emotional territory your brand should own:</strong>
        </p>
        <p>Your brand should consistently evoke three feelings in clients:</p>
        <ol>
          <li>
            <strong>Relief</strong> — &quot;I found someone who can actually handle this for me&quot;
          </li>
          <li>
            <strong>Confidence</strong> — &quot;These people clearly know what they&apos;re doing&quot;
          </li>
          <li>
            <strong>Ease</strong> — &quot;This process is straightforward, not overwhelming&quot;
          </li>
        </ol>
        <p style={{ marginBottom: 0 }}>
          These are the emotions of a small business owner who has been burned by DIY website builders or
          a cheap freelancer who disappeared mid-project. Your brand should be the antidote to that
          experience.
        </p>
      </BentoCard>

      <BentoCard id="brand-voice" title="Brand Voice" titleLevel="h3">
        <p>Your copy should be:</p>
        <ul>
          <li>
            <strong>Direct</strong> — no jargon, no fluff. Clients don&apos;t know what &quot;UX-driven
            digital experiences&quot; means.
          </li>
          <li>
            <strong>Confident</strong> — you solve specific problems. Name them.
          </li>
          <li>
            <strong>Human</strong> — you are talking to owners, not procurement teams. First-person works.
          </li>
          <li>
            <strong>Specific</strong> — replace vague adjectives with concrete outcomes.
            &quot;Beautiful&quot; means nothing. &quot;A site that loads in under 2 seconds and converts
            visitors into calls&quot; means everything.
          </li>
        </ul>
        <p>Example:</p>
        <blockquote className="blockquote-card">
          <p>
            <em>Bad: &quot;We craft bespoke digital solutions for forward-thinking brands.&quot;</em>
          </p>
          <p style={{ marginTop: "0.75rem", marginBottom: 0 }}>
            <em>Good: &quot;We build websites that make your business look the part and bring in customers.&quot;</em>
          </p>
        </blockquote>
        <p>
          <strong>Voice calibration by context:</strong>
        </p>
        <DataTable
          caption="Tone shifts by communication context"
          columns={[
            { key: "ctx", header: "Context" },
            { key: "tone", header: "Tone Shift" },
          ]}
          rows={[
            { ctx: "Website homepage", tone: "Confident, clear, outcome-focused" },
            { ctx: "Proposal document", tone: "Professional, specific, reassuring" },
            { ctx: "Email communication", tone: "Warm, direct, human" },
            { ctx: "Social media", tone: "Slightly more casual, show personality, share process" },
            { ctx: "Error/apology situations", tone: "Honest, accountable, solution-oriented" },
          ]}
        />
        <p>
          <strong>Words to use:</strong> build, launch, clear, reliable, proven, real, results, simple,
          yours
        </p>
        <p style={{ marginBottom: 0 }}>
          <strong>Words to avoid:</strong> synergy, leverage, disrupt, bespoke, cutting-edge, guru, ninja,
          rockstar, revolutionize
        </p>
      </BentoCard>

      <BentoCard
        id="social-media-brand-application"
        title="Social Media Brand Application"
        titleLevel="h3"
      >
        <p>
          Social media is where most first impressions happen now — often before a prospect visits your
          website. Your social presence must be as intentional as your site.
        </p>
        <p>
          <strong>Platform priorities for a beginner web agency:</strong>
        </p>
        <ol>
          <li>
            <strong>Instagram</strong> — visual portfolio, process shots, before/after reveals. This is
            your highest-ROI social channel for attracting SMB clients.
          </li>
          <li>
            <strong>LinkedIn</strong> — professional credibility, case study writeups, thought leadership.
            Critical for B2B and higher-value clients.
          </li>
          <li>
            <strong>TikTok/Short-form video</strong> — process videos, design tips, behind-the-scenes.
            High reach potential but requires consistency.
          </li>
        </ol>
        <p>
          <strong>Visual consistency rules:</strong>
        </p>
        <ul>
          <li>
            Use 2–3 post templates in your brand colors and type. Rotate them. Do not freestyle every post.
          </li>
          <li>
            Profile picture: your logo symbol (not the full lockup — it won&apos;t read at that size)
          </li>
          <li>Bio: one sentence of positioning + a clear CTA. Match your website headline.</li>
          <li>
            Highlight covers (Instagram): use your accent color on your primary background. Consistent
            icons or labels.
          </li>
          <li>Never post raw screenshots. Always use mockups or branded frames.</li>
        </ul>
        <p>
          <strong>Content pillars</strong> (3–4 recurring themes that structure what you post):
        </p>
        <p>For a web agency at this stage:</p>
        <ol style={{ marginBottom: 0 }}>
          <li>
            <strong>Portfolio reveals</strong> — finished projects with context about the client and result
          </li>
          <li>
            <strong>Process/behind-the-scenes</strong> — show how sites get built, humanize the work
          </li>
          <li>
            <strong>Tips/education</strong> — short web design or business tips that demonstrate expertise
          </li>
          <li>
            <strong>Social proof</strong> — testimonials, client feedback, launch celebrations
          </li>
        </ol>
      </BentoCard>

      <BentoCard id="brand-application-priorities" title="Brand Application Priorities" titleLevel="h3">
        <p>
          At 1–5 projects per week, you need a brand system that you can apply consistently without
          significant overhead. Build these in order:
        </p>
        <ol style={{ marginBottom: 0 }}>
          <li>
            <strong>Logo (combination mark)</strong> — SVG, minimum 3 variants (full color, symbol only,
            reversed/white). Also export PNG at 2x for social and documents.
          </li>
          <li>
            <strong>Color tokens</strong> — define exact hex values, RGB equivalents, and when each color is
            used. Document on a single reference sheet.
          </li>
          <li>
            <strong>Type scale</strong> — define H1–H6 sizes, body, caption, and label in one document.
            Include line-height and weight for each.
          </li>
          <li>
            <strong>Email signature</strong> — every email is a brand touchpoint. Include logo, name, title,
            one link.
          </li>
          <li>
            <strong>Proposal template</strong> — this is where clients decide. Your brand on your proposal
            = your pitch.
          </li>
          <li>
            <strong>Social media templates</strong> — 2–3 Figma/Canva templates for recurring post types
          </li>
          <li>
            <strong>Invoice/contract template</strong> — branded financial documents signal professionalism
          </li>
          <li>
            <strong>Website</strong> — your own site is your #1 portfolio piece and strongest sales tool
          </li>
        </ol>
      </BentoCard>

      <BentoCard
        id="comprehensive-dos-and-donts"
        title="Comprehensive Do's and Don'ts"
        titleLevel="h3"
      >
        <div className="illustration-wrap">
          <DosDontsIcons style={{ width: "100%", maxWidth: "200px" }} />
          <p className="figure-caption">Figure: Reinforce system discipline—clarity over decoration.</p>
        </div>
        <p>
          <strong>Visual Identity Do&apos;s:</strong>
        </p>
        <ul>
          <li>Maintain minimum clear space around the logo (equal to the height of the logo&apos;s symbol)</li>
          <li>Use your exact hex values — never approximate</li>
          <li>Apply the 60-30-10 color ratio consistently</li>
          <li>Use the same mockup style across all portfolio presentations</li>
          <li>Keep the type scale consistent — don&apos;t invent new sizes per page</li>
          <li>Let elements breathe — generous whitespace signals confidence and quality</li>
        </ul>
        <p>
          <strong>Visual Identity Don&apos;ts:</strong>
        </p>
        <ul>
          <li>Never stretch, rotate, or distort the logo</li>
          <li>Never place the logo on busy backgrounds without a container or overlay</li>
          <li>Never use more than 3 colors in a single composition (brand + neutrals excepted)</li>
          <li>Never mix your brand fonts with random display fonts in brand materials</li>
          <li>Never use drop shadows, bevels, emboss, or outer glow effects on the logo</li>
          <li>
            Never use your accent color (gold) as a background fill — it is for details only
          </li>
          <li>Never use low-resolution images or uncompressed screenshots in portfolio work</li>
        </ul>
        <p>
          <strong>Voice &amp; Communication Don&apos;ts:</strong>
        </p>
        <ul style={{ marginBottom: 0 }}>
          <li>Never badmouth competitors — focus on what you do, not what others don&apos;t</li>
          <li>Never use technical jargon without explaining it when talking to clients</li>
          <li>Never make promises about timelines you cannot keep — under-promise, over-deliver</li>
          <li>Never send unbranded documents (plain Word docs, unstyled emails)</li>
        </ul>
      </BentoCard>
    </div>
  );
}
