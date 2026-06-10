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
      logo: "assets/ndtv-profit.png",
      period: "Aug 2025 — Present",
      current: true,
      location: "India",
      points: [
        "Cover equity markets, listed companies, earnings and major corporate deals.",
        "Report on the IT sector's AI pivot, Big Tech and big-ticket M&A.",
        "Write timely, accurate copy under daily newsroom deadlines."
      ]
    },
    {
      role: "TV News Producer",
      org: "NDTV Profit",
      logo: "assets/ndtv-profit.png",
      period: "Jun 2023 — Aug 2025",
      current: false,
      location: "India",
      points: [
        "Produced flagship business shows — Know Your Company, The Mutual Fund Show, Your Money Matters and Talking Point.",
        "Built rundowns, scripts and on-screen graphics, and coordinated guests and live segments.",
        "Turned market and corporate developments into clear, broadcast-ready television."
      ]
    }
  ],

  /* -----------------------------------------------------------------------
     EDUCATION
  ----------------------------------------------------------------------- */
  education: [
    {
      school: "Indian Institute of Journalism & New Media (IIJNM)",
      program: "Postgraduate Diploma in Journalism",
      period: "",            // add your years, e.g. "2021 — 2022"
      note: "Bengaluru"
    }
  ],

  /* -----------------------------------------------------------------------
     SHOWS PRODUCED — each gets a generated logo. `accent` sets its colour,
     `icon` picks the glyph (building | pie | rupee | chat).
  ----------------------------------------------------------------------- */
  shows: [
    { name: "Know Your Company",   abbr: "KYC", icon: "building", accent: "#7a4dff", desc: "Deep-dives into the businesses behind the tickers." },
    { name: "The Mutual Fund Show", abbr: "MF",  icon: "pie",      accent: "#e23e6d", desc: "Making sense of mutual funds and investing." },
    { name: "Your Money Matters",  abbr: "₹",   icon: "rupee",    accent: "#0fa98f", desc: "Personal finance, decoded." },
    { name: "Talking Point",       abbr: "TP",  icon: "chat",     accent: "#3563e9", desc: "The day's big market conversation." }
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
      url: "https://www.ndtvprofit.com/authors/anas-ali-6606"
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
      title: "What's 'SaaSpocalypse'? Why Indian IT Stocks Crashed After Anthropic's Mega Release — A Story In Infographics",
      outlet: "NDTV Profit",
      tag: "IT",
      date: "2025",
      url: "https://www.ndtvprofit.com/technology/whats-saaspocalypse-why-indian-it-stocks-crashed-after-anthropics-mega-release-a-story-in-infographics-10944734",
      summary: "A visual, infographic-led breakdown of the 'SaaSpocalypse' — why Indian IT stocks tumbled in the wake of Anthropic's major model release."
    },
    {
      title: "From $2 Trillion To Near $4 Trillion: Inside Google's AI-Led Glow Up In Six Months",
      outlet: "NDTV Profit",
      tag: "Tech",
      date: "2025",
      url: "https://www.ndtvprofit.com/technology/gemini-30-boost-from-2-trillion-to-almost-4-trillioninside-googles-ai-led-glow-up-in-six-months-9696986",
      summary: "How Google's market value climbed from $2 trillion toward $4 trillion in six months, powered by its AI push and Gemini 3.0."
    },
    {
      title: "Breaking The Stranglehold? Google Aims To End Nvidia's Chip Dominance",
      outlet: "NDTV Profit",
      tag: "Tech",
      date: "2025",
      url: "https://www.ndtvprofit.com/technology/google-aims-to-end-nvidea-dominance-in-chip-making-race-with-tpus-9703937",
      summary: "Google's bid to challenge Nvidia's grip on AI chips with its own TPUs — and what it could mean for the chip-making race."
    },
    {
      title: "Rupee At 90: How India's Currency Has Weathered 50 Years Of Global And Domestic Storms",
      outlet: "NDTV Profit",
      tag: "Markets",
      date: "2025",
      url: "https://www.ndtvprofit.com/markets/rupee-at-90-how-indias-currency-has-weathered-50-years-of-global-and-domestic-storms-9742985",
      summary: "Marking the rupee at 90 to the dollar: how India's currency has weathered five decades of global and domestic shocks."
    }
  ],

  /* -----------------------------------------------------------------------
     SOCIALS — contact links. Remove any you don't use.
  ----------------------------------------------------------------------- */
  socials: [
    { label: "Email", url: "mailto:anasmolla15@gmail.com" },
    { label: "NDTV Profit", url: "https://www.ndtvprofit.com/authors/anas-ali-6606" }
    // ,{ label: "X / Twitter", url: "https://x.com/yourhandle" }
    // ,{ label: "LinkedIn", url: "https://linkedin.com/in/yourhandle" }
  ]
};
