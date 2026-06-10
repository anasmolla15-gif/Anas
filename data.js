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
  // Tip: `tag` drives the filter buttons. Add the article URL to make a
  // card clickable; leave url: "" and it shows "Link soon".
  articles: [
    {
      title: "TCS Has Invested For Growth In FY26. Will It Pay Off In FY27 And Beyond?",
      outlet: "NDTV Profit",
      tag: "IT",
      date: "2026",
      url: "https://www.ndtvprofit.com/business/tcs-has-invested-growth-in-fy26-will-it-pay-off-in-fy27-and-beyond-11334208",
      summary: "A deep-dive into TCS's heavy spending for growth in FY26 — and whether those investments will translate into returns in FY27 and beyond."
    },
    {
      title: "India's Surveillance Market: China Out, CP Plus In — How Aditya Infotech Has Claimed The CCTV Crown",
      outlet: "NDTV Profit",
      tag: "Business",
      date: "2026",
      url: "https://www.ndtvprofit.com/business/indias-surveillance-market-china-out-cp-plus-in-how-aditya-infotech-has-claimed-the-cctv-crown-11563092",
      summary: "How Aditya Infotech's CP Plus captured India's CCTV market as Chinese players were squeezed out of the surveillance business."
    },
    {
      title: "Why Talking To A Human In India Now Feels Impossible",
      outlet: "NDTV Profit",
      tag: "Tech",
      date: "2025",
      url: "https://www.ndtvprofit.com/technology/why-talking-to-a-human-in-india-now-feels-impossible-due-to-ai-ivr-customer-care-9986455",
      summary: "On the rise of AI-driven IVR and automated customer care — and why reaching a real person has become so hard."
    },
    {
      title: "AI Is Hurting Your Next PC Upgrade As RAM Prices Skyrocket 3x In Three Months",
      outlet: "NDTV Profit",
      tag: "Tech",
      date: "2025",
      url: "https://www.ndtvprofit.com/technology/ai-is-hurting-your-next-pc-upgrade-as-ram-prices-skyrocket-3x-in-three-months-9668496",
      summary: "How surging AI demand has sent RAM prices up threefold in three months, making your next PC upgrade much costlier."
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
