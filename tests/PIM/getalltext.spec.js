import { test, expect } from '@playwright/test';

const credentials = ["Admin", "admin123"];


test('get all text contents', async ({ page }) => {
    await page.goto('/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill(credentials[0]);
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill(credentials[1]);
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL('/web/index.php/dashboard/index');
    // await page.waitForTimeout(2000);
    // await page.waitForLoadState();
    // Wait for the menu items to appear
    await page.locator('//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"]').first().waitFor();
    const menuitems = await page.locator('//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"]').allTextContents();
    console.log(menuitems);
    console.log(menuitems[3]);
    console.log(menuitems.length);
    await page.close();
})