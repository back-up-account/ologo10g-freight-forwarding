"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";

type FormKind = "quote" | "contact" | "tracking";

type FormState = {
  status: "idle" | "sending" | "success" | "error";
  message: string;
};

export function QuoteForm({
  kind = "quote",
  initialService,
  initialTrackingReference,
}: {
  kind?: FormKind;
  initialService?: string;
  initialTrackingReference?: string;
}) {
  const [state, setState] = useState<FormState>({ status: "idle", message: "" });
  const isQuote = kind === "quote";
  const isTracking = kind === "tracking";

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());
    setState({ status: "sending", message: "" });

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, formType: kind }),
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) {
        setState({
          status: "error",
          message: result.message ?? "We could not send your enquiry. Please try again.",
        });
        return;
      }

      form.reset();
      setState({
        status: "success",
        message: isTracking
          ? "Your tracking enquiry has been sent. This is a manual request, not a live tracking result."
          : "Your enquiry has been sent. We’ll be in touch using the details provided.",
      });
    } catch {
      setState({
        status: "error",
        message: "The enquiry could not be sent. Please check your connection and try again.",
      });
    }
  }

  return (
    <form className="enquiry-form" onSubmit={submit}>
      <div aria-live="polite" className={`form-message ${state.status}`} role="status">
        {state.status === "success" && <CheckCircle2 aria-hidden="true" size={18} />}
        {state.status === "sending" && <LoaderCircle aria-hidden="true" className="spin" size={18} />}
        {state.message || (state.status === "sending" ? "Sending your enquiry…" : "")}
      </div>

      <div className="form-grid">
        <label>
          Full name <span aria-hidden="true">*</span>
          <input autoComplete="name" maxLength={120} name="fullName" required />
        </label>
        <label>
          Company name <span className="optional">(optional)</span>
          <input autoComplete="organization" maxLength={120} name="companyName" />
        </label>
        <label>
          Email address <span aria-hidden="true">*</span>
          <input autoComplete="email" maxLength={254} name="email" required type="email" />
        </label>
        <label>
          Phone number <span aria-hidden="true">*</span>
          <input autoComplete="tel" maxLength={40} name="phone" required type="tel" />
        </label>
        {isTracking && (
          <>
            <label>
              Shipment reference <span aria-hidden="true">*</span>
              <input
                autoComplete="off"
                defaultValue={initialTrackingReference}
                maxLength={100}
                name="trackingReference"
                required
              />
            </label>
            <label>
              Bill of Lading number <span className="optional">(optional)</span>
              <input autoComplete="off" maxLength={100} name="billOfLadingNumber" />
            </label>
          </>
        )}
        {isQuote && (
          <>
            <label>
              Service required <span aria-hidden="true">*</span>
              <select defaultValue={initialService ?? ""} name="cargoType" required>
                <option disabled value="">Select a service</option>
                <option>Vehicle importation and clearing</option>
                <option>Container clearing</option>
                <option>Freight forwarding</option>
                <option>Customs clearance</option>
                <option>Logistics and transportation</option>
                <option>General enquiry</option>
              </select>
            </label>
            <label>
              Shipping origin
              <input autoComplete="off" maxLength={120} name="shippingOrigin" placeholder="Country or port" />
            </label>
            <label>
              Destination port
              <input autoComplete="off" maxLength={120} name="destinationPort" placeholder="Port or destination" />
            </label>
            <label>
              Vehicle make and model
              <input autoComplete="off" maxLength={120} name="vehicleDetails" placeholder="If applicable" />
            </label>
            <label>
              Container size
              <select defaultValue="" name="containerSize">
                <option value="">Not applicable</option>
                <option>20ft</option>
                <option>40ft</option>
                <option>Other</option>
              </select>
            </label>
          </>
        )}
        <label className="form-full">
          {isQuote ? "Shipment description" : isTracking ? "Message (optional)" : "How can we help?"}
          <textarea maxLength={4000} name="shipmentDescription" required={!isQuote && !isTracking} rows={5} />
        </label>
        <label aria-hidden="true" className="honeypot" tabIndex={-1}>
          Website
          <input autoComplete="off" name="website" tabIndex={-1} />
        </label>
      </div>

      <div className="form-submit-row">
        <p>Fields marked <span aria-hidden="true">*</span> are required.</p>
        <button className="button button-navy" disabled={state.status === "sending"} type="submit">
          {state.status === "sending" ? "Sending…" : isQuote ? "Send quote request" : isTracking ? "Request a tracking update" : "Send message"}
          {state.status !== "sending" && <ArrowRight size={17} />}
        </button>
      </div>
      <p className="form-privacy">
        Your details will be used to respond to this enquiry. Tracking requests are
        handled manually; no live carrier tracking is connected. Please do not include
        payment card details or sensitive personal information.
      </p>
    </form>
  );
}
