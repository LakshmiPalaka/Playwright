import { test, expect } from '@playwright/test';


test('GreenCartSite', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');

  const vegitem1 = 'Brocolli - 1 Kg'

  const vegitem2 = 'Cauliflower - 1 Kg'

  await page.locator(`//h4[text()='${vegitem1}']/../div[3]/button`).click();
  await page.locator(`//h4[text()='${vegitem2}']/../div[3]/button`).click();
  await page.locator('//div/table/tbody/tr[2]/td[3]/strong').click();

  const vegitem1price = await page.locator(`//h4[text()='${vegitem1}']/../p`).textContent();
  const vegitem2price = await page.locator(`//h4[text()='${vegitem2}']/../p`).textContent();
  const totalprice = await page.locator('//div/table/tbody/tr[2]/td[3]/strong').textContent();

  console.log("Price of Brocolli = " + vegitem1price);
  console.log("Price of Cauliflower = " + vegitem2price);
  console.log("Total Price added to Cart = " + totalprice);

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