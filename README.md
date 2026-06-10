# Anas Ali — Portfolio & CV

An interactive personal website for **Anas Ali**, business & finance journalist at
**NDTV Profit** (since June 2023). It doubles as a CV and a living archive of
published work.

It's a single static site — just HTML, CSS and JavaScript. No build step, no
dependencies. Open it, edit one file, done.

## Files

| File | What it is |
|------|------------|
| `index.html` | Page structure. You rarely need to touch this. |
| **`data.js`** | **The only file you edit** — your jobs, publications and articles. |
| `script.js` | Renders the site from `data.js` and powers filtering/search. |
| `styles.css` | All the styling (dark/light theme, layout, animations). |

## How to update your site

Open **`data.js`** and edit the lists. Each section has comments showing the
pattern. To add a story, copy an existing `{ ... }` block inside `articles` and
change the text:

```js
{
  title: "Headline of your story",
  outlet: "NDTV Profit",
  tag: "Markets",          // becomes a filter button automatically
  date: "2026",
  url: "https://...",      // link to the published piece ("" = no link)
  summary: "One line about the piece."
}
```

The topic **filter buttons**, the **counts** in the hero, and everything else
update automatically from `data.js`.

## Viewing it locally

Just double-click `index.html`, **or** run a tiny local server:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Publishing for free (GitHub Pages)

1. Push this folder to a GitHub repo.
2. Repo **Settings → Pages → Build from branch** → pick your branch, root folder.
3. Your site goes live at `https://<username>.github.io/<repo>/`.

## Features

- 🌗 Dark / light theme toggle (remembers your choice)
- 🔎 Searchable, filterable article archive
- 📱 Fully responsive with a mobile menu
- 🖨️ "Save / print CV" button (uses the browser's print-to-PDF)
- ⚡ No frameworks, loads instantly

---

*Built as a living portfolio — keep adding your work to `data.js`.*
