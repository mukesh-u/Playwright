const { test, expect } = require('@playwright/test');

test('check cnn is present', async ({ page }) => {

  await page.goto('https://www.google.com');

  await page.fill('textarea[name="q"]', 'Los Angeles fire');
  await page.press('textarea[name="q"]', 'Enter');

  await page.waitForSelector('#search');

  //const links = await page.locator('#search .tF2Cxc a').allTextContents();
  const links = await page.locator('.TzHB6b a');
  const allLinks = await links.allInnerTexts(); // Retrieves an array of the inner text of all matching elements
  console.log('Search Results:', allLinks);

  console.log(links)
  const cnnFound = allLinks.find(link => link.includes('cnn.com'));

  if (cnnFound) {
    console.log("CNN is present in the search results.");
  } else {
    console.log('CNN is NOT present in the search results.');
  }

  expect(cnnFound).toBeTruthy();
});