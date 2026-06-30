import { test, expect } from "@playwright/test";

const assertRoute = async (path: string, heading: RegExp, page: any) => {
  const res = await page.goto(path);
  expect(res?.ok()).toBeTruthy();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(heading);
};

const assertRedirect = async (from: string, to: string, page: any) => {
  const res = await page.goto(from);
  expect(res?.ok()).toBeTruthy();
  await page.waitForURL(`**${to}`);
  expect(page.url()).toContain(to);
};

test.describe("smoke", () => {
  test("key pages render", async ({ page }) => {
    await assertRoute("/about", /Tring's Local Domestic Electrician/i, page);
    await assertRoute("/blog", /^Blog$/i, page);
    await assertRoute("/blog/consumer-unit-vs-fuse-box", /Consumer Unit vs Fuse Box/i, page);
    await assertRoute("/blog/why-do-my-electrics-keep-tripping", /Why Do My Electrics Keep Tripping/i, page);
    await assertRoute("/blog/flickering-lights-common-causes", /Flickering Lights/i, page);
    await assertRoute("/services", /Electrical Services in Hertfordshire/i, page);
    await assertRoute("/locations", /Electrician Locations/i, page);
    await assertRoute("/services/emergency-electrician", /Emergency Electrician Hertfordshire/i, page);
    await assertRoute("/services/electrical-fault-finding", /Electrical Fault Finding Hertfordshire/i, page);
    await assertRoute("/services/fuse-board-upgrades", /Fuse Board Upgrades Hertfordshire/i, page);
    await assertRoute("/services/eicr-certificates", /EICR Certificates Hertfordshire/i, page);
    await assertRoute("/electrician/hertfordshire", /Electrician Hertfordshire/i, page);
    await assertRoute("/electrician/tring", /Electrician Tring/i, page);
    await assertRoute("/electrician/st-albans", /Electrician St Albans/i, page);
    await assertRoute("/electrician/watford", /Electrician Watford/i, page);
  });

  test("legacy service routes redirect to /services", async ({ page }) => {
    await assertRedirect("/domestic", "/services", page);
    await assertRedirect("/services/house-rewiring", "/services#house-rewiring", page);
    await assertRedirect("/services/consumer-unit-upgrades", "/services#consumer-unit-upgrades", page);
  });

  test("static assets resolve", async ({ request }) => {
    const urls = [
      "/sitemap.xml",
      "/robots.txt",
      "/blog_images/consumer_unit_vs_fuse_box.jpg",
      "/blog_images/why-do-my-electrics-keep-tripping.jpg",
      "/blog_images/flickering-lights-common-causes.jpg",
      "/services_images/emergency_electrician_hero.jpg",
    ];

    for (const url of urls) {
      const res = await request.get(url);
      expect(res.ok(), url).toBeTruthy();
    }
  });
});
