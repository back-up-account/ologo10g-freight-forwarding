import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { QuoteForm } from "@/components/quote-form";
import { companyName, getContactDetails } from "@/lib/site";
import { getCanonicalMetadata } from "@/lib/site";

export const metadata: Metadata = {
  title: `Contact ${companyName}`,
  description: "Contact OLOGO10G about freight forwarding, vehicle importation, container clearing and logistics coordination.",
  alternates: getCanonicalMetadata("/contact"),
};

export default function ContactPage() {
  const contact = getContactDetails();
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Let’s talk through your cargo."
        description="Choose the details that work for you, or send an enquiry using the form. Verified contact information will be added when supplied."
      />
      <section className="contact-page section-pad">
        <div className="shell contact-grid">
          <div className="contact-details">
            <span className="eyebrow">Get in touch</span>
            <h2>Clear answers<br /><em>start here.</em></h2>
            <p>Business contact information, office address and operating hours have not yet been verified for publication.</p>
            <div className="contact-detail-list">
              <div><Phone size={19} /><div><span>Telephone</span>{contact.phone ? <a href={`tel:${contact.phone}`}>{contact.phone}</a> : <strong>To be confirmed by the business</strong>}</div></div>
              <div><Mail size={19} /><div><span>Email</span>{contact.email ? <a href={`mailto:${contact.email}`}>{contact.email}</a> : <strong>To be confirmed by the business</strong>}</div></div>
              <div><MapPin size={19} /><div><span>Office / port coverage</span><strong>{contact.address || contact.portCoverage || "Location details to be confirmed"}</strong></div></div>
            </div>
            {contact.hours && <p className="business-hours"><strong>Business hours</strong><br />{contact.hours}</p>}
            <div className="map-placeholder">
              <MapPin aria-hidden="true" size={25} />
              <span>Map location will be added after the official office address is verified.</span>
            </div>
          </div>
          <div className="contact-form-panel">
            <span className="eyebrow">Send a message</span>
            <h2>How can we help?</h2>
            <QuoteForm kind="contact" />
          </div>
        </div>
      </section>
    </>
  );
}
