/* =========================================================================
   data.js — This is the ONLY file you need to edit to update the site.
   No coding knowledge needed: just follow the patterns below.
   ========================================================================= */

window.SITE_DATA = {

  /* -----------------------------------------------------------------------
     EXPERIENCE — your jobs, newest first.
     Copy a { ... } block to add another role.
  ----------------------------------------------------------------------- */
  experience: [
    {
      role: "Business & Finance Journalist",
      org: "NDTV Profit",
      period: "Jun 2023 — Present",
      current: true,
      location: "India",
      points: [
        "Report on markets, listed companies, earnings and the broader economy.",
        "Write timely, accurate copy under daily newsroom deadlines.",
        "Track corporate announcements, policy moves and their market impact."
      ]
    }
    // ,{
    //   role: "Your previous role",
    //   org: "Previous publication",
    //   period: "Year — Year",
    //   current: false,
    //   location: "City",
    //   points: ["What you did there.", "Another highlight."]
    // }
  ],

  /* -----------------------------------------------------------------------
     PUBLICATIONS — outlets you've written for.
     `url` is optional (use "" if none).
  ----------------------------------------------------------------------- */
  publications: [
    {
      name: "NDTV Profit",
      role: "Staff Journalist",
      note: "Business & financial news",
      url: "https://www.ndtvprofit.com"
    }
    // ,{ name: "Outlet name", role: "Contributor", note: "What you covered", url: "" }
  ],

  /* -----------------------------------------------------------------------
     ARTICLES — your portfolio. Newest first.
     - tag: short topic used for the filter buttons (e.g. "Markets", "Economy").
     - url: link to the published piece ("" disables the link).
     - date: any readable date string.
     - summary: 1–2 lines (optional).
  ----------------------------------------------------------------------- */
  articles: [
    {
      title: "Add your first story here",
      outlet: "NDTV Profit",
      tag: "Markets",
      date: "2026",
      url: "",
      summary: "Replace this placeholder with a real headline, link and a one-line summary. Duplicate this block for each story you want to feature."
    },
    {
      title: "Example: a company earnings deep-dive",
      outlet: "NDTV Profit",
      tag: "Companies",
      date: "2025",
      url: "",
      summary: "Use the `tag` field to group stories — the filter buttons are generated automatically from whatever tags you use here."
    },
    {
      title: "Example: an economy explainer",
      outlet: "NDTV Profit",
      tag: "Economy",
      date: "2024",
      url: "",
      summary: "Pieces appear in the order you list them, so keep your best or newest work near the top."
    }
  ],

  /* -----------------------------------------------------------------------
     SOCIALS — contact links. Remove any you don't use.
  ----------------------------------------------------------------------- */
  socials: [
    { label: "Email", url: "mailto:anasmolla15@gmail.com" },
    { label: "NDTV Profit", url: "https://www.ndtvprofit.com" }
    // ,{ label: "X / Twitter", url: "https://x.com/yourhandle" }
    // ,{ label: "LinkedIn", url: "https://linkedin.com/in/yourhandle" }
  ]
};
