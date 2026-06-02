import { test, expect } from "@playwright/test";

const assertRoute = async (path: string, heading: RegExp, page: any) => {
  const res = await page.goto(path);
  expect(res?.ok()).toBeTruthy();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(heading);
};

test.describe("smoke", () => {
  test("key pages render", async ({ page }) => {
    await assertRoute("/domestic", /Domestic Electrical Services in Tring/i, page);
    await assertRoute("/blog", /^Blog$/i, page);
    await assertRoute("/blog/consumer-unit-vs-fuse-box", /Consumer Unit vs Fuse Box/i, page);
    await assertRoute("/services/emergency-electrician", /Emergency Electrician Hertfordshire/i, page);
    await assertRoute("/electrician/tring", /Electrician Tring/i, page);
  });

  test("static assets resolve", async ({ request }) => {
    const urls = [
      "/sitemap.xml",
      "/robots.txt",
      "/blog_images/consumer_unit_vs_fuse_box.jpg",
      "/services_images/emergency_electrician_hero.jpg",
    ];

    for (const url of urls) {
      const res = await request.get(url);
      expect(res.ok(), url).toBeTruthy();
    }
  });
});
