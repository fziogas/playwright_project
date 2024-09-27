const { test, expect } = require('@playwright/test');
const { loginUrl, username, password } = require('../validCredentials');

test('Login with valid credentials', async ({ page }) => {
  console.log('Navigating to the login page...');
  await page.goto(loginUrl);

  console.log('Filling in credentials...');
  await page.fill('input[name="username"]', username);
  await page.fill('input[name="password"]', password);
  await page.click('button[type="submit"]');

  console.log('Waiting for the login response...');
  const loginMessage = await page.locator('#flash');
  await expect(loginMessage).toContainText('Your username is invalid');

  console.log('Checking page title...');
  await expect(page).toHaveTitle('The Internet');
});
