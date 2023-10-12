const { test, expect } = require('@playwright/test');

test('Restart', async ({ page }) => {

    await page.goto("https://www.gamesforthebrain.com/game/checkers/")

    await page.locator('[name="space22"]').click()

    await page.locator('[name="space13"]').click()
    await page.waitForTimeout(3000)
    // await page.$eval('[name="space13"]', (element) => {
    //     return expect(element.getAttribute('src')).toBe('you1.gif');
    // });

    const inputElement = page.locator('[name="space13"]');
    const color = await inputElement.getAttribute('src');
    expect(color).toBe('you1.gif')


    // const srcValue2 = await page.$eval('[name="space04"]', (element) => {
    //     return element.getAttribute('src');
    // });
    // expect(srcValue).toBe('you1.gif');

    // await page.locator('[href="./"]').click()

});
