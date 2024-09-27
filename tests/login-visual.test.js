const {test, expect} =require('@playwright/test');
const {loginUrl, password} = require ('../validCredentials');

test('Login page visual elements are visible', async ({ page }) => {
    await page.goto(loginUrl);

    const usernameVisible = await page.isVisible('input[name="username"]');
    expect(usernameVisible).toBeTruthy();

    const passwordVisible = await page.isVisible('input[name="password"]');
    expect(passwordVisible).toBeTruthy();

    const submitButtonVisible = await page.isVisible('button[type="submit"]');
    expect(submitButtonVisible).toBeTruthy();
});