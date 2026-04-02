import { BentoCard } from "../components/BentoCard";

export function GuideIntro() {
  return (
    <BentoCard id="guide-intro" title="How to use this guide" titleLevel="h2" label="Start here" span={12}>
      <p>
        This document is organized in six parts: core principles, theme selection, implications of
        branding decisions, market mapping, practical recommendations for small-scale agencies, and a
        brand evolution roadmap. Use the table of contents to jump to any section. Every table and list
        from the source guide is included in full.
      </p>
      <p style={{ marginBottom: 0 }}>
        <strong>Branding Guide — Web Design Agency</strong> (full reference below).
      </p>
    </BentoCard>
  );
}
