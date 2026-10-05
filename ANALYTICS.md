# Website analytics

Measurement ID: `G-76FFL9MYB9`. Shared `analytics.js` and `analytics.css` run on all HTML pages. Google loads only after opt-in; no tracking requests are deliberately sent before consent. Preferences last 180 days. Storage failure falls back to per-page consent.

## Google Analytics account setup

In Admin → Data streams → this website, turn OFF Enhanced measurement to keep collection limited to the explicit page-view and workshop-click events here (and prevent automatic outbound-click/form/query collection). Verify the stream URL is https://maansijain.com. Review the property's retention and data-sharing settings for your intended use.

In Admin → Custom definitions, create event-scoped custom dimensions for `workshop_slug` and `link_placement` using those exact event parameter names. Event: `workshop_booking_click`; provider: `getyourguide`. A click can originate from a button, photo or ordinary listing link, including middle-clicks. These represent referral intent, never completed bookings. Do not label this event as a purchase. No historical bookings can be attributed retroactively.

After deployment: accept analytics in a fresh browser session, open a workshop and follow its booking link. Check Realtime for `page_view` and `workshop_booking_click`. Standard reports/custom dimensions can take 24–48 hours. Explore → Free form: rows `workshop_slug`, columns `link_placement`, metric Event count, filter Event name exactly `workshop_booking_click`.

Consent denial, blockers, interrupted navigation or network failures can reduce counts. This integration intentionally preserves immediate external navigation. No GetYourGuide conversion integration is configured. Source queries/UTM parameters are stripped from explicit events; referrers retain origin only.

The browser tests use an intercepted Google tag, so they send no test traffic to the actual property. Receipt in GA must be verified after deployment.
