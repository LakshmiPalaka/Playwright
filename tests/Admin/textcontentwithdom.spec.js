import { test, expect } from '@playwright/test';

test(`working with text content DOM`, async ({ page }) => {

    await page.goto('/web/index.php/auth/login');

    const usernametext = await page.locator('').textContent();
    console.log(usernametext);

    const username = usernametext.split(':')[2];

    const passwordtext = await page.locator('').textContent();
    console.log(passwordtext);

    
    const password = passwordtext.split(':')[2];

    // Entering the username and password
    await page.getByRole('textbox', { name: 'Username' }).fill(username);
    await page.getByRole('textbox', { name: 'Password' }).fill(password);

    await page.keyboard.press('Enter');
});