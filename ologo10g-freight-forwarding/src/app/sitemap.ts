import type { MetadataRoute } from "next";
import { getContactDetails } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getContactDetails().siteUrl || "http://localhost:3000";
  const routes = ["", "/about", "/services", "/shipping-resources", "/track-shipment", "/shipping-partners", "/operations", "/request-quote", "/contact", "/privacy"];
  return routes.map((route) => ({
    url: new URL(route, baseUrl).toString(),
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.6,
  }));
}
