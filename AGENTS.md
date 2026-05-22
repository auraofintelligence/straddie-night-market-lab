# AGENTS.md

This repo is for a public-facing, question-led Straddie night market onboarding process.

## Working Style

- Use Australian English.
- Keep the tone grounded, local, respectful and plain-spoken.
- Write for a community audience by default: hosts, organisers, stallholders, visitors, volunteers, transport partners and media helpers.
- Treat Strange But True as a visual reference or optional contributor only when the page explicitly needs that context.
- Use host-led or organiser-led language for the wider market.
- Prefer questions, mapping, consent and source checking over hype.
- Keep the Strange But True dark-mode style: night ink, deep panels, purple, cyan, gold, green, strong headings, readable body text, 8px radius.
- This is a static site. Keep it simple enough to open locally or publish through GitHub Pages.

## Public Boundary

- This site is an onboarding and data-gathering pattern. Live event language needs approval, permits where required and current schedule checks.
- Any real market, stall, projection, food activity, transport partnership or public notice needs venue permission, cultural care, compliance checks and fresh source verification.
- When adding new locations, store the difference between `known`, `assumed`, `question` and `needs contact`.

## Data Rules

- Add candidate locations in `data/market-data.js`.
- Every candidate should have:
  - village
  - current public signal
  - possible night market use
  - missing questions
  - projection fit
  - transport fit
  - source links where available
- Use the mapper as a question builder. Keep output in host-review language.

## Official Timetable Rules

- Before changing transport times, routes, service alerts or capacity claims, read `docs/official-timetable-update-guide.md`.
- Use official operator sources first. For buses, use Translink route pages and official PDFs. For ferries, use SeaLink and Stradbroke Flyer / Gold Cats operator pages.
- Check both directions of travel, public-holiday notes, seasonal notes and disruption pages before updating public timetable text.
- Date-stamp timetable source checks in the page or `docs/research-notes.md`.
- Do not publish one-way summaries as full timetables.
- If the map is not embedded, do not show unexplained map-reference columns. Use stop or timing-point names directly.
- Keep wording question-led: what needs checking, what changed today, and what backup path exists if a service is full, delayed or cancelled.

## Contact Form Rules

- The Research contact form must be a real one-click web form once deployed.
- Do not use `mailto:` or Gmail compose URLs for the public contact form.
- Use `apps-script/contact-form.gs` and `docs/contact-form-apps-script.md`.
- Paste the deployed Apps Script Web App URL into `CONTACT_SCRIPT_URL` in `app.js`.
- If no Apps Script URL is configured, keep the submit button disabled rather than pretending the form works.
- The Apps Script contact pipeline appends to a private Google Sheet and sends an email to `sbt4183@gmail.com`.
- Keep the Sheet private unless the user explicitly asks to share or publish it.

## Onboarding Form Rules

- The Onboarding form uses a separate Apps Script endpoint from the Research contact form.
- Use `apps-script/onboarding-form.gs` and `docs/onboarding-form-apps-script.md`.
- Paste the deployed Apps Script Web App URL into `ONBOARDING_SCRIPT_URL` in `app.js`.
- The onboarding pipeline saves the generated markdown record as a Drive `.md` file, appends structured fields and the Drive file link to a private Google Sheet, then sends an email to `sbt4183@gmail.com` with the record attached.
- If no Apps Script URL is configured, keep the submit button disabled rather than pretending the form works.

## Future Network Rules

- Treat AI, simulation and news-network content as planning support.
- Keep human host review, cultural authority and current source checks ahead of publication.
- Public notice data should be short, dated, verified and easy to expire.
- Private planning data can hold open questions, raw notes, contacts and sensitive review items.
- Use `docs/ai-simulation-noticeboard-network.md` as the bridge between source dossiers and public pages.

