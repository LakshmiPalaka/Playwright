import { test, expect } from '@playwright/test';
import ExcelJS from 'exceljs';
import path from 'path';

test('test', async ({ page }) => {

  const workbook = new ExcelJS.Workbook();

// Build file path
const filePath = path.join(process.cwd(), 'testdata', 'exceldata.xlsx');

// Load file
await workbook.xlsx.readFile(filePath);

// Get first worksheet
const sheet = workbook.getWorksheet(1);

// Read values
const Firstname = sheet.getRow(1).getCell(2).value;
const Middlename = sheet.getRow(2).getCell(2).value;
const Lastname = sheet.getRow(3).getCell(2).value;

console.log("First Name:", Firstname);
console.log("Middle Name:", Middlename);
console.log("Last Name:", Lastname);

  await page.goto('/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill("Admin");
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill("admin123");
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill(Firstname);
  await page.getByRole('textbox', { name: 'Middle Name' }).click();
  await page.getByRole('textbox', { name: 'Middle Name' }).fill(Middlename);
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill(Lastname);

  await page.waitForTimeout(5000);

  await page.getByRole('textbox').nth(4).click();
  await page.getByRole('textbox').nth(4).fill('037432');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.goto('/web/index.php/pim/viewPersonalDetails/empNumber/174');
  await page.locator('div:nth-child(2) > div:nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input').click();
  await page.locator('form').filter({ hasText: 'Employee Full NameEmployee' }).getByRole('button').click();
  await page.close();
});