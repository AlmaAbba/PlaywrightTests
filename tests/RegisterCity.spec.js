const { test, expect } = require('@playwright/test');

test('Register without filling out all the input fields ', async ({ page }) => {

    page.goto('https://parabank.parasoft.com/parabank/index.htm');

    await page.locator('#loginPanel > :nth-child(3) > a').click({ force: true })
    await page.locator('#customer\\.firstName').fill('Alma')
    await page.locator('#customer\\.lastName').fill('Abs')
    await page.locator('#customer\\.address\\.street').fill('Street 13')
    await page.locator('#customer\\.address\\.state').fill('Centar')
    await page.locator('#customer\\.address\\.zipCode').fill('70000')
    await page.locator('#customer\\.phoneNumber').fill('061111222')
    await page.locator('#customer\\.ssn').fill('221')
    await page.locator('#customer\\.username').fill('l')
    await page.locator('#customer\\.password').fill('almabs1')
    await page.locator('#repeatedPassword').fill('almabs1')
    await page.locator('[colspan="2"] > .button').click()

    await expect(page.getByText(' City is required.')).toBeVisible()

})