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
    layer: "Pakistan distribution",
    price: "Starting from US$165",
    detail:
      "A rugged fibre gateway that moves data from an internet provider into the local network. It does not connect people directly.",
  },
  {
    name: "Frontier",
    layer: "Businesses in the Philippines",
    price: "From US$585",
    detail:
      "Wi-Fi equipment that connects businesses in the Philippines. An approved local partner installs and operates it while the owner follows it remotely.",
  },
  {
    name: "Spark",
    layer: "Local Wi-Fi in Pakistan",
    price: "From US$62.99",
    detail:
      "A compact Wi-Fi AirNode that works with nearby units to connect people in Pakistan.",
  },
  {
    name: "Portal",
    layer: "Wide-area coverage in the USA",
    price: "From US$9,000",
    detail:
      "High-capacity equipment designed to extend coverage in the United States.",
  },
  {
    name: "Titan",
    layer: "Long-range coverage in the USA",
    price: "From US$100,000",
    detail:
      "World Mobile’s most powerful AirNode, designed for large deployments and the network backbone.",
  },
  {
    name: "Pulse",
    layer: "Network energy",
    price: "Not announced",
    detail:
      "World Mobile describes Pulse as its first node for energy infrastructure. Full product details have not been announced.",
  },
] as const;
