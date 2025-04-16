import { test, expect, chromium } from "@playwright/test";

test("test1: login and verify network call", async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  let networkCallMade = false;
  const expectedNetworkCall = "googleapi";

  page.on("request", (request) => {
    console.log(`➡️ [${request.method()}] ${request.url()}`);
    if (request.url().includes(expectedNetworkCall)) {
      networkCallMade = true;
    }
  });

  page.on("response", (response) => {
    console.log(`⬅️ [${response.status()}] ${response.url()}`);
  });

  await page.goto("https://www.saucedemo.com/");
  await page.fill('[data-test="username"]', "standard_user");
  await page.fill('[data-test="password"]', "secret_sauce");

  await Promise.all([
    page.waitForURL("**/inventory.html"),
    page.click('[data-test="login-button"]'),
  ]);

  expect(networkCallMade).toBe(true);

  await browser.close();
});
