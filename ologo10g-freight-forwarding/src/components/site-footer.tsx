import Link from "next/link";
import { ArrowUpRight, MapPin, Mail, Phone } from "lucide-react";
import { companyName, getContactDetails, navigation } from "@/lib/site";

export function SiteFooter() {
  const contact = getContactDetails();

  return (
    <footer className="site-footer">
      <div className="shell footer-main">
        <div className="footer-brand-block">
          <Link className="brand brand-light" href="/">
            <span className="brand-mark">O<span>10</span></span>
            <span className="brand-name">
              <strong>OLOGO10G</strong>
              <small>NIG LTD <span>· FREIGHT FORWARDING</span></small>
            </span>
          </Link>
          <p>
            Freight forwarding, vehicle importation and cargo-clearance coordination
            for shipments moving to and from Nigeria.
          </p>
        </div>

        <div className="footer-column">
          <h2>Explore</h2>
          {navigation.slice(1, 5).map((item) => (
            <Link href={item.href} key={item.href}>{item.label}</Link>
          ))}
          <Link href="/shipping-resources">Shipping resources</Link>
          <Link href="/track-shipment">Track shipment</Link>
          <Link href="/request-quote">Request a quote</Link>
        </div>

        <div className="footer-column footer-contact">
          <h2>Contact</h2>
          {contact.phone ? (
            <a href={`tel:${contact.phone}`}><Phone size={15} />{contact.phone}</a>
          ) : (
            <span><Phone size={15} />Business telephone to be confirmed</span>
          )}
          {contact.email ? (
            <a href={`mailto:${contact.email}`}><Mail size={15} />{contact.email}</a>
          ) : (
            <span><Mail size={15} />Business email to be confirmed</span>
          )}
          {contact.address ? (
            <span><MapPin size={15} />{contact.address}</span>
          ) : (
            <span><MapPin size={15} />Office address to be confirmed</span>
          )}
        </div>

        <div className="footer-cta">
          <span className="eyebrow eyebrow-light">Let’s move your cargo forward</span>
          <h2>Every shipment begins with a conversation.</h2>
          <Link className="text-link text-link-light" href="/request-quote">
            Discuss your shipment <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="shell footer-bottom-inner">
          <span>© {new Date().getFullYear()} {companyName}.</span>
          <span>Independent freight forwarding and logistics coordination.</span>
          <Link href="/privacy">Privacy notice</Link>
        </div>
      </div>
    </footer>
  );
}
