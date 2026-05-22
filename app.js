const marketData = window.MARKET_DATA || { locations: [], seasons: [], sourceLinks: {} };
const CUSTOM_LOCATION_ID = "__new_location__";
const RECORD_EMAIL = "sbt4183@gmail.com";
const CONTACT_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby_SeHDhJiEJYR7jtxsu948tmHUQk-o1a5QiUy8CKEBW2D40B4hBFZrOEavPaKNxHF_/exec";
const ONBOARDING_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxN7uMlq4FHUrysCDiNV6FI_A8nvSKR1EO2dFjSzbKymC5iQfKKEIBBQ7YS6In7t8yx/exec";
const RELATED_LINKS = [
  {
    label: "Strange But True About",
    url: "https://auraofintelligence.github.io/strange-but-true/about.html",
    note: "Background on the Strange But True service context for practical tech help, event media and creative experiments."
  },
  {
    label: "Straddie Noticeboard Network",
    url: "https://auraofintelligence.github.io/straddie-noticeboard-network/",
    note: "Public notices, changed details, ferry reminders, venue-screen copy and simple markdown updates."
  },
  {
    label: "Local Media",
    url: "https://auraofintelligence.github.io/ready-set-co-op-hyperlocal-media/index.html",
    note: "Weekend wraps, gig-guide items, small interviews, event recaps and beginner-friendly community media tasks."
  },
  {
    label: "Grants Entity Map",
    url: "https://auraofintelligence.github.io/stradbroke-grants-lab/entities.html",
    note: "Public information about groups, clubs, makers, services and possible project partners."
  },
  {
    label: "Resilience Screens",
    url: "https://auraofintelligence.github.io/straddie-disaster-kiosks/",
    note: "Ideas for weather, outage, ferry disruption and emergency information screens."
  },
  {
    label: "Amity Fitness Grant",
    url: "https://auraofintelligence.github.io/amity-outdoor-fitness-grant/",
    note: "Outdoor fitness, safer access, local health infrastructure and grant-ready community facility planning."
  },
  {
    label: "Strange But True",
    url: "https://auraofintelligence.github.io/strange-but-true/",
    note: "Tech help, projection, event media, public notices and small practical experiments for local market nights."
  }
];

const toggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("#nav-links");
const topButton = document.querySelector("[data-to-top]");

