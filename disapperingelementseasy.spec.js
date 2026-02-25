import { test, expect } from '@playwright/test';


test('Disappering elements', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/disappearing_elements');

    if(await page.locator('//li/a[text()="Gallery"]').isVisible())
    {
        await page.locator('//li/a[text()="Gallery"]').click();
        console.log("clicked on Gallery");
    }

    else 
    {
        await page.locator('//li/a[text()="Portfolio"]').click();
        console.log("clicked on Portfolio");
    }
    await page.waitForTimeout(2000);    
    await page.close();
}
)