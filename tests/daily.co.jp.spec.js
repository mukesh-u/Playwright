const { test, expect } = require('@playwright/test');

test('capture all network calls on forbes.com', async ({ page }) => {
  const requests = [];

  // Larger viewport
  await page.setViewportSize({ width: 1280, height: 800 });

  // Collect all requests
  page.on('request', req => {
    requests.push({
      url: req.url(),
      method: req.method(),
      resourceType: req.resourceType(),
      domain: new URL(req.url()).hostname,
    });
  });

  await page.goto('https://www.daily.co.jp/?medianet_test=1', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  // Extra buffer – ads load late
  await page.waitForTimeout(10000);

  console.log("Total requests captured: ", requests.length);

  // Validate prebid.media.net
  const prebidRequest = requests.find(r => r.url.includes('prebid.media.net'));
  expect(prebidRequest, 'Expected request to prebid.media.net').not.toBeNull();
  console.log(' Found prebid.media.net request:', prebidRequest.url);

  // Validate prebid-s2s.media.net
//   const prebidS2SRequest = requests.find(r => r.domain.includes('prebid-s2s.media.net'));
//   expect(prebidS2SRequest, 'Expected request to prebid-s2s.media.net').not.toBeNull();
//   console.log(' Found prebid-s2s.media.net request:', prebidS2SRequest.url);

  await page.close();
});