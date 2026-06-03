import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/content/blogPosts";
import { LOCATION_PAGES } from "@/content/locations";

export const dynamic = "force-static";

const baseUrl = "https://rigselectrical.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "/",
    "/about",
    "/domestic",
    "/gallery",
    "/testimonials",
    "/contact",
    "/privacy",
    "/blog",
    "/services/emergency-electrician",
    "/services/electrical-fault-finding",
    "/services/fuse-board-upgrades",
    "/services/house-rewiring",
    "/services/eicr-certificates",
    "/services/consumer-unit-upgrades",
  ];

  const blogRoutes = BLOG_POSTS.map((p) => p.href);
  const locationRoutes = Object.keys(LOCATION_PAGES).map((slug) => `/electrician/${slug}`);

  const urls = [...staticRoutes, ...blogRoutes, ...locationRoutes];

  return urls.map((path) => ({
    url: `${baseUrl}${path === "/" ? "" : path}`,
    lastModified: now,
  }));
}
