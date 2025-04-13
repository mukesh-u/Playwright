import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://indiarunning-organizer-dashboard-staging.bombayrunning.com/login');
  await page.getByLabel('Please enter your email').click();
  await page.getByLabel('Please enter your email').fill('mukeshupadhyay0612@gmail.com');
  await page.getByRole('button', { name: 'Get OTP' }).click();
  await page.getByRole('spinbutton').first().fill('1');
  await page.getByRole('spinbutton').nth(1).fill('2');
  await page.getByRole('spinbutton').nth(2).fill('3');
  await page.getByRole('spinbutton').nth(3).fill('4');
  await page.getByRole('spinbutton').nth(3).press('Enter');
  await page.getByText('+ Create Event').click();
  await page.getByPlaceholder('Type your event name here').click();
  await page.getByPlaceholder('Type your event name here').fill('marathon');
  await page.getByLabel('On-Ground', { exact: true }).check();
  await page.locator('#event_start_date').fill('2025-04-10');
  await page.getByPlaceholder('Search location here').click();
  await page.getByPlaceholder('Search location here').fill('mumbai');
  await page.getByPlaceholder('line1').click();
  await page.getByPlaceholder('line1').fill('Mumbai Maharashtra, India');
  await page.getByPlaceholder('Area').click();
  await page.getByPlaceholder('Area').fill('Mumbai');
  await page.getByPlaceholder('City').click();
  await page.getByPlaceholder('City').fill('Mumbai');
  await page.getByPlaceholder('State').click();
  await page.getByPlaceholder('State').fill('Maharashtra');
  await page.getByPlaceholder('Pincode').click();
  await page.getByPlaceholder('Pincode').fill('400088');
  await page.waitForSelector('text=Save and Proceed', { state: 'visible' });
  await page.click('text=Save and Proceed'); 

  //next page
  await page.locator('.ql-editor').fill('Hritik roshan is our featured guest for this event');
  await page.getByText('Save and Proceed').click();

  // next page 
  await page.locator('//input[@type="radio" and @id="Running"]').click();
  await page.selectOption('#tickets.0.distance', '10 Kilometers');
  await page.locator('//input[@id="Name of the Category_text"]').fill('half marathon');
  await page.locator('//input[@id="Base Price"]').fill('1000');
  await page.locator('//input[@id="Age Limit for Registration"]').fill('21');
  await page.locator('[id="tickets\\.0\\.reg_start_date"]').fill('2025-04-09');
  await page.locator('input[name="tickets\\.0\\.reg_start_time"]').fill('10:00 AM');
  await page.getByRole('button', { name: 'Create Ticket' }).click();



});