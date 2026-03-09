import { test, expect } from '@playwright/test';

const empstatus = {
  empstatus1 : "part time morning shift",
  empstatus2 : "part time evening shift",
  empstatus3 : "full shift",

}

for (let status in empstatus) {
 

test(`Verify admin can create emp status with different title using DDT - ${status}`, async ({ page }) => { //Data Driven Testing [DDT]

    //Launch URL
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //Enter Username
    await page.locator("input[name='username']").fill("Admin")
    //Enter Password
    await page.locator("input[name='password']").fill("admin123")
    //Clicking on Login button
    await page.locator("button[type='submit']").click("Login")
    //Verifying Dashboard
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    //Clicking on Admin
    await page.locator("//span[text()='Admin']").click("Admin")
    //Clicking on Job dropdown
    await page.locator("//span[normalize-space(text())='Job']").click("job")
    //Clicking on Job titles
    await page.locator("//a[normalize-space(text())='Job Titles']").click("Job Titles")
    //Click on Add button
    await page.locator("button.oxd-button.oxd-button--medium").click("+Add")
    //Entering job title
    //await page.locator("(//label[normalize-space(text())='Job Title']/following::input)[1]").fill("aaacDFGREWSTYUMSQ")

     // Generate random suffix to avoid duplicates
    const randomchars = (Math.random() + 1).toString(36).substring(7);
    const uniqueJobTitle = `${empstatus[status]}_${randomchars}`;

    // Enter Job Title with random suffix
    await page.locator("//label[text()='Job Title']/following::input[1]")
      .fill(uniqueJobTitle);

    //Entering type description
    await page.locator("textarea[placeholder='Type description here']").fill("mnbvcxzasdfghjkl")
    //Entering the Note
    await page.locator("textarea[placeholder='Add note']").fill("dgwsafsDvgsa")
    //Clicking on the Save button
    await page.locator("button[type='submit']").click("Save")
    //Clicking on Admin
    await page.locator("//span[text()='Admin']").click("Admin")
    //Clicking on Job dropdown
    await page.locator("//span[normalize-space(text())='Job']").click("job")
     //Clicking on Job titles
    await page.locator("//a[normalize-space(text())='Job Titles']").click("Job Titles")
    //verify the added Job title
    await expect(page.locator("//div[normalize-space(text())='aaacDFGREWSTYUMSQ']")).toBeVisible()
    //Close the browser after execution
    await page.close()
  })
  
  console.log(empstatus[status]);
}

