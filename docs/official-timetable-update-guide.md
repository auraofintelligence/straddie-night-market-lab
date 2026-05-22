# Official Timetable Update Guide

Last added: 11 May 2026.

Use this guide before changing any public timetable, route, service-alert or capacity text in this repo.

## Source Priority

Use official sources first:

1. Translink route pages and official PDFs for routes 880 and 881.
2. SeaLink timetable, status and fleet pages for vehicle and passenger ferries.
3. Stradbroke Flyer / Gold Cats timetable and operator pages.
4. Direct operator pages for local taxis, private transfers and charters.

Use tourism listings, event pages, search snippets or old screenshots only as secondary clues. Do not treat them as current timetable proof.

## Current Official Links

- Translink 880 live route page: https://jp.translink.com.au/plan-your-journey/timetables/bus/F/880
- Translink 881 live route page: https://jp.translink.com.au/plan-your-journey/timetables/bus/F/881
- Translink 880/881 PDF used for the current site snapshot: https://translink.com.au/sites/default/files/acquiadam-assets/timetables/251201-880-881.pdf
- Translink service updates: https://translink.com.au/service-updates
- Translink real-time information: https://translink.com.au/plan-your-journey/real-time
- SeaLink ferry timetable: https://www.sealink.com.au/north-stradbroke-island/ferry-information/timetable/
- SeaLink service status: https://www.sealink.com.au/north-stradbroke-island/status
- SeaLink fleet: https://www.sealink.com.au/north-stradbroke-island/ferry-information/sealink-seq-ferries/
- Stradbroke Flyer timetable: https://www.flyer.com.au/timetable

## Update Checklist

Before editing `transport.html`:

1. Open the official source page or PDF.
2. Check the `effective from`, `printed`, `last updated` or visible date on the source.
3. Check both directions of travel. Do not publish a one-way summary as a full timetable.
4. Check weekday, weekend, public holiday, school holiday and seasonal notes.
5. Check disruption and service-alert pages on the same day.
6. Record the checked date in the page or research notes.
7. If a timetable table changes, update the visible table and the source note together.
8. If a live page or PDF URL changes, update `transport.html`, `docs/research-notes.md` and this guide.

## Bus Timetable Rules

For routes 880 and 881:

- Prefer the official Translink PDF for full static table snapshots.
- Prefer the Translink live route pages for day-specific and next-service checks.
- Keep each direction separate:
  - 880 Dunwich to Point Lookout.
  - 880 Point Lookout to Dunwich.
  - 881 Dunwich to Amity Point.
  - 881 Amity Point to Dunwich.
- If the map is not embedded, do not show unexplained map-reference columns. Use stop or timing-point names directly.
- Preserve Translink footnotes such as `A` services, public-holiday rules and dash meanings.

## Suggested Extraction Command

If the PDF is updated, download it and extract text before editing:

```powershell
$url = "https://translink.com.au/sites/default/files/acquiadam-assets/timetables/251201-880-881.pdf"
$out = Join-Path $env:TEMP "translink-880-881.pdf"
Invoke-WebRequest -Uri $url -OutFile $out
@'
from pypdf import PdfReader
from pathlib import Path
from os import environ
reader = PdfReader(Path(environ["TEMP"]) / "translink-880-881.pdf")
for i, page in enumerate(reader.pages, 1):
    print(f"\n--- PAGE {i} ---")
    print(page.extract_text() or "")
'@ | python -
```

Use the bundled Python runtime if the normal `python` cannot import `pypdf`.

## Review After Editing

Run these checks:

```powershell
node --check app.js
node --check data\market-data.js
```

Then run a link check and open `transport.html#bus-routes-timetable` in the browser. Confirm that:

- All official source links open in new tabs.
- Same-page timetable links land on real headings.
- Tables show both directions.
- Wide timetable tables scroll inside their own table box and do not make the whole page horizontally scroll.
- Source dates and footnotes are visible.
- Disruption and backup questions are still present.

## Public Wording Rule

Avoid mandate language such as `should show` or `must display` unless quoting an official operator requirement.

Prefer:

- `What needs checking?`
- `What can the public page answer?`
- `Which source was checked, and when?`
- `What changed today?`
- `What is the backup path if a service is full, delayed or cancelled?`
