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
    name: "Spark",
    service: "Local Wi-Fi coverage",
    location: "Pakistan",
    price: "From US$62.99",
    reward: "Fixed rewards of US$1.70 per month, accrued daily.",
  },
  {
    name: "EmberNode",
    service: "Network data distribution",
    location: "Pakistan",
    price: "From US$165",
    reward: "Rewards follow verified traffic. Around 800 GB may earn about US$3.33 per month.",
  },
  {
    name: "Frontier",
    service: "Business Wi-Fi",
    location: "Philippines",
    price: "From US$585",
    reward: "Fixed base rewards range from US$17.55 to US$58.50 per month after activation, depending on tier.",
  },
  {
    name: "Portal",
    service: "Wide-area coverage",
    location: "USA",
    price: "From US$9,000",
    reward: "Rewards follow subscriber activity and network usage. World Mobile reports about US$250 to US$500 per month for active deployments.",
  },
  {
    name: "Titan",
    service: "Long-range Overwatch coverage",
    location: "USA",
    price: "From US$100,000",
    reward: "Rewards follow subscriber use and downstream network traffic. Coverage can reach up to 28 km.",
  },
  {
    name: "Pulse",
    service: "Energy infrastructure",
    location: "Not announced",
    price: "Not announced",
    reward: "World Mobile’s first energy infrastructure node. More details are coming.",
  },
] as const;
