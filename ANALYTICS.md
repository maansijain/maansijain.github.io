# Website analytics

Measurement ID: `G-5XNQZ1897M`. Shared `analytics.js` and `analytics.css` run on all HTML pages. Google loads only after opt-in; no tracking requests are deliberately sent before consent. Preferences last 180 days. Storage failure falls back to per-page consent.

## Google Analytics account setup

In Admin → Data streams → this website, turn OFF Enhanced measurement to keep collection limited to the explicit events here (and prevent automatic outbound-click/form/query collection). Verify the stream URL is https://maansijain.com. Review the property's retention and data-sharing settings for your intended use.

In Admin → Custom definitions, create event-scoped custom dimensions for `workshop_slug` and `link_placement` using those exact event parameter names. Event: `workshop_booking_click`; provider: `getyourguide`. A click can originate from a button, photo or ordinary listing link, including middle-clicks. These represent referral intent, never completed bookings. Do not label this event as a purchase. No historical bookings can be attributed retroactively.

After deployment: accept analytics in a fresh browser session, open a workshop and follow its booking link. Check Realtime for `page_view` and `workshop_booking_click`. Standard reports/custom dimensions can take 24–48 hours. Explore → Free form: rows `workshop_slug`, columns `link_placement`, metric Event count, filter Event name exactly `workshop_booking_click`.

Consent denial, blockers, interrupted navigation or network failures can reduce counts. This integration intentionally preserves immediate external navigation. No GetYourGuide conversion integration is configured. Source queries/UTM parameters are stripped from explicit events; referrers retain origin only.

The browser tests use an intercepted Google tag, so they send no test traffic to the actual property. Receipt in GA must be verified after deployment.

## Site-wide reporting

All current HTML pages, including Available Works and the 404 page, include the shared script. Events after consent:

- `site_link_click`: `link_kind`, `link_destination`, `link_placement`, `link_id`. Covers HTTP(S), same-page anchors, mailto and tel links. Each click is one event; workshop links additionally emit the dedicated workshop event. Do not sum the two as unique clicks.
- `site_button_click`: `control_id`. Includes gallery and quiz controls; does not collect answers or entered text.
- `site_scroll_depth`: `percent_scrolled` (25, 50, 75, 90), once per page lifetime per milestone after consent.

Create event-scoped custom dimensions for the string parameters above that you want to use in reports. Link/control fallback IDs are their DOM index on that page and can change when content is reordered. Set `data-analytics-id` on a link/button for a stable descriptive identifier. Always combine identifiers with page path. Email/phone links send only the protocol; queries, fragments, addresses and message bodies are excluded. No session replay or fingerprinting is installed. Page paths and external destination paths remain visible in reporting. Campaign query parameters are intentionally excluded, so campaign attribution is limited.

The broader scope uses consent key v2, so old workshop-only consent is not reused. Only consented, unblocked visits can be measured. The new measurement ID was supplied by the site owner for maansijain.com on 7 October 2026. The old property ID is no longer used.

Account setup and real Google event receipt are still unverified. Enhanced measurement must be turned off before publishing to prevent additional automatic collection beyond these events. This cannot be controlled reliably by the site's `send_page_view: false` setting.
