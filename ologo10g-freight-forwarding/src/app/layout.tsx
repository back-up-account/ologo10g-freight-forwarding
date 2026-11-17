import type { Metadata } from "next";
import "./globals.css";
import { CookieNotice } from "@/components/cookie-notice";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppContact } from "@/components/whatsapp-contact";
import { companyName, getContactDetails } from "@/lib/site";

const siteUrl = getContactDetails().siteUrl;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: {
    default: `${companyName} | Freight Forwarding & Vehicle Clearing`,
    template: `%s | ${companyName}`,
  },
  description:
    "Freight forwarding, vehicle importation, container clearing and logistics coordination for cargo moving to and from Nigeria.",
  applicationName: companyName,
  openGraph: {
    type: "website",
    siteName: companyName,
    title: `${companyName} | Moving Your World`,
    description:
      "Professional freight forwarding, vehicle importation, customs-clearance coordination and container logistics.",
    ...(siteUrl ? {
      images: [{
        url: "/images/container-terminal.v1.webp",
        width: 1200,
        height: 800,
        alt: "Container vessel at a port terminal",
      }],
    } : {}),
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <WhatsAppContact />
        <CookieNotice />
      </body>
    </html>
  );
}
