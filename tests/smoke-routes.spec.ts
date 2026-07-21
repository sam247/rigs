import { test, expect, type Page } from "@playwright/test";

const coreRoutes: Array<[string, RegExp]> = [
  ["/about", /Tring's Local Domestic Electrician/i],
  ["/blog", /^Blog$/i],
  ["/blog/consumer-unit-vs-fuse-box", /Consumer Unit vs Fuse Box/i],
  ["/blog/why-do-my-electrics-keep-tripping", /Why Do My Electrics Keep Tripping/i],
  ["/blog/flickering-lights-common-causes", /Flickering Lights/i],
  ["/blog/do-i-need-an-emergency-electrician-or-can-it-wait", /Do I Need an Emergency Electrician/i],
  ["/blog/how-to-tell-if-your-fuse-board-needs-replacing", /How to Tell If Your Fuse Board/i],
  ["/why-an-electric-shower-might-be-right-for-your-home", /Why an Electric Shower Might Be Right/i],
  ["/services", /Electrical Services in Hertfordshire/i],
  ["/locations", /Electrician Locations/i],
  ["/electrician/hertfordshire", /Electrician Hertfordshire/i],
  ["/electrician/bedfordshire", /Electrician Bedfordshire/i],
  ["/electrician/buckinghamshire", /Electrician Buckinghamshire/i],
];

const serviceRoutes: Array<[string, RegExp]> = [
  ["/services/emergency-electrician", /Emergency Electrician Hertfordshire/i],
  ["/services/electrical-fault-finding", /Electrical Fault Finding Hertfordshire/i],
  ["/services/fuse-board-upgrades", /Fuse Board Upgrades Hertfordshire/i],
  ["/services/eicr-certificates", /EICR Certificates Hertfordshire/i],
  ["/services/outdoor-lighting", /Outdoor Lighting Installation Hertfordshire/i],
  ["/services/house-rewiring", /House Rewiring Hertfordshire/i],
  ["/services/smart-home-installation", /Smart Home Installation Hertfordshire/i],
  ["/services/security-lighting", /Security Lighting Installation Hertfordshire/i],
  ["/services/electrical-inspections", /Electrical Inspections Hertfordshire/i],
  ["/services/consumer-unit-replacement", /Consumer Unit Replacement Hertfordshire/i],
  ["/services/electric-shower-installation", /Electric Shower Installation Hertfordshire/i],
  ["/services/kitchen-electrics", /Kitchen Electrical Installation Hertfordshire/i],
  ["/services/landlord-electrical-certificates", /Landlord Electrical Certificates Hertfordshire/i],
];

const locationRoutes: Array<[string, RegExp]> = [
  ["/electrician/tring", /Electrician Tring/i],
  ["/electrician/st-albans", /Electrician St Albans/i],
  ["/electrician/watford", /Electrician Watford/i],
  ["/electrician/hemel-hempstead", /Electrician Hemel Hempstead/i],
  ["/electrician/stevenage", /Electrician Stevenage/i],
  ["/electrician/hitchin", /Electrician Hitchin/i],
  ["/electrician/harpenden", /Electrician Harpenden/i],
  ["/electrician/hatfield", /Electrician Hatfield/i],
  ["/electrician/welwyn-garden-city", /Electrician Welwyn Garden City/i],
  ["/electrician/cheshunt", /Electrician Cheshunt/i],
  ["/electrician/borehamwood", /Electrician Borehamwood/i],
  ["/electrician/letchworth", /Electrician Letchworth/i],
];

const serviceLocationRoutes: Array<[string, RegExp]> = [
  ["/electrician/tring/emergency-electrician", /Emergency Electrician Tring/i],
  ["/electrician/tring/eicr-certificates", /EICR Certificates Tring/i],
  ["/electrician/tring/electric-shower-installation", /Electric Shower Installation Tring/i],
  ["/electrician/hemel-hempstead/emergency-electrician", /Emergency Electrician Hemel Hempstead/i],
];

const assertRoute = async (path: string, heading: RegExp, page: Page) => {
  const res = await page.goto(path);
  expect(res?.ok()).toBeTruthy();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(heading);
};

const assertRedirect = async (from: string, to: string, page: Page) => {
  const res = await page.goto(from);
  expect(res?.ok()).toBeTruthy();
  await page.waitForURL(`**${to}`);
  expect(page.url()).toContain(to);
};

test.describe("smoke", () => {
  test.describe.configure({ mode: "serial" });
  test.setTimeout(120000);

  test("core pages render", async ({ page }) => {
    for (const [path, heading] of coreRoutes) {
      await assertRoute(path, heading, page);
    }
  });

  test("service pages render", async ({ page }) => {
    for (const [path, heading] of serviceRoutes) {
      await assertRoute(path, heading, page);
    }
  });

  test("location pages render", async ({ page }) => {
    for (const [path, heading] of locationRoutes) {
      await assertRoute(path, heading, page);
    }
  });

  test("service location pages render", async ({ page }) => {
    for (const [path, heading] of serviceLocationRoutes) {
      await assertRoute(path, heading, page);
    }
  });

  test("legacy service routes redirect to /services", async ({ page }) => {
    await assertRedirect("/domestic", "/services", page);
    await assertRedirect("/services/consumer-unit-upgrades", "/services/consumer-unit-replacement", page);
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
