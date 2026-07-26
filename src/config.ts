export const site = {
  name: "Airnodes Club",
  url: "https://airnodes.club",
  // Set PUBLIC_AIRNODE_AFFILIATE_URL to the issued World Mobile referral URL.
  // Until then, every commercial CTA safely falls back to the official AirNodes page.
  affiliateUrl:
    import.meta.env.PUBLIC_AIRNODE_AFFILIATE_URL ??
    "https://worldmobile.io/airnodes",
  reviewDate: "2026-07-26",
  reviewDateLabel: "26 July 2026",
} as const;

export const sources = {
  airnodes: "https://worldmobile.io/airnodes",
  ember: "https://worldmobile.io/airnodes/embernode",
  frontier:
    "https://worldmobile.io/blog/post/own-the-next-market-introducing-frontier-airnodes-in-the-philippines",
  frontierSocial:
    "https://x.com/WorldMobileTeam/status/2080699168775962842",
  platform:
    "https://worldmobile.io/blog/post/built-for-builders-engineered-for-scale-the-new-airnode-platform-is-live",
  scale:
    "https://worldmobile.io/blog/post/world-mobile-hits-unprecedented-scale",
  affiliate:
    "https://worldmobile.io/blog/post/the-airnode-affiliate-program-opens-to-hex-operators",
  hexy: "https://hexynodes.com/airnodes/",
  alliance: "https://worldmobilealliance.io/airnodes/",
  legacy:
    "https://worldmobile.zohodesk.com/portal/en/kb/network-builders/airnodes-infrastructure",
} as const;

export const products = [
  {
    name: "EmberNode",
    status: "Available in drops",
    layer: "Pakistan distribution",
    price: "US$165 each",
    detail:
      "A rugged fibre gateway that moves capacity from an ISP backbone to downstream network infrastructure. It does not connect end users directly.",
    terms: "1–10 $165 · 11–149 $150 · 150–500 $145 each",
    source: sources.ember,
    tone: "cyan",
  },
  {
    name: "Frontier",
    status: "Drop One · 29 Jul 2026",
    layer: "Philippines business edge",
    price: "US$585–$1,950",
    detail:
      "Customer-edge Wi‑Fi matched to contracted businesses in General Luna, Siargao. At 1–10 unit pricing: Core is $585 / $17.55 monthly base, Plus $750 / $22.50, Pro $1,000 / $30, and Max $1,950 / $58.50. CWC handles local installation and operations.",
    terms: "Core · Plus · Pro · Max · higher-quantity pricing published",
    source: sources.frontier,
    tone: "violet",
  },
  {
    name: "Spark",
    status: "Partner exclusive",
    layer: "Pakistan Wi‑Fi edge",
    price: "Partner offer",
    detail:
      "A compact Wi‑Fi AirNode for last-mile access in Pakistan, designed to mesh with nearby units and serve users at the network edge.",
    terms: "Current availability is through selected partners",
    source: sources.airnodes,
    tone: "cyan",
  },
  {
    name: "Portal",
    status: "Availability alerts",
    layer: "USA wide-area coverage",
    price: "From US$9,000",
    detail:
      "A high-capacity, wide-area endpoint designed to extend coverage in the United States.",
    terms: "Register interest for current availability",
    source: sources.airnodes,
    tone: "violet",
  },
  {
    name: "Titan",
    status: "Contact sales",
    layer: "Enterprise backbone",
    price: "Bespoke",
    detail:
      "Large-scale infrastructure for enterprise, backbone and network-overwatch roles.",
    terms: "Commercial terms are handled by sales",
    source: sources.airnodes,
    tone: "cyan",
  },
  {
    name: "Pulse",
    status: "Coming soon",
    layer: "Energy infrastructure",
    price: "Not announced",
    detail:
      "An announced infrastructure category intended to bring energy into the broader AirNode network model.",
    terms: "No public pricing or reward terms yet",
    source: sources.airnodes,
    tone: "violet",
  },
] as const;
