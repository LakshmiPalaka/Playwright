import { test, expect } from '@playwright/test';
import logindata from '../../testdata/login.json';

const jobtitles = ["QA Engineer", "Software Developer", "Project Manager"];

for (const element of jobtitles) {

    test(`Verify job title creation: ${element}`, async ({ page }) => {

        await page.goto('/web/index.php/auth/login');

        await page.getByRole('textbox', { name: 'Username' }).fill(logindata.username);
        await page.getByRole('textbox', { name: 'Password' }).fill(logindata.password);
        await page.getByRole('button', { name: 'Login' }).click();

        await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

        await page.getByText('Admin').click();
        await page.getByText('Job').click();
        await page.getByText('Job Titles').click();

        await page.getByRole('button', { name: 'Add' }).click();

        const randomchars = (Math.random() + 1).toString(36).substring(7);
        const elementTitle = `${element}_${randomchars}`;

        const jobTitleInput = page.locator("//label[text()='Job Title']/following::input[1]");

        await jobTitleInput.waitFor({ state: 'visible' });
        await jobTitleInput.fill(elementTitle);

        await page.locator("//label[text()='Job Description']/following::textarea[1]")
            .fill("Default description");

        await page.getByRole('button', { name: 'Save' }).click();
        await expect(page.locator("div.oxd-table-card").filter({ hasText: elementTitle }))
            .toBeVisible();

    });
}




