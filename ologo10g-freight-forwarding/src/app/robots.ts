import type { MetadataRoute } from "next";
import { getContactDetails } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getContactDetails().siteUrl || "http://localhost:3000";
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/"] },
    sitemap: new URL("/sitemap.xml", baseUrl).toString(),
  };
}
