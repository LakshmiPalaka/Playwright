import { test, expect } from '@playwright/test';


test('Disappering elements', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/disappearing_elements');

    const buttons = page.locator('//div[@class="example"]/ul/li/a')
    const count = await buttons.count();

    if (count == 4) {
        console.log('4 buttons are visible, clicking on portfolio');
        await page.locator("//a[text()='Portfolio']").click();
        await page.waitForTimeout(2000); 
        await page.locator("//h1[text()='Not Found']").isVisible();
        await page.goBack();
        await page.waitForTimeout(2000);
        await page.close();
    }

    else if (count == 5) {
        console.log('5 buttons are visible, clicking on gallery');
        await page.locator("//a[text()='Gallery']").click();
        await page.waitForTimeout(2000);
        await page.locator("//h1[text()='Not Found']").isVisible();
        await page.goBack();
        await page.waitForTimeout(2000);
        await page.close();
    }
    else {
        console.log('refreshing again');
        await page.reload();
        await page.waitForTimeout(2000);
        await page.close();
    }

}
)