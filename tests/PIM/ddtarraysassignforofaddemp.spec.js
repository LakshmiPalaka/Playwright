import { test, expect } from '@playwright/test';
import logindata from '../../testdata/login.json';

const employees = ["Palaka", "Lakshmi", "Bharani"];

for (const element of employees) {

    test(`Verify user can add employee using DDT_Array: ${element}`, async ({ page }) => {

        await page.goto('/web/index.php/auth/login');

        await page.getByRole('textbox', { name: 'Username' }).fill(logindata.username);
        await page.getByRole('textbox', { name: 'Password' }).fill(logindata.password);
        await page.getByRole('button', { name: 'Login' }).click();

        await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

        await page.getByText('PIM').click();
        await page.getByRole('link', { name: 'Add Employee' }).click();

        const randomchars = (Math.random() + 1).toString(36).substring(7);

        const firstName = `${element}_${randomchars}`;
        const lastName = "Test";

        await page.getByPlaceholder('First Name').fill(firstName);
        await page.getByPlaceholder('Last Name').fill(lastName);

        await page.getByRole('button', { name: 'Save' }).click();

        await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();

    });
}