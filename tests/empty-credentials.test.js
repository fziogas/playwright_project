const { test, expect } = require('@playwright/test');
const { loginUrl } = require('../validCredentials');

test('Login with empty credentials', async ({ page }) => {
  console.log('Navigating to the login page...');
  await page.goto(loginUrl);

  console.log('Submitting empty credentials...');
  await page.click('button[type="submit"]');

  console.log('Waiting for the login response...');
  const loginMessage = await page.locator('#flash');
  await expect(loginMessage).toContainText('Your username is invalid!');

  console.log('Checking if login form is still visible...');
  const formVisible = await page.isVisible('form');
  expect(formVisible).toBeTruthy();

  console.log('Checking page title...');
  await expect(page).toHaveTitle('The Internet');
});
