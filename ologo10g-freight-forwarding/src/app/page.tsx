import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Boxes,
  ClipboardCheck,
  Globe2,
  Ship,
  Truck,
} from "lucide-react";
import { ProcessList } from "@/components/process-list";
import { ServiceCard } from "@/components/service-card";
import { ShippingLines } from "@/components/shipping-lines";
import { companyName, getCanonicalMetadata, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Freight Forwarding, Vehicle Clearing & Container Logistics in Nigeria",
  description:
    `Coordinate vehicle importation, container clearing, freight forwarding and cargo logistics with ${companyName}.`,
  alternates: getCanonicalMetadata("/"),
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: companyName,
  description:
    "Freight forwarding, vehicle importation, container clearing and cargo logistics coordination.",
  areaServed: { "@type": "Country", name: "Nigeria" },
  knowsAbout: [
    "Freight forwarding",
    "Vehicle importation",
    "Container clearing",
    "Customs clearance coordination",
    "Cargo transportation",
  ],
};

export default function Home() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        type="application/ld+json"
      />
      <section className="hero">
        <Image
          alt="Container ship and port terminal representing international freight movement"
          className="hero-image"
          fill
          priority
          sizes="100vw"
          src="/images/container-terminal.v1.webp"
        />
        <div className="hero-shade" />
        <div className="shell hero-content">
          <span className="eyebrow eyebrow-light">Freight forwarding · Nigeria</span>
          <h1>Moving Your World.<br /><em>Delivering With Confidence.</em></h1>
          <p>
            Professional freight forwarding, vehicle importation, customs
            clearance coordination and container logistics connecting global
            shipping routes to destinations across Nigeria.
          </p>
          <div className="hero-actions">
            <Link className="button button-gold" href="/request-quote">
              Request a shipping quote <ArrowRight size={17} />
            </Link>
            <Link className="button button-outline-light" href="/services">
              Explore our services <ArrowDownRight size={17} />
            </Link>
            <Link className="button button-outline-light" href="/track-shipment">
              Track a shipment <ArrowRight size={17} />
            </Link>
          </div>
        </div>
        <div aria-hidden="true" className="hero-index"><span>01</span> / 05</div>
        <div className="hero-caption">International freight · Vehicle logistics · Cargo coordination</div>
      </section>

      <section className="intro-section section-pad">
        <div className="shell intro-grid">
          <div className="section-marker"><span>01</span><span className="marker-line" /> OUR COMPANY</div>
          <div className="intro-copy">
            <span className="eyebrow">Freight, made clearer</span>
            <h2>Moving cargo is complex.<br /><em>Coordination shouldn’t be.</em></h2>
            <p className="lead">
              {companyName} supports importers, vehicle owners and
              businesses with practical coordination across international freight,
              customs processes and inland delivery.
            </p>
            <p>
              From a single imported vehicle to a commercial container shipment,
              we bring the moving parts into one clear conversation—what is
              required, who is responsible, and what happens next.
            </p>
            <Link className="text-link" href="/about">Get to know OLOGO10G <ArrowUpRight size={16} /></Link>
          </div>
          <div className="intro-note">
            <span className="note-symbol">“</span>
            <p>Clear information. Thoughtful coordination. A shipment handled with care.</p>
            <span className="note-rule" />
            <span className="note-label">Our service approach</span>
          </div>
        </div>
      </section>

      <section className="services-section section-pad">
        <div className="shell">
          <div className="section-heading">
            <div>
              <span className="eyebrow">What we coordinate</span>
              <h2>Services for every<br /><em>part of the journey.</em></h2>
            </div>
            <div className="heading-side">
              <p>From vehicle importation to container movements, get a clear scope for the cargo you need to move.</p>
              <Link className="text-link" href="/services">All services <ArrowUpRight size={16} /></Link>
            </div>
          </div>
          <div className="services-grid">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.slug} {...service} />
            ))}
          </div>
          <div className="services-bottomline">
            <span>01 — 05 / SERVICE AREAS</span>
            <p>Scope and delivery responsibilities are confirmed in writing for each shipment.</p>
          </div>
        </div>
      </section>

      <section className="statement-section">
        <div className="statement-inner shell">
          <span className="eyebrow eyebrow-light">The OLOGO10G standard</span>
          <h2>Your cargo deserves<br /><em>professional handling.</em></h2>
          <div className="statement-bottom">
            <span className="statement-rule" />
            <p>Transparent communication, considered documentation and dependable coordination from first enquiry through release.</p>
            <Link className="text-link text-link-light" href="/request-quote">Start a conversation <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="standards-section section-pad">
        <div className="shell standards-grid">
          <div className="standards-intro">
            <span className="eyebrow">Why work with us</span>
            <h2>Good logistics starts<br />with <em>good communication.</em></h2>
            <p>We keep the process visible and the responsibilities clear, so you know what has happened and what comes next.</p>
            <Link className="text-link" href="/about">Our operating values <ArrowUpRight size={16} /></Link>
          </div>
          <div className="standards-list">
            <article><span><ClipboardCheck size={21} /></span><div><h3>Clear documentation</h3><p>We help coordinate the information and paperwork relevant to your shipment.</p></div></article>
            <article><span><BadgeCheck size={21} /></span><div><h3>Accountable coordination</h3><p>Responsibilities, next steps and third-party involvement are made clear.</p></div></article>
            <article><span><Globe2 size={21} /></span><div><h3>International perspective</h3><p>Freight and shipping requirements are considered from origin through destination.</p></div></article>
            <article><span><Truck size={21} /></span><div><h3>Delivery-minded planning</h3><p>Release and inland transportation are considered as part of the wider journey.</p></div></article>
          </div>
        </div>
      </section>

      <section className="network-section section-pad">
        <div className="shell">
          <div className="network-heading">
            <div>
              <span className="eyebrow eyebrow-light">International maritime ecosystem</span>
              <h2>Global shipping lines.<br /><em>One connected trade network.</em></h2>
            </div>
            <p>
              A selection of major global shipping companies relevant to
              international container and vehicle transport.
            </p>
          </div>
          <ShippingLines compact />
          <div className="network-foot">
            <span><Ship size={17} />Independent maritime operators</span>
            <p>Listed companies are not represented as official OLOGO10G partners or agents.</p>
            <Link className="text-link text-link-light" href="/shipping-partners">View shipping lines <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="process-section section-pad">
        <div className="shell process-grid">
          <div className="process-intro">
            <span className="eyebrow">The process</span>
            <h2>From first enquiry<br />to <em>final delivery.</em></h2>
            <p>A considered sequence helps keep everyone aligned as your shipment moves through each stage.</p>
            <Link className="text-link" href="/request-quote">Talk through a shipment <ArrowUpRight size={16} /></Link>
          </div>
          <ProcessList />
        </div>
      </section>

      <section className="operations-preview">
        <div className="operations-image-wrap">
          <Image
            alt="Commercial container ship alongside cranes at a port"
            className="operations-image"
            fill
            loading="lazy"
            sizes="(max-width: 800px) 100vw, 55vw"
            src="/images/container-terminal.v1.webp"
          />
          <span className="image-disclaimer">Illustrative industry photography — not OLOGO10G operational records.</span>
        </div>
        <div className="operations-copy">
          <span className="eyebrow">Our operations</span>
          <h2>A closer look at<br /><em>how cargo moves.</em></h2>
          <p>
            Port activity, vehicle logistics, documentation and inland movement
            are all part of the wider freight journey. Explore an illustrative
            gallery of the environments our services relate to.
          </p>
          <Link className="text-link" href="/operations">Explore operations <ArrowRight size={16} /></Link>
          <div className="operations-icon-row"><Boxes size={18} /><span>Vehicles</span><span>Containers</span><span>Port coordination</span></div>
        </div>
      </section>

      <section className="closing-cta">
        <div className="shell closing-cta-inner">
          <div>
            <span className="eyebrow eyebrow-light">Ready to move forward?</span>
            <h2>Tell us what you’re shipping.</h2>
            <p>Share the details you have. We’ll help clarify the next step.</p>
          </div>
          <Link className="button button-gold" href="/request-quote">Request a quote <ArrowRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}
