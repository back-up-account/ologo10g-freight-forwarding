import type { Metadata } from "next";
import { ArrowUpRight, Compass, Handshake, ShieldCheck } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import Link from "next/link";
import { companyName, getCanonicalMetadata } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${companyName}’s customer-focused approach to freight and cargo coordination in Nigeria.`,
  alternates: getCanonicalMetadata("/about"),
};

const values = [
  { icon: ShieldCheck, title: "Professional care", text: "Each shipment is approached with attention to the details, documentation and responsibilities involved." },
  { icon: Compass, title: "Clarity at every step", text: "Customers should understand what is known, what remains outstanding and who is responsible for the next action." },
  { icon: Handshake, title: "Accountable coordination", text: "Where a shipment requires third-party or licensed services, roles and service boundaries should be clear." },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About OLOGO10G"
        title="A clear approach to moving cargo."
        description="A Nigerian freight-forwarding business focused on vehicle importation, container clearance and coordinated logistics."
      />
      <section className="section-pad">
        <div className="shell about-story-grid">
          <div className="section-marker"><span>01</span><span className="marker-line" /> OUR PROFILE</div>
          <div className="about-story">
            <span className="eyebrow">Our company</span>
            <h2>Trade moves better<br />with <em>clear coordination.</em></h2>
            <p className="lead">
              {companyName} is being presented as a Nigerian
              freight-forwarding and logistics company focused on the practical
              details that move cargo across borders and through port processes.
            </p>
            <p>
              The company profile, operating history, service locations,
              registrations, licences and team information have not yet been
              verified for publication. These details should be added only after
              they have been confirmed by the business.
            </p>
            <p>
              Our website sets out a straightforward service approach: understand
              the shipment, clarify the work required, coordinate the right
              parties, and keep the customer informed through the agreed scope.
            </p>
          </div>
          <aside className="profile-placeholder">
            <span className="eyebrow">Business profile</span>
            <h3>Information to confirm</h3>
            <ul>
              <li>Company history and ownership profile</li>
              <li>Verified service locations and port coverage</li>
              <li>Registration, licences and certifications</li>
              <li>Leadership and customer-service contacts</li>
            </ul>
            <p>Unverified business information is intentionally not presented as fact.</p>
          </aside>
        </div>
      </section>
      <section className="values-section section-pad">
        <div className="shell">
          <div className="section-heading">
            <div><span className="eyebrow">How we work</span><h2>Principles that keep<br /><em>the process grounded.</em></h2></div>
            <p className="heading-side-text">Our mission, vision and operating values can be tailored further once approved company statements are supplied.</p>
          </div>
          <div className="values-grid">
            {values.map(({ icon: Icon, title, text }, index) => (
              <article className="value-card" key={title}>
                <span className="value-number">0{index + 1}</span>
                <Icon aria-hidden="true" size={23} strokeWidth={1.5} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="mission-vision">
            <article><span className="eyebrow">Mission · working statement</span><p>To make cargo movement easier to understand through professional, transparent coordination.</p></article>
            <article><span className="eyebrow">Vision · working statement</span><p>To be a trusted logistics partner for customers moving vehicles and commercial cargo to and from Nigeria.</p></article>
          </div>
        </div>
      </section>
      <section className="closing-cta">
        <div className="shell closing-cta-inner">
          <div><span className="eyebrow eyebrow-light">Work with us</span><h2>Let’s talk about your shipment.</h2><p>Tell us what you need to move and where it is going.</p></div>
          <Link className="button button-gold" href="/request-quote">Request a quote <ArrowUpRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}
