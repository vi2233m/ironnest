import type { MetadataRoute } from "next";

const BASE_URL = "https://ironnestwiki.site";
const LAST_UPDATED = new Date("2026-08-13");

const staticRoutes = [
  "",
  "/guide",
  "/guide/walkthrough",
  "/guide/tips-and-tricks",
  "/guide/gold-medal",
  "/guide/missions",
  "/guide/siege-of-cartagena",
  "/guide/endings",
  "/calculator",
  "/calculator/elevation-guide",
  "/shells/best-shells",
  "/shells/phantom-battery",
  "/arsenal",
  "/arsenal/armor-piercing-shell",
  "/arsenal/high-explosive-shell",
  "/arsenal/smoke-shell",
  "/coop",
  "/mods",
  "/demo",
  "/codes/key",
  "/guides",
  "/guides/first-firing-solution",
  "/guides/everything-we-know",
  "/guides/ballistic-calculator-guide",
  "/guides/iron-nest-release-date",
  "/guides/demo-guide",
  "/guides/ammunition-guide",
  "/systems",
  "/regions",
  "/news",
  "/tools",
  "/about",
];

export default function sitemap(): MetadataRoute.Sitemap {

  return staticRoutes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: LAST_UPDATED,
    changeFrequency: path === "" || path === "/news" ? "daily" : "weekly",
    priority: path === "" ? 1.0 : path.startsWith("/guide") || path.startsWith("/calculator") ? 0.9 : 0.7,
  }));
}
