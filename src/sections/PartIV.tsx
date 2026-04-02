import { BentoCard } from "../components/BentoCard";
import { DataTable } from "../components/DataTable";
import { MarketTierLadder } from "../illustrations/MarketTierLadder";

export function PartIV() {
  return (
    <div className="guide-flow">
      <BentoCard
        id="part-iv-positioning-market-mapping"
        title="Part IV: Positioning → Market Mapping"
        titleLevel="h2"
        label="Section"
      >
        <p style={{ maxWidth: "none" }}>
          How brand positioning maps to markets, typical clients, and price bands.
        </p>
      </BentoCard>

      <BentoCard
        id="market-mapping-overview"
        title="Positioning and markets"
        titleLevel="h3"
      >
        <div className="illustration-wrap">
          <MarketTierLadder style={{ width: "100%", maxWidth: "280px" }} />
          <p className="figure-caption">
            Figure: Relative tiers from budget executor to enterprise—width suggests breadth of offer.
          </p>
        </div>
        <DataTable
          caption="Brand positioning, markets served, typical clients, and price range"
          columns={[
            { key: "pos", header: "Brand Positioning" },
            { key: "markets", header: "Markets Served" },
            { key: "client", header: "Typical Client" },
            { key: "price", header: "Price Range" },
          ]}
          rows={[
            {
              pos: "Budget executor",
              markets: "Local SMBs, solopreneurs",
              client: "Restaurants, salons, freelancers",
              price: "$300–$1,500",
            },
            {
              pos: "Mid-market generalist",
              markets: "SMBs, regional businesses",
              client: "Retail, services, medical",
              price: "$1,500–$8,000",
            },
            {
              pos: "Niche specialist",
              markets: "Specific industry vertical",
              client: "Whatever niche chosen",
              price: "$2,000–$10,000",
            },
            {
              pos: "Creative boutique",
              markets: "Lifestyle, culture, emerging brands",
              client: "Fashion, food, entertainment",
              price: "$5,000–$30,000+",
            },
            {
              pos: "Growth partner",
              markets: "Funded startups, scaleups",
              client: "Tech, e-commerce, DTC",
              price: "$10,000–$50,000+",
            },
            {
              pos: "Enterprise/agency",
              markets: "Corporations, agencies",
              client: "Large brands, internal teams",
              price: "$50,000+",
            },
          ]}
        />
      </BentoCard>

      <BentoCard
        id="how-positioning-changes-the-sales-cycle"
        title="How Positioning Changes the Sales Cycle"
        titleLevel="h3"
      >
        <ul>
          <li>
            <strong>Lower positioning</strong>: Shorter cycle, higher volume, transactional relationship,
            price competition
          </li>
          <li>
            <strong>Higher positioning</strong>: Longer cycle, lower volume, consultative relationship,
            value competition
          </li>
        </ul>
        <p style={{ marginBottom: 0 }}>
          A beginner agency starting at $500–$3,000/project is operating in the{" "}
          <strong>mid-to-low segment</strong>. The goal of branding at this stage is not to look cheap — it
          is to look competent and trustworthy at this price point, while leaving room to grow upmarket
          as the portfolio deepens.
        </p>
      </BentoCard>
    </div>
  );
}
