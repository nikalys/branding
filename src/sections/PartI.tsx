import { BentoCard } from "../components/BentoCard";
import { DataTable } from "../components/DataTable";
import { PromiseIllustration } from "../illustrations/PromiseIllustration";
import { PositioningAxesIllustration } from "../illustrations/PositioningAxesIllustration";
import { ArchetypeGlyph, archetypeKeys } from "../illustrations/ArchetypeGlyph";
import { JourneyTimeline } from "../illustrations/JourneyTimeline";

const archetypeTitles: Record<(typeof archetypeKeys)[number], string> = {
  creator: "The Creator",
  sage: "The Sage",
  hero: "The Hero",
  explorer: "The Explorer",
  magician: "The Magician",
  ruler: "The Ruler",
  caregiver: "The Caregiver",
  everyman: "The Everyman",
  jester: "The Jester",
  lover: "The Lover",
  outlaw: "The Outlaw",
  innocent: "The Innocent",
};

export function PartI() {
  return (
    <>
      <BentoCard
        id="part-i-core-brand-principles"
        title="Part I: Core Brand Principles"
        titleLevel="h2"
        label="Section"
        span={12}
      >
        <p style={{ maxWidth: "none" }}>
          Foundational ideas that shape how a web design agency presents itself and earns trust.
        </p>
      </BentoCard>

      <BentoCard
        id="the-brand-is-a-promise"
        title="1. The Brand is a Promise"
        titleLevel="h3"
        span={6}
      >
        <div className="illustration-wrap">
          <PromiseIllustration style={{ width: "100%", maxWidth: "280px" }} />
          <p className="figure-caption">
            Figure: Expectations and delivery form a continuous loop of trust.
          </p>
        </div>
        <p>
          A brand is not a logo or a color palette. It is the sum of every expectation a client holds
          before they contact you, and every feeling they carry after you deliver. For a web design
          agency, the brand answers a single question clients are always asking:{" "}
          <em>&quot;Can I trust these people to represent me online?&quot;</em>
        </p>
        <p style={{ marginBottom: 0 }}>
          Every visual, verbal, and behavioral decision either reinforces or erodes that trust.
        </p>
      </BentoCard>

      <BentoCard
        id="positioning-before-aesthetics"
        title="2. Positioning Before Aesthetics"
        titleLevel="h3"
        span={6}
      >
        <div className="illustration-wrap">
          <PositioningAxesIllustration style={{ width: "100%", maxWidth: "320px" }} />
          <p className="figure-caption">
            Figure: Three axes—clientele, craft focus, and value proposition—define strategic position.
          </p>
        </div>
        <p>
          Before choosing a typeface, you must decide <strong>where you stand in the market</strong>.
          Positioning is the strategic decision of who you serve, what problem you solve, and why you
          solve it better than alternatives. Aesthetics follow from positioning — not the other way
          around.
        </p>
        <p>The three positioning axes for a web agency:</p>
        <DataTable
          caption="Positioning axes for a web agency"
          columns={[
            { key: "axis", header: "Axis" },
            { key: "poles", header: "Poles" },
          ]}
          rows={[
            { axis: "Clientele", poles: "Small businesses ↔ Enterprise" },
            { axis: "Craft focus", poles: "Speed/volume ↔ Bespoke/premium" },
            { axis: "Value prop", poles: "Affordable execution ↔ Strategic transformation" },
          ]}
        />
        <p style={{ marginBottom: 0 }}>
          Your position on each axis determines your brand voice, visual language, pricing signals, and
          the markets you can credibly enter.
        </p>
      </BentoCard>

      <BentoCard
        id="visual-identity-is-a-signal-system"
        title="3. Visual Identity is a Signal System"
        titleLevel="h3"
        span={6}
      >
        <p>
          Colors, type, layout, and logo are not decoration — they are compressed communication. A
          prospect spends 3–7 seconds forming a first impression. In that window, your visual identity
          must broadcast:
        </p>
        <ul>
          <li>Your tier (budget, mid-market, premium, luxury)</li>
          <li>Your personality (technical, creative, corporate, approachable)</li>
          <li>Your trustworthiness (polish = competence in the client&apos;s mind)</li>
        </ul>
        <p style={{ marginBottom: 0 }}>
          Misalignment between positioning and visual identity creates confusion and kills conversions.
        </p>
      </BentoCard>

      <BentoCard id="brand-archetypes" title="4. Brand Archetypes" titleLevel="h3" span={6}>
        <p>
          Archetypes are psychological patterns that give a brand an instantly recognizable personality.
          They originate from Jungian psychology and are one of the most powerful frameworks in brand
          strategy because they tap into universal human narratives. Every strong brand maps to one
          primary archetype and often borrows traits from a secondary.
        </p>
        <p>The twelve archetypes relevant to agency branding:</p>
        <div
          className="illustration-wrap"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(52px, 1fr))",
            gap: "0.5rem",
            maxWidth: "100%",
          }}
        >
          {archetypeKeys.map((k) => (
            <ArchetypeGlyph key={k} name={k} title={archetypeTitles[k]} />
          ))}
        </div>
        <p className="figure-caption">
          Figure: Twelve geometric glyphs—one per archetype—for quick visual scanning.
        </p>
        <DataTable
          caption="Brand archetypes for agency branding"
          columns={[
            { key: "arch", header: "Archetype" },
            { key: "drive", header: "Core Drive" },
            { key: "personality", header: "Brand Personality" },
            { key: "example", header: "Agency Example" },
          ]}
          rows={[
            {
              arch: <strong>The Creator</strong>,
              drive: "Innovation, self-expression",
              personality: "Imaginative, visionary, artistic",
              example: "Boutique creative studios",
            },
            {
              arch: <strong>The Sage</strong>,
              drive: "Knowledge, understanding",
              personality: "Informed, analytical, trusted advisor",
              example: "Strategy-led consultancies",
            },
            {
              arch: <strong>The Hero</strong>,
              drive: "Mastery, achievement",
              personality: "Bold, disciplined, results-driven",
              example: "Performance/growth agencies",
            },
            {
              arch: <strong>The Explorer</strong>,
              drive: "Freedom, discovery",
              personality: "Adventurous, independent, pioneering",
              example: "Agencies pushing new tech/mediums",
            },
            {
              arch: <strong>The Magician</strong>,
              drive: "Transformation",
              personality: "Visionary, charismatic, transformative",
              example: "High-end rebrand specialists",
            },
            {
              arch: <strong>The Ruler</strong>,
              drive: "Control, order",
              personality: "Authoritative, premium, structured",
              example: "Enterprise agencies",
            },
            {
              arch: <strong>The Caregiver</strong>,
              drive: "Service, protection",
              personality: "Supportive, nurturing, reliable",
              example: "Agencies serving non-profits, healthcare",
            },
            {
              arch: <strong>The Everyman</strong>,
              drive: "Belonging, connection",
              personality: "Down-to-earth, honest, approachable",
              example: "SMB-focused generalist studios",
            },
            {
              arch: <strong>The Jester</strong>,
              drive: "Enjoyment, humor",
              personality: "Playful, irreverent, energetic",
              example: "Youth/culture/social media agencies",
            },
            {
              arch: <strong>The Lover</strong>,
              drive: "Intimacy, beauty",
              personality: "Sensual, elegant, passionate",
              example: "Luxury, fashion, beauty agencies",
            },
            {
              arch: <strong>The Outlaw</strong>,
              drive: "Liberation, revolution",
              personality: "Disruptive, edgy, unconventional",
              example: "Counter-culture, streetwear, music agencies",
            },
            {
              arch: <strong>The Innocent</strong>,
              drive: "Simplicity, optimism",
              personality: "Pure, honest, straightforward",
              example: 'Agencies with a "no-BS" positioning',
            },
          ]}
        />
        <p>
          <strong>How to use archetypes:</strong>
        </p>
        <ol>
          <li>
            Choose a primary archetype that aligns with your positioning and the emotional relationship
            you want with clients
          </li>
          <li>
            Choose a secondary archetype to add nuance and prevent the brand from feeling
            one-dimensional
          </li>
          <li>
            Let the archetype inform voice, visual choices, and client experience — it is a
            decision-making filter, not a costume
          </li>
        </ol>
        <p>For a beginner agency at the $500–$3,000 tier, the strongest archetype combinations are:</p>
        <ul>
          <li>
            <strong>Everyman + Creator</strong> — approachable but clearly skilled
          </li>
          <li>
            <strong>Sage + Caregiver</strong> — knowledgeable and supportive, the &quot;trusted guide&quot;
          </li>
          <li>
            <strong>Hero + Everyman</strong> — results-driven but not intimidating
          </li>
        </ul>
        <p style={{ marginBottom: 0 }}>
          Avoid archetypes that require portfolio depth to back up (Magician, Ruler, Lover) or that
          narrow your market too early (Outlaw, Jester).
        </p>
      </BentoCard>

      <BentoCard
        id="the-brand-is-the-client-experience"
        title="5. The Brand is the Client Experience"
        titleLevel="h3"
        span={12}
      >
        <p>
          For a services business, the brand is not just what the client sees — it is what the client{" "}
          <em>experiences</em>. Every interaction from first contact to final handoff is a brand moment.
          A beautiful visual identity undermined by chaotic communication, missed deadlines, or unclear
          process will destroy trust faster than an ugly logo ever could.
        </p>
        <p>The brand touchpoints in a web agency client journey:</p>
        <div className="illustration-wrap">
          <JourneyTimeline style={{ width: "100%", maxWidth: "520px" }} />
        </div>
        <DataTable
          caption="Client journey stages and brand signals"
          columns={[
            { key: "stage", header: "Stage" },
            { key: "touch", header: "Touchpoints" },
            { key: "signal", header: "Brand Signal" },
          ]}
          rows={[
            {
              stage: "Discovery",
              touch: "Website, social media, referral conversations",
              signal: "First impression, perceived quality",
            },
            {
              stage: "Inquiry",
              touch: "Contact form response, first email/call",
              signal: "Responsiveness, professionalism",
            },
            {
              stage: "Proposal",
              touch: "Proposal document, pricing presentation",
              signal: "Competence, value clarity",
            },
            {
              stage: "Onboarding",
              touch: "Welcome email, kickoff call, questionnaire",
              signal: "Organization, care",
            },
            {
              stage: "Production",
              touch: "Progress updates, revision process, communication style",
              signal: "Reliability, collaboration",
            },
            {
              stage: "Delivery",
              touch: "Final handoff, launch support, documentation",
              signal: "Thoroughness, craft",
            },
            {
              stage: "Post-project",
              touch: "Follow-up, review request, maintenance offer",
              signal: "Relationship, long-term value",
            },
          ]}
        />
        <p>
          <strong>The critical insight:</strong> At the $500–$3,000 tier, clients are often working with
          a web professional for the first time. Their expectations are shaped by anxiety, not
          experience. A branded, systematized process — even a simple one — signals legitimacy far more
          than a polished logo. The agency that sends a clean branded proposal, gives clear timelines,
          and follows up on schedule will win over the agency with the better portfolio but messy
          communication every time.
        </p>
      </BentoCard>
    </>
  );
}
