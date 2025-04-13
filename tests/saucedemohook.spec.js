import {test,expect} from '@playwright/test';

// Login 
let page;
test.beforeEach ( async ({browser}) => {
    page = await browser.newPage();
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
})

test.afterAll ( async () => {
    await page.close();
})

// Go to homepage
test ('Homepage: Add to cart',async () => {
    await page.waitForURL('https://www.saucedemo.com/inventory.html')
    await page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="firstName"]').click();
    await page.locator('[data-test="firstName"]').fill('mukesh');
    await page.locator('[data-test="firstName"]').press('Tab');
    await page.locator('[data-test="lastName"]').fill('upadhyay');
    await page.locator('[data-test="postalCode"]').click();
    await page.locator('[data-test="postalCode"]').fill('400088');
    await page.locator('[data-test="continue"]').click();
    await page.locator('[data-test="finish"]').click();
    await page.locator('[data-test="back-to-products"]').click();
})

// Logout
test('Logout test', async () => {
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.locator('[data-test="logout-sidebar-link"]').click();
    await page.locator('[data-test="login-container"]').click();
})