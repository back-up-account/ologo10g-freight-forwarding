import type { Metadata } from "next";
import { BookOpenText, Boxes, Plane, Ship } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { getCanonicalMetadata } from "@/lib/site";

export const metadata: Metadata = {
  title: "Shipping Resources & Freight Guides",
  description: "Practical introductory guidance on freight modes, container options, shipment preparation and customs documentation.",
  alternates: getCanonicalMetadata("/shipping-resources"),
};

const guides = [
  {
    icon: Ship,
    title: "Sea freight: FCL and LCL",
    description:
      "Full Container Load (FCL) and Less than Container Load (LCL) describe different ways of using container capacity. The suitable option depends on cargo volume, handling requirements, schedule and the available service.",
    checklist: [
      "Describe the cargo, packing and approximate volume.",
      "Confirm whether the shipment needs a dedicated container.",
      "Ask what origin, destination and local handling charges apply.",
    ],
  },
  {
    icon: Plane,
    title: "Choosing a freight mode",
    description:
      "Air and sea freight have different operating, handling and cost considerations. There is no universal best option; suitability depends on the shipment and current carrier availability.",
    checklist: [
      "Share the cargo type, dimensions, weight and ready date.",
      "Identify any handling, packaging or regulatory restrictions.",
      "Request a shipment-specific service scope and written quotation.",
    ],
  },
  {
    icon: Boxes,
    title: "Prepare a shipment brief",
    description:
      "A clear brief helps a logistics provider understand what is moving and what support may be required. Do not send original identity documents or sensitive payment details through this website.",
    checklist: [
      "Origin and destination, including city or port if known.",
      "Cargo description, package count, dimensions and weight if available.",
      "Readiness date, delivery needs and relevant handling notes.",
    ],
  },
  {
    icon: BookOpenText,
    title: "Documents and customs",
    description:
      "Shipping documents and regulatory requirements vary by cargo, origin, destination and current rules. A general website guide cannot determine the documents or duties applicable to a particular import or export.",
    checklist: [
      "Confirm requirements with the relevant official authority or qualified adviser.",
      "Ask the service provider which documents are needed for the specific shipment.",
      "Verify current duties, restrictions and filing requirements before shipping.",
    ],
  },
];

const questions = [
  {
    question: "Can I see a live shipment location here?",
    answer:
      "No. A live carrier tracking integration is not configured. Use the tracking enquiry page to send a reference for a manual update request; it will not display a live status or estimated delivery date.",
  },
  {
    question: "Can this website calculate my shipping price or delivery date?",
    answer:
      "No. Pricing and timing depend on shipment details and confirmed service availability. Request a written, shipment-specific quotation; this website does not publish rate or transit-time estimates.",
  },
  {
    question: "Which documents or duties apply to my shipment?",
    answer:
      "Requirements vary by commodity, route and current regulation. Confirm them with the relevant official authority or a qualified customs professional before making shipping decisions.",
  },
  {
    question: "What information should I include in a quote request?",
    answer:
      "Provide the service you need, origin and destination, a clear cargo description, any vehicle or container details that apply, and your contact information. You can state what is not yet known.",
  },
];

export default function ShippingResourcesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Shipping resources"
        title="A clearer starting point for your shipment."
        description="Introductory guidance to help prepare a useful freight enquiry. Requirements and service availability must be confirmed for each shipment."
      />
      <section className="resource-page section-pad">
        <div className="shell">
          <p className="resource-intro">
            These notes explain common shipping concepts at a high level. They
            are not customs, tax, legal or carrier advice and do not replace
            current requirements from official authorities or a qualified
            professional.
          </p>
          <div className="resource-grid">
            {guides.map(({ icon: Icon, title, description, checklist }) => (
              <article className="resource-card" key={title}>
                <Icon aria-hidden="true" color="var(--gold-dark)" size={23} strokeWidth={1.6} />
                <h2>{title}</h2>
                <p>{description}</p>
                <ul>
                  {checklist.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <p className="resource-disclaimer">
            Regulatory rules, duties, documentation, route availability and
            carrier schedules can change. Verify current requirements with the
            appropriate official source before acting.
          </p>
          <section aria-labelledby="shipping-faq-heading" className="resource-faq">
            <h2 id="shipping-faq-heading">Frequently asked questions</h2>
            {questions.map(({ question, answer }) => (
              <article key={question}>
                <h3>{question}</h3>
                <p>{answer}</p>
              </article>
            ))}
          </section>
        </div>
      </section>
    </>
  );
}
