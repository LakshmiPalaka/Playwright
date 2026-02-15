import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Job' }).click();
  await page.getByRole('menuitem', { name: 'Job Titles' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('textbox').nth(1).fill('098zxc31sdfds');
  await page.getByRole('textbox', { name: 'Type description here' }).fill('sadsfgh');
  await page.getByRole('textbox', { name: 'Add note' }).fill('sdfasdfsdf');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('SuccessSuccessfully Saved×').click({});
});