import { test, expect } from '@playwright/test';


test('test', async ({ page }) => {
  await page.goto('/web/index.php/auth/login');
  await page.locator('//input[@name="username"]').fill("Admin");
  await page.locator('//input[@name="password"]').fill("admin123");
  await page.locator('//button[@type="submit"]').click();
  await page.waitForTimeout(3000);
  await page.close();
})