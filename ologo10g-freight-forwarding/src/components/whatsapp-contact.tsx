import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { getContactDetails } from "@/lib/site";

export function WhatsAppContact() {
  const { whatsapp } = getContactDetails();
  const href = whatsapp
    ? `https://wa.me/${whatsapp}?text=${encodeURIComponent("Hello, I would like to enquire about a shipment.")}`
    : "/contact";

  return (
    <Link
      aria-label={whatsapp ? "Contact OLOGO10G on WhatsApp" : "Open contact information"}
      className="whatsapp-float"
      href={href}
      rel={whatsapp ? "noopener noreferrer" : undefined}
      target={whatsapp ? "_blank" : undefined}
    >
      <MessageCircle aria-hidden="true" size={21} />
      <span>{whatsapp ? "WhatsApp" : "Contact"}</span>
    </Link>
  );
}
