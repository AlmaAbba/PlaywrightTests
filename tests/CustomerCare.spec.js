const { test, expect } = require('@playwright/test');

test('Customer Care', async ({ page }) => {

    await page.goto("https://parabank.parasoft.com/parabank/index.htm")
    await page.locator('//*[@id="headerPanel"]/ul[2]/li[3]/a').click()
    await page.locator('#name').fill('Alma')
    await page.locator('#email').fill('almaabs@gmail.com')
    await page.locator('#phone').fill('061234234')
    await page.locator('#message').fill(' I am having trouble logging into my account.I keep receiving an alert that an error has occured.')
    await page.locator('//*[@id="contactForm"]/table/tbody/tr[5]/td[2]/input').click()
    //const CustomerCareText = await page.locator("#rightPanel > p:nth-child(3)")
    //await expect(CustomerCareText).toBeVisible();
    await expect(page.getByText('A Customer Care Representative will be contacting you.')).toBeVisible()
    await page.close()
});