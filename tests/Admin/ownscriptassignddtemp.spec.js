import { test, expect } from '@playwright/test';
import logindata from "./../../testdata/login.json";

const company = {

  emp1 : {firstname: "Lakshmi", lastname: "Palaka"},
  emp2 : {firstname: "Sowmya", lastname: "Palaka"},
  emp3 : {firstname: "Khashvi", lastname: "Nagireddy"},

}
for (const employee in company) {
  const empDetails = company[employee];
  test(`test for ${empDetails.firstname} ${empDetails.lastname}`, async ({ page }) => {
  await page.goto('/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(logindata.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(logindata.password);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill(empDetails.firstname);
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill(empDetails.lastname);
  await page.getByRole('textbox').nth(4).click();
  await page.getByRole('textbox').nth(4).fill('037432');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.goto('/web/index.php/pim/viewPersonalDetails/empNumber/174');
  await page.locator('div:nth-child(2) > div:nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input').click();
  await page.locator('form').filter({ hasText: 'Employee Full NameEmployee' }).getByRole('button').click();
  await page.close();
  })
  console.log(empDetails.firstname + " " + empDetails.lastname);
};

  
