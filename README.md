# Straddie Market Onboarding

A dark-mode static repo for community market onboarding on Straddie.

The site collects common onboarding details for stallholders, artists, food providers, venues, organisers, helpers and local market ideas.

## Open Locally

From this folder:

```powershell
python -m http.server 4196
```

Then open:

```text
http://localhost:4196
```

## Pages

- `index.html` - community doorway and role-based onboarding.
- `mapper.html` - market onboarding form for applications, offers, host spaces and local ideas.
- `transport.html` - current public ferry/bus timetable snapshots, routes, passenger-capacity fields, service-alert links, disruption questions, taxis and private transfers.
- `noticeboard.html` - bridge to the Straddie Noticeboard Network.
- `future-network.html` - connected notice, media, grant, resilience and community infrastructure links.
- `research.html` - registration contact, source checks and onboarding link.

## Why This Exists

The working idea is a shared market intake flow:

1. Let people register interest, apply for a stall, offer food, suggest a venue or add a market idea.
2. Collect the details organisers usually need: contact, offer, photos/socials, stall layout, site needs, insurance, food checks and availability.
3. Keep private follow-up details separate from public listing details.
4. Check transport timetables, passenger capacity, taxis, private transfers, parking, toilets, accessibility, weather and visitor FAQ before promotion.
5. Use the Straddie Noticeboard Network to distribute reviewed public information.

Host organisations and existing organisers still set the frame. The onboarding form helps locals and partners provide useful, reviewable market data in one place.

## Source Notes

The site draws on:

- Current web research into Point Lookout Markets, venue pages, island event listings, ferry/transport pages and arts/culture event examples.
- Local source documents from the Downloads and processed markdown folders, including Island Resilience, business planning notes, co-op, Minjerribah research, event simulation and Straddie media-network documents.
- Associated public sites: Strange But True, Ready S.E.T. Co-op + Hyperlocal Media and Stradbroke Grants Lab entities.

See `docs/research-notes.md` for the detailed scan.
See `docs/ai-simulation-noticeboard-network.md` for the AI and simulation integration note.
See `docs/official-timetable-update-guide.md` before editing transport timetables or service-alert links.
See `docs/contact-form-apps-script.md` before enabling the Research contact form and its private Google Sheet log.
See `docs/onboarding-form-apps-script.md` before enabling the Onboarding form and its private Google Sheet log.

