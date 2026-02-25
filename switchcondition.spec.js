import { test, expect } from '@playwright/test';


test(' run different script based on browser name', async ({ page, browserName }) => {


    switch (browserName) {

        case 'chromium':

            await page.goto("https://www.myntra.com");
            await page.close();
            console.log("Running on Chromium");
            break;

        case 'firefox':

            await page.goto("https://www.flipkart.com");
            await page.close();
            console.log("Running on Firefox");
            break;

        case 'webkit':

            await page.goto("https://www.amazon.com");
            await page.close();
            console.log("Running on WebKit");
            break;

        default:
            console.log("Running on an unknown browser");
    }
})
