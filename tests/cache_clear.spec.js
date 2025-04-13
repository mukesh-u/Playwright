import { test, expect, request } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto(
    "https://accounts.google.com/v3/signin/identifier?opparams=%253Fhd%253Dmedia.net&dsh=S-331917945%3A1744120549264947&client_id=994988600692-7uuqgp0udpiihhfet68vbjiuabr85cjg.apps.googleusercontent.com&code_challenge=Aw586syirQ_D02Vp9KIiQEUs1wELQNrwEuWi97PpV5A&code_challenge_method=S256&ddm=1&hd=media.net&o2v=1&redirect_uri=https%3A%2F%2Faccessmn.cloudflareaccess.com%2Fcdn-cgi%2Faccess%2Fcallback&response_type=code&scope=email+profile+openid&service=lso&state=b898301b97162e9379488cbc88bcaf6b20e4a441c13e8fc87ea89a4d7ea77baa.JTdCJTIyaWF0JTIyJTNBMTc0NDEyMDU0OSUyQyUyMmF1dGhEb21haW4lMjIlM0ElMjJhY2Nlc3Ntbi5jbG91ZGZsYXJlYWNjZXNzLmNvbSUyMiUyQyUyMmhvc3RuYW1lJTIyJTNBJTIyaGIuYWNjZXNzLm1uJTIyJTJDJTIycmVkaXJlY3RVUkwlMjIlM0ElMjIlMkZjb3AtY2FjaGUtY2xlYXIlMjIlMkMlMjJhdWQlMjIlM0ElMjI1MTY1OGEwZjVjOTc3YTcyZGJkZWNiYjgxYTZjYmZiNWQyMTI1NTJmODViMDJkMjEzNTcyZWJmMjQyMzYwNDRmJTIyJTJDJTIyaXNTYW1lU2l0ZU5vbmVDb21wYXRpYmxlJTIyJTNBdHJ1ZSUyQyUyMmlzSURQVGVzdCUyMiUzQWZhbHNlJTJDJTIyaXNSZWZyZXNoJTIyJTNBZmFsc2UlMkMlMjJub25jZSUyMiUzQSUyMm5UZVZEYnFEQWg0ajczdGV0JTIyJTJDJTIyaWRwSWQlMjIlM0ElMjJhODBmZjk3ZS04YTY4LTQwOWItOTE5Ny01OTg0YzQ0Y2YyMTMlMjIlMkMlMjJzZXJ2aWNlX3Rva2VuX2lkJTIyJTNBJTIyJTIyJTJDJTIyc2VydmljZV90b2tlbl9zdGF0dXMlMjIlM0FmYWxzZSUyQyUyMmF1dGhfc3RhdHVzJTIyJTNBJTIyTk9ORSUyMiUyQyUyMmlzX3dhcnAlMjIlM0FmYWxzZSUyQyUyMmlzX2dhdGV3YXklMjIlM0FmYWxzZSUyQyUyMm10bHNfYXV0aCUyMiUzQSU3QiUyMmNlcnRfaXNzdWVyX3NraSUyMiUzQSUyMiUyMiUyQyUyMmNlcnRfcHJlc2VudGVkJTIyJTNBZmFsc2UlMkMlMjJjZXJ0X3NlcmlhbCUyMiUzQSUyMiUyMiUyQyUyMmNlcnRfaXNzdWVyX2RuJTIyJTNBJTIyJTIyJTJDJTIyYXV0aF9zdGF0dXMlMjIlM0ElMjJOT05FJTIyJTdEJTJDJTIyYXBwU2Vzc2lvbkhhc2glMjIlM0ElMjJhZmNiODZjMTIxOWM0MTYxZWVkYjk4YWY1MDgwODUzODlkYjM3MWQ0NTJhY2IzZjU4MjliNDhjZWQ0YzRiZWZjJTIyJTdE&flowName=GeneralOAuthFlow&continue=https%3A%2F%2Faccounts.google.com%2Fsignin%2Foauth%2Fconsent%3Fauthuser%3Dunknown%26part%3DAJi8hANNLENhi5JaA3F3Q4EZnMu2Pnz6weg4l4QAUInXKbWpRKxbSWeOapiDd_U9cabb40W7ik5_NklaExdaH-hDPd-kvVKo7QlJdbfQN_awPlMzK9OzxEeJcdOzR3_D2MamUk9GhPRguYWRQs4cLN67RKqHEB8lc7fV2KVS7GlgL8MtKV5hhauLoRFQxbg6UwOuSe6_3paRRH48FQKfPVCwa_M7DdaaIlWgE30PLvb5_9LMt5r859hnlJDSY0lE8GuLrswCD-0--_xhdyvQRWWHKUcKbTddMeqzXUdI4Z48n-urMkoUUKU_e17SotelKgeSp0KT7KS-MATtRKwc1quk6VdVWUpuF_oz3gx_JDUq3U-OKRocAUPsJvJDs7cjEBsQgXC8wZ6OsCGAUkJFjl119HQA4jnJN36wAmxUXhLebxVdeOJX0LO6f9z97gP7gheZkql62jz0XCw5KyHb7GstbHumBWtCZAQ_08czhhoD9KGVxcbnbA4%26flowName%3DGeneralOAuthFlow%26as%3DS-331917945%253A1744120549264947%26client_id%3D994988600692-7uuqgp0udpiihhfet68vbjiuabr85cjg.apps.googleusercontent.com%23&app_domain=https%3A%2F%2Faccessmn.cloudflareaccess.com&rart=ANgoxcdTrDGCH8z1wiaXihIpznz52DVHzuiwn7K-st4jvNZE2z8CnBHbwh0WjNSAPpIh6XWwC5CXnhw0rIMtYtq6NfUr7PO3xOdOVRmOkFAdkS-fEKIFogA"
  );
  await page.getByLabel("Enter your email").click();
  await page.getByLabel("Enter your email").fill("mukesh.u");
  await page.getByRole("button", { name: "Next" }).click();
  await page.locator("html").click();
  await page.getByLabel("Enter your password").fill("Muksrits@3784");
  await page.getByLabel("Enter your password").press("Enter");
  await page.goto("https://hb.access.mn/cop-cache-clear");
  await page.getByText("SSP+Akamai (Customer)").click();
  await page.getByPlaceholder("8CUCID1\n8CUCID2").click();
  await page.getByPlaceholder("8CUCID1\n8CUCID2").click();
  await page.getByPlaceholder("8CUCID1\n8CUCID2").fill("8CUGM2FT9");
  await page.getByPlaceholder("8CUCID1\n8CUCID2").click();
  await page.locator("html").click();
  await page.getByRole("button", { name: "Submit" }).click();

  const cacheClearSimpleUrls = [
    "https://example.com/api/clear-cache-1 ",
    "https://example.com/api/clear-cache-2 ",
  ];

  for (const url of cacheClearSimpleUrls) {
    const response = await request.get(url);
    console.log(`Cleared cache via: ${url}, Status: ${response.status()}`);
    expect(response.ok()).toBeTruthy();
  }
});
