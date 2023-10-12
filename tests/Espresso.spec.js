const { test, expect } = require('@playwright/test');

test('Remove Items from Cart', async ({ page }) => {

    await page.goto('https://coffee-cart.netlify.app/')
    await page.locator('[data-cy="Espresso"]').click()
    await page.locator('[data-cy="Cappuccino"]').click()
    await page.locator('[data-cy="Cappuccino"]').click()
    await page.locator('.yes').click()
    //await elementHandle.hover('[data-test="checkout"]');
    const elementLocator = page.locator('[data-test="checkout"]');
    await elementLocator.hover();
    await page.locator('[aria-label="Remove one Espresso"]').click()
    await page.locator('[aria-label="Remove one Cappuccino"]').click()
    await page.locator('[aria-label="Remove one Cappuccino"]').click()
    await page.locator('[aria-label="Remove one (Discounted) Mocha"]').click()
});