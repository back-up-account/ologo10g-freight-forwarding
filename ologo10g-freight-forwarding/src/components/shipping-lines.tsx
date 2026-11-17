import { ArrowUpRight } from "lucide-react";
import { shippingLines } from "@/lib/site";

export function ShippingLines({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "shipping-groups shipping-groups-compact" : "shipping-groups"}>
      <section className="shipping-group" aria-labelledby="container-lines">
        <div className="shipping-group-head">
          <span className="eyebrow eyebrow-light">Container shipping</span>
          <h3 id="container-lines">Global container operators</h3>
        </div>
        <ul className="shipping-line-list">
          {shippingLines.container.map((line) => <li key={line}>{line}</li>)}
        </ul>
      </section>
      <section className="shipping-group" aria-labelledby="vehicle-lines">
        <div className="shipping-group-head">
          <span className="eyebrow eyebrow-light">Vehicle & Ro-Ro</span>
          <h3 id="vehicle-lines">Automotive maritime operators</h3>
        </div>
        <ul className="shipping-line-list">
          {shippingLines.vehicle.map((line) => <li key={line}>{line}</li>)}
        </ul>
      </section>
      {!compact && (
        <p className="partner-disclaimer">
          These are independent global maritime operators, not a representation of
          OLOGO10G’s official partners, agents or collaborators. Route availability
          and booking are confirmed for each shipment. <ArrowUpRight size={15} />
        </p>
      )}
    </div>
  );
}
