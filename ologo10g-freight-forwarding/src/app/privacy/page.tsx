import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { getCanonicalMetadata } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: "How the OLOGO10G website handles quote and contact enquiries.",
  robots: { index: false, follow: true },
  alternates: getCanonicalMetadata("/privacy"),
};

export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Privacy"
        title="Your enquiry details deserve care."
        description="This notice describes the information handled by this website and the choices available to visitors."
      />
      <section className="privacy-page section-pad">
        <div className="reading-column">
          <h2>Information submitted through forms</h2>
          <p>
            When you send a quote request, contact enquiry or manual tracking
            request, the website processes the details you enter, such as your
            name, contact information, shipment reference and description, to
            deliver that enquiry to the business contact configured for this
            service.
          </p>
          <h2>Service provider</h2>
          <p>
            Email delivery is handled by Resend when the website operator has
            configured that provider. The website does not store submitted
            enquiries or tracking events in its own application database. A
            tracking request is sent for manual follow-up; this website does not
            retrieve carrier location data. Email delivery and retention are
            subject to the configured mailbox and provider terms.
          </p>
          <h2>Browser storage</h2>
          <p>
            The site uses local browser storage to remember whether you dismissed
            the privacy notice. It does not currently use advertising or
            analytics cookies.
          </p>
          <h2>Information to confirm</h2>
          <p>
            Before launch, the business should add verified contact details,
            confirm its data-retention periods, privacy contact and any
            jurisdiction-specific privacy requirements. Do not send sensitive
            personal, financial or payment-card information through the enquiry
            form.
          </p>
          <p className="privacy-updated">This website privacy notice should be reviewed and approved by the business before production publication.</p>
        </div>
      </section>
    </>
  );
}
