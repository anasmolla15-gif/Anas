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
          ${job.logo ? `<span class="timeline__logo"><img src="${esc(job.logo)}" alt="${esc(job.org)} logo" loading="lazy" /></span>` : ""}
        </div>
        <p class="timeline__org">${esc(job.org)}${job.location ? ` · <span>${esc(job.location)}</span>` : ""}</p>
        <p class="timeline__period">${esc(job.period)}</p>
        ${points ? `<ul class="timeline__points">${points}</ul>` : ""}
      </div>`;
    timeline.appendChild(li);
  });

  /* ---------- Render: Education ---------- */
  const eduList = $("#eduList");
  if (eduList) {
    (D.education || []).forEach((e) => {
      const item = el("div", "edu__item");
      item.innerHTML = `
        <span class="edu__mark">🎓</span>
        <div>
          <h4 class="edu__school">${esc(e.school)}</h4>
          ${e.program ? `<p class="edu__program">${esc(e.program)}</p>` : ""}
          <p class="edu__meta">${[e.note, e.period].filter(Boolean).map(esc).join(" · ")}</p>
        </div>`;
      eduList.appendChild(item);
    });
  }

  /* ---------- Render: Shows (with generated logos) ---------- */
  const SHOW_ICONS = {
    building: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16"/><path d="M19 21V11a1 1 0 0 0-1-1h-3"/><path d="M8 7h2M8 11h2M8 15h2"/></svg>',
    pie: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a9 9 0 1 0 9 9"/><path d="M12 3v9h9"/></svg>',
    rupee: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 5h10M7 9h10M14 5c2 0 3 1.5 3 3.5S15.5 12 13 12H8l7 7"/></svg>',
    chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-11.5 7.2L3 21l1.8-6.5A8 8 0 1 1 21 12Z"/><path d="M8 11h8M8 14h5"/></svg>'
  };
  const showGrid = $("#showGrid");
  if (showGrid) {
    (D.shows || []).forEach((s) => {
      const card = el("article", "show-card reveal");
      card.style.setProperty("--show", s.accent || "var(--accent)");
      card.innerHTML = `
        <div class="show-card__badge">
          <span class="show-card__mark">${SHOW_ICONS[s.icon] || ""}</span>
          <span class="show-card__abbr">${esc(s.abbr || "")}</span>
        </div>
        <h3 class="show-card__name">${esc(s.name)}</h3>
        ${s.desc ? `<p class="show-card__desc">${esc(s.desc)}</p>` : ""}
        <span class="show-card__role">Producer · NDTV Profit</span>`;
      showGrid.appendChild(card);
    });
  }

  /* ---------- Render: Publications ---------- */
  const pubGrid = $("#pubGrid");
  (D.publications || []).forEach((p) => {
    const card = el(p.url ? "a" : "div", "pub-card reveal");
    if (p.url) { card.href = p.url; card.target = "_blank"; card.rel = "noopener"; }
    card.innerHTML = `
      ${p.logo
        ? `<span class="pub-card__mark pub-card__mark--logo"><img src="${esc(p.logo)}" alt="${esc(p.name)} logo" loading="lazy" /></span>`
        : `<span class="pub-card__mark">${esc(initials(p.name))}</span>`}
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

  /* ---------- Background: AI neural net + market chart ---------- */
  initNeuralBackground();

  function initNeuralBackground() {
    const canvas = document.getElementById("bgCanvas");
    if (!canvas || !canvas.getContext) return;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w, h, dpr, nodes = [], raf = 0;

    const accentRGB = () => {
      const hex = (getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#7a4dff").replace("#", "");
      const n = hex.length === 3 ? hex.split("").map((c) => c + c).join("") : hex;
      const i = parseInt(n, 16);
      return [(i >> 16) & 255, (i >> 8) & 255, i & 255];
    };

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.width = Math.floor(window.innerWidth * dpr);
      h = canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      const count = Math.min(94, Math.max(26, Math.floor((window.innerWidth * window.innerHeight) / 15000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.28 * dpr, vy: (Math.random() - 0.5) * 0.28 * dpr
      }));
    }

    function frame() {
      const [r, g, b] = accentRGB();
      const maxD = 132 * dpr;
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < nodes.length; i++) {
        const p = nodes[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        for (let j = i + 1; j < nodes.length; j++) {
          const q = nodes[j], d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < maxD) {
            ctx.strokeStyle = `rgba(${r},${g},${b},${0.2 * (1 - d / maxD)})`;
            ctx.lineWidth = dpr;
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
          }
        }
        ctx.fillStyle = `rgba(${r},${g},${b},0.65)`;
        ctx.beginPath(); ctx.arc(p.x, p.y, 1.6 * dpr, 0, Math.PI * 2); ctx.fill();
      }
      if (!reduce) raf = requestAnimationFrame(frame);
    }

    resize();
    frame();
    let t;
    window.addEventListener("resize", () => {
      clearTimeout(t);
      t = setTimeout(() => { cancelAnimationFrame(raf); resize(); frame(); }, 200);
    }, { passive: true });
  }

  /* ---------- Helpers ---------- */
  function esc(str) {
    return String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
  function initials(name) {
    return String(name).split(/\s+/).map((w) => w[0]).join("").slice(0, 3).toUpperCase();
  }
})();
