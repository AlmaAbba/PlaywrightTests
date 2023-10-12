const { test, expect } = require('@playwright/test');

test('Add item to wish list', async ({ page }) => {

    await page.goto('https://demo-opencart.com/')
    await page.locator('a[href="https://demo-opencart.com/index.php?route=product/category&path=24"]').click()
    await page.locator('//*[@id="abc28"]/div[2]/button[2]').click()
    await expect(page.getByText(' You must login or create an account to save HTC Touch HD to your wish list!')).toBeVisible()
    await page.close()
});