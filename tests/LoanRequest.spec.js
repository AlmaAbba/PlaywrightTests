const { test, expect } = require('@playwright/test');

test('Register and request a loan ', async ({ page }) => {

    page.goto('https://parabank.parasoft.com/parabank/index.htm');

    await page.locator('#loginPanel > :nth-child(3) > a').click({ force: true })
    await page.locator('#customer\\.firstName').fill('Alma')
    await page.locator('#customer\\.lastName').fill('Abs')
    await page.locator('#customer\\.address\\.street').fill('Street 13')
    await page.locator('#customer\\.address\\.city').fill('Sarajevo')
    await page.locator('#customer\\.address\\.state').fill('Centar')
    await page.locator('#customer\\.address\\.zipCode').fill('70000')
    await page.locator('#customer\\.phoneNumber').fill('061111222')
    await page.locator('#customer\\.ssn').fill('221')
    await page.locator('#customer\\.username').fill('Anonimo')
    await page.locator('#customer\\.password').fill('almabs1')
    await page.locator('#repeatedPassword').fill('almabs1')
    await page.locator('[colspan="2"] > .button').click()

    await page.locator('#leftPanel > ul > :nth-child(7) > a').click()
    await page.locator('#amount').fill('2000000')
    await page.locator('#downPayment').fill('2000000')
    await page.locator('[colspan="2"] > .button').click()

    await expect(page.getByText(' You do not have sufficient funds for the given down payment.')).toBeVisible()


})