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
  const page = await browser.newPage();

  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/register"
  );

  // id
  const firstname: Locator = page.locator("id=input-firstname");
  const password: Locator = page.locator("id=input-lastname");
  await firstname.fill("Naveen");
  await password.fill("Automation");

  //css selector
  const emailId: Locator = page.locator("input[name='email']");
  await emailId.fill("abc@gmail.com");

  const searchbar: Locator = page.locator('input[name="search"]');
  const searchbarExist = await searchbar.isEnabled();
  console.log("Search bar exists: ", searchbarExist);

  //xpath
  const mobile = page.locator("//input[@name='telephone' and @type='tel']");
  await mobile.fill("1234567890");

  //class name
  const logo: Locator = page.locator(".img-responsive");
  const logoExist = await logo.isEnabled();
  console.log("Logo exists: ", logoExist);

  const continuebutton: Locator = page.locator(".btn btn-primary");
  const continue_button_exist = await continuebutton.isVisible();
  console.log("Continue button exists: ", continue_button_exist);

  //await new Promise(() => {});
});
