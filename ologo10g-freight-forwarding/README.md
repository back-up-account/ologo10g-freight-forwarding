# Ologo10g Nig Ltd

A premium, responsive corporate website starter for Ologo10g Nig Ltd, built with Next.js App Router, React, TypeScript, and modular CSS.

## What is included

- Homepage and dedicated About, Services, Shipping Resources, manual Tracking Enquiry, Shipping Lines, Operations, Request a Quote, Contact, and Privacy pages.
- Responsive keyboard-accessible navigation, accessible labels, visible focus states, reduced-motion support, and a skip link.
- Vehicle importation, container clearing, freight forwarding, customs coordination, and inland logistics content.
- A quote/contact form backed by a server-side Resend integration. The API returns explicit configuration/delivery errors and does not report success when email delivery is unavailable.
- A tracking-reference enquiry form that sends a manual request by email when configured. It does not claim to provide live tracking or display fabricated shipment events.
- General shipping explainers and FAQs with clear limits around carrier availability, pricing, transit times, and customs/regulatory advice.
- Server-side field validation, email format checks, a request body limit, and a honeypot field.
- Editable business contact settings through environment variables. Unverified addresses, port coverage, licences, affiliations, company history, and achievements are not presented as established facts.
- Shipping company names as text only, with an explicit no-affiliation/no-authorised-agent disclaimer.
- Local WebP industry photography. Images are illustrative and labelled as not representing OLOGO10G’s own operations.
- SEO metadata, Organization structured data, `robots.txt`, and `sitemap.xml`.
- Local image optimization with `next/image`, lazy loading for below-the-fold imagery, one-year immutable caching for versioned WebP assets, and standard security response headers.

## Run locally

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Public contact fields may remain blank during development. Forms intentionally return a clear service-not-configured error until the email provider settings are present.

## Configure enquiry delivery

1. Create a Resend account and verify the sending domain/address.
2. Set `RESEND_API_KEY`, `ENQUIRY_FROM_EMAIL`, and `ENQUIRY_TO_EMAIL` in the deployment platform’s server-side secret settings.
3. Use a valid sender address from the verified domain. Never expose the API key with a `NEXT_PUBLIC_` prefix.
4. Submit test quote and contact enquiries; verify delivery, reply-to behavior, error handling, and mailbox retention.
5. Before exposing the endpoint publicly, configure rate limiting and bot protection at the hosting edge/WAF. The included honeypot and payload checks are not a substitute for edge rate limits or abuse monitoring.

The form handler sends enquiries to the configured email service; it does not persist submissions in an application database. Configure retention and access controls for the destination mailbox/provider. The tracking page is a manual email enquiry only; no tracking API, administrator workflow, shipment database, status history or delivery estimate is implemented.

## Business content: where to enter verified information

The repository contains temporary, clearly labelled copy where company facts have not been supplied. Treat that copy as a launch blocker, not as real business information. Replace it only with details approved by the business; do not make up contact details, dates, locations, licences, partnerships, prices, results, or customer stories.

