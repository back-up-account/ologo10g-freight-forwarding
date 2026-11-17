import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/page-intro";
import { getCanonicalMetadata } from "@/lib/site";

export const metadata: Metadata = {
  title: "Freight & Port Operations",
  description: "An illustrative look at port, container, vehicle and cargo logistics environments.",
  alternates: getCanonicalMetadata("/operations"),
};

const images = [
  {
    src: "/images/container-terminal.v1.webp",
    alt: "Container vessel at a port terminal with cranes",
    title: "Container terminals",
    description: "Ports connect ocean freight with customs, release and inland movement.",
  },
  {
    src: "/images/imported-vehicle.v1.webp",
    alt: "Luxury passenger vehicle representing imported vehicle logistics",
    title: "Vehicle logistics",
    description: "Vehicle shipments require documentation and a planned collection process.",
  },
  {
    src: "/images/port-ship.v1.webp",
    alt: "Freight truck on an international route",
    title: "Inland transportation",
    description: "Cargo coordination extends beyond the port to its intended destination.",
  },
];

export default function OperationsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Our operations"
        title="A connected journey, from origin to destination."
        description="Port activity, documentation, release and transportation form part of a wider logistics picture."
      />
      <section className="operations-page section-pad">
        <div className="shell">
          <div className="operations-page-lead">
            <span className="eyebrow">The logistics environment</span>
            <h2>Understand the journey<br /><em>behind each shipment.</em></h2>
            <p>
              Freight forwarding brings together carriers, port operators,
              customs processes, transport providers and the customer. This
              gallery uses industry photography for context only. It does not
              depict OLOGO10G’s own projects, customers, facilities or completed
              operations.
            </p>
          </div>
          <div className="operations-gallery">
            {images.map((image, index) => (
              <figure className={`gallery-item gallery-item-${index + 1}`} key={image.src}>
                <div className="gallery-photo">
                  <Image alt={image.alt} fill loading="lazy" sizes="(max-width: 760px) 100vw, 50vw" src={image.src} />
                </div>
                <figcaption>
                  <span className="eyebrow">Industry context · 0{index + 1}</span>
                  <h3>{image.title}</h3>
                  <p>{image.description}</p>
                  <small>Illustrative photography — not OLOGO10G operational records.</small>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
