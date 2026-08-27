export const site = {
  name: "Airnodes Club",
  url: "https://airnodes.club",
  // The environment variable allows controlled campaign overrides at build time.
  affiliateUrl:
    import.meta.env.PUBLIC_AIRNODE_AFFILIATE_URL ??
    "https://airnode.worldmobile.net/r/JWBMLA",
  affiliateCode: "JWBMLA",
  lastModified: "2026-08-26",
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
    name: "Spark",
    service: "Local Wi-Fi coverage",
    location: "Pakistan",
    price: "From $62.99",
    rewardModel: "Current programme terms",
    rewardExample: "$1.70 / month",
    profile: "For operators who want an accessible entry point at the edge of the network.",
    deployment: "Creates local Wi-Fi coverage for people, homes and businesses.",
    availability: "Distribution partners only",
    guidePath: "/airnodes/spark/",
    cta: "Explore Spark availability",
  },
  {
    name: "EmberNode",
    service: "Network data distribution",
    location: "Pakistan",
    price: "From $165",
    rewardModel: "Verified network traffic",
    rewardExample: "About $3.33 / month",
    profile: "For operators who want to support network distribution in Pakistan.",
    deployment: "Moves connectivity from the fibre backbone toward the network edge.",
    guidePath: "/airnodes/embernode/",
    cta: "Buy EmberNode",
  },
  {
    name: "Frontier",
    service: "Business Wi-Fi",
    location: "Philippines",
    price: "From $585",
    rewardModel: "Tier-based structure",
    rewardExample: "$17.55–$58.50 / month",
    profile: "For operators seeking a business-connectivity AirNode with several tiers.",
    deployment: "Provides fibre-backed Wi-Fi at active business locations.",
    guidePath: "/airnodes/frontier/",
    cta: "Buy Frontier",
  },
  {
    name: "Portal",
    service: "Wide-area coverage",
    location: "USA",
    price: "From $9,000",
    rewardModel: "Subscriber and usage linked",
    rewardExample: "About $250–$500 / month",
    profile: "For experienced operators looking at professionally managed, wide-area coverage.",
    deployment: "Uses elevated sites to serve neighbourhoods, businesses and public spaces.",
    guidePath: "/airnodes/portal/",
    cta: "Buy Portal",
  },
  {
    name: "Titan",
    service: "Long-range Overwatch coverage",
    location: "USA",
    price: "From $100,000",
    rewardModel: "Direct use and Overwatch traffic",
    rewardExample: "Varies with network demand",
    profile: "For experienced operators considering the network’s highest-capacity AirNode.",
    deployment: "Provides long-range coverage and supports downstream network activity.",
    guidePath: "/airnodes/",
    cta: "Buy Titan",
  },
] as const;
