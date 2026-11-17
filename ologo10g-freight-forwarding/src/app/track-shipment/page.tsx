import type { Metadata } from "next";
import { FileSearch, ShieldCheck } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { QuoteForm } from "@/components/quote-form";
import { getCanonicalMetadata } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request a Shipment Tracking Update",
  description: "Send OLOGO10G a shipment reference to request a manual tracking update. No live carrier tracking feed is connected.",
  alternates: getCanonicalMetadata("/track-shipment"),
};

export default async function TrackShipmentPage({
  searchParams,
}: {
  searchParams: Promise<{ reference?: string }>;
}) {
  const { reference } = await searchParams;

  return (
    <>
      <PageIntro
        eyebrow="Shipment support"
        title="Request a shipment update."
        description="Send your shipment reference to the team. This is a manual enquiry, not a live carrier tracking service."
      />
      <section className="form-page section-pad">
        <div className="shell form-page-grid">
          <div className="form-aside">
            <span className="eyebrow">Tracking enquiry</span>
            <h2>Start with your<br /><em>shipment reference.</em></h2>
            <p>
              Enter the reference supplied for your shipment and the team can
              respond using the contact details you provide. Do not send
              passwords, payment information or identity documents.
            </p>
            <div className="tracking-notice" role="note">
              <strong>No live tracking is connected.</strong> The website does
              not retrieve carrier events, locations, milestones or delivery
              estimates. Submitting this form sends a manual request by email
              when enquiry delivery is configured.
            </div>
            <div className="form-assurances">
              <article>
                <FileSearch aria-hidden="true" size={19} />
                <div><h3>Reference-led request</h3><p>Include the reference issued for your booking or shipment.</p></div>
              </article>
              <article>
                <ShieldCheck aria-hidden="true" size={19} />
                <div><h3>No fabricated status</h3><p>No shipment status is shown unless a verified tracking source is connected.</p></div>
              </article>
            </div>
          </div>
          <div className="form-panel">
            <div className="form-panel-heading">
              <span className="eyebrow">Manual status enquiry</span>
              <h2>Request an update</h2>
              <p>We’ll forward your request to the configured business mailbox.</p>
            </div>
            <QuoteForm
              initialTrackingReference={reference}
              kind="tracking"
            />
          </div>
        </div>
      </section>
    </>
  );
}
