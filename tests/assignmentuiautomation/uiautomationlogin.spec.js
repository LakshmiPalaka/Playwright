// // ES Module (Modren JavaScript)

// import { test, expect } from '@playwright/test'; 
// import { LoginPage } from '../../Homework/AssignmentUIAutomation/loginuiautomation.js'; 
// import creds from '../../credentials.json' assert { type: "json" };

// CommonJS Module (default module system in node )

const { test, expect } = require('@playwright/test'); // Import the test and expect functions from Playwright
const { LoginPage } = require('../../Homework/AssignmentUIAutomation/loginuiautomation'); // Import the LoginPage class from the login automation file
const creds = require('../../credentials.json'); // Import credentials from a JSON file, which should contain valid and invalid username/password pairs


test('Login with valid credentials', async ({ page }) => {

  const loginPage = new LoginPage(page);
  await page.goto('/web/index.php/auth/login');
  await loginPage.validLogin(creds.validUsername, creds.validPassword);
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  await page.close();
});


test('Login with Invalid credentials', async ({ page }) => {

  const loginPage = new LoginPage(page);
  await page.goto('/web/index.php/auth/login');
  await loginPage.invalidLogin(creds.invalidUsername, creds.invalidPassword);
  await expect(page.getByText('Invalid credentials')).toBeVisible();
  await page.close();
});

test('Login with valid credentials & Logout from dashboard', async ({ page }) => {
  
  const loginPage = new LoginPage(page);
  await page.goto('/web/index.php/auth/login');
  await loginPage.validLogin(creds.validUsername, creds.validPassword);
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  await page.locator('span.oxd-userdropdown-tab').click();
  await page.waitForTimeout(1000);
  await page.locator('a[href*="logout"]').click();
  await page.close();
});
