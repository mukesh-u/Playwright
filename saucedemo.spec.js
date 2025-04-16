import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  // Go to the website
  await page.goto("https://www.saucedemo.com/");

  // Login to the website
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();

  // Click the desired item
  await page
    .locator(".inventory_item", {
      hasText: "Sauce Labs Fleece Jacket",
    })
    .locator(".inventory_item_img img")
    .click();

  // Add the item to the cart
  await page.locator('[data-test="add-to-cart"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();

  // Fill in the checkout information
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill("Mukesh ");
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill("Upadhyay");
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill("400088");
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();

  // Verify the checkout complete page
  await expect(page.locator('[data-test="checkout-complete-container"]'))
    .toMatchAriaSnapshot(`
    - img "Pony Express"
    - heading "Thank you for your order!" [level=2]
    - text: Your order has been dispatched, and will arrive just as fast as the pony can get there!
    - button "Back Home"
    `);

  // Go back to the products page
  await page.locator('[data-test="back-to-products"]').click();

  // Close the website
  await page.close();
});
