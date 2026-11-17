import { NextResponse } from "next/server";

export const runtime = "nodejs";

const maxBodyBytes = 12_000;
const maxLengths: Record<string, number> = {
  fullName: 120,
  companyName: 120,
  email: 254,
  phone: 40,
  cargoType: 80,
  shippingOrigin: 120,
  destinationPort: 120,
  vehicleDetails: 120,
  containerSize: 40,
  trackingReference: 100,
  billOfLadingNumber: 100,
  shipmentDescription: 4000,
};

function clean(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function text(value: Record<string, unknown>, key: string): string {
  return clean(value[key]);
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return NextResponse.json({ message: "Send the enquiry using the provided form." }, { status: 415 });
  }

  const rawBody = await request.text();
  if (new TextEncoder().encode(rawBody).byteLength > maxBodyBytes) {
    return NextResponse.json({ message: "The enquiry is too large. Shorten the message and try again." }, { status: 413 });
  }

  let payload: Record<string, unknown>;
  try {
    const parsed: unknown = JSON.parse(rawBody);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return NextResponse.json({ message: "Please check the form details and try again." }, { status: 400 });
    }
    payload = parsed as Record<string, unknown>;
  } catch {
    return NextResponse.json({ message: "The enquiry could not be read. Please try again." }, { status: 400 });
  }

  if (text(payload, "website")) {
    return NextResponse.json({ message: "Please check the form and try again." }, { status: 400 });
  }

  const tooLong = Object.entries(maxLengths).some(([key, max]) => {
    const value = payload[key];
    return typeof value === "string" && value.trim().length > max;
  });
  if (tooLong) {
    return NextResponse.json({ message: "One or more fields are too long. Please shorten them and try again." }, { status: 400 });
  }
  const values = Object.fromEntries(
    Object.keys(maxLengths).map((key) => [key, text(payload, key)]),
  );
  const { fullName, email, phone, cargoType, shipmentDescription } = values;
  const formType = text(payload, "formType");

  if (
    !fullName ||
    !email ||
    !phone ||
    (formType === "quote" && !cargoType) ||
    (formType === "tracking" && !values.trackingReference)
  ) {
    return NextResponse.json({ message: "Please complete all required fields." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ message: "Enter a valid email address." }, { status: 400 });
  }
  if (!["quote", "contact", "tracking"].includes(formType)) {
    return NextResponse.json({ message: "The enquiry type is not valid." }, { status: 400 });
  }
  if (!shipmentDescription && !cargoType && formType === "contact") {
    return NextResponse.json({ message: "Please add a message before sending." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.ENQUIRY_TO_EMAIL;
  const sender = process.env.ENQUIRY_FROM_EMAIL;
  if (!apiKey || !recipient || !sender) {
    return NextResponse.json(
      { message: "The enquiry service is not configured yet. Please use the verified contact details on this site." },
      { status: 503 },
    );
  }

  const subject = formType === "quote"
    ? "New quote request"
    : formType === "tracking"
      ? "New manual tracking enquiry"
      : "New contact enquiry";
  const body = [
    `Enquiry type: ${formType}`,
    ...(formType === "tracking" ? [
      `Tracking reference: ${values.trackingReference}`,
      `Bill of Lading number: ${values.billOfLadingNumber || "Not provided"}`,
      "Handling: Manual status enquiry; no live tracking integration is configured.",
    ] : []),
    `Name: ${fullName}`,
    `Company: ${values.companyName || "Not provided"}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Service: ${values.cargoType || "Not specified"}`,
    `Shipping origin: ${values.shippingOrigin || "Not provided"}`,
    `Destination port: ${values.destinationPort || "Not provided"}`,
    `Vehicle details: ${values.vehicleDetails || "Not applicable"}`,
    `Container size: ${values.containerSize || "Not applicable"}`,
    "",
    "Shipment / enquiry details:",
    shipmentDescription || "Not provided",
  ].join("\n");

  let response: Response;
  try {
    response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: email,
        subject,
        text: body,
      }),
      signal: AbortSignal.timeout(10_000),
      cache: "no-store",
    });
  } catch (error) {
    console.error("Email provider request failed.", error instanceof Error ? error.name : "UnknownError");
    return NextResponse.json(
      { message: "The enquiry service is temporarily unavailable. Please try again shortly." },
      { status: 502 },
    );
  }

  if (!response.ok) {
    console.error("Email provider rejected an enquiry.", response.status);
    return NextResponse.json(
      { message: "Your enquiry could not be delivered. Please try again or contact us directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: "Enquiry sent." }, { status: 202 });
}
