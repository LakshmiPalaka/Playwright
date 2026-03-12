import { test, expect } from '@playwright/test';
import logindata from '../../testdata/login.json';

const employees = ["Palaka", "Lakshmi", "Bharani"];

employees.forEach(element => {

    test(`Verify user can add employee using DDT_Array: ${element}`, async ({ page }) => {

        await page.goto('/web/index.php/auth/login');

        // Login
        await page.getByRole('textbox', { name: 'Username' }).fill(logindata.username);
        await page.getByRole('textbox', { name: 'Password' }).fill(logindata.password);
        await page.getByRole('button', { name: 'Login' }).click();

        // Verify Dashboard
        await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

        // Navigate to PIM
        await page.locator("//span[text()='PIM']").click();

        // Click Add Employee
        await page.getByRole('link', { name: 'Add Employee' }).click();

        // Generate random suffix
        const randomchars = (Math.random() + 1).toString(36).substring(7);

        const firstName = `${element}_${randomchars}`;
        const lastName = "Test";

        // Fill employee details
        await page.getByPlaceholder('First Name').fill(firstName);
        await page.getByPlaceholder('Last Name').fill(lastName);

        // Save employee
        await page.getByRole('button', { name: 'Save' }).click();

        // Verify Personal Details page appears
        await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();

        await page.close();

    });
});