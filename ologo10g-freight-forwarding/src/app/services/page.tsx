import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { services } from "@/lib/site";
import { getCanonicalMetadata } from "@/lib/site";

export const metadata: Metadata = {
  title: "Freight Forwarding, Vehicle Clearing & Logistics Services",
  description: "Explore vehicle importation, container clearing, freight forwarding, customs coordination and inland logistics services.",
  alternates: getCanonicalMetadata("/services"),
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Our services"
        title="Every shipment needs a considered plan."
        description="Explore the support available for vehicles, containers and general cargo. The precise scope is agreed for each shipment."
      />
      <section className="services-detail section-pad">
        <div className="shell">
          <div className="service-boundary">
            <span className="eyebrow">Service responsibility</span>
            <p>
              OLOGO10G coordinates the work described in each written engagement.
              Customs declarations, regulated transport and other licensed
              activities are performed by appropriately authorised parties where
              required. Direct execution and third-party services are identified
              in the quotation; no unverified licence or agency status is implied.
            </p>
          </div>
          <p className="service-note">
            All photography on this site is illustrative industry imagery and
            does not depict OLOGO10G customers, facilities or completed shipments.
          </p>
          <div className="service-detail-list">
            {services.map((service) => (
              <article className="service-detail" id={service.slug} key={service.slug}>
                <div className="service-detail-photo">
                  <Image alt={service.imageAlt} fill loading="lazy" sizes="(max-width: 760px) 100vw, 45vw" src={service.image} />
                  <span className="image-number">{service.number}</span>
                </div>
                <div className="service-detail-copy">
                  <span className="eyebrow">Service {service.number}</span>
                  <h2>{service.title}</h2>
                  <p>{service.summary}</p>
                  <ul className="check-list">
                    {service.items.map((item) => <li key={item}><Check aria-hidden="true" size={16} />{item}</li>)}
                  </ul>
                  <Link className="text-link" href={`/request-quote?service=${service.slug}`}>
                    Enquire about this service <ArrowUpRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <p className="service-note">
            Service availability, documentation requirements, route coverage,
            regulatory processes and third-party costs are confirmed case by case.
          </p>
        </div>
      </section>
      <section className="closing-cta">
        <div className="shell closing-cta-inner">
          <div><span className="eyebrow eyebrow-light">Tell us what you need</span><h2>Start with a clear brief.</h2><p>We’ll follow up to understand the shipment and the scope of support required.</p></div>
          <Link className="button button-gold" href="/request-quote">Request a quote <ArrowRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}
