const marketData = window.MARKET_DATA || { locations: [], seasons: [], sourceLinks: {}, universalQuestions: {} };

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

function sourceList(sourceIds = []) {
  const links = sourceIds
    .map((id) => marketData.sourceLinks[id])
    .filter(Boolean)
    .map((source) => `<a href="${source.url}" target="_blank" rel="noopener noreferrer">${source.label}</a>`);

  return links.length ? `<div class="source-row">${links.join("")}</div>` : "";
}

function locationCard(location, compact = false) {
  const tags = location.tags.map((tag) => `<span>${tag.replaceAll("-", " ")}</span>`).join("");
  const questions = location.questions
    .slice(0, compact ? 2 : 4)
    .map((question) => `<li>${question}</li>`)
    .join("");

  return `
    <article class="location-card" data-village="${location.village}" data-tags="${location.tags.join(" ")}">
      <div class="location-card-head">
        <p class="eyebrow">${location.village}</p>
        <h3>${location.name}</h3>
      </div>
      <p>${location.currentSignal}</p>
      <p>${location.conceptUse}</p>
      <div class="tag-list">${tags}</div>
      <div class="mini-grid">
        <div>
          <strong>Projection fit</strong>
          <span>${location.projectionFit}</span>
        </div>
        <div>
          <strong>Transport fit</strong>
          <span>${location.transportFit}</span>
        </div>
      </div>
      <details ${compact ? "" : "open"}>
        <summary>Questions to ask first</summary>
        <ul>${questions}</ul>
      </details>
      ${sourceList(location.sourceIds)}
    </article>
  `;
}

function renderLocationGrids() {
  document.querySelectorAll("[data-location-grid]").forEach((grid) => {
    const limit = Number(grid.getAttribute("data-limit") || marketData.locations.length);
    const compact = grid.hasAttribute("data-compact");
    const locations = marketData.locations.slice(0, limit);
    grid.innerHTML = locations.map((location) => locationCard(location, compact)).join("");
  });
}

function initFilters() {
  const filterHost = document.querySelector("[data-location-filters]");
  const grid = document.querySelector("[data-location-grid]");
  if (!filterHost || !grid) return;

  const villages = ["All", ...new Set(marketData.locations.map((location) => location.village))];
  filterHost.innerHTML = villages
    .map((village, index) => `<button type="button" class="filter-button ${index === 0 ? "is-active" : ""}" data-filter="${village}">${village}</button>`)
    .join("");

  filterHost.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    const filter = button.getAttribute("data-filter");
    filterHost.querySelectorAll(".filter-button").forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });
    grid.querySelectorAll(".location-card").forEach((card) => {
      const show = filter === "All" || card.getAttribute("data-village") === filter;
      card.hidden = !show;
    });
  });
}

function renderSeasonGrid() {
  const grid = document.querySelector("[data-season-grid]");
  if (!grid) return;

  grid.innerHTML = marketData.seasons
    .map((season) => `
      <article class="question-card">
        <p class="eyebrow">Timing</p>
        <h3>${season.name}</h3>
        <p>${season.note}</p>
        <ul>
          ${season.questions.map((question) => `<li>${question}</li>`).join("")}
        </ul>
      </article>
    `)
    .join("");
}

