import type { Metadata } from "next";
import { Clock3, FileText, ShieldCheck } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { QuoteForm } from "@/components/quote-form";
import { getCanonicalMetadata } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request a Freight or Vehicle-Clearing Quote",
  description: "Send shipment details to request a quote for vehicle clearing, container clearing, freight forwarding or logistics support.",
  alternates: getCanonicalMetadata("/request-quote"),
};

const serviceOptions: Record<string, string> = {
  "vehicle-importation": "Vehicle importation and clearing",
  "container-clearing": "Container clearing",
  "freight-forwarding": "Freight forwarding",
  "customs-clearance": "Customs clearance",
  "logistics-transportation": "Logistics and transportation",
};

export default async function RequestQuotePage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const { service } = await searchParams;
  const initialService = service ? serviceOptions[service] : undefined;

  return (
    <>
      <PageIntro
        eyebrow="Request a quote"
        title="Tell us what you’re shipping."
        description="A few shipment details help us understand what support you need. We’ll follow up to clarify the scope."
      />
      <section className="form-page section-pad">
        <div className="shell form-page-grid">
          <div className="form-aside">
            <span className="eyebrow">A useful starting point</span>
            <h2>Share what you know.<br /><em>We’ll clarify the rest.</em></h2>
            <p>Provide the details currently available. You do not need to have every shipping document ready to make an enquiry.</p>
            <div className="form-assurances">
              <article><FileText size={19} /><div><h3>Shipment-specific</h3><p>Requirements depend on cargo, origin, destination and timing.</p></div></article>
              <article><Clock3 size={19} /><div><h3>Clear next steps</h3><p>We will use your enquiry to understand what information is still needed.</p></div></article>
              <article><ShieldCheck size={19} /><div><h3>Handled with care</h3><p>Only share information relevant to this shipment enquiry.</p></div></article>
            </div>
          </div>
          <div className="form-panel">
            <div className="form-panel-heading"><span className="eyebrow">Shipment enquiry</span><h2>Request a quote</h2><p>We’ll respond using the contact details you provide.</p></div>
            <QuoteForm initialService={initialService} />
          </div>
        </div>
      </section>
    </>
  );
}
