export const companyName = "Ologo10g Nig Ltd";

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  { href: "/services", label: "Our services" },
  { href: "/shipping-resources", label: "Resources" },
  { href: "/track-shipment", label: "Track shipment" },
  { href: "/shipping-partners", label: "Shipping lines" },
  { href: "/operations", label: "Operations" },
  { href: "/contact", label: "Contact" },
];

export const services = [
  {
    number: "01",
    slug: "vehicle-importation",
    title: "Vehicle importation & clearing",
    summary:
      "Coordinated support for imported cars, SUVs, luxury vehicles and commercial vehicles, from shipping documentation through release and collection.",
    items: [
      "Vehicle shipping coordination",
      "Import documentation review",
      "Duty assessment coordination",
      "Clearance and collection coordination",
    ],
    image: "/images/imported-vehicle.v1.webp",
    imageAlt: "Luxury passenger vehicle on a road",
    featured: true,
  },
  {
    number: "02",
    slug: "container-clearing",
    title: "Container clearing",
    summary:
      "A clear process for 20-foot and 40-foot container shipments, including documentation, customs processing and release coordination.",
    items: [
      "FCL and LCL shipment support",
      "Import document coordination",
      "Port release coordination",
      "Container haulage coordination",
    ],
    image: "/images/container-terminal.v1.webp",
    imageAlt: "Container vessel alongside a port terminal",
    featured: false,
  },
  {
    number: "03",
    slug: "freight-forwarding",
    title: "Freight forwarding",
    summary:
      "International cargo movement planned around the shipment, documentation and delivery requirements shared by each customer.",
    items: [
      "Sea-freight coordination",
      "Cargo consolidation support",
      "Import and export support",
      "Shipping documentation",
    ],
    image: "/images/port-ship.v1.webp",
    imageAlt: "Freight truck on an international transport route",
    featured: false,
  },
  {
    number: "04",
    slug: "customs-clearance",
    title: "Customs clearance",
    summary:
      "Documentation and release coordination to help customers understand the steps involved in moving cargo through the clearance process.",
    items: [
      "Document review and coordination",
      "Cargo declaration coordination",
      "Duty and levy assessment support",
      "Regulatory process coordination",
    ],
    image: "/images/container-terminal.v1.webp",
    imageAlt: "Port cranes and container vessel during cargo operations",
    featured: false,
  },
  {
    number: "05",
    slug: "logistics-transportation",
    title: "Logistics & transportation",
    summary:
      "Inland movement planning for cargo released at port, with delivery arrangements confirmed to suit the shipment and destination.",
    items: [
      "Port-to-warehouse delivery planning",
      "Vehicle transport coordination",
      "Container haulage coordination",
      "Inland cargo delivery",
    ],
    image: "/images/port-ship.v1.webp",
    imageAlt: "Commercial truck travelling along a freight route",
    featured: false,
  },
];

export const shippingLines = {
  container: [
    "MSC — Mediterranean Shipping Company",
    "Maersk",
    "CMA CGM",
    "Hapag-Lloyd",
    "COSCO Shipping",
    "Evergreen Marine",
    "ONE — Ocean Network Express",
    "PIL — Pacific International Lines",
    "ZIM Integrated Shipping Services",
  ],
  vehicle: [
    "Grimaldi Group",
    "Sallaum Lines",
    "Höegh Autoliners",
    "NYK Line",
    "Wallenius Wilhelmsen",
  ],
};

export const processSteps = [
  {
    number: "01",
    title: "Initial consultation",
    text: "Share your cargo type, origin, destination and timing. We clarify the scope before work begins.",
  },
  {
    number: "02",
    title: "Documentation planning",
    text: "We review the shipment information and coordinate the documents needed for the next steps.",
  },
  {
    number: "03",
    title: "Arrival & coordination",
    text: "We track the planned arrival process and coordinate with the relevant shipping and port parties.",
  },
  {
    number: "04",
    title: "Clearance & release",
    text: "We coordinate customs processing, assessment support and the steps required for cargo release.",
  },
  {
    number: "05",
    title: "Collection or delivery",
    text: "After release, collection or inland transportation is arranged according to the agreed scope.",
  },
];

export function getContactDetails() {
  return {
    phone: process.env.NEXT_PUBLIC_BUSINESS_PHONE?.trim() ?? "",
    email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL?.trim() ?? "",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? "",
    address: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS?.trim() ?? "",
    hours: process.env.NEXT_PUBLIC_BUSINESS_HOURS?.trim() ?? "",
    portCoverage: process.env.NEXT_PUBLIC_PORT_COVERAGE?.trim() ?? "",
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL?.trim() ?? "",
  };
}

export function getCanonicalMetadata(path: string) {
  const siteUrl = getContactDetails().siteUrl;
  return siteUrl ? { canonical: new URL(path, siteUrl) } : undefined;
}
