import {
  test,
  expect,
  chromium,
  Browser,
  Page,
  Locator,
  BrowserContext,
} from "@playwright/test";

test("login test", async () => {
  const browser: Browser = await chromium.launch();

  //browser context 1
  const browserContext_1: BrowserContext = await browser.newContext();
  const page1: Page = await browserContext_1.newPage();

  //browser context 2
  const browserContext_2: BrowserContext = await browser.newContext();
  const page2: Page = await browserContext_2.newPage();

  // browser 1
  await page1.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login"
  );

  const emailId1: Locator = await page1.locator("#input-email");
  const password1: Locator = await page1.locator("#input-password");
  const loginbutton1: Locator = await page1.locator('[value="Login"]');

  await emailId1.fill("pepsi@gmail.com");
  await password1.fill("test@123");
  await loginbutton1.click();

  // browser 2
  await page2.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login"
  );

  const emailId2: Locator = await page2.locator("#input-email");
  const password2: Locator = await page2.locator("#input-password");
  const loginbutton2: Locator = await page2.locator('[value="Login"]');

  await emailId2.fill("thumsup@gmail.com");
  await password2.fill("test@123");
  await loginbutton2.click();

  await browserContext_1.close();
  await browserContext_2.close();
  await browser.close();
});