if (toggle && navLinks) {
  toggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navLinks.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

document.querySelectorAll("[data-back]").forEach((button) => {
  button.addEventListener("click", () => {
    if (window.history.length > 1) {
      window.history.back();
      return;
    }

    window.location.href = "index.html";
  });
});

if (topButton) {
  const updateTopButton = () => {
    topButton.classList.toggle("is-visible", window.scrollY > 560);
  };

  updateTopButton();
  window.addEventListener("scroll", updateTopButton, { passive: true });
  topButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function clean(value, fallback = "to confirm") {
  const text = String(value || "").trim();
  return text || fallback;
}

function checkedValues(form, name) {
  return [...form.querySelectorAll(`input[name="${name}"]:checked`)].map((item) => item.value);
}

function slugify(value) {
  const slug = String(value || "market-onboarding-record")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return slug || "market-onboarding-record";
}

function relatedLinksText() {
  return RELATED_LINKS
    .map((link) => `- ${link.label}: ${link.url}\n  ${link.note}`)
    .join("\n");
}

function buildEmailBody(recordText) {
  return `Hello Strange But True,

Here is a Straddie Market Onboarding record for review.

${recordText}

Related links to keep exploring:

${relatedLinksText()}

Thanks for taking a look. Please keep exploring the connected pages if they help with notices, media, grants, resilience planning or future market coordination.
`;
}

function currentLocation(values) {
  if (values.location !== CUSTOM_LOCATION_ID) {
    return marketData.locations.find((item) => item.id === values.location) || marketData.locations[0] || {};
  }

  return {
    id: CUSTOM_LOCATION_ID,
    name: clean(values.newLocationName, "New market, venue or event"),
    village: clean(values.newLocationVillage, "area to confirm"),
    conceptUse: `Suggested host or organiser: ${clean(values.newLocationHost, "to confirm")}.`,
    sourceIds: []
  };
}

function summaryCard(title, value, fallback = "To confirm.") {
  return `
    <article class="question-batch">
      <h4>${title}</h4>
      <p>${escapeHtml(clean(value, fallback))}</p>
    </article>
  `;
}

function initMarketForm() {
  const form = document.querySelector("[data-market-form]");
  const output = document.querySelector("[data-market-output]");
  const record = document.querySelector("[data-record-output]");
  if (!form || !output || !record) return;

  const locationSelect = form.querySelector("[name='location']");
  const seasonSelect = form.querySelector("[name='season']");
  const newLocationFields = form.querySelector("[data-new-location-fields]");
  const recordInput = form.querySelector("[data-onboarding-record-input]");
  const recordFilenameInput = form.querySelector("[data-onboarding-record-filename]");

  locationSelect.innerHTML = marketData.locations
    .map((location) => `<option value="${location.id}">${location.name}</option>`)
    .join("") + `<option value="${CUSTOM_LOCATION_ID}">Add a new market, venue or event</option>`;

  seasonSelect.innerHTML = marketData.seasons
    .map((season) => `<option value="${season.name}">${season.name}</option>`)
    .join("");

  function render() {
    const values = Object.fromEntries(new FormData(form).entries());
    const needs = checkedValues(form, "siteNeeds");
    const location = currentLocation(values);
    const season = marketData.seasons.find((item) => item.name === values.season) || marketData.seasons[0] || {};

    if (newLocationFields) {
      newLocationFields.hidden = values.location !== CUSTOM_LOCATION_ID;
    }

    const publicContact = clean(values.publicContact, values.publicPermission === "yes, name and public contact are ok" ? clean(values.followUpContact) : "to confirm");
    const publicListing = values.publicPermission === "keep private for now"
      ? "Keep private for now."
      : `${clean(values.displayName, "Name to confirm")} - ${clean(values.offerSummary, "Offer to confirm")} Contact: ${publicContact}.`;

    output.innerHTML = `
      <div class="mapper-result-head">
        <p class="eyebrow">Application summary</p>
        <h3>${escapeHtml(clean(values.displayName, "New applicant or idea"))}</h3>
        <p>${escapeHtml(values.intent)} for ${escapeHtml(location.name || "market to confirm")}.</p>
      </div>
      <div class="mini-grid">
        <div><strong>Type</strong><span>${escapeHtml(values.participantType)}</span></div>
        <div><strong>Category</strong><span>${escapeHtml(values.category)}</span></div>
        <div><strong>Market</strong><span>${escapeHtml(location.name || "to confirm")}</span></div>
        <div><strong>Date/window</strong><span>${escapeHtml(clean(values.availability, season.name || "to confirm"))}</span></div>
        <div><strong>Stall size</strong><span>${escapeHtml(values.stallSize)}</span></div>
        <div><strong>Insurance</strong><span>${escapeHtml(values.insurance)}</span></div>
      </div>
      <div class="record-sections">
        ${summaryCard("What they offer", values.offerSummary, "Offer details still needed.")}
        ${summaryCard("Photos, socials or proof links", values.proofLinks, "Product photos, social links or stall images still needed.")}
        ${summaryCard("Stall layout", values.stallLayout, "Layout details still needed.")}
        ${summaryCard("Onsite needs", needs.join(", "), "No needs selected yet.")}
        ${summaryCard("Setup and pack-down", values.setupNotes, "Setup details still needed.")}
        ${summaryCard("Food or safety checks", [values.foodCheck, values.foodSafetyNotes].filter(Boolean).join(". "), "Food and safety checks not relevant or still needed.")}
        ${summaryCard("Venue, organiser or local idea", values.venueIdea, "No venue or idea notes added.")}
        ${summaryCard("Visitor information", values.visitorInfo, "Visitor FAQ still needed.")}
        ${summaryCard("Review before publishing", values.reviewNotes, "No review notes added yet.")}
        ${summaryCard("Public listing draft", publicListing, "Nothing public yet.")}
      </div>
    `;

    record.value = `---
record_type: market_onboarding
intent: ${values.intent}
participant_type: ${values.participantType}
name_or_group: ${clean(values.displayName)}
private_follow_up_contact: ${clean(values.followUpContact)}
public_permission: ${values.publicPermission}
public_contact: ${publicContact}
preferred_market_or_event: ${location.name || "to confirm"}
area: ${location.village || "to confirm"}
date_or_availability: ${clean(values.availability, season.name || "to confirm")}
category: ${values.category}
stall_size: ${values.stallSize}
site_needs: ${needs.length ? needs.join(", ") : "to confirm"}
insurance: ${values.insurance}
food_check: ${values.foodCheck}
next_step: ${values.nextStep}
public_boundary: organiser review before promotion
---

# Market Onboarding Record

## Applicant

- Name, business or group: ${clean(values.displayName)}
- Applying to: ${values.intent}
- Participant type: ${values.participantType}
- Follow-up contact: ${clean(values.followUpContact)}
- Public listing permission: ${values.publicPermission}
- Public contact: ${publicContact}

## Preferred Market Or Event

- Market, venue or event: ${location.name || "to confirm"}
- Area: ${location.village || "to confirm"}
- Date, season or availability: ${clean(values.availability, season.name || "to confirm")}

## Stall Or Offer

${clean(values.offerSummary, "To confirm.")}

- Category: ${values.category}
- Stall size: ${values.stallSize}
- Site needs: ${needs.length ? needs.join(", ") : "to confirm"}

## Photos, Socials Or Proof Links

${clean(values.proofLinks, "To confirm.")}

## Stall Layout

${clean(values.stallLayout, "To confirm.")}

## Setup And Pack-down

${clean(values.setupNotes, "To confirm.")}

## Required Checks

- Public liability insurance: ${values.insurance}
- Food licence or food safety: ${values.foodCheck}
- Food, gas or electrical notes: ${clean(values.foodSafetyNotes, "Not relevant or to confirm.")}

## Venue, Organiser Or Local Idea

${clean(values.venueIdea, "Not relevant or to confirm.")}

## Visitor Information

${clean(values.visitorInfo, "To confirm.")}

## Review Before Publishing

${clean(values.reviewNotes, "To confirm.")}

## Public Listing Draft

${publicListing}

## Next Step

${values.nextStep}

## Private Follow-up Notes

${clean(values.followUpNotes, "To confirm.")}
`;

    const fileBase = slugify(`${clean(values.displayName, "market-onboarding")} ${clean(location.name, "")}`);
    record.dataset.filename = `${fileBase}.md`;
    if (recordInput) recordInput.value = record.value;
    if (recordFilenameInput) recordFilenameInput.value = record.dataset.filename;

  }

  form.addEventListener("input", render);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    render();
  });

  render();
}