function initMapper() {
  const form = document.querySelector("[data-mapper-form]");
  const output = document.querySelector("[data-mapper-output]");
  const notice = document.querySelector("[data-notice-output]");
  if (!form || !output || !notice) return;

  const locationSelect = form.querySelector("[name='location']");
  const seasonSelect = form.querySelector("[name='season']");

  locationSelect.innerHTML = marketData.locations
    .map((location) => `<option value="${location.id}">${location.name}</option>`)
    .join("");

  seasonSelect.innerHTML = marketData.seasons
    .map((season) => `<option value="${season.name}">${season.name}</option>`)
    .join("");

  function renderMapper() {
    const values = Object.fromEntries(new FormData(form).entries());
    const location = marketData.locations.find((item) => item.id === values.location) || marketData.locations[0];
    const season = marketData.seasons.find((item) => item.name === values.season) || marketData.seasons[0];

    const sharedTableQuestions = values.food === "yes" || values.marketShape.includes("shared")
      ? marketData.universalQuestions.sharedTable.slice(0, 2)
      : [];

    const selectedQuestions = [
      ...location.questions.slice(0, 3),
      ...season.questions.slice(0, 2),
      ...sharedTableQuestions,
      marketData.universalQuestions.transport[1],
      marketData.universalQuestions.noticeboard[1]
    ];

    const attention = [];
    if (values.projection === "unknown") attention.push("Projection is unknown. Start with surface, permission, brightness and power.");
    if (values.transport === "late-risk") attention.push("Transport has a late-return risk. Map last boats, buses and safe movement before promotion.");
    if (values.localConsent === "pending-contact") attention.push("Local contact is pending. Keep the next step as host review and question gathering.");
    if (values.food === "yes") attention.push("Food stalls need food-safety and host-compliance questions before public copy.");
    if (attention.length === 0) attention.push("The idea has a starter shape, but it still needs host confirmation and source checks.");

    output.innerHTML = `
      <div class="mapper-result-head">
        <p class="eyebrow">Draft question pack</p>
        <h3>${location.name}</h3>
        <p>${season.name}: ${season.note}</p>
      </div>
      <div class="mini-grid">
        <div><strong>Contributor role</strong><span>${values.contributorRole}</span></div>
        <div><strong>Market shape</strong><span>${values.marketShape}</span></div>
        <div><strong>Projection status</strong><span>${values.projection}</span></div>
        <div><strong>Transport signal</strong><span>${values.transport}</span></div>
        <div><strong>Consent status</strong><span>${values.localConsent}</span></div>
      </div>
      <h4>Ask next</h4>
      <ol>${selectedQuestions.map((question) => `<li>${question}</li>`).join("")}</ol>
      <h4>Care notes</h4>
      <ul>${attention.map((item) => `<li>${item}</li>`).join("")}</ul>
    `;

    const sharedTableLine = values.food === "yes" || values.marketShape.includes("shared")
      ? "shared_table_layer: possible, requires food safety and place mapping"
      : "shared_table_layer: optional layer pending";

    const noticeText = `---
title: Possible night market test - ${location.name}
status: question gathering only
location: ${location.name}
village: ${location.village}
season_window: ${season.name}
contributor_role: ${values.contributorRole}
market_shape: ${values.marketShape}
projection_status: ${values.projection}
transport_status: ${values.transport}
${sharedTableLine}
public_boundary: host review and source checking required
simulation_seed: transport, projection, stall mix, crowd comfort, weather and last-return questions
news_network_fit: possible gig guide, weekend wrap or ferry-screen update after host confirmation
---

## Public draft

A possible Straddie night market or twilight stall pattern is being mapped for ${location.name}. The draft contributor role is ${values.contributorRole}. The current task is to ask good questions about venue fit, transport, projection, stallholder interest, Shared Table fit, local benefit and cultural care.

## Questions open now

${selectedQuestions.map((question) => `- ${question}`).join("\n")}

## Verification needed

- Host or organiser review
- Stallholder contact
- Ferry and bus timing
- Projection safety
- Shared Table food and place checks, if used
- Simulation assumptions for any future planning model
- News-network wording after host confirmation
- Public notice expiry date
`;

    notice.value = noticeText;
  }

  form.addEventListener("input", renderMapper);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    renderMapper();
  });

  renderMapper();
}

function initCopyButtons() {
  document.querySelectorAll("[data-copy-target]").forEach((button) => {
    button.addEventListener("click", async () => {
      const selector = button.getAttribute("data-copy-target");
      const target = selector ? document.querySelector(selector) : null;
      if (!target) return;

      try {
        await navigator.clipboard.writeText(target.value || target.textContent || "");
        button.textContent = "Copied";
      } catch {
        button.textContent = "Select text to copy";
      }
    });
  });
}

renderLocationGrids();
renderSeasonGrid();
initFilters();
initMapper();
initCopyButtons();

