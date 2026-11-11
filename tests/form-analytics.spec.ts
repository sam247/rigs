import { test, expect, type Locator, type Page } from "@playwright/test";

const formEndpoint =
  "https://admin.betterranking.co.uk/sender/api/f/bs_0g7oojs9n3vwco145o1g8n8t";

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

    await expect(page.getByText("Quote requested!", { exact: true })).toBeVisible();

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
        ]),
      );

    const eventNames = (await getTrackedEvents(page)).map((event) => event.name);
    expect(eventNames).not.toContain("generate_lead");
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

    await expect(page.getByText("Quote requested!", { exact: true })).toBeVisible();

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
        ]),
      );

    const eventNames = (await getTrackedEvents(page)).map((event) => event.name);
    expect(eventNames).not.toContain("generate_lead");
  });
});


async function clickWithoutNavigating(locator: Locator) {
  await locator.evaluate((el) => {
    el.addEventListener("click", (event) => event.preventDefault(), { capture: true });
  });
  await locator.click();
}

test.describe("conversion click analytics", () => {
  test("whatsapp widget start chat tracks whatsapp_click", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("button", { name: /Open WhatsApp chat/i }).click();
    const startChat = page.getByRole("link", { name: /Start chat/i });
    await clickWithoutNavigating(startChat);

    await expect
      .poll(async () => getTrackedEvents(page))
      .toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            name: "whatsapp_click",
            params: expect.objectContaining({
              link_location: "whatsapp_widget",
              page_path: "/",
            }),
          }),
        ]),
      );
  });

  test("header call now tracks phone_click", async ({ page }) => {
    await page.goto("/");

    const callNow = page.locator("header").getByRole("link", { name: /Call Now/i }).first();
    await clickWithoutNavigating(callNow);

    await expect
      .poll(async () => getTrackedEvents(page))
      .toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            name: "phone_click",
            params: expect.objectContaining({
              link_location: "header",
              page_path: "/",
            }),
          }),
        ]),
      );
  });

  test("footer email tracks email_click", async ({ page }) => {
    await page.goto("/");

    const email = page.locator("footer").getByRole("link", { name: /rigselectrical@icloud.com/i });
    await clickWithoutNavigating(email);

    await expect
      .poll(async () => getTrackedEvents(page))
      .toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            name: "email_click",
            params: expect.objectContaining({
              link_location: "footer",
              page_path: "/",
            }),
          }),
        ]),
      );
  });
});