function ensureHiddenFrame(frameName, title) {
  let frame = document.querySelector(`iframe[name="${frameName}"]`);
  if (!frame) {
    frame = document.createElement("iframe");
    frame.name = frameName;
    frame.title = title;
    frame.className = "hidden-frame";
    document.body.appendChild(frame);
  }
  return frame;
}

function initRecordActions() {
  document.querySelectorAll("[data-download-record]").forEach((button) => {
    button.addEventListener("click", () => {
      const record = document.querySelector("[data-record-output]");
      if (!record) return;

      const blob = new Blob([record.value || ""], { type: "text/markdown;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = record.dataset.filename || "market-onboarding-record.md";
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    });
  });
}

function initOnboardingSubmission() {
  const form = document.querySelector("[data-market-form]");
  const record = document.querySelector("[data-record-output]");
  const submitButton = document.querySelector("[data-submit-onboarding]");
  const status = document.querySelector("[data-onboarding-status]");
  if (!form || !submitButton) return;

  const setStatus = (message) => {
    if (status) status.textContent = message;
  };

  if (!ONBOARDING_SCRIPT_URL) {
    submitButton.disabled = true;
    setStatus("Onboarding endpoint pending. Deploy apps-script/onboarding-form.gs, then paste the Web App URL into ONBOARDING_SCRIPT_URL in app.js.");
    return;
  }

  const frameName = "onboarding-submit-frame";
  const frame = ensureHiddenFrame(frameName, "Onboarding form submission");
  let sent = false;

  frame.addEventListener("load", () => {
    if (!sent) return;
    sent = false;
    setStatus("Onboarding record sent. Thanks.");
  });

  form.action = ONBOARDING_SCRIPT_URL;
  form.method = "post";
  form.target = frameName;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (record && form.querySelector("[data-onboarding-record-input]")) {
      form.querySelector("[data-onboarding-record-input]").value = record.value || "";
    }
    sent = true;
    setStatus("Sending onboarding record...");
    HTMLFormElement.prototype.submit.call(form);
  });
}

function initContactForm() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  const status = form.querySelector("[data-contact-status]");
  const submitButton = form.querySelector("button[type='submit']");

  const setStatus = (message) => {
    if (status) status.textContent = message;
  };

  if (!CONTACT_SCRIPT_URL) {
    if (submitButton) submitButton.disabled = true;
    setStatus("Contact form endpoint pending. Add the deployed Apps Script Web App URL in app.js to enable one-click sending.");
    return;
  }

  const frameName = "contact-submit-frame";
  const frame = ensureHiddenFrame(frameName, "Contact form submission");

  let sent = false;
  frame.addEventListener("load", () => {
    if (!sent) return;
    sent = false;
    form.reset();
    setStatus("Message sent. Thanks.");
  });

  form.action = CONTACT_SCRIPT_URL;
  form.target = frameName;

  form.addEventListener("submit", () => {
    sent = true;
    setStatus("Sending...");
  });
}

initMarketForm();
initRecordActions();
initOnboardingSubmission();
initContactForm();