| Area to confirm | Temporary state in this project | Where to enter approved information |
| --- | --- | --- |
| Public contact information | Contact page and footer show “to be confirmed” when values are blank. | Copy `.env.example` to `.env.local` for local work, or set the same keys in the deployment platform’s environment settings: `NEXT_PUBLIC_BUSINESS_PHONE`, `NEXT_PUBLIC_BUSINESS_EMAIL`, `NEXT_PUBLIC_WHATSAPP_NUMBER`, `NEXT_PUBLIC_BUSINESS_ADDRESS`, `NEXT_PUBLIC_BUSINESS_HOURS`, and `NEXT_PUBLIC_PORT_COVERAGE`. The values are read in `src/lib/site.ts` and displayed by `src/app/contact/page.tsx` and `src/components/site-footer.tsx`. |
| Production website address | Canonical metadata is omitted when the site URL is blank. | Set `NEXT_PUBLIC_SITE_URL` in `.env.local` or deployment settings. Metadata and sitemap generation use `src/lib/site.ts`, `src/app/layout.tsx`, and `src/app/sitemap.ts`. |
| Company profile, ownership, history, registrations, licences, team, mission and vision | The About page identifies working copy and lists information to confirm. | Update the relevant copy in `src/app/about/page.tsx` after the business verifies and approves each claim. Remove the “working statement” or “information to confirm” labels only when the replacement is verified. |
| Services and service scope | The service list describes coordination and avoids promising unverified licensed work. | Edit the service names, summaries and bullet points in `src/lib/site.ts`; update the explanatory service boundaries in `src/app/services/page.tsx`. Publish only services the business is authorized and able to deliver, including any partner-dependent work. |
| Port coverage and operating area | The contact section uses a confirmation message if no coverage is configured. | Set `NEXT_PUBLIC_PORT_COVERAGE` for the public summary. For additional location-specific page copy, update `src/app/contact/page.tsx` and the relevant service copy in `src/lib/site.ts`. Verify each named port, route and destination before publishing it. |
| Shipping-line relationships | The shipping-lines page lists industry names as text and explicitly disclaims affiliation. | The general list is in `src/lib/site.ts`. Keep the disclaimer in `src/app/shipping-partners/page.tsx` and `src/components/shipping-lines.tsx`. Only describe a company as an agent, partner or collaborator after confirming a current agreement and authorization. |
| Company photographs and operational examples | Current gallery and service imagery is illustrative and labelled as such; it does not claim to show OLOGO10G operations. | Add company-owned or properly licensed, publication-approved image files under `public/images/`; update image paths, alt text and captions in `src/app/operations/page.tsx` and `src/lib/site.ts`. Keep the illustrative disclaimer for any image that is not an actual, approved company image. Add case studies or customer names only with documented permission. |
| Enquiry delivery | Forms report a configuration/delivery error rather than claiming success when email is not configured. | Set `RESEND_API_KEY`, `ENQUIRY_FROM_EMAIL`, and `ENQUIRY_TO_EMAIL` as server-side deployment secrets (or in the ignored local `.env.local`). The template is `.env.example`; delivery and validation are implemented in `src/app/api/enquiries/route.ts`. Never use `NEXT_PUBLIC_` for the API key. |
| Privacy contact, retention and legal wording | The privacy page notes that final retention and jurisdiction-specific details need confirmation. | Review and update `src/app/privacy/page.tsx` with the actual data controller/contact, retention period, applicable privacy requirements and provider details. Get business/legal approval before collecting real enquiries. |
| Social accounts, testimonials, prices and performance claims | These are omitted or not presented as verified facts. | Add only after verification and written approval. Put page-specific copy in the relevant `src/app/**/page.tsx` file; put shared service or shipping-line content in `src/lib/site.ts`. Do not add a testimonial, price, affiliation, service guarantee or performance metric as filler. |
| Dates and time-sensitive text | The copyright year is generated at runtime; no company founding year or operating-history date is asserted. | The footer year is in `src/components/site-footer.tsx` and should remain dynamic. Enter a founding date, service schedule, promotion end date or other time-specific fact only in the relevant page after confirming the date and its validity period. |

For local development, run `cp .env.example .env.local` from the project root and fill only approved values. `.env.local` is git-ignored; never put real customer or business secrets into `.env.example` or commit them. For production, configure the same values through the hosting provider’s environment/secret settings and redeploy. Keep the environment keys and their public/private status as documented in `.env.example`.

The WhatsApp value should be an international phone number containing digits only, including the country code. Social profile links are omitted until verified company accounts are supplied. Do not treat blank fields or visible “to be confirmed” copy as production-ready; complete the table, review every page, and obtain business approval before launch.

## Shipping brand and photography notes

Shipping names are plain-text identifiers. Their listing does not imply a relationship with OLOGO10G. Do not add shipping-company logos or partnership labels without permission and verified agreements.

Current illustrative photographs are locally stored WebP files sourced from Unsplash:

- `public/images/container-terminal.v1.webp` — `photo-1578575437130-527eed3abbec`
- `public/images/imported-vehicle.v1.webp` — `photo-1503376780353-7e6692767b70`
- `public/images/port-ship.v1.webp` — `photo-1519003722824-194d4455a60c`

Replace these with licensed company photographs when available, and keep the illustrative-photo disclaimer until actual company operations are documented and approved for publication.

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

Before launch, test pages and forms at 320, 375, 430, 768, 1024, 1366, and 1920 pixels; check keyboard-only navigation, contrast, screen-reader announcements, image loading, delivery and failure cases, page metadata, and external links. Review current privacy obligations and obtain approval of the website privacy notice before collecting real customer data.
