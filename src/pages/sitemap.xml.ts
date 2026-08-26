import type { APIRoute } from "astro";
import { site } from "../config";

export const prerender = true;

export const GET: APIRoute = () => {
  const paths = [
    "/",
    "/airnodes/",
    "/airnodes/spark/",
    "/airnodes/embernode/",
    "/airnodes/frontier/",
    "/airnodes/portal/",
    "/airnode-affiliate-code/",
    "/deployment-regions/pakistan/",
    "/deployment-regions/philippines/",
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((path) => `  <url>\n    <loc>${site.url}${path}</loc>\n    <lastmod>${site.lastModified}</lastmod>\n  </url>`).join("\n")}
</urlset>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
