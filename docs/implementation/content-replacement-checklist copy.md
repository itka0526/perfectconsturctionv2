# Production content replacement checklist

The repository currently contains preview content and unmistakably labelled
SVG layout aids. Complete every item below before changing a related
`verificationStatus` to `verified`. Production deployment is blocked until all
required items pass.

## Company identity and contact

- [ ] Confirm the Mongolian legal company name and preferred public company
      name spelling.
- [ ] Replace `assets.company.logo` with an authorized SVG or transparent PNG;
      confirm clear-space and minimum-size rules.
- [ ] Confirm primary public telephone number and test its `tel:` target on a
      real phone.
- [ ] Confirm primary public email address and test delivery/reply ownership.
- [ ] Confirm the exact Facebook page URL and page ownership.
- [ ] Confirm the office address in Mongolian, opening/meeting expectations, and
      the exact map destination URL.
- [ ] Obtain an approved office photograph and team/engineer photograph; confirm
      the names or people that may appear publicly.
- [ ] Approve the next-working-day preliminary quotation statement and its
      condition: sufficient project information after site measurement.

## Evidence and capability claims

- [ ] Confirm founding year from an authoritative company document.
- [ ] Confirm the exact installed-unit/project count with an **as-of date**.
- [ ] Confirm team roles, qualifications, licenses, and the exact public wording
      for engineering capability.
- [ ] Confirm geographic service coverage and explicitly list any selected
      provinces rather than implying nationwide availability.
- [ ] Confirm the limited after-sales statement applies only to equipment
      supplied or installed by Perfect Construction.
- [ ] Approve any fault-resolution wording and its exclusions; do not publish
      the informal 24–48 hour observation as a guarantee.
- [ ] Confirm warranty scope, duration, exclusions, and which wording varies by
      contract/project.
- [ ] Confirm spare-parts categories and realistic international order/delivery
      ranges. Do not imply all parts are stocked in Mongolia.

## Timeline claims

- [ ] Approve **30 days manufacturing** and its start condition: technical
      specifications approved and contractual order confirmed.
- [ ] Approve **from 15 days delivery from China** and its start condition:
      factory dispatch.
- [ ] Approve **from 8 days installation** and its start condition: formal site
      readiness confirmation.
- [ ] Confirm whether commissioning, inspection, and certification are inside or
      outside the published installation baseline.
- [ ] Approve exclusions for customization, type/stops, customs, weather,
      construction readiness, and delays outside company control.
- [ ] Provide separate SEOHYUN logistics wording and project-specific scheduling
      language. The 30/15/8 baseline must not be applied to SEOHYUN by default.

## Manufacturer approvals

- [ ] SEOHYUN: authorized logo files, exact manufacturer name, origin,
      relationship/distributor status, valid authorization document, validity
      dates, and written publication permission.
- [ ] FUJI Precision: authorized logo files, exact manufacturer name, origin,
      relationship/distributor status, valid authorization document, validity
      dates, and written publication permission.
- [ ] ASIA FUJI: authorized logo files, exact manufacturer name, origin,
      relationship/distributor status, valid authorization document, validity
      dates, and written publication permission.
- [ ] Confirm the wording that positions SEOHYUN as premium with higher transport
      cost/longer logistics.
- [ ] Confirm the wording that positions both China-origin manufacturers for
      project-configured Mongolian market needs without making unsupported
      quality, price, or market-leading claims.
- [ ] For each publishable certificate, add an optimized preview; add a PDF only
      if downloading is explicitly authorized.

## Products and technical content

- [ ] Review Mongolian names and terminology for passenger, home, cargo,
      hospital, panoramic, escalator/moving walk, dumbwaiter/service lift, and
      cabin/control customization.
- [ ] Confirm which of the three manufacturers applies to each product category.
- [ ] Approve building/application guidance and general technical considerations.
- [ ] Obtain authorized product and customization imagery or official catalog
      extracts with publication rights.
- [ ] Confirm official catalog files, language, version dates, download rights,
      and realistic file sizes.
- [ ] Keep detailed specifications conversational/catalog-based unless the
      technical reviewer confirms the exact public values.

## At least three real Mongolian project case studies

For each project replacing `ulaanbaatar-residence`, `city-service-center`, and
`industrial-building` (or renamed stable slugs):

- [ ] Obtain project/client publication permission.
- [ ] Confirm public project name, location, building type, completion date, and
      product/manufacturer association.
- [ ] Record a truthful project challenge, selected solution, and outcome.
- [ ] Confirm capacity/stops/quantity only if the values may be public.
- [ ] Supply high-resolution exterior/context, installed cabin/door/control, and
      detail photographs; identify any people, license plates, drawings, or
      confidential site details that need cropping or removal.
- [ ] Write descriptive Mongolian alternative text based on the real image.
- [ ] Confirm the featured image crop at mobile and desktop aspect ratios.

## Metadata, legal, and final review

- [ ] Approve each Mongolian page title and description; eliminate placeholder
      or duplicated metadata.
- [ ] Confirm `public/og.png` remains the approved Architectural Editorial social
      card or replace it with a final approved 1200×630 card.
- [ ] Review Organization/LocalBusiness, BreadcrumbList, and Service structured
      data against verified facts; omit ratings, prices, offers, and unsupported
      Product claims.
- [ ] Approve analytics and external-link disclosure on `/privacy`.
- [ ] Complete a named Mongolian technical terminology/spelling review.
- [ ] Keep English disabled until every required English value and page is
      translated and approved as a complete release.

## Final production gate

- [ ] No public non-draft record has `verificationStatus: "placeholder"`.
- [ ] No public asset path points to `/assets/placeholders/`.
- [ ] Every referenced asset exists and has correct intrinsic dimensions and
      meaningful Mongolian alternative text.
- [ ] Every contact and the office address is verified and tested.
- [ ] Every proof metric and timeline step is verified.
- [ ] Every visible certificate has `publicationAuthorized: true`.
- [ ] `pnpm build` succeeds and its content-validation warnings have been reviewed.
- [ ] Lint, strict type-check, unit, Playwright, Axe, link, asset, responsive, and
      client visual-approval checks pass.
