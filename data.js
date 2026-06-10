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
      role: "Markets Writer",
      org: "NDTV Profit",
      period: "Jun 2023 — Present",
      current: true,
      location: "India",
      points: [
        "Cover equity markets, listed companies, earnings and major corporate deals.",
        "Report on the IT sector's AI pivot and big-ticket M&A across banking and finance.",
        "Write timely, accurate copy under daily newsroom deadlines."
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
      role: "Markets Writer",
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
  // NOTE: NDTV Profit blocks automated crawlers, so these were identified
  // from public references — add the exact article URLs in the `url` fields
  // (open the piece on ndtvprofit.com and copy the link).
  articles: [
    {
      title: "TCS spent ~₹6,500 crore on acquisitions and saw goodwill surge — will the AI bets pay off?",
      outlet: "NDTV Profit",
      tag: "IT",
      date: "2026",
      url: "",
      summary: "A deep-dive into TCS's FY26 acquisition spree and the sharp rise in goodwill, and whether the company's AI investments can generate returns."
    },
    {
      title: "Indian IT giants are selling AI like there's no tomorrow",
      outlet: "NDTV Profit",
      tag: "IT",
      date: "2026",
      url: "",
      summary: "How TCS, Infosys and HCLTech are repositioning their business around artificial intelligence — and what the strategic pivot means."
    },
    {
      title: "The biggest cross-border deals in BFSI in 2025",
      outlet: "NDTV Profit",
      tag: "Banking",
      date: "2025",
      url: "",
      summary: "A look at the year's landmark banking and financial-services deals, including MUFG–Shriram Finance and RBL Bank–Emirates NBD."
    },
    {
      title: "US–India trade deal: heavy-duty motorcycles set to enter the Indian market",
      outlet: "NDTV Profit",
      tag: "Trade",
      date: "2025",
      url: "",
      summary: "Reporting on the trade-deal provisions opening India's market to heavy-duty motorcycles. Co-bylined with Rishabh Bhatnagar."
    },
    {
      title: "Enforcement action targets assets linked to Reliance Infrastructure",
      outlet: "NDTV Profit",
      tag: "Markets",
      date: "2025",
      url: "",
      summary: "Coverage of enforcement proceedings and the assets under scrutiny. Co-bylined."
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
