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
          <div className="bento-grid">
            <GuideIntro />
            <PartI />
            <PartII />
            <PartIII />
            <PartIV />
            <PartV />
            <PartVI />
          </div>
        </main>
      </div>
    </>
  );
}
