import { useMemo } from "react";
import { TableOfContents, useScrollSpy } from "./components/TableOfContents";
import { SiteHeader } from "./components/SiteHeader";
import { flattenNavIds, navTree } from "./content/navData";
import { GuideIntro } from "./sections/GuideIntro";
import { PartI } from "./sections/PartI";
import { PartII } from "./sections/PartII";
import { PartIII } from "./sections/PartIII";
import { PartIV } from "./sections/PartIV";
import { PartV } from "./sections/PartV";
import { PartVI } from "./sections/PartVI";

export function App() {
  const spyIds = useMemo(() => flattenNavIds(navTree), []);
  const activeId = useScrollSpy(spyIds);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="app-shell">
        <SiteHeader />
        <aside className="toc-rail" aria-label="On this page">
          <TableOfContents activeId={activeId} />
        </aside>
        <main className="main-column" id="main-content" tabIndex={-1}>
          <div className="guide-stack">
            <div className="guide-intro-wrap">
              <div className="guide-flow guide-flow--intro">
                <GuideIntro />
              </div>
            </div>

            <section className="guide-part" aria-label="Part I: Core Brand Principles">
              <PartI />
            </section>

            <section className="guide-part" aria-label="Part II: Choosing a Brand Theme">
              <PartII />
            </section>

            <section className="guide-part" aria-label="Part III: Implications of Branding Decisions">
              <PartIII />
            </section>

            <section className="guide-part" aria-label="Part IV: Positioning and market mapping">
              <PartIV />
            </section>

            <section
              className="guide-part"
              aria-label="Part V: Recommendations for a small-scale beginner agency"
            >
              <PartV />
            </section>

            <section className="guide-part" aria-label="Part VI: Brand evolution roadmap">
              <PartVI />
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
