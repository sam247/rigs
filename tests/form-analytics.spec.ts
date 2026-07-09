import { test, expect, type Page } from "@playwright/test";

const formEndpoint = "https://formbold.com/s/9BaZ2";

async function stubLeadSubmission(page: Page) {
  await page.route(formEndpoint, async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ ok: true }),
    });
  });
}

async function getTrackedEvents(page: Page) {
  return page.evaluate(() =>
    ((window as { dataLayer?: unknown[] }).dataLayer ?? [])
      .map((entry) => {
        if (Array.isArray(entry)) {
          return entry;
        }

        if (entry && typeof entry === "object" && "length" in entry) {
          return Array.from(entry as ArrayLike<unknown>);
        }

        return [];
      })
      .filter((entry): entry is [string, string, Record<string, string>] => entry[0] === "event")
      .map((entry) => ({ name: entry[1], params: entry[2] })),
  );
}

test.describe("form analytics", () => {
  test("homepage quick quote tracks submit and success", async ({ page }) => {
    await stubLeadSubmission(page);
    await page.goto("/");

    const quickQuoteForm = page.locator("form").filter({ has: page.getByPlaceholder("Full name") }).first();

    await quickQuoteForm.getByPlaceholder("Full name").fill("Test User");
    await quickQuoteForm.getByPlaceholder("Email").fill("test@example.com");
    await quickQuoteForm.getByPlaceholder("Phone").fill("07989111222");
    await quickQuoteForm.getByPlaceholder("Service needed (e.g. rewire)").fill("Consumer unit replacement");
    await quickQuoteForm.getByRole("button", { name: /Get a Quote/i }).click();

    await expect(page.getByText("Quote requested!")).toBeVisible();

    await expect
      .poll(async () => getTrackedEvents(page))
      .toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            name: "form_submit",
            params: expect.objectContaining({
              form_name: "hero_quick_quote",
              form_location: "homepage_hero",
            }),
          }),
          expect.objectContaining({
            name: "form_submit_success",
            params: expect.objectContaining({
              form_name: "hero_quick_quote",
              form_location: "homepage_hero",
            }),
          }),
          expect.objectContaining({
            name: "generate_lead",
            params: expect.objectContaining({
              form_name: "hero_quick_quote",
              form_location: "homepage_hero",
            }),
          }),
        ]),
      );
  });

  test("contact page tracks submit and success", async ({ page }) => {
    await stubLeadSubmission(page);
    await page.goto("/contact");

    await page.getByLabel("Full Name").fill("Test User");
    await page.getByLabel("Email").fill("test@example.com");
    await page.getByLabel("Phone").fill("07989111222");
    await page.getByLabel("Service Required").fill("Electrical fault finding");
    await page.getByLabel("Message").fill("Please call me back about a quote.");
    await page.getByRole("button", { name: /Get a Quote/i }).click();

    await expect(page.getByText("Quote requested!")).toBeVisible();

    await expect
      .poll(async () => getTrackedEvents(page))
      .toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            name: "form_submit",
            params: expect.objectContaining({
              form_name: "contact_page",
              form_location: "/contact",
            }),
          }),
          expect.objectContaining({
            name: "form_submit_success",
            params: expect.objectContaining({
              form_name: "contact_page",
              form_location: "/contact",
            }),
          }),
          expect.objectContaining({
            name: "generate_lead",
            params: expect.objectContaining({
              form_name: "contact_page",
              form_location: "/contact",
            }),
          }),
        ]),
      );
  });
});
