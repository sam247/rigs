import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/content/blogPosts";
import { LOCATION_PAGES } from "@/content/locations";
import { DYNAMIC_SERVICE_ROUTES } from "@/content/serviceLandingPages";
import { SERVICE_LOCATION_PAGE_ROUTES } from "@/content/serviceLocationPages";

export const dynamic = "force-static";

const baseUrl = "https://rigselectrical.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "/",
    "/about",
    "/gallery",
    "/testimonials",
    "/contact",
    "/privacy",
    "/blog",
    "/services",
    "/locations",
    "/electrician/hertfordshire",
    "/electrician/bedfordshire",
    "/electrician/buckinghamshire",
    "/services/emergency-electrician",
    "/services/electrical-fault-finding",
    "/services/fuse-board-upgrades",
    "/services/eicr-certificates",
  ];

  const blogRoutes = BLOG_POSTS.map((p) => p.href);
  const serviceRoutes = DYNAMIC_SERVICE_ROUTES;
  const locationRoutes = Object.keys(LOCATION_PAGES).map((slug) => `/electrician/${slug}`);

  const urls = [...staticRoutes, ...serviceRoutes, ...blogRoutes, ...locationRoutes, ...SERVICE_LOCATION_PAGE_ROUTES];

  return urls.map((path) => ({
    url: `${baseUrl}${path === "/" ? "" : path}`,
    lastModified: now,
  }));
}
