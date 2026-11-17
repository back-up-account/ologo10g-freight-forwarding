import type { Metadata } from "next";
import { Globe2, Ship } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { ShippingLines } from "@/components/shipping-lines";
import { getCanonicalMetadata } from "@/lib/site";

export const metadata: Metadata = {
  title: "Global Shipping Lines & Maritime Network",
  description: "Explore selected independent container, vehicle and Ro-Ro shipping companies in the international maritime ecosystem.",
  alternates: getCanonicalMetadata("/shipping-partners"),
};

export default function ShippingPartnersPage() {
  return (
    <>
      <PageIntro
        eyebrow="Shipping lines & maritime network"
        title="Part of a wider global shipping ecosystem."
        description="A considered overview of international operators involved in container, vehicle and Ro-Ro shipping."
      />
      <section className="network-page-section section-pad">
        <div className="shell">
          <div className="network-context">
            <div className="network-context-icon"><Globe2 size={26} /></div>
            <div>
              <span className="eyebrow">Major global shipping companies</span>
              <h2>Independent operators.<br /><em>Shipment-specific availability.</em></h2>
              <p>
                The companies below are recognised names in the international
                maritime industry and are relevant to the broader shipping
                ecosystem serving Nigerian trade. Their inclusion does not mean
                OLOGO10G is affiliated with, appointed by, or authorised to
                represent them. Routes and vessel services vary and must be
                checked for each booking.
              </p>
            </div>
          </div>
          <ShippingLines />
          <div className="shipping-line-note">
            <Ship size={20} />
            <p>
              Brand names are shown as plain text for identification only. No
              third-party logos are used, and no commercial relationship is
              claimed. “Official Partner”, “Authorised Agent”, “Strategic
              Partner” and “Collaborator” are reserved for relationships verified
              by the company.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
