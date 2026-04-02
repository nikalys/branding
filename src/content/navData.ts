export interface NavEntry {
  id: string;
  label: string;
  children?: NavEntry[];
}

export const navTree: NavEntry[] = [
  { id: "guide-intro", label: "Introduction" },
  {
    id: "part-i-core-brand-principles",
    label: "Part I: Core Brand Principles",
    children: [
      { id: "the-brand-is-a-promise", label: "1. The Brand is a Promise" },
      { id: "positioning-before-aesthetics", label: "2. Positioning Before Aesthetics" },
      {
        id: "visual-identity-is-a-signal-system",
        label: "3. Visual Identity is a Signal System",
      },
      { id: "brand-archetypes", label: "4. Brand Archetypes" },
      {
        id: "the-brand-is-the-client-experience",
        label: "5. The Brand is the Client Experience",
      },
    ],
  },
  {
    id: "part-ii-choosing-a-brand-theme",
    label: "Part II: Choosing a Brand Theme",
    children: [
      { id: "the-theme-selection-framework", label: "The Theme Selection Framework" },
      { id: "the-six-primary-agency-themes", label: "The Six Primary Agency Themes" },
    ],
  },
  {
    id: "part-iii-implications-of-branding-decisions",
    label: "Part III: Implications of Branding Decisions",
    children: [
      { id: "color", label: "Color" },
      { id: "typography", label: "Typography" },
      { id: "logo-type", label: "Logo Type" },
      { id: "naming", label: "Naming" },
      { id: "photography-imagery-direction", label: "Photography & Imagery Direction" },
      { id: "competitive-analysis-framework", label: "Competitive Analysis Framework" },
      {
        id: "color-usage-ratios-60-30-10-rule",
        label: "Color Usage Ratios — The 60-30-10 Rule",
      },
      { id: "accessibility-contrast", label: "Accessibility & Contrast" },
    ],
  },
  {
    id: "part-iv-positioning-market-mapping",
    label: "Part IV: Positioning → Market Mapping",
    children: [
      {
        id: "how-positioning-changes-the-sales-cycle",
        label: "How Positioning Changes the Sales Cycle",
      },
    ],
  },
  {
    id: "part-v-recommendations-small-scale-beginner-agency",
    label: "Part V: Recommendations (Beginner Agency)",
    children: [
      { id: "strategic-positioning", label: "Strategic Positioning" },
      { id: "color-palette-recommendation", label: "Color Palette Recommendation" },
      { id: "typography-recommendation", label: "Typography Recommendation" },
      { id: "logo-recommendation", label: "Logo Recommendation" },
      {
        id: "brand-personality-model-emotional-territory",
        label: "Brand Personality & Emotional Territory",
      },
      { id: "brand-voice", label: "Brand Voice" },
      { id: "social-media-brand-application", label: "Social Media Brand Application" },
      { id: "brand-application-priorities", label: "Brand Application Priorities" },
      { id: "comprehensive-dos-and-donts", label: "Comprehensive Do's and Don'ts" },
    ],
  },
  {
    id: "part-vi-brand-evolution-roadmap",
    label: "Part VI: Brand Evolution Roadmap",
    children: [
      { id: "phase-1-foundation", label: "Phase 1: Foundation" },
      { id: "phase-2-refinement", label: "Phase 2: Refinement" },
      { id: "phase-3-elevation", label: "Phase 3: Elevation" },
      {
        id: "summary-positioning-in-one-sentence",
        label: "Summary: Positioning in One Sentence",
      },
    ],
  },
];

export function flattenNavIds(entries: NavEntry[]): string[] {
  const ids: string[] = [];
  for (const e of entries) {
    ids.push(e.id);
    if (e.children) ids.push(...flattenNavIds(e.children));
  }
  return ids;
}
