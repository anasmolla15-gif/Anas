/* =========================================================================
   script.js — renders the site from data.js and powers the interactions.
   You normally don't need to touch this file.
   ========================================================================= */
(function () {
  "use strict";

  const D = window.SITE_DATA || { experience: [], publications: [], articles: [], socials: [] };
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const el = (tag, cls) => { const n = document.createElement(tag); if (cls) n.className = cls; return n; };

  /* ---------- Theme (persisted) ---------- */
  const root = document.documentElement;
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) root.setAttribute("data-theme", savedTheme);
  else if (window.matchMedia("(prefers-color-scheme: light)").matches) root.setAttribute("data-theme", "light");

  $("#themeToggle").addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });

  /* ---------- Mobile menu ---------- */
  const burger = $("#navBurger");
  const navLinks = $("#navLinks");
  burger.addEventListener("click", () => {
    const open = navLinks.classList.toggle("is-open");
    burger.classList.toggle("is-open", open);
  });
  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") { navLinks.classList.remove("is-open"); burger.classList.remove("is-open"); }
  });

  /* ---------- Shrink nav on scroll ---------- */
  const nav = $("#nav");
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 24);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Render: Experience ---------- */
  const timeline = $("#timeline");
  (D.experience || []).forEach((job) => {
    const li = el("li", "timeline__item reveal");
    const points = (job.points || []).map((p) => `<li>${esc(p)}</li>`).join("");
    li.innerHTML = `
      <div class="timeline__dot${job.current ? " is-current" : ""}"></div>
      <div class="timeline__card">
        <div class="timeline__top">
          <h3 class="timeline__role">${esc(job.role)}</h3>
          ${job.current ? '<span class="badge">Current</span>' : ""}
        </div>
        <p class="timeline__org">${esc(job.org)}${job.location ? ` · <span>${esc(job.location)}</span>` : ""}</p>
        <p class="timeline__period">${esc(job.period)}</p>
        ${points ? `<ul class="timeline__points">${points}</ul>` : ""}
      </div>`;
    timeline.appendChild(li);
  });

  /* ---------- Render: Publications ---------- */
  const pubGrid = $("#pubGrid");
  (D.publications || []).forEach((p) => {
    const card = el(p.url ? "a" : "div", "pub-card reveal");
    if (p.url) { card.href = p.url; card.target = "_blank"; card.rel = "noopener"; }
    card.innerHTML = `
      <span class="pub-card__mark">${esc(initials(p.name))}</span>
      <span class="pub-card__name">${esc(p.name)}</span>
      <span class="pub-card__role">${esc(p.role || "")}</span>
      ${p.note ? `<span class="pub-card__note">${esc(p.note)}</span>` : ""}`;
    pubGrid.appendChild(card);
  });

  /* ---------- Render: Articles + filtering/search ---------- */
  const workGrid = $("#workGrid");
  const workEmpty = $("#workEmpty");
  const filtersBox = $("#filters");
  const searchInput = $("#searchInput");
  const articles = D.articles || [];

  const tags = ["All", ...Array.from(new Set(articles.map((a) => a.tag).filter(Boolean)))];
  let activeTag = "All";

  tags.forEach((t) => {
    const b = el("button", "filter" + (t === "All" ? " is-active" : ""));
    b.textContent = t;
    b.addEventListener("click", () => {
      activeTag = t;
      filtersBox.querySelectorAll(".filter").forEach((x) => x.classList.remove("is-active"));
      b.classList.add("is-active");
      renderArticles();
    });
    filtersBox.appendChild(b);
  });

  function renderArticles() {
    const q = (searchInput.value || "").trim().toLowerCase();
    const list = articles.filter((a) => {
      const tagOk = activeTag === "All" || a.tag === activeTag;
      const qOk = !q || (a.title + " " + (a.summary || "") + " " + (a.outlet || "")).toLowerCase().includes(q);
      return tagOk && qOk;
    });

    workGrid.innerHTML = "";
    workEmpty.hidden = list.length !== 0;

    list.forEach((a, i) => {
      const card = el(a.url ? "a" : "article", "work-card reveal is-in");
      card.style.transitionDelay = `${Math.min(i * 40, 240)}ms`;
      if (a.url) { card.href = a.url; card.target = "_blank"; card.rel = "noopener"; }
      card.innerHTML = `
        <div class="work-card__meta">
          ${a.tag ? `<span class="work-card__tag">${esc(a.tag)}</span>` : ""}
          <span class="work-card__date">${esc(a.date || "")}</span>
        </div>
        <h3 class="work-card__title">${esc(a.title)}</h3>
        ${a.summary ? `<p class="work-card__summary">${esc(a.summary)}</p>` : ""}
        <div class="work-card__foot">
          <span class="work-card__outlet">${esc(a.outlet || "")}</span>
          ${a.url ? '<span class="work-card__arrow">Read ↗</span>' : '<span class="work-card__arrow work-card__arrow--muted">Link soon</span>'}
        </div>`;
      workGrid.appendChild(card);
    });
  }
  searchInput.addEventListener("input", renderArticles);
  renderArticles();

  /* ---------- Render: Socials ---------- */
  const socials = $("#socials");
  (D.socials || []).forEach((s) => {
    const a = el("a", "social");
    a.href = s.url;
    if (!s.url.startsWith("mailto:")) { a.target = "_blank"; a.rel = "noopener"; }
    a.textContent = s.label;
    socials.appendChild(a);
  });

  /* ---------- Stats ---------- */
  setCount($("#articleCount"), articles.length);
  setCount($("#pubCount"), (D.publications || []).length);
  $("#year").textContent = new Date().getFullYear();

  /* ---------- Print CV ---------- */
  $("#printResume").addEventListener("click", (e) => { e.preventDefault(); window.print(); });

  /* ---------- Reveal on scroll ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((n) => io.observe(n));

  /* ---------- Smooth count-up for the year/numbers ---------- */
  function setCount(node, target) {
    if (!node) return;
    if (target === 0) { node.textContent = "0"; return; }
    let cur = 0;
    const step = Math.max(1, Math.round(target / 30));
    const tick = () => {
      cur = Math.min(target, cur + step);
      node.textContent = cur;
      if (cur < target) requestAnimationFrame(tick);
    };
    tick();
  }

  /* ---------- Helpers ---------- */
  function esc(str) {
    return String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
  function initials(name) {
    return String(name).split(/\s+/).map((w) => w[0]).join("").slice(0, 3).toUpperCase();
  }
})();
