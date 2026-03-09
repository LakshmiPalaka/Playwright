import { test, expect } from '@playwright/test';
import logindata from './../../testdata/login.json';
import objassignmentdata from './../../testdata/objassignmentjobtitle.json';

for (const jobData of objassignmentdata) {
  test(`Verify that user is able to assign job title: ${jobData.job_title}`, async ({ page }) => {
    await page.goto('/web/index.php/auth/login');

    // Login
    await page.getByRole('textbox', { name: 'Username' }).fill(logindata.username);
    await page.getByRole('textbox', { name: 'Password' }).fill(logindata.password);
    await page.getByRole('button', { name: 'Login' }).click();

    // Verify Dashboard is visible
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

    // Navigate to Job Titles
    await page.locator("//span[text()='Admin']").click();
    await page.locator("//span[normalize-space()='Job']").click();
    await page.locator("//a[normalize-space()='Job Titles']").click();

    // Click Add button
    await page.getByRole('button', { name: 'Add' }).click();

    // Generate random suffix to avoid duplicates
    const randomchars = (Math.random() + 1).toString(36).substring(7);
    const uniqueJobTitle = `${jobData.job_title}_${randomchars}`;

    // Enter Job Title with random suffix
    await page.locator("//label[text()='Job Title']/following::input[1]")
      .fill(uniqueJobTitle);

    // Enter Description (fallback if missing)
    await page.locator("textarea[placeholder='Type description here']")
      .fill(jobData.description || "Default description");

    // Save
    await page.getByRole('button', { name: 'Save' }).click();

    // Verify job title appears in list (filtered locator)
    await expect(page.locator("div.oxd-table-card").filter({ hasText: uniqueJobTitle }))
      .toBeVisible();
  });
}