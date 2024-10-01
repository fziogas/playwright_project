const { test, expect } = require('@playwright/test');
const { loginUrl } = require('../validCredentials');
const { waitForSelector } = require('../utils');

test('Login page visual elements are visible', async ({ page }) => {
    await page.goto(loginUrl);

    await waitForSelector(page, 'input[name="username"]');
    const usernameVisible = await page.isVisible('input[name="username"]');
    expect(usernameVisible).toBeTruthy();

    await waitForSelector(page, 'input[name="password"]');
    const passwordVisible = await page.isVisible('input[name="password"]');
    expect(passwordVisible).toBeTruthy();

    await waitForSelector(page, 'button[type="submit"]');
    const submitButtonVisible = await page.isVisible('button[type="submit"]');
    expect(submitButtonVisible).toBeTruthy();
});
