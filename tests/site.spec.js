const { test, expect } = require('@playwright/test');
const baseURL = 'https://automationpro.netlify.app';

test.describe('AutomationPro Site Tests', () => {

  test('Index page loads', async ({ page }) => {
    await page.goto(`${baseURL}/index.html`);
    await expect(page).toHaveTitle(/AutomationPro|Home/i);
  });

  test('About page loads', async ({ page }) => {
    await page.goto(`${baseURL}/about.html`);
    await expect(page.locator('h1, h2')).toContainText(/About/i);
  });

  test('Contact page form is visible', async ({ page }) => {
    await page.goto(`${baseURL}/contact.html`);
    await expect(page.locator('form')).toBeVisible();
  });

  test('Login form is visible', async ({ page }) => {
    await page.goto(`${baseURL}/login.html`);
    await expect(page.locator('input[name="username"]')).toBeVisible();
  });

  test('Register page form is visible', async ({ page }) => {
    await page.goto(`${baseURL}/register.html`);
    await expect(page.locator('form')).toBeVisible();
  });

});
