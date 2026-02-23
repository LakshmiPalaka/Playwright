import { test, expect } from '@playwright/test';


test('GreenCartSite', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
  await page.locator("(//div[@class='product-action']//button)[1]").click();
  await page.locator("(//div[@class='product-action']//button)[2]").click();
  await page.locator("//a[@class='cart-icon']//img[1]").click();
  await page.locator("//button[normalize-space(text())='PROCEED TO CHECKOUT']").click();
  await page.waitForTimeout(2000);
  await page.locator("//button[normalize-space(text())='Place Order']").click();
  await page.waitForTimeout(2000);
  await page.locator("//input[@type='checkbox']").check();
  await page.waitForTimeout(2000);
  await page.locator("//button[normalize-space(text())='Proceed']").click();
  await page.waitForTimeout(2000);
  await expect(page.locator("//div[@id='root']")).toBeVisible();
  await page.waitForTimeout(2000);
  await page.close();
})