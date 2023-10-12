const { test, expect } = require('@playwright/test');

test('Buy Item', async ({ page }) => {

    await page.goto('https://demo-opencart.com/')
    await page.locator('#top-links > ul > li.dropdown > a > i').click()
    await page.locator('#top-links > ul > li.dropdown.open > ul > li:nth-child(2) > a').click()

    await page.getByPlaceholder('E-Mail Address').fill('skljskljphen@yopmail.com')
    await page.getByPlaceholder('Password').fill('123456')
    await page.locator('#content > div > div:nth-child(2) > div > form > input').click()
    await page.locator('.nav > :nth-child(6) > a').click()
    await page.locator('[onclick="addTocarts28();"] > .fa').click()
    await page.locator('#cart-total').click()
    await page.locator('[href="https://demo-opencart.com/index.php?route=checkout/checkout"] > strong').click()
    await page.locator('#button-payment-address').click()
    await page.locator('#button-shipping-address').click()
    await page.locator('#button-shipping-method').click()
    await page.locator('[type="checkbox"]').click()
    await page.locator('#button-payment-method').click()
    await page.locator('#button-confirm').click()
    await page.locator('.dropdown > .dropdown-toggle > .fa').click()
    await page.locator('.dropdown-menu > :nth-child(5) > a').click()
    await page.locator('.pull-right > .btn').click()


});