const { test, expect } = require('@playwright/test');

test('capture all network calls on forbes.com', async ({ page }) => {
  const requests = [];

  // Collect all requests
  page.on('request', req => {
    requests.push({
      url: req.url(),
      method: req.method(),
      resourceType: req.resourceType(),
      domain: new URL(req.url()).hostname,
    });
  });

  // Go to the website
  await page.goto('https://www.forbes.com/?medianet_test=1', { waitUntil: 'networkidle' });

  // Wait a bit more to ensure ads/prebid calls load
  await page.waitForTimeout(5000);

  console.log("Total network requests captured:", requests.length);

  // Check for prebid.media.net
  const prebidMediaRequest = requests.find(r => r.url.includes('prebid.media.net'));
  expect(prebidMediaRequest, 'Expected a request to prebid.media.net').not.toBeNull();
  console.log("✅ Found prebid.media.net request:", prebidMediaRequest.url);

  // Check for prebid-s2s.media.net
  const prebidS2SRequest = requests.find(r => r.domain.includes('prebid-s2s.media.net'));
  expect(prebidS2SRequest, 'Expected a request to prebid-s2s.media.net').not.toBeNull();
  console.log("✅ Found prebid-s2s.media.net request:", prebidS2SRequest.url);

  await page.close();
});