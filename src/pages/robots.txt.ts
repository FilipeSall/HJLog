import type { APIRoute } from "astro";
import { buildSiteUrl } from "../config/site";

export const GET: APIRoute = () => {
  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${buildSiteUrl("/sitemap.xml")}`,
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
