import { test, expect } from "@playwright/test";

test("Verify page title", async ({ page }) => {

  // Open website
  await page.goto("https://practicetestautomation.com");

  // Get page title
  let title: string = await page.title();

  // Print title in console
  console.log("Page title is: " + title);

  // Verify page title
  await expect(page).toHaveTitle(
    "Practice Test Automation | Learn Selenium WebDriver"
  );

});
  //step2


  //step3
