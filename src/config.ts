export const site = {
  name: "Airnodes Club",
  url: "https://airnodes.club",
  // The environment variable allows controlled campaign overrides at build time.
  affiliateUrl:
    import.meta.env.PUBLIC_AIRNODE_AFFILIATE_URL ??
    "https://airnode.worldmobile.net/r/JWBMLA",
  reviewDate: "2026-08-25",
  reviewDateLabel: "25 August 2026",
} as const;

export const sources = {
  airnodes: "https://worldmobile.io/airnodes",
  ember: "https://worldmobile.io/airnodes/embernode",
  frontier: "https://worldmobile.io/airnodes/frontier",
  frontierAnnouncement:
    "https://worldmobile.io/blog/post/own-the-next-market-introducing-frontier-airnodes-in-the-philippines",
  frontierSocial:
    "https://x.com/WorldMobileTeam/status/2080699168775962842",
  platform:
    "https://worldmobile.io/blog/post/built-for-builders-engineered-for-scale-the-new-airnode-platform-is-live",
  scale:
    "https://worldmobile.io/blog/post/world-mobile-hits-unprecedented-scale",
  affiliate:
    "https://worldmobile.io/blog/post/the-airnode-affiliate-program-is-now-open-to-everyone",
  spark: "https://worldmobile.io/airnodes/spark",
  portal: "https://worldmobile.io/airnodes/portal",
  titan: "https://worldmobile.io/airnodes/titan",
  hexy: "https://hexynodes.com/airnodes/",
  alliance: "https://worldmobilealliance.io/airnodes/",
  legacy:
    "https://worldmobile.zohodesk.com/portal/en/kb/network-builders/airnodes-infrastructure",
} as const;

export const products = [
  {
    name: "EmberNode",
    status: "Available via reservations",
    layer: "Pakistan distribution",
    price: "Starting from US$165",
    detail:
      "A rugged fibre gateway that moves capacity from an ISP backbone to downstream network infrastructure. It does not connect end users directly.",
    terms: "Progressive pricing: first 10 at $165 each · units 11–149 at $150 · units 150–500 at $145",
    source: sources.ember,
  },
  {
    name: "Frontier",
    status: "Scheduled drops · check availability",
    layer: "Philippines business edge",
    price: "From US$585",
    detail:
      "Customer-edge Wi‑Fi for connected businesses in the Philippines. World Mobile says an approved local partner installs and operates the hardware while the owner manages it remotely.",
    terms: "Core, Plus, Pro and Max tiers are published. Check the current drop for live availability.",
    source: sources.frontier,
  },
  {
    name: "Spark",
    status: "Distribution partners only",
    layer: "Pakistan Wi‑Fi edge",
    price: "From US$62.99",
    detail:
      "A compact Wi‑Fi AirNode for last-mile access in Pakistan, designed to mesh with nearby units and serve users at the network edge.",
    terms: "Current availability is through selected partners",
    source: sources.spark,
  },
  {
    name: "Portal",
    status: "Available via reservations / Hex Operators",
    layer: "USA wide-area coverage",
    price: "From US$9,000",
    detail:
      "A high-capacity, wide-area endpoint designed to extend coverage in the United States.",
    terms: "Professional installation through a World Mobile-sourced or eligible owner-provided site",
    source: sources.portal,
  },
  {
    name: "Titan",
    status: "Contact sales",
    layer: "USA long-range coverage",
    price: "From US$100,000",
    detail:
      "World Mobile’s highest-capacity AirNode for enterprise deployments and network backbone.",
    terms: "Commercial terms are handled by sales",
    source: sources.titan,
  },
  {
    name: "Pulse",
    status: "Coming soon",
    layer: "Energy infrastructure",
    price: "Not announced",
    detail:
      "World Mobile describes Pulse as its first energy-infrastructure node. Public product details have not been announced.",
    terms: "No public pricing or reward terms yet",
    source: sources.airnodes,
  },
] as const;
